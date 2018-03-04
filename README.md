# Affiliate
Affiliate is a platform agnostic link affiliator. Simplify affiliating links with automatic affiliation in the browser. Affiliate works with libraries that mutate the DOM after the page loads, including React.

## Installation

```bash
$ npm i -S affiliate
$ yarn add affiliate
$ bower install -S affiliate
```

Or use the Unpkg CDN
```html
<script src="https://unpkg.com/affiliate@latest/dist/affiliate.js"></script>
```

## What It Can Do

Affiliate can modify the following link into any of the others.
```html
<a href="https://example.com/shop/product/item-id">Original</a>
```

```html
<a href="https://example.com/shop/product/item-id?ref=my-tag">New Query Tags</a>
<a href="https://example.com/shop/product/item-id/ref/my-tag">Modified URL Path</a>
<a href="https://my-tag.example.com/shop/product/item-id">Modified Host Name</a>
```

Affiliate has easy [plugins](https://affiliate.js.org/plugins), such as one for [Amazon](https://affiliate.js.org/plugins/amazon), which simplify adding affiliate links even more.

## Basic Setup

Read [the documentation](https://affiliate.js.org/) for more advanced usage.

```js
// var Affiliate = require('affiliate');
var aff = Affiliate({
    tags: [
        {
            hosts: ['example.com', 'www.example.com'],
            query: {
                ref: 'my-tag' // ?ref=my-tag
            }
        },
        {
            hosts: ['example.org', 'shop.example.org'],
            query: {
                tag: 'my-tag2' // ?tag=my-tag2
            }
        }
    ]
});
aff.attach();
```

## Documentation

Affiliate is simple and quick to set up, even for more complex usage. Read the docs at: [affiliate.js.org](https://affiliate.js.org/).

## Testing

Affiliate is tested using Jasmine. The test of the minified packages is available [here](https://affiliate.js.org/test/index.html) and the webpack package [here](https://affiliate.js.org/test/webpack.html).

### Big Thanks

[![Sauce Labs](https://affiliate.js.org/test/sauce/saucelabs.png)](https://saucelabs.com/)

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com/)!

## License

MIT (C) [Russell Steadman](https://teamtofu.github.io/contact). Learn more in the [LICENSE](https://github.com/teamtofu/affiliate/blob/master/LICENSE) file.

## Support Me

Like this project? Buy me a [cup of coffee](https://www.paypal.me/RussellSteadman/3). &#x2615; Here are more of my [projects](https://teamtofu.github.io/).