var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    devtool: 'sourcemap',
    entry: {
        app: ['babel-polyfill', './src/app'],
        vendor: ['vue','underscore','fs-h5']
    },
    output: {
        path: path.join(__dirname, '/www/js'),
        filename: 'index.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue', exclude: /node_modules/},
            { test: /\.js$/, loader:'babel', query: {presets: ['es2015']}}
        ]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    path: path.join(__dirname,'/www/js'),
                    publicPath: '/js',
                    filename: 'vendor.js',
                    minChunks: Infinity
              }),
              new webpack.HotModuleReplacementPlugin({ hot: true }),]
};