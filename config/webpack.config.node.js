const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: '../src/Generator.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'affiliate.node.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            rootMode: 'upward',
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.ts', '.json'],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: path.join(__dirname, '../tsconfig.json'),
            },
        })
    ],

    externals: function(context, request, callback) {
        if (/^(url-parse)/.test(request)) {
            return callback(null, 'commonjs ' + request);
        }
        callback();
    },

    context: __dirname,
    // target: 'node',
    mode: 'production',
    devtool: 'source-map',
};
