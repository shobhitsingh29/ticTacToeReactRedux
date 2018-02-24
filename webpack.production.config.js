const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config');
const webpack = require('webpack');
module.exports = Merge(CommonConfig, {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize:true,
            beautify: false,
            comments: false
        })
    ]
})
