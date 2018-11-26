"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TrafficLayer = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _proptypes = require("../../proptypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eventMap = {};
var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  }
};

var TrafficLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TrafficLayer, _PureComponent);

  function TrafficLayer(props, context) {
    var _this;

    _classCallCheck(this, TrafficLayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrafficLayer).call(this, props, context));
    var trafficLayer = new google.maps.TrafficLayer(props.options);
    (0, _MapChildHelper.construct)(_proptypes.TrafficLayerPropTypes, updaterMap, props, trafficLayer);
    trafficLayer.setMap(context[_constants.MAP]);
    _this.state = _defineProperty({}, _constants.TRAFFIC_LAYER, trafficLayer);
    _this.getMap = _this.getMap.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TrafficLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.TRAFFIC_LAYER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.TRAFFIC_LAYER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var trafficLayer = this.state[_constants.TRAFFIC_LAYER];

      if (trafficLayer) {
        trafficLayer.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
  }, {
    key: "getMap",
    value: function getMap() {
      return this.state[_constants.TRAFFIC_LAYER].getMap();
    }
  }]);

  return TrafficLayer;
}(_react.PureComponent);

exports.TrafficLayer = TrafficLayer;

_defineProperty(TrafficLayer, "propTypes", _proptypes.TrafficLayerPropTypes);

_defineProperty(TrafficLayer, "contextTypes", _defineProperty({}, _constants.MAP, _propTypes.default.object));

var _default = TrafficLayer;
exports.default = _default;