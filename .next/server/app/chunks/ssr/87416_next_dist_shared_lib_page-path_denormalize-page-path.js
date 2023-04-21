(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_shared_lib_page-path_denormalize-page-path.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.denormalizePagePath = denormalizePagePath;
var _utils = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/router/utils/index.js (ecmascript, ssr)");
var _normalizePathSep = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js (ecmascript, ssr)");
function denormalizePagePath(page) {
    let _page = (0, _normalizePathSep).normalizePathSep(page);
    return _page.startsWith('/index/') && !(0, _utils).isDynamicRoute(_page) ? _page.slice(6) : _page !== '/index' ? _page : '/';
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizePathSep = normalizePathSep;
function normalizePathSep(path) {
    return path.replace(/\\/g, '/');
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_shared_lib_page-path_denormalize-page-path.js.map