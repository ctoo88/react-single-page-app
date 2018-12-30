const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../www'),
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, '../../src'),
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.styl'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.tpl.html'),
      hash: true,
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 30000,
      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          reuseExistingChunk: true,
        },
      }
    }
  },
  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 1000000,
  }
};
