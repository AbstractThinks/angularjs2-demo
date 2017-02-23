var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/src/app.ts'
    },
    output: {
        path:__dirname+'/app/',
        filename: 'build/js/[name].js',
        chunkFilename: 'build/js/[id].chunk.js'
      },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=build/assets/[name].[ext]'
            },
            {
                test: /\.(css|scss)$/,
                loader:ExtractTextPlugin.extract("style", 'css!postcss!sass')
            },
            {
                test: /\.css$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            }

        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new ExtractTextPlugin("build/style/styles.css")
    ]
}
