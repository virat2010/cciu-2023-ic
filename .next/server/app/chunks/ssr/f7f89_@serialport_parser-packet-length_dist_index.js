(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/f7f89_@serialport_parser-packet-length_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-packet-length@10.5.0/node_modules/@serialport/parser-packet-length/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PacketLengthParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
class PacketLengthParser extends stream_1.Transform {
    constructor(options = {}){
        super(options);
        const { delimiter =0xaa , packetOverhead =2 , lengthBytes =1 , lengthOffset =1 , maxLen =0xff  } = options;
        this.opts = {
            delimiter,
            packetOverhead,
            lengthBytes,
            lengthOffset,
            maxLen
        };
        this.buffer = Buffer.alloc(0);
        this.start = false;
    }
    _transform(chunk, encoding, cb) {
        for(let ndx = 0; ndx < chunk.length; ndx++){
            const byte = chunk[ndx];
            if (byte === this.opts.delimiter) {
                this.start = true;
            }
            if (true === this.start) {
                this.buffer = Buffer.concat([
                    this.buffer,
                    Buffer.from([
                        byte
                    ])
                ]);
                if (this.buffer.length >= this.opts.lengthOffset + this.opts.lengthBytes) {
                    const len = this.buffer.readUIntLE(this.opts.lengthOffset, this.opts.lengthBytes);
                    if (this.buffer.length == len + this.opts.packetOverhead || len > this.opts.maxLen) {
                        this.push(this.buffer);
                        this.buffer = Buffer.alloc(0);
                        this.start = false;
                    }
                }
            }
        }
        cb();
    }
    _flush(cb) {
        this.push(this.buffer);
        this.buffer = Buffer.alloc(0);
        cb();
    }
}
exports.PacketLengthParser = PacketLengthParser;

}.call(this) }),
}]);


//# sourceMappingURL=f7f89_@serialport_parser-packet-length_dist_index.js.map