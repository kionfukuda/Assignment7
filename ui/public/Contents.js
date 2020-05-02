"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contents;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ProductList = _interopRequireDefault(require("./ProductList.jsx"));

var _ProductEdit = _interopRequireDefault(require("./ProductEdit.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint linebreak-style: ["error", "windows"] */
var NotFound = function NotFound() {
  return /*#__PURE__*/_react.default.createElement("h1", null, "Page Not Found");
};

function Contents() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/products"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/products",
    component: _ProductList.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/edit/:id",
    component: _ProductEdit.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFound
  }));
}