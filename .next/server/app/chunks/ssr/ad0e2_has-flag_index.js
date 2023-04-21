(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/ad0e2_has-flag_index.js", {

"[project-with-next]/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

}.call(this) }),
}]);


//# sourceMappingURL=ad0e2_has-flag_index.js.map