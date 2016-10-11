'use strict';

var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    loader: './app/loader.js',
    main: './app/main.js'
  },
  output: {
    path: 'dist',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015'],
        plugins: [
          'angular2-annotations',
          'transform-decorators-legacy',
          'transform-class-properties',
          'transform-flow-strip-types'
        ]
      }
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=.+)?$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.(jpe?g|gif)$/i,
      loader: 'url?limit=10000!img?progressive=true'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     except: ['$super', '$', 'exports', 'require', 'import']
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: 'app/index_template.html',
      hash: true,
      cache: true,
      chunksSortMode: 'none'
    })
  ],

  devtool: 'source-map'
};
