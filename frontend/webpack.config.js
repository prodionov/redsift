/* globals __dirname */

'use strict';

const webpack = require('webpack'),
  path = require('path');

module.exports = {
  cache: true,
  devtool: 'source-map',
  entry: {
    controller: ['./src/scripts/controller.js'],
    view: ['./src/scripts/view.js'],
  },
  output: {
    filename: '[name].umd-es2015.min.js',
    path: path.join(__dirname, 'public', 'dist', 'js'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        }
      },
    ],
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
};