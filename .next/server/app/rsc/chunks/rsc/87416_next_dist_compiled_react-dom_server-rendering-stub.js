(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/87416_next_dist_compiled_react-dom_server-rendering-stub.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, rsc)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
if (process.env.NODE_ENV === 'production') {
    module.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.production.min.js (ecmascript, rsc)");
} else {
    module.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js (ecmascript, rsc)");
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.production.min.js (ecmascript, rsc)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
var b = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function d(a) {
    for(var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)e += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b;
exports.createPortal = function() {
    throw Error(d(448));
};
exports.flushSync = function() {
    throw Error(d(449));
};
exports.preinit = function() {
    var a = b.Dispatcher.current;
    a && a.preinit.apply(this, arguments);
};
exports.preload = function() {
    var a = b.Dispatcher.current;
    a && a.preload.apply(this, arguments);
};
exports.version = "18.3.0-next-3ba7add60-20221201";

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js (ecmascript, rsc)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
if (process.env.NODE_ENV !== "production") {
    (function() {
        'use strict';
        var ReactVersion = '18.3.0-next-3ba7add60-20221201';
        var Internals = {
            usingClientEntryPoint: false,
            Events: null,
            Dispatcher: {
                current: null
            }
        };
        function preinit() {
            var dispatcher = Internals.Dispatcher.current;
            if (dispatcher) {
                dispatcher.preinit.apply(this, arguments);
            }
        }
        function preload() {
            var dispatcher = Internals.Dispatcher.current;
            if (dispatcher) {
                dispatcher.preload.apply(this, arguments);
            }
        }
        function createPortal() {
            throw new Error('createPortal was called on the server. Portals are not currently' + ' supported on the server. Update your program to conditionally call' + ' createPortal on the client only.');
        }
        function flushSync() {
            throw new Error('flushSync was called on the server. This is likely caused by a' + ' function being called during render or in module scope that was' + ' intended to be called from an effect or event handler. Update your' + ' to not call flushSync no the server.');
        }
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
        exports.createPortal = createPortal;
        exports.flushSync = flushSync;
        exports.preinit = preinit;
        exports.preload = preload;
        exports.version = ReactVersion;
    })();
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_compiled_react-dom_server-rendering-stub.js.map