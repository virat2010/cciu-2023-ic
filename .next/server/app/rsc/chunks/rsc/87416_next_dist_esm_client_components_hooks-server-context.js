(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/87416_next_dist_esm_client_components_hooks-server-context.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/esm/client/components/hooks-server-context.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "DYNAMIC_ERROR_CODE": ()=>DYNAMIC_ERROR_CODE,
    "DynamicServerError": ()=>DynamicServerError
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(type){
        super(`Dynamic server usage: ${type}`);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}

})()),
}]);


//# sourceMappingURL=87416_next_dist_esm_client_components_hooks-server-context.js.map