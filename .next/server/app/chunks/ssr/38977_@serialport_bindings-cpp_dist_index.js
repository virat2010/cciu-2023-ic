(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/38977_@serialport_bindings-cpp_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.autoDetect = void 0;
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const darwin_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/darwin.js (ecmascript, ssr)");
const linux_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/linux.js (ecmascript, ssr)");
const win32_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/win32.js (ecmascript, ssr)");
const debug = (0, debug_1.default)('serialport/bindings-cpp');
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-interface@1.2.2/node_modules/@serialport/bindings-interface/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/darwin.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/linux.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/win32.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/errors.js (ecmascript, ssr)"), exports);
function autoDetect() {
    switch(process.platform){
        case 'win32':
            debug('loading WindowsBinding');
            return win32_1.WindowsBinding;
        case 'darwin':
            debug('loading DarwinBinding');
            return darwin_1.DarwinBinding;
        default:
            debug('loading LinuxBinding');
            return linux_1.LinuxBinding;
    }
}
exports.autoDetect = autoDetect;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/darwin.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DarwinPortBinding = exports.DarwinBinding = void 0;
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const load_bindings_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/load-bindings.js (ecmascript, ssr)");
const poller_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/poller.js (ecmascript, ssr)");
const unix_read_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/unix-read.js (ecmascript, ssr)");
const unix_write_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/unix-write.js (ecmascript, ssr)");
const debug = (0, debug_1.default)('serialport/bindings-cpp');
exports.DarwinBinding = {
    list () {
        debug('list');
        return (0, load_bindings_1.asyncList)();
    },
    async open (options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw new TypeError('"options" is not an object');
        }
        if (!options.path) {
            throw new TypeError('"path" is not a valid port');
        }
        if (!options.baudRate) {
            throw new TypeError('"baudRate" is not a valid baudRate');
        }
        debug('open');
        const openOptions = Object.assign({
            vmin: 1,
            vtime: 0,
            dataBits: 8,
            lock: true,
            stopBits: 1,
            parity: 'none',
            rtscts: false,
            xon: false,
            xoff: false,
            xany: false,
            hupcl: true
        }, options);
        const fd = await (0, load_bindings_1.asyncOpen)(openOptions.path, openOptions);
        return new DarwinPortBinding(fd, openOptions);
    }
};
class DarwinPortBinding {
    constructor(fd, options){
        this.fd = fd;
        this.openOptions = options;
        this.poller = new poller_1.Poller(fd);
        this.writeOperation = null;
    }
    get isOpen() {
        return this.fd !== null;
    }
    async close() {
        debug('close');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        const fd = this.fd;
        this.poller.stop();
        this.poller.destroy();
        this.fd = null;
        await (0, load_bindings_1.asyncClose)(fd);
    }
    async read(buffer, offset, length) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError('"buffer" is not a Buffer');
        }
        if (typeof offset !== 'number' || isNaN(offset)) {
            throw new TypeError(`"offset" is not an integer got "${isNaN(offset) ? 'NaN' : typeof offset}"`);
        }
        if (typeof length !== 'number' || isNaN(length)) {
            throw new TypeError(`"length" is not an integer got "${isNaN(length) ? 'NaN' : typeof length}"`);
        }
        debug('read');
        if (buffer.length < offset + length) {
            throw new Error('buffer is too small');
        }
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        return (0, unix_read_1.unixRead)({
            binding: this,
            buffer,
            offset,
            length
        });
    }
    async write(buffer) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError('"buffer" is not a Buffer');
        }
        debug('write', buffer.length, 'bytes');
        if (!this.isOpen) {
            debug('write', 'error port is not open');
            throw new Error('Port is not open');
        }
        this.writeOperation = (async ()=>{
            if (buffer.length === 0) {
                return;
            }
            await (0, unix_write_1.unixWrite)({
                binding: this,
                buffer
            });
            this.writeOperation = null;
        })();
        return this.writeOperation;
    }
    async update(options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw TypeError('"options" is not an object');
        }
        if (typeof options.baudRate !== 'number') {
            throw new TypeError('"options.baudRate" is not a number');
        }
        debug('update');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncUpdate)(this.fd, options);
    }
    async set(options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw new TypeError('"options" is not an object');
        }
        debug('set', options);
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncSet)(this.fd, options);
    }
    async get() {
        debug('get');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        return (0, load_bindings_1.asyncGet)(this.fd);
    }
    async getBaudRate() {
        debug('getBaudRate');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        throw new Error('getBaudRate is not implemented on darwin');
    }
    async flush() {
        debug('flush');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncFlush)(this.fd);
    }
    async drain() {
        debug('drain');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await this.writeOperation;
        await (0, load_bindings_1.asyncDrain)(this.fd);
    }
}
exports.DarwinPortBinding = DarwinPortBinding;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/linux.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinuxPortBinding = exports.LinuxBinding = void 0;
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const linux_list_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/linux-list.js (ecmascript, ssr)");
const poller_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/poller.js (ecmascript, ssr)");
const unix_read_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/unix-read.js (ecmascript, ssr)");
const unix_write_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/unix-write.js (ecmascript, ssr)");
const load_bindings_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/load-bindings.js (ecmascript, ssr)");
const debug = (0, debug_1.default)('serialport/bindings-cpp');
exports.LinuxBinding = {
    list () {
        debug('list');
        return (0, linux_list_1.linuxList)();
    },
    async open (options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw new TypeError('"options" is not an object');
        }
        if (!options.path) {
            throw new TypeError('"path" is not a valid port');
        }
        if (!options.baudRate) {
            throw new TypeError('"baudRate" is not a valid baudRate');
        }
        debug('open');
        const openOptions = Object.assign({
            vmin: 1,
            vtime: 0,
            dataBits: 8,
            lock: true,
            stopBits: 1,
            parity: 'none',
            rtscts: false,
            xon: false,
            xoff: false,
            xany: false,
            hupcl: true
        }, options);
        const fd = await (0, load_bindings_1.asyncOpen)(openOptions.path, openOptions);
        this.fd = fd;
        return new LinuxPortBinding(fd, openOptions);
    }
};
class LinuxPortBinding {
    constructor(fd, openOptions){
        this.fd = fd;
        this.openOptions = openOptions;
        this.poller = new poller_1.Poller(fd);
        this.writeOperation = null;
    }
    get isOpen() {
        return this.fd !== null;
    }
    async close() {
        debug('close');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        const fd = this.fd;
        this.poller.stop();
        this.poller.destroy();
        this.fd = null;
        await (0, load_bindings_1.asyncClose)(fd);
    }
    async read(buffer, offset, length) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError('"buffer" is not a Buffer');
        }
        if (typeof offset !== 'number' || isNaN(offset)) {
            throw new TypeError(`"offset" is not an integer got "${isNaN(offset) ? 'NaN' : typeof offset}"`);
        }
        if (typeof length !== 'number' || isNaN(length)) {
            throw new TypeError(`"length" is not an integer got "${isNaN(length) ? 'NaN' : typeof length}"`);
        }
        debug('read');
        if (buffer.length < offset + length) {
            throw new Error('buffer is too small');
        }
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        return (0, unix_read_1.unixRead)({
            binding: this,
            buffer,
            offset,
            length
        });
    }
    async write(buffer) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError('"buffer" is not a Buffer');
        }
        debug('write', buffer.length, 'bytes');
        if (!this.isOpen) {
            debug('write', 'error port is not open');
            throw new Error('Port is not open');
        }
        this.writeOperation = (async ()=>{
            if (buffer.length === 0) {
                return;
            }
            await (0, unix_write_1.unixWrite)({
                binding: this,
                buffer
            });
            this.writeOperation = null;
        })();
        return this.writeOperation;
    }
    async update(options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw TypeError('"options" is not an object');
        }
        if (typeof options.baudRate !== 'number') {
            throw new TypeError('"options.baudRate" is not a number');
        }
        debug('update');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncUpdate)(this.fd, options);
    }
    async set(options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw new TypeError('"options" is not an object');
        }
        debug('set');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncSet)(this.fd, options);
    }
    async get() {
        debug('get');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        return (0, load_bindings_1.asyncGet)(this.fd);
    }
    async getBaudRate() {
        debug('getBaudRate');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        return (0, load_bindings_1.asyncGetBaudRate)(this.fd);
    }
    async flush() {
        debug('flush');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncFlush)(this.fd);
    }
    async drain() {
        debug('drain');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await this.writeOperation;
        await (0, load_bindings_1.asyncDrain)(this.fd);
    }
}
exports.LinuxPortBinding = LinuxPortBinding;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/win32.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowsPortBinding = exports.WindowsBinding = void 0;
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const _1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/index.js (ecmascript, ssr)");
const load_bindings_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/load-bindings.js (ecmascript, ssr)");
const win32_sn_parser_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/win32-sn-parser.js (ecmascript, ssr)");
const debug = (0, debug_1.default)('serialport/bindings-cpp');
exports.WindowsBinding = {
    async list () {
        const ports = await (0, load_bindings_1.asyncList)();
        return ports.map((port)=>{
            if (port.pnpId && !port.serialNumber) {
                const serialNumber = (0, win32_sn_parser_1.serialNumParser)(port.pnpId);
                if (serialNumber) {
                    return Object.assign(Object.assign({}, port), {
                        serialNumber
                    });
                }
            }
            return port;
        });
    },
    async open (options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw new TypeError('"options" is not an object');
        }
        if (!options.path) {
            throw new TypeError('"path" is not a valid port');
        }
        if (!options.baudRate) {
            throw new TypeError('"baudRate" is not a valid baudRate');
        }
        debug('open');
        const openOptions = Object.assign({
            dataBits: 8,
            lock: true,
            stopBits: 1,
            parity: 'none',
            rtscts: false,
            rtsMode: 'handshake',
            xon: false,
            xoff: false,
            xany: false,
            hupcl: true
        }, options);
        const fd = await (0, load_bindings_1.asyncOpen)(openOptions.path, openOptions);
        return new WindowsPortBinding(fd, openOptions);
    }
};
class WindowsPortBinding {
    constructor(fd, options){
        this.fd = fd;
        this.openOptions = options;
        this.writeOperation = null;
    }
    get isOpen() {
        return this.fd !== null;
    }
    async close() {
        debug('close');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        const fd = this.fd;
        this.fd = null;
        await (0, load_bindings_1.asyncClose)(fd);
    }
    async read(buffer, offset, length) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError('"buffer" is not a Buffer');
        }
        if (typeof offset !== 'number' || isNaN(offset)) {
            throw new TypeError(`"offset" is not an integer got "${isNaN(offset) ? 'NaN' : typeof offset}"`);
        }
        if (typeof length !== 'number' || isNaN(length)) {
            throw new TypeError(`"length" is not an integer got "${isNaN(length) ? 'NaN' : typeof length}"`);
        }
        debug('read');
        if (buffer.length < offset + length) {
            throw new Error('buffer is too small');
        }
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        try {
            const bytesRead = await (0, load_bindings_1.asyncRead)(this.fd, buffer, offset, length);
            return {
                bytesRead,
                buffer
            };
        } catch (err) {
            if (!this.isOpen) {
                throw new _1.BindingsError(err.message, {
                    canceled: true
                });
            }
            throw err;
        }
    }
    async write(buffer) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError('"buffer" is not a Buffer');
        }
        debug('write', buffer.length, 'bytes');
        if (!this.isOpen) {
            debug('write', 'error port is not open');
            throw new Error('Port is not open');
        }
        this.writeOperation = (async ()=>{
            if (buffer.length === 0) {
                return;
            }
            await (0, load_bindings_1.asyncWrite)(this.fd, buffer);
            this.writeOperation = null;
        })();
        return this.writeOperation;
    }
    async update(options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw TypeError('"options" is not an object');
        }
        if (typeof options.baudRate !== 'number') {
            throw new TypeError('"options.baudRate" is not a number');
        }
        debug('update');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncUpdate)(this.fd, options);
    }
    async set(options) {
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw new TypeError('"options" is not an object');
        }
        debug('set', options);
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncSet)(this.fd, options);
    }
    async get() {
        debug('get');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        return (0, load_bindings_1.asyncGet)(this.fd);
    }
    async getBaudRate() {
        debug('getBaudRate');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        return (0, load_bindings_1.asyncGetBaudRate)(this.fd);
    }
    async flush() {
        debug('flush');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await (0, load_bindings_1.asyncFlush)(this.fd);
    }
    async drain() {
        debug('drain');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await this.writeOperation;
        await (0, load_bindings_1.asyncDrain)(this.fd);
    }
}
exports.WindowsPortBinding = WindowsPortBinding;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/errors.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BindingsError = void 0;
class BindingsError extends Error {
    constructor(message, { canceled =false  } = {}){
        super(message);
        this.canceled = canceled;
    }
}
exports.BindingsError = BindingsError;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/load-bindings.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.asyncWrite = exports.asyncRead = exports.asyncUpdate = exports.asyncSet = exports.asyncOpen = exports.asyncList = exports.asyncGetBaudRate = exports.asyncGet = exports.asyncFlush = exports.asyncDrain = exports.asyncClose = void 0;
const node_gyp_build_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/node-gyp-build@4.6.0/node_modules/node-gyp-build/index.js (ecmascript, ssr)"));
const util_1 = __turbopack_external_require__("util");
const path_1 = __turbopack_external_require__("path");
const binding = (0, node_gyp_build_1.default)((0, path_1.join)(__dirname, '../'));
exports.asyncClose = binding.close ? (0, util_1.promisify)(binding.close) : async ()=>{
    throw new Error('"binding.close" Method not implemented');
};
exports.asyncDrain = binding.drain ? (0, util_1.promisify)(binding.drain) : async ()=>{
    throw new Error('"binding.drain" Method not implemented');
};
exports.asyncFlush = binding.flush ? (0, util_1.promisify)(binding.flush) : async ()=>{
    throw new Error('"binding.flush" Method not implemented');
};
exports.asyncGet = binding.get ? (0, util_1.promisify)(binding.get) : async ()=>{
    throw new Error('"binding.get" Method not implemented');
};
exports.asyncGetBaudRate = binding.getBaudRate ? (0, util_1.promisify)(binding.getBaudRate) : async ()=>{
    throw new Error('"binding.getBaudRate" Method not implemented');
};
exports.asyncList = binding.list ? (0, util_1.promisify)(binding.list) : async ()=>{
    throw new Error('"binding.list" Method not implemented');
};
exports.asyncOpen = binding.open ? (0, util_1.promisify)(binding.open) : async ()=>{
    throw new Error('"binding.open" Method not implemented');
};
exports.asyncSet = binding.set ? (0, util_1.promisify)(binding.set) : async ()=>{
    throw new Error('"binding.set" Method not implemented');
};
exports.asyncUpdate = binding.update ? (0, util_1.promisify)(binding.update) : async ()=>{
    throw new Error('"binding.update" Method not implemented');
};
exports.asyncRead = binding.read ? (0, util_1.promisify)(binding.read) : async ()=>{
    throw new Error('"binding.read" Method not implemented');
};
exports.asyncWrite = binding.read ? (0, util_1.promisify)(binding.write) : async ()=>{
    throw new Error('"binding.write" Method not implemented');
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/poller.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Poller = exports.EVENTS = void 0;
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const events_1 = __turbopack_external_require__("events");
const path_1 = __turbopack_external_require__("path");
const node_gyp_build_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/node-gyp-build@4.6.0/node_modules/node-gyp-build/index.js (ecmascript, ssr)"));
const errors_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/errors.js (ecmascript, ssr)");
const { Poller: PollerBindings  } = (0, node_gyp_build_1.default)((0, path_1.join)(__dirname, '../'));
const logger = (0, debug_1.default)('serialport/bindings-cpp/poller');
exports.EVENTS = {
    UV_READABLE: 0b0001,
    UV_WRITABLE: 0b0010,
    UV_DISCONNECT: 0b0100
};
function handleEvent(error, eventFlag) {
    if (error) {
        logger('error', error);
        this.emit('readable', error);
        this.emit('writable', error);
        this.emit('disconnect', error);
        return;
    }
    if (eventFlag & exports.EVENTS.UV_READABLE) {
        logger('received "readable"');
        this.emit('readable', null);
    }
    if (eventFlag & exports.EVENTS.UV_WRITABLE) {
        logger('received "writable"');
        this.emit('writable', null);
    }
    if (eventFlag & exports.EVENTS.UV_DISCONNECT) {
        logger('received "disconnect"');
        this.emit('disconnect', null);
    }
}
class Poller extends events_1.EventEmitter {
    constructor(fd, FDPoller = PollerBindings){
        logger('Creating poller');
        super();
        this.poller = new FDPoller(fd, handleEvent.bind(this));
    }
    once(event, callback) {
        switch(event){
            case 'readable':
                this.poll(exports.EVENTS.UV_READABLE);
                break;
            case 'writable':
                this.poll(exports.EVENTS.UV_WRITABLE);
                break;
            case 'disconnect':
                this.poll(exports.EVENTS.UV_DISCONNECT);
                break;
        }
        return super.once(event, callback);
    }
    poll(eventFlag = 0) {
        if (eventFlag & exports.EVENTS.UV_READABLE) {
            logger('Polling for "readable"');
        }
        if (eventFlag & exports.EVENTS.UV_WRITABLE) {
            logger('Polling for "writable"');
        }
        if (eventFlag & exports.EVENTS.UV_DISCONNECT) {
            logger('Polling for "disconnect"');
        }
        this.poller.poll(eventFlag);
    }
    stop() {
        logger('Stopping poller');
        this.poller.stop();
        this.emitCanceled();
    }
    destroy() {
        logger('Destroying poller');
        this.poller.destroy();
        this.emitCanceled();
    }
    emitCanceled() {
        const err = new errors_1.BindingsError('Canceled', {
            canceled: true
        });
        this.emit('readable', err);
        this.emit('writable', err);
        this.emit('disconnect', err);
    }
}
exports.Poller = Poller;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/unix-read.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unixRead = void 0;
const util_1 = __turbopack_external_require__("util");
const fs_1 = __turbopack_external_require__("fs");
const errors_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/errors.js (ecmascript, ssr)");
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const logger = (0, debug_1.default)('serialport/bindings-cpp/unixRead');
const readAsync = (0, util_1.promisify)(fs_1.read);
const readable = (binding)=>{
    return new Promise((resolve, reject)=>{
        if (!binding.poller) {
            throw new Error('No poller on bindings');
        }
        binding.poller.once('readable', (err)=>err ? reject(err) : resolve());
    });
};
const unixRead = async ({ binding , buffer , offset , length , fsReadAsync =readAsync  })=>{
    logger('Starting read');
    if (!binding.isOpen || !binding.fd) {
        throw new errors_1.BindingsError('Port is not open', {
            canceled: true
        });
    }
    try {
        const { bytesRead  } = await fsReadAsync(binding.fd, buffer, offset, length, null);
        if (bytesRead === 0) {
            return (0, exports.unixRead)({
                binding,
                buffer,
                offset,
                length,
                fsReadAsync
            });
        }
        logger('Finished read', bytesRead, 'bytes');
        return {
            bytesRead,
            buffer
        };
    } catch (err) {
        logger('read error', err);
        if (err.code === 'EAGAIN' || err.code === 'EWOULDBLOCK' || err.code === 'EINTR') {
            if (!binding.isOpen) {
                throw new errors_1.BindingsError('Port is not open', {
                    canceled: true
                });
            }
            logger('waiting for readable because of code:', err.code);
            await readable(binding);
            return (0, exports.unixRead)({
                binding,
                buffer,
                offset,
                length,
                fsReadAsync
            });
        }
        const disconnectError = err.code === 'EBADF' || err.code === 'ENXIO' || err.code === 'UNKNOWN' || err.errno === -1;
        if (disconnectError) {
            err.disconnect = true;
            logger('disconnecting', err);
        }
        throw err;
    }
};
exports.unixRead = unixRead;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/unix-write.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unixWrite = void 0;
const fs_1 = __turbopack_external_require__("fs");
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const util_1 = __turbopack_external_require__("util");
const logger = (0, debug_1.default)('serialport/bindings-cpp/unixWrite');
const writeAsync = (0, util_1.promisify)(fs_1.write);
const writable = (binding)=>{
    return new Promise((resolve, reject)=>{
        binding.poller.once('writable', (err)=>err ? reject(err) : resolve());
    });
};
const unixWrite = async ({ binding , buffer , offset =0 , fsWriteAsync =writeAsync  })=>{
    const bytesToWrite = buffer.length - offset;
    logger('Starting write', buffer.length, 'bytes offset', offset, 'bytesToWrite', bytesToWrite);
    if (!binding.isOpen || !binding.fd) {
        throw new Error('Port is not open');
    }
    try {
        const { bytesWritten  } = await fsWriteAsync(binding.fd, buffer, offset, bytesToWrite);
        logger('write returned: wrote', bytesWritten, 'bytes');
        if (bytesWritten + offset < buffer.length) {
            if (!binding.isOpen) {
                throw new Error('Port is not open');
            }
            return (0, exports.unixWrite)({
                binding,
                buffer,
                offset: bytesWritten + offset,
                fsWriteAsync
            });
        }
        logger('Finished writing', bytesWritten + offset, 'bytes');
    } catch (err) {
        logger('write errored', err);
        if (err.code === 'EAGAIN' || err.code === 'EWOULDBLOCK' || err.code === 'EINTR') {
            if (!binding.isOpen) {
                throw new Error('Port is not open');
            }
            logger('waiting for writable because of code:', err.code);
            await writable(binding);
            return (0, exports.unixWrite)({
                binding,
                buffer,
                offset,
                fsWriteAsync
            });
        }
        const disconnectError = err.code === 'EBADF' || err.code === 'ENXIO' || err.code === 'UNKNOWN' || err.errno === -1;
        if (disconnectError) {
            err.disconnect = true;
            logger('disconnecting', err);
        }
        logger('error', err);
        throw err;
    }
};
exports.unixWrite = unixWrite;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/linux-list.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.linuxList = void 0;
const child_process_1 = __turbopack_external_require__("child_process");
const parser_readline_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-readline@10.5.0/node_modules/@serialport/parser-readline/dist/index.js (ecmascript, ssr)");
function checkPathOfDevice(path) {
    return /(tty(S|WCH|ACM|USB|AMA|MFD|O|XRUSB)|rfcomm)/.test(path) && path;
}
function propName(name) {
    return ({
        DEVNAME: 'path',
        ID_VENDOR_ENC: 'manufacturer',
        ID_SERIAL_SHORT: 'serialNumber',
        ID_VENDOR_ID: 'vendorId',
        ID_MODEL_ID: 'productId',
        DEVLINKS: 'pnpId'
    })[name.toUpperCase()];
}
function decodeHexEscape(str) {
    return str.replace(/\\x([a-fA-F0-9]{2})/g, (a, b)=>{
        return String.fromCharCode(parseInt(b, 16));
    });
}
function propVal(name, val) {
    if (name === 'pnpId') {
        const match = val.match(/\/by-id\/([^\s]+)/);
        return (match === null || match === void 0 ? void 0 : match[1]) || undefined;
    }
    if (name === 'manufacturer') {
        return decodeHexEscape(val);
    }
    if (/^0x/.test(val)) {
        return val.substr(2);
    }
    return val;
}
function linuxList(spawnCmd = child_process_1.spawn) {
    const ports = [];
    const udevadm = spawnCmd('udevadm', [
        'info',
        '-e'
    ]);
    const lines = udevadm.stdout.pipe(new parser_readline_1.ReadlineParser());
    let skipPort = false;
    let port = {
        path: '',
        manufacturer: undefined,
        serialNumber: undefined,
        pnpId: undefined,
        locationId: undefined,
        vendorId: undefined,
        productId: undefined
    };
    lines.on('data', (line)=>{
        const lineType = line.slice(0, 1);
        const data = line.slice(3);
        if (lineType === 'P') {
            port = {
                path: '',
                manufacturer: undefined,
                serialNumber: undefined,
                pnpId: undefined,
                locationId: undefined,
                vendorId: undefined,
                productId: undefined
            };
            skipPort = false;
            return;
        }
        if (skipPort) {
            return;
        }
        if (lineType === 'N') {
            if (checkPathOfDevice(data)) {
                ports.push(port);
            } else {
                skipPort = true;
            }
            return;
        }
        if (lineType === 'E') {
            const keyValue = data.match(/^(.+)=(.*)/);
            if (!keyValue) {
                return;
            }
            const key = propName(keyValue[1]);
            if (!key) {
                return;
            }
            port[key] = propVal(key, keyValue[2]);
        }
    });
    return new Promise((resolve, reject)=>{
        udevadm.on('close', (code)=>{
            if (code) {
                reject(new Error(`Error listing ports udevadm exited with error code: ${code}`));
            }
        });
        udevadm.on('error', reject);
        lines.on('error', reject);
        lines.on('finish', ()=>resolve(ports));
    });
}
exports.linuxList = linuxList;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.autoDetect = void 0;
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const darwin_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/darwin.js (ecmascript, ssr)");
const linux_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/linux.js (ecmascript, ssr)");
const win32_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/win32.js (ecmascript, ssr)");
const debug = (0, debug_1.default)('serialport/bindings-cpp');
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-interface@1.2.2/node_modules/@serialport/bindings-interface/dist/index.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/darwin.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/linux.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/win32.js (ecmascript, ssr)"), exports);
__exportStar(__turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/errors.js (ecmascript, ssr)"), exports);
function autoDetect() {
    switch(process.platform){
        case 'win32':
            debug('loading WindowsBinding');
            return win32_1.WindowsBinding;
        case 'darwin':
            debug('loading DarwinBinding');
            return darwin_1.DarwinBinding;
        default:
            debug('loading LinuxBinding');
            return linux_1.LinuxBinding;
    }
}
exports.autoDetect = autoDetect;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+bindings-cpp@10.8.0/node_modules/@serialport/bindings-cpp/dist/win32-sn-parser.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serialNumParser = void 0;
const PARSERS = [
    /USB\\(?:.+)\\(.+)/,
    /FTDIBUS\\(?:.+)\+(.+?)A?\\.+/
];
const serialNumParser = (pnpId)=>{
    if (!pnpId) {
        return null;
    }
    for (const parser of PARSERS){
        const sn = pnpId.match(parser);
        if (sn) {
            return sn[1];
        }
    }
    return null;
};
exports.serialNumParser = serialNumParser;

}.call(this) }),
}]);


//# sourceMappingURL=38977_@serialport_bindings-cpp_dist_index.js.map