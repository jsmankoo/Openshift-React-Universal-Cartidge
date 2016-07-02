var path = require('path');
var express = require('express');
var stylus = require('stylus');
var morgan = require('morgan');
var axis = require('axis');
var jeet = require('jeet');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer-stylus');

var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);


app.use(stylus.middleware(
  {
    src: './public',
    compile: function(str, path){
      return stylus(str)
        .set('filename', path)
        .use(axis())
        .use(jeet())
        .use(rupture())
        .use(autoprefixer());
    }
  }
))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(morgan('dev'));
app.use(express.static(`./public`));

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
