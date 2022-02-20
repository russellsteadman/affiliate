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
<script src="https://cdn.jsdelivr.net/npm/affiliate@4/dist/web/affiliate.web.js"></script>
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

## Configuration

```js
import Affiliate from 'affiliate'; // window.Affiliate is automatically accessible if using a CDN

const aff = Affiliate.create({
  log: true, // enable logging
  tags: [
    {
      hosts: ['example.com', 'www.example.com'], // a list of applicable hosts
      query: {
        ref: 'my-tag', // will output a url with ?ref=my-tag
      },
      replace: [
        {
          from: 'ref-tag', // will replace ref-tag in all urls with my tag
          to: 'my-tag',
        },
        {
          from: /ref-regex/g, // regular expressions are supported
          to: 'my-tag',
        },
      ],
      modify: function (url) {
        // a function that directly modifies the URL
        url.set('pathname', url.pathname + '-tag');
        url.set('hostname', url.hostname + '.rdr.example.com');
        return url;
      },
    },
  ],
});

aff.attach();
```

After passing the configuration to Affiliate, it will search the DOM and automatically and change links. Then whenever the DOM is modified, it will search through the modifications and change those links for no-hassle affiliation.

### config.log

A boolean of whether or not to enable verbose logging.

### config.tags[].hosts

An array of the hosts to match.

### config.tags[].query

An object to update the query of the url.

### config.tags[].replace

An array of objects with a `from` key that is a regex or string and a `to` key that is the value that will replace the `from` key.

### config.tags[].modify

This exposes a `URL` instance. This can be used to update individual parts of the URL, such as the hostname or hash. It expects the `URL` instance or a URL string to be returned.

## Affiliate API

```js
import Affiliate from 'affiliate';

let newInstance = Affiliate.create(config); // creates a new Affiliate instance
let instances = Affiliate.instances; // an array of all instances
Affiliate.detachAll(); // stops all instances from making automatic changes
Affiliate.revert(); // detaches all instances and reverts all urls

newInstance.attach(); // begins listening to DOM events
newInstance.detach(); // stops listening to DOM events
```

## Example

```js
import Affiliate from 'affiliate'; // window.Affiliate if using a CDN

const aff = Affiliate.create({
  log: false,
  tags: [
    {
      hosts: ['amazon.com', 'www.amazon.com'],
      query: {
        ref: 'my-amazon-tag-20',
      },
    },
  ],
});

aff.attach();
```

```html
You should try the
<a href="https://www.amazon.com/dp/B00ADG744Q">Chocolate Passport</a>.
```

Will become...

```html
You should try the
<a href="https://www.amazon.com/dp/B00ADG744Q?ref=my-amazon-tag-20">
  Chocolate Passport
</a>
.
```

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

## Plugins

Plugins make some more complex affiliation tasks super simple. Check out a list [here](https://affiliate.js.org/plugins), and [learn to make your own](https://affiliate.js.org/plugins).

## Left with Questions?

If for any reason you feel that this documentation is unclear or incomplete, [add an issue](https://github.com/russellsteadman/affiliate/issues/new) detailing what needs to be improved.

## Star This Project

Like this project? Let me know by [putting a star on it](https://github.com/russellsteadman/affiliate). &#x1f609;&#x1f31f;

## License

MIT (C) [Russell Steadman](https://www.russellsteadman.com/?utm_source=aff_repo&utm_medium=readme_copy). Learn more in the [LICENSE](https://github.com/russellsteadman/affiliate/blob/master/LICENSE) file.
