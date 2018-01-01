var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'affiliate.js',
    library: 'Affiliate',
    libraryTarget: 'umd'
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
                        "env",
                        "react",
                        "stage-0"
                    ],
                    plugins: [
                        "transform-class-properties",
                        "transform-decorators",
                        "transform-react-constant-elements",
                        "transform-react-inline-elements"
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
    extensions: ['.js', '.json', '.jsx', '.css']
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
    new UglifyJsPlugin()
  ]
}