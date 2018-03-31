# Affiliate
Affiliate is a platform agnostic link affiliator. Simplify affiliating links with automatic affiliation in the browser. Affiliate works with libraries that mutate the DOM after the page loads, including React.

[![NPM](https://nodei.co/npm/affiliate.png)](https://www.npmjs.com/package/affiliate)

[![&#x1f31f; Star me on Github](https://img.shields.io/github/stars/teamtofu/affiliate.svg)](https://github.com/teamtofu/affiliate) [![Download via NPM](https://img.shields.io/npm/dt/affiliate.svg)](https://www.npmjs.com/package/affiliate) [![Bundle small when minified](https://img.shields.io/bundlephobia/min/affiliate.svg)](https://www.npmjs.com/package/affiliate) [![Bundle small when minified and gunzipped](https://img.shields.io/bundlephobia/minzip/affiliate.svg)](https://www.npmjs.com/package/affiliate)

## Installation

```bash
$ npm i -S affiliate
$ yarn add affiliate
$ bower install -S affiliate
```

Or Use A CDN
```html
<script src="https://cdn.jsdelivr.net/npm/affiliate/dist/affiliate.js"></script>
```

## Configuration

```js
var Affiliate = require('affiliate'); // window.Affiliate if not using webpack or browserify
var aff = Affiliate({
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
            modifyPath: function (path) { // a function that returns a new path
                return path + '-tag';
            },
            modifyHost: function (host) { // a function that returns a new host
                return host.split(':')[0] + '.rdr.example.com';
            }
        }
    ]
});
aff.attach();
```

After passing the configuration to Affiliate, it will search the DOM and automatically and change links. Then whenever the DOM is modified, it will search through the modifications and change those links for no-hassle affiliation.

## Affiliate API

```js
var Affiliate = require('affiliate');

var newInstance = Affiliate(config); // creates a new Affiliate instance
var instances = Affiliate.instances(); // returns an array of all instances
Affiliate.detachAll(); // stops all instances from making automatic changes
Affiliate.revert(); // detaches all instances and reverts all urls

newInstance.attach(); // begins listening to DOM events
newInstance.detach(); // stops listening to DOM events
newInstance.observer // the MutationObserver used by the instance
```

## Example

```js
var Affiliate = require('affiliate'); // window.Affiliate if not using webpack or browserify
var config = {
    log: false,
    tags: [
        {
            hosts: ['amazon.com', 'www.amazon.com'],
            query: {
                ref: 'my-amazon-tag-20'
            }
        }
    ]
};
var aff = Affiliate(config);
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

A simplified code-less solution might better suit some blogging-style sites.

Insert this code into the page `<head>`. The contents of the `data-aff` attribute will tell Affiliate what to do.
```html
<script data-aff="amazon.com, www.amazon.com : tag = MY-AMAZON-TAG" src="https://cdn.jsdelivr.net/npm/affiliate@1.2/dist/affiliate.js" async id="aff-js"></script>
```

#### data-aff Syntax
The syntax for data-aff is a comma separated list of domains, colon, then comma separated list of tags in the format `key=value`. Multiple website groups can be separated by an exclamation mark.
```
amazon.com, www.amazon.com : tag = MY-AMAZON-TAG ! example.com, shop.example.com : ref = MY-OTHER-TAG
```

## Plugins

Plugins make some more complex affiliation tasks super simple. Check out a list [here](https://affiliate.js.org/plugins), and [learn to make your own](https://affiliate.js.org/plugins).

## Testing

Affiliate is tested using Jasmine. The test of the minified packages is available [here](/test/index.html) and the webpack package [here](/test/webpack.html).

### Big Thanks

[![Sauce Labs](https://affiliate.js.org/test/sauce/saucelabs.png)](https://saucelabs.com/)

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com/)!

## Star This Project

If you like it then you gotta [put a star on it](https://github.com/teamtofu/affiliate). &#x1f609;&#x1f31f;

## License

MIT (C) [Russell Steadman](https://teamtofu.github.io/contact). Learn more in the [LICENSE](https://github.com/teamtofu/affiliate/blob/master/LICENSE) file.

## Support Me

Like this project? Buy me a [cup of coffee](https://www.paypal.me/RussellSteadman/3). &#x2615; Here are more of my [projects](https://teamtofu.github.io/).