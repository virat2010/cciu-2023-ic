(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_server_node-polyfill-fetch.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/node-polyfill-fetch.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
if (!global.fetch) {
    function getFetchImpl() {
        return global.__NEXT_USE_UNDICI ? __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/undici/index.js (ecmascript, ssr)") : __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/node-fetch/index.js (ecmascript, ssr)");
    }
    function getRequestImpl() {
        const OriginRequest = getFetchImpl().Request;
        return class Request extends OriginRequest {
            constructor(input, init){
                super(input, init);
                this.next = init == null ? void 0 : init.next;
            }
        };
    }
    global.fetch = (...args)=>{
        const fetchImpl = getFetchImpl();
        if (global.__NEXT_USE_UNDICI) {
            var ref;
            if (!((ref = global.__NEXT_HTTP_AGENT_OPTIONS) == null ? void 0 : ref.keepAlive) && !global.__NEXT_UNDICI_AGENT_SET) {
                global.__NEXT_UNDICI_AGENT_SET = true;
                fetchImpl.setGlobalDispatcher(new fetchImpl.Agent({
                    pipelining: 0
                }));
            }
            return fetchImpl.fetch(...args);
        }
        const agent = ({ protocol  })=>protocol === "http:" ? global.__NEXT_HTTP_AGENT : global.__NEXT_HTTPS_AGENT;
        if (!args[1]) {
            args[1] = {
                agent
            };
        } else if (!args[1].agent) {
            args[1].agent = agent;
        }
        return fetchImpl(...args);
    };
    Object.defineProperties(global, {
        Headers: {
            get () {
                return getFetchImpl().Headers;
            }
        },
        Request: {
            get () {
                return getRequestImpl();
            }
        },
        Response: {
            get () {
                return getFetchImpl().Response;
            }
        }
    });
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_server_node-polyfill-fetch.js.map