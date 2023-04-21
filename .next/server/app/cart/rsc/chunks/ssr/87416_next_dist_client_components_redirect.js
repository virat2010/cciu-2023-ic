(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_client_components_redirect.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redirect = redirect;
exports.REDIRECT_ERROR_CODE = void 0;
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
exports.REDIRECT_ERROR_CODE = REDIRECT_ERROR_CODE;
function redirect(url) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ';' + url;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_client_components_redirect.js.map