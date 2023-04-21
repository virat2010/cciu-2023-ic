(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_compiled_react-server-dom-webpack_client.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-server-dom-webpack/client.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

(()=>{
    "use strict";
    var __webpack_modules__ = {
        765: (__unused_webpack_module, exports, __nccwpck_require__)=>{
            if (process.env.NODE_ENV !== "production") {
                (function() {
                    'use strict';
                    var React = __nccwpck_require__(522);
                    function createStringDecoder() {
                        return new TextDecoder();
                    }
                    var decoderOptions = {
                        stream: true
                    };
                    function readPartialStringChunk(decoder, buffer) {
                        return decoder.decode(buffer, decoderOptions);
                    }
                    function readFinalStringChunk(decoder, buffer) {
                        return decoder.decode(buffer);
                    }
                    function parseModel(response, json) {
                        return JSON.parse(json, response._fromJSON);
                    }
                    function resolveModuleReference(bundlerConfig, moduleData) {
                        if (bundlerConfig) {
                            var resolvedModuleData = bundlerConfig[moduleData.id][moduleData.name];
                            if (moduleData.async) {
                                return {
                                    id: resolvedModuleData.id,
                                    chunks: resolvedModuleData.chunks,
                                    name: resolvedModuleData.name,
                                    async: true
                                };
                            } else {
                                return resolvedModuleData;
                            }
                        }
                        return moduleData;
                    }
                    var chunkCache = new Map();
                    var asyncModuleCache = new Map();
                    function ignoreReject() {}
                    function preloadModule(moduleData) {
                        var chunks = moduleData.chunks;
                        var promises = [];
                        for(var i = 0; i < chunks.length; i++){
                            var chunkId = chunks[i];
                            var entry = chunkCache.get(chunkId);
                            if (entry === undefined) {
                                var thenable = globalThis.__next_chunk_load__(chunkId);
                                promises.push(thenable);
                                var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
                                thenable.then(resolve, ignoreReject);
                                chunkCache.set(chunkId, thenable);
                            } else if (entry !== null) {
                                promises.push(entry);
                            }
                        }
                        if (moduleData.async) {
                            var existingPromise = asyncModuleCache.get(moduleData.id);
                            if (existingPromise) {
                                if (existingPromise.status === 'fulfilled') {
                                    return null;
                                }
                                return existingPromise;
                            } else {
                                var modulePromise = Promise.all(promises).then(function() {
                                    return globalThis.__next_require__(moduleData.id);
                                });
                                modulePromise.then(function(value) {
                                    var fulfilledThenable = modulePromise;
                                    fulfilledThenable.status = 'fulfilled';
                                    fulfilledThenable.value = value;
                                }, function(reason) {
                                    var rejectedThenable = modulePromise;
                                    rejectedThenable.status = 'rejected';
                                    rejectedThenable.reason = reason;
                                });
                                asyncModuleCache.set(moduleData.id, modulePromise);
                                return modulePromise;
                            }
                        } else if (promises.length > 0) {
                            return Promise.all(promises);
                        } else {
                            return null;
                        }
                    }
                    function requireModule(moduleData) {
                        var moduleExports;
                        if (moduleData.async) {
                            var promise = asyncModuleCache.get(moduleData.id);
                            if (promise.status === 'fulfilled') {
                                moduleExports = promise.value;
                            } else {
                                throw promise.reason;
                            }
                        } else {
                            moduleExports = globalThis.__next_require__(moduleData.id);
                        }
                        if (moduleData.name === '*') {
                            return moduleExports;
                        }
                        if (moduleData.name === '') {
                            return moduleExports.__esModule ? moduleExports.default : moduleExports;
                        }
                        return moduleExports[moduleData.name];
                    }
                    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
                    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
                    var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
                    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                    var ContextRegistry = ReactSharedInternals.ContextRegistry;
                    function getOrCreateServerContext(globalName) {
                        if (!ContextRegistry[globalName]) {
                            ContextRegistry[globalName] = React.createServerContext(globalName, REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED);
                        }
                        return ContextRegistry[globalName];
                    }
                    var PENDING = 'pending';
                    var BLOCKED = 'blocked';
                    var RESOLVED_MODEL = 'resolved_model';
                    var RESOLVED_MODULE = 'resolved_module';
                    var INITIALIZED = 'fulfilled';
                    var ERRORED = 'rejected';
                    function Chunk(status, value, reason, response) {
                        this.status = status;
                        this.value = value;
                        this.reason = reason;
                        this._response = response;
                    }
                    Chunk.prototype = Object.create(Promise.prototype);
                    Chunk.prototype.then = function(resolve, reject) {
                        var chunk = this;
                        switch(chunk.status){
                            case RESOLVED_MODEL:
                                initializeModelChunk(chunk);
                                break;
                            case RESOLVED_MODULE:
                                initializeModuleChunk(chunk);
                                break;
                        }
                        switch(chunk.status){
                            case INITIALIZED:
                                resolve(chunk.value);
                                break;
                            case PENDING:
                            case BLOCKED:
                                if (resolve) {
                                    if (chunk.value === null) {
                                        chunk.value = [];
                                    }
                                    chunk.value.push(resolve);
                                }
                                if (reject) {
                                    if (chunk.reason === null) {
                                        chunk.reason = [];
                                    }
                                    chunk.reason.push(reject);
                                }
                                break;
                            default:
                                reject(chunk.reason);
                                break;
                        }
                    };
                    function readChunk(chunk) {
                        switch(chunk.status){
                            case RESOLVED_MODEL:
                                initializeModelChunk(chunk);
                                break;
                            case RESOLVED_MODULE:
                                initializeModuleChunk(chunk);
                                break;
                        }
                        switch(chunk.status){
                            case INITIALIZED:
                                return chunk.value;
                            case PENDING:
                            case BLOCKED:
                                throw chunk;
                            default:
                                throw chunk.reason;
                        }
                    }
                    function getRoot(response) {
                        var chunk = getChunk(response, 0);
                        return chunk;
                    }
                    function createPendingChunk(response) {
                        return new Chunk(PENDING, null, null, response);
                    }
                    function createBlockedChunk(response) {
                        return new Chunk(BLOCKED, null, null, response);
                    }
                    function createErrorChunk(response, error) {
                        return new Chunk(ERRORED, null, error, response);
                    }
                    function createInitializedChunk(response, value) {
                        return new Chunk(INITIALIZED, value, null, response);
                    }
                    function wakeChunk(listeners, value) {
                        for(var i = 0; i < listeners.length; i++){
                            var listener = listeners[i];
                            listener(value);
                        }
                    }
                    function wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners) {
                        switch(chunk.status){
                            case INITIALIZED:
                                wakeChunk(resolveListeners, chunk.value);
                                break;
                            case PENDING:
                            case BLOCKED:
                                chunk.value = resolveListeners;
                                chunk.reason = rejectListeners;
                                break;
                            case ERRORED:
                                if (rejectListeners) {
                                    wakeChunk(rejectListeners, chunk.reason);
                                }
                                break;
                        }
                    }
                    function triggerErrorOnChunk(chunk, error) {
                        if (chunk.status !== PENDING && chunk.status !== BLOCKED) {
                            return;
                        }
                        var listeners = chunk.reason;
                        var erroredChunk = chunk;
                        erroredChunk.status = ERRORED;
                        erroredChunk.reason = error;
                        if (listeners !== null) {
                            wakeChunk(listeners, error);
                        }
                    }
                    function createResolvedModelChunk(response, value) {
                        return new Chunk(RESOLVED_MODEL, value, null, response);
                    }
                    function createResolvedModuleChunk(response, value) {
                        return new Chunk(RESOLVED_MODULE, value, null, response);
                    }
                    function resolveModelChunk(chunk, value) {
                        if (chunk.status !== PENDING) {
                            return;
                        }
                        var resolveListeners = chunk.value;
                        var rejectListeners = chunk.reason;
                        var resolvedChunk = chunk;
                        resolvedChunk.status = RESOLVED_MODEL;
                        resolvedChunk.value = value;
                        if (resolveListeners !== null) {
                            initializeModelChunk(resolvedChunk);
                            wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners);
                        }
                    }
                    function resolveModuleChunk(chunk, value) {
                        if (chunk.status !== PENDING && chunk.status !== BLOCKED) {
                            return;
                        }
                        var resolveListeners = chunk.value;
                        var rejectListeners = chunk.reason;
                        var resolvedChunk = chunk;
                        resolvedChunk.status = RESOLVED_MODULE;
                        resolvedChunk.value = value;
                        if (resolveListeners !== null) {
                            initializeModuleChunk(resolvedChunk);
                            wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners);
                        }
                    }
                    var initializingChunk = null;
                    var initializingChunkBlockedModel = null;
                    function initializeModelChunk(chunk) {
                        var prevChunk = initializingChunk;
                        var prevBlocked = initializingChunkBlockedModel;
                        initializingChunk = chunk;
                        initializingChunkBlockedModel = null;
                        try {
                            var _value = parseModel(chunk._response, chunk.value);
                            if (initializingChunkBlockedModel !== null && initializingChunkBlockedModel.deps > 0) {
                                initializingChunkBlockedModel.value = _value;
                                var blockedChunk = chunk;
                                blockedChunk.status = BLOCKED;
                                blockedChunk.value = null;
                                blockedChunk.reason = null;
                            } else {
                                var initializedChunk = chunk;
                                initializedChunk.status = INITIALIZED;
                                initializedChunk.value = _value;
                            }
                        } catch (error) {
                            var erroredChunk = chunk;
                            erroredChunk.status = ERRORED;
                            erroredChunk.reason = error;
                        } finally{
                            initializingChunk = prevChunk;
                            initializingChunkBlockedModel = prevBlocked;
                        }
                    }
                    function initializeModuleChunk(chunk) {
                        try {
                            var _value2 = requireModule(chunk.value);
                            var initializedChunk = chunk;
                            initializedChunk.status = INITIALIZED;
                            initializedChunk.value = _value2;
                        } catch (error) {
                            var erroredChunk = chunk;
                            erroredChunk.status = ERRORED;
                            erroredChunk.reason = error;
                        }
                    }
                    function reportGlobalError(response, error) {
                        response._chunks.forEach(function(chunk) {
                            if (chunk.status === PENDING) {
                                triggerErrorOnChunk(chunk, error);
                            }
                        });
                    }
                    function createElement(type, key, props) {
                        var element = {
                            $$typeof: REACT_ELEMENT_TYPE,
                            type: type,
                            key: key,
                            ref: null,
                            props: props,
                            _owner: null
                        };
                        {
                            element._store = {};
                            Object.defineProperty(element._store, 'validated', {
                                configurable: false,
                                enumerable: false,
                                writable: true,
                                value: true
                            });
                            Object.defineProperty(element, '_self', {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: null
                            });
                            Object.defineProperty(element, '_source', {
                                configurable: false,
                                enumerable: false,
                                writable: false,
                                value: null
                            });
                        }
                        return element;
                    }
                    function createLazyChunkWrapper(chunk) {
                        var lazyType = {
                            $$typeof: REACT_LAZY_TYPE,
                            _payload: chunk,
                            _init: readChunk
                        };
                        return lazyType;
                    }
                    function getChunk(response, id) {
                        var chunks = response._chunks;
                        var chunk = chunks.get(id);
                        if (!chunk) {
                            chunk = createPendingChunk(response);
                            chunks.set(id, chunk);
                        }
                        return chunk;
                    }
                    function createModelResolver(chunk, parentObject, key) {
                        var blocked;
                        if (initializingChunkBlockedModel) {
                            blocked = initializingChunkBlockedModel;
                            blocked.deps++;
                        } else {
                            blocked = initializingChunkBlockedModel = {
                                deps: 1,
                                value: null
                            };
                        }
                        return function(value) {
                            parentObject[key] = value;
                            blocked.deps--;
                            if (blocked.deps === 0) {
                                if (chunk.status !== BLOCKED) {
                                    return;
                                }
                                var resolveListeners = chunk.value;
                                var initializedChunk = chunk;
                                initializedChunk.status = INITIALIZED;
                                initializedChunk.value = blocked.value;
                                if (resolveListeners !== null) {
                                    wakeChunk(resolveListeners, blocked.value);
                                }
                            }
                        };
                    }
                    function createModelReject(chunk) {
                        return function(error) {
                            return triggerErrorOnChunk(chunk, error);
                        };
                    }
                    function parseModelString(response, parentObject, key, value) {
                        switch(value[0]){
                            case '$':
                                {
                                    if (value === '$') {
                                        return REACT_ELEMENT_TYPE;
                                    } else if (value[1] === '$' || value[1] === '@') {
                                        return value.substring(1);
                                    } else {
                                        var id = parseInt(value.substring(1), 16);
                                        var chunk = getChunk(response, id);
                                        switch(chunk.status){
                                            case RESOLVED_MODEL:
                                                initializeModelChunk(chunk);
                                                break;
                                            case RESOLVED_MODULE:
                                                initializeModuleChunk(chunk);
                                                break;
                                        }
                                        switch(chunk.status){
                                            case INITIALIZED:
                                                return chunk.value;
                                            case PENDING:
                                            case BLOCKED:
                                                var parentChunk = initializingChunk;
                                                chunk.then(createModelResolver(parentChunk, parentObject, key), createModelReject(parentChunk));
                                                return null;
                                            default:
                                                throw chunk.reason;
                                        }
                                    }
                                }
                            case '@':
                                {
                                    var _id = parseInt(value.substring(1), 16);
                                    var _chunk = getChunk(response, _id);
                                    return createLazyChunkWrapper(_chunk);
                                }
                        }
                        return value;
                    }
                    function parseModelTuple(response, value) {
                        var tuple = value;
                        if (tuple[0] === REACT_ELEMENT_TYPE) {
                            return createElement(tuple[1], tuple[2], tuple[3]);
                        }
                        return value;
                    }
                    function createResponse(bundlerConfig) {
                        var chunks = new Map();
                        var response = {
                            _bundlerConfig: bundlerConfig,
                            _chunks: chunks
                        };
                        return response;
                    }
                    function resolveModel(response, id, model) {
                        var chunks = response._chunks;
                        var chunk = chunks.get(id);
                        if (!chunk) {
                            chunks.set(id, createResolvedModelChunk(response, model));
                        } else {
                            resolveModelChunk(chunk, model);
                        }
                    }
                    function resolveProvider(response, id, contextName) {
                        var chunks = response._chunks;
                        chunks.set(id, createInitializedChunk(response, getOrCreateServerContext(contextName).Provider));
                    }
                    function resolveModule(response, id, model) {
                        var chunks = response._chunks;
                        var chunk = chunks.get(id);
                        var moduleMetaData = parseModel(response, model);
                        var moduleReference = resolveModuleReference(response._bundlerConfig, moduleMetaData);
                        var promise = preloadModule(moduleReference);
                        if (promise) {
                            var blockedChunk;
                            if (!chunk) {
                                blockedChunk = createBlockedChunk(response);
                                chunks.set(id, blockedChunk);
                            } else {
                                blockedChunk = chunk;
                                blockedChunk.status = BLOCKED;
                            }
                            promise.then(function() {
                                return resolveModuleChunk(blockedChunk, moduleReference);
                            }, function(error) {
                                return triggerErrorOnChunk(blockedChunk, error);
                            });
                        } else {
                            if (!chunk) {
                                chunks.set(id, createResolvedModuleChunk(response, moduleReference));
                            } else {
                                resolveModuleChunk(chunk, moduleReference);
                            }
                        }
                    }
                    function resolveSymbol(response, id, name) {
                        var chunks = response._chunks;
                        chunks.set(id, createInitializedChunk(response, Symbol.for(name)));
                    }
                    function resolveErrorDev(response, id, digest, message, stack) {
                        var error = new Error(message || 'An error occurred in the Server Components render but no message was provided');
                        error.stack = stack;
                        error.digest = digest;
                        var errorWithDigest = error;
                        var chunks = response._chunks;
                        var chunk = chunks.get(id);
                        if (!chunk) {
                            chunks.set(id, createErrorChunk(response, errorWithDigest));
                        } else {
                            triggerErrorOnChunk(chunk, errorWithDigest);
                        }
                    }
                    function close(response) {
                        reportGlobalError(response, new Error('Connection closed.'));
                    }
                    function processFullRow(response, row) {
                        if (row === '') {
                            return;
                        }
                        var tag = row[0];
                        var colon = row.indexOf(':', 1);
                        var id = parseInt(row.substring(1, colon), 16);
                        var text = row.substring(colon + 1);
                        switch(tag){
                            case 'J':
                                {
                                    resolveModel(response, id, text);
                                    return;
                                }
                            case 'M':
                                {
                                    resolveModule(response, id, text);
                                    return;
                                }
                            case 'P':
                                {
                                    resolveProvider(response, id, text);
                                    return;
                                }
                            case 'S':
                                {
                                    resolveSymbol(response, id, JSON.parse(text));
                                    return;
                                }
                            case 'E':
                                {
                                    var errorInfo = JSON.parse(text);
                                    {
                                        resolveErrorDev(response, id, errorInfo.digest, errorInfo.message, errorInfo.stack);
                                    }
                                    return;
                                }
                            default:
                                {
                                    throw new Error("Error parsing the data. It's probably an error code or network corruption.");
                                }
                        }
                    }
                    function processStringChunk(response, chunk, offset) {
                        var linebreak = chunk.indexOf('\n', offset);
                        while(linebreak > -1){
                            var fullrow = response._partialRow + chunk.substring(offset, linebreak);
                            processFullRow(response, fullrow);
                            response._partialRow = '';
                            offset = linebreak + 1;
                            linebreak = chunk.indexOf('\n', offset);
                        }
                        response._partialRow += chunk.substring(offset);
                    }
                    function processBinaryChunk(response, chunk) {
                        var stringDecoder = response._stringDecoder;
                        var linebreak = chunk.indexOf(10);
                        while(linebreak > -1){
                            var fullrow = response._partialRow + readFinalStringChunk(stringDecoder, chunk.subarray(0, linebreak));
                            processFullRow(response, fullrow);
                            response._partialRow = '';
                            chunk = chunk.subarray(linebreak + 1);
                            linebreak = chunk.indexOf(10);
                        }
                        response._partialRow += readPartialStringChunk(stringDecoder, chunk);
                    }
                    function createFromJSONCallback(response) {
                        return function(key, value) {
                            if (typeof value === 'string') {
                                return parseModelString(response, this, key, value);
                            }
                            if (typeof value === 'object' && value !== null) {
                                return parseModelTuple(response, value);
                            }
                            return value;
                        };
                    }
                    function createResponse$1(bundlerConfig) {
                        var stringDecoder = createStringDecoder();
                        var response = createResponse(bundlerConfig);
                        response._partialRow = '';
                        {
                            response._stringDecoder = stringDecoder;
                        }
                        response._fromJSON = createFromJSONCallback(response);
                        return response;
                    }
                    function startReadingFromStream(response, stream) {
                        var reader = stream.getReader();
                        function progress(_ref) {
                            var done = _ref.done, value = _ref.value;
                            if (done) {
                                close(response);
                                return;
                            }
                            var buffer = value;
                            processBinaryChunk(response, buffer);
                            return reader.read().then(progress).catch(error);
                        }
                        function error(e) {
                            reportGlobalError(response, e);
                        }
                        reader.read().then(progress).catch(error);
                    }
                    function createFromReadableStream(stream, options) {
                        var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
                        startReadingFromStream(response, stream);
                        return getRoot(response);
                    }
                    function createFromFetch(promiseForResponse, options) {
                        var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
                        promiseForResponse.then(function(r) {
                            startReadingFromStream(response, r.body);
                        }, function(e) {
                            reportGlobalError(response, e);
                        });
                        return getRoot(response);
                    }
                    function createFromXHR(request, options) {
                        var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
                        var processedLength = 0;
                        function progress(e) {
                            var chunk = request.responseText;
                            processStringChunk(response, chunk, processedLength);
                            processedLength = chunk.length;
                        }
                        function load(e) {
                            progress();
                            close(response);
                        }
                        function error(e) {
                            reportGlobalError(response, new TypeError('Network error'));
                        }
                        request.addEventListener('progress', progress);
                        request.addEventListener('load', load);
                        request.addEventListener('error', error);
                        request.addEventListener('abort', error);
                        request.addEventListener('timeout', error);
                        return getRoot(response);
                    }
                    exports.createFromFetch = createFromFetch;
                    exports.createFromReadableStream = createFromReadableStream;
                    exports.createFromXHR = createFromXHR;
                })();
            }
        },
        879: (__unused_webpack_module, exports, __nccwpck_require__)=>{
            var h = __nccwpck_require__(522), k = {
                stream: !0
            };
            function m(a, b) {
                return a ? (a = a[b.id][b.name], b.async ? {
                    id: a.id,
                    chunks: a.chunks,
                    name: a.name,
                    async: !0
                } : a) : b;
            }
            var n = new Map, p = new Map;
            function q() {}
            function r(a) {
                for(var b = a.chunks, c = [], d = 0; d < b.length; d++){
                    var e = b[d], f = n.get(e);
                    if (void 0 === f) {
                        f = globalThis.__next_chunk_load__(e);
                        c.push(f);
                        var l = n.set.bind(n, e, null);
                        f.then(l, q);
                        n.set(e, f);
                    } else null !== f && c.push(f);
                }
                if (a.async) {
                    if (b = p.get(a.id)) return "fulfilled" === b.status ? null : b;
                    var g = Promise.all(c).then(function() {
                        return globalThis.__next_require__(a.id);
                    });
                    g.then(function(a) {
                        g.status = "fulfilled";
                        g.value = a;
                    }, function(a) {
                        g.status = "rejected";
                        g.reason = a;
                    });
                    p.set(a.id, g);
                    return g;
                }
                return 0 < c.length ? Promise.all(c) : null;
            }
            var t = Symbol.for("react.element"), u = Symbol.for("react.lazy"), v = Symbol.for("react.default_value"), w = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;
            function x(a) {
                w[a] || (w[a] = h.createServerContext(a, v));
                return w[a];
            }
            function y(a, b, c, d) {
                this.status = a;
                this.value = b;
                this.reason = c;
                this._response = d;
            }
            y.prototype = Object.create(Promise.prototype);
            y.prototype.then = function(a, b) {
                switch(this.status){
                    case "resolved_model":
                        z(this);
                        break;
                    case "resolved_module":
                        B(this);
                }
                switch(this.status){
                    case "fulfilled":
                        a(this.value);
                        break;
                    case "pending":
                    case "blocked":
                        a && (null === this.value && (this.value = []), this.value.push(a));
                        b && (null === this.reason && (this.reason = []), this.reason.push(b));
                        break;
                    default:
                        b(this.reason);
                }
            };
            function C(a) {
                switch(a.status){
                    case "resolved_model":
                        z(a);
                        break;
                    case "resolved_module":
                        B(a);
                }
                switch(a.status){
                    case "fulfilled":
                        return a.value;
                    case "pending":
                    case "blocked":
                        throw a;
                    default:
                        throw a.reason;
                }
            }
            function D(a, b) {
                return new y("fulfilled", b, null, a);
            }
            function E(a, b) {
                for(var c = 0; c < a.length; c++)(0, a[c])(b);
            }
            function F(a, b, c) {
                switch(a.status){
                    case "fulfilled":
                        E(b, a.value);
                        break;
                    case "pending":
                    case "blocked":
                        a.value = b;
                        a.reason = c;
                        break;
                    case "rejected":
                        c && E(c, a.reason);
                }
            }
            function G(a, b) {
                if ("pending" === a.status || "blocked" === a.status) {
                    var c = a.reason;
                    a.status = "rejected";
                    a.reason = b;
                    null !== c && E(c, b);
                }
            }
            function H(a, b) {
                if ("pending" === a.status || "blocked" === a.status) {
                    var c = a.value, d = a.reason;
                    a.status = "resolved_module";
                    a.value = b;
                    null !== c && (B(a), F(a, c, d));
                }
            }
            var I = null, J = null;
            function z(a) {
                var b = I, c = J;
                I = a;
                J = null;
                try {
                    var d = JSON.parse(a.value, a._response._fromJSON);
                    null !== J && 0 < J.deps ? (J.value = d, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = d);
                } catch (e) {
                    a.status = "rejected", a.reason = e;
                } finally{
                    I = b, J = c;
                }
            }
            function B(a) {
                try {
                    var b = a.value;
                    if (b.async) {
                        var c = p.get(b.id);
                        if ("fulfilled" === c.status) var d = c.value;
                        else throw c.reason;
                    } else d = globalThis.__next_require__(b.id);
                    var e = "*" === b.name ? d : "" === b.name ? d.__esModule ? d.default : d : d[b.name];
                    a.status = "fulfilled";
                    a.value = e;
                } catch (f) {
                    a.status = "rejected", a.reason = f;
                }
            }
            function K(a, b) {
                a._chunks.forEach(function(a) {
                    "pending" === a.status && G(a, b);
                });
            }
            function L(a, b) {
                var c = a._chunks, d = c.get(b);
                d || (d = new y("pending", null, null, a), c.set(b, d));
                return d;
            }
            function N(a, b, c) {
                if (J) {
                    var d = J;
                    d.deps++;
                } else d = J = {
                    deps: 1,
                    value: null
                };
                return function(e) {
                    b[c] = e;
                    d.deps--;
                    0 === d.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = d.value, null !== e && E(e, d.value));
                };
            }
            function O(a) {
                return function(b) {
                    return G(a, b);
                };
            }
            function P(a, b, c, d) {
                switch(d[0]){
                    case "$":
                        if ("$" === d) return t;
                        if ("$" === d[1] || "@" === d[1]) return d.substring(1);
                        d = parseInt(d.substring(1), 16);
                        a = L(a, d);
                        switch(a.status){
                            case "resolved_model":
                                z(a);
                                break;
                            case "resolved_module":
                                B(a);
                        }
                        switch(a.status){
                            case "fulfilled":
                                return a.value;
                            case "pending":
                            case "blocked":
                                return d = I, a.then(N(d, b, c), O(d)), null;
                            default:
                                throw a.reason;
                        }
                    case "@":
                        return b = parseInt(d.substring(1), 16), b = L(a, b), {
                            $$typeof: u,
                            _payload: b,
                            _init: C
                        };
                }
                return d;
            }
            function Q(a, b, c) {
                var d = a._chunks, e = d.get(b);
                c = JSON.parse(c, a._fromJSON);
                var f = m(a._bundlerConfig, c);
                if (c = r(f)) {
                    if (e) {
                        var l = e;
                        l.status = "blocked";
                    } else l = new y("blocked", null, null, a), d.set(b, l);
                    c.then(function() {
                        return H(l, f);
                    }, function(a) {
                        return G(l, a);
                    });
                } else e ? H(e, f) : d.set(b, new y("resolved_module", f, null, a));
            }
            function R(a) {
                K(a, Error("Connection closed."));
            }
            function S(a, b) {
                if ("" !== b) {
                    var c = b[0], d = b.indexOf(":", 1), e = parseInt(b.substring(1, d), 16);
                    b = b.substring(d + 1);
                    switch(c){
                        case "J":
                            d = a._chunks;
                            (c = d.get(e)) ? "pending" === c.status && (a = c.value, e = c.reason, c.status = "resolved_model", c.value = b, null !== a && (z(c), F(c, a, e))) : d.set(e, new y("resolved_model", b, null, a));
                            break;
                        case "M":
                            Q(a, e, b);
                            break;
                        case "P":
                            a._chunks.set(e, D(a, x(b).Provider));
                            break;
                        case "S":
                            b = JSON.parse(b);
                            a._chunks.set(e, D(a, Symbol.for(b)));
                            break;
                        case "E":
                            c = JSON.parse(b).digest;
                            b = Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
                            b.stack = "Error: " + b.message;
                            b.digest = c;
                            c = a._chunks;
                            (d = c.get(e)) ? G(d, b) : c.set(e, new y("rejected", null, b, a));
                            break;
                        default:
                            throw Error("Error parsing the data. It's probably an error code or network corruption.");
                    }
                }
            }
            function T(a) {
                return function(b, c) {
                    return "string" === typeof c ? P(a, this, b, c) : "object" === typeof c && null !== c ? (b = c[0] === t ? {
                        $$typeof: t,
                        type: c[1],
                        key: c[2],
                        ref: null,
                        props: c[3],
                        _owner: null
                    } : c, b) : c;
                };
            }
            function U(a) {
                var b = new TextDecoder, c = new Map;
                a = {
                    _bundlerConfig: a,
                    _chunks: c,
                    _partialRow: "",
                    _stringDecoder: b
                };
                a._fromJSON = T(a);
                return a;
            }
            function V(a, b) {
                function c(b) {
                    var f = b.value;
                    if (b.done) R(a);
                    else {
                        b = f;
                        f = a._stringDecoder;
                        for(var g = b.indexOf(10); -1 < g;){
                            var M = a._partialRow;
                            var A = b.subarray(0, g);
                            A = f.decode(A);
                            S(a, M + A);
                            a._partialRow = "";
                            b = b.subarray(g + 1);
                            g = b.indexOf(10);
                        }
                        a._partialRow += f.decode(b, k);
                        return e.read().then(c).catch(d);
                    }
                }
                function d(b) {
                    K(a, b);
                }
                var e = b.getReader();
                e.read().then(c).catch(d);
            }
            exports.createFromFetch = function(a, b) {
                var c = U(b && b.moduleMap ? b.moduleMap : null);
                a.then(function(a) {
                    V(c, a.body);
                }, function(a) {
                    K(c, a);
                });
                return L(c, 0);
            };
            exports.createFromReadableStream = function(a, b) {
                b = U(b && b.moduleMap ? b.moduleMap : null);
                V(b, a);
                return L(b, 0);
            };
            exports.createFromXHR = function(a, b) {
                function c() {
                    for(var b = a.responseText, c = f, d = b.indexOf("\n", c); -1 < d;)c = e._partialRow + b.substring(c, d), S(e, c), e._partialRow = "", c = d + 1, d = b.indexOf("\n", c);
                    e._partialRow += b.substring(c);
                    f = b.length;
                }
                function d() {
                    K(e, new TypeError("Network error"));
                }
                var e = U(b && b.moduleMap ? b.moduleMap : null), f = 0;
                a.addEventListener("progress", c);
                a.addEventListener("load", function() {
                    c();
                    R(e);
                });
                a.addEventListener("error", d);
                a.addEventListener("abort", d);
                a.addEventListener("timeout", d);
                return L(e, 0);
            };
        },
        24: (module1, __unused_webpack_exports, __nccwpck_require__)=>{
            if (process.env.NODE_ENV === 'production') {
                module1.exports = __nccwpck_require__(879);
            } else {
                module1.exports = __nccwpck_require__(765);
            }
        },
        522: (module1)=>{
            module1.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
        }
    };
    var __webpack_module_cache__ = {};
    function __nccwpck_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module1 = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        var threw = true;
        try {
            __webpack_modules__[moduleId](module1, module1.exports, __nccwpck_require__);
            threw = false;
        } finally{
            if (threw) delete __webpack_module_cache__[moduleId];
        }
        return module1.exports;
    }
    if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
    var __webpack_exports__ = __nccwpck_require__(24);
    module.exports = __webpack_exports__;
})();

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_compiled_react-server-dom-webpack_client.js.map