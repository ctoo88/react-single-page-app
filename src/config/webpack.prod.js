const common = require('./webpack.common.js');

const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        include: path.resolve(__dirname, '../../src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'img/',
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
  ],
});
