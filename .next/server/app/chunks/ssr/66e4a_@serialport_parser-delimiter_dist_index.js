(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/66e4a_@serialport_parser-delimiter_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-delimiter@10.5.0/node_modules/@serialport/parser-delimiter/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DelimiterParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
class DelimiterParser extends stream_1.Transform {
    constructor({ delimiter , includeDelimiter =false , ...options }){
        super(options);
        if (delimiter === undefined) {
            throw new TypeError('"delimiter" is not a bufferable object');
        }
        if (delimiter.length === 0) {
            throw new TypeError('"delimiter" has a 0 or undefined length');
        }
        this.includeDelimiter = includeDelimiter;
        this.delimiter = Buffer.from(delimiter);
        this.buffer = Buffer.alloc(0);
    }
    _transform(chunk, encoding, cb) {
        let data = Buffer.concat([
            this.buffer,
            chunk
        ]);
        let position;
        while((position = data.indexOf(this.delimiter)) !== -1){
            this.push(data.slice(0, position + (this.includeDelimiter ? this.delimiter.length : 0)));
            data = data.slice(position + this.delimiter.length);
        }
        this.buffer = data;
        cb();
    }
    _flush(cb) {
        this.push(this.buffer);
        this.buffer = Buffer.alloc(0);
        cb();
    }
}
exports.DelimiterParser = DelimiterParser;

}.call(this) }),
}]);


//# sourceMappingURL=66e4a_@serialport_parser-delimiter_dist_index.js.map