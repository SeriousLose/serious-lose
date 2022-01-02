const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = merge(baseConfig, {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin()
  ]
});
