(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/e2083_camelcase-css_index.js", {

"[project-with-next]/node_modules/.pnpm/camelcase-css@2.0.1/node_modules/camelcase-css/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
const pattern = /-(\w|$)/g;
const callback = (dashChar, char)=>char.toUpperCase();
const camelCaseCSS = (property)=>{
    property = property.toLowerCase();
    if (property === "float") {
        return "cssFloat";
    } else if (property.startsWith("-ms-")) {
        return property.substr(1).replace(pattern, callback);
    } else {
        return property.replace(pattern, callback);
    }
};
module.exports = camelCaseCSS;

}.call(this) }),
}]);


//# sourceMappingURL=e2083_camelcase-css_index.js.map