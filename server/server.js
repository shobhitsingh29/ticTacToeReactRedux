const express = require('express');
const path = require('path');
const fs = require('fs');
const url = require('url');
const open = require('open');
const webpack = require('webpack');
const config = require('../webpack.dev.config');
const bodyParser = require('body-parser');

const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use('/', express.static('dist'));

app.use(webpackHotMiddleware(compiler));
app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});

//serving (server side rendering)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/scoreBoard', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

console.log(`listening on ${port}`);
