webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: name, siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/menu */ "./components/menu.tsx");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/meta */ "./components/meta.tsx");
var _jsxFileName = "C:\\dev\\Boomi-API\\components\\layout.tsx",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var name = 'HSW Boomi API';
var siteTitle = 'Home | HSW Boomi API';

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? siteTitle : _ref$title,
      meta = _ref.meta,
      home = _ref.home,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {
    maxWidth: "36rem"
  } : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container, " ").concat(className),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), title && __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, title)), __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_6__["default"], {
    options: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, home && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: "/images/me.webp",
    className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerHomeImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderCircle),
    alt: name,
    priority: true,
    quality: "100%",
    width: 144,
    height: 144,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.heading2Xl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, name))), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, children)));
};

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwibWV0YSIsImhvbWUiLCJzdHlsZSIsIm1heFdpZHRoIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGVySG9tZUltYWdlIiwidXRpbFN0eWxlcyIsImJvcmRlckNpcmNsZSIsImhlYWRpbmcyWGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxlQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLHNCQUFsQjs7QUFFUCxJQUFNQyxNQUFtSCxHQUFHLFNBQXRIQSxNQUFzSCxPQUFnRztBQUFBLE1BQTdGQyxRQUE2RixRQUE3RkEsUUFBNkY7QUFBQSx3QkFBbkZDLEtBQW1GO0FBQUEsTUFBbkZBLEtBQW1GLDJCQUEzRUgsU0FBMkU7QUFBQSxNQUFoRUksSUFBZ0UsUUFBaEVBLElBQWdFO0FBQUEsTUFBMURDLElBQTBELFFBQTFEQSxJQUEwRDtBQUFBLHdCQUFwREMsS0FBb0Q7QUFBQSxNQUFwREEsS0FBb0QsMkJBQTVDO0FBQUVDLFlBQVEsRUFBRTtBQUFaLEdBQTRDO0FBQUEsNEJBQXJCQyxTQUFxQjtBQUFBLE1BQXJCQSxTQUFxQiwrQkFBVCxFQUFTO0FBQzFOLFNBQVEsbUVBQ04sTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRE0sRUFFTjtBQUFLLGFBQVMsWUFBS0MseURBQU0sQ0FBQ0MsU0FBWixjQUF5QkYsU0FBekIsQ0FBZDtBQUFvRCxTQUFLLEVBQUVGLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFSUgsS0FBSyxJQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0EsS0FBVCxDQUZkLENBREYsRUFLRSxNQUFDLHdEQUFEO0FBQU0sV0FBTyxFQUFFQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQVEsYUFBUyxFQUFFSyx5REFBTSxDQUFDRSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLElBQUksSUFBSyxtRUFDUixNQUFDLGlEQUFEO0FBQU8sT0FBRyxFQUFDLGlCQUFYO0FBQTZCLGFBQVMsWUFBS0kseURBQU0sQ0FBQ0csZUFBWixjQUErQkMsK0RBQVUsQ0FBQ0MsWUFBMUMsQ0FBdEM7QUFBZ0csT0FBRyxFQUFFZixJQUFyRztBQUEyRyxZQUFRLEVBQUUsSUFBckg7QUFBMkgsV0FBTyxFQUFFLE1BQXBJO0FBQTRJLFNBQUssRUFBRSxHQUFuSjtBQUF3SixVQUFNLEVBQUUsR0FBaEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURRLEVBRVI7QUFBSSxhQUFTLEVBQUVjLCtEQUFVLENBQUNFLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNoQixJQUF2QyxDQUZRLENBRFosQ0FORixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0csUUFBUCxDQVpGLENBRk0sQ0FBUjtBQWlCRCxDQWxCRDs7S0FBTUQsTTtBQW9CU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDY3YTU3NDExNDk2ODM1MjhhY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcyc7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IE1lbnUgZnJvbSAnQGNvbXBvbmVudHMvbWVudSc7XG5pbXBvcnQgTWV0YSwgeyBNZXRhT3B0aW9ucyB9IGZyb20gXCJAY29tcG9uZW50cy9tZXRhXCI7XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ0hTVyBCb29taSBBUEknXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ0hvbWUgfCBIU1cgQm9vbWkgQVBJJ1xuXG5jb25zdCBMYXlvdXQ6IEZDPHsgdGl0bGU/OiBzdHJpbmcsIG1ldGE/OiBNZXRhT3B0aW9ucywgaG9tZT86IGJvb2xlYW4sIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcywgY2xhc3NOYW1lPzogc3RyaW5nIH0+ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gc2l0ZVRpdGxlLCBtZXRhLCBob21lLCBzdHlsZSA9IHsgbWF4V2lkdGg6IFwiMzZyZW1cIiB9LCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcbiAgcmV0dXJuICg8PlxuICAgIDxNZW51Lz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtjbGFzc05hbWV9YH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIHsgdGl0bGUgJiYgKDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPikgfVxuICAgICAgPC9IZWFkPlxuICAgICAgPE1ldGEgb3B0aW9ucz17bWV0YX0gLz5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAge2hvbWUgJiYgKDw+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvbWUud2VicFwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfSBhbHQ9e25hbWV9IHByaW9yaXR5PXt0cnVlfSBxdWFsaXR5PXtcIjEwMCVcIn0gd2lkdGg9ezE0NH0gaGVpZ2h0PXsxNDR9Lz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmcyWGx9PntuYW1lfTwvaDE+XG4gICAgICAgIDwvPil9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgPC9kaXY+XG4gIDwvPik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9