(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/01270_serialport_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/serialport@10.5.0/node_modules/serialport/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

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
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-byte-length@10.5.0/node_modules/@serialport/parser-byte-length/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-cctalk@10.5.0/node_modules/@serialport/parser-cctalk/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-delimiter@10.5.0/node_modules/@serialport/parser-delimiter/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-inter-byte-timeout@10.5.0/node_modules/@serialport/parser-inter-byte-timeout/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-packet-length@10.5.0/node_modules/@serialport/parser-packet-length/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-readline@10.5.0/node_modules/@serialport/parser-readline/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-ready@10.5.0/node_modules/@serialport/parser-ready/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-regex@10.5.0/node_modules/@serialport/parser-regex/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-slip-encoder@10.5.0/node_modules/@serialport/parser-slip-encoder/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-spacepacket@10.5.0/node_modules/@serialport/parser-spacepacket/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/serialport@10.5.0/node_modules/serialport/dist/serialport-mock.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/serialport@10.5.0/node_modules/serialport/dist/serialport.js (ecmascript, ssr)"), exports);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/serialport@10.5.0/node_modules/serialport/dist/serialport-mock.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SerialPortMock = void 0;
const stream_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+stream@10.5.0/node_modules/@serialport/stream/dist/index.js (ecmascript, ssr)");
const binding_mock_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+binding-mock@10.2.2/node_modules/@serialport/binding-mock/dist/index.js (ecmascript, ssr)");
class SerialPortMock extends stream_1.SerialPortStream {
    constructor(options, openCallback){
        const opts = {
            binding: binding_mock_1.MockBinding,
            ...options
        };
        super(opts, openCallback);
    }
}
exports.SerialPortMock = SerialPortMock;
SerialPortMock.list = binding_mock_1.MockBinding.list;
SerialPortMock.binding = binding_mock_1.MockBinding;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/serialport@10.5.0/node_modules/serialport/dist/serialport.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SerialPort = void 0;
const stream_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+stream@10.5.0/node_modules/@serialport/stream/dist/index.js (ecmascript, ssr)");
const bindings_cpp_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/index.js (ecmascript, ssr)");
const DetectedBinding = (0, bindings_cpp_1.autoDetect)();
class SerialPort extends stream_1.SerialPortStream {
    constructor(options, openCallback){
        const opts = {
            binding: DetectedBinding,
            ...options
        };
        super(opts, openCallback);
    }
}
exports.SerialPort = SerialPort;
SerialPort.list = DetectedBinding.list;
SerialPort.binding = DetectedBinding;

}.call(this) }),
}]);


//# sourceMappingURL=01270_serialport_dist_index.js.map