/* global __dirname */
const path = require('path');
const fs = require('fs');
fs.copyFile(path.join(__dirname, './../../../dist/affiliate.js'), path.join(__dirname, './../dist.js'), () => {});

module.exports = {
  entry: './pre.js',
  output: {
    path: path.resolve(__dirname), 
    filename: 'post.js',
    libraryTarget: 'umd'
  },
  context: __dirname,
  mode: 'none'
};