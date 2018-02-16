/* global __dirname */
var path = require('path');
var fs = require('fs');
fs.copyFile(path.join(__dirname, './../../../dist/affiliate.js'), path.join(__dirname, './../dist.js'), function () {});

module.exports = {
  entry: './pre.js',
  output: {
    path: path.resolve(__dirname), 
    filename: 'post.js',
    libraryTarget: 'umd'
  },
  context: __dirname,
  target: 'web'
};