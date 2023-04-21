(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/60ef7_@serialport_parser-inter-byte-timeout_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-inter-byte-timeout@10.5.0/node_modules/@serialport/parser-inter-byte-timeout/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InterByteTimeoutParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
class InterByteTimeoutParser extends stream_1.Transform {
    constructor({ maxBufferSize =65536 , interval , ...transformOptions }){
        super(transformOptions);
        if (!interval) {
            throw new TypeError('"interval" is required');
        }
        if (typeof interval !== 'number' || Number.isNaN(interval)) {
            throw new TypeError('"interval" is not a number');
        }
        if (interval < 1) {
            throw new TypeError('"interval" is not greater than 0');
        }
        if (typeof maxBufferSize !== 'number' || Number.isNaN(maxBufferSize)) {
            throw new TypeError('"maxBufferSize" is not a number');
        }
        if (maxBufferSize < 1) {
            throw new TypeError('"maxBufferSize" is not greater than 0');
        }
        this.maxBufferSize = maxBufferSize;
        this.currentPacket = [];
        this.interval = interval;
    }
    _transform(chunk, encoding, cb) {
        if (this.intervalID) {
            clearTimeout(this.intervalID);
        }
        for(let offset = 0; offset < chunk.length; offset++){
            this.currentPacket.push(chunk[offset]);
            if (this.currentPacket.length >= this.maxBufferSize) {
                this.emitPacket();
            }
        }
        this.intervalID = setTimeout(this.emitPacket.bind(this), this.interval);
        cb();
    }
    emitPacket() {
        if (this.intervalID) {
            clearTimeout(this.intervalID);
        }
        if (this.currentPacket.length > 0) {
            this.push(Buffer.from(this.currentPacket));
        }
        this.currentPacket = [];
    }
    _flush(cb) {
        this.emitPacket();
        cb();
    }
}
exports.InterByteTimeoutParser = InterByteTimeoutParser;

}.call(this) }),
}]);


//# sourceMappingURL=60ef7_@serialport_parser-inter-byte-timeout_dist_index.js.map