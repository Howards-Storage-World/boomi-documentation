webpackHotUpdate_N_E("pages/implementations/stock-lookup",{

/***/ "./components/tools/Table.tsx":
/*!************************************!*\
  !*** ./components/tools/Table.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/tools/Table.module.css */ "./components/tools/Table.module.css");
/* harmony import */ var _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\dev\\Boomi-API\\components\\tools\\Table.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable max-lines-per-function, @typescript-eslint/no-explicit-any */




var Table = function Table(_ref) {
  _s();

  var columns = _ref.columns,
      data = _ref.data;

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"])({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_2__["useBlockLayout"], react_table__WEBPACK_IMPORTED_MODULE_2__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_2__["useResizeColumns"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  return __jsx("table", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableProps(), {
    className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, headerGroups.map(function (headerGroup) {
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), headerGroup.headers.map(function (column) {
      return (// Add the sorting props to control sorting. For this example
        // we can add them into the header props
        __jsx("th", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(), {
          className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.th,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }), __jsx("span", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getHeaderProps(column.getSortByToggleProps()), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }
        }), column.render('Header'), column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''), __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 19
          }
        }), __jsx("div", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, column.getResizerProps(), {
          className: "".concat(_components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.resizer, " ").concat(column.isResizing ? _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.isResizing : ''),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 19
          }
        })))
      );
    }));
  })), __jsx("tbody", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), rows.map(function (row) {
    prepareRow(row);
    return __jsx("tr", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), row.cells.map(function (cell) {
      return __jsx("td", Object(C_dev_Boomi_API_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
        className: _components_tools_Table_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.td,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 23
        }
      }), cell.render('Cell'));
    }));
  })));
};

_s(Table, "OJj1dHRwcT5lX75qp47EC5rQD0M=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_2__["useTable"]];
});

_c = Table;
/* harmony default export */ __webpack_exports__["default"] = (Table);

var _c;

$RefreshReg$(_c, "Table");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b29scy9UYWJsZS50c3giXSwibmFtZXMiOlsiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInVzZVRhYmxlIiwidXNlQmxvY2tMYXlvdXQiLCJ1c2VTb3J0QnkiLCJ1c2VSZXNpemVDb2x1bW5zIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJzdHlsZXMiLCJ0YWJsZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsInRyIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwidGgiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsInJlbmRlciIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiZ2V0UmVzaXplclByb3BzIiwicmVzaXplciIsImlzUmVzaXppbmciLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsInRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQStFLEdBQUcsU0FBbEZBLEtBQWtGLE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFPdkdDLDREQUFRLENBQ1Y7QUFDRUYsV0FBTyxFQUFQQSxPQURGO0FBRUVDLFFBQUksRUFBSkE7QUFGRixHQURVLEVBS1ZFLDBEQUxVLEVBTVZDLHFEQU5VLEVBT1ZDLDREQVBVLENBUCtGO0FBQUEsTUFFekdDLGFBRnlHLGFBRXpHQSxhQUZ5RztBQUFBLE1BR3pHQyxpQkFIeUcsYUFHekdBLGlCQUh5RztBQUFBLE1BSXpHQyxZQUp5RyxhQUl6R0EsWUFKeUc7QUFBQSxNQUt6R0MsSUFMeUcsYUFLekdBLElBTHlHO0FBQUEsTUFNekdDLFVBTnlHLGFBTXpHQSxVQU55Rzs7QUFpQjNHLFNBQ0Usa0lBQVdKLGFBQWEsRUFBeEI7QUFBNEIsYUFBUyxFQUFFSyx5RUFBTSxDQUFDQyxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixZQUFZLENBQUNLLEdBQWIsQ0FBaUIsVUFBQUMsV0FBVztBQUFBLFdBQzNCLCtIQUFRQSxXQUFXLENBQUNDLG1CQUFaLEVBQVI7QUFBNEMsZUFBUyxFQUFFSix5RUFBTSxDQUFDSyxFQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0dGLFdBQVcsQ0FBQ0csT0FBWixDQUFvQkosR0FBcEIsQ0FBd0IsVUFBQ0ssTUFBRDtBQUFBLGFBQ3ZCO0FBQ0E7QUFDQSx1SUFBUUEsTUFBTSxDQUFDQyxjQUFQLEVBQVI7QUFBa0MsbUJBQVMsRUFBRVIseUVBQU0sQ0FBQ1MsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNJLGlJQUFVRixNQUFNLENBQUNDLGNBQVAsQ0FBc0JELE1BQU0sQ0FBQ0csb0JBQVAsRUFBdEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ0dILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjLFFBQWQsQ0FESCxFQUVHSixNQUFNLENBQUNLLFFBQVAsR0FDQ0wsTUFBTSxDQUFDTSxZQUFQLEdBQ0UsS0FERixHQUVFLEtBSEgsR0FJQyxFQU5KLENBREosRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVkYsRUFhRSxnSUFDUU4sTUFBTSxDQUFDTyxlQUFQLEVBRFI7QUFFSSxtQkFBUyxZQUFLZCx5RUFBTSxDQUFDZSxPQUFaLGNBQ1BSLE1BQU0sQ0FBQ1MsVUFBUCxHQUFvQmhCLHlFQUFNLENBQUNnQixVQUEzQixHQUF3QyxFQURqQyxDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FiRjtBQUh1QjtBQUFBLEtBQXhCLENBREgsQ0FEMkI7QUFBQSxHQUE1QixDQURILENBREYsRUErQkUsa0lBQVdwQixpQkFBaUIsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHRSxJQUFJLENBQUNJLEdBQUwsQ0FDQyxVQUFDZSxHQUFELEVBQVM7QUFDUGxCLGNBQVUsQ0FBQ2tCLEdBQUQsQ0FBVjtBQUNBLFdBQ0UsK0hBQVFBLEdBQUcsQ0FBQ0MsV0FBSixFQUFSO0FBQTRCLGVBQVMsRUFBRWxCLHlFQUFNLENBQUNLLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDR1ksR0FBRyxDQUFDRSxLQUFKLENBQVVqQixHQUFWLENBQWMsVUFBQWtCLElBQUksRUFBSTtBQUNyQixhQUNFLCtIQUFRQSxJQUFJLENBQUNDLFlBQUwsRUFBUjtBQUE4QixpQkFBUyxFQUFFckIseUVBQU0sQ0FBQ3NCLEVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBcURGLElBQUksQ0FBQ1QsTUFBTCxDQUFZLE1BQVosQ0FBckQsQ0FERjtBQUdELEtBSkEsQ0FESCxDQURGO0FBUUUsR0FYTCxDQURILENBL0JGLENBREY7QUFpREgsQ0FsRUQ7O0dBQU12QixLO1VBT0VHLG9EOzs7S0FQRkgsSztBQW9FU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wbGVtZW50YXRpb25zL3N0b2NrLWxvb2t1cC45ZjgzOTM3NjlhODVlNjhlZDhjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzLXBlci1mdW5jdGlvbiwgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVNvcnRCeSwgdXNlQmxvY2tMYXlvdXQsIHVzZVJlc2l6ZUNvbHVtbnMsIENvbHVtbiB9IGZyb20gJ3JlYWN0LXRhYmxlJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkBjb21wb25lbnRzL3Rvb2xzL1RhYmxlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFRhYmxlOiBGQzx7IGNvbHVtbnM6IENvbHVtbjxhbnk+W10sIGRhdGE6IGFueVtdLCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID4gPSAoeyBjb2x1bW5zLCBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgIGhlYWRlckdyb3VwcyxcclxuICAgICAgcm93cyxcclxuICAgICAgcHJlcGFyZVJvdyxcclxuICAgIH0gPSB1c2VUYWJsZShcclxuICAgICAge1xyXG4gICAgICAgIGNvbHVtbnMsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgfSxcclxuICAgICAgdXNlQmxvY2tMYXlvdXQsXHJcbiAgICAgIHVzZVNvcnRCeSxcclxuICAgICAgdXNlUmVzaXplQ29sdW1uc1xyXG4gICAgKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfSAgY2xhc3NOYW1lPXtzdHlsZXMudHJ9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgc29ydGluZyBwcm9wcyB0byBjb250cm9sIHNvcnRpbmcuIEZvciB0aGlzIGV4YW1wbGVcclxuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBhZGQgdGhlbSBpbnRvIHRoZSBoZWFkZXIgcHJvcHNcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9ICBjbGFzc05hbWU9e3N0eWxlcy50aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldFJlc2l6ZXJQcm9wcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVzaXplcn0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzUmVzaXppbmcgPyBzdHlsZXMuaXNSZXNpemluZyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtyb3dzLm1hcChcclxuICAgICAgICAgICAgKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRyfT5cclxuICAgICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0gIGNsYXNzTmFtZT17c3R5bGVzLnRkfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=