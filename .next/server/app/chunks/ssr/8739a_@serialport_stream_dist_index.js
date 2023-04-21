(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/8739a_@serialport_stream_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+stream@10.5.0/node_modules/@serialport/stream/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SerialPortStream = exports.DisconnectedError = void 0;
const stream_1 = __turbopack_external_require__("stream");
const debug_1 = __importDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/index.js (ecmascript, ssr)"));
const debug = (0, debug_1.default)('serialport/stream');
class DisconnectedError extends Error {
    constructor(message){
        super(message);
        this.disconnected = true;
    }
}
exports.DisconnectedError = DisconnectedError;
const defaultSetFlags = {
    brk: false,
    cts: false,
    dtr: true,
    rts: true
};
function allocNewReadPool(poolSize) {
    const pool = Buffer.allocUnsafe(poolSize);
    pool.used = 0;
    return pool;
}
class SerialPortStream extends stream_1.Duplex {
    constructor(options, openCallback){
        const settings = {
            autoOpen: true,
            endOnClose: false,
            highWaterMark: 64 * 1024,
            ...options
        };
        super({
            highWaterMark: settings.highWaterMark
        });
        if (!settings.binding) {
            throw new TypeError('"Bindings" is invalid pass it as `options.binding`');
        }
        if (!settings.path) {
            throw new TypeError(`"path" is not defined: ${settings.path}`);
        }
        if (typeof settings.baudRate !== 'number') {
            throw new TypeError(`"baudRate" must be a number: ${settings.baudRate}`);
        }
        this.settings = settings;
        this.opening = false;
        this.closing = false;
        this._pool = allocNewReadPool(this.settings.highWaterMark);
        this._kMinPoolSpace = 128;
        if (this.settings.autoOpen) {
            this.open(openCallback);
        }
    }
    get path() {
        return this.settings.path;
    }
    get baudRate() {
        return this.settings.baudRate;
    }
    get isOpen() {
        var _a, _b;
        return ((_b = (_a = this.port) === null || _a === void 0 ? void 0 : _a.isOpen) !== null && _b !== void 0 ? _b : false) && !this.closing;
    }
    _error(error, callback) {
        if (callback) {
            callback.call(this, error);
        } else {
            this.emit('error', error);
        }
    }
    _asyncError(error, callback) {
        process.nextTick(()=>this._error(error, callback));
    }
    open(openCallback) {
        if (this.isOpen) {
            return this._asyncError(new Error('Port is already open'), openCallback);
        }
        if (this.opening) {
            return this._asyncError(new Error('Port is opening'), openCallback);
        }
        const { highWaterMark , binding , autoOpen , endOnClose , ...openOptions } = this.settings;
        this.opening = true;
        debug('opening', `path: ${this.path}`);
        this.settings.binding.open(openOptions).then((port)=>{
            debug('opened', `path: ${this.path}`);
            this.port = port;
            this.opening = false;
            this.emit('open');
            if (openCallback) {
                openCallback.call(this, null);
            }
        }, (err)=>{
            this.opening = false;
            debug('Binding #open had an error', err);
            this._error(err, openCallback);
        });
    }
    update(options, callback) {
        if (!this.isOpen || !this.port) {
            debug('update attempted, but port is not open');
            return this._asyncError(new Error('Port is not open'), callback);
        }
        debug('update', `baudRate: ${options.baudRate}`);
        this.port.update(options).then(()=>{
            debug('binding.update', 'finished');
            this.settings.baudRate = options.baudRate;
            if (callback) {
                callback.call(this, null);
            }
        }, (err)=>{
            debug('binding.update', 'error', err);
            return this._error(err, callback);
        });
    }
    write(data, encoding, callback) {
        if (Array.isArray(data)) {
            data = Buffer.from(data);
        }
        if (typeof encoding === 'function') {
            return super.write(data, encoding);
        }
        return super.write(data, encoding, callback);
    }
    _write(data, encoding, callback) {
        if (!this.isOpen || !this.port) {
            this.once('open', ()=>{
                this._write(data, encoding, callback);
            });
            return;
        }
        debug('_write', `${data.length} bytes of data`);
        this.port.write(data).then(()=>{
            debug('binding.write', 'write finished');
            callback(null);
        }, (err)=>{
            debug('binding.write', 'error', err);
            if (!err.canceled) {
                this._disconnected(err);
            }
            callback(err);
        });
    }
    _writev(data, callback) {
        debug('_writev', `${data.length} chunks of data`);
        const dataV = data.map((write)=>write.chunk);
        this._write(Buffer.concat(dataV), undefined, callback);
    }
    _read(bytesToRead) {
        if (!this.isOpen || !this.port) {
            debug('_read', 'queueing _read for after open');
            this.once('open', ()=>{
                this._read(bytesToRead);
            });
            return;
        }
        if (!this._pool || this._pool.length - this._pool.used < this._kMinPoolSpace) {
            debug('_read', 'discarding the read buffer pool because it is below kMinPoolSpace');
            this._pool = allocNewReadPool(this.settings.highWaterMark);
        }
        const pool = this._pool;
        const toRead = Math.min(pool.length - pool.used, bytesToRead);
        const start = pool.used;
        debug('_read', `reading`, {
            start,
            toRead
        });
        this.port.read(pool, start, toRead).then(({ bytesRead  })=>{
            debug('binding.read', `finished`, {
                bytesRead
            });
            if (bytesRead === 0) {
                debug('binding.read', 'Zero bytes read closing readable stream');
                this.push(null);
                return;
            }
            pool.used += bytesRead;
            this.push(pool.slice(start, start + bytesRead));
        }, (err)=>{
            debug('binding.read', `error`, err);
            if (!err.canceled) {
                this._disconnected(err);
            }
            this._read(bytesToRead);
        });
    }
    _disconnected(err) {
        if (!this.isOpen) {
            debug('disconnected aborted because already closed', err);
            return;
        }
        debug('disconnected', err);
        this.close(undefined, new DisconnectedError(err.message));
    }
    close(callback, disconnectError = null) {
        if (!this.isOpen || !this.port) {
            debug('close attempted, but port is not open');
            return this._asyncError(new Error('Port is not open'), callback);
        }
        this.closing = true;
        debug('#close');
        this.port.close().then(()=>{
            this.closing = false;
            debug('binding.close', 'finished');
            this.emit('close', disconnectError);
            if (this.settings.endOnClose) {
                this.emit('end');
            }
            if (callback) {
                callback.call(this, disconnectError);
            }
        }, (err)=>{
            this.closing = false;
            debug('binding.close', 'had an error', err);
            return this._error(err, callback);
        });
    }
    set(options, callback) {
        if (!this.isOpen || !this.port) {
            debug('set attempted, but port is not open');
            return this._asyncError(new Error('Port is not open'), callback);
        }
        const settings = {
            ...defaultSetFlags,
            ...options
        };
        debug('#set', settings);
        this.port.set(settings).then(()=>{
            debug('binding.set', 'finished');
            if (callback) {
                callback.call(this, null);
            }
        }, (err)=>{
            debug('binding.set', 'had an error', err);
            return this._error(err, callback);
        });
    }
    get(callback) {
        if (!this.isOpen || !this.port) {
            debug('get attempted, but port is not open');
            return this._asyncError(new Error('Port is not open'), callback);
        }
        debug('#get');
        this.port.get().then((status)=>{
            debug('binding.get', 'finished');
            callback.call(this, null, status);
        }, (err)=>{
            debug('binding.get', 'had an error', err);
            return this._error(err, callback);
        });
    }
    flush(callback) {
        if (!this.isOpen || !this.port) {
            debug('flush attempted, but port is not open');
            return this._asyncError(new Error('Port is not open'), callback);
        }
        debug('#flush');
        this.port.flush().then(()=>{
            debug('binding.flush', 'finished');
            if (callback) {
                callback.call(this, null);
            }
        }, (err)=>{
            debug('binding.flush', 'had an error', err);
            return this._error(err, callback);
        });
    }
    drain(callback) {
        debug('drain');
        if (!this.isOpen || !this.port) {
            debug('drain queuing on port open');
            this.once('open', ()=>{
                this.drain(callback);
            });
            return;
        }
        this.port.drain().then(()=>{
            debug('binding.drain', 'finished');
            if (callback) {
                callback.call(this, null);
            }
        }, (err)=>{
            debug('binding.drain', 'had an error', err);
            return this._error(err, callback);
        });
    }
}
exports.SerialPortStream = SerialPortStream;

}.call(this) }),
}]);


//# sourceMappingURL=8739a_@serialport_stream_dist_index.js.map