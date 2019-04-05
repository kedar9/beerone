webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/info.jsx":
/*!*****************************!*\
  !*** ./components/info.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/styles.scss */ "./static/styles.scss");
/* harmony import */ var _static_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kedar.gadge/GIT/beerone/components/info.jsx";



var Info = function Info(props) {
  // const { type } = props;
  console.log('Data: ', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "beerone-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "BEERONE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "beerone-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "beer-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Hello World")));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/styles.scss */ "./static/styles.scss");
/* harmony import */ var _static_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/info */ "./components/info.jsx");
/* harmony import */ var _static_mock_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/mock.js */ "./static/mock.js");

var _jsxFileName = "/Users/kedar.gadge/GIT/beerone/pages/index.jsx";






var Index = function Index(props) {
  var currentBeer = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _static_mock_js__WEBPACK_IMPORTED_MODULE_5__["BUDWEISER"]);

  console.log('Data: ', props, _static_mock_js__WEBPACK_IMPORTED_MODULE_5__["BUDWEISER"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "beerone-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "BEERONE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "beerone-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "beer-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, currentBeer.nameDisplay)));
}; // Index.getInitialProps = async function() {
//   const res = await fetch('https://api.brewerydb.com/v2/search?type=beer&key=ea2b62597b2a7489427894a88c9fca06&q=bud');
//   const data = await res.json();
//
//   return data;
// }


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f4d21cf4d6f310729c72.hot-update.js.map