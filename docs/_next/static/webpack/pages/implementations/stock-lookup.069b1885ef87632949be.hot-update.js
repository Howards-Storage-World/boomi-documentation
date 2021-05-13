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
/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/tools/BoomiAPI */ "./components/tools/BoomiAPI.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\dev\\Boomi-API\\pages\\implementations\\stock-lookup.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, name, " Implementations"), children);
};

_c = Implementation;

var Table = function Table(_ref2) {
  _s();

  var columns = _ref2.columns,
      data = _ref2.data;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_3__["useSortBy"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case


  var firstPageRows = rows.slice(0, 20);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("table", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTableProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, headerGroup.getHeaderGroupProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }
        }), column.render('Header'), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 19
          }
        }, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''))
      );
    }));
  })), __jsx("tbody", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTableBodyProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), firstPageRows.map(function (row, i) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, row.getRowProps(), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cell.getCellProps(), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 23
        }
      }), cell.render('Cell'));
    }));
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Showing the first 20 results of ", rows.length, " rows"));
};

_s(Table, "BYNTWeoXdryq+6lvDEiS5kf/9Fc=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"]];
});

_c2 = Table;

var StockLookup = function StockLookup() {
  _s2();

  var boomiAPI = Object(_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_6__["useBoomiAPI"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      response = _useState[0],
      setResponse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      error = _useState2[0],
      setError = _useState2[1];

  var payload = {
    "location-ids": ["12100", "12077"],
    "SKUs": ["LTW9141", "LTW9252", "LTW9135"]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(boomiAPI.endpoint.uri, "/ws/simple/getProductAvailability"), payload).then(function (res) {
      return setResponse(res.data);
    })["catch"](function (err) {
      return setError(err);
    });
  }, []);
  var data = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    if (response && !error) {
      var SoH = response === null || response === void 0 ? void 0 : response.results.map(function (store) {
        console.log(store);
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
      storeID: "a"
    }, {
      storeID: "b"
    }];
  }, [response]);
  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
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

          var _iterator2 = _createForOfIteratorHelper(store.availability),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              products.add(item["product-code"]);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } // return SoH;

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    base.push({
      Header: 'LTW9135',
      accessor: 'LTW9135'
    });
    return base;
  }, [response]); // console.log(response)

  return __jsx(Implementation, {
    name: "Stock Lookup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, boomiAPI.endpoint.uri, __jsx(Table, {
    columns: columns,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }));
};

_s2(StockLookup, "CYR5UlE/UvgPsrtN+j7jnGp/BVQ=", false, function () {
  return [_components_tools_BoomiAPI__WEBPACK_IMPORTED_MODULE_6__["useBoomiAPI"]];
});

_c3 = StockLookup;
/* harmony default export */ __webpack_exports__["default"] = (StockLookup);

var _c, _c2, _c3;

$RefreshReg$(_c, "Implementation");
$RefreshReg$(_c2, "Table");
$RefreshReg$(_c3, "StockLookup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC50c3giXSwibmFtZXMiOlsiSW1wbGVtZW50YXRpb24iLCJuYW1lIiwiY2hpbGRyZW4iLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwidXNlVGFibGUiLCJ1c2VTb3J0QnkiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJyb3ciLCJpIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJsZW5ndGgiLCJTdG9ja0xvb2t1cCIsImJvb21pQVBJIiwidXNlQm9vbWlBUEkiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJlcnJvciIsInNldEVycm9yIiwicGF5bG9hZCIsInVzZUVmZmVjdCIsIkF4aW9zIiwicG9zdCIsImVuZHBvaW50IiwidXJpIiwidGhlbiIsInJlcyIsImVyciIsIlJlYWN0IiwidXNlTWVtbyIsIlNvSCIsInJlc3VsdHMiLCJzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZUlEIiwic3RvcmVOYW1lIiwiYXZhaWxhYmlsaXR5IiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImJhc2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsInByb2R1Y3RzIiwiU2V0IiwiYWRkIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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USxHQUFHLElBQUlDLEdBQUosRUFBakI7O0FBRHNCLGlEQUVGOUIsUUFGRSxhQUVGQSxRQUZFLHVCQUVGQSxRQUFRLENBQUVnQixPQUZSO0FBQUE7O0FBQUE7QUFFdEIsNERBQXVDO0FBQUEsY0FBNUJDLEtBQTRCOztBQUFBLHNEQUNsQkEsS0FBSyxDQUFDSyxZQURZO0FBQUE7O0FBQUE7QUFDckMsbUVBQXVDO0FBQUEsa0JBQTVCRyxJQUE0QjtBQUNyQ0ksc0JBQVEsQ0FBQ0UsR0FBVCxDQUFhTixJQUFJLENBQUMsY0FBRCxDQUFqQjtBQUNEO0FBSG9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJdEMsU0FOcUIsQ0FPdEI7O0FBUHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRdkI7O0FBRURDLFFBQUksQ0FBQ00sSUFBTCxDQUFVO0FBQUVMLFlBQU0sRUFBRSxTQUFWO0FBQXFCQyxjQUFRLEVBQUU7QUFBL0IsS0FBVjtBQUNBLFdBQU9GLElBQVA7QUFDRCxHQWRlLEVBY2IsQ0FBQzFCLFFBQUQsQ0FkYSxDQUFoQixDQXZCNEIsQ0F1QzVCOztBQUNBLFNBQ0UsTUFBQyxjQUFEO0FBQWdCLFFBQUksRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFFBQVEsQ0FBQ1ksUUFBVCxDQUFrQkMsR0FEckIsRUFFRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUUxQyxPQUFoQjtBQUF5QixRQUFJLEVBQUVDLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0E5Q0Q7O0lBQU0yQixXO1VBQ2FFLHNFOzs7TUFEYkYsVztBQWdEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC4wNjliMTg4NWVmODc2MzI5NDliZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlU29ydEJ5IH0gZnJvbSAncmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgQXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IHVzZUJvb21pQVBJIH0gZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL0Jvb21pQVBJXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJ0BzdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgSW1wbGVtZW50YXRpb246IEZDPHsgbmFtZTogc3RyaW5nIH0+ID0gKHsgbmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IG1ldGEgPSB7IHRpdGxlOiBuYW1lLCBkZXNjcmlwdGlvbjogYEFuIGltcGxtZW50YXRpb24gb2YgdGhlIEhTVydzIEJvb21pIEFQSSAke25hbWV9IEZ1bmN0aW9uYWxpdHlgIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtgSW1wbGVtZW50YXRpb246ICR7bmFtZX0gfCBIU1cgQm9vbWkgQVBJYH0gbWV0YT17bWV0YX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PntuYW1lfSBJbXBsZW1lbnRhdGlvbnM8L2gyPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IFRhYmxlOiBGQzx7IGNvbHVtbnM6IGFueSwgZGF0YTogYW55fSA+ID0gKHsgY29sdW1ucywgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZ2V0VGFibGVQcm9wcyxcclxuICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgcm93cyxcclxuICAgIHByZXBhcmVSb3csXHJcbiAgfSA9IHVzZVRhYmxlKFxyXG4gICAge1xyXG4gICAgICBjb2x1bW5zLFxyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICAgIHVzZVNvcnRCeVxyXG4gIClcclxuXHJcbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byByZW5kZXIgYWxsIDIwMDAgcm93cyBmb3IgdGhpcyBleGFtcGxlLCBzbyBjYXBcclxuICAvLyBpdCBhdCAyMCBmb3IgdGhpcyB1c2UgY2FzZVxyXG4gIGNvbnN0IGZpcnN0UGFnZVJvd3MgPSByb3dzLnNsaWNlKDAsIDIwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgc29ydGluZyBwcm9wcyB0byBjb250cm9sIHNvcnRpbmcuIEZvciB0aGlzIGV4YW1wbGVcclxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBhZGQgdGhlbSBpbnRvIHRoZSBoZWFkZXIgcHJvcHNcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuICAgICAgICAgICAgICAgICAgey8qIEFkZCBhIHNvcnQgZGlyZWN0aW9uIGluZGljYXRvciAqL31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgICB7Zmlyc3RQYWdlUm93cy5tYXAoXHJcbiAgICAgICAgICAgIChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2PlNob3dpbmcgdGhlIGZpcnN0IDIwIHJlc3VsdHMgb2Yge3Jvd3MubGVuZ3RofSByb3dzPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFN0b2NrTG9va3VwOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCBib29taUFQSSA9IHVzZUJvb21pQVBJKCk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxhbnkgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHsgXCJsb2NhdGlvbi1pZHNcIiA6IFtcIjEyMTAwXCIsIFwiMTIwNzdcIl0sIFwiU0tVc1wiIDogW1wiTFRXOTE0MVwiLFwiTFRXOTI1MlwiLFwiTFRXOTEzNVwiXSB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQXhpb3MucG9zdChgJHtib29taUFQSS5lbmRwb2ludC51cml9L3dzL3NpbXBsZS9nZXRQcm9kdWN0QXZhaWxhYmlsaXR5YCwgcGF5bG9hZClcclxuICAgICAgLnRoZW4ocmVzID0+IHNldFJlc3BvbnNlKHJlcy5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBzZXRFcnJvcihlcnIpKVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgU29IID0gcmVzcG9uc2U/LnJlc3VsdHMubWFwKChzdG9yZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmUpXHJcbiAgICAgICAgcmV0dXJuIHsgc3RvcmVJRDogc3RvcmVbXCJsb2NhdGlvbi1pZFwiXSwgc3RvcmVOYW1lOiBzdG9yZVtcImxvY2F0aW9uLW5hbWVcIl0sIC4uLnN0b3JlLmF2YWlsYWJpbGl0eS5yZWR1Y2UoKG9iajogYW55LCBpdGVtOiBhbnkpID0+IHsgb2JqW2l0ZW1bXCJwcm9kdWN0LWNvZGVcIl1dID0gaXRlbVtcInF1YW50aXR5XCJdOyByZXR1cm4gb2JqOyB9LCB7fSkgfTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIFNvSDtcclxuICAgIH1cclxuICAgIHJldHVybiBbIHtzdG9yZUlEOiBcImFcIn0sIHtzdG9yZUlEOiBcImJcIn0sIF07XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzZSA9IFsgeyBIZWFkZXI6ICdTdG9yZSBJRCcsIGFjY2Vzc29yOiAnc3RvcmVJRCcgfSwgeyBIZWFkZXI6ICdTdG9yZSBOYW1lJywgYWNjZXNzb3I6ICdzdG9yZU5hbWUnIH0gXTtcclxuICAgIGlmIChyZXNwb25zZSAmJiAhZXJyb3IpIHtcclxuICAgICAgY29uc3QgcHJvZHVjdHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RvcmUgb2YgcmVzcG9uc2U/LnJlc3VsdHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RvcmUuYXZhaWxhYmlsaXR5KSB7XHJcbiAgICAgICAgICBwcm9kdWN0cy5hZGQoaXRlbVtcInByb2R1Y3QtY29kZVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBTb0g7XHJcbiAgICB9XHJcblxyXG4gICAgYmFzZS5wdXNoKHsgSGVhZGVyOiAnTFRXOTEzNScsIGFjY2Vzc29yOiAnTFRXOTEzNScgfSk7XHJcbiAgICByZXR1cm4gYmFzZTtcclxuICB9LCBbcmVzcG9uc2VdKTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbXBsZW1lbnRhdGlvbiBuYW1lPVwiU3RvY2sgTG9va3VwXCI+XHJcbiAgICAgIHtib29taUFQSS5lbmRwb2ludC51cml9XHJcbiAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgPC9JbXBsZW1lbnRhdGlvbj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0xvb2t1cDsiXSwic291cmNlUm9vdCI6IiJ9