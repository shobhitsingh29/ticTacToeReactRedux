const path = require("path");
const webpack = require('webpack');
module.exports = {
    devtool: "inline-source-map",
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'babel-polyfill',
        './src/js/main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }, devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.jsx$/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                },
                exclude: /(node_modules)/
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                rules: [{
                    test: /\.(png|jpg|svg|woff|woff2)?(\?v=\d+.\d+.\d+)?$/,
                    loader: 'url-loader?limit=8192'
                }, {
                    test: /\.(eot|ttf)$/,
                    loader: 'file-loader'
                },
                    {
                        test: /\.less$/,
                        use: [{
                            loader: "style-loader"
                        }, {
                            loader: "css-loader"
                        }, {
                            loader: "less-loader"
                        }]

                    },
                ]
            }
        ]
    }
};
