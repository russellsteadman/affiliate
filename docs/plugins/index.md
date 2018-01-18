# Plugins

* [Amazon](https://affiliate.js.org/plugins/amazon)

## Making plugins

Plugins are actually very simple to make. Simply accept the global `Affiliate` function and output an instance.

Here's a simple example:
```js
var plugin = function (Affiliate, mytag) {
    return Affiliate({
        tags: [
            {
                hosts: ['example.com', 'www.example.com'],
                query: {
                    ref: mytag
                }
            }
        ]
    });
};
```

If you have made a plugin, it would be awesome if you shared it on NPM as `affiliate-plugin-*` and made a pull request to the main [`Affiliate` repository](https://github.com/teamtofu/affiliate/pulls) to add documentation.