/* global __dirname */
const path = require('path');

module.exports = {
  entry: '../src/Generator.js',
  output: {
    path: path.resolve(__dirname, '../dist'), 
    filename: 'affiliate.node.js',
    libraryTarget: 'commonjs2'
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

  externals: function(context, request, callback) {
    if (/^(docile|url-parse)/.test(request)){
      return callback(null, 'commonjs ' + request);
    }
    callback();
  },

  context: __dirname,
  //target: 'node',
  mode: 'production',

  plugins: []
};