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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Metrics; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/.pnpm/next@13.3.1_biqbaboplfbrettd7655fr4n2y/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n/*\r\nasync function fetchData() {\r\n  try {\r\n    const response = await fetch(\"http://localhost:8080\",{\r\n        method: 'GET',\r\n        mode: \"cors\",\r\n        headers: { 'Content-Type': 'application/json' }\r\n    });\r\n    const data = await response.json();\r\n    console.log('data:', data);\r\n    return data;\r\n  } catch (error) {\r\n    console.error(error);\r\n    throw error;\r\n  }\r\n}\r\n*/ async function getData() {\n    const res = await fetch(\"http://localhost:8080\");\n    if (!res.ok) {\n        throw new Error(\"Failed to fetch data\");\n    }\n    return res.json();\n}\nfunction Metrics() {\n    /*const [data, setData] = useState([]);\r\n    const [loading, setLoading] = useState(true);\r\n\r\n    useEffect(() => {\r\n        fetchData()\r\n            .then((data) => {\r\n                setData(data);\r\n                setLoading(false);\r\n            })\r\n            .catch((error) => {\r\n                console.warn(error);\r\n                setLoading(false);\r\n            });\r\n    }, 1000);\r\n*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n            lineNumber: 47,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Mean: \",\n                        data[0].mean\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Median: \",\n                        data[0].median\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Mode: \",\n                        data[0].mode\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n            lineNumber: 49,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\My JS Projects\\\\cciu-2023\\\\src\\\\Components\\\\metrics.jsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_c = Metrics;\nvar _c;\n$RefreshReg$(_c, \"Metrics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL0NvbXBvbmVudHMvbWV0cmljcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNEM7QUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsR0FDQSxlQUFlRSxVQUFVO0lBQ3ZCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixJQUFJLENBQUNELElBQUlFLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSUMsTUFBTSx3QkFBd0I7SUFDMUMsQ0FBQztJQUNELE9BQU9ILElBQUlJLElBQUk7QUFDakI7QUFDZSxTQUFTQyxVQUFVO0lBQzlCOzs7Ozs7Ozs7Ozs7OztBQWNKLEdBRUkscUJBQ0ksOERBQUNDO2tCQUNJQyx3QkFDRyw4REFBQ0M7c0JBQUU7Ozs7O2lDQUVILDhEQUFDRjs7OEJBQ0csOERBQUNFOzt3QkFBRTt3QkFBT0MsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTs7Ozs7Ozs4QkFDdEIsOERBQUNGOzt3QkFBRTt3QkFBU0MsSUFBSSxDQUFDLEVBQUUsQ0FBQ0UsTUFBTTs7Ozs7Ozs4QkFDMUIsOERBQUNIOzt3QkFBRTt3QkFBT0MsSUFBSSxDQUFDLEVBQUUsQ0FBQ0csSUFBSTs7Ozs7Ozs7Ozs7O2dCQUU3Qjs7Ozs7O0FBR2IsQ0FBQztLQTlCdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL21ldHJpY3MuanN4P2FkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLypcclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCIse1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhOicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59XHJcbiovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xyXG4gIGlmICghcmVzLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuanNvbigpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldHJpY3MoKSB7XHJcbiAgICAvKmNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hEYXRhKClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIDEwMDApO1xyXG4qL1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NZWFuOiB7ZGF0YVswXS5tZWFufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NZWRpYW46IHtkYXRhWzBdLm1lZGlhbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TW9kZToge2RhdGFbMF0ubW9kZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJNZXRyaWNzIiwiZGl2IiwibG9hZGluZyIsInAiLCJkYXRhIiwibWVhbiIsIm1lZGlhbiIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/Components/metrics.jsx\n"));

/***/ })

});