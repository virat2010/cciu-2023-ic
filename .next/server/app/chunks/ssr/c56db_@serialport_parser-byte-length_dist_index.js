(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/c56db_@serialport_parser-byte-length_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-byte-length@10.5.0/node_modules/@serialport/parser-byte-length/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ByteLengthParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
class ByteLengthParser extends stream_1.Transform {
    constructor(options){
        super(options);
        if (typeof options.length !== 'number') {
            throw new TypeError('"length" is not a number');
        }
        if (options.length < 1) {
            throw new TypeError('"length" is not greater than 0');
        }
        this.length = options.length;
        this.position = 0;
        this.buffer = Buffer.alloc(this.length);
    }
    _transform(chunk, _encoding, cb) {
        let cursor = 0;
        while(cursor < chunk.length){
            this.buffer[this.position] = chunk[cursor];
            cursor++;
            this.position++;
            if (this.position === this.length) {
                this.push(this.buffer);
                this.buffer = Buffer.alloc(this.length);
                this.position = 0;
            }
        }
        cb();
    }
    _flush(cb) {
        this.push(this.buffer.slice(0, this.position));
        this.buffer = Buffer.alloc(this.length);
        cb();
    }
}
exports.ByteLengthParser = ByteLengthParser;

}.call(this) }),
}]);


//# sourceMappingURL=c56db_@serialport_parser-byte-length_dist_index.js.map