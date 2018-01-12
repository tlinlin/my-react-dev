var path = require('path');
module.exports = {
    devtool: 'source-map',
    devServer: {
        host: '127.0.0.1',
        hot: true,
        noInfo: false,
        contentBase: path.join(__dirname, 'src/'),
        compress: true,
        port: 9000,
        inline: false,
        filename: 'bundle.js',
    }
};