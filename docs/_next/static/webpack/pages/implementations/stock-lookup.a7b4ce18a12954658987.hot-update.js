webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./pages/implementations/stock-lookup.tsx":
/*!************************************************!*\
  !*** ./pages/implementations/stock-lookup.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_tools_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/tools/Table */ "./components/tools/Table.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Implementation = function Implementation(_ref) {
  var name = _ref.name,
      children = _ref.children;
  var meta = {
    title: name,
    description: "An implmentation of the HSW's Boomi API ".concat(name, " Functionality")
  };
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Implementation: ".concat(name, " | HSW Boomi API"),
    meta: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, name, " Implementations"), children);
};

_c = Implementation;

function useLoad() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      response = _useState2[0],
      setResponse = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      error = _useState3[0],
      setError = _useState3[1];

  function load(_x) {
    return _load.apply(this, arguments);
  }

  function _load() {
    _load = Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(fn) {
      var payload;
      return C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return fn();

            case 4:
              payload = _context.sent;
              setLoading(false);
              setResponse(payload);
              setError(undefined);
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              setLoading(false);
              setError(_context.t0);
              setResponse(undefined);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));
    return _load.apply(this, arguments);
  }

  return {
    response: response,
    error: error,
    isLoading: loading,
    load: load
  };
}

_s(useLoad, "wtB9JeAQv2nP4T5dpgGbs44laYU=");

var StockLookup = function StockLookup() {
  _s2();

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"])();

  var _useLoad = useLoad(),
      response = _useLoad.response,
      error = _useLoad.error,
      isLoading = _useLoad.isLoading,
      load = _useLoad.load;

  var payload = {
    "location-ids": ["12100", "12077"],
    "SKUs": ["LTW9141", "LTW9252", "LTW9135"]
  };

  function loader() {
    return new Promise( /*#__PURE__*/function () {
      var _ref2 = Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(resolve, reject) {
        var resp;
        return C_dev_Boomi_API_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload);

              case 3:
                resp = _context2.sent;
                resolve(resp.data);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                reject(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    load(loader);
  }, []);
  var data = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
    if (response && !error) {
      var SoH = response === null || response === void 0 ? void 0 : response.results.map(function (store) {
        return _objectSpread({
          storeID: store["location-id"],
          storeName: store["location-name"]
        }, store.availability.reduce(function (obj, item) {
          obj[item["product-code"]] = item["quantity"];
          return obj;
        }, {}));
      });
      return SoH;
    }

    return [{
      msg: "Something went wrong."
    }];
  }, [response]);
  var columns = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
    var base = [{
      Header: 'Store ID',
      accessor: 'storeID'
    }, {
      Header: 'Store Name',
      accessor: 'storeName'
    }];

    if (response && !error) {
      var products = new Set();

      var _iterator = _createForOfIteratorHelper(response === null || response === void 0 ? void 0 : response.results),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var store = _step.value;

          var _iterator3 = _createForOfIteratorHelper(store.availability),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;
              products.add(item["product-code"]);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(products.keys()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _item = _step2.value;
          base.push({
            Header: _item,
            accessor: _item
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return base;
    }

    return [{
      Header: "Error / Message",
      accesor: "msg"
    }];
  }, [response]); // console.log(response)

  return __jsx(Implementation, {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Stores: "), __jsx("input", {
    type: "text",
    name: "stores",
    placeholder: "Store IDs seperated by spaces",
    style: {
      "width": "200px;"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 32
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 139
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "Products: "), __jsx("input", {
    type: "text",
    name: "products",
    placeholder: "Item Numbers seperated by spaces",
    style: {
      "width": "225px;"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 34
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 146
    }
  }), __jsx("input", {
    type: "submit",
    value: "Check Availabilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), isLoading ? __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Loading your data...") : response !== undefined ? __jsx(_components_tools_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingMd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Error:"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 59
    }
  }, error)));
};

_s2(StockLookup, "nRzq2n++wYJnOlt/Xfq82UGqNxQ=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_7__["useBoomiAPI"], useLoad];
});

_c2 = StockLookup;
/* harmony default export */ __webpack_exports__["default"] = (StockLookup);

var _c, _c2;

$RefreshReg$(_c, "Implementation");
$RefreshReg$(_c2, "StockLookup");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJ1c2VMb2FkIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwibG9hZCIsImZuIiwicGF5bG9hZCIsImlzTG9hZGluZyIsIlN0b2NrTG9va3VwIiwiYm9vbWlBUEkiLCJ1c2VCb29taUFQSSIsImxvYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiQXhpb3MiLCJwb3N0IiwiZW5kcG9pbnQiLCJ1cmkiLCJyZXNwIiwiZGF0YSIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlTWVtbyIsIlNvSCIsInJlc3VsdHMiLCJtYXAiLCJzdG9yZSIsInN0b3JlSUQiLCJzdG9yZU5hbWUiLCJhdmFpbGFiaWxpdHkiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwibXNnIiwiY29sdW1ucyIsImJhc2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsInByb2R1Y3RzIiwiU2V0IiwiYWRkIiwia2V5cyIsInB1c2giLCJhY2Nlc29yIiwiaGVhZGluZ01kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBb0MsR0FBRyxTQUF2Q0EsY0FBdUMsT0FBd0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25FLE1BQU1DLElBQUksR0FBRztBQUFFQyxTQUFLLEVBQUVILElBQVQ7QUFBZUksZUFB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Y2UxOGExMjk1NDY1ODk4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQGNvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAY29tcG9uZW50cy90b29scy9UYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VCb29taUFQSSB9IGZyb20gXCJAY29tcG9uZW50cy90b29scy9Cb29taUFQSVwiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICdAc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgSW1wbGVtZW50YXRpb246IEZDPHsgbmFtZTogc3RyaW5nIH0+ID0gKHsgbmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSB7IHRpdGxlOiBuYW1lLCBkZXNjcmlwdGlvbjogYEFuIGltcGxtZW50YXRpb24gb2YgdGhlIEhTVydzIEJvb21pIEFQSSAke25hbWV9IEZ1bmN0aW9uYWxpdHlgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtgSW1wbGVtZW50YXRpb246ICR7bmFtZX0gfCBIU1cgQm9vbWkgQVBJYH0gbWV0YT17bWV0YX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PntuYW1lfSBJbXBsZW1lbnRhdGlvbnM8L2gyPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlTG9hZCgpIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gbG9hZChmbjogKCkgPT4gUHJvbWlzZTxhbnk+KSB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGZuKCk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRSZXNwb25zZShwYXlsb2FkKTtcclxuICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgIHNldFJlc3BvbnNlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyByZXNwb25zZSwgZXJyb3IsIGlzTG9hZGluZzogbG9hZGluZywgbG9hZCB9O1xyXG59XHJcblxyXG5cclxuY29uc3QgU3RvY2tMb29rdXA6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvb21pQVBJID0gdXNlQm9vbWlBUEkoKTtcclxuICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciwgaXNMb2FkaW5nLCBsb2FkIH0gPSB1c2VMb2FkKCk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHsgXCJsb2NhdGlvbi1pZHNcIiA6IFtcIjEyMTAwXCIsIFwiMTIwNzdcIl0sIFwiU0tVc1wiIDogW1wiTFRXOTE0MVwiLFwiTFRXOTI1MlwiLFwiTFRXOTEzNVwiXSB9O1xyXG5cclxuICBmdW5jdGlvbiBsb2FkZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBBeGlvcy5wb3N0KGAke2Jvb21pQVBJLmVuZHBvaW50LnVyaX0vd3Mvc2ltcGxlL2dldFByb2R1Y3RBdmFpbGFiaWxpdHlgLCBwYXlsb2FkKVxyXG4gICAgICAgIHJlc29sdmUocmVzcC5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9hZChsb2FkZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgU29IID0gcmVzcG9uc2U/LnJlc3VsdHMubWFwKChzdG9yZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RvcmVJRDogc3RvcmVbXCJsb2NhdGlvbi1pZFwiXSwgc3RvcmVOYW1lOiBzdG9yZVtcImxvY2F0aW9uLW5hbWVcIl0sIC4uLnN0b3JlLmF2YWlsYWJpbGl0eS5yZWR1Y2UoKG9iajogYW55LCBpdGVtOiBhbnkpID0+IHsgb2JqW2l0ZW1bXCJwcm9kdWN0LWNvZGVcIl1dID0gaXRlbVtcInF1YW50aXR5XCJdOyByZXR1cm4gb2JqOyB9LCB7fSkgfTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIFNvSDtcclxuICAgIH1cclxuICAgIHJldHVybiBbIHttc2c6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCJ9LCBdO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGJhc2UgPSBbIHsgSGVhZGVyOiAnU3RvcmUgSUQnLCBhY2Nlc3NvcjogJ3N0b3JlSUQnIH0sIHsgSGVhZGVyOiAnU3RvcmUgTmFtZScsIGFjY2Vzc29yOiAnc3RvcmVOYW1lJyB9IF07XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgIWVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gbmV3IFNldCgpO1xyXG4gICAgICBmb3IgKGNvbnN0IHN0b3JlIG9mIHJlc3BvbnNlPy5yZXN1bHRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHN0b3JlLmF2YWlsYWJpbGl0eSkge1xyXG4gICAgICAgICAgcHJvZHVjdHMuYWRkKGl0ZW1bXCJwcm9kdWN0LWNvZGVcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHByb2R1Y3RzLmtleXMoKSkge1xyXG4gICAgICAgIGJhc2UucHVzaCh7IEhlYWRlcjogaXRlbSwgYWNjZXNzb3I6IGl0ZW0gfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsgeyBIZWFkZXI6IFwiRXJyb3IgLyBNZXNzYWdlXCIsIGFjY2Vzb3I6IFwibXNnXCIgfSBdO1xyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICByZXR1cm4gKFxyXG4gICAgPEltcGxlbWVudGF0aW9uIG5hbWU9XCJTdG9jayBMb29rdXBcIj5cclxuICAgICAge2Jvb21pQVBJLmVuZHBvaW50LnVyaX1cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGxhYmVsPlN0b3JlczogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RvcmVzXCIgcGxhY2Vob2xkZXI9XCJTdG9yZSBJRHMgc2VwZXJhdGVkIGJ5IHNwYWNlc1wiIHN0eWxlPXt7XCJ3aWR0aFwiOiBcIjIwMHB4O1wifX0gLz48YnIvPlxyXG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0czogPC9sYWJlbD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvZHVjdHNcIiBwbGFjZWhvbGRlcj1cIkl0ZW0gTnVtYmVycyBzZXBlcmF0ZWQgYnkgc3BhY2VzXCIgc3R5bGU9e3tcIndpZHRoXCI6IFwiMjI1cHg7XCJ9fSAvPjxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNoZWNrIEF2YWlsYWJpbGl0aWVzXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7aXNMb2FkaW5nID8gXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTWR9PkxvYWRpbmcgeW91ciBkYXRhLi4uPC9oMj5cclxuICAgICAgOiByZXNwb25zZSAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPD48aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+RXJyb3I6PC9oMj48cD57ZXJyb3J9PC9wPjwvPlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9