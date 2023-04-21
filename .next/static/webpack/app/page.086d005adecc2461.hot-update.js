"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/Components/metrics.jsx":
/*!************************************!*\
  !*** ./src/Components/metrics.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Metrics; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.1.5_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/.pnpm/next@13.1.5_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Metrics() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        JSON.parse(fetch(\"http://localhost:8080\")).then((res)=>res.json()).then((data)=>{\n            setData(data);\n            setLoading(false);\n        }).catch((error)=>{\n            console.error(error);\n            setLoading(false);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n            lineNumber: 14,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Mean: \",\n                        data[0].mean\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Median: \",\n                        data[0].median\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Mode: \",\n                        data[0].mode\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n            lineNumber: 16,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(Metrics, \"YP7e7Smzxlgf2d3MqLcgRZjo83U=\");\n_c = Metrics;\nvar _c;\n$RefreshReg$(_c, \"Metrics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL0NvbXBvbmVudHMvbWV0cmljcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBRTdCLFNBQVNFLFVBQVU7O0lBQzlCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pNLEtBQUtDLEtBQUssQ0FBQ0MsTUFBTSwwQkFBMEJDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUNQLENBQUFBLE9BQU07WUFBQ0MsUUFBUUQ7WUFBTUcsV0FBVyxLQUFLO1FBQUUsR0FBR08sS0FBSyxDQUFDQyxDQUFBQSxRQUFPO1lBQUNDLFFBQVFELEtBQUssQ0FBQ0E7WUFBT1IsV0FBVyxLQUFLO1FBQUU7SUFBRyxHQUFHLEVBQUU7SUFFbkwscUJBQ0ksOERBQUNVO2tCQUNJWCx3QkFDRyw4REFBQ1k7c0JBQUU7Ozs7O2lDQUVILDhEQUFDRDs7OEJBQ0csOERBQUNDOzt3QkFBRTt3QkFBT2QsSUFBSSxDQUFDLEVBQUUsQ0FBQ2UsSUFBSTs7Ozs7Ozs4QkFDdEIsOERBQUNEOzt3QkFBRTt3QkFBU2QsSUFBSSxDQUFDLEVBQUUsQ0FBQ2dCLE1BQU07Ozs7Ozs7OEJBQzFCLDhEQUFDRjs7d0JBQUU7d0JBQU9kLElBQUksQ0FBQyxFQUFFLENBQUNpQixJQUFJOzs7Ozs7Ozs7Ozs7Z0JBRTdCOzs7Ozs7QUFHYixDQUFDO0dBcEJ1QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL21ldHJpY3MuanN4P2FkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0cmljcygpIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgSlNPTi5wYXJzZShmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiKSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihkYXRhPT57c2V0RGF0YShkYXRhKTtzZXRMb2FkaW5nKGZhbHNlKTt9KS5jYXRjaChlcnJvcj0+e2NvbnNvbGUuZXJyb3IoZXJyb3IpO3NldExvYWRpbmcoZmFsc2UpO30pO30sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWVhbjoge2RhdGFbMF0ubWVhbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWVkaWFuOiB7ZGF0YVswXS5tZWRpYW59PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1vZGU6IHtkYXRhWzBdLm1vZGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWV0cmljcyIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJKU09OIiwicGFyc2UiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJwIiwibWVhbiIsIm1lZGlhbiIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/Components/metrics.jsx\n"));

/***/ })

});