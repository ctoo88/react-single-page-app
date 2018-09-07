const common = require('./webpack.common.js');

const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      },
    ]
  },
});
