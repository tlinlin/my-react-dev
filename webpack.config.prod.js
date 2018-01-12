const webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist/'], { root: __dirname, verbose: true, dry: false }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true, //eslint-disable-line
                // drop_console: true
            },
            // mangle: false
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};