(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/38c23_is-arrayish_index.js", {

"[project-with-next]/node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = function isArrayish(obj) {
    if (!obj || typeof obj === 'string') {
        return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
};

}.call(this) }),
}]);


//# sourceMappingURL=38c23_is-arrayish_index.js.map