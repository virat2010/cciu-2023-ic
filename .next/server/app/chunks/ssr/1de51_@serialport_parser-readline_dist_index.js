(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/1de51_@serialport_parser-readline_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-readline@10.5.0/node_modules/@serialport/parser-readline/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReadlineParser = void 0;
const parser_delimiter_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-delimiter@10.5.0/node_modules/@serialport/parser-delimiter/dist/index.js (ecmascript, ssr)");
class ReadlineParser extends parser_delimiter_1.DelimiterParser {
    constructor(options){
        const opts = {
            delimiter: Buffer.from('\n', 'utf8'),
            encoding: 'utf8',
            ...options
        };
        if (typeof opts.delimiter === 'string') {
            opts.delimiter = Buffer.from(opts.delimiter, opts.encoding);
        }
        super(opts);
    }
}
exports.ReadlineParser = ReadlineParser;

}.call(this) }),
}]);


//# sourceMappingURL=1de51_@serialport_parser-readline_dist_index.js.map