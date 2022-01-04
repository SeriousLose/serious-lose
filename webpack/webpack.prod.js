const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './../release/'),  //获取输出路径
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/storage.d.ts"),
          to: path.resolve(__dirname, "../release"),
        },
      ],
    })
  ]
})