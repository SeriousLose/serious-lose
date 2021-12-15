const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',   // 打包对入口文件，期望打包对文件入口。 这里配置tsc05.ts的位置
  output: {
    filename: 'storage.js',   // 输出文件名称
    path: path.resolve(__dirname, './dist/'),  //获取输出路径
    library: 'storage',
    libraryTarget: 'umd',
    // libraryExport: "default"
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts']      // 解析对文件格式
  },
}