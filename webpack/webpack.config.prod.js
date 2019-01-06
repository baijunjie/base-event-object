const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const baseWebpackConfig = require('./webpack.config.base');
const pkg = require('../package.json');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new webpack.BannerPlugin(
            '[name]'
            + (pkg.description ? ` - ${pkg.description}` : '')
            + `\n@version v${pkg.version}`
            + `\n@author ${pkg.author}`
            + `\n@license ${pkg.license}`
            + (pkg.repository ? `\n\n${pkg.repository.type} - ${pkg.repository.url}` : '')
        )
    ]
});

module.exports = [
    webpackConfig,
    merge(webpackConfig, {
        output: {
            filename: '[name].min.js'
        },
        optimization: {
            minimize: true,
            minimizer: [
                new UglifyJSPlugin({
                    uglifyOptions: {
                        // https://github.com/mishoo/UglifyJS2/tree/harmony#output-options
                        output: {
                            comments: new RegExp('^!\\s*\\*\\s*' + process.env.PROJECT_NAME)
                        },
                        // https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            // drop_console: true
                        }
                    }
                })
            ]
        }
    })
];
