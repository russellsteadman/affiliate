/* global __dirname */
const path = require('path');

module.exports = {
  entry: './../src/Generator.js',
  output: {
    path: path.resolve(__dirname, '../dist'), 
    filename: 'affiliate.js',
    library: 'Affiliate',
    libraryTarget: 'window'
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                  rootMode: 'upward'
                }
            }
        }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.json']
  },

  context: __dirname,
  target: 'web',
  mode: 'production',

  plugins: []
};