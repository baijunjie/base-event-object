var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseWebpackConfig = require('./webpack.config.base');
var pkg = require('../package.json');

var webpackConfig = merge(baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        // 在导入的代码中，任何出现 process.env.NODE_ENV 的地方都会被替换为 "production"
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.BannerPlugin(`[name] - ${pkg.description}\n@version v${pkg.version}\n@author ${pkg.author}\n@license ${pkg.license}\n\n${pkg.repository.type} - ${pkg.repository.url}`)
    ]
});

module.exports = [
    webpackConfig,
    merge(webpackConfig, {
        output: {
            filename: '[name].min.js'
        },
        plugins: [
            // 这个插件需要依赖 babel
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    // drop_console: true
                }
            })
        ]
    })
];
