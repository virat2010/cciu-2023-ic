(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/src_app_heartSensor.js", {

"[project-with-next]/src/app/heartSensor.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>BPM
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$serialport$40$10$2e$5$2e$0$2f$node_modules$2f$serialport$2f$dist$2f$index$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/.pnpm/serialport@10.5.0/node_modules/serialport/dist/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
function BPM() {
    const [bpm, setBpm] = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$next$40$13$2e$1$2e$5_react$2d$dom$40$18$2e$2$2e$0$2b$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__["default"](0);
    const parser = new __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$serialport$40$10$2e$5$2e$0$2f$node_modules$2f$serialport$2f$dist$2f$index$2e$js__["ReadlineParser"]();
    const myPort = new __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$serialport$40$10$2e$5$2e$0$2f$node_modules$2f$serialport$2f$dist$2f$index$2e$js__["SerialPort"]({
        path: 'COM3',
        baudRate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: 'none'
    });
    myPort.pipe(parser);
    parser.on('data', setBpm);
    return {
        bpm
    };
}

})()),
}]);


//# sourceMappingURL=src_app_heartSensor.js.map