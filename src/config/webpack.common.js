const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../../www'),
  },
  resolve: {
    modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
    extensions: ['.js', '.css', '.styl'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.tpl.html'),
      hash: true,
    })
  ]
};
