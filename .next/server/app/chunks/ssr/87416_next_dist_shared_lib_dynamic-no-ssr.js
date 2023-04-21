(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_shared_lib_dynamic-no-ssr.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/dynamic-no-ssr.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.suspense = suspense;
exports.NoSSR = NoSSR;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _react = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _noSsrError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/no-ssr-error.js (ecmascript, ssr)");
function suspense() {
    const error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR({ children  }) {
    if (typeof window === 'undefined') {
        suspense();
    }
    return children;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/no-ssr-error.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NEXT_DYNAMIC_NO_SSR_CODE = void 0;
const NEXT_DYNAMIC_NO_SSR_CODE = 'DYNAMIC_SERVER_USAGE';
exports.NEXT_DYNAMIC_NO_SSR_CODE = NEXT_DYNAMIC_NO_SSR_CODE;

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_shared_lib_dynamic-no-ssr.js.map