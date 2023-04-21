(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_lib_is-error.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/lib/is-error.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isError;
exports.getProperError = getProperError;
var _isPlainObject = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/is-plain-object.js (ecmascript, ssr)");
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (process.env.NODE_ENV === "development") {
        if (typeof err === "undefined") {
            return new Error("An undefined error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
        if (err === null) {
            return new Error("A null error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
    }
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_lib_is-error.js.map