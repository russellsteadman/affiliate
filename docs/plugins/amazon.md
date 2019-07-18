# AffiliatePluginAmazon
This plugin automatically affiliates Amazon URLs based upon locality.

## Affiliate Main Package

Make sure [Affiliate](https://affiliate.js.org/) is already installed. Read the documentation [here](https://affiliate.js.org/).

## Installation

```bash
$ npm install --save affiliate affiliate-plugin-amazon
$ yarn add affiliate affiliate-plugin-amazon
```

Or use a CDN
```html
<!-- Replace 2.0.3 and 2.0.0 with your intended versions -->
<script src="https://cdn.jsdelivr.net/combine/npm/affiliate@2.0.3/dist/affiliate.js,npm/affiliate-plugin-amazon@2.0.0/dist/plugin.js"></script>
```

## What It Can Do

Affiliate can modify the following link into any of the others.
```html
<a href="https://www.amazon.co.jp/dp/B01MRZFBBH">Japan</a>
<a href="https://www.amazon.com/dp/B01MRZFBBH">USA</a>
<a href="https://www.amazon.de/dp/B01MRZFBBH">Germany</a>
<a href="https://www.amazon.co.uk/dp/B01MRZFBBH">UK</a>
```

All links would become (if the user's primary language is Italian):
```html
<a href="https://www.amazon.it/dp/B01MRZFBBH?tag=italian-tag">My Locality</a>
```

Or url modification can be disabled:
```html
<a href="https://www.amazon.co.jp/dp/B01MRZFBBH?tag=jp-tag">Japan</a>
<a href="https://www.amazon.com/dp/B01MRZFBBH?tag=us-tag">USA</a>
<a href="https://www.amazon.de/dp/B01MRZFBBH?tag=de-tag">Germany</a>
<a href="https://www.amazon.co.uk/dp/B01MRZFBBH?tag=gb-tag">UK</a>
```

## Documentation

```js
const Affiliate = require('affiliate'); 
const AffiliatePluginAmazon = require('affiliate-plugin-amazon'); 

let amazonAff = AffiliatePluginAmazon(Affiliate, {
    tags: {
        us: '', // for USA, required
        gb: '', // for UK
        de: '', // for Germany
        fr: '', // for France
        jp: '', // for Japan
        ca: '', // for Canada
        cn: '', // for China
        it: '', // for Italy
        es: '', // for Spain
        in: '', // for India
        br: '', // for Brazil
        mx: '' // for Mexico
    },
    debug: false, // verbose logging into the console, default off
    locale: null, // manually set the country code of the browser, default automatic
    modifyDomain: true // modify domains like amazon.com to amazon.co.uk based on locale, default on
});

// amazonAff is now an Affiliate instance

amazonAff.attach(); // this will start affiliation
```

## License

MIT (C) [Russell Steadman](https://www.russellsteadman.com/?utm_source=aff_amz_repo&utm_medium=copyright). Learn more in the [LICENSE](https://github.com/teamtofu/affiliate-plugin-amazon/blob/master/LICENSE) file.