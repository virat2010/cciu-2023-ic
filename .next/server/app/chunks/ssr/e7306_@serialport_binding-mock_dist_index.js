(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/e7306_@serialport_binding-mock_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+binding-mock@10.2.2/node_modules/@serialport/binding-mock/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var debugFactory = __turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var debugFactory__default = _interopDefaultLegacy(debugFactory);
const debug = debugFactory__default["default"]('serialport/binding-mock');
let ports = {};
let serialNumber = 0;
function resolveNextTick() {
    return new Promise((resolve)=>process.nextTick(()=>resolve()));
}
class CanceledError extends Error {
    constructor(message){
        super(message);
        this.canceled = true;
    }
}
const MockBinding = {
    reset () {
        ports = {};
        serialNumber = 0;
    },
    createPort (path, options = {}) {
        serialNumber++;
        const optWithDefaults = Object.assign({
            echo: false,
            record: false,
            manufacturer: 'The J5 Robotics Company',
            vendorId: undefined,
            productId: undefined,
            maxReadSize: 1024
        }, options);
        ports[path] = {
            data: Buffer.alloc(0),
            echo: optWithDefaults.echo,
            record: optWithDefaults.record,
            readyData: optWithDefaults.readyData,
            maxReadSize: optWithDefaults.maxReadSize,
            info: {
                path,
                manufacturer: optWithDefaults.manufacturer,
                serialNumber: `${serialNumber}`,
                pnpId: undefined,
                locationId: undefined,
                vendorId: optWithDefaults.vendorId,
                productId: optWithDefaults.productId
            }
        };
        debug(serialNumber, 'created port', JSON.stringify({
            path,
            opt: options
        }));
    },
    async list () {
        debug(null, 'list');
        return Object.values(ports).map((port)=>port.info);
    },
    async open (options) {
        var _a;
        if (!options || typeof options !== 'object' || Array.isArray(options)) {
            throw new TypeError('"options" is not an object');
        }
        if (!options.path) {
            throw new TypeError('"path" is not a valid port');
        }
        if (!options.baudRate) {
            throw new TypeError('"baudRate" is not a valid baudRate');
        }
        const openOptions = Object.assign({
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
        const { path  } = openOptions;
        debug(null, `open: opening path ${path}`);
        const port = ports[path];
        await resolveNextTick();
        if (!port) {
            throw new Error(`Port does not exist - please call MockBinding.createPort('${path}') first`);
        }
        const serialNumber = port.info.serialNumber;
        if ((_a = port.openOpt) === null || _a === void 0 ? void 0 : _a.lock) {
            debug(serialNumber, 'open: Port is locked cannot open');
            throw new Error('Port is locked cannot open');
        }
        debug(serialNumber, `open: opened path ${path}`);
        port.openOpt = Object.assign({}, openOptions);
        return new MockPortBinding(port, openOptions);
    }
};
class MockPortBinding {
    constructor(port, openOptions){
        this.port = port;
        this.openOptions = openOptions;
        this.pendingRead = null;
        this.isOpen = true;
        this.lastWrite = null;
        this.recording = Buffer.alloc(0);
        this.writeOperation = null;
        this.serialNumber = port.info.serialNumber;
        if (port.readyData) {
            const data = port.readyData;
            process.nextTick(()=>{
                if (this.isOpen) {
                    debug(this.serialNumber, 'emitting ready data');
                    this.emitData(data);
                }
            });
        }
    }
    emitData(data) {
        if (!this.isOpen || !this.port) {
            throw new Error('Port must be open to pretend to receive data');
        }
        const bufferData = Buffer.isBuffer(data) ? data : Buffer.from(data);
        debug(this.serialNumber, 'emitting data - pending read:', Boolean(this.pendingRead));
        this.port.data = Buffer.concat([
            this.port.data,
            bufferData
        ]);
        if (this.pendingRead) {
            process.nextTick(this.pendingRead);
            this.pendingRead = null;
        }
    }
    async close() {
        debug(this.serialNumber, 'close');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        const port = this.port;
        if (!port) {
            throw new Error('already closed');
        }
        port.openOpt = undefined;
        port.data = Buffer.alloc(0);
        debug(this.serialNumber, 'port is closed');
        this.serialNumber = undefined;
        this.isOpen = false;
        if (this.pendingRead) {
            this.pendingRead(new CanceledError('port is closed'));
        }
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
        if (buffer.length < offset + length) {
            throw new Error('buffer is too small');
        }
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        debug(this.serialNumber, 'read', length, 'bytes');
        await resolveNextTick();
        if (!this.isOpen || !this.port) {
            throw new CanceledError('Read canceled');
        }
        if (this.port.data.length <= 0) {
            return new Promise((resolve, reject)=>{
                this.pendingRead = (err)=>{
                    if (err) {
                        return reject(err);
                    }
                    this.read(buffer, offset, length).then(resolve, reject);
                };
            });
        }
        const lengthToRead = this.port.maxReadSize > length ? length : this.port.maxReadSize;
        const data = this.port.data.slice(0, lengthToRead);
        const bytesRead = data.copy(buffer, offset);
        this.port.data = this.port.data.slice(lengthToRead);
        debug(this.serialNumber, 'read', bytesRead, 'bytes');
        return {
            bytesRead,
            buffer
        };
    }
    async write(buffer) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError('"buffer" is not a Buffer');
        }
        if (!this.isOpen || !this.port) {
            debug('write', 'error port is not open');
            throw new Error('Port is not open');
        }
        debug(this.serialNumber, 'write', buffer.length, 'bytes');
        if (this.writeOperation) {
            throw new Error('Overlapping writes are not supported and should be queued by the serialport object');
        }
        this.writeOperation = (async ()=>{
            await resolveNextTick();
            if (!this.isOpen || !this.port) {
                throw new Error('Write canceled');
            }
            const data = this.lastWrite = Buffer.from(buffer);
            if (this.port.record) {
                this.recording = Buffer.concat([
                    this.recording,
                    data
                ]);
            }
            if (this.port.echo) {
                process.nextTick(()=>{
                    if (this.isOpen) {
                        this.emitData(data);
                    }
                });
            }
            this.writeOperation = null;
            debug(this.serialNumber, 'writing finished');
        })();
        return this.writeOperation;
    }
    async update(options) {
        if (typeof options !== 'object') {
            throw TypeError('"options" is not an object');
        }
        if (typeof options.baudRate !== 'number') {
            throw new TypeError('"options.baudRate" is not a number');
        }
        debug(this.serialNumber, 'update');
        if (!this.isOpen || !this.port) {
            throw new Error('Port is not open');
        }
        await resolveNextTick();
        if (this.port.openOpt) {
            this.port.openOpt.baudRate = options.baudRate;
        }
    }
    async set(options) {
        if (typeof options !== 'object') {
            throw new TypeError('"options" is not an object');
        }
        debug(this.serialNumber, 'set');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await resolveNextTick();
    }
    async get() {
        debug(this.serialNumber, 'get');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await resolveNextTick();
        return {
            cts: true,
            dsr: false,
            dcd: false
        };
    }
    async getBaudRate() {
        var _a;
        debug(this.serialNumber, 'getBaudRate');
        if (!this.isOpen || !this.port) {
            throw new Error('Port is not open');
        }
        await resolveNextTick();
        if (!((_a = this.port.openOpt) === null || _a === void 0 ? void 0 : _a.baudRate)) {
            throw new Error('Internal Error');
        }
        return {
            baudRate: this.port.openOpt.baudRate
        };
    }
    async flush() {
        debug(this.serialNumber, 'flush');
        if (!this.isOpen || !this.port) {
            throw new Error('Port is not open');
        }
        await resolveNextTick();
        this.port.data = Buffer.alloc(0);
    }
    async drain() {
        debug(this.serialNumber, 'drain');
        if (!this.isOpen) {
            throw new Error('Port is not open');
        }
        await this.writeOperation;
        await resolveNextTick();
    }
}
exports.CanceledError = CanceledError;
exports.MockBinding = MockBinding;
exports.MockPortBinding = MockPortBinding;

}.call(this) }),
}]);


//# sourceMappingURL=e7306_@serialport_binding-mock_dist_index.js.map