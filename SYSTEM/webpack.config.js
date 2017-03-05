var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = (process.env.NODE_ENV === 'production') ? true : false;


var configPlugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        './app/', // location of your src
        {} // a map of your routes
    ),
    new ExtractTextPlugin("/build/style/styles.css")

];
if (ENV) {
    console.log('production')
    configPlugins.push(new webpack.NoEmitOnErrorsPlugin());
    // configPlugins.push(new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
    //   mangle: {
    //     keep_fnames: true
    //   }
    // }));
    configPlugins.push(new webpack.DefinePlugin({
        'process.env': {
            'ENV': JSON.stringify(ENV)
        }
    }));
}
var config = {
    devtool: 'source-map',
    entry: {
        // 'jquery':'./node_modules/jquery/dist/jquery.min.js',
        // 'semantic':'./app/src/assets/style/semantic.min.js',
        'polyfills': './app/config/polyfills.ts',
        'vendor': './app/config/vendor.ts',
        'app': './app/src/app.ts'
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '/build/js/[name].js',
        chunkFilename: '/build/js/[id].chunk.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, "app/src"), "node_modules"],
        extensions: ['.ts', '.js', 'html', 'scss']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: './tsconfig.json' }
                }, 'angular2-template-loader']
            }, {
                test: /\.html$/,
                use: 'html-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?limit=4192&name=build/assets/[name].[ext]'
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader!sass-loader' })
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader?sourceMap' })
            }, {
                test: /\.css$/,
                use: 'raw-loader'
            }

        ]
    },
    plugins: configPlugins
};

module.exports = config;
