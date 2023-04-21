(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_client_normalize-trailing-slash.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/normalize-trailing-slash.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js (ecmascript, ssr)");
var _parsePath = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js (ecmascript, ssr)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
            return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
        } else if (pathname.endsWith('/')) {
            return `${pathname}${query}${hash}`;
        } else {
            return `${pathname}/${query}${hash}`;
        }
    }
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_client_normalize-trailing-slash.js.map