(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/87416_next_dist_build_webpack_loaders_next-flight-loader_module-proxy.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js (ecmascript, rsc)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createProxy = createProxy;
const MODULE_REFERENCE = Symbol.for("react.module.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            case "$$typeof":
                return target.$$typeof;
            case "filepath":
                return target.filepath;
            case "name":
                return target.name;
            case "async":
                return target.async;
            case "defaultProps":
                return undefined;
            case "__esModule":
                target.default = {
                    $$typeof: MODULE_REFERENCE,
                    filepath: target.filepath,
                    name: "",
                    async: target.async
                };
                return true;
            case "then":
                if (!target.async) {
                    const then = function then(resolve, _reject) {
                        const moduleReference = {
                            $$typeof: MODULE_REFERENCE,
                            filepath: target.filepath,
                            name: "*",
                            async: true
                        };
                        return Promise.resolve(resolve(new Proxy(moduleReference, proxyHandlers)));
                    };
                    then.$$typeof = MODULE_REFERENCE;
                    then.filepath = target.filepath;
                    return then;
                }
                break;
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            cachedReference = target[name] = {
                $$typeof: MODULE_REFERENCE,
                filepath: target.filepath,
                name: name,
                async: target.async
            };
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const moduleReference = {
        $$typeof: MODULE_REFERENCE,
        filepath: moduleId,
        name: "*",
        async: false
    };
    return new Proxy(moduleReference, proxyHandlers);
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_build_webpack_loaders_next-flight-loader_module-proxy.js.map