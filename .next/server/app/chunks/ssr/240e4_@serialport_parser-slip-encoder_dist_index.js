(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/240e4_@serialport_parser-slip-encoder_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-slip-encoder@10.5.0/node_modules/@serialport/parser-slip-encoder/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-slip-encoder@10.5.0/node_modules/@serialport/parser-slip-encoder/dist/decoder.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-slip-encoder@10.5.0/node_modules/@serialport/parser-slip-encoder/dist/encoder.js (ecmascript, ssr)"), exports);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+parser-slip-encoder@10.5.0/node_modules/@serialport/parser-slip-encoder/dist/decoder.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlipDecoder = void 0;
const stream_1 = __turbopack_external_require__("stream");
class SlipDecoder extends stream_1.Transform {
    constructor(options = {}){
        super(options);
        const { START , ESC =0xdb , END =0xc0 , ESC_START , ESC_END =0xdc , ESC_ESC =0xdd  } = options;
        this.opts = {
            START,
            ESC,
            END,
            ESC_START,
            ESC_END,
            ESC_ESC
        };
        this.buffer = Buffer.alloc(0);
        this.escape = false;
        this.start = false;
    }
    _transform(chunk, encoding, cb) {
        for(let ndx = 0; ndx < chunk.length; ndx++){
            let byte = chunk[ndx];
            if (byte === this.opts.START) {
                this.start = true;
                continue;
            } else if (undefined == this.opts.START) {
                this.start = true;
            }
            if (this.escape) {
                if (byte === this.opts.ESC_START && this.opts.START) {
                    byte = this.opts.START;
                } else if (byte === this.opts.ESC_ESC) {
                    byte = this.opts.ESC;
                } else if (byte === this.opts.ESC_END) {
                    byte = this.opts.END;
                } else {
                    this.escape = false;
                    this.push(this.buffer);
                    this.buffer = Buffer.alloc(0);
                }
            } else {
                if (byte === this.opts.ESC) {
                    this.escape = true;
                    continue;
                }
                if (byte === this.opts.END) {
                    this.push(this.buffer);
                    this.buffer = Buffer.alloc(0);
                    this.escape = false;
                    this.start = false;
                    continue;
                }
            }
            this.escape = false;
            if (this.start) {
                this.buffer = Buffer.concat([
                    this.buffer,
                    Buffer.from([
                        byte
                    ])
                ]);
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
exports.SlipDecoder = SlipDecoder;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+parser-slip-encoder@10.5.0/node_modules/@serialport/parser-slip-encoder/dist/encoder.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlipEncoder = void 0;
const stream_1 = __turbopack_external_require__("stream");
class SlipEncoder extends stream_1.Transform {
    constructor(options = {}){
        super(options);
        const { START , ESC =0xdb , END =0xc0 , ESC_START , ESC_END =0xdc , ESC_ESC =0xdd , bluetoothQuirk =false  } = options;
        this.opts = {
            START,
            ESC,
            END,
            ESC_START,
            ESC_END,
            ESC_ESC,
            bluetoothQuirk
        };
    }
    _transform(chunk, encoding, cb) {
        const chunkLength = chunk.length;
        if (this.opts.bluetoothQuirk && chunkLength === 0) {
            return cb();
        }
        const encoded = Buffer.alloc(chunkLength * 2 + 2);
        let j = 0;
        if (this.opts.bluetoothQuirk == true) {
            encoded[j++] = this.opts.END;
        }
        if (this.opts.START !== undefined) {
            encoded[j++] = this.opts.START;
        }
        for(let i = 0; i < chunkLength; i++){
            let byte = chunk[i];
            if (byte === this.opts.START && this.opts.ESC_START) {
                encoded[j++] = this.opts.ESC;
                byte = this.opts.ESC_START;
            } else if (byte === this.opts.END) {
                encoded[j++] = this.opts.ESC;
                byte = this.opts.ESC_END;
            } else if (byte === this.opts.ESC) {
                encoded[j++] = this.opts.ESC;
                byte = this.opts.ESC_ESC;
            }
            encoded[j++] = byte;
        }
        encoded[j++] = this.opts.END;
        cb(null, encoded.slice(0, j));
    }
}
exports.SlipEncoder = SlipEncoder;

}.call(this) }),
}]);


//# sourceMappingURL=240e4_@serialport_parser-slip-encoder_dist_index.js.map