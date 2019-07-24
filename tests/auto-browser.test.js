/* global test expect beforeAll page */

require('core-js/stable');
require('regenerator-runtime/runtime');

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
let Affiliate = '';

beforeAll(async () => {
    await new Promise((res, rej) => webpack(require('../config/webpack.config'), (err, stats) => {
        if (err || stats.hasErrors()) rej(new Error('Could not compile Affiliate'));

        Affiliate = fs.readFileSync(path.join(__dirname, '../dist/affiliate.js')).toString('utf8');
        res();
    }));
}, 10000);

const LANDING_PAGE = 'https://example.com/';
const UTILITIES = `
window.optionOne = {
    log: true,
    tags: [
        {
            hosts: ['example.com', 'www.example.com'],
            query: {
                ref: 'my-tag'
            },
            replace: [
                {
                    from: 'ref-tag',
                    to: 'my-tag'
                },
                {
                    from: /ref-regex/g,
                    to: 'my-tag'
                }
            ],
            modify: function (url) {
                url.set('pathname', url.pathname + '-tag');
                url.set('hostname', 'tst.' + url.hostname);
                return url;
            }
        }
    ]
};

window.optionTwo = {
    log: true,
    tags: [
        {
            hosts: ['example.org', 'shop.example.org'],
            query: {
                tag: 'my-tag2'
            },
            replace: [
                {
                    from: 'ref-tag2',
                    to: 'my-tag2'
                },
                {
                    from: /ref-regex/g,
                    to: 'my-tag2'
                }
            ],
            modify: function (url) {
                url.set('pathname', url.pathname + '-tag2');
                url.set('hostname', 'tst2.' + url.hostname);
                return url;
            }
        }
    ]
};

window.createLink = function (href) {
    var a = document.createElement('a');
    a.setAttribute('href', href);
    document.body.appendChild(a);
    return a;
};
`;

test("Generator has correct types", async () => {
    await page.goto(LANDING_PAGE);
    await page.addScriptTag({content: Affiliate});
    expect(await page.evaluate(`typeof window.Affiliate`)).toBe('object');
    expect(await page.evaluate(`typeof window.Affiliate.instances`)).toBe('object');
    expect(await page.evaluate(`typeof window.Affiliate.detachAll`)).toBe('function');
    expect(await page.evaluate(`typeof window.Affiliate.revert`)).toBe('function');
});

test("Instance has correct types", async () => {
    await page.goto(LANDING_PAGE);
    await page.addScriptTag({content: Affiliate});
    await page.evaluate(UTILITIES);

    await page.evaluate(`let aff = Affiliate.create(optionOne);`);

    expect(await page.evaluate(`typeof aff.attach`)).toBe('function');
    expect(await page.evaluate(`typeof aff.detach`)).toBe('function');

    await page.evaluate(`delete window.Affiliate`);
    await page.addScriptTag({content: Affiliate});

    await page.evaluate(`
        aff = Affiliate.create(optionOne);
        aff.attach();
        aff.detach();
        Affiliate.revert();
    `);
});

test("Instance can mutate links", async () => {
    await page.goto(LANDING_PAGE);
    await page.addScriptTag({content: Affiliate});
    await page.evaluate(UTILITIES);

    await page.evaluate(`
        let link = createLink('https://www.example.com/ref-regex/');
        let linkTwo = createLink('https://example.org/ref-regex/');
        let linkThree = createLink('https://www.example.com/ref-regex/?ab=c#fun');
        aff = Affiliate.create(optionOne);
        aff.attach();
    `);

    expect(await page.evaluate(`link.getAttribute('href')`)).toBe('https://tst.www.example.com/my-tag/-tag?ref=my-tag');
    expect(await page.evaluate(`linkTwo.getAttribute('href')`)).toBe('https://example.org/ref-regex/');
    expect(await page.evaluate(`linkThree.getAttribute('href')`)).toBe('https://tst.www.example.com/my-tag/-tag?ab=c&ref=my-tag#fun');

    await page.evaluate(`Affiliate.revert()`);
    expect(await page.evaluate(`link.getAttribute('href')`)).toBe('https://www.example.com/ref-regex/');
    expect(await page.evaluate(`linkTwo.getAttribute('href')`)).toBe('https://example.org/ref-regex/');
    expect(await page.evaluate(`linkThree.getAttribute('href')`)).toBe('https://www.example.com/ref-regex/?ab=c#fun');

    await page.evaluate(`
        link = createLink('https://example.com/ref-regex/');
        linkTwo = createLink('https://shop.example.org/ref-regex/');
        aff = Affiliate.create(optionTwo);
        aff.attach();
        linkThree = createLink('https://shop.example.org/ref-regex/');
    `);

    expect(await page.evaluate(`link.getAttribute('href')`)).toBe('https://example.com/ref-regex/');
    expect(await page.evaluate(`linkTwo.getAttribute('href')`)).toBe('https://tst2.shop.example.org/my-tag2/-tag2?tag=my-tag2');
    expect(await page.evaluate(`linkThree.getAttribute('href')`)).toBe('https://tst2.shop.example.org/my-tag2/-tag2?tag=my-tag2');

    await page.evaluate(`Affiliate.revert()`);
    expect(await page.evaluate(`link.getAttribute('href')`)).toBe('https://example.com/ref-regex/');
    expect(await page.evaluate(`linkTwo.getAttribute('href')`)).toBe('https://shop.example.org/ref-regex/');
});

test("Instance can use data-aff", async () => {
    await page.goto(LANDING_PAGE);
    await page.evaluate(UTILITIES);

    await page.evaluate(`
        window.link = createLink('https://amazon.com/ref-regex/');
        window.linkTwo = createLink('https://www.amazon.com/ref-regex/?ab=c');
        window.linkThree = createLink('https://other.amazon.com/ref-regex/'); 
    `);

    let document = await page.evaluateHandle('document');

    await page.evaluate((document, Affiliate) => {
        var script = document.createElement('script');
        script.setAttribute('data-aff', 'amazon.com, www.amazon.com : tag = my-amz-tag');
        script.setAttribute('id', 'aff-js');
        script.setAttribute('async', '');
        script.innerHTML = Affiliate;
        document.head.appendChild(script);
    }, document, Affiliate);

    document.dispose();

    expect(await page.evaluate(`window.link.getAttribute('href')`)).toBe('https://amazon.com/ref-regex/?tag=my-amz-tag');
    expect(await page.evaluate(`window.linkTwo.getAttribute('href')`)).toBe('https://www.amazon.com/ref-regex/?ab=c&tag=my-amz-tag');
    expect(await page.evaluate(`window.linkThree.getAttribute('href')`)).toBe('https://other.amazon.com/ref-regex/');
});