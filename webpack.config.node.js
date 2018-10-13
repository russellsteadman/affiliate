/* global __dirname */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
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
                  presets: [
                    ['@babel/preset-env', {
                      'targets': {
                        'browsers': ['last 4 versions', 'safari >= 7', 'ie >= 9']
                      }
                    }]
                  ],
                  plugins: [
                    require('babel-plugin-transform-object-rest-spread')
                  ]
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