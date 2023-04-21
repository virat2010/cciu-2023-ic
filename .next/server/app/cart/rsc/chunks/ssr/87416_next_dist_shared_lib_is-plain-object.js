(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_shared_lib_is-plain-object.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/is-plain-object.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getObjectClassLabel = getObjectClassLabel;
exports.isPlainObject = isPlainObject;
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_shared_lib_is-plain-object.js.map