const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../../www'),
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.tpl.html'),
      hash: true,
    }),
  ],
};
