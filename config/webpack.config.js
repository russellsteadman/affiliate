const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './../src/Generator.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'affiliate.js',
        library: 'Affiliate',
        libraryTarget: 'window',
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

    plugins: [
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: path.join(__dirname, '../tsconfig.json'),
            },
        })
    ],

    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.ts', '.json'],
    },

    context: __dirname,
    target: 'web',
    mode: 'production',
    devtool: 'source-map',
};
