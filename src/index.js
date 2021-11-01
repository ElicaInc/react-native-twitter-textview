"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = _reactNative.StyleSheet.create({
  linkStyle: {
    color: "#2980b9"
  }
});

const PATTERN_HASHTAG = /(#|＃)([a-z0-9_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]*[a-z_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f][a-z0-9_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]*)/giu;///(^|\s)(#[a-z\d-_]+)/giu;
       
var PATTERN_MENTION = /(^|\s)(@[a-z\d-_]+)/gi;
var PATTERN_EMAIL = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
var PATTERN_URL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

var matchesWith = function matchesWith(str, pattern) {
  var match = null;
  var arr = [];

  while ((match = pattern.exec(str)) != null) {
    arr.push([match, pattern]);
  }

  return arr;
};

var splitStringByMatches = function splitStringByMatches(str, matches) {
  var arr = [];
  var o = 0;
  matches.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        match = _ref2[0],
        pattern = _ref2[1];

    var _match = _objectSpread({}, match),
        index = _match.index;

    var text = match[match.length - 1];
    arr.push([str.slice(o, index), null]);
    arr.push([str.slice(index, index + text.length + 1), pattern]);
    o = index + text.length + 1;
  });
  arr.push([str.slice(o, str.length), null]);
  return arr.filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        s = _ref4[0];

    return s.length > 0;
  });
};

var TwitterTextView = function TwitterTextView(_ref5) {
  var _ref6, _onPress, _style;

  var _ref5$children = _ref5.children,
      children = _ref5$children === void 0 ? "" : _ref5$children,
      extractHashtags = _ref5.extractHashtags,
      onPressHashtag = _ref5.onPressHashtag,
      hashtagStyle = _ref5.hashtagStyle,
      extractMentions = _ref5.extractMentions,
      onPressMention = _ref5.onPressMention,
      mentionStyle = _ref5.mentionStyle,
      extractLinks = _ref5.extractLinks,
      onPressLink = _ref5.onPressLink,
      linkStyle = _ref5.linkStyle,
      extractEmails = _ref5.extractEmails,
      onPressEmail = _ref5.onPressEmail,
      emailStyle = _ref5.emailStyle,
      extraProps = _objectWithoutProperties(_ref5, ["children", "extractHashtags", "onPressHashtag", "hashtagStyle", "extractMentions", "onPressMention", "mentionStyle", "extractLinks", "onPressLink", "linkStyle", "extractEmails", "onPressEmail", "emailStyle"]);

  var str = typeof children === "string" && children || "";
  var patterns = [!!extractHashtags && PATTERN_HASHTAG, !!extractMentions && PATTERN_MENTION, !!extractEmails && PATTERN_EMAIL, !!extractLinks && PATTERN_URL].filter(function (e) {
    return !!e;
  });

  var matches = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(patterns.map(function (pattern) {
    return matchesWith(str, pattern);
  }))).filter(function (e) {
    return !!e;
  }).sort(function (_ref7, _ref8) {
    var _ref9 = _slicedToArray(_ref7, 1),
        a = _ref9[0];

    var _ref10 = _slicedToArray(_ref8, 1),
        b = _ref10[0];

    return _objectSpread({}, a).index - _objectSpread({}, b).index;
  });

  var _onPress2 = (_onPress = {}, _defineProperty(_onPress, PATTERN_HASHTAG, onPressHashtag), _defineProperty(_onPress, PATTERN_MENTION, onPressMention), _defineProperty(_onPress, PATTERN_EMAIL, onPressEmail), _defineProperty(_onPress, PATTERN_URL, onPressLink), _onPress);

  var style = (_style = {}, _defineProperty(_style, PATTERN_HASHTAG, hashtagStyle), _defineProperty(_style, PATTERN_MENTION, mentionStyle), _defineProperty(_style, PATTERN_EMAIL, emailStyle), _defineProperty(_style, PATTERN_URL, linkStyle), _style);
  return /*#__PURE__*/_react["default"].createElement(_reactNative.Text, extraProps, splitStringByMatches(str, matches).map(function (_ref11, i) {
    var _ref12 = _slicedToArray(_ref11, 2),
        str = _ref12[0],
        pattern = _ref12[1];

    return /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      key: i,
      style: style[pattern],
      onPress: function onPress(e) {
        var handle = _onPress2[pattern];

        if (handle) {
          return handle(e, str);
        }

        return undefined;
      },
      children: str
    });
  }));
};

var textStyleProps = _propTypes["default"].oneOfType([_propTypes["default"].shape({}), _propTypes["default"].number]);

TwitterTextView.propTypes = {
  children: _propTypes["default"].string,
  extractHashtags: _propTypes["default"].bool,
  onPressHashtag: _propTypes["default"].func,
  hashtagStyle: textStyleProps,
  extractMentions: _propTypes["default"].bool,
  onPressMention: _propTypes["default"].func,
  mentionStyle: textStyleProps,
  extractLinks: _propTypes["default"].bool,
  onPressLink: _propTypes["default"].func,
  linkStyle: textStyleProps
};
TwitterTextView.defaultProps = {
  children: "",
  extractHashtags: true,
  onPressHashtag: function onPressHashtag(e, hashtag) {
    var msg = "Hashtag: \"".concat(hashtag, "\"");

    if (_reactNative.Platform.OS !== "web") {
      _reactNative.Alert.alert(msg);
    } else {
      console.log(msg);
    }
  },
  hashtagStyle: styles.linkStyle,
  extractMentions: true,
  onPressMention: function onPressMention(e, mention) {
    var msg = "Mention: \"".concat(mention, "\"");

    if (_reactNative.Platform.OS !== "web") {
      _reactNative.Alert.alert(msg);
    } else {
      console.log(msg);
    }
  },
  mentionStyle: styles.linkStyle,
  extractLinks: true,
  onPressLink: function onPressLink(e, url) {
    return _reactNative.Linking.canOpenURL(url).then(function (canOpen) {
      return !!canOpen && _reactNative.Linking.openURL(url.trim());
    });
  },
  linkStyle: styles.linkStyle,
  extractEmails: true,
  onPressEmail: function onPressEmail(e, url) {
    return _reactNative.Linking.canOpenURL("mailto:".concat(url.trim())).then(function (canOpen) {
      return !!canOpen && _reactNative.Linking.openURL("mailto:".concat(url.trim()));
    });
  },
  emailStyle: styles.linkStyle
};
var _default = TwitterTextView;
exports["default"] = _default;
