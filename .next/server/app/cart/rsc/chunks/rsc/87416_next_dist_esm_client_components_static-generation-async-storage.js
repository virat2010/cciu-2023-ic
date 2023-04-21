(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/87416_next_dist_esm_client_components_static-generation-async-storage.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/esm/client/components/static-generation-async-storage.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "staticGenerationAsyncStorage": ()=>staticGenerationAsyncStorage
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/esm/client/components/async-local-storage.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const staticGenerationAsyncStorage = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__["createAsyncLocalStorage"]();

})()),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/esm/client/components/async-local-storage.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "createAsyncLocalStorage": ()=>createAsyncLocalStorage
});
class FakeAsyncLocalStorage {
    disable() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
    getStore() {
        return undefined;
    }
    run() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
    exit() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
    enterWith() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}

})()),
}]);


//# sourceMappingURL=87416_next_dist_esm_client_components_static-generation-async-storage.js.map