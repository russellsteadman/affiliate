/* global __dirname */
var path = require('path');
var ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
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
                    presets: [
                      ['env', {
                        'targets': {
                          'browsers': ['last 4 versions', 'safari >= 7', 'ie >= 9']
                        }
                      }]
                    ],
                    plugins: [
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

  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  context: __dirname,
  target: 'web',
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT5',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'SIMPLE'
      },
      // jsCompiler: true, // use this if there are issues with building
      concurrency: 4
    })
  ]
}