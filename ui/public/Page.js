"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Contents = _interopRequireDefault(require("./Contents.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint linebreak-style: ["error", "windows"] */
function NavBar() {
  return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/"
  }, "Home"), ' | ', /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/products"
  }, "Product List"));
}

function Page() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(NavBar, null), /*#__PURE__*/_react.default.createElement(_Contents.default, null));
}