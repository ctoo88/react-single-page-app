const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('./webpack.dev.js');
const compiler = webpack(webpackConfig);
const server = express();

server.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  logLevel: 'warn',
}));

server.listen(8818, () => {
  console.log('http://127.0.0.1:8818');
});
