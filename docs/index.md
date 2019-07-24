# Affiliate
Affiliate is a platform agnostic link affiliator. Simplify affiliating links with automatic affiliation in the browser. Affiliate works with libraries that mutate the DOM after the page loads, including React.

[![&#x1f31f; Star me on Github](https://badgen.net/github/stars/teamtofu/affiliate)](https://github.com/teamtofu/affiliate) [![Download via NPM](https://badgen.net/npm/dt/affiliate)](https://www.npmjs.com/package/affiliate) [![Use via CDN](https://badgen.net/jsdelivr/hits/npm/affiliate)](https://www.jsdelivr.com/package/npm/affiliate) [![Bundle small when minified](https://badgen.net/bundlephobia/min/affiliate)](https://bundlephobia.com/result?p=affiliate) [![Bundle small when minified and gunzipped](https://badgen.net/bundlephobia/minzip/affiliate)](https://bundlephobia.com/result?p=affiliate)

## Installation

```bash
$ npm install --save affiliate
$ yarn add affiliate
```

Or use a CDN
```html
<!-- Replace 3.0.0 with your intended version -->
<script src="https://cdn.jsdelivr.net/npm/affiliate@3.0.0/dist/affiliate.js"></script>
```

## Configuration

```js
const Affiliate = require('affiliate'); // window.Affiliate if using a CDN
const aff = Affiliate.create({
    log: true, // enable logging
    tags: [
        {
            hosts: ['example.com', 'www.example.com'], // a list of applicable hosts
            query: {
                ref: 'my-tag' // will output a url with ?ref=my-tag
            },
            replace: [
                {
                    from: 'ref-tag', // will replace ref-tag in all urls with my tag
                    to: 'my-tag'
                },
                {
                    from: /ref-regex/g, // regular expressions are supported
                    to: 'my-tag'
                }
            ],
            modify: function (url) { // a function that directly modifies the URL
                url.set('pathname', url.pathname + '-tag');
                url.set('hostname', url.hostname + '.rdr.example.com');
                return url;
            }
        }
    ]
});
aff.attach();
```

After passing the configuration to Affiliate, it will search the DOM and automatically and change links. Then whenever the DOM is modified, it will search through the modifications and change those links for no-hassle affiliation.

#### config.log

A boolean of whether or not to enable verbose logging.

#### config.tags[].hosts

An array of the hosts to match.

#### config.tags[].query

An object to update the query of the url.

#### config.tags[].replace

An array of objects with a `from` key that is a regex or string and a `to` key that is the value that will replace the `from` key.

#### config.tags[].modify

This exposes an instance of the [`url-parse`](https://www.npmjs.com/package/url-parse#usage) library. This can be used to update individual parts of the URL, such as the hostname or hash. It expects the instance or a URL string to be returned.

## Affiliate API

```js
const Affiliate = require('affiliate');

let newInstance = Affiliate.create(config); // creates a new Affiliate instance
let instances = Affiliate.instances; // an array of all instances
Affiliate.detachAll(); // stops all instances from making automatic changes
Affiliate.revert(); // detaches all instances and reverts all urls

newInstance.attach(); // begins listening to DOM events
newInstance.detach(); // stops listening to DOM events
```

## Example

```js
const Affiliate = require('affiliate'); // window.Affiliate if using a CDN
let aff = Affiliate.create({
    log: false,
    tags: [
        {
            hosts: ['amazon.com', 'www.amazon.com'],
            query: {
                ref: 'my-amazon-tag-20'
            }
        }
    ]
});
aff.attach();
```

```html
You should try the <a href="https://www.amazon.com/dp/B00ADG744Q">Chocolate Passport</a>.
```

Will become...
```html
You should try the <a href="https://www.amazon.com/dp/B00ADG744Q?ref=my-amazon-tag-20">Chocolate Passport</a>.
```

### Blogs and Related Sites

A simplified codeless solution might better suit some blogging-style sites.

Insert this code into the page `<head>`. The contents of the `data-aff` attribute will tell Affiliate what to do.
```html
<!-- Replace 3.0 with your intended version -->
<script data-aff="amazon.com, www.amazon.com : tag = MY-AMAZON-TAG" src="https://cdn.jsdelivr.net/npm/affiliate@3.0/dist/affiliate.js" async id="aff-js"></script>
```

#### data-aff Syntax
The syntax for data-aff is a comma separated list of domains, a colon, and then comma separated list of url queries in the format `key=value`. Multiple website groups can be separated by an exclamation mark.
```
amazon.com, www.amazon.com : tag = MY-AMAZON-TAG ! example.com, shop.example.com : ref = MY-OTHER-TAG
```

## Plugins

Plugins make some more complex affiliation tasks super simple. Check out a list [here](https://affiliate.js.org/plugins), and [learn to make your own](https://affiliate.js.org/plugins).

## Left with Questions?

If for any reason you feel that this documentation is unclear or incomplete, [add an issue](https://github.com/teamtofu/affiliate/issues/new) detailing what needs to be improved. It will be addressed quickly.

## Star This Project

Like this project? Let me know by [putting a star on it](https://github.com/teamtofu/affiliate). &#x1f609;&#x1f31f;

## License

MIT (C) [Russell Steadman](https://www.russellsteadman.com/?utm_source=aff_repo&utm_medium=index_copy). Learn more in the [LICENSE](https://github.com/teamtofu/affiliate/blob/master/LICENSE) file.