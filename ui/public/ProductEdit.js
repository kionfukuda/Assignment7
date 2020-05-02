"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductEdit;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _graphQLFetch = _interopRequireDefault(require("./graphQLFetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint linebreak-style: ["error", "windows"] */
function ProductEdit(_ref) {
  var match = _ref.match;
  var id = match.params.id;
  return /*#__PURE__*/_react.default.createElement("h2", null, "This is a placeholder for editing Product ".concat(id));
}