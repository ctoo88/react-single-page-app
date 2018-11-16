const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../../www'),
  },
  resolve: {
    // alias: {},
    // modules: [../../src],
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    // noParse: [],
    // rules: [],
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
