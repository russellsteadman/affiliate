# Affiliate

Affiliate is a platform agnostic link affiliator. Simplify affiliating links with automatic affiliation in the browser. Affiliate works with libraries that mutate the DOM after the page loads, including React.

[![🌟 Star me on Github](https://badgen.net/github/stars/russellsteadman/affiliate)](https://github.com/russellsteadman/affiliate) [![Download via NPM](https://badgen.net/npm/dt/affiliate)](https://www.npmjs.com/package/affiliate) [![Use via CDN](https://badgen.net/jsdelivr/hits/npm/affiliate)](https://www.jsdelivr.com/package/npm/affiliate) [![Bundle small when minified](https://badgen.net/bundlephobia/min/affiliate)](https://bundlephobia.com/result?p=affiliate) [![Bundle small when minified and gunzipped](https://badgen.net/bundlephobia/minzip/affiliate)](https://bundlephobia.com/result?p=affiliate)

## Installation

Use NPM or Yarn

```bash
$ npm install affiliate
$ yarn add affiliate
```

Or use a CDN ([check out the codeless setup](#blogs-and-related-sites))

```html
<script src="https://cdn.jsdelivr.net/npm/affiliate@5/dist/web/affiliate.web.js"></script>
```

The precompiled version of `affiliate@5` supports modern browsers (i.e. `ES2016` or above) by default.

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
import Affiliate from 'affiliate';

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

## Blogs and Related Sites

A simplified codeless solution might better suit some sites that use content module systems, such as WordPress, SquareSpace, etc.

Insert this code within the HTML `<head>...</head>` tag. The contents of the `data-auto-affiliate` attribute will tell Affiliate what to do.

```html
<script
  data-auto-affiliate="WHERE amazon.com, www.amazon.com SET tag = MY-AMAZON-TAG"
  src="https://cdn.jsdelivr.net/npm/affiliate@4/dist/web/affiliate.web.js"
  async
  id="aff-js"
></script>
```

### data-auto-affiliate Syntax

The syntax for data-auto-affiliate is capital `WHERE`, a comma separated list of domains, capital `SET`, and then comma separated list of URL queries in the format `key=value`. Multiple website groups can be separated by a capital `AND`.

```sql
WHERE amazon.com, www.amazon.com SET tag = MY-AMAZON-TAG AND WHERE example.com, shop.example.com SET ref = MY-OTHER-TAG
```

## Left with Questions?

If for any reason you feel that this documentation is unclear or incomplete, [add an issue](https://github.com/russellsteadman/affiliate/issues/new) detailing what needs to be improved.

## Star This Project

Like this project? Let me know by [putting a star on it](https://github.com/russellsteadman/affiliate). &#x1f609;&#x1f31f;

## License

MIT (C) [Russell Steadman](https://www.russellsteadman.com/?utm_source=aff_repo&utm_medium=readme_copy). Learn more in the [LICENSE](https://github.com/russellsteadman/affiliate/blob/main/LICENSE) file.
