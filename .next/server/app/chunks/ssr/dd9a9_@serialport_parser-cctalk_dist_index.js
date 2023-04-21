(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/dd9a9_@serialport_parser-cctalk_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-cctalk@10.5.0/node_modules/@serialport/parser-cctalk/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CCTalkParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
class CCTalkParser extends stream_1.Transform {
    constructor(maxDelayBetweenBytesMs = 50){
        super();
        this.array = [];
        this.cursor = 0;
        this.lastByteFetchTime = 0;
        this.maxDelayBetweenBytesMs = maxDelayBetweenBytesMs;
    }
    _transform(buffer, encoding, cb) {
        if (this.maxDelayBetweenBytesMs > 0) {
            const now = Date.now();
            if (now - this.lastByteFetchTime > this.maxDelayBetweenBytesMs) {
                this.array = [];
                this.cursor = 0;
            }
            this.lastByteFetchTime = now;
        }
        this.cursor += buffer.length;
        Array.from(buffer).map((byte)=>this.array.push(byte));
        while(this.cursor > 1 && this.cursor >= this.array[1] + 5){
            const FullMsgLength = this.array[1] + 5;
            const frame = Buffer.from(this.array.slice(0, FullMsgLength));
            this.array = this.array.slice(frame.length, this.array.length);
            this.cursor -= FullMsgLength;
            this.push(frame);
        }
        cb();
    }
}
exports.CCTalkParser = CCTalkParser;

}.call(this) }),
}]);


//# sourceMappingURL=dd9a9_@serialport_parser-cctalk_dist_index.js.map