(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/58094_@serialport_parser-ready_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-ready@10.5.0/node_modules/@serialport/parser-ready/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReadyParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
class ReadyParser extends stream_1.Transform {
    constructor({ delimiter , ...options }){
        if (delimiter === undefined) {
            throw new TypeError('"delimiter" is not a bufferable object');
        }
        if (delimiter.length === 0) {
            throw new TypeError('"delimiter" has a 0 or undefined length');
        }
        super(options);
        this.delimiter = Buffer.from(delimiter);
        this.readOffset = 0;
        this.ready = false;
    }
    _transform(chunk, encoding, cb) {
        if (this.ready) {
            this.push(chunk);
            return cb();
        }
        const delimiter = this.delimiter;
        let chunkOffset = 0;
        while(this.readOffset < delimiter.length && chunkOffset < chunk.length){
            if (delimiter[this.readOffset] === chunk[chunkOffset]) {
                this.readOffset++;
            } else {
                this.readOffset = 0;
            }
            chunkOffset++;
        }
        if (this.readOffset === delimiter.length) {
            this.ready = true;
            this.emit('ready');
            const chunkRest = chunk.slice(chunkOffset);
            if (chunkRest.length > 0) {
                this.push(chunkRest);
            }
        }
        cb();
    }
}
exports.ReadyParser = ReadyParser;

}.call(this) }),
}]);


//# sourceMappingURL=58094_@serialport_parser-ready_dist_index.js.map