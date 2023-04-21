(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_lib_format-server-error.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/lib/format-server-error.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatServerError = formatServerError;
const invalidServerComponentReactHooks = [
    "useDeferredValue",
    "useEffect",
    "useImperativeHandle",
    "useInsertionEffect",
    "useLayoutEffect",
    "useReducer",
    "useRef",
    "useState",
    "useSyncExternalStore",
    "useTransition"
];
function setMessage(error, message) {
    error.message = message;
    if (error.stack) {
        const lines = error.stack.split("\n");
        lines[0] = message;
        error.stack = lines.join("\n");
    }
}
function formatServerError(error) {
    if (error.message.includes("Class extends value undefined is not a constructor or null")) {
        setMessage(error, `${error.message}

This might be caused by a React Class Component being rendered in a Server Component, React Class Components only works in Client Components. Read more: https://nextjs.org/docs/messages/class-component-in-server-component`);
        return;
    }
    if (error.message.includes("createContext is not a function")) {
        setMessage(error, 'createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component');
        return;
    }
    for (const clientHook of invalidServerComponentReactHooks){
        if (error.message.includes(`${clientHook} is not a function`)) {
            setMessage(error, `${clientHook} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`);
            return;
        }
    }
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_lib_format-server-error.js.map