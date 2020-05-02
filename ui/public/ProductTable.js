"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint linebreak-style: ["error", "windows"] */
var ProductRow = (0, _reactRouterDom.withRouter)(function (_ref) {
  var product = _ref.product;
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, product.name), /*#__PURE__*/_react.default.createElement("td", null, "$", product.price), /*#__PURE__*/_react.default.createElement("td", null, product.category), /*#__PURE__*/_react.default.createElement("td", {
    width: "60"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0)",
    onClick: function onClick() {
      return window.open(product.image);
    }
  }, "view")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/edit/".concat(product.id)
  }, "Edit")));
});

function ProductTable(_ref2) {
  var products = _ref2.products;
  var productRows = products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Product Name"), /*#__PURE__*/_react.default.createElement("th", null, "Price"), /*#__PURE__*/_react.default.createElement("th", null, "Category"), /*#__PURE__*/_react.default.createElement("th", null, "Image"), /*#__PURE__*/_react.default.createElement("th", null, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, productRows));
}