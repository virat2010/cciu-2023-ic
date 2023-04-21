(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_shared_lib_server-inserted-html.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useServerInsertedHTML = useServerInsertedHTML;
exports.ServerInsertedHTMLContext = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _react = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const ServerInsertedHTMLContext = _react.default.createContext(null);
exports.ServerInsertedHTMLContext = ServerInsertedHTMLContext;
function useServerInsertedHTML(callback) {
    const addInsertedServerHTMLCallback = (0, _react).useContext(ServerInsertedHTMLContext);
    if (addInsertedServerHTMLCallback) {
        addInsertedServerHTMLCallback(callback);
    }
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_shared_lib_server-inserted-html.js.map