'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _App = require('./Components/App/App');

var _App2 = _interopRequireDefault(_App);

var _Store = require('./Store/Store');

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Init express
var app = (0, _express2.default)();

app.set('port', process.env.NODE_PORT || 3000);
app.set('ip', process.env.NODE_IP || 'localhost');

app.set('views', './views');
app.set('view engine', 'pug');

app.use((0, _morgan2.default)('dev'));

app.use(_express2.default.static('./public'));

app.get('/', function (req, res) {
  res.render('index', { app: (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: _Store2.default },
      _react2.default.createElement(_App2.default, null)
    )) });
});

app.listen(app.get('port'), app.get('ip'), function () {
  console.log('Application ip ' + app.get('ip') + ':' + app.get('port'));
  console.log('worker ' + process.pid + 'started...');
});