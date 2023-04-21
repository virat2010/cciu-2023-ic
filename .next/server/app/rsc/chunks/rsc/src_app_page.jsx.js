(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/src_app_page.jsx.js", {

"[project-with-next]/src/app/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Home() {
    const todos = [];
    const fetchTodos = async ()=>{
        const response = await fetch("http://localhost:8080");
        const todos = await response.json();
    };
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("h1", {
                className: "p-4 text-4xl",
                children: "Welcome to your portal!"
            }, void 0, false, {
                fileName: "<src/app/page.jsx>",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$react$2e$shared$2d$subset$2e$js__["Suspense"], {
                fallback: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("p", {
                    children: "Loading heart data..."
                }, void 0, false, void 0, void 0),
                children: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                    className: "p-8 m-8 border-neutral-400 border-2 stats shadow-2xl animate-[pulse_2s_ease-in-out] shadow-pink-700/50",
                    children: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                        className: "stat",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                                className: "stat-title text-xl",
                                children: "Chance of Heart Attack"
                            }, void 0, false, {
                                fileName: "<src/app/page.jsx>",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                                className: "stat-value text-primary",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "#be185d",
                                        viewBox: "0 0 24 24",
                                        className: "inline-block animate-ping w-16 h-16 stroke-pink-700",
                                        children: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        }, void 0, false, {
                                            fileName: "<src/app/page.jsx>",
                                            lineNumber: 17,
                                            columnNumber: 154
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<src/app/page.jsx>",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "#be185d",
                                        viewBox: "0 0 24 24",
                                        className: "inline-block ml-[-4rem] w-16 h-16 stroke-pink-700",
                                        children: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        }, void 0, false, {
                                            fileName: "<src/app/page.jsx>",
                                            lineNumber: 18,
                                            columnNumber: 152
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<src/app/page.jsx>",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<src/app/page.jsx>",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                                className: "stat-desc",
                                children: [
                                    "7% less than last month",
                                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("button", {
                                        onClick: fetchTodos,
                                        children: "Get todos"
                                    }, void 0, false, {
                                        fileName: "<src/app/page.jsx>",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("ul", {
                                        children: todos.map((todo)=>{
                                            return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("li", {
                                                children: todo.bpm
                                            }, void 0, false, {
                                                fileName: "<src/app/page.jsx>",
                                                lineNumber: 25,
                                                columnNumber: 1
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "<src/app/page.jsx>",
                                        lineNumber: 22,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<src/app/page.jsx>",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                                className: "radial-progress bg-base-200 border-primary text-primary-content font-extrabold text-4xl stat-figure animate-[spin_2s_cubic-bezier(.76,.01,.44,.95)]",
                                style: {
                                    "--value": 5,
                                    "--thickness": "8px",
                                    "--size": "12rem"
                                },
                                children: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__["jsxDEV"]("div", {
                                    className: "animate-[spin_2s_cubic-bezier(.86,.39,.11,.82)]",
                                    style: {
                                        'animation-direction': 'reverse'
                                    },
                                    children: "5%"
                                }, void 0, false, {
                                    fileName: "<src/app/page.jsx>",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<src/app/page.jsx>",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<src/app/page.jsx>",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<src/app/page.jsx>",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<src/app/page.jsx>",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<src/app/page.jsx>",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}

})()),
}]);


//# sourceMappingURL=src_app_page.jsx.js.map