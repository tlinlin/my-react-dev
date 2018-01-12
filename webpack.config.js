var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var devConfig = require('./webpack.config.dev');
var prodConfig = require('./webpack.config.prod');
var config = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        publicPath: '',
        path: path.join(__dirname, '/dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: [{
                loader:'babel-loader',
                options: {  
                    presets: ['react']  
                }
            }, 'eslint-loader'],

        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.(png|gif|jpg|svg|jpeg)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '/images/[name].[ext]?[hash:8]',
                    limit: 25000
                }
            }]
        }, {
            test: /\.(woff2|woff|eot|svg|ttf|otf)(\?.*)?$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name]',
                    outputPath: 'font/',
                    limit: 25000
                }
            }]
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'react basic',
            template: 'src/index.html', // 源模板文件
            filename: 'index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
            inject: 'body'
        })
    ]
};

if (process.env.NODE_ENV !== 'production') {
    config = merge(config, devConfig);
} else {
    config = merge(config, prodConfig);
}
module.exports = config;