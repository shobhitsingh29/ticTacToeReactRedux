const path = require('path');
const webpack = require('webpack');
module.exports = {
    devtool: "inline-source-map",
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, "./src/js/main.jsx")
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8080,
        hot: true,
        publicPath: "/",
        historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [
            {
                enforce : 'pre',
                test : /\.js$/,
                loader : 'eslint-loader',
                exclude : /(node_modules)/
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loaders: [{
                    loader: "style-loader"
                },
                    {
                        loader: "css-loader"
                    }]
            }
        ]
    }
}
