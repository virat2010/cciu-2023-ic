(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_compiled_css.escape_css.escape.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/css.escape/css.escape.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

(()=>{
    var e = {
        553: function(e) {
            (function(r, t) {
                if (true) {
                    e.exports = t(r);
                } else {}
            })(typeof global != "undefined" ? global : this, function(e) {
                if (e.CSS && e.CSS.escape) {
                    return e.CSS.escape;
                }
                var cssEscape = function(e) {
                    if (arguments.length == 0) {
                        throw new TypeError("`CSS.escape` requires an argument.");
                    }
                    var r = String(e);
                    var t = r.length;
                    var n = -1;
                    var a;
                    var i = "";
                    var u = r.charCodeAt(0);
                    while(++n < t){
                        a = r.charCodeAt(n);
                        if (a == 0) {
                            i += "�";
                            continue;
                        }
                        if (a >= 1 && a <= 31 || a == 127 || n == 0 && a >= 48 && a <= 57 || n == 1 && a >= 48 && a <= 57 && u == 45) {
                            i += "\\" + a.toString(16) + " ";
                            continue;
                        }
                        if (n == 0 && t == 1 && a == 45) {
                            i += "\\" + r.charAt(n);
                            continue;
                        }
                        if (a >= 128 || a == 45 || a == 95 || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122) {
                            i += r.charAt(n);
                            continue;
                        }
                        i += "\\" + r.charAt(n);
                    }
                    return i;
                };
                if (!e.CSS) {
                    e.CSS = {};
                }
                e.CSS.escape = cssEscape;
                return cssEscape;
            });
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var n = r[t];
        if (n !== undefined) {
            return n.exports;
        }
        var a = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t].call(a.exports, a, a.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(553);
    module.exports = t;
})();

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_compiled_css.escape_css.escape.js.map