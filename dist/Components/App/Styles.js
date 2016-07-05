'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuWraper = exports.h1 = exports.base = undefined;

var _styles = require('../../styles');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%'
};

var menuWraper = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  menuState: {
    lineHeight: '22px'
  },

  button: {
    color: (0, _color2.default)(_styles.colors.white).hslString(),
    border: 'none',
    marginLeft: '20px'
  }
};

var h1 = {
  textAlign: 'center',
  fontFamily: _styles.fonts.head,
  color: (0, _color2.default)(_styles.colors.black).hslString()
};

exports.base = base;
exports.h1 = h1;
exports.menuWraper = menuWraper;