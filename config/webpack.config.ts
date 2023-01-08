import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import type { Configuration } from 'webpack';

const config: Configuration = {
  entry: './../src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist/web'),
    filename: 'affiliate.web.js',
    library: 'Affiliate',
    libraryTarget: 'window',
    libraryExport: 'default',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
    ],
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.ts', '.json'],
  },

  context: __dirname,
  target: 'web',
  mode: 'production',
  devtool: 'source-map',

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 2016,
        },
      }),
    ],
  },
};

export default config;
