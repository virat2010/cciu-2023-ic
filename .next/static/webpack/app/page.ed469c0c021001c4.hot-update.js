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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Metrics; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/.pnpm/next@13.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n/*\r\nasync function fetchData() {\r\n  try {\r\n    const response = await fetch(\"http://localhost:8080\",{\r\n        method: 'GET',\r\n        mode: \"cors\",\r\n        headers: { 'Content-Type': 'application/json' }\r\n    });\r\n    const data = await response.json();\r\n    console.log('data:', data);\r\n    return data;\r\n  } catch (error) {\r\n    console.error(error);\r\n    throw error;\r\n  }\r\n}\r\n*/ async function getData() {\n    const res = await fetch(\"http://localhost:8080\");\n    if (!res.ok) {\n        throw new Error(\"Failed to fetch data\");\n    }\n    return res.json();\n}\nfunction Metrics() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData().then((data)=>{\n            setData(data);\n            setLoading(false);\n        }).catch((error)=>{\n            console.warn(error);\n            setLoading(false);\n        });\n    }, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n            lineNumber: 46,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Mean: \",\n                        data[0].mean\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Median: \",\n                        data[0].median\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Mode: \",\n                        data[0].mode\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n            lineNumber: 48,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(Metrics, \"YP7e7Smzxlgf2d3MqLcgRZjo83U=\");\n_c = Metrics;\nvar _c;\n$RefreshReg$(_c, \"Metrics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL0NvbXBvbmVudHMvbWV0cmljcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEdBQ0EsZUFBZUUsVUFBVTtJQUN2QixNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsSUFBSSxDQUFDRCxJQUFJRSxFQUFFLEVBQUU7UUFDWCxNQUFNLElBQUlDLE1BQU0sd0JBQXdCO0lBQzFDLENBQUM7SUFDRCxPQUFPSCxJQUFJSSxJQUFJO0FBQ2pCO0FBQ2UsU0FBU0MsVUFBVTs7SUFDOUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFFM0NDLGdEQUFTQSxDQUFDLElBQU07UUFDWlksWUFDS0MsSUFBSSxDQUFDLENBQUNMLE9BQVM7WUFDWkMsUUFBUUQ7WUFDUkcsV0FBVyxLQUFLO1FBQ3BCLEdBQ0NHLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1lBQ2RDLFFBQVFDLElBQUksQ0FBQ0Y7WUFDYkosV0FBVyxLQUFLO1FBQ3BCO0lBQ1IsR0FBRztJQUVILHFCQUNJLDhEQUFDTztrQkFDSVIsd0JBQ0csOERBQUNTO3NCQUFFOzs7OztpQ0FFSCw4REFBQ0Q7OzhCQUNHLDhEQUFDQzs7d0JBQUU7d0JBQU9YLElBQUksQ0FBQyxFQUFFLENBQUNZLElBQUk7Ozs7Ozs7OEJBQ3RCLDhEQUFDRDs7d0JBQUU7d0JBQVNYLElBQUksQ0FBQyxFQUFFLENBQUNhLE1BQU07Ozs7Ozs7OEJBQzFCLDhEQUFDRjs7d0JBQUU7d0JBQU9YLElBQUksQ0FBQyxFQUFFLENBQUNjLElBQUk7Ozs7Ozs7Ozs7OztnQkFFN0I7Ozs7OztBQUdiLENBQUM7R0E3QnVCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9tZXRyaWNzLmpzeD9hZDVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8qXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YTonLCBkYXRhKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG4qL1xyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAnKTtcclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRyaWNzKCkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaERhdGEoKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1lYW46IHtkYXRhWzBdLm1lYW59PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1lZGlhbjoge2RhdGFbMF0ubWVkaWFufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Nb2RlOiB7ZGF0YVswXS5tb2RlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsIk1ldHJpY3MiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsImRpdiIsInAiLCJtZWFuIiwibWVkaWFuIiwibW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/Components/metrics.jsx\n"));

/***/ })

});