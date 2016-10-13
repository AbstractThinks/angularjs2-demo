var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helper');


console.log(process.env.NODE_ENV);
module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/app.ts'
  },
  output: {
    filename: './dist/[name].js',
    chunkFilename: './dist/[id].[hash].chunk.js'
  },
  // 告诉 Webpack 如何通过查找匹配的文件来 解析 模块文件的加载请求
  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        // 组件模版加载器
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        
        loader: 'raw'
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },

    ]
  },

  plugins: [
      /**
       * 把内嵌的 css 抽取成外部文件
       */
      new ExtractTextPlugin('./dist/[name].css'),
      /**
       * [mangle description] 最小化 (minify) 生成的包
       * @type {Object}
       */
      // new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      //   mangle: {
      //     keep_fnames: true
      //   }
      // }),
      /**
       * 当 Webpack 发现 app 与 vendor 有共享依赖时，就把它们从 app 中移除
       * app -> vendor
       * 
       */
      new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor']
      })


  ]

};