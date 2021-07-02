# Affiliate

Affiliate is a platform agnostic link affiliator. Simplify affiliating links with automatic affiliation in the browser. Affiliate works with libraries that mutate the DOM after the page loads, including React.

[![🌟 Star me on Github](https://badgen.net/github/stars/russellsteadman/affiliate)](https://github.com/russellsteadman/affiliate) [![Download via NPM](https://badgen.net/npm/dt/affiliate)](https://www.npmjs.com/package/affiliate) [![Use via CDN](https://badgen.net/jsdelivr/hits/npm/affiliate)](https://www.jsdelivr.com/package/npm/affiliate) [![Bundle small when minified](https://badgen.net/bundlephobia/min/affiliate)](https://bundlephobia.com/result?p=affiliate) [![Bundle small when minified and gunzipped](https://badgen.net/bundlephobia/minzip/affiliate)](https://bundlephobia.com/result?p=affiliate)

## Installation

Use NPM or Yarn

```bash
$ npm install --save affiliate
$ yarn add affiliate
```

Or use a CDN ([check out the codeless setup](#blogs-and-related-sites))

```html
<!-- Replace 3.0.0 with your intended version -->
<script src="https://cdn.jsdelivr.net/npm/affiliate@3.0.0/dist/affiliate.js"></script>
```

## What It Can Do

Affiliate can modify query tags (e.g. setting `?tag=my-tag`, which is the most common method for affiliate tags), modify URL paths, and modify host names.

```html
<a href="https://example.com/shop/product/item-id">Original</a>
```

```html
<a href="https://example.com/shop/product/item-id?ref=my-tag">New Query Tags</a>
<a href="https://example.com/shop/product/item-id/ref/my-tag"
  >Modified URL Path</a
>
<a href="https://my-tag.example.com/shop/product/item-id">Modified Host Name</a>
```

Affiliate has easy [plugins](https://affiliate.js.org/plugins), including one for [Amazon](https://affiliate.js.org/plugins/amazon), which simplify adding affiliate links even more.

## Basic Setup

Read **[the documentation](https://affiliate.js.org/)** for more advanced usage.

```js
const Affiliate = require('affiliate');
const aff = Affiliate.create({
  tags: [
    {
      hosts: ['example.com', 'www.example.com'],
      query: {
        ref: 'my-tag', // This means ?ref=my-tag
      },
    },
    {
      hosts: ['example.org', 'shop.example.org'],
      query: {
        tag: 'my-tag2', // This means ?tag=my-tag2
      },
    },
  ],
});
aff.attach();
```

## Documentation

Affiliate is simple and quick to set up, even for more complex usage. Read the docs at: **[affiliate.js.org](https://affiliate.js.org/)**.

### Blogs and Related Sites

A simplified codeless solution might better suit some blogging-style sites.

Insert this code within the HTML `<head>...</head>` tag. The contents of the `data-aff` attribute will tell Affiliate what to do.

```html
<!-- Replace 2.0 with your intended version -->
<script
  data-aff="amazon.com, www.amazon.com : tag = MY-AMAZON-TAG"
  src="https://cdn.jsdelivr.net/npm/affiliate@3.0/dist/affiliate.js"
  async
  id="aff-js"
></script>
```

#### data-aff Syntax

The syntax for data-aff is a comma separated list of domains, a colon, and then comma separated list of url queries in the format `key=value`. Multiple website groups can be separated by an exclamation mark.

```
amazon.com, www.amazon.com : tag = MY-AMAZON-TAG ! example.com, shop.example.com : ref = MY-OTHER-TAG
```

## Left with Questions?

If for any reason you feel that this documentation is unclear or incomplete, [add an issue](https://github.com/russellsteadman/affiliate/issues/new) detailing what needs to be improved. It will be addressed quickly.

## Star This Project

Like this project? Let me know by [putting a star on it](https://github.com/russellsteadman/affiliate). &#x1f609;&#x1f31f;

## License

MIT (C) [Russell Steadman](https://www.russellsteadman.com/?utm_source=aff_repo&utm_medium=readme_copy). Learn more in the [LICENSE](https://github.com/russellsteadman/affiliate/blob/master/LICENSE) file.
