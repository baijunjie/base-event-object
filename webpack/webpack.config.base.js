const path = require('path');
const pkg = require('../package.json');

const PROJECT_NAME = process.env.PROJECT_NAME = pkg.name.replace(/^\w/i, ($0) => $0.toUpperCase()).replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());

module.exports = {
    entry: {
        [PROJECT_NAME]: './src/index.js' // 相对于根目录
    },
    output: {
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, '../src')],
            options: {
                presets: [
                    [ '@babel/preset-env', { 'modules': 'umd' } ]
                ],
                plugins: [
                    // 这个插件可以兼容一些ES6新增特性，但是也会增加代码体积，慎用
                    // '@babel/plugin-transform-runtime',

                    // 这个插件的作用是
                    // export default 导出的 ES6 模块被 babel 转义成 UMD 模块后
                    // require 该模块可以直接得到模块返回值，而不是在 default 属性上
                    'add-module-exports'
                ]
            }
        }]
    }
};