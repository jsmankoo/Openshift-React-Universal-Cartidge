'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = require('react-redux');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _styles = require('../../styles');

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref) {
  var Menu = _ref.Menu;

  return {
    menuOpen: Menu.get('open')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggle: function toggle() {
      dispatch({ type: 'MENU_TOGGLE' });
    }
  };
};

var App = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (0, _radium2.default)(_class = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(App)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = function (nextProps) {
      return nextProps.menuOpen !== _this.props.menuOpen;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var menuOpen = _props.menuOpen;
      var toggle = _props.toggle;

      return _react2.default.createElement(
        _radium.StyleRoot,
        { style: [_Styles.base] },
        _react2.default.createElement(
          'h1',
          { style: [_Styles.h1] },
          'App!'
        ),
        _react2.default.createElement(
          'div',
          { style: [_Styles.menuWraper] },
          _react2.default.createElement(
            'div',
            { style: [_Styles.menuWraper.menuState] },
            menuOpen ? 'Open' : 'Closed'
          ),
          _react2.default.createElement(
            'button',
            { onClick: toggle,
              style: [_Styles.menuWraper.button, { backgroundColor: (0, _color2.default)(menuOpen ? _styles.colors.green : _styles.colors.red).hslString() }] },
            'Toggle'
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component)) || _class) || _class);
;

exports.default = App;