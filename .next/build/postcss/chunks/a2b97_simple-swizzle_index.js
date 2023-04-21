(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/a2b97_simple-swizzle_index.js", {

"[project-with-next]/node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
var isArrayish = __turbopack_require__("[project-with-next]/node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js (ecmascript)");
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
    var results = [];
    for(var i = 0, len = args.length; i < len; i++){
        var arg = args[i];
        if (isArrayish(arg)) {
            results = concat.call(results, slice.call(arg));
        } else {
            results.push(arg);
        }
    }
    return results;
};
swizzle.wrap = function(fn) {
    return function() {
        return fn(swizzle(arguments));
    };
};

}.call(this) }),
}]);


//# sourceMappingURL=a2b97_simple-swizzle_index.js.map