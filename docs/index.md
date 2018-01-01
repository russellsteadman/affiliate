# Affiliate
Affiliate is a platform agnostic link affiliator. Simplify affiliating links with automatic affiliation in the browser. Affiliate works with libraries that mutate the DOM after the page loads, including React.

## Installation

With NPM
```bash
$ npm i -S affiliate
```

With Yarn
```bash
$ yarn add affiliate
```

With a CDN
```html
<script src="https://unpkg.com/affiliate@latest/dist/affiliate.js"></script>
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
                return host + '.rdr.example.com';
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

## License

MIT (C) Russell Steadman

## Support Me

Like this project? Buy me a [cup of coffee](https://www.paypal.me/RussellSteadman/3). ;)