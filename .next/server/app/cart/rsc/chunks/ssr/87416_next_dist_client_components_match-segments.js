(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_client_components_match-segments.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchSegment = void 0;
const matchSegment = (existingSegment, segment)=>{
    if (typeof existingSegment === 'string' && typeof segment === 'string') {
        return existingSegment === segment;
    }
    if (Array.isArray(existingSegment) && Array.isArray(segment)) {
        return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
    }
    return false;
};
exports.matchSegment = matchSegment;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_client_components_match-segments.js.map