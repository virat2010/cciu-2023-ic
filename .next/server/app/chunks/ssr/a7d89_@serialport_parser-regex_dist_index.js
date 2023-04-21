(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/a7d89_@serialport_parser-regex_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-regex@10.5.0/node_modules/@serialport/parser-regex/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegexParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
class RegexParser extends stream_1.Transform {
    constructor({ regex , ...options }){
        const opts = {
            encoding: 'utf8',
            ...options
        };
        if (regex === undefined) {
            throw new TypeError('"options.regex" must be a regular expression pattern or object');
        }
        if (!(regex instanceof RegExp)) {
            regex = new RegExp(regex.toString());
        }
        super(opts);
        this.regex = regex;
        this.data = '';
    }
    _transform(chunk, encoding, cb) {
        const data = this.data + chunk;
        const parts = data.split(this.regex);
        this.data = parts.pop() || '';
        parts.forEach((part)=>{
            this.push(part);
        });
        cb();
    }
    _flush(cb) {
        this.push(this.data);
        this.data = '';
        cb();
    }
}
exports.RegexParser = RegexParser;

}.call(this) }),
}]);


//# sourceMappingURL=a7d89_@serialport_parser-regex_dist_index.js.map