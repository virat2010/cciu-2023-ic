(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_compiled_react-dom_server.browser.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server.browser.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
var l, s;
if (process.env.NODE_ENV === 'production') {
    l = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.production.min.js (ecmascript, ssr)");
    s = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server.browser.production.min.js (ecmascript, ssr)");
} else {
    l = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.development.js (ecmascript, ssr)");
    s = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server.browser.development.js (ecmascript, ssr)");
}
exports.version = l.version;
exports.renderToString = l.renderToString;
exports.renderToStaticMarkup = l.renderToStaticMarkup;
exports.renderToNodeStream = l.renderToNodeStream;
exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
exports.renderToReadableStream = s.renderToReadableStream;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.production.min.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
var aa = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"), ba = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)");
function m(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var q = Object.prototype.hasOwnProperty, ca = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, da = {}, ea = {};
function fa(a) {
    if (q.call(ea, a)) return !0;
    if (q.call(da, a)) return !1;
    if (ca.test(a)) return ea[a] = !0;
    da[a] = !0;
    return !1;
}
function t(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var v = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    v[a] = new t(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    v[b] = new t(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    v[a] = new t(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    v[a] = new t(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    v[a] = new t(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    v[a] = new t(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    v[a] = new t(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    v[a] = new t(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    v[a] = new t(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var ha = /[\-:]([a-z])/g;
function ia(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(ha, ia);
    v[b] = new t(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ha, ia);
    v[b] = new t(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(ha, ia);
    v[b] = new t(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    v[a] = new t(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
v.xlinkHref = new t("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    v[a] = new t(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
var ja = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, ka = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(ja).forEach(function(a) {
    ka.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        ja[b] = ja[a];
    });
});
var la = /["'&<>]/;
function w(a) {
    if ("boolean" === typeof a || "number" === typeof a) return "" + a;
    a = "" + a;
    var b = la.exec(a);
    if (b) {
        var c = "", d, e = 0;
        for(d = b.index; d < a.length; d++){
            switch(a.charCodeAt(d)){
                case 34:
                    b = "&quot;";
                    break;
                case 38:
                    b = "&amp;";
                    break;
                case 39:
                    b = "&#x27;";
                    break;
                case 60:
                    b = "&lt;";
                    break;
                case 62:
                    b = "&gt;";
                    break;
                default:
                    continue;
            }
            e !== d && (c += a.substring(e, d));
            e = d + 1;
            c += b;
        }
        a = e !== d ? c + a.substring(e, d) : c;
    }
    return a;
}
var ma = /([A-Z])/g, na = /^ms-/, oa = Array.isArray, x = Object.assign, y = null, pa = [], ta = {
    preload: qa,
    preinit: ra
};
function qa(a, b) {
    if (y) {
        var c = y;
        if ("string" === typeof a && a && "object" === typeof b && null !== b) {
            var d = b.as, e = c.preloadsMap.get(a);
            e || (e = z(c, a, d, {
                href: a,
                rel: "preload",
                as: d,
                crossOrigin: "font" === d ? "" : b.crossOrigin,
                integrity: b.integrity
            }));
            switch(d){
                case "font":
                    c.fontPreloads.add(e);
                    break;
                case "style":
                    c.explicitStylePreloads.add(e);
                    break;
                case "script":
                    c.explicitScriptPreloads.add(e);
            }
        }
    }
}
function ra(a, b) {
    if (y) a: {
        var c = y;
        if ("string" === typeof a && a && "object" === typeof b && null !== b) switch(b.as){
            case "style":
                var d = c.stylesMap.get(a);
                d || (d = b.precedence || "default", d = ua(c, a, d, {
                    rel: "stylesheet",
                    href: a,
                    "data-precedence": d,
                    crossOrigin: b.crossOrigin
                }));
                d.set.add(d);
                c.explicitStylePreloads.add(d.hint);
                break a;
            case "script":
                d = c.scriptsMap.get(a), d || (d = va(c, a, {
                    src: a,
                    async: !0,
                    crossOrigin: b.crossOrigin,
                    integrity: b.integrity
                }), c.scripts.add(d));
        }
    }
}
function wa(a, b) {
    return {
        rel: "preload",
        as: "style",
        href: a,
        crossOrigin: b.crossOrigin,
        integrity: b.integrity,
        media: b.media,
        hrefLang: b.hrefLang,
        referrerPolicy: b.referrerPolicy
    };
}
function xa(a, b) {
    return {
        rel: "preload",
        as: "script",
        href: a,
        crossOrigin: b.crossOrigin,
        integrity: b.integrity,
        referrerPolicy: b.referrerPolicy
    };
}
function z(a, b, c, d) {
    c = {
        type: "preload",
        as: c,
        href: b,
        flushed: !1,
        props: d
    };
    a.preloadsMap.set(b, c);
    return c;
}
function ua(a, b, c, d) {
    var e = a.stylesMap, f = a.preloadsMap, g = a.precedences, h = g.get(c);
    h || (h = new Set, g.set(c, h));
    (f = f.get(b)) ? (a = f.props, null == d.crossOrigin && (d.crossOrigin = a.crossOrigin), null == d.referrerPolicy && (d.referrerPolicy = a.referrerPolicy), null == d.title && (d.title = a.title)) : (f = wa(b, d), f = z(a, b, "style", f), a.explicitStylePreloads.add(f));
    c = {
        type: "style",
        href: b,
        precedence: c,
        flushed: !1,
        inShell: !1,
        props: d,
        hint: f,
        set: h
    };
    e.set(b, c);
    return c;
}
function va(a, b, c) {
    var d = a.scriptsMap, e = a.preloadsMap.get(b);
    e ? (a = e.props, null == c.crossOrigin && (c.crossOrigin = a.crossOrigin), null == c.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), null == c.integrity && (c.integrity = a.integrity)) : (e = xa(b, c), e = z(a, b, "script", e), a.explicitScriptPreloads.add(e));
    c = {
        type: "script",
        src: b,
        flushed: !1,
        props: c,
        hint: e
    };
    d.set(b, c);
    return c;
}
function ya(a, b) {
    if (!y) throw Error(m(445));
    var c = y;
    switch(a){
        case "title":
            var d = b.children;
            Array.isArray(d) && 1 === d.length && (d = d[0]);
            if ("string" === typeof d || "number" === typeof d) {
                var e = "title::" + d;
                a = c.headsMap.get(e);
                a || (b = x({}, b), b.children = d, a = {
                    type: "title",
                    props: b,
                    flushed: !1
                }, c.headsMap.set(e, a), c.headResources.add(a));
            }
            return !0;
        case "meta":
            if ("string" === typeof b.charSet) e = "charSet";
            else if ("string" === typeof b.content) {
                if (a = "::" + b.content, "string" === typeof b.httpEquiv) e = "httpEquiv::" + b.httpEquiv + a;
                else if ("string" === typeof b.name) e = "name::" + b.name + a;
                else if ("string" === typeof b.itemProp) e = "itemProp::" + b.itemProp + a;
                else if ("string" === typeof b.property) {
                    var f = b.property;
                    e = "property::" + f + a;
                    d = f;
                    a = f.split(":").slice(0, -1).join(":");
                    (a = c.structuredMetaKeys.get(a)) && (e = a.key + "::child::" + e);
                }
            }
            e && !c.headsMap.has(e) && (b = {
                type: "meta",
                key: e,
                props: x({}, b),
                flushed: !1
            }, c.headsMap.set(e, b), "charSet" === e ? c.charset = b : (d && c.structuredMetaKeys.set(d, b), c.headResources.add(b)));
            return !0;
        case "base":
            return e = b.target, d = b.href, e = "base" + ("string" === typeof d ? '[href="' + d + '"]' : ":not([href])") + ("string" === typeof e ? '[target="' + e + '"]' : ":not([target])"), c.headsMap.has(e) || (b = {
                type: "base",
                props: x({}, b),
                flushed: !1
            }, c.headsMap.set(e, b), c.bases.add(b)), !0;
    }
    return !1;
}
function za(a) {
    if (!y) throw Error(m(445));
    var b = y, c = a.rel, d = a.href;
    if (!d || "string" !== typeof d || !c || "string" !== typeof c) return !1;
    switch(c){
        case "stylesheet":
            var e = a.onLoad, f = a.onError;
            c = a.precedence;
            var g = a.disabled;
            if ("string" !== typeof c || e || f || null != g) return c = b.preloadsMap.get(d), c || (c = z(b, d, "style", wa(d, a)), b.usedStylePreloads.add(c)), !1;
            e = b.stylesMap.get(d);
            e || (a = x({}, a), a.href = d, a.rel = "stylesheet", a["data-precedence"] = c, delete a.precedence, e = ua(y, d, c, a), b.usedStylePreloads.add(e.hint));
            b.boundaryResources ? b.boundaryResources.add(e) : e.set.add(e);
            return !0;
        case "preload":
            switch(e = a.as, e){
                case "script":
                case "style":
                case "font":
                    c = b.preloadsMap.get(d);
                    if (!c) switch(a = x({}, a), a.href = d, a.rel = "preload", a.as = e, "font" === e && (a.crossOrigin = ""), c = z(b, d, e, a), e){
                        case "script":
                            b.explicitScriptPreloads.add(c);
                            break;
                        case "style":
                            b.explicitStylePreloads.add(c);
                            break;
                        case "font":
                            b.fontPreloads.add(c);
                    }
                    return !0;
            }
    }
    if (a.onLoad || a.onError) return !0;
    d = "rel:" + c + "::href:" + d + "::sizes:" + ("string" === typeof a.sizes ? a.sizes : "") + "::media:" + ("string" === typeof a.media ? a.media : "");
    e = b.headsMap.get(d);
    if (!e) switch(e = {
        type: "link",
        props: x({}, a),
        flushed: !1
    }, b.headsMap.set(d, e), c){
        case "preconnect":
        case "dns-prefetch":
            b.preconnects.add(e);
            break;
        default:
            b.headResources.add(e);
    }
    return !0;
}
function Aa(a, b) {
    var c = a.boundaryResources;
    c && (b.forEach(function(a) {
        return c.add(a);
    }), b.clear());
}
function Ba(a, b) {
    b.forEach(function(a) {
        return a.set.add(a);
    });
    b.clear();
}
var Ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher;
function A(a, b, c) {
    return {
        insertionMode: a,
        selectedValue: b,
        noscriptTagInScope: c
    };
}
function Da(a, b, c) {
    switch(b){
        case "noscript":
            return A(1, null, !0);
        case "select":
            return A(1, null != c.value ? c.value : c.defaultValue, a.noscriptTagInScope);
        case "svg":
            return A(2, null, a.noscriptTagInScope);
        case "math":
            return A(3, null, a.noscriptTagInScope);
        case "foreignObject":
            return A(1, null, a.noscriptTagInScope);
        case "table":
            return A(4, null, a.noscriptTagInScope);
        case "thead":
        case "tbody":
        case "tfoot":
            return A(5, null, a.noscriptTagInScope);
        case "colgroup":
            return A(7, null, a.noscriptTagInScope);
        case "tr":
            return A(6, null, a.noscriptTagInScope);
    }
    return 4 <= a.insertionMode || 0 === a.insertionMode ? A(1, null, a.noscriptTagInScope) : a;
}
var Ea = new Map;
function Fa(a, b, c) {
    if ("object" !== typeof c) throw Error(m(62));
    b = !0;
    for(var d in c)if (q.call(c, d)) {
        var e = c[d];
        if (null != e && "boolean" !== typeof e && "" !== e) {
            if (0 === d.indexOf("--")) {
                var f = w(d);
                e = w(("" + e).trim());
            } else {
                f = d;
                var g = Ea.get(f);
                void 0 !== g ? f = g : (g = w(f.replace(ma, "-$1").toLowerCase().replace(na, "-ms-")), Ea.set(f, g), f = g);
                e = "number" === typeof e ? 0 === e || q.call(ja, d) ? "" + e : e + "px" : w(("" + e).trim());
            }
            b ? (b = !1, a.push(' style="', f, ":", e)) : a.push(";", f, ":", e);
        }
    }
    b || a.push('"');
}
function B(a, b, c, d) {
    switch(c){
        case "style":
            Fa(a, b, d);
            return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
            return;
    }
    if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = v.hasOwnProperty(c) ? v[c] : null, null !== b) {
            switch(typeof d){
                case "function":
                case "symbol":
                    return;
                case "boolean":
                    if (!b.acceptsBooleans) return;
            }
            c = b.attributeName;
            switch(b.type){
                case 3:
                    d && a.push(" ", c, '=""');
                    break;
                case 4:
                    !0 === d ? a.push(" ", c, '=""') : !1 !== d && a.push(" ", c, '="', w(d), '"');
                    break;
                case 5:
                    isNaN(d) || a.push(" ", c, '="', w(d), '"');
                    break;
                case 6:
                    !isNaN(d) && 1 <= d && a.push(" ", c, '="', w(d), '"');
                    break;
                default:
                    b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', w(d), '"');
            }
        } else if (fa(c)) {
            switch(typeof d){
                case "function":
                case "symbol":
                    return;
                case "boolean":
                    if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
            }
            a.push(" ", c, '="', w(d), '"');
        }
    }
}
function C(a, b, c) {
    if (null != b) {
        if (null != c) throw Error(m(60));
        if ("object" !== typeof b || !("__html" in b)) throw Error(m(61));
        b = b.__html;
        null !== b && void 0 !== b && a.push("" + b);
    }
}
function Ga(a) {
    var b = "";
    aa.Children.forEach(a, function(a) {
        null != a && (b += a);
    });
    return b;
}
function F(a, b, c) {
    var d = "stylesheet" === b.rel;
    a.push(G("link"));
    for(var e in b)if (q.call(b, e)) {
        var f = b[e];
        if (null != f) switch(e){
            case "children":
            case "dangerouslySetInnerHTML":
                throw Error(m(399, "link"));
            case "precedence":
                if (d) continue;
            default:
                B(a, c, e, f);
        }
    }
    a.push("/>");
    return null;
}
function H(a, b, c, d) {
    a.push(G(c));
    for(var e in b)if (q.call(b, e)) {
        var f = b[e];
        if (null != f) switch(e){
            case "children":
            case "dangerouslySetInnerHTML":
                throw Error(m(399, c));
            default:
                B(a, d, e, f);
        }
    }
    a.push("/>");
    return null;
}
function Ha(a, b, c) {
    a.push(G("title"));
    var d = null, e;
    for(e in b)if (q.call(b, e)) {
        var f = b[e];
        if (null != f) switch(e){
            case "children":
                d = f;
                break;
            case "dangerouslySetInnerHTML":
                throw Error(m(434));
            default:
                B(a, c, e, f);
        }
    }
    a.push(">");
    b = Array.isArray(d) && 2 > d.length ? d[0] || null : d;
    "string" !== typeof b && "number" !== typeof b || a.push(w(b));
    a.push("</", "title", ">");
    return null;
}
function Ia(a, b, c) {
    a.push(G("script"));
    var d = null, e = null, f;
    for(f in b)if (q.call(b, f)) {
        var g = b[f];
        if (null != g) switch(f){
            case "children":
                d = g;
                break;
            case "dangerouslySetInnerHTML":
                e = g;
                break;
            default:
                B(a, c, f, g);
        }
    }
    a.push(">");
    C(a, e, d);
    "string" === typeof d && a.push(w(d));
    a.push("</", "script", ">");
    return null;
}
function I(a, b, c, d) {
    a.push(G(c));
    var e = c = null, f;
    for(f in b)if (q.call(b, f)) {
        var g = b[f];
        if (null != g) switch(f){
            case "children":
                c = g;
                break;
            case "dangerouslySetInnerHTML":
                e = g;
                break;
            default:
                B(a, d, f, g);
        }
    }
    a.push(">");
    C(a, e, c);
    return "string" === typeof c ? (a.push(w(c)), null) : c;
}
var Ja = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ka = new Map;
function G(a) {
    var b = Ka.get(a);
    if (void 0 === b) {
        if (!Ja.test(a)) throw Error(m(65, a));
        b = "<" + a;
        Ka.set(a, b);
    }
    return b;
}
function La(a, b, c, d, e, f, g) {
    switch(c){
        case "select":
            a.push(G("select"));
            var h = g = null, l;
            for(l in d)if (q.call(d, l)) {
                var k = d[l];
                if (null != k) switch(l){
                    case "children":
                        g = k;
                        break;
                    case "dangerouslySetInnerHTML":
                        h = k;
                        break;
                    case "defaultValue":
                    case "value":
                        break;
                    default:
                        B(a, e, l, k);
                }
            }
            a.push(">");
            C(a, h, g);
            return g;
        case "option":
            g = f.selectedValue;
            a.push(G("option"));
            var p = l = k = null, n = null;
            for(h in d)if (q.call(d, h)) {
                var r = d[h];
                if (null != r) switch(h){
                    case "children":
                        k = r;
                        break;
                    case "selected":
                        p = r;
                        break;
                    case "dangerouslySetInnerHTML":
                        n = r;
                        break;
                    case "value":
                        l = r;
                    default:
                        B(a, e, h, r);
                }
            }
            if (null != g) if (d = null !== l ? "" + l : Ga(k), oa(g)) for(e = 0; e < g.length; e++){
                if ("" + g[e] === d) {
                    a.push(' selected=""');
                    break;
                }
            }
            else "" + g === d && a.push(' selected=""');
            else p && a.push(' selected=""');
            a.push(">");
            C(a, n, k);
            return k;
        case "textarea":
            a.push(G("textarea"));
            k = h = g = null;
            for(n in d)if (q.call(d, n) && (l = d[n], null != l)) switch(n){
                case "children":
                    k = l;
                    break;
                case "value":
                    g = l;
                    break;
                case "defaultValue":
                    h = l;
                    break;
                case "dangerouslySetInnerHTML":
                    throw Error(m(91));
                default:
                    B(a, e, n, l);
            }
            null === g && null !== h && (g = h);
            a.push(">");
            if (null != k) {
                if (null != g) throw Error(m(92));
                if (oa(k) && 1 < k.length) throw Error(m(93));
                g = "" + k;
            }
            "string" === typeof g && "\n" === g[0] && a.push("\n");
            null !== g && a.push(w("" + g));
            return null;
        case "input":
            a.push(G("input"));
            l = n = h = g = null;
            for(k in d)if (q.call(d, k) && (p = d[k], null != p)) switch(k){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(m(399, "input"));
                case "defaultChecked":
                    l = p;
                    break;
                case "defaultValue":
                    h = p;
                    break;
                case "checked":
                    n = p;
                    break;
                case "value":
                    g = p;
                    break;
                default:
                    B(a, e, k, p);
            }
            null !== n ? B(a, e, "checked", n) : null !== l && B(a, e, "checked", l);
            null !== g ? B(a, e, "value", g) : null !== h && B(a, e, "value", h);
            a.push("/>");
            return null;
        case "menuitem":
            a.push(G("menuitem"));
            for(var u in d)if (q.call(d, u) && (g = d[u], null != g)) switch(u){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(m(400));
                default:
                    B(a, e, u, g);
            }
            a.push(">");
            return null;
        case "title":
            return a = 2 !== f.insertionMode && !f.noscriptTagInScope && ya("title", d) ? null : Ha(a, d, e), a;
        case "link":
            return !f.noscriptTagInScope && za(d) ? (g && a.push("\x3c!-- --\x3e"), a = null) : a = F(a, d, e), a;
        case "script":
            if (h = !f.noscriptTagInScope) {
                if (!y) throw Error(m(445));
                h = y;
                k = d.src;
                n = d.onLoad;
                l = d.onError;
                k && "string" === typeof k ? d.async ? (n || l ? (n = h.preloadsMap.get(k), n || (n = z(h, k, "script", xa(k, d)), h.usedScriptPreloads.add(n))) : (n = h.scriptsMap.get(k), n || (n = x({}, d), n.src = k, n = va(h, k, n), h.scripts.add(n))), h = !0) : h = !1 : h = !1;
            }
            h ? (g && a.push("\x3c!-- --\x3e"), a = null) : a = Ia(a, d, e);
            return a;
        case "meta":
            return !f.noscriptTagInScope && ya("meta", d) ? (g && a.push("\x3c!-- --\x3e"), a = null) : a = H(a, d, "meta", e), a;
        case "base":
            return !f.noscriptTagInScope && ya("base", d) ? (g && a.push("\x3c!-- --\x3e"), a = null) : a = H(a, d, "base", e), a;
        case "listing":
        case "pre":
            a.push(G(c));
            h = g = null;
            for(p in d)if (q.call(d, p) && (k = d[p], null != k)) switch(p){
                case "children":
                    g = k;
                    break;
                case "dangerouslySetInnerHTML":
                    h = k;
                    break;
                default:
                    B(a, e, p, k);
            }
            a.push(">");
            if (null != h) {
                if (null != g) throw Error(m(60));
                if ("object" !== typeof h || !("__html" in h)) throw Error(m(61));
                d = h.__html;
                null !== d && void 0 !== d && ("string" === typeof d && 0 < d.length && "\n" === d[0] ? a.push("\n", d) : a.push("" + d));
            }
            "string" === typeof g && "\n" === g[0] && a.push("\n");
            return g;
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
            return H(a, d, c, e);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return I(a, d, c, e);
        case "head":
            return I(b, d, c, e);
        case "html":
            return 0 === f.insertionMode && b.push("<!DOCTYPE html>"), I(b, d, c, e);
        default:
            if (-1 === c.indexOf("-") && "string" !== typeof d.is) return I(a, d, c, e);
            a.push(G(c));
            h = g = null;
            for(r in d)if (q.call(d, r) && (k = d[r], null != k)) switch(r){
                case "children":
                    g = k;
                    break;
                case "dangerouslySetInnerHTML":
                    h = k;
                    break;
                case "style":
                    Fa(a, e, k);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                    break;
                default:
                    fa(r) && "function" !== typeof k && "symbol" !== typeof k && a.push(" ", r, '="', w(k), '"');
            }
            a.push(">");
            C(a, h, g);
            return g;
    }
}
function Ma(a, b, c) {
    switch(c){
        case "title":
        case "script":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
            return;
        case "body":
            b.unshift("</", c, ">");
            return;
        case "html":
            b.push("</", c, ">");
            return;
    }
    a.push("</", c, ">");
}
function Na(a, b, c) {
    a.push('\x3c!--$?--\x3e<template id="');
    if (null === c) throw Error(m(395));
    a.push(c);
    return a.push('"></template>');
}
function Oa(a, b, c, d) {
    switch(c.insertionMode){
        case 0:
        case 1:
            return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 2:
            return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 3:
            return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 4:
            return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 5:
            return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 6:
            return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        case 7:
            return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
        default:
            throw Error(m(397));
    }
}
function Pa(a, b) {
    switch(b.insertionMode){
        case 0:
        case 1:
            return a.push("</div>");
        case 2:
            return a.push("</svg>");
        case 3:
            return a.push("</math>");
        case 4:
            return a.push("</table>");
        case 5:
            return a.push("</tbody></table>");
        case 6:
            return a.push("</tr></table>");
        case 7:
            return a.push("</colgroup></table>");
        default:
            throw Error(m(397));
    }
}
var Qa = /[<\u2028\u2029]/g;
function Ra(a) {
    return JSON.stringify(a).replace(Qa, function(a) {
        switch(a){
            case "<":
                return "\\u003c";
            case "\u2028":
                return "\\u2028";
            case "\u2029":
                return "\\u2029";
            default:
                throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    });
}
var Sa = /[&><\u2028\u2029]/g;
function J(a) {
    return JSON.stringify(a).replace(Sa, function(a) {
        switch(a){
            case "&":
                return "\\u0026";
            case ">":
                return "\\u003e";
            case "<":
                return "\\u003c";
            case "\u2028":
                return "\\u2028";
            case "\u2029":
                return "\\u2029";
            default:
                throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    });
}
function Ta(a, b, c) {
    function d(a) {
        a.flushed || (F(e, a.props, c), a.flushed = !0);
    }
    var e = [], f = b.charset, g = b.bases, h = b.preconnects, l = b.fontPreloads, k = b.precedences, p = b.usedStylePreloads, n = b.scripts, r = b.usedScriptPreloads, u = b.explicitStylePreloads, L = b.explicitScriptPreloads, E = b.headResources;
    f && (H(e, f.props, "meta", c), f.flushed = !0, b.charset = null);
    g.forEach(function(a) {
        H(e, a.props, "base", c);
        a.flushed = !0;
    });
    g.clear();
    h.forEach(function(a) {
        F(e, a.props, c);
        a.flushed = !0;
    });
    h.clear();
    l.forEach(function(a) {
        F(e, a.props, c);
        a.flushed = !0;
    });
    l.clear();
    k.forEach(function(a, b) {
        a.size ? (a.forEach(function(a) {
            F(e, a.props, c);
            a.flushed = !0;
            a.inShell = !0;
            a.hint.flushed = !0;
        }), a.clear()) : e.push('<style data-precedence="', w(b), '"></style>');
    });
    p.forEach(d);
    p.clear();
    n.forEach(function(a) {
        Ia(e, a.props, c);
        a.flushed = !0;
        a.hint.flushed = !0;
    });
    n.clear();
    r.forEach(d);
    r.clear();
    u.forEach(d);
    u.clear();
    L.forEach(d);
    L.clear();
    E.forEach(function(a) {
        switch(a.type){
            case "title":
                Ha(e, a.props, c);
                break;
            case "meta":
                H(e, a.props, "meta", c);
                break;
            case "link":
                F(e, a.props, c);
        }
        a.flushed = !0;
    });
    E.clear();
    f = !0;
    for(b = 0; b < e.length - 1; b++)a.push(e[b]);
    b < e.length && (f = a.push(e[b]));
    return f;
}
function Ua(a, b, c) {
    function d(a) {
        a.flushed || (F(e, a.props, c), a.flushed = !0);
    }
    var e = [], f = b.charset, g = b.preconnects, h = b.fontPreloads, l = b.usedStylePreloads, k = b.scripts, p = b.usedScriptPreloads, n = b.explicitStylePreloads, r = b.explicitScriptPreloads, u = b.headResources;
    f && (H(e, f.props, "meta", c), f.flushed = !0, b.charset = null);
    g.forEach(function(a) {
        F(e, a.props, c);
        a.flushed = !0;
    });
    g.clear();
    h.forEach(function(a) {
        F(e, a.props, c);
        a.flushed = !0;
    });
    h.clear();
    l.forEach(d);
    l.clear();
    k.forEach(function(a) {
        I(e, a.props, "script", c);
        Ma(e, e, "script", a.props);
        a.flushed = !0;
        a.hint.flushed = !0;
    });
    k.clear();
    p.forEach(d);
    p.clear();
    n.forEach(d);
    n.clear();
    r.forEach(d);
    r.clear();
    u.forEach(function(a) {
        switch(a.type){
            case "title":
                Ha(e, a.props, c);
                break;
            case "meta":
                H(e, a.props, "meta", c);
                break;
            case "link":
                F(e, a.props, c);
        }
        a.flushed = !0;
    });
    u.clear();
    f = !0;
    for(b = 0; b < e.length - 1; b++)a.push(e[b]);
    b < e.length && (f = a.push(e[b]));
    return f;
}
function Va(a, b) {
    a.push("[");
    var c = "[";
    b.forEach(function(b) {
        if (!b.inShell) if (b.flushed) a.push(c), b = J("" + b.href), a.push(b), a.push("]"), c = ",[";
        else {
            a.push(c);
            var d = b.precedence, f = b.props, g = J("" + b.href);
            a.push(g);
            d = "" + d;
            a.push(",");
            d = J(d);
            a.push(d);
            for(var h in f)if (q.call(f, h)) {
                var l = f[h];
                if (null != l) switch(h){
                    case "href":
                    case "rel":
                    case "precedence":
                    case "data-precedence":
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(m(399, "link"));
                    default:
                        a: {
                            d = a;
                            var k = h;
                            g = k.toLowerCase();
                            switch(typeof l){
                                case "function":
                                case "symbol":
                                    break a;
                            }
                            switch(k){
                                case "innerHTML":
                                case "dangerouslySetInnerHTML":
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "style":
                                    break a;
                                case "className":
                                    g = "class";
                                    break;
                                case "hidden":
                                    if (!1 === l) break a;
                                    break;
                                case "src":
                                case "href":
                                    break;
                                default:
                                    if (!fa(k)) break a;
                            }
                            if (!(2 < k.length) || "o" !== k[0] && "O" !== k[0] || "n" !== k[1] && "N" !== k[1]) l = "" + l, d.push(","), g = J(g), d.push(g), d.push(","), g = J(l), d.push(g);
                        }
                }
            }
            a.push("]");
            c = ",[";
            b.flushed = !0;
            b.hint.flushed = !0;
        }
    });
    a.push("]");
}
function Wa(a, b) {
    b = void 0 === b ? "" : b;
    return {
        bootstrapChunks: [],
        placeholderPrefix: b + "P:",
        segmentPrefix: b + "S:",
        boundaryPrefix: b + "B:",
        idPrefix: b,
        nextSuspenseID: 0,
        streamingFormat: 0,
        startInlineScript: "<script>",
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
        sentStyleInsertionFunction: !1,
        externalRuntimeConfig: null,
        generateStaticMarkup: a
    };
}
function Xa(a, b, c, d) {
    if (c.generateStaticMarkup) return a.push(w(b)), !1;
    "" === b ? a = d : (d && a.push("\x3c!-- --\x3e"), a.push(w(b)), a = !0);
    return a;
}
var Ya = Symbol.for("react.element"), Za = Symbol.for("react.portal"), $a = Symbol.for("react.fragment"), ab = Symbol.for("react.strict_mode"), bb = Symbol.for("react.profiler"), cb = Symbol.for("react.provider"), db = Symbol.for("react.context"), eb = Symbol.for("react.server_context"), fb = Symbol.for("react.forward_ref"), gb = Symbol.for("react.suspense"), hb = Symbol.for("react.suspense_list"), ib = Symbol.for("react.memo"), jb = Symbol.for("react.lazy"), kb = Symbol.for("react.scope"), lb = Symbol.for("react.debug_trace_mode"), mb = Symbol.for("react.offscreen"), nb = Symbol.for("react.legacy_hidden"), ob = Symbol.for("react.cache"), pb = Symbol.for("react.default_value"), qb = Symbol.iterator;
function rb(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case $a:
            return "Fragment";
        case Za:
            return "Portal";
        case bb:
            return "Profiler";
        case ab:
            return "StrictMode";
        case gb:
            return "Suspense";
        case hb:
            return "SuspenseList";
        case ob:
            return "Cache";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case db:
            return (a.displayName || "Context") + ".Consumer";
        case cb:
            return (a._context.displayName || "Context") + ".Provider";
        case fb:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case ib:
            return b = a.displayName || null, null !== b ? b : rb(a.type) || "Memo";
        case jb:
            b = a._payload;
            a = a._init;
            try {
                return rb(a(b));
            } catch (c) {
                break;
            }
        case eb:
            return (a.displayName || a._globalName) + ".Provider";
    }
    return null;
}
var sb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tb = {};
function ub(a, b) {
    a = a.contextTypes;
    if (!a) return tb;
    var c = {}, d;
    for(d in a)c[d] = b[d];
    return c;
}
var N = null;
function vb(a, b) {
    if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
            if (null !== c) throw Error(m(401));
        } else {
            if (null === c) throw Error(m(401));
            vb(a, c);
        }
        b.context._currentValue2 = b.value;
    }
}
function wb(a) {
    a.context._currentValue2 = a.parentValue;
    a = a.parent;
    null !== a && wb(a);
}
function xb(a) {
    var b = a.parent;
    null !== b && xb(b);
    a.context._currentValue2 = a.value;
}
function yb(a, b) {
    a.context._currentValue2 = a.parentValue;
    a = a.parent;
    if (null === a) throw Error(m(402));
    a.depth === b.depth ? vb(a, b) : yb(a, b);
}
function zb(a, b) {
    var c = b.parent;
    if (null === c) throw Error(m(402));
    a.depth === c.depth ? vb(a, c) : zb(a, c);
    b.context._currentValue2 = b.value;
}
function Ab(a) {
    var b = N;
    b !== a && (null === b ? xb(a) : null === a ? wb(b) : b.depth === a.depth ? vb(b, a) : b.depth > a.depth ? yb(b, a) : zb(b, a), N = a);
}
var Bb = {
    isMounted: function() {
        return !1;
    },
    enqueueSetState: function(a, b) {
        a = a._reactInternals;
        null !== a.queue && a.queue.push(b);
    },
    enqueueReplaceState: function(a, b) {
        a = a._reactInternals;
        a.replace = !0;
        a.queue = [
            b
        ];
    },
    enqueueForceUpdate: function() {}
};
function Cb(a, b, c, d) {
    var e = void 0 !== a.state ? a.state : null;
    a.updater = Bb;
    a.props = c;
    a.state = e;
    var f = {
        queue: [],
        replace: !1
    };
    a._reactInternals = f;
    var g = b.contextType;
    a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
    g = b.getDerivedStateFromProps;
    "function" === typeof g && (g = g(c, e), e = null === g || void 0 === g ? e : x({}, e, g), a.state = e);
    if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && Bb.enqueueReplaceState(a, a.state, null), null !== f.queue && 0 < f.queue.length) if (b = f.queue, g = f.replace, f.queue = null, f.replace = !1, g && 1 === b.length) a.state = b[0];
    else {
        f = g ? b[0] : a.state;
        e = !0;
        for(g = g ? 1 : 0; g < b.length; g++){
            var h = b[g];
            h = "function" === typeof h ? h.call(a, f, c, d) : h;
            null != h && (e ? (e = !1, f = x({}, f, h)) : x(f, h));
        }
        a.state = f;
    }
    else f.queue = null;
}
var Db = {
    id: 1,
    overflow: ""
};
function Eb(a, b, c) {
    var d = a.id;
    a = a.overflow;
    var e = 32 - Fb(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - Fb(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        return {
            id: 1 << 32 - Fb(b) + e | c << e | d,
            overflow: f + a
        };
    }
    return {
        id: 1 << f | c << e | d,
        overflow: a
    };
}
var Fb = Math.clz32 ? Math.clz32 : Gb, Hb = Math.log, Ib = Math.LN2;
function Gb(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (Hb(a) / Ib | 0) | 0;
}
var Jb = Error(m(460));
function Kb() {}
function Lb(a, b, c) {
    c = a[c];
    void 0 === c ? a.push(b) : c !== b && (b.then(Kb, Kb), b = c);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(a) {
                if ("pending" === b.status) {
                    var c = b;
                    c.status = "fulfilled";
                    c.value = a;
                }
            }, function(a) {
                if ("pending" === b.status) {
                    var c = b;
                    c.status = "rejected";
                    c.reason = a;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            Mb = b;
            throw Jb;
    }
}
var Mb = null;
function Nb() {
    if (null === Mb) throw Error(m(459));
    var a = Mb;
    Mb = null;
    return a;
}
function Ob(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var Pb = "function" === typeof Object.is ? Object.is : Ob, O = null, Qb = null, Rb = null, P = null, Q = !1, Sb = !1, R = 0, S = 0, U = null, V = null, Tb = 0;
function W() {
    if (null === O) throw Error(m(321));
    return O;
}
function Ub() {
    if (0 < Tb) throw Error(m(312));
    return {
        memoizedState: null,
        queue: null,
        next: null
    };
}
function Vb() {
    null === P ? null === Rb ? (Q = !1, Rb = P = Ub()) : (Q = !0, P = Rb) : null === P.next ? (Q = !1, P = P.next = Ub()) : (Q = !0, P = P.next);
    return P;
}
function Wb(a, b, c, d) {
    for(; Sb;)Sb = !1, S = R = 0, Tb += 1, P = null, c = a(b, d);
    Xb();
    return c;
}
function Yb() {
    var a = U;
    U = null;
    return a;
}
function Xb() {
    Qb = O = null;
    Sb = !1;
    Rb = null;
    Tb = 0;
    P = V = null;
}
function Zb(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function $b(a, b, c) {
    O = W();
    P = Vb();
    if (Q) {
        var d = P.queue;
        b = d.dispatch;
        if (null !== V && (c = V.get(d), void 0 !== c)) {
            V.delete(d);
            d = P.memoizedState;
            do d = a(d, c.action), c = c.next;
            while (null !== c)
            P.memoizedState = d;
            return [
                d,
                b
            ];
        }
        return [
            P.memoizedState,
            b
        ];
    }
    a = a === Zb ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
    P.memoizedState = a;
    a = P.queue = {
        last: null,
        dispatch: null
    };
    a = a.dispatch = ac.bind(null, O, a);
    return [
        P.memoizedState,
        a
    ];
}
function bc(a, b) {
    O = W();
    P = Vb();
    b = void 0 === b ? null : b;
    if (null !== P) {
        var c = P.memoizedState;
        if (null !== c && null !== b) {
            var d = c[1];
            a: if (null === d) d = !1;
            else {
                for(var e = 0; e < d.length && e < b.length; e++)if (!Pb(b[e], d[e])) {
                    d = !1;
                    break a;
                }
                d = !0;
            }
            if (d) return c[0];
        }
    }
    a = a();
    P.memoizedState = [
        a,
        b
    ];
    return a;
}
function ac(a, b, c) {
    if (25 <= Tb) throw Error(m(301));
    if (a === O) if (Sb = !0, a = {
        action: c,
        next: null
    }, null === V && (V = new Map), c = V.get(b), void 0 === c) V.set(b, a);
    else {
        for(b = c; null !== b.next;)b = b.next;
        b.next = a;
    }
}
function cc() {
    throw Error(m(394));
}
function dc() {
    throw Error(m(393));
}
function ec() {}
var gc = {
    readContext: function(a) {
        return a._currentValue2;
    },
    useContext: function(a) {
        W();
        return a._currentValue2;
    },
    useMemo: bc,
    useReducer: $b,
    useRef: function(a) {
        O = W();
        P = Vb();
        var b = P.memoizedState;
        return null === b ? (a = {
            current: a
        }, P.memoizedState = a) : b;
    },
    useState: function(a) {
        return $b(Zb, a);
    },
    useInsertionEffect: ec,
    useLayoutEffect: function() {},
    useCallback: function(a, b) {
        return bc(function() {
            return a;
        }, b);
    },
    useImperativeHandle: ec,
    useEffect: ec,
    useDebugValue: ec,
    useDeferredValue: function(a) {
        W();
        return a;
    },
    useTransition: function() {
        W();
        return [
            !1,
            cc
        ];
    },
    useId: function() {
        var a = Qb.treeContext;
        var b = a.overflow;
        a = a.id;
        a = (a & ~(1 << 32 - Fb(a) - 1)).toString(32) + b;
        var c = fc;
        if (null === c) throw Error(m(404));
        b = R++;
        a = ":" + c.idPrefix + "R" + a;
        0 < b && (a += "H" + b.toString(32));
        return a + ":";
    },
    useMutableSource: function(a, b) {
        W();
        return b(a._source);
    },
    useSyncExternalStore: function(a, b, c) {
        if (void 0 === c) throw Error(m(407));
        return c();
    },
    useCacheRefresh: function() {
        return dc;
    },
    use: function(a) {
        if (null !== a && "object" === typeof a) {
            if ("function" === typeof a.then) {
                var b = S;
                S += 1;
                null === U && (U = []);
                return Lb(U, a, b);
            }
            if (a.$$typeof === db || a.$$typeof === eb) return a._currentValue2;
        }
        throw Error(m(438, String(a)));
    }
}, fc = null, hc = {
    getCacheSignal: function() {
        throw Error(m(248));
    },
    getCacheForType: function() {
        throw Error(m(248));
    }
}, ic = sb.ReactCurrentDispatcher, jc = sb.ReactCurrentCache;
function kc(a) {
    console.error(a);
    return null;
}
function lc() {}
function mc(a, b, c, d, e, f, g, h, l) {
    var k = [], p = new Set, n = {
        preloadsMap: new Map,
        stylesMap: new Map,
        scriptsMap: new Map,
        headsMap: new Map,
        charset: null,
        bases: new Set,
        preconnects: new Set,
        fontPreloads: new Set,
        precedences: new Map,
        usedStylePreloads: new Set,
        scripts: new Set,
        usedScriptPreloads: new Set,
        explicitStylePreloads: new Set,
        explicitScriptPreloads: new Set,
        headResources: new Set,
        structuredMetaKeys: new Map,
        boundaryResources: null
    };
    b = {
        destination: null,
        responseState: b,
        progressiveChunkSize: void 0 === d ? 12800 : d,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        resources: n,
        completedRootSegment: null,
        abortableTasks: p,
        pingedTasks: k,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        preamble: [],
        postamble: [],
        onError: void 0 === e ? kc : e,
        onAllReady: void 0 === f ? lc : f,
        onShellReady: void 0 === g ? lc : g,
        onShellError: void 0 === h ? lc : h,
        onFatalError: void 0 === l ? lc : l
    };
    c = nc(b, 0, null, c, !1, !1);
    c.parentFlushed = !0;
    a = oc(b, null, a, null, c, p, tb, null, Db);
    k.push(a);
    return b;
}
function oc(a, b, c, d, e, f, g, h, l) {
    a.allPendingTasks++;
    null === d ? a.pendingRootTasks++ : d.pendingTasks++;
    var k = {
        node: c,
        ping: function() {
            var b = a.pingedTasks;
            b.push(k);
            1 === b.length && pc(a);
        },
        blockedBoundary: d,
        blockedSegment: e,
        abortSet: f,
        legacyContext: g,
        context: h,
        treeContext: l,
        thenableState: b
    };
    f.add(k);
    return k;
}
function nc(a, b, c, d, e, f) {
    return {
        status: 0,
        id: -1,
        index: b,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: d,
        boundary: c,
        lastPushedText: e,
        textEmbedded: f
    };
}
function Y(a, b) {
    a = a.onError(b);
    if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
}
function qc(a, b) {
    var c = a.onShellError;
    c(b);
    c = a.onFatalError;
    c(b);
    null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
}
function rc(a, b, c, d) {
    var e = c.render(), f = d.childContextTypes;
    if (null !== f && void 0 !== f) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
            c = c.getChildContext();
            for(var h in c)if (!(h in f)) throw Error(m(108, rb(d) || "Unknown", h));
            d = x({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, null, e);
        b.legacyContext = g;
    } else Z(a, b, null, e);
}
function sc(a, b) {
    if (a && a.defaultProps) {
        b = x({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
function tc(a, b, c, d, e, f) {
    if ("function" === typeof d) if (d.prototype && d.prototype.isReactComponent) c = ub(d, b.legacyContext), f = d.contextType, f = new d(e, "object" === typeof f && null !== f ? f._currentValue2 : c), Cb(f, d, e, c), rc(a, b, f, d);
    else {
        f = ub(d, b.legacyContext);
        O = {};
        Qb = b;
        S = R = 0;
        U = c;
        c = d(e, f);
        c = Wb(d, e, c, f);
        var g = 0 !== R;
        if ("object" === typeof c && null !== c && "function" === typeof c.render && void 0 === c.$$typeof) Cb(c, d, e, f), rc(a, b, c, d);
        else if (g) {
            e = b.treeContext;
            b.treeContext = Eb(e, 1, 0);
            try {
                Z(a, b, null, c);
            } finally{
                b.treeContext = e;
            }
        } else Z(a, b, null, c);
    }
    else if ("string" === typeof d) c = b.blockedSegment, f = La(c.chunks, a.preamble, d, e, a.responseState, c.formatContext, c.lastPushedText), c.lastPushedText = !1, g = c.formatContext, c.formatContext = Da(g, d, e), uc(a, b, f), c.formatContext = g, Ma(c.chunks, a.postamble, d), c.lastPushedText = !1;
    else {
        switch(d){
            case nb:
            case lb:
            case ab:
            case bb:
            case $a:
                Z(a, b, null, e.children);
                return;
            case mb:
                "hidden" !== e.mode && Z(a, b, null, e.children);
                return;
            case hb:
                Z(a, b, null, e.children);
                return;
            case kb:
                throw Error(m(343));
            case gb:
                a: {
                    d = b.blockedBoundary;
                    c = b.blockedSegment;
                    f = e.fallback;
                    e = e.children;
                    g = new Set;
                    var h = {
                        id: null,
                        rootSegmentID: -1,
                        parentFlushed: !1,
                        pendingTasks: 0,
                        forceClientRender: !1,
                        completedSegments: [],
                        byteSize: 0,
                        fallbackAbortableTasks: g,
                        errorDigest: null,
                        resources: new Set
                    }, l = nc(a, c.chunks.length, h, c.formatContext, !1, !1);
                    c.children.push(l);
                    c.lastPushedText = !1;
                    var k = nc(a, 0, null, c.formatContext, !1, !1);
                    k.parentFlushed = !0;
                    b.blockedBoundary = h;
                    b.blockedSegment = k;
                    a.resources.boundaryResources = h.resources;
                    try {
                        if (uc(a, b, e), a.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("\x3c!-- --\x3e"), k.status = 1, 0 === h.pendingTasks && (null !== a.completedRootSegment || 0 < a.pendingRootTasks) && Ba(a.resources, h.resources), vc(h, k), 0 === h.pendingTasks) break a;
                    } catch (p) {
                        k.status = 4, h.forceClientRender = !0, h.errorDigest = Y(a, p);
                    } finally{
                        a.resources.boundaryResources = d ? d.resources : null, b.blockedBoundary = d, b.blockedSegment = c;
                    }
                    b = oc(a, null, f, d, l, g, b.legacyContext, b.context, b.treeContext);
                    a.pingedTasks.push(b);
                }
                return;
        }
        if ("object" === typeof d && null !== d) switch(d.$$typeof){
            case fb:
                d = d.render;
                O = {};
                Qb = b;
                S = R = 0;
                U = c;
                c = d(e, f);
                e = Wb(d, e, c, f);
                if (0 !== R) {
                    d = b.treeContext;
                    b.treeContext = Eb(d, 1, 0);
                    try {
                        Z(a, b, null, e);
                    } finally{
                        b.treeContext = d;
                    }
                } else Z(a, b, null, e);
                return;
            case ib:
                d = d.type;
                e = sc(d, e);
                tc(a, b, c, d, e, f);
                return;
            case cb:
                c = e.children;
                d = d._context;
                e = e.value;
                f = d._currentValue2;
                d._currentValue2 = e;
                g = N;
                N = e = {
                    parent: g,
                    depth: null === g ? 0 : g.depth + 1,
                    context: d,
                    parentValue: f,
                    value: e
                };
                b.context = e;
                Z(a, b, null, c);
                a = N;
                if (null === a) throw Error(m(403));
                e = a.parentValue;
                a.context._currentValue2 = e === pb ? a.context._defaultValue : e;
                a = N = a.parent;
                b.context = a;
                return;
            case db:
                e = e.children;
                e = e(d._currentValue2);
                Z(a, b, null, e);
                return;
            case jb:
                f = d._init;
                d = f(d._payload);
                e = sc(d, e);
                tc(a, b, c, d, e, void 0);
                return;
        }
        throw Error(m(130, null == d ? d : typeof d, ""));
    }
}
function Z(a, b, c, d) {
    b.node = d;
    if ("object" === typeof d && null !== d) {
        switch(d.$$typeof){
            case Ya:
                tc(a, b, c, d.type, d.props, d.ref);
                return;
            case Za:
                throw Error(m(257));
            case jb:
                c = d._init;
                d = c(d._payload);
                Z(a, b, null, d);
                return;
        }
        if (oa(d)) {
            wc(a, b, d);
            return;
        }
        null === d || "object" !== typeof d ? c = null : (c = qb && d[qb] || d["@@iterator"], c = "function" === typeof c ? c : null);
        if (c && (c = c.call(d))) {
            d = c.next();
            if (!d.done) {
                var e = [];
                do e.push(d.value), d = c.next();
                while (!d.done)
                wc(a, b, e);
            }
            return;
        }
        a = Object.prototype.toString.call(d);
        throw Error(m(31, "[object Object]" === a ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    "string" === typeof d ? (c = b.blockedSegment, c.lastPushedText = Xa(b.blockedSegment.chunks, d, a.responseState, c.lastPushedText)) : "number" === typeof d && (c = b.blockedSegment, c.lastPushedText = Xa(b.blockedSegment.chunks, "" + d, a.responseState, c.lastPushedText));
}
function wc(a, b, c) {
    for(var d = c.length, e = 0; e < d; e++){
        var f = b.treeContext;
        b.treeContext = Eb(f, d, e);
        try {
            uc(a, b, c[e]);
        } finally{
            b.treeContext = f;
        }
    }
}
function uc(a, b, c) {
    var d = b.blockedSegment.formatContext, e = b.legacyContext, f = b.context;
    try {
        return Z(a, b, null, c);
    } catch (k) {
        if (Xb(), c = k === Jb ? Nb() : k, "object" === typeof c && null !== c && "function" === typeof c.then) {
            var g = Yb(), h = b.blockedSegment, l = nc(a, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
            h.children.push(l);
            h.lastPushedText = !1;
            a = oc(a, g, b.node, b.blockedBoundary, l, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
            c.then(a, a);
            b.blockedSegment.formatContext = d;
            b.legacyContext = e;
            b.context = f;
            Ab(f);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = e, b.context = f, Ab(f), c;
    }
}
function xc(a) {
    var b = a.blockedBoundary;
    a = a.blockedSegment;
    a.status = 3;
    yc(this, b, a);
}
function zc(a, b, c) {
    var d = a.blockedBoundary;
    a.blockedSegment.status = 3;
    null === d ? (b.allPendingTasks--, 1 !== b.status && 2 !== b.status && (Y(b, c), qc(b, c))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = b.onError(c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a) {
        return zc(a, b, c);
    }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
}
function vc(a, b) {
    if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = !0;
        1 === c.status && vc(a, c);
    } else a.completedSegments.push(b);
}
function yc(a, b, c) {
    if (null === b) {
        if (c.parentFlushed) {
            if (null !== a.completedRootSegment) throw Error(m(389));
            a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = lc, b = a.onShellReady, b());
    } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && vc(b, c), (null !== a.completedRootSegment || 0 < a.pendingRootTasks) && Ba(a.resources, b.resources), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(xc, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (vc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
    a.allPendingTasks--;
    0 === a.allPendingTasks && (a = a.onAllReady, a());
}
function pc(a) {
    if (2 !== a.status) {
        var b = N, c = ic.current;
        ic.current = gc;
        var d = jc.current;
        jc.current = hc;
        var e = a.resources;
        pa.push(y);
        y = e;
        e = Ca.current;
        Ca.current = ta;
        var f = fc;
        fc = a.responseState;
        try {
            var g = a.pingedTasks, h;
            for(h = 0; h < g.length; h++){
                var l = g[h];
                var k = a, p = l.blockedBoundary;
                k.resources.boundaryResources = p ? p.resources : null;
                var n = l.blockedSegment;
                if (0 === n.status) {
                    Ab(l.context);
                    try {
                        var r = l.thenableState;
                        l.thenableState = null;
                        Z(k, l, r, l.node);
                        k.responseState.generateStaticMarkup || n.lastPushedText && n.textEmbedded && n.chunks.push("\x3c!-- --\x3e");
                        l.abortSet.delete(l);
                        n.status = 1;
                        yc(k, l.blockedBoundary, n);
                    } catch (K) {
                        Xb();
                        var u = K === Jb ? Nb() : K;
                        if ("object" === typeof u && null !== u && "function" === typeof u.then) {
                            var L = l.ping;
                            u.then(L, L);
                            l.thenableState = Yb();
                        } else {
                            l.abortSet.delete(l);
                            n.status = 4;
                            var E = k, D = l.blockedBoundary, M = u, X = Y(E, M);
                            null === D ? qc(E, M) : (D.pendingTasks--, D.forceClientRender || (D.forceClientRender = !0, D.errorDigest = X, D.parentFlushed && E.clientRenderedBoundaries.push(D)));
                            E.allPendingTasks--;
                            if (0 === E.allPendingTasks) {
                                var T = E.onAllReady;
                                T();
                            }
                        }
                    } finally{
                        k.resources.boundaryResources = null;
                    }
                }
            }
            g.splice(0, h);
            null !== a.destination && Ac(a, a.destination);
        } catch (K) {
            Y(a, K), qc(a, K);
        } finally{
            fc = f, ic.current = c, jc.current = d, y = pa.pop(), Ca.current = e, c === gc && Ab(b);
        }
    }
}
function Bc(a, b, c) {
    c.parentFlushed = !0;
    switch(c.status){
        case 0:
            var d = c.id = a.nextSegmentId++;
            c.lastPushedText = !1;
            c.textEmbedded = !1;
            a = a.responseState;
            b.push('<template id="');
            b.push(a.placeholderPrefix);
            a = d.toString(16);
            b.push(a);
            return b.push('"></template>');
        case 1:
            c.status = 2;
            var e = !0;
            d = c.chunks;
            var f = 0;
            c = c.children;
            for(var g = 0; g < c.length; g++){
                for(e = c[g]; f < e.index; f++)b.push(d[f]);
                e = Cc(a, b, e);
            }
            for(; f < d.length - 1; f++)b.push(d[f]);
            f < d.length && (e = b.push(d[f]));
            return e;
        default:
            throw Error(m(390));
    }
}
function Cc(a, b, c) {
    var d = c.boundary;
    if (null === d) return Bc(a, b, c);
    d.parentFlushed = !0;
    if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("\x3c!--$!--\x3e"), b.push("<template"), d && (b.push(' data-dgst="'), d = w(d), b.push(d), b.push('"')), b.push("></template>")), Bc(a, b, c), a = a.responseState.generateStaticMarkup ? !0 : b.push("\x3c!--/$--\x3e"), a;
    if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var e = a.responseState;
        var f = e.nextSuspenseID++;
        e = e.boundaryPrefix + f.toString(16);
        d = d.id = e;
        Na(b, a.responseState, d);
        Bc(a, b, c);
        return b.push("\x3c!--/$--\x3e");
    }
    if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Na(b, a.responseState, d.id), Bc(a, b, c), b.push("\x3c!--/$--\x3e");
    Aa(a.resources, d.resources);
    a.responseState.generateStaticMarkup || b.push("\x3c!--$--\x3e");
    c = d.completedSegments;
    if (1 !== c.length) throw Error(m(391));
    Cc(a, b, c[0]);
    a = a.responseState.generateStaticMarkup ? !0 : b.push("\x3c!--/$--\x3e");
    return a;
}
function Dc(a, b, c) {
    Oa(b, a.responseState, c.formatContext, c.id);
    Cc(a, b, c);
    return Pa(b, c.formatContext);
}
function Ec(a, b, c) {
    a.resources.boundaryResources = c.resources;
    for(var d = c.completedSegments, e = 0; e < d.length; e++)Fc(a, b, c, d[e]);
    d.length = 0;
    a = a.responseState;
    d = c.id;
    e = c.rootSegmentID;
    c = c.resources;
    var f;
    b: {
        for(f = c.values();;){
            var g = f.next().value;
            if (!g) break;
            if (!g.inShell) {
                f = !0;
                break b;
            }
        }
        f = !1;
    }
    b.push(a.startInlineScript);
    f ? a.sentCompleteBoundaryFunction ? a.sentStyleInsertionFunction ? b.push('$RR("') : (a.sentStyleInsertionFunction = !0, b.push('$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("')) : (a.sentCompleteBoundaryFunction = !0, a.sentStyleInsertionFunction = !0, b.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("')) : a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, b.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RC("'));
    if (null === d) throw Error(m(395));
    e = e.toString(16);
    b.push(d);
    b.push('","');
    b.push(a.segmentPrefix);
    b.push(e);
    f ? (b.push('",'), Va(b, c)) : b.push('"');
    b = b.push(")\x3c/script>");
    return b;
}
function Fc(a, b, c, d) {
    if (2 === d.status) return !0;
    var e = d.id;
    if (-1 === e) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error(m(392));
        return Dc(a, b, d);
    }
    Dc(a, b, d);
    a = a.responseState;
    b.push(a.startInlineScript);
    a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = !0, b.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};;$RS("'));
    b.push(a.segmentPrefix);
    e = e.toString(16);
    b.push(e);
    b.push('","');
    b.push(a.placeholderPrefix);
    b.push(e);
    b = b.push('")\x3c/script>');
    return b;
}
function Ac(a, b) {
    try {
        var c, d = a.completedRootSegment;
        if (null !== d) if (0 === a.pendingRootTasks) {
            var e = a.preamble;
            for(c = 0; c < e.length; c++)b.push(e[c]);
            Ta(b, a.resources, a.responseState);
            Cc(a, b, d);
            a.completedRootSegment = null;
            var f = a.responseState.bootstrapChunks;
            for(d = 0; d < f.length - 1; d++)b.push(f[d]);
            d < f.length && b.push(f[d]);
        } else return;
        else Ua(b, a.resources, a.responseState);
        var g = a.clientRenderedBoundaries;
        for(c = 0; c < g.length; c++){
            var h = g[c];
            f = b;
            var l = a.responseState, k = h.id, p = h.errorDigest, n = h.errorMessage, r = h.errorComponentStack;
            f.push(l.startInlineScript);
            l.sentClientRenderFunction ? f.push('$RX("') : (l.sentClientRenderFunction = !0, f.push('$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("'));
            if (null === k) throw Error(m(395));
            f.push(k);
            f.push('"');
            if (p || n || r) {
                f.push(",");
                var u = Ra(p || "");
                f.push(u);
            }
            if (n || r) {
                f.push(",");
                var L = Ra(n || "");
                f.push(L);
            }
            if (r) {
                f.push(",");
                var E = Ra(r);
                f.push(E);
            }
            if (!f.push(")\x3c/script>")) {
                a.destination = null;
                c++;
                g.splice(0, c);
                return;
            }
        }
        g.splice(0, c);
        var D = a.completedBoundaries;
        for(c = 0; c < D.length; c++)if (!Ec(a, b, D[c])) {
            a.destination = null;
            c++;
            D.splice(0, c);
            return;
        }
        D.splice(0, c);
        var M = a.partialBoundaries;
        for(c = 0; c < M.length; c++){
            var X = M[c];
            a: {
                g = a;
                h = b;
                g.resources.boundaryResources = X.resources;
                var T = X.completedSegments;
                for(l = 0; l < T.length; l++)if (!Fc(g, h, X, T[l])) {
                    l++;
                    T.splice(0, l);
                    var K = !1;
                    break a;
                }
                T.splice(0, l);
                K = !0;
            }
            if (!K) {
                a.destination = null;
                c++;
                M.splice(0, c);
                return;
            }
        }
        M.splice(0, c);
        var sa = a.completedBoundaries;
        for(c = 0; c < sa.length; c++)if (!Ec(a, b, sa[c])) {
            a.destination = null;
            c++;
            sa.splice(0, c);
            return;
        }
        sa.splice(0, c);
    } finally{
        if (0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length) {
            a = a.postamble;
            for(c = 0; c < a.length; c++)b.push(a[c]);
            b.push(null);
        }
    }
}
function Gc(a, b) {
    try {
        var c = a.abortableTasks;
        if (0 < c.size) {
            var d = void 0 === b ? Error(m(432)) : b;
            c.forEach(function(b) {
                return zc(b, a, d);
            });
            c.clear();
        }
        null !== a.destination && Ac(a, a.destination);
    } catch (e) {
        Y(a, e), qc(a, e);
    }
}
function Hc() {}
function Ic(a, b, c, d) {
    var e = !1, f = null, g = "", h = {
        push: function(a) {
            null !== a && (g += a);
            return !0;
        },
        destroy: function(a) {
            e = !0;
            f = a;
        }
    }, l = !1;
    a = mc(a, Wa(c, b ? b.identifierPrefix : void 0), {
        insertionMode: 1,
        selectedValue: null,
        noscriptTagInScope: !1
    }, Infinity, Hc, void 0, function() {
        l = !0;
    }, void 0, void 0);
    pc(a);
    Gc(a, d);
    if (1 === a.status) a.status = 2, h.destroy(a.fatalError);
    else if (2 !== a.status && null === a.destination) {
        a.destination = h;
        try {
            Ac(a, h);
        } catch (k) {
            Y(a, k), qc(a, k);
        }
    }
    if (e && f !== d) throw f;
    if (!l) throw Error(m(426));
    return g;
}
exports.renderToNodeStream = function() {
    throw Error(m(207));
};
exports.renderToStaticMarkup = function(a, b) {
    return Ic(a, b, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
exports.renderToStaticNodeStream = function() {
    throw Error(m(208));
};
exports.renderToString = function(a, b) {
    return Ic(a, b, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
exports.version = "18.3.0-next-3ba7add60-20221201";

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server.browser.production.min.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
var ba = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"), ca = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)");
function k(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
"function" === typeof AsyncLocalStorage && new AsyncLocalStorage;
var l = null, p = 0;
function q(a, b) {
    if (0 !== b.length) if (512 < b.length) 0 < p && (a.enqueue(new Uint8Array(l.buffer, 0, p)), l = new Uint8Array(512), p = 0), a.enqueue(b);
    else {
        var c = l.length - p;
        c < b.length && (0 === c ? a.enqueue(l) : (l.set(b.subarray(0, c), p), a.enqueue(l), b = b.subarray(c)), l = new Uint8Array(512), p = 0);
        l.set(b, p);
        p += b.length;
    }
}
function v(a, b) {
    q(a, b);
    return !0;
}
function da(a) {
    l && 0 < p && (a.enqueue(new Uint8Array(l.buffer, 0, p)), l = null, p = 0);
}
var ea = new TextEncoder;
function w(a) {
    return ea.encode(a);
}
function x(a) {
    return ea.encode(a);
}
function fa(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var z = Object.prototype.hasOwnProperty, ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = {}, ka = {};
function la(a) {
    if (z.call(ka, a)) return !0;
    if (z.call(ia, a)) return !1;
    if (ha.test(a)) return ka[a] = !0;
    ia[a] = !0;
    return !1;
}
function A(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var B = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    B[a] = new A(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    B[b] = new A(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    B[a] = new A(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    B[a] = new A(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    B[a] = new A(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    B[a] = new A(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    B[a] = new A(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    B[a] = new A(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    B[a] = new A(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var ma = /[\-:]([a-z])/g;
function na(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(ma, na);
    B[b] = new A(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ma, na);
    B[b] = new A(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(ma, na);
    B[b] = new A(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    B[a] = new A(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
B.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    B[a] = new A(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
var pa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, qa = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(pa).forEach(function(a) {
    qa.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pa[b] = pa[a];
    });
});
var ra = /["'&<>]/;
function C(a) {
    if ("boolean" === typeof a || "number" === typeof a) return "" + a;
    a = "" + a;
    var b = ra.exec(a);
    if (b) {
        var c = "", d, e = 0;
        for(d = b.index; d < a.length; d++){
            switch(a.charCodeAt(d)){
                case 34:
                    b = "&quot;";
                    break;
                case 38:
                    b = "&amp;";
                    break;
                case 39:
                    b = "&#x27;";
                    break;
                case 60:
                    b = "&lt;";
                    break;
                case 62:
                    b = "&gt;";
                    break;
                default:
                    continue;
            }
            e !== d && (c += a.substring(e, d));
            e = d + 1;
            c += b;
        }
        a = e !== d ? c + a.substring(e, d) : c;
    }
    return a;
}
var sa = /([A-Z])/g, ta = /^ms-/, ua = Array.isArray, D = Object.assign, E = null, va = [], ya = {
    preload: wa,
    preinit: xa
};
function wa(a, b) {
    if (E) {
        var c = E;
        if ("string" === typeof a && a && "object" === typeof b && null !== b) {
            var d = b.as, e = c.preloadsMap.get(a);
            e || (e = F(c, a, d, {
                href: a,
                rel: "preload",
                as: d,
                crossOrigin: "font" === d ? "" : b.crossOrigin,
                integrity: b.integrity
            }));
            switch(d){
                case "font":
                    c.fontPreloads.add(e);
                    break;
                case "style":
                    c.explicitStylePreloads.add(e);
                    break;
                case "script":
                    c.explicitScriptPreloads.add(e);
            }
        }
    }
}
function xa(a, b) {
    if (E) a: {
        var c = E;
        if ("string" === typeof a && a && "object" === typeof b && null !== b) switch(b.as){
            case "style":
                var d = c.stylesMap.get(a);
                d || (d = b.precedence || "default", d = za(c, a, d, {
                    rel: "stylesheet",
                    href: a,
                    "data-precedence": d,
                    crossOrigin: b.crossOrigin
                }));
                d.set.add(d);
                c.explicitStylePreloads.add(d.hint);
                break a;
            case "script":
                d = c.scriptsMap.get(a), d || (d = Aa(c, a, {
                    src: a,
                    async: !0,
                    crossOrigin: b.crossOrigin,
                    integrity: b.integrity
                }), c.scripts.add(d));
        }
    }
}
function Ba(a, b) {
    return {
        rel: "preload",
        as: "style",
        href: a,
        crossOrigin: b.crossOrigin,
        integrity: b.integrity,
        media: b.media,
        hrefLang: b.hrefLang,
        referrerPolicy: b.referrerPolicy
    };
}
function Ca(a, b) {
    return {
        rel: "preload",
        as: "script",
        href: a,
        crossOrigin: b.crossOrigin,
        integrity: b.integrity,
        referrerPolicy: b.referrerPolicy
    };
}
function F(a, b, c, d) {
    c = {
        type: "preload",
        as: c,
        href: b,
        flushed: !1,
        props: d
    };
    a.preloadsMap.set(b, c);
    return c;
}
function za(a, b, c, d) {
    var e = a.stylesMap, f = a.preloadsMap, g = a.precedences, h = g.get(c);
    h || (h = new Set, g.set(c, h));
    (f = f.get(b)) ? (a = f.props, null == d.crossOrigin && (d.crossOrigin = a.crossOrigin), null == d.referrerPolicy && (d.referrerPolicy = a.referrerPolicy), null == d.title && (d.title = a.title)) : (f = Ba(b, d), f = F(a, b, "style", f), a.explicitStylePreloads.add(f));
    c = {
        type: "style",
        href: b,
        precedence: c,
        flushed: !1,
        inShell: !1,
        props: d,
        hint: f,
        set: h
    };
    e.set(b, c);
    return c;
}
function Aa(a, b, c) {
    var d = a.scriptsMap, e = a.preloadsMap.get(b);
    e ? (a = e.props, null == c.crossOrigin && (c.crossOrigin = a.crossOrigin), null == c.referrerPolicy && (c.referrerPolicy = a.referrerPolicy), null == c.integrity && (c.integrity = a.integrity)) : (e = Ca(b, c), e = F(a, b, "script", e), a.explicitScriptPreloads.add(e));
    c = {
        type: "script",
        src: b,
        flushed: !1,
        props: c,
        hint: e
    };
    d.set(b, c);
    return c;
}
function Da(a, b) {
    if (!E) throw Error(k(445));
    var c = E;
    switch(a){
        case "title":
            var d = b.children;
            Array.isArray(d) && 1 === d.length && (d = d[0]);
            if ("string" === typeof d || "number" === typeof d) {
                var e = "title::" + d;
                a = c.headsMap.get(e);
                a || (b = D({}, b), b.children = d, a = {
                    type: "title",
                    props: b,
                    flushed: !1
                }, c.headsMap.set(e, a), c.headResources.add(a));
            }
            return !0;
        case "meta":
            if ("string" === typeof b.charSet) e = "charSet";
            else if ("string" === typeof b.content) {
                if (a = "::" + b.content, "string" === typeof b.httpEquiv) e = "httpEquiv::" + b.httpEquiv + a;
                else if ("string" === typeof b.name) e = "name::" + b.name + a;
                else if ("string" === typeof b.itemProp) e = "itemProp::" + b.itemProp + a;
                else if ("string" === typeof b.property) {
                    var f = b.property;
                    e = "property::" + f + a;
                    d = f;
                    a = f.split(":").slice(0, -1).join(":");
                    (a = c.structuredMetaKeys.get(a)) && (e = a.key + "::child::" + e);
                }
            }
            e && !c.headsMap.has(e) && (b = {
                type: "meta",
                key: e,
                props: D({}, b),
                flushed: !1
            }, c.headsMap.set(e, b), "charSet" === e ? c.charset = b : (d && c.structuredMetaKeys.set(d, b), c.headResources.add(b)));
            return !0;
        case "base":
            return e = b.target, d = b.href, e = "base" + ("string" === typeof d ? '[href="' + d + '"]' : ":not([href])") + ("string" === typeof e ? '[target="' + e + '"]' : ":not([target])"), c.headsMap.has(e) || (b = {
                type: "base",
                props: D({}, b),
                flushed: !1
            }, c.headsMap.set(e, b), c.bases.add(b)), !0;
    }
    return !1;
}
function Ea(a) {
    if (!E) throw Error(k(445));
    var b = E, c = a.rel, d = a.href;
    if (!d || "string" !== typeof d || !c || "string" !== typeof c) return !1;
    switch(c){
        case "stylesheet":
            var e = a.onLoad, f = a.onError;
            c = a.precedence;
            var g = a.disabled;
            if ("string" !== typeof c || e || f || null != g) return c = b.preloadsMap.get(d), c || (c = F(b, d, "style", Ba(d, a)), b.usedStylePreloads.add(c)), !1;
            e = b.stylesMap.get(d);
            e || (a = D({}, a), a.href = d, a.rel = "stylesheet", a["data-precedence"] = c, delete a.precedence, e = za(E, d, c, a), b.usedStylePreloads.add(e.hint));
            b.boundaryResources ? b.boundaryResources.add(e) : e.set.add(e);
            return !0;
        case "preload":
            switch(e = a.as, e){
                case "script":
                case "style":
                case "font":
                    c = b.preloadsMap.get(d);
                    if (!c) switch(a = D({}, a), a.href = d, a.rel = "preload", a.as = e, "font" === e && (a.crossOrigin = ""), c = F(b, d, e, a), e){
                        case "script":
                            b.explicitScriptPreloads.add(c);
                            break;
                        case "style":
                            b.explicitStylePreloads.add(c);
                            break;
                        case "font":
                            b.fontPreloads.add(c);
                    }
                    return !0;
            }
    }
    if (a.onLoad || a.onError) return !0;
    d = "rel:" + c + "::href:" + d + "::sizes:" + ("string" === typeof a.sizes ? a.sizes : "") + "::media:" + ("string" === typeof a.media ? a.media : "");
    e = b.headsMap.get(d);
    if (!e) switch(e = {
        type: "link",
        props: D({}, a),
        flushed: !1
    }, b.headsMap.set(d, e), c){
        case "preconnect":
        case "dns-prefetch":
            b.preconnects.add(e);
            break;
        default:
            b.headResources.add(e);
    }
    return !0;
}
function Fa(a, b) {
    var c = a.boundaryResources;
    c && (b.forEach(function(a) {
        return c.add(a);
    }), b.clear());
}
function Ga(a, b) {
    b.forEach(function(a) {
        return a.set.add(a);
    });
    b.clear();
}
var Ha = ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher;
x('"></template>');
var Ia = x("<script>"), Ja = x("\x3c/script>"), Ka = x('<script src="'), La = x('<script type="module" src="'), Ma = x('" integrity="'), Na = x('" async="">\x3c/script>'), Oa = /(<\/|<)(s)(cript)/gi;
function Pa(a, b, c, d) {
    return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
}
function Qa(a, b, c, d, e) {
    a = void 0 === a ? "" : a;
    b = void 0 === b ? Ia : x('<script nonce="' + C(b) + '">');
    var f = [];
    void 0 !== c && f.push(b, w(("" + c).replace(Oa, Pa)), Ja);
    if (void 0 !== d) for(c = 0; c < d.length; c++){
        var g = d[c], h = "string" === typeof g ? void 0 : g.integrity;
        f.push(Ka, w(C("string" === typeof g ? g : g.src)));
        h && f.push(Ma, w(C(h)));
        f.push(Na);
    }
    if (void 0 !== e) for(d = 0; d < e.length; d++)c = e[d], g = "string" === typeof c ? void 0 : c.integrity, f.push(La, w(C("string" === typeof c ? c : c.src))), g && f.push(Ma, w(C(g))), f.push(Na);
    return {
        bootstrapChunks: f,
        placeholderPrefix: x(a + "P:"),
        segmentPrefix: x(a + "S:"),
        boundaryPrefix: a + "B:",
        idPrefix: a,
        nextSuspenseID: 0,
        streamingFormat: 0,
        startInlineScript: b,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
        sentStyleInsertionFunction: !1,
        externalRuntimeConfig: null
    };
}
function G(a, b, c) {
    return {
        insertionMode: a,
        selectedValue: b,
        noscriptTagInScope: c
    };
}
function Ra(a) {
    return G("http://www.w3.org/2000/svg" === a ? 2 : "http://www.w3.org/1998/Math/MathML" === a ? 3 : 0, null, !1);
}
function Sa(a, b, c) {
    switch(b){
        case "noscript":
            return G(1, null, !0);
        case "select":
            return G(1, null != c.value ? c.value : c.defaultValue, a.noscriptTagInScope);
        case "svg":
            return G(2, null, a.noscriptTagInScope);
        case "math":
            return G(3, null, a.noscriptTagInScope);
        case "foreignObject":
            return G(1, null, a.noscriptTagInScope);
        case "table":
            return G(4, null, a.noscriptTagInScope);
        case "thead":
        case "tbody":
        case "tfoot":
            return G(5, null, a.noscriptTagInScope);
        case "colgroup":
            return G(7, null, a.noscriptTagInScope);
        case "tr":
            return G(6, null, a.noscriptTagInScope);
    }
    return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null, a.noscriptTagInScope) : a;
}
var I = x("\x3c!-- --\x3e");
function Ta(a, b, c, d) {
    if ("" === b) return d;
    d && a.push(I);
    a.push(w(C(b)));
    return !0;
}
var Ua = new Map, Va = x(' style="'), Wa = x(":"), Xa = x(";");
function Ya(a, b, c) {
    if ("object" !== typeof c) throw Error(k(62));
    b = !0;
    for(var d in c)if (z.call(c, d)) {
        var e = c[d];
        if (null != e && "boolean" !== typeof e && "" !== e) {
            if (0 === d.indexOf("--")) {
                var f = w(C(d));
                e = w(C(("" + e).trim()));
            } else {
                f = d;
                var g = Ua.get(f);
                void 0 !== g ? f = g : (g = x(C(f.replace(sa, "-$1").toLowerCase().replace(ta, "-ms-"))), Ua.set(f, g), f = g);
                e = "number" === typeof e ? 0 === e || z.call(pa, d) ? w("" + e) : w(e + "px") : w(C(("" + e).trim()));
            }
            b ? (b = !1, a.push(Va, f, Wa, e)) : a.push(Xa, f, Wa, e);
        }
    }
    b || a.push(J);
}
var L = x(" "), M = x('="'), J = x('"'), Za = x('=""');
function O(a, b, c, d) {
    switch(c){
        case "style":
            Ya(a, b, d);
            return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
            return;
    }
    if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
        if (b = B.hasOwnProperty(c) ? B[c] : null, null !== b) {
            switch(typeof d){
                case "function":
                case "symbol":
                    return;
                case "boolean":
                    if (!b.acceptsBooleans) return;
            }
            c = w(b.attributeName);
            switch(b.type){
                case 3:
                    d && a.push(L, c, Za);
                    break;
                case 4:
                    !0 === d ? a.push(L, c, Za) : !1 !== d && a.push(L, c, M, w(C(d)), J);
                    break;
                case 5:
                    isNaN(d) || a.push(L, c, M, w(C(d)), J);
                    break;
                case 6:
                    !isNaN(d) && 1 <= d && a.push(L, c, M, w(C(d)), J);
                    break;
                default:
                    b.sanitizeURL && (d = "" + d), a.push(L, c, M, w(C(d)), J);
            }
        } else if (la(c)) {
            switch(typeof d){
                case "function":
                case "symbol":
                    return;
                case "boolean":
                    if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
            }
            a.push(L, w(c), M, w(C(d)), J);
        }
    }
}
var P = x(">"), $a = x("/>");
function ab(a, b, c) {
    if (null != b) {
        if (null != c) throw Error(k(60));
        if ("object" !== typeof b || !("__html" in b)) throw Error(k(61));
        b = b.__html;
        null !== b && void 0 !== b && a.push(w("" + b));
    }
}
function bb(a) {
    var b = "";
    ba.Children.forEach(a, function(a) {
        null != a && (b += a);
    });
    return b;
}
var cb = x(' selected=""');
function Q(a, b, c) {
    var d = "stylesheet" === b.rel;
    a.push(R("link"));
    for(var e in b)if (z.call(b, e)) {
        var f = b[e];
        if (null != f) switch(e){
            case "children":
            case "dangerouslySetInnerHTML":
                throw Error(k(399, "link"));
            case "precedence":
                if (d) continue;
            default:
                O(a, c, e, f);
        }
    }
    a.push($a);
    return null;
}
function S(a, b, c, d) {
    a.push(R(c));
    for(var e in b)if (z.call(b, e)) {
        var f = b[e];
        if (null != f) switch(e){
            case "children":
            case "dangerouslySetInnerHTML":
                throw Error(k(399, c));
            default:
                O(a, d, e, f);
        }
    }
    a.push($a);
    return null;
}
function db(a, b, c) {
    a.push(R("title"));
    var d = null, e;
    for(e in b)if (z.call(b, e)) {
        var f = b[e];
        if (null != f) switch(e){
            case "children":
                d = f;
                break;
            case "dangerouslySetInnerHTML":
                throw Error(k(434));
            default:
                O(a, c, e, f);
        }
    }
    a.push(P);
    b = Array.isArray(d) && 2 > d.length ? d[0] || null : d;
    "string" !== typeof b && "number" !== typeof b || a.push(w(C(b)));
    a.push(eb, w("title"), fb);
    return null;
}
function gb(a, b, c) {
    a.push(R("script"));
    var d = null, e = null, f;
    for(f in b)if (z.call(b, f)) {
        var g = b[f];
        if (null != g) switch(f){
            case "children":
                d = g;
                break;
            case "dangerouslySetInnerHTML":
                e = g;
                break;
            default:
                O(a, c, f, g);
        }
    }
    a.push(P);
    ab(a, e, d);
    "string" === typeof d && a.push(w(C(d)));
    a.push(eb, w("script"), fb);
    return null;
}
function hb(a, b, c, d) {
    a.push(R(c));
    var e = c = null, f;
    for(f in b)if (z.call(b, f)) {
        var g = b[f];
        if (null != g) switch(f){
            case "children":
                c = g;
                break;
            case "dangerouslySetInnerHTML":
                e = g;
                break;
            default:
                O(a, d, f, g);
        }
    }
    a.push(P);
    ab(a, e, c);
    return "string" === typeof c ? (a.push(w(C(c))), null) : c;
}
var ib = x("\n"), jb = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, kb = new Map;
function R(a) {
    var b = kb.get(a);
    if (void 0 === b) {
        if (!jb.test(a)) throw Error(k(65, a));
        b = x("<" + a);
        kb.set(a, b);
    }
    return b;
}
var lb = x("<!DOCTYPE html>");
function mb(a, b, c, d, e, f, g) {
    switch(c){
        case "select":
            a.push(R("select"));
            var h = g = null, n;
            for(n in d)if (z.call(d, n)) {
                var m = d[n];
                if (null != m) switch(n){
                    case "children":
                        g = m;
                        break;
                    case "dangerouslySetInnerHTML":
                        h = m;
                        break;
                    case "defaultValue":
                    case "value":
                        break;
                    default:
                        O(a, e, n, m);
                }
            }
            a.push(P);
            ab(a, h, g);
            return g;
        case "option":
            g = f.selectedValue;
            a.push(R("option"));
            var t = n = m = null, r = null;
            for(h in d)if (z.call(d, h)) {
                var u = d[h];
                if (null != u) switch(h){
                    case "children":
                        m = u;
                        break;
                    case "selected":
                        t = u;
                        break;
                    case "dangerouslySetInnerHTML":
                        r = u;
                        break;
                    case "value":
                        n = u;
                    default:
                        O(a, e, h, u);
                }
            }
            if (null != g) if (d = null !== n ? "" + n : bb(m), ua(g)) for(e = 0; e < g.length; e++){
                if ("" + g[e] === d) {
                    a.push(cb);
                    break;
                }
            }
            else "" + g === d && a.push(cb);
            else t && a.push(cb);
            a.push(P);
            ab(a, r, m);
            return m;
        case "textarea":
            a.push(R("textarea"));
            m = h = g = null;
            for(r in d)if (z.call(d, r) && (n = d[r], null != n)) switch(r){
                case "children":
                    m = n;
                    break;
                case "value":
                    g = n;
                    break;
                case "defaultValue":
                    h = n;
                    break;
                case "dangerouslySetInnerHTML":
                    throw Error(k(91));
                default:
                    O(a, e, r, n);
            }
            null === g && null !== h && (g = h);
            a.push(P);
            if (null != m) {
                if (null != g) throw Error(k(92));
                if (ua(m) && 1 < m.length) throw Error(k(93));
                g = "" + m;
            }
            "string" === typeof g && "\n" === g[0] && a.push(ib);
            null !== g && a.push(w(C("" + g)));
            return null;
        case "input":
            a.push(R("input"));
            n = r = h = g = null;
            for(m in d)if (z.call(d, m) && (t = d[m], null != t)) switch(m){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(k(399, "input"));
                case "defaultChecked":
                    n = t;
                    break;
                case "defaultValue":
                    h = t;
                    break;
                case "checked":
                    r = t;
                    break;
                case "value":
                    g = t;
                    break;
                default:
                    O(a, e, m, t);
            }
            null !== r ? O(a, e, "checked", r) : null !== n && O(a, e, "checked", n);
            null !== g ? O(a, e, "value", g) : null !== h && O(a, e, "value", h);
            a.push($a);
            return null;
        case "menuitem":
            a.push(R("menuitem"));
            for(var y in d)if (z.call(d, y) && (g = d[y], null != g)) switch(y){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(k(400));
                default:
                    O(a, e, y, g);
            }
            a.push(P);
            return null;
        case "title":
            return a = 2 !== f.insertionMode && !f.noscriptTagInScope && Da("title", d) ? null : db(a, d, e), a;
        case "link":
            return !f.noscriptTagInScope && Ea(d) ? (g && a.push(I), a = null) : a = Q(a, d, e), a;
        case "script":
            if (h = !f.noscriptTagInScope) {
                if (!E) throw Error(k(445));
                h = E;
                m = d.src;
                r = d.onLoad;
                n = d.onError;
                m && "string" === typeof m ? d.async ? (r || n ? (r = h.preloadsMap.get(m), r || (r = F(h, m, "script", Ca(m, d)), h.usedScriptPreloads.add(r))) : (r = h.scriptsMap.get(m), r || (r = D({}, d), r.src = m, r = Aa(h, m, r), h.scripts.add(r))), h = !0) : h = !1 : h = !1;
            }
            h ? (g && a.push(I), a = null) : a = gb(a, d, e);
            return a;
        case "meta":
            return !f.noscriptTagInScope && Da("meta", d) ? (g && a.push(I), a = null) : a = S(a, d, "meta", e), a;
        case "base":
            return !f.noscriptTagInScope && Da("base", d) ? (g && a.push(I), a = null) : a = S(a, d, "base", e), a;
        case "listing":
        case "pre":
            a.push(R(c));
            h = g = null;
            for(t in d)if (z.call(d, t) && (m = d[t], null != m)) switch(t){
                case "children":
                    g = m;
                    break;
                case "dangerouslySetInnerHTML":
                    h = m;
                    break;
                default:
                    O(a, e, t, m);
            }
            a.push(P);
            if (null != h) {
                if (null != g) throw Error(k(60));
                if ("object" !== typeof h || !("__html" in h)) throw Error(k(61));
                d = h.__html;
                null !== d && void 0 !== d && ("string" === typeof d && 0 < d.length && "\n" === d[0] ? a.push(ib, w(d)) : a.push(w("" + d)));
            }
            "string" === typeof g && "\n" === g[0] && a.push(ib);
            return g;
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
            return S(a, d, c, e);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return hb(a, d, c, e);
        case "head":
            return hb(b, d, c, e);
        case "html":
            return 0 === f.insertionMode && b.push(lb), hb(b, d, c, e);
        default:
            if (-1 === c.indexOf("-") && "string" !== typeof d.is) return hb(a, d, c, e);
            a.push(R(c));
            h = g = null;
            for(u in d)if (z.call(d, u) && (m = d[u], null != m)) switch(u){
                case "children":
                    g = m;
                    break;
                case "dangerouslySetInnerHTML":
                    h = m;
                    break;
                case "style":
                    Ya(a, e, m);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                    break;
                default:
                    la(u) && "function" !== typeof m && "symbol" !== typeof m && a.push(L, w(u), M, w(C(m)), J);
            }
            a.push(P);
            ab(a, h, g);
            return g;
    }
}
var eb = x("</"), fb = x(">");
function nb(a, b, c) {
    switch(c){
        case "title":
        case "script":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
            return;
        case "body":
            b.unshift(eb, w(c), fb);
            return;
        case "html":
            b.push(eb, w(c), fb);
            return;
    }
    a.push(eb, w(c), fb);
}
var ob = x('<template id="'), pb = x('"></template>'), qb = x("\x3c!--$--\x3e"), rb = x('\x3c!--$?--\x3e<template id="'), sb = x('"></template>'), tb = x("\x3c!--$!--\x3e"), ub = x("\x3c!--/$--\x3e"), vb = x("<template"), wb = x('"'), xb = x(' data-dgst="');
x(' data-msg="');
x(' data-stck="');
var yb = x("></template>");
function zb(a, b, c) {
    q(a, rb);
    if (null === c) throw Error(k(395));
    q(a, c);
    return v(a, sb);
}
var Ab = x('<div hidden id="'), Bb = x('">'), Cb = x("</div>"), Db = x('<svg aria-hidden="true" style="display:none" id="'), Eb = x('">'), Fb = x("</svg>"), Gb = x('<math aria-hidden="true" style="display:none" id="'), Hb = x('">'), Ib = x("</math>"), Jb = x('<table hidden id="'), Kb = x('">'), Lb = x("</table>"), Mb = x('<table hidden><tbody id="'), Nb = x('">'), Ob = x("</tbody></table>"), Pb = x('<table hidden><tr id="'), Qb = x('">'), Rb = x("</tr></table>"), Sb = x('<table hidden><colgroup id="'), Tb = x('">'), Ub = x("</colgroup></table>");
function Vb(a, b, c, d) {
    switch(c.insertionMode){
        case 0:
        case 1:
            return q(a, Ab), q(a, b.segmentPrefix), q(a, w(d.toString(16))), v(a, Bb);
        case 2:
            return q(a, Db), q(a, b.segmentPrefix), q(a, w(d.toString(16))), v(a, Eb);
        case 3:
            return q(a, Gb), q(a, b.segmentPrefix), q(a, w(d.toString(16))), v(a, Hb);
        case 4:
            return q(a, Jb), q(a, b.segmentPrefix), q(a, w(d.toString(16))), v(a, Kb);
        case 5:
            return q(a, Mb), q(a, b.segmentPrefix), q(a, w(d.toString(16))), v(a, Nb);
        case 6:
            return q(a, Pb), q(a, b.segmentPrefix), q(a, w(d.toString(16))), v(a, Qb);
        case 7:
            return q(a, Sb), q(a, b.segmentPrefix), q(a, w(d.toString(16))), v(a, Tb);
        default:
            throw Error(k(397));
    }
}
function Wb(a, b) {
    switch(b.insertionMode){
        case 0:
        case 1:
            return v(a, Cb);
        case 2:
            return v(a, Fb);
        case 3:
            return v(a, Ib);
        case 4:
            return v(a, Lb);
        case 5:
            return v(a, Ob);
        case 6:
            return v(a, Rb);
        case 7:
            return v(a, Ub);
        default:
            throw Error(k(397));
    }
}
var Xb = x('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};;$RS("'), Yb = x('$RS("'), Zb = x('","'), $b = x('")\x3c/script>');
x('<template data-rsi="" data-sid="');
x('" data-pid="');
var ac = x('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RC("'), bc = x('$RC("'), cc = x('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("'), dc = x('$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("'), ec = x('$RR("'), fc = x('","'), gc = x('",'), hc = x('"'), ic = x(")\x3c/script>");
x('<template data-rci="" data-bid="');
x('<template data-rri="" data-bid="');
x('" data-sid="');
x('" data-sty="');
var jc = x('$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("'), kc = x('$RX("'), lc = x('"'), mc = x(","), nc = x(")\x3c/script>");
x('<template data-rxi="" data-bid="');
x('" data-dgst="');
x('" data-msg="');
x('" data-stck="');
var oc = /[<\u2028\u2029]/g;
function pc(a) {
    return JSON.stringify(a).replace(oc, function(a) {
        switch(a){
            case "<":
                return "\\u003c";
            case "\u2028":
                return "\\u2028";
            case "\u2029":
                return "\\u2029";
            default:
                throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    });
}
var qc = /[&><\u2028\u2029]/g;
function rc(a) {
    return JSON.stringify(a).replace(qc, function(a) {
        switch(a){
            case "&":
                return "\\u0026";
            case ">":
                return "\\u003e";
            case "<":
                return "\\u003c";
            case "\u2028":
                return "\\u2028";
            case "\u2029":
                return "\\u2029";
            default:
                throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    });
}
var sc = x('<style data-precedence="'), tc = x('"></style>');
function uc(a, b, c) {
    function d(a) {
        a.flushed || (Q(e, a.props, c), a.flushed = !0);
    }
    var e = [], f = b.charset, g = b.bases, h = b.preconnects, n = b.fontPreloads, m = b.precedences, t = b.usedStylePreloads, r = b.scripts, u = b.usedScriptPreloads, y = b.explicitStylePreloads, N = b.explicitScriptPreloads, H = b.headResources;
    f && (S(e, f.props, "meta", c), f.flushed = !0, b.charset = null);
    g.forEach(function(a) {
        S(e, a.props, "base", c);
        a.flushed = !0;
    });
    g.clear();
    h.forEach(function(a) {
        Q(e, a.props, c);
        a.flushed = !0;
    });
    h.clear();
    n.forEach(function(a) {
        Q(e, a.props, c);
        a.flushed = !0;
    });
    n.clear();
    m.forEach(function(a, b) {
        a.size ? (a.forEach(function(a) {
            Q(e, a.props, c);
            a.flushed = !0;
            a.inShell = !0;
            a.hint.flushed = !0;
        }), a.clear()) : e.push(sc, w(C(b)), tc);
    });
    t.forEach(d);
    t.clear();
    r.forEach(function(a) {
        gb(e, a.props, c);
        a.flushed = !0;
        a.hint.flushed = !0;
    });
    r.clear();
    u.forEach(d);
    u.clear();
    y.forEach(d);
    y.clear();
    N.forEach(d);
    N.clear();
    H.forEach(function(a) {
        switch(a.type){
            case "title":
                db(e, a.props, c);
                break;
            case "meta":
                S(e, a.props, "meta", c);
                break;
            case "link":
                Q(e, a.props, c);
        }
        a.flushed = !0;
    });
    H.clear();
    f = !0;
    for(b = 0; b < e.length - 1; b++)q(a, e[b]);
    b < e.length && (f = v(a, e[b]));
    return f;
}
function vc(a, b, c) {
    function d(a) {
        a.flushed || (Q(e, a.props, c), a.flushed = !0);
    }
    var e = [], f = b.charset, g = b.preconnects, h = b.fontPreloads, n = b.usedStylePreloads, m = b.scripts, t = b.usedScriptPreloads, r = b.explicitStylePreloads, u = b.explicitScriptPreloads, y = b.headResources;
    f && (S(e, f.props, "meta", c), f.flushed = !0, b.charset = null);
    g.forEach(function(a) {
        Q(e, a.props, c);
        a.flushed = !0;
    });
    g.clear();
    h.forEach(function(a) {
        Q(e, a.props, c);
        a.flushed = !0;
    });
    h.clear();
    n.forEach(d);
    n.clear();
    m.forEach(function(a) {
        hb(e, a.props, "script", c);
        nb(e, e, "script", a.props);
        a.flushed = !0;
        a.hint.flushed = !0;
    });
    m.clear();
    t.forEach(d);
    t.clear();
    r.forEach(d);
    r.clear();
    u.forEach(d);
    u.clear();
    y.forEach(function(a) {
        switch(a.type){
            case "title":
                db(e, a.props, c);
                break;
            case "meta":
                S(e, a.props, "meta", c);
                break;
            case "link":
                Q(e, a.props, c);
        }
        a.flushed = !0;
    });
    y.clear();
    f = !0;
    for(b = 0; b < e.length - 1; b++)q(a, e[b]);
    b < e.length && (f = v(a, e[b]));
    return f;
}
var wc = x("["), xc = x(",["), yc = x(","), zc = x("]");
function Ac(a, b) {
    q(a, wc);
    var c = wc;
    b.forEach(function(b) {
        if (!b.inShell) if (b.flushed) q(a, c), q(a, w(rc("" + b.href))), q(a, zc), c = xc;
        else {
            q(a, c);
            var d = b.precedence, f = b.props;
            q(a, w(rc("" + b.href)));
            d = "" + d;
            q(a, yc);
            q(a, w(rc(d)));
            for(var g in f)if (z.call(f, g)) {
                var h = f[g];
                if (null != h) switch(g){
                    case "href":
                    case "rel":
                    case "precedence":
                    case "data-precedence":
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(k(399, "link"));
                    default:
                        a: {
                            d = a;
                            var n = g, m = n.toLowerCase();
                            switch(typeof h){
                                case "function":
                                case "symbol":
                                    break a;
                            }
                            switch(n){
                                case "innerHTML":
                                case "dangerouslySetInnerHTML":
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "style":
                                    break a;
                                case "className":
                                    m = "class";
                                    break;
                                case "hidden":
                                    if (!1 === h) break a;
                                    break;
                                case "src":
                                case "href":
                                    break;
                                default:
                                    if (!la(n)) break a;
                            }
                            if (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) h = "" + h, q(d, yc), q(d, w(rc(m))), q(d, yc), q(d, w(rc(h)));
                        }
                }
            }
            q(a, zc);
            c = xc;
            b.flushed = !0;
            b.hint.flushed = !0;
        }
    });
    q(a, zc);
}
var Bc = Symbol.for("react.element"), Cc = Symbol.for("react.portal"), Dc = Symbol.for("react.fragment"), Ec = Symbol.for("react.strict_mode"), Fc = Symbol.for("react.profiler"), Gc = Symbol.for("react.provider"), Hc = Symbol.for("react.context"), Ic = Symbol.for("react.server_context"), Jc = Symbol.for("react.forward_ref"), Kc = Symbol.for("react.suspense"), Lc = Symbol.for("react.suspense_list"), Mc = Symbol.for("react.memo"), Nc = Symbol.for("react.lazy"), Oc = Symbol.for("react.scope"), Pc = Symbol.for("react.debug_trace_mode"), Qc = Symbol.for("react.offscreen"), Rc = Symbol.for("react.legacy_hidden"), Sc = Symbol.for("react.cache"), Tc = Symbol.for("react.default_value"), Uc = Symbol.iterator;
function Vc(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case Dc:
            return "Fragment";
        case Cc:
            return "Portal";
        case Fc:
            return "Profiler";
        case Ec:
            return "StrictMode";
        case Kc:
            return "Suspense";
        case Lc:
            return "SuspenseList";
        case Sc:
            return "Cache";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case Hc:
            return (a.displayName || "Context") + ".Consumer";
        case Gc:
            return (a._context.displayName || "Context") + ".Provider";
        case Jc:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case Mc:
            return b = a.displayName || null, null !== b ? b : Vc(a.type) || "Memo";
        case Nc:
            b = a._payload;
            a = a._init;
            try {
                return Vc(a(b));
            } catch (c) {
                break;
            }
        case Ic:
            return (a.displayName || a._globalName) + ".Provider";
    }
    return null;
}
var Wc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xc = {};
function Yc(a, b) {
    a = a.contextTypes;
    if (!a) return Xc;
    var c = {}, d;
    for(d in a)c[d] = b[d];
    return c;
}
var T = null;
function Zc(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
            if (null !== c) throw Error(k(401));
        } else {
            if (null === c) throw Error(k(401));
            Zc(a, c);
        }
        b.context._currentValue = b.value;
    }
}
function $c(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && $c(a);
}
function ad(a) {
    var b = a.parent;
    null !== b && ad(b);
    a.context._currentValue = a.value;
}
function bd(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error(k(402));
    a.depth === b.depth ? Zc(a, b) : bd(a, b);
}
function cd(a, b) {
    var c = b.parent;
    if (null === c) throw Error(k(402));
    a.depth === c.depth ? Zc(a, c) : cd(a, c);
    b.context._currentValue = b.value;
}
function dd(a) {
    var b = T;
    b !== a && (null === b ? ad(a) : null === a ? $c(b) : b.depth === a.depth ? Zc(b, a) : b.depth > a.depth ? bd(b, a) : cd(b, a), T = a);
}
var ed = {
    isMounted: function() {
        return !1;
    },
    enqueueSetState: function(a, b) {
        a = a._reactInternals;
        null !== a.queue && a.queue.push(b);
    },
    enqueueReplaceState: function(a, b) {
        a = a._reactInternals;
        a.replace = !0;
        a.queue = [
            b
        ];
    },
    enqueueForceUpdate: function() {}
};
function fd(a, b, c, d) {
    var e = void 0 !== a.state ? a.state : null;
    a.updater = ed;
    a.props = c;
    a.state = e;
    var f = {
        queue: [],
        replace: !1
    };
    a._reactInternals = f;
    var g = b.contextType;
    a.context = "object" === typeof g && null !== g ? g._currentValue : d;
    g = b.getDerivedStateFromProps;
    "function" === typeof g && (g = g(c, e), e = null === g || void 0 === g ? e : D({}, e, g), a.state = e);
    if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && ed.enqueueReplaceState(a, a.state, null), null !== f.queue && 0 < f.queue.length) if (b = f.queue, g = f.replace, f.queue = null, f.replace = !1, g && 1 === b.length) a.state = b[0];
    else {
        f = g ? b[0] : a.state;
        e = !0;
        for(g = g ? 1 : 0; g < b.length; g++){
            var h = b[g];
            h = "function" === typeof h ? h.call(a, f, c, d) : h;
            null != h && (e ? (e = !1, f = D({}, f, h)) : D(f, h));
        }
        a.state = f;
    }
    else f.queue = null;
}
var gd = {
    id: 1,
    overflow: ""
};
function hd(a, b, c) {
    var d = a.id;
    a = a.overflow;
    var e = 32 - id(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - id(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        return {
            id: 1 << 32 - id(b) + e | c << e | d,
            overflow: f + a
        };
    }
    return {
        id: 1 << f | c << e | d,
        overflow: a
    };
}
var id = Math.clz32 ? Math.clz32 : jd, kd = Math.log, ld = Math.LN2;
function jd(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (kd(a) / ld | 0) | 0;
}
var md = Error(k(460));
function nd() {}
function od(a, b, c) {
    c = a[c];
    void 0 === c ? a.push(b) : c !== b && (b.then(nd, nd), b = c);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(a) {
                if ("pending" === b.status) {
                    var c = b;
                    c.status = "fulfilled";
                    c.value = a;
                }
            }, function(a) {
                if ("pending" === b.status) {
                    var c = b;
                    c.status = "rejected";
                    c.reason = a;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            pd = b;
            throw md;
    }
}
var pd = null;
function qd() {
    if (null === pd) throw Error(k(459));
    var a = pd;
    pd = null;
    return a;
}
function rd(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var sd = "function" === typeof Object.is ? Object.is : rd, U = null, td = null, ud = null, V = null, vd = !1, wd = !1, xd = 0, yd = 0, W = null, X = null, zd = 0;
function Y() {
    if (null === U) throw Error(k(321));
    return U;
}
function Ad() {
    if (0 < zd) throw Error(k(312));
    return {
        memoizedState: null,
        queue: null,
        next: null
    };
}
function Bd() {
    null === V ? null === ud ? (vd = !1, ud = V = Ad()) : (vd = !0, V = ud) : null === V.next ? (vd = !1, V = V.next = Ad()) : (vd = !0, V = V.next);
    return V;
}
function Cd(a, b, c, d) {
    for(; wd;)wd = !1, yd = xd = 0, zd += 1, V = null, c = a(b, d);
    Dd();
    return c;
}
function Ed() {
    var a = W;
    W = null;
    return a;
}
function Dd() {
    td = U = null;
    wd = !1;
    ud = null;
    zd = 0;
    V = X = null;
}
function Fd(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function Gd(a, b, c) {
    U = Y();
    V = Bd();
    if (vd) {
        var d = V.queue;
        b = d.dispatch;
        if (null !== X && (c = X.get(d), void 0 !== c)) {
            X.delete(d);
            d = V.memoizedState;
            do d = a(d, c.action), c = c.next;
            while (null !== c)
            V.memoizedState = d;
            return [
                d,
                b
            ];
        }
        return [
            V.memoizedState,
            b
        ];
    }
    a = a === Fd ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
    V.memoizedState = a;
    a = V.queue = {
        last: null,
        dispatch: null
    };
    a = a.dispatch = Hd.bind(null, U, a);
    return [
        V.memoizedState,
        a
    ];
}
function Id(a, b) {
    U = Y();
    V = Bd();
    b = void 0 === b ? null : b;
    if (null !== V) {
        var c = V.memoizedState;
        if (null !== c && null !== b) {
            var d = c[1];
            a: if (null === d) d = !1;
            else {
                for(var e = 0; e < d.length && e < b.length; e++)if (!sd(b[e], d[e])) {
                    d = !1;
                    break a;
                }
                d = !0;
            }
            if (d) return c[0];
        }
    }
    a = a();
    V.memoizedState = [
        a,
        b
    ];
    return a;
}
function Hd(a, b, c) {
    if (25 <= zd) throw Error(k(301));
    if (a === U) if (wd = !0, a = {
        action: c,
        next: null
    }, null === X && (X = new Map), c = X.get(b), void 0 === c) X.set(b, a);
    else {
        for(b = c; null !== b.next;)b = b.next;
        b.next = a;
    }
}
function Jd() {
    throw Error(k(394));
}
function Kd() {
    throw Error(k(393));
}
function Ld() {}
var Nd = {
    readContext: function(a) {
        return a._currentValue;
    },
    useContext: function(a) {
        Y();
        return a._currentValue;
    },
    useMemo: Id,
    useReducer: Gd,
    useRef: function(a) {
        U = Y();
        V = Bd();
        var b = V.memoizedState;
        return null === b ? (a = {
            current: a
        }, V.memoizedState = a) : b;
    },
    useState: function(a) {
        return Gd(Fd, a);
    },
    useInsertionEffect: Ld,
    useLayoutEffect: function() {},
    useCallback: function(a, b) {
        return Id(function() {
            return a;
        }, b);
    },
    useImperativeHandle: Ld,
    useEffect: Ld,
    useDebugValue: Ld,
    useDeferredValue: function(a) {
        Y();
        return a;
    },
    useTransition: function() {
        Y();
        return [
            !1,
            Jd
        ];
    },
    useId: function() {
        var a = td.treeContext;
        var b = a.overflow;
        a = a.id;
        a = (a & ~(1 << 32 - id(a) - 1)).toString(32) + b;
        var c = Md;
        if (null === c) throw Error(k(404));
        b = xd++;
        a = ":" + c.idPrefix + "R" + a;
        0 < b && (a += "H" + b.toString(32));
        return a + ":";
    },
    useMutableSource: function(a, b) {
        Y();
        return b(a._source);
    },
    useSyncExternalStore: function(a, b, c) {
        if (void 0 === c) throw Error(k(407));
        return c();
    },
    useCacheRefresh: function() {
        return Kd;
    },
    use: function(a) {
        if (null !== a && "object" === typeof a) {
            if ("function" === typeof a.then) {
                var b = yd;
                yd += 1;
                null === W && (W = []);
                return od(W, a, b);
            }
            if (a.$$typeof === Hc || a.$$typeof === Ic) return a._currentValue;
        }
        throw Error(k(438, String(a)));
    }
}, Md = null, Od = {
    getCacheSignal: function() {
        throw Error(k(248));
    },
    getCacheForType: function() {
        throw Error(k(248));
    }
}, Pd = Wc.ReactCurrentDispatcher, Qd = Wc.ReactCurrentCache;
function Rd(a) {
    console.error(a);
    return null;
}
function Sd() {}
function Td(a, b, c, d, e, f, g, h, n) {
    var m = [], t = new Set, r = {
        preloadsMap: new Map,
        stylesMap: new Map,
        scriptsMap: new Map,
        headsMap: new Map,
        charset: null,
        bases: new Set,
        preconnects: new Set,
        fontPreloads: new Set,
        precedences: new Map,
        usedStylePreloads: new Set,
        scripts: new Set,
        usedScriptPreloads: new Set,
        explicitStylePreloads: new Set,
        explicitScriptPreloads: new Set,
        headResources: new Set,
        structuredMetaKeys: new Map,
        boundaryResources: null
    };
    b = {
        destination: null,
        responseState: b,
        progressiveChunkSize: void 0 === d ? 12800 : d,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        resources: r,
        completedRootSegment: null,
        abortableTasks: t,
        pingedTasks: m,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        preamble: [],
        postamble: [],
        onError: void 0 === e ? Rd : e,
        onAllReady: void 0 === f ? Sd : f,
        onShellReady: void 0 === g ? Sd : g,
        onShellError: void 0 === h ? Sd : h,
        onFatalError: void 0 === n ? Sd : n
    };
    c = Ud(b, 0, null, c, !1, !1);
    c.parentFlushed = !0;
    a = Vd(b, null, a, null, c, t, Xc, null, gd);
    m.push(a);
    return b;
}
function Vd(a, b, c, d, e, f, g, h, n) {
    a.allPendingTasks++;
    null === d ? a.pendingRootTasks++ : d.pendingTasks++;
    var m = {
        node: c,
        ping: function() {
            var b = a.pingedTasks;
            b.push(m);
            1 === b.length && Wd(a);
        },
        blockedBoundary: d,
        blockedSegment: e,
        abortSet: f,
        legacyContext: g,
        context: h,
        treeContext: n,
        thenableState: b
    };
    f.add(m);
    return m;
}
function Ud(a, b, c, d, e, f) {
    return {
        status: 0,
        id: -1,
        index: b,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: d,
        boundary: c,
        lastPushedText: e,
        textEmbedded: f
    };
}
function Xd(a, b) {
    a = a.onError(b);
    if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
}
function Yd(a, b) {
    var c = a.onShellError;
    c(b);
    c = a.onFatalError;
    c(b);
    null !== a.destination ? (a.status = 2, fa(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function Zd(a, b, c, d) {
    var e = c.render(), f = d.childContextTypes;
    if (null !== f && void 0 !== f) {
        var g = b.legacyContext;
        if ("function" !== typeof c.getChildContext) d = g;
        else {
            c = c.getChildContext();
            for(var h in c)if (!(h in f)) throw Error(k(108, Vc(d) || "Unknown", h));
            d = D({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, null, e);
        b.legacyContext = g;
    } else Z(a, b, null, e);
}
function $d(a, b) {
    if (a && a.defaultProps) {
        b = D({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
function ae(a, b, c, d, e, f) {
    if ("function" === typeof d) if (d.prototype && d.prototype.isReactComponent) c = Yc(d, b.legacyContext), f = d.contextType, f = new d(e, "object" === typeof f && null !== f ? f._currentValue : c), fd(f, d, e, c), Zd(a, b, f, d);
    else {
        f = Yc(d, b.legacyContext);
        U = {};
        td = b;
        yd = xd = 0;
        W = c;
        c = d(e, f);
        c = Cd(d, e, c, f);
        var g = 0 !== xd;
        if ("object" === typeof c && null !== c && "function" === typeof c.render && void 0 === c.$$typeof) fd(c, d, e, f), Zd(a, b, c, d);
        else if (g) {
            e = b.treeContext;
            b.treeContext = hd(e, 1, 0);
            try {
                Z(a, b, null, c);
            } finally{
                b.treeContext = e;
            }
        } else Z(a, b, null, c);
    }
    else if ("string" === typeof d) c = b.blockedSegment, f = mb(c.chunks, a.preamble, d, e, a.responseState, c.formatContext, c.lastPushedText), c.lastPushedText = !1, g = c.formatContext, c.formatContext = Sa(g, d, e), be(a, b, f), c.formatContext = g, nb(c.chunks, a.postamble, d), c.lastPushedText = !1;
    else {
        switch(d){
            case Rc:
            case Pc:
            case Ec:
            case Fc:
            case Dc:
                Z(a, b, null, e.children);
                return;
            case Qc:
                "hidden" !== e.mode && Z(a, b, null, e.children);
                return;
            case Lc:
                Z(a, b, null, e.children);
                return;
            case Oc:
                throw Error(k(343));
            case Kc:
                a: {
                    d = b.blockedBoundary;
                    c = b.blockedSegment;
                    f = e.fallback;
                    e = e.children;
                    g = new Set;
                    var h = {
                        id: null,
                        rootSegmentID: -1,
                        parentFlushed: !1,
                        pendingTasks: 0,
                        forceClientRender: !1,
                        completedSegments: [],
                        byteSize: 0,
                        fallbackAbortableTasks: g,
                        errorDigest: null,
                        resources: new Set
                    }, n = Ud(a, c.chunks.length, h, c.formatContext, !1, !1);
                    c.children.push(n);
                    c.lastPushedText = !1;
                    var m = Ud(a, 0, null, c.formatContext, !1, !1);
                    m.parentFlushed = !0;
                    b.blockedBoundary = h;
                    b.blockedSegment = m;
                    a.resources.boundaryResources = h.resources;
                    try {
                        if (be(a, b, e), m.lastPushedText && m.textEmbedded && m.chunks.push(I), m.status = 1, 0 === h.pendingTasks && (null !== a.completedRootSegment || 0 < a.pendingRootTasks) && Ga(a.resources, h.resources), ce(h, m), 0 === h.pendingTasks) break a;
                    } catch (t) {
                        m.status = 4, h.forceClientRender = !0, h.errorDigest = Xd(a, t);
                    } finally{
                        a.resources.boundaryResources = d ? d.resources : null, b.blockedBoundary = d, b.blockedSegment = c;
                    }
                    b = Vd(a, null, f, d, n, g, b.legacyContext, b.context, b.treeContext);
                    a.pingedTasks.push(b);
                }
                return;
        }
        if ("object" === typeof d && null !== d) switch(d.$$typeof){
            case Jc:
                d = d.render;
                U = {};
                td = b;
                yd = xd = 0;
                W = c;
                c = d(e, f);
                e = Cd(d, e, c, f);
                if (0 !== xd) {
                    d = b.treeContext;
                    b.treeContext = hd(d, 1, 0);
                    try {
                        Z(a, b, null, e);
                    } finally{
                        b.treeContext = d;
                    }
                } else Z(a, b, null, e);
                return;
            case Mc:
                d = d.type;
                e = $d(d, e);
                ae(a, b, c, d, e, f);
                return;
            case Gc:
                c = e.children;
                d = d._context;
                e = e.value;
                f = d._currentValue;
                d._currentValue = e;
                g = T;
                T = e = {
                    parent: g,
                    depth: null === g ? 0 : g.depth + 1,
                    context: d,
                    parentValue: f,
                    value: e
                };
                b.context = e;
                Z(a, b, null, c);
                a = T;
                if (null === a) throw Error(k(403));
                e = a.parentValue;
                a.context._currentValue = e === Tc ? a.context._defaultValue : e;
                a = T = a.parent;
                b.context = a;
                return;
            case Hc:
                e = e.children;
                e = e(d._currentValue);
                Z(a, b, null, e);
                return;
            case Nc:
                f = d._init;
                d = f(d._payload);
                e = $d(d, e);
                ae(a, b, c, d, e, void 0);
                return;
        }
        throw Error(k(130, null == d ? d : typeof d, ""));
    }
}
function Z(a, b, c, d) {
    b.node = d;
    if ("object" === typeof d && null !== d) {
        switch(d.$$typeof){
            case Bc:
                ae(a, b, c, d.type, d.props, d.ref);
                return;
            case Cc:
                throw Error(k(257));
            case Nc:
                c = d._init;
                d = c(d._payload);
                Z(a, b, null, d);
                return;
        }
        if (ua(d)) {
            de(a, b, d);
            return;
        }
        null === d || "object" !== typeof d ? c = null : (c = Uc && d[Uc] || d["@@iterator"], c = "function" === typeof c ? c : null);
        if (c && (c = c.call(d))) {
            d = c.next();
            if (!d.done) {
                var e = [];
                do e.push(d.value), d = c.next();
                while (!d.done)
                de(a, b, e);
            }
            return;
        }
        a = Object.prototype.toString.call(d);
        throw Error(k(31, "[object Object]" === a ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    "string" === typeof d ? (c = b.blockedSegment, c.lastPushedText = Ta(b.blockedSegment.chunks, d, a.responseState, c.lastPushedText)) : "number" === typeof d && (c = b.blockedSegment, c.lastPushedText = Ta(b.blockedSegment.chunks, "" + d, a.responseState, c.lastPushedText));
}
function de(a, b, c) {
    for(var d = c.length, e = 0; e < d; e++){
        var f = b.treeContext;
        b.treeContext = hd(f, d, e);
        try {
            be(a, b, c[e]);
        } finally{
            b.treeContext = f;
        }
    }
}
function be(a, b, c) {
    var d = b.blockedSegment.formatContext, e = b.legacyContext, f = b.context;
    try {
        return Z(a, b, null, c);
    } catch (m) {
        if (Dd(), c = m === md ? qd() : m, "object" === typeof c && null !== c && "function" === typeof c.then) {
            var g = Ed(), h = b.blockedSegment, n = Ud(a, h.chunks.length, null, h.formatContext, h.lastPushedText, !0);
            h.children.push(n);
            h.lastPushedText = !1;
            a = Vd(a, g, b.node, b.blockedBoundary, n, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
            c.then(a, a);
            b.blockedSegment.formatContext = d;
            b.legacyContext = e;
            b.context = f;
            dd(f);
        } else throw b.blockedSegment.formatContext = d, b.legacyContext = e, b.context = f, dd(f), c;
    }
}
function ee(a) {
    var b = a.blockedBoundary;
    a = a.blockedSegment;
    a.status = 3;
    fe(this, b, a);
}
function ge(a, b, c) {
    var d = a.blockedBoundary;
    a.blockedSegment.status = 3;
    null === d ? (b.allPendingTasks--, 1 !== b.status && 2 !== b.status && (Xd(b, c), Yd(b, c))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = b.onError(c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a) {
        return ge(a, b, c);
    }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
}
function ce(a, b) {
    if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = !0;
        1 === c.status && ce(a, c);
    } else a.completedSegments.push(b);
}
function fe(a, b, c) {
    if (null === b) {
        if (c.parentFlushed) {
            if (null !== a.completedRootSegment) throw Error(k(389));
            a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = Sd, b = a.onShellReady, b());
    } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && ce(b, c), (null !== a.completedRootSegment || 0 < a.pendingRootTasks) && Ga(a.resources, b.resources), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ee, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (ce(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
    a.allPendingTasks--;
    0 === a.allPendingTasks && (a = a.onAllReady, a());
}
function Wd(a) {
    if (2 !== a.status) {
        var b = T, c = Pd.current;
        Pd.current = Nd;
        var d = Qd.current;
        Qd.current = Od;
        var e = a.resources;
        va.push(E);
        E = e;
        e = Ha.current;
        Ha.current = ya;
        var f = Md;
        Md = a.responseState;
        try {
            var g = a.pingedTasks, h;
            for(h = 0; h < g.length; h++){
                var n = g[h];
                var m = a, t = n.blockedBoundary;
                m.resources.boundaryResources = t ? t.resources : null;
                var r = n.blockedSegment;
                if (0 === r.status) {
                    dd(n.context);
                    try {
                        var u = n.thenableState;
                        n.thenableState = null;
                        Z(m, n, u, n.node);
                        r.lastPushedText && r.textEmbedded && r.chunks.push(I);
                        n.abortSet.delete(n);
                        r.status = 1;
                        fe(m, n.blockedBoundary, r);
                    } catch (oa) {
                        Dd();
                        var y = oa === md ? qd() : oa;
                        if ("object" === typeof y && null !== y && "function" === typeof y.then) {
                            var N = n.ping;
                            y.then(N, N);
                            n.thenableState = Ed();
                        } else {
                            n.abortSet.delete(n);
                            r.status = 4;
                            var H = m, K = n.blockedBoundary, ja = y, aa = Xd(H, ja);
                            null === K ? Yd(H, ja) : (K.pendingTasks--, K.forceClientRender || (K.forceClientRender = !0, K.errorDigest = aa, K.parentFlushed && H.clientRenderedBoundaries.push(K)));
                            H.allPendingTasks--;
                            if (0 === H.allPendingTasks) {
                                var oe = H.onAllReady;
                                oe();
                            }
                        }
                    } finally{
                        m.resources.boundaryResources = null;
                    }
                }
            }
            g.splice(0, h);
            null !== a.destination && he(a, a.destination);
        } catch (oa) {
            Xd(a, oa), Yd(a, oa);
        } finally{
            Md = f, Pd.current = c, Qd.current = d, E = va.pop(), Ha.current = e, c === Nd && dd(b);
        }
    }
}
function ie(a, b, c) {
    c.parentFlushed = !0;
    switch(c.status){
        case 0:
            var d = c.id = a.nextSegmentId++;
            c.lastPushedText = !1;
            c.textEmbedded = !1;
            a = a.responseState;
            q(b, ob);
            q(b, a.placeholderPrefix);
            a = w(d.toString(16));
            q(b, a);
            return v(b, pb);
        case 1:
            c.status = 2;
            var e = !0;
            d = c.chunks;
            var f = 0;
            c = c.children;
            for(var g = 0; g < c.length; g++){
                for(e = c[g]; f < e.index; f++)q(b, d[f]);
                e = je(a, b, e);
            }
            for(; f < d.length - 1; f++)q(b, d[f]);
            f < d.length && (e = v(b, d[f]));
            return e;
        default:
            throw Error(k(390));
    }
}
function je(a, b, c) {
    var d = c.boundary;
    if (null === d) return ie(a, b, c);
    d.parentFlushed = !0;
    if (d.forceClientRender) d = d.errorDigest, v(b, tb), q(b, vb), d && (q(b, xb), q(b, w(C(d))), q(b, wb)), v(b, yb), ie(a, b, c);
    else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var e = a.responseState;
        var f = e.nextSuspenseID++;
        e = x(e.boundaryPrefix + f.toString(16));
        d = d.id = e;
        zb(b, a.responseState, d);
        ie(a, b, c);
    } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), zb(b, a.responseState, d.id), ie(a, b, c);
    else {
        Fa(a.resources, d.resources);
        v(b, qb);
        c = d.completedSegments;
        if (1 !== c.length) throw Error(k(391));
        je(a, b, c[0]);
    }
    return v(b, ub);
}
function ke(a, b, c) {
    Vb(b, a.responseState, c.formatContext, c.id);
    je(a, b, c);
    return Wb(b, c.formatContext);
}
function le(a, b, c) {
    a.resources.boundaryResources = c.resources;
    for(var d = c.completedSegments, e = 0; e < d.length; e++)me(a, b, c, d[e]);
    d.length = 0;
    a = a.responseState;
    d = c.id;
    e = c.rootSegmentID;
    c = c.resources;
    var f;
    b: {
        for(f = c.values();;){
            var g = f.next().value;
            if (!g) break;
            if (!g.inShell) {
                f = !0;
                break b;
            }
        }
        f = !1;
    }
    q(b, a.startInlineScript);
    f ? a.sentCompleteBoundaryFunction ? a.sentStyleInsertionFunction ? q(b, ec) : (a.sentStyleInsertionFunction = !0, q(b, dc)) : (a.sentCompleteBoundaryFunction = !0, a.sentStyleInsertionFunction = !0, q(b, 512 < cc.length ? cc.slice() : cc)) : a.sentCompleteBoundaryFunction ? q(b, bc) : (a.sentCompleteBoundaryFunction = !0, q(b, ac));
    if (null === d) throw Error(k(395));
    e = w(e.toString(16));
    q(b, d);
    q(b, fc);
    q(b, a.segmentPrefix);
    q(b, e);
    f ? (q(b, gc), Ac(b, c)) : q(b, hc);
    b = v(b, ic);
    return b;
}
function me(a, b, c, d) {
    if (2 === d.status) return !0;
    var e = d.id;
    if (-1 === e) {
        if (-1 === (d.id = c.rootSegmentID)) throw Error(k(392));
        return ke(a, b, d);
    }
    ke(a, b, d);
    a = a.responseState;
    q(b, a.startInlineScript);
    a.sentCompleteSegmentFunction ? q(b, Yb) : (a.sentCompleteSegmentFunction = !0, q(b, Xb));
    q(b, a.segmentPrefix);
    e = w(e.toString(16));
    q(b, e);
    q(b, Zb);
    q(b, a.placeholderPrefix);
    q(b, e);
    b = v(b, $b);
    return b;
}
function he(a, b) {
    l = new Uint8Array(512);
    p = 0;
    try {
        var c, d = a.completedRootSegment;
        if (null !== d) if (0 === a.pendingRootTasks) {
            var e = a.preamble;
            for(c = 0; c < e.length; c++)q(b, e[c]);
            uc(b, a.resources, a.responseState);
            je(a, b, d);
            a.completedRootSegment = null;
            var f = a.responseState.bootstrapChunks;
            for(d = 0; d < f.length - 1; d++)q(b, f[d]);
            d < f.length && v(b, f[d]);
        } else return;
        else vc(b, a.resources, a.responseState);
        var g = a.clientRenderedBoundaries;
        for(c = 0; c < g.length; c++){
            var h = g[c];
            f = b;
            var n = a.responseState, m = h.id, t = h.errorDigest, r = h.errorMessage, u = h.errorComponentStack;
            q(f, n.startInlineScript);
            n.sentClientRenderFunction ? q(f, kc) : (n.sentClientRenderFunction = !0, q(f, jc));
            if (null === m) throw Error(k(395));
            q(f, m);
            q(f, lc);
            if (t || r || u) q(f, mc), q(f, w(pc(t || "")));
            if (r || u) q(f, mc), q(f, w(pc(r || "")));
            u && (q(f, mc), q(f, w(pc(u))));
            if (!v(f, nc)) {
                a.destination = null;
                c++;
                g.splice(0, c);
                return;
            }
        }
        g.splice(0, c);
        var y = a.completedBoundaries;
        for(c = 0; c < y.length; c++)if (!le(a, b, y[c])) {
            a.destination = null;
            c++;
            y.splice(0, c);
            return;
        }
        y.splice(0, c);
        da(b);
        l = new Uint8Array(512);
        p = 0;
        var N = a.partialBoundaries;
        for(c = 0; c < N.length; c++){
            var H = N[c];
            a: {
                g = a;
                h = b;
                g.resources.boundaryResources = H.resources;
                var K = H.completedSegments;
                for(n = 0; n < K.length; n++)if (!me(g, h, H, K[n])) {
                    n++;
                    K.splice(0, n);
                    var ja = !1;
                    break a;
                }
                K.splice(0, n);
                ja = !0;
            }
            if (!ja) {
                a.destination = null;
                c++;
                N.splice(0, c);
                return;
            }
        }
        N.splice(0, c);
        var aa = a.completedBoundaries;
        for(c = 0; c < aa.length; c++)if (!le(a, b, aa[c])) {
            a.destination = null;
            c++;
            aa.splice(0, c);
            return;
        }
        aa.splice(0, c);
    } finally{
        if (0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length) {
            a = a.postamble;
            for(c = 0; c < a.length; c++)q(b, a[c]);
            da(b);
            b.close();
        } else da(b);
    }
}
function ne(a, b) {
    try {
        var c = a.abortableTasks;
        if (0 < c.size) {
            var d = void 0 === b ? Error(k(432)) : b;
            c.forEach(function(b) {
                return ge(b, a, d);
            });
            c.clear();
        }
        null !== a.destination && he(a, a.destination);
    } catch (e) {
        Xd(a, e), Yd(a, e);
    }
}
exports.renderToReadableStream = function(a, b) {
    return new Promise(function(c, d) {
        var e, f, g = new Promise(function(a, b) {
            f = a;
            e = b;
        }), h = Td(a, Qa(b ? b.identifierPrefix : void 0, b ? b.nonce : void 0, b ? b.bootstrapScriptContent : void 0, b ? b.bootstrapScripts : void 0, b ? b.bootstrapModules : void 0, b ? b.unstable_externalRuntimeSrc : void 0), Ra(b ? b.namespaceURI : void 0), b ? b.progressiveChunkSize : void 0, b ? b.onError : void 0, f, function() {
            var a = new ReadableStream({
                type: "bytes",
                pull: function(a) {
                    if (1 === h.status) h.status = 2, fa(a, h.fatalError);
                    else if (2 !== h.status && null === h.destination) {
                        h.destination = a;
                        try {
                            he(h, a);
                        } catch (u) {
                            Xd(h, u), Yd(h, u);
                        }
                    }
                },
                cancel: function() {
                    ne(h);
                }
            }, {
                highWaterMark: 0
            });
            a.allReady = g;
            c(a);
        }, function(a) {
            g.catch(function() {});
            d(a);
        }, e);
        if (b && b.signal) {
            var n = b.signal;
            if (n.aborted) ne(h, n.reason);
            else {
                var m = function() {
                    ne(h, n.reason);
                    n.removeEventListener("abort", m);
                };
                n.addEventListener("abort", m);
            }
        }
        Wd(h);
    });
};
exports.version = "18.3.0-next-3ba7add60-20221201";

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.development.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
if (process.env.NODE_ENV !== "production") {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
        var ReactDOM = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)");
        var ReactVersion = '18.3.0-next-3ba7add60-20221201';
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
            {
                {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    printWarning('warn', format, args);
                }
            }
        }
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                }
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        function scheduleWork(callback) {
            callback();
        }
        function beginWriting(destination) {}
        function writeChunk(destination, chunk) {
            writeChunkAndReturn(destination, chunk);
        }
        function writeChunkAndReturn(destination, chunk) {
            return destination.push(chunk);
        }
        function completeWriting(destination) {}
        function close(destination) {
            destination.push(null);
        }
        function stringToChunk(content) {
            return content;
        }
        function stringToPrecomputedChunk(content) {
            return content;
        }
        function clonePrecomputedChunk(chunk) {
            return chunk;
        }
        function closeWithError(destination, error) {
            destination.destroy(error);
        }
        function typeName(value) {
            {
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
                return type;
            }
        }
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            return '' + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided `%s` CSS property is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        function checkHtmlStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        var enableFloat = true;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
            if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
                return true;
            }
            if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
                return false;
            }
            if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
                validatedAttributeNameCache[attributeName] = true;
                return true;
            }
            illegalAttributeNameCache[attributeName] = true;
            {
                error('Invalid attribute name: `%s`', attributeName);
            }
            return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
            if (propertyInfo !== null && propertyInfo.type === RESERVED) {
                return false;
            }
            switch(typeof value){
                case 'function':
                case 'symbol':
                    return true;
                case 'boolean':
                    {
                        if (isCustomComponentTag) {
                            return false;
                        }
                        if (propertyInfo !== null) {
                            return !propertyInfo.acceptsBooleans;
                        } else {
                            var prefix = name.toLowerCase().slice(0, 5);
                            return prefix !== 'data-' && prefix !== 'aria-';
                        }
                    }
                default:
                    return false;
            }
        }
        function getPropertyInfo(name) {
            return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
            this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
            this.attributeName = attributeName;
            this.attributeNamespace = attributeNamespace;
            this.mustUseProperty = mustUseProperty;
            this.propertyName = name;
            this.type = type;
            this.sanitizeURL = sanitizeURL;
            this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
            'children',
            'dangerouslySetInnerHTML',
            'defaultValue',
            'defaultChecked',
            'innerHTML',
            'suppressContentEditableWarning',
            'suppressHydrationWarning',
            'style'
        ];
        reservedProps.forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        });
        [
            [
                'acceptCharset',
                'accept-charset'
            ],
            [
                'className',
                'class'
            ],
            [
                'htmlFor',
                'for'
            ],
            [
                'httpEquiv',
                'http-equiv'
            ]
        ].forEach(function(_ref) {
            var name = _ref[0], attributeName = _ref[1];
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
            'contentEditable',
            'draggable',
            'spellCheck',
            'value'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        });
        [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        });
        [
            'allowFullScreen',
            'async',
            'autoFocus',
            'autoPlay',
            'controls',
            'default',
            'defer',
            'disabled',
            'disablePictureInPicture',
            'disableRemotePlayback',
            'formNoValidate',
            'hidden',
            'loop',
            'noModule',
            'noValidate',
            'open',
            'playsInline',
            'readOnly',
            'required',
            'reversed',
            'scoped',
            'seamless',
            'itemScope'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        });
        [
            'checked',
            'multiple',
            'muted',
            'selected'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        });
        [
            'capture',
            'download'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        });
        [
            'cols',
            'rows',
            'size',
            'span'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        });
        [
            'rowSpan',
            'start'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
            return token[1].toUpperCase();
        };
        [
            'accent-height',
            'alignment-baseline',
            'arabic-form',
            'baseline-shift',
            'cap-height',
            'clip-path',
            'clip-rule',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'dominant-baseline',
            'enable-background',
            'fill-opacity',
            'fill-rule',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'glyph-name',
            'glyph-orientation-horizontal',
            'glyph-orientation-vertical',
            'horiz-adv-x',
            'horiz-origin-x',
            'image-rendering',
            'letter-spacing',
            'lighting-color',
            'marker-end',
            'marker-mid',
            'marker-start',
            'overline-position',
            'overline-thickness',
            'paint-order',
            'panose-1',
            'pointer-events',
            'rendering-intent',
            'shape-rendering',
            'stop-color',
            'stop-opacity',
            'strikethrough-position',
            'strikethrough-thickness',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'underline-position',
            'underline-thickness',
            'unicode-bidi',
            'unicode-range',
            'units-per-em',
            'v-alphabetic',
            'v-hanging',
            'v-ideographic',
            'v-mathematical',
            'vector-effect',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'word-spacing',
            'writing-mode',
            'xmlns:xlink',
            'x-height'
        ].forEach(function(attributeName) {
            var name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
            'xlink:actuate',
            'xlink:arcrole',
            'xlink:role',
            'xlink:show',
            'xlink:title',
            'xlink:type'
        ].forEach(function(attributeName) {
            var name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/1999/xlink', false, false);
        });
        [
            'xml:base',
            'xml:lang',
            'xml:space'
        ].forEach(function(attributeName) {
            var name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/XML/1998/namespace', false, false);
        });
        [
            'tabIndex',
            'crossOrigin'
        ].forEach(function(attributeName) {
            properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = 'xlinkHref';
        properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, 'xlink:href', 'http://www.w3.org/1999/xlink', true, false);
        [
            'src',
            'href',
            'action',
            'formAction'
        ].forEach(function(attributeName) {
            properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isUnitlessNumber = {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageOutset: true,
            borderImageSlice: true,
            borderImageWidth: true,
            boxFlex: true,
            boxFlexGroup: true,
            boxOrdinalGroup: true,
            columnCount: true,
            columns: true,
            flex: true,
            flexGrow: true,
            flexPositive: true,
            flexShrink: true,
            flexNegative: true,
            flexOrder: true,
            gridArea: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowSpan: true,
            gridRowStart: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnSpan: true,
            gridColumnStart: true,
            fontWeight: true,
            lineClamp: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            tabSize: true,
            widows: true,
            zIndex: true,
            zoom: true,
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeDasharray: true,
            strokeDashoffset: true,
            strokeMiterlimit: true,
            strokeOpacity: true,
            strokeWidth: true
        };
        function prefixKey(prefix, key) {
            return prefix + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = [
            'Webkit',
            'ms',
            'Moz',
            'O'
        ];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
            prefixes.forEach(function(prefix) {
                isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
            });
        });
        var hasReadOnlyValue = {
            button: true,
            checkbox: true,
            image: true,
            hidden: true,
            radio: true,
            reset: true,
            submit: true
        };
        function checkControlledValueProps(tagName, props) {
            {
                if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
                    error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
                }
                if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
                    error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
                }
            }
        }
        function isCustomComponent(tagName, props) {
            if (tagName.indexOf('-') === -1) {
                return typeof props.is === 'string';
            }
            switch(tagName){
                case 'annotation-xml':
                case 'color-profile':
                case 'font-face':
                case 'font-face-src':
                case 'font-face-uri':
                case 'font-face-format':
                case 'font-face-name':
                case 'missing-glyph':
                    return false;
                default:
                    return true;
            }
        }
        var ariaProperties = {
            'aria-current': 0,
            'aria-description': 0,
            'aria-details': 0,
            'aria-disabled': 0,
            'aria-hidden': 0,
            'aria-invalid': 0,
            'aria-keyshortcuts': 0,
            'aria-label': 0,
            'aria-roledescription': 0,
            'aria-autocomplete': 0,
            'aria-checked': 0,
            'aria-expanded': 0,
            'aria-haspopup': 0,
            'aria-level': 0,
            'aria-modal': 0,
            'aria-multiline': 0,
            'aria-multiselectable': 0,
            'aria-orientation': 0,
            'aria-placeholder': 0,
            'aria-pressed': 0,
            'aria-readonly': 0,
            'aria-required': 0,
            'aria-selected': 0,
            'aria-sort': 0,
            'aria-valuemax': 0,
            'aria-valuemin': 0,
            'aria-valuenow': 0,
            'aria-valuetext': 0,
            'aria-atomic': 0,
            'aria-busy': 0,
            'aria-live': 0,
            'aria-relevant': 0,
            'aria-dropeffect': 0,
            'aria-grabbed': 0,
            'aria-activedescendant': 0,
            'aria-colcount': 0,
            'aria-colindex': 0,
            'aria-colspan': 0,
            'aria-controls': 0,
            'aria-describedby': 0,
            'aria-errormessage': 0,
            'aria-flowto': 0,
            'aria-labelledby': 0,
            'aria-owns': 0,
            'aria-posinset': 0,
            'aria-rowcount': 0,
            'aria-rowindex': 0,
            'aria-rowspan': 0,
            'aria-setsize': 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
        var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
        function validateProperty(tagName, name) {
            {
                if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
                    return true;
                }
                if (rARIACamel.test(name)) {
                    var ariaName = 'aria-' + name.slice(4).toLowerCase();
                    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
                    if (correctName == null) {
                        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
                        warnedProperties[name] = true;
                        return true;
                    }
                    if (name !== correctName) {
                        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
                        warnedProperties[name] = true;
                        return true;
                    }
                }
                if (rARIA.test(name)) {
                    var lowerCasedName = name.toLowerCase();
                    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
                    if (standardName == null) {
                        warnedProperties[name] = true;
                        return false;
                    }
                    if (name !== standardName) {
                        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
                        warnedProperties[name] = true;
                        return true;
                    }
                }
            }
            return true;
        }
        function warnInvalidARIAProps(type, props) {
            {
                var invalidProps = [];
                for(var key in props){
                    var isValid = validateProperty(type, key);
                    if (!isValid) {
                        invalidProps.push(key);
                    }
                }
                var unknownPropString = invalidProps.map(function(prop) {
                    return '`' + prop + '`';
                }).join(', ');
                if (invalidProps.length === 1) {
                    error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
                } else if (invalidProps.length > 1) {
                    error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
                }
            }
        }
        function validateProperties(type, props) {
            if (isCustomComponent(type, props)) {
                return;
            }
            warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
            {
                if (type !== 'input' && type !== 'textarea' && type !== 'select') {
                    return;
                }
                if (props != null && props.value === null && !didWarnValueNull) {
                    didWarnValueNull = true;
                    if (type === 'select' && props.multiple) {
                        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
                    } else {
                        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
                    }
                }
            }
        }
        var possibleStandardNames = {
            accept: 'accept',
            acceptcharset: 'acceptCharset',
            'accept-charset': 'acceptCharset',
            accesskey: 'accessKey',
            action: 'action',
            allowfullscreen: 'allowFullScreen',
            alt: 'alt',
            as: 'as',
            async: 'async',
            autocapitalize: 'autoCapitalize',
            autocomplete: 'autoComplete',
            autocorrect: 'autoCorrect',
            autofocus: 'autoFocus',
            autoplay: 'autoPlay',
            autosave: 'autoSave',
            capture: 'capture',
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            challenge: 'challenge',
            charset: 'charSet',
            checked: 'checked',
            children: 'children',
            cite: 'cite',
            class: 'className',
            classid: 'classID',
            classname: 'className',
            cols: 'cols',
            colspan: 'colSpan',
            content: 'content',
            contenteditable: 'contentEditable',
            contextmenu: 'contextMenu',
            controls: 'controls',
            controlslist: 'controlsList',
            coords: 'coords',
            crossorigin: 'crossOrigin',
            dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
            data: 'data',
            datetime: 'dateTime',
            default: 'default',
            defaultchecked: 'defaultChecked',
            defaultvalue: 'defaultValue',
            defer: 'defer',
            dir: 'dir',
            disabled: 'disabled',
            disablepictureinpicture: 'disablePictureInPicture',
            disableremoteplayback: 'disableRemotePlayback',
            download: 'download',
            draggable: 'draggable',
            enctype: 'encType',
            enterkeyhint: 'enterKeyHint',
            for: 'htmlFor',
            form: 'form',
            formmethod: 'formMethod',
            formaction: 'formAction',
            formenctype: 'formEncType',
            formnovalidate: 'formNoValidate',
            formtarget: 'formTarget',
            frameborder: 'frameBorder',
            headers: 'headers',
            height: 'height',
            hidden: 'hidden',
            high: 'high',
            href: 'href',
            hreflang: 'hrefLang',
            htmlfor: 'htmlFor',
            httpequiv: 'httpEquiv',
            'http-equiv': 'httpEquiv',
            icon: 'icon',
            id: 'id',
            imagesizes: 'imageSizes',
            imagesrcset: 'imageSrcSet',
            innerhtml: 'innerHTML',
            inputmode: 'inputMode',
            integrity: 'integrity',
            is: 'is',
            itemid: 'itemID',
            itemprop: 'itemProp',
            itemref: 'itemRef',
            itemscope: 'itemScope',
            itemtype: 'itemType',
            keyparams: 'keyParams',
            keytype: 'keyType',
            kind: 'kind',
            label: 'label',
            lang: 'lang',
            list: 'list',
            loop: 'loop',
            low: 'low',
            manifest: 'manifest',
            marginwidth: 'marginWidth',
            marginheight: 'marginHeight',
            max: 'max',
            maxlength: 'maxLength',
            media: 'media',
            mediagroup: 'mediaGroup',
            method: 'method',
            min: 'min',
            minlength: 'minLength',
            multiple: 'multiple',
            muted: 'muted',
            name: 'name',
            nomodule: 'noModule',
            nonce: 'nonce',
            novalidate: 'noValidate',
            open: 'open',
            optimum: 'optimum',
            pattern: 'pattern',
            placeholder: 'placeholder',
            playsinline: 'playsInline',
            poster: 'poster',
            preload: 'preload',
            profile: 'profile',
            radiogroup: 'radioGroup',
            readonly: 'readOnly',
            referrerpolicy: 'referrerPolicy',
            rel: 'rel',
            required: 'required',
            reversed: 'reversed',
            role: 'role',
            rows: 'rows',
            rowspan: 'rowSpan',
            sandbox: 'sandbox',
            scope: 'scope',
            scoped: 'scoped',
            scrolling: 'scrolling',
            seamless: 'seamless',
            selected: 'selected',
            shape: 'shape',
            size: 'size',
            sizes: 'sizes',
            span: 'span',
            spellcheck: 'spellCheck',
            src: 'src',
            srcdoc: 'srcDoc',
            srclang: 'srcLang',
            srcset: 'srcSet',
            start: 'start',
            step: 'step',
            style: 'style',
            summary: 'summary',
            tabindex: 'tabIndex',
            target: 'target',
            title: 'title',
            type: 'type',
            usemap: 'useMap',
            value: 'value',
            width: 'width',
            wmode: 'wmode',
            wrap: 'wrap',
            about: 'about',
            accentheight: 'accentHeight',
            'accent-height': 'accentHeight',
            accumulate: 'accumulate',
            additive: 'additive',
            alignmentbaseline: 'alignmentBaseline',
            'alignment-baseline': 'alignmentBaseline',
            allowreorder: 'allowReorder',
            alphabetic: 'alphabetic',
            amplitude: 'amplitude',
            arabicform: 'arabicForm',
            'arabic-form': 'arabicForm',
            ascent: 'ascent',
            attributename: 'attributeName',
            attributetype: 'attributeType',
            autoreverse: 'autoReverse',
            azimuth: 'azimuth',
            basefrequency: 'baseFrequency',
            baselineshift: 'baselineShift',
            'baseline-shift': 'baselineShift',
            baseprofile: 'baseProfile',
            bbox: 'bbox',
            begin: 'begin',
            bias: 'bias',
            by: 'by',
            calcmode: 'calcMode',
            capheight: 'capHeight',
            'cap-height': 'capHeight',
            clip: 'clip',
            clippath: 'clipPath',
            'clip-path': 'clipPath',
            clippathunits: 'clipPathUnits',
            cliprule: 'clipRule',
            'clip-rule': 'clipRule',
            color: 'color',
            colorinterpolation: 'colorInterpolation',
            'color-interpolation': 'colorInterpolation',
            colorinterpolationfilters: 'colorInterpolationFilters',
            'color-interpolation-filters': 'colorInterpolationFilters',
            colorprofile: 'colorProfile',
            'color-profile': 'colorProfile',
            colorrendering: 'colorRendering',
            'color-rendering': 'colorRendering',
            contentscripttype: 'contentScriptType',
            contentstyletype: 'contentStyleType',
            cursor: 'cursor',
            cx: 'cx',
            cy: 'cy',
            d: 'd',
            datatype: 'datatype',
            decelerate: 'decelerate',
            descent: 'descent',
            diffuseconstant: 'diffuseConstant',
            direction: 'direction',
            display: 'display',
            divisor: 'divisor',
            dominantbaseline: 'dominantBaseline',
            'dominant-baseline': 'dominantBaseline',
            dur: 'dur',
            dx: 'dx',
            dy: 'dy',
            edgemode: 'edgeMode',
            elevation: 'elevation',
            enablebackground: 'enableBackground',
            'enable-background': 'enableBackground',
            end: 'end',
            exponent: 'exponent',
            externalresourcesrequired: 'externalResourcesRequired',
            fill: 'fill',
            fillopacity: 'fillOpacity',
            'fill-opacity': 'fillOpacity',
            fillrule: 'fillRule',
            'fill-rule': 'fillRule',
            filter: 'filter',
            filterres: 'filterRes',
            filterunits: 'filterUnits',
            floodopacity: 'floodOpacity',
            'flood-opacity': 'floodOpacity',
            floodcolor: 'floodColor',
            'flood-color': 'floodColor',
            focusable: 'focusable',
            fontfamily: 'fontFamily',
            'font-family': 'fontFamily',
            fontsize: 'fontSize',
            'font-size': 'fontSize',
            fontsizeadjust: 'fontSizeAdjust',
            'font-size-adjust': 'fontSizeAdjust',
            fontstretch: 'fontStretch',
            'font-stretch': 'fontStretch',
            fontstyle: 'fontStyle',
            'font-style': 'fontStyle',
            fontvariant: 'fontVariant',
            'font-variant': 'fontVariant',
            fontweight: 'fontWeight',
            'font-weight': 'fontWeight',
            format: 'format',
            from: 'from',
            fx: 'fx',
            fy: 'fy',
            g1: 'g1',
            g2: 'g2',
            glyphname: 'glyphName',
            'glyph-name': 'glyphName',
            glyphorientationhorizontal: 'glyphOrientationHorizontal',
            'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
            glyphorientationvertical: 'glyphOrientationVertical',
            'glyph-orientation-vertical': 'glyphOrientationVertical',
            glyphref: 'glyphRef',
            gradienttransform: 'gradientTransform',
            gradientunits: 'gradientUnits',
            hanging: 'hanging',
            horizadvx: 'horizAdvX',
            'horiz-adv-x': 'horizAdvX',
            horizoriginx: 'horizOriginX',
            'horiz-origin-x': 'horizOriginX',
            ideographic: 'ideographic',
            imagerendering: 'imageRendering',
            'image-rendering': 'imageRendering',
            in2: 'in2',
            in: 'in',
            inlist: 'inlist',
            intercept: 'intercept',
            k1: 'k1',
            k2: 'k2',
            k3: 'k3',
            k4: 'k4',
            k: 'k',
            kernelmatrix: 'kernelMatrix',
            kernelunitlength: 'kernelUnitLength',
            kerning: 'kerning',
            keypoints: 'keyPoints',
            keysplines: 'keySplines',
            keytimes: 'keyTimes',
            lengthadjust: 'lengthAdjust',
            letterspacing: 'letterSpacing',
            'letter-spacing': 'letterSpacing',
            lightingcolor: 'lightingColor',
            'lighting-color': 'lightingColor',
            limitingconeangle: 'limitingConeAngle',
            local: 'local',
            markerend: 'markerEnd',
            'marker-end': 'markerEnd',
            markerheight: 'markerHeight',
            markermid: 'markerMid',
            'marker-mid': 'markerMid',
            markerstart: 'markerStart',
            'marker-start': 'markerStart',
            markerunits: 'markerUnits',
            markerwidth: 'markerWidth',
            mask: 'mask',
            maskcontentunits: 'maskContentUnits',
            maskunits: 'maskUnits',
            mathematical: 'mathematical',
            mode: 'mode',
            numoctaves: 'numOctaves',
            offset: 'offset',
            opacity: 'opacity',
            operator: 'operator',
            order: 'order',
            orient: 'orient',
            orientation: 'orientation',
            origin: 'origin',
            overflow: 'overflow',
            overlineposition: 'overlinePosition',
            'overline-position': 'overlinePosition',
            overlinethickness: 'overlineThickness',
            'overline-thickness': 'overlineThickness',
            paintorder: 'paintOrder',
            'paint-order': 'paintOrder',
            panose1: 'panose1',
            'panose-1': 'panose1',
            pathlength: 'pathLength',
            patterncontentunits: 'patternContentUnits',
            patterntransform: 'patternTransform',
            patternunits: 'patternUnits',
            pointerevents: 'pointerEvents',
            'pointer-events': 'pointerEvents',
            points: 'points',
            pointsatx: 'pointsAtX',
            pointsaty: 'pointsAtY',
            pointsatz: 'pointsAtZ',
            prefix: 'prefix',
            preservealpha: 'preserveAlpha',
            preserveaspectratio: 'preserveAspectRatio',
            primitiveunits: 'primitiveUnits',
            property: 'property',
            r: 'r',
            radius: 'radius',
            refx: 'refX',
            refy: 'refY',
            renderingintent: 'renderingIntent',
            'rendering-intent': 'renderingIntent',
            repeatcount: 'repeatCount',
            repeatdur: 'repeatDur',
            requiredextensions: 'requiredExtensions',
            requiredfeatures: 'requiredFeatures',
            resource: 'resource',
            restart: 'restart',
            result: 'result',
            results: 'results',
            rotate: 'rotate',
            rx: 'rx',
            ry: 'ry',
            scale: 'scale',
            security: 'security',
            seed: 'seed',
            shaperendering: 'shapeRendering',
            'shape-rendering': 'shapeRendering',
            slope: 'slope',
            spacing: 'spacing',
            specularconstant: 'specularConstant',
            specularexponent: 'specularExponent',
            speed: 'speed',
            spreadmethod: 'spreadMethod',
            startoffset: 'startOffset',
            stddeviation: 'stdDeviation',
            stemh: 'stemh',
            stemv: 'stemv',
            stitchtiles: 'stitchTiles',
            stopcolor: 'stopColor',
            'stop-color': 'stopColor',
            stopopacity: 'stopOpacity',
            'stop-opacity': 'stopOpacity',
            strikethroughposition: 'strikethroughPosition',
            'strikethrough-position': 'strikethroughPosition',
            strikethroughthickness: 'strikethroughThickness',
            'strikethrough-thickness': 'strikethroughThickness',
            string: 'string',
            stroke: 'stroke',
            strokedasharray: 'strokeDasharray',
            'stroke-dasharray': 'strokeDasharray',
            strokedashoffset: 'strokeDashoffset',
            'stroke-dashoffset': 'strokeDashoffset',
            strokelinecap: 'strokeLinecap',
            'stroke-linecap': 'strokeLinecap',
            strokelinejoin: 'strokeLinejoin',
            'stroke-linejoin': 'strokeLinejoin',
            strokemiterlimit: 'strokeMiterlimit',
            'stroke-miterlimit': 'strokeMiterlimit',
            strokewidth: 'strokeWidth',
            'stroke-width': 'strokeWidth',
            strokeopacity: 'strokeOpacity',
            'stroke-opacity': 'strokeOpacity',
            suppresscontenteditablewarning: 'suppressContentEditableWarning',
            suppresshydrationwarning: 'suppressHydrationWarning',
            surfacescale: 'surfaceScale',
            systemlanguage: 'systemLanguage',
            tablevalues: 'tableValues',
            targetx: 'targetX',
            targety: 'targetY',
            textanchor: 'textAnchor',
            'text-anchor': 'textAnchor',
            textdecoration: 'textDecoration',
            'text-decoration': 'textDecoration',
            textlength: 'textLength',
            textrendering: 'textRendering',
            'text-rendering': 'textRendering',
            to: 'to',
            transform: 'transform',
            typeof: 'typeof',
            u1: 'u1',
            u2: 'u2',
            underlineposition: 'underlinePosition',
            'underline-position': 'underlinePosition',
            underlinethickness: 'underlineThickness',
            'underline-thickness': 'underlineThickness',
            unicode: 'unicode',
            unicodebidi: 'unicodeBidi',
            'unicode-bidi': 'unicodeBidi',
            unicoderange: 'unicodeRange',
            'unicode-range': 'unicodeRange',
            unitsperem: 'unitsPerEm',
            'units-per-em': 'unitsPerEm',
            unselectable: 'unselectable',
            valphabetic: 'vAlphabetic',
            'v-alphabetic': 'vAlphabetic',
            values: 'values',
            vectoreffect: 'vectorEffect',
            'vector-effect': 'vectorEffect',
            version: 'version',
            vertadvy: 'vertAdvY',
            'vert-adv-y': 'vertAdvY',
            vertoriginx: 'vertOriginX',
            'vert-origin-x': 'vertOriginX',
            vertoriginy: 'vertOriginY',
            'vert-origin-y': 'vertOriginY',
            vhanging: 'vHanging',
            'v-hanging': 'vHanging',
            videographic: 'vIdeographic',
            'v-ideographic': 'vIdeographic',
            viewbox: 'viewBox',
            viewtarget: 'viewTarget',
            visibility: 'visibility',
            vmathematical: 'vMathematical',
            'v-mathematical': 'vMathematical',
            vocab: 'vocab',
            widths: 'widths',
            wordspacing: 'wordSpacing',
            'word-spacing': 'wordSpacing',
            writingmode: 'writingMode',
            'writing-mode': 'writingMode',
            x1: 'x1',
            x2: 'x2',
            x: 'x',
            xchannelselector: 'xChannelSelector',
            xheight: 'xHeight',
            'x-height': 'xHeight',
            xlinkactuate: 'xlinkActuate',
            'xlink:actuate': 'xlinkActuate',
            xlinkarcrole: 'xlinkArcrole',
            'xlink:arcrole': 'xlinkArcrole',
            xlinkhref: 'xlinkHref',
            'xlink:href': 'xlinkHref',
            xlinkrole: 'xlinkRole',
            'xlink:role': 'xlinkRole',
            xlinkshow: 'xlinkShow',
            'xlink:show': 'xlinkShow',
            xlinktitle: 'xlinkTitle',
            'xlink:title': 'xlinkTitle',
            xlinktype: 'xlinkType',
            'xlink:type': 'xlinkType',
            xmlbase: 'xmlBase',
            'xml:base': 'xmlBase',
            xmllang: 'xmlLang',
            'xml:lang': 'xmlLang',
            xmlns: 'xmlns',
            'xml:space': 'xmlSpace',
            xmlnsxlink: 'xmlnsXlink',
            'xmlns:xlink': 'xmlnsXlink',
            xmlspace: 'xmlSpace',
            y1: 'y1',
            y2: 'y2',
            y: 'y',
            ychannelselector: 'yChannelSelector',
            z: 'z',
            zoomandpan: 'zoomAndPan'
        };
        var validateProperty$1 = function() {};
        {
            var warnedProperties$1 = {};
            var EVENT_NAME_REGEX = /^on./;
            var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
            var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
            var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
            validateProperty$1 = function(tagName, name, value, eventRegistry) {
                if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
                    return true;
                }
                var lowerCasedName = name.toLowerCase();
                if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
                    error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (eventRegistry != null) {
                    var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
                    if (registrationNameDependencies.hasOwnProperty(name)) {
                        return true;
                    }
                    var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
                    if (registrationName != null) {
                        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
                        warnedProperties$1[name] = true;
                        return true;
                    }
                    if (EVENT_NAME_REGEX.test(name)) {
                        error('Unknown event handler property `%s`. It will be ignored.', name);
                        warnedProperties$1[name] = true;
                        return true;
                    }
                } else if (EVENT_NAME_REGEX.test(name)) {
                    if (INVALID_EVENT_NAME_REGEX.test(name)) {
                        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
                    }
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
                    return true;
                }
                if (lowerCasedName === 'innerhtml') {
                    error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (lowerCasedName === 'aria') {
                    error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
                    error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (typeof value === 'number' && isNaN(value)) {
                    error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
                    warnedProperties$1[name] = true;
                    return true;
                }
                var propertyInfo = getPropertyInfo(name);
                var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
                if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
                    var standardName = possibleStandardNames[lowerCasedName];
                    if (standardName !== name) {
                        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
                        warnedProperties$1[name] = true;
                        return true;
                    }
                } else if (!isReserved && name !== lowerCasedName) {
                    error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
                    if (value) {
                        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
                    } else {
                        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
                    }
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (isReserved) {
                    return true;
                }
                if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
                    warnedProperties$1[name] = true;
                    return false;
                }
                if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
                    error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
                    warnedProperties$1[name] = true;
                    return true;
                }
                return true;
            };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
            {
                var unknownProps = [];
                for(var key in props){
                    var isValid = validateProperty$1(type, key, props[key], eventRegistry);
                    if (!isValid) {
                        unknownProps.push(key);
                    }
                }
                var unknownPropString = unknownProps.map(function(prop) {
                    return '`' + prop + '`';
                }).join(', ');
                if (unknownProps.length === 1) {
                    error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
                } else if (unknownProps.length > 1) {
                    error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
                }
            }
        };
        function validateProperties$2(type, props, eventRegistry) {
            if (isCustomComponent(type, props)) {
                return;
            }
            warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {};
        {
            var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
            var msPattern = /^-ms-/;
            var hyphenPattern = /-(.)/g;
            var badStyleValueWithSemicolonPattern = /;\s*$/;
            var warnedStyleNames = {};
            var warnedStyleValues = {};
            var warnedForNaNValue = false;
            var warnedForInfinityValue = false;
            var camelize = function(string) {
                return string.replace(hyphenPattern, function(_, character) {
                    return character.toUpperCase();
                });
            };
            var warnHyphenatedStyleName = function(name) {
                if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
                    return;
                }
                warnedStyleNames[name] = true;
                error('Unsupported style property %s. Did you mean %s?', name, camelize(name.replace(msPattern, 'ms-')));
            };
            var warnBadVendoredStyleName = function(name) {
                if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
                    return;
                }
                warnedStyleNames[name] = true;
                error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
            };
            var warnStyleValueWithSemicolon = function(name, value) {
                if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
                    return;
                }
                warnedStyleValues[value] = true;
                error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
            };
            var warnStyleValueIsNaN = function(name, value) {
                if (warnedForNaNValue) {
                    return;
                }
                warnedForNaNValue = true;
                error('`NaN` is an invalid value for the `%s` css style property.', name);
            };
            var warnStyleValueIsInfinity = function(name, value) {
                if (warnedForInfinityValue) {
                    return;
                }
                warnedForInfinityValue = true;
                error('`Infinity` is an invalid value for the `%s` css style property.', name);
            };
            warnValidStyle = function(name, value) {
                if (name.indexOf('-') > -1) {
                    warnHyphenatedStyleName(name);
                } else if (badVendoredStyleNamePattern.test(name)) {
                    warnBadVendoredStyleName(name);
                } else if (badStyleValueWithSemicolonPattern.test(value)) {
                    warnStyleValueWithSemicolon(name, value);
                }
                if (typeof value === 'number') {
                    if (isNaN(value)) {
                        warnStyleValueIsNaN(name, value);
                    } else if (!isFinite(value)) {
                        warnStyleValueIsInfinity(name, value);
                    }
                }
            };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
            {
                checkHtmlStringCoercion(string);
            }
            var str = '' + string;
            var match = matchHtmlRegExp.exec(str);
            if (!match) {
                return str;
            }
            var escape;
            var html = '';
            var index;
            var lastIndex = 0;
            for(index = match.index; index < str.length; index++){
                switch(str.charCodeAt(index)){
                    case 34:
                        escape = '&quot;';
                        break;
                    case 38:
                        escape = '&amp;';
                        break;
                    case 39:
                        escape = '&#x27;';
                        break;
                    case 60:
                        escape = '&lt;';
                        break;
                    case 62:
                        escape = '&gt;';
                        break;
                    default:
                        continue;
                }
                if (lastIndex !== index) {
                    html += str.substring(lastIndex, index);
                }
                lastIndex = index + 1;
                html += escape;
            }
            return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
            if (typeof text === 'boolean' || typeof text === 'number') {
                return '' + text;
            }
            return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
            return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
            {
                if (!didWarn && isJavaScriptProtocol.test(url)) {
                    didWarn = true;
                    error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
                }
            }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
            return isArrayImpl(a);
        }
        var assign = Object.assign;
        function validatePreloadResourceDifference(originalProps, originalImplicit, latestProps, latestImplicit) {
            {
                var href = originalProps.href;
                var originalWarningName = getResourceNameForWarning('preload', originalProps, originalImplicit);
                var latestWarningName = getResourceNameForWarning('preload', latestProps, latestImplicit);
                if (latestProps.as !== originalProps.as) {
                    error('A %s is using the same href "%s" as a %s. This is always an error and React will only keep the first preload' + ' for any given href, discarding subsequent instances. To fix, find where you are using this href in link' + ' tags or in calls to ReactDOM.preload() or ReactDOM.preinit() and either make the Resource types agree or' + ' update the hrefs to be distinct for different Resource types.', latestWarningName, href, originalWarningName);
                } else {
                    var missingProps = null;
                    var extraProps = null;
                    var differentProps = null;
                    if (originalProps.media != null && latestProps.media == null) {
                        missingProps = missingProps || {};
                        missingProps.media = originalProps.media;
                    }
                    for(var propName in latestProps){
                        var propValue = latestProps[propName];
                        var originalValue = originalProps[propName];
                        if (propValue != null && propValue !== originalValue) {
                            if (originalValue == null) {
                                extraProps = extraProps || {};
                                extraProps[propName] = propValue;
                            } else {
                                differentProps = differentProps || {};
                                differentProps[propName] = {
                                    original: originalValue,
                                    latest: propValue
                                };
                            }
                        }
                    }
                    if (missingProps || extraProps || differentProps) {
                        warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                    }
                }
            }
        }
        function validateStyleResourceDifference(originalProps, latestProps) {
            {
                var href = originalProps.href;
                var originalWarningName = getResourceNameForWarning('style', originalProps, false);
                var latestWarningName = getResourceNameForWarning('style', latestProps, false);
                var missingProps = null;
                var extraProps = null;
                var differentProps = null;
                if (originalProps.media != null && latestProps.media == null) {
                    missingProps = missingProps || {};
                    missingProps.media = originalProps.media;
                }
                for(var propName in latestProps){
                    var propValue = latestProps[propName];
                    var originalValue = originalProps[propName];
                    if (propValue != null && propValue !== originalValue) {
                        propName = propName === 'data-precedence' ? 'precedence' : propName;
                        if (originalValue == null) {
                            extraProps = extraProps || {};
                            extraProps[propName] = propValue;
                        } else {
                            differentProps = differentProps || {};
                            differentProps[propName] = {
                                original: originalValue,
                                latest: propValue
                            };
                        }
                    }
                }
                if (missingProps || extraProps || differentProps) {
                    warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                }
            }
        }
        function validateScriptResourceDifference(originalProps, latestProps) {
            {
                var src = originalProps.src;
                var originalWarningName = getResourceNameForWarning('script', originalProps, false);
                var latestWarningName = getResourceNameForWarning('script', latestProps, false);
                var extraProps = null;
                var differentProps = null;
                for(var propName in latestProps){
                    var propValue = latestProps[propName];
                    var originalValue = originalProps[propName];
                    if (propValue != null && propValue !== originalValue) {
                        if (originalValue == null) {
                            extraProps = extraProps || {};
                            extraProps[propName] = propValue;
                        } else {
                            differentProps = differentProps || {};
                            differentProps[propName] = {
                                original: originalValue,
                                latest: propValue
                            };
                        }
                    }
                }
                if (extraProps || differentProps) {
                    warnDifferentProps(src, 'src', originalWarningName, latestWarningName, extraProps, null, differentProps);
                }
            }
        }
        function validateStyleAndHintProps(preloadProps, styleProps, implicitPreload) {
            {
                var href = preloadProps.href;
                var originalWarningName = getResourceNameForWarning('preload', preloadProps, implicitPreload);
                var latestWarningName = getResourceNameForWarning('style', styleProps, false);
                if (preloadProps.as !== 'style') {
                    error('While creating a %s for href "%s" a %s for this same href was found. When preloading a stylesheet the' + ' "as" prop must be of type "style". This most likely ocurred by rendering a preload link with an incorrect' + ' "as" prop or by calling ReactDOM.preload with an incorrect "as" option.', latestWarningName, href, originalWarningName);
                }
                var missingProps = null;
                var extraProps = null;
                var differentProps = null;
                for(var propName in styleProps){
                    var styleValue = styleProps[propName];
                    var preloadValue = preloadProps[propName];
                    switch(propName){
                        case 'crossOrigin':
                        case 'referrerPolicy':
                        case 'media':
                        case 'title':
                            {
                                if (preloadValue !== styleValue && !(preloadValue == null && styleValue == null)) {
                                    if (styleValue == null) {
                                        missingProps = missingProps || {};
                                        missingProps[propName] = preloadValue;
                                    } else if (preloadValue == null) {
                                        extraProps = extraProps || {};
                                        extraProps[propName] = styleValue;
                                    } else {
                                        differentProps = differentProps || {};
                                        differentProps[propName] = {
                                            original: preloadValue,
                                            latest: styleValue
                                        };
                                    }
                                }
                            }
                    }
                }
                if (missingProps || extraProps || differentProps) {
                    warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                }
            }
        }
        function validateScriptAndHintProps(preloadProps, scriptProps, implicitPreload) {
            {
                var href = preloadProps.href;
                var originalWarningName = getResourceNameForWarning('preload', preloadProps, implicitPreload);
                var latestWarningName = getResourceNameForWarning('script', scriptProps, false);
                if (preloadProps.as !== 'script') {
                    error('While creating a %s for href "%s" a %s for this same url was found. When preloading a script the' + ' "as" prop must be of type "script". This most likely ocurred by rendering a preload link with an incorrect' + ' "as" prop or by calling ReactDOM.preload with an incorrect "as" option.', latestWarningName, href, originalWarningName);
                }
                var missingProps = null;
                var extraProps = null;
                var differentProps = null;
                for(var propName in scriptProps){
                    var scriptValue = scriptProps[propName];
                    var preloadValue = preloadProps[propName];
                    switch(propName){
                        case 'crossOrigin':
                        case 'referrerPolicy':
                        case 'integrity':
                            {
                                if (preloadValue !== scriptValue && !(preloadValue == null && scriptValue == null)) {
                                    if (scriptValue == null) {
                                        missingProps = missingProps || {};
                                        missingProps[propName] = preloadValue;
                                    } else if (preloadValue == null) {
                                        extraProps = extraProps || {};
                                        extraProps[propName] = scriptValue;
                                    } else {
                                        differentProps = differentProps || {};
                                        differentProps[propName] = {
                                            original: preloadValue,
                                            latest: scriptValue
                                        };
                                    }
                                }
                            }
                    }
                }
                if (missingProps || extraProps || differentProps) {
                    warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                }
            }
        }
        function warnDifferentProps(url, urlPropKey, originalName, latestName, extraProps, missingProps, differentProps) {
            {
                var juxtaposedNameStatement = latestName === originalName ? 'an earlier instance of this Resource' : "a " + originalName + " with the same " + urlPropKey;
                var comparisonStatement = '';
                if (missingProps !== null && typeof missingProps === 'object') {
                    for(var propName in missingProps){
                        comparisonStatement += "\n  " + propName + ": missing or null in latest props, \"" + missingProps[propName] + "\" in original props";
                    }
                }
                if (extraProps !== null && typeof extraProps === 'object') {
                    for(var _propName in extraProps){
                        comparisonStatement += "\n  " + _propName + ": \"" + extraProps[_propName] + "\" in latest props, missing or null in original props";
                    }
                }
                if (differentProps !== null && typeof differentProps === 'object') {
                    for(var _propName2 in differentProps){
                        comparisonStatement += "\n  " + _propName2 + ": \"" + differentProps[_propName2].latest + "\" in latest props, \"" + differentProps[_propName2].original + "\" in original props";
                    }
                }
                error('A %s with %s "%s" has props that disagree with those found on %s. Resources always use the props' + ' that were provided the first time they are encountered so any differences will be ignored. Please' + ' update Resources that share an %s to have props that agree. The differences are described below.%s', latestName, urlPropKey, url, juxtaposedNameStatement, urlPropKey, comparisonStatement);
            }
        }
        function getResourceNameForWarning(type, props, implicit) {
            {
                switch(type){
                    case 'style':
                        {
                            return 'style Resource';
                        }
                    case 'script':
                        {
                            return 'script Resource';
                        }
                    case 'preload':
                        {
                            if (implicit) {
                                return "preload for a " + props.as + " Resource";
                            }
                            return "preload Resource (as \"" + props.as + "\")";
                        }
                }
            }
            return 'Resource';
        }
        function validateLinkPropsForStyleResource(props) {
            {
                var href = props.href, onLoad = props.onLoad, onError = props.onError, disabled = props.disabled;
                var allProps = [
                    'onLoad',
                    'onError',
                    'disabled'
                ];
                var includedProps = [];
                if (onLoad) includedProps.push('onLoad');
                if (onError) includedProps.push('onError');
                if (disabled != null) includedProps.push('disabled');
                var allPropsUnionPhrase = propNamesListJoin(allProps, 'or');
                var includedPropsPhrase = propNamesListJoin(includedProps, 'and');
                includedPropsPhrase += includedProps.length === 1 ? ' prop' : ' props';
                if (includedProps.length) {
                    error('A link (rel="stylesheet") element with href "%s" has the precedence prop but also included the %s.' + ' When using %s React will opt out of Resource behavior. If you meant for this' + ' element to be treated as a Resource remove the %s. Otherwise remove the precedence prop.', href, includedPropsPhrase, allPropsUnionPhrase, includedPropsPhrase);
                    return true;
                }
            }
            return false;
        }
        function propNamesListJoin(list, combinator) {
            switch(list.length){
                case 0:
                    return '';
                case 1:
                    return list[0];
                case 2:
                    return list[0] + ' ' + combinator + ' ' + list[1];
                default:
                    return list.slice(0, -1).join(', ') + ', ' + combinator + ' ' + list[list.length - 1];
            }
        }
        function validateLinkPropsForPreloadResource(linkProps) {
            {
                var href = linkProps.href, as = linkProps.as;
                if (as === 'font') {
                    var name = getResourceNameForWarning('preload', linkProps, false);
                    if (!hasOwnProperty.call(linkProps, 'crossOrigin')) {
                        error('A %s with href "%s" did not specify the crossOrigin prop. Font preloads must always use' + ' anonymouse CORS mode. To fix add an empty string, "anonymous", or any other string' + ' value except "use-credentials" for the crossOrigin prop of all font preloads.', name, href);
                    } else if (linkProps.crossOrigin === 'use-credentials') {
                        error('A %s with href "%s" specified a crossOrigin value of "use-credentials". Font preloads must always use' + ' anonymouse CORS mode. To fix use an empty string, "anonymous", or any other string' + ' value except "use-credentials" for the crossOrigin prop of all font preloads.', name, href);
                    }
                }
            }
        }
        function validatePreloadArguments(href, options) {
            {
                if (!href || typeof href !== 'string') {
                    var typeOfArg = getValueDescriptorExpectingObjectForWarning(href);
                    error('ReactDOM.preload() expected the first argument to be a string representing an href but found %s instead.', typeOfArg);
                } else if (typeof options !== 'object' || options === null) {
                    var _typeOfArg = getValueDescriptorExpectingObjectForWarning(options);
                    error('ReactDOM.preload() expected the second argument to be an options argument containing at least an "as" property' + ' specifying the Resource type. It found %s instead. The href for the preload call where this warning originated is "%s".', _typeOfArg, href);
                } else {
                    var as = options.as;
                    switch(as){
                        case 'font':
                            {
                                if (options.crossOrigin === 'use-credentials') {
                                    error('ReactDOM.preload() was called with an "as" type of "font" and with a "crossOrigin" option of "use-credentials".' + ' Fonts preloading must use crossOrigin "anonymous" to be functional. Please update your font preload to omit' + ' the crossOrigin option or change it to any other value than "use-credentials" (Browsers default all other values' + ' to anonymous mode). The href for the preload call where this warning originated is "%s"', href);
                                }
                                break;
                            }
                        case 'script':
                        case 'style':
                            {
                                break;
                            }
                        default:
                            {
                                var typeOfAs = getValueDescriptorExpectingEnumForWarning(as);
                                error('ReactDOM.preload() expected a valid "as" type in the options (second) argument but found %s instead.' + ' Please use one of the following valid values instead: %s. The href for the preload call where this' + ' warning originated is "%s".', typeOfAs, '"style", "font", or "script"', href);
                            }
                    }
                }
            }
        }
        function validatePreinitArguments(href, options) {
            {
                if (!href || typeof href !== 'string') {
                    var typeOfArg = getValueDescriptorExpectingObjectForWarning(href);
                    error('ReactDOM.preinit() expected the first argument to be a string representing an href but found %s instead.', typeOfArg);
                } else if (typeof options !== 'object' || options === null) {
                    var _typeOfArg2 = getValueDescriptorExpectingObjectForWarning(options);
                    error('ReactDOM.preinit() expected the second argument to be an options argument containing at least an "as" property' + ' specifying the Resource type. It found %s instead. The href for the preload call where this warning originated is "%s".', _typeOfArg2, href);
                } else {
                    var as = options.as;
                    switch(as){
                        case 'style':
                        case 'script':
                            {
                                break;
                            }
                        default:
                            {
                                var typeOfAs = getValueDescriptorExpectingEnumForWarning(as);
                                error('ReactDOM.preinit() expected the second argument to be an options argument containing at least an "as" property' + ' specifying the Resource type. It found %s instead. Currently, valid resource types for for preinit are "style"' + ' and "script". The href for the preinit call where this warning originated is "%s".', typeOfAs, href);
                            }
                    }
                }
            }
        }
        function getValueDescriptorExpectingObjectForWarning(thing) {
            return thing === null ? 'null' : thing === undefined ? 'undefined' : thing === '' ? 'an empty string' : "something with type \"" + typeof thing + "\"";
        }
        function getValueDescriptorExpectingEnumForWarning(thing) {
            return thing === null ? 'null' : thing === undefined ? 'undefined' : thing === '' ? 'an empty string' : typeof thing === 'string' ? JSON.stringify(thing) : "something with type \"" + typeof thing + "\"";
        }
        function createResources() {
            return {
                preloadsMap: new Map(),
                stylesMap: new Map(),
                scriptsMap: new Map(),
                headsMap: new Map(),
                charset: null,
                bases: new Set(),
                preconnects: new Set(),
                fontPreloads: new Set(),
                precedences: new Map(),
                usedStylePreloads: new Set(),
                scripts: new Set(),
                usedScriptPreloads: new Set(),
                explicitStylePreloads: new Set(),
                explicitScriptPreloads: new Set(),
                headResources: new Set(),
                structuredMetaKeys: new Map(),
                boundaryResources: null
            };
        }
        function createBoundaryResources() {
            return new Set();
        }
        var currentResources = null;
        var currentResourcesStack = [];
        function prepareToRenderResources(resources) {
            currentResourcesStack.push(currentResources);
            currentResources = resources;
        }
        function finishRenderingResources() {
            currentResources = currentResourcesStack.pop();
        }
        function setCurrentlyRenderingBoundaryResourcesTarget(resources, boundaryResources) {
            resources.boundaryResources = boundaryResources;
        }
        var ReactDOMServerDispatcher = {
            preload: preload,
            preinit: preinit
        };
        function preload(href, options) {
            if (!currentResources) {
                return;
            }
            var resources = currentResources;
            {
                validatePreloadArguments(href, options);
            }
            if (typeof href === 'string' && href && typeof options === 'object' && options !== null) {
                var as = options.as;
                var resource = resources.preloadsMap.get(href);
                if (resource) {
                    {
                        var originallyImplicit = resource._dev_implicit_construction === true;
                        var latestProps = preloadPropsFromPreloadOptions(href, as, options);
                        validatePreloadResourceDifference(resource.props, originallyImplicit, latestProps, false);
                    }
                } else {
                    resource = createPreloadResource(resources, href, as, preloadPropsFromPreloadOptions(href, as, options));
                }
                switch(as){
                    case 'font':
                        {
                            resources.fontPreloads.add(resource);
                            break;
                        }
                    case 'style':
                        {
                            resources.explicitStylePreloads.add(resource);
                            break;
                        }
                    case 'script':
                        {
                            resources.explicitScriptPreloads.add(resource);
                            break;
                        }
                }
            }
        }
        function preinit(href, options) {
            if (!currentResources) {
                return;
            }
            preinitImpl(currentResources, href, options);
        }
        function preinitImpl(resources, href, options) {
            {
                validatePreinitArguments(href, options);
            }
            if (typeof href === 'string' && href && typeof options === 'object' && options !== null) {
                var as = options.as;
                switch(as){
                    case 'style':
                        {
                            var resource = resources.stylesMap.get(href);
                            if (resource) {
                                {
                                    var latestProps = stylePropsFromPreinitOptions(href, resource.precedence, options);
                                    validateStyleResourceDifference(resource.props, latestProps);
                                }
                            } else {
                                var precedence = options.precedence || 'default';
                                var resourceProps = stylePropsFromPreinitOptions(href, precedence, options);
                                resource = createStyleResource(resources, href, precedence, resourceProps);
                            }
                            resource.set.add(resource);
                            resources.explicitStylePreloads.add(resource.hint);
                            return;
                        }
                    case 'script':
                        {
                            var src = href;
                            var _resource = resources.scriptsMap.get(src);
                            if (_resource) {
                                {
                                    var _latestProps = scriptPropsFromPreinitOptions(src, options);
                                    validateScriptResourceDifference(_resource.props, _latestProps);
                                }
                            } else {
                                var scriptProps = scriptPropsFromPreinitOptions(src, options);
                                _resource = createScriptResource(resources, src, scriptProps);
                                resources.scripts.add(_resource);
                            }
                            return;
                        }
                }
            }
        }
        function preloadPropsFromPreloadOptions(href, as, options) {
            return {
                href: href,
                rel: 'preload',
                as: as,
                crossOrigin: as === 'font' ? '' : options.crossOrigin,
                integrity: options.integrity
            };
        }
        function preloadPropsFromRawProps(href, as, rawProps) {
            var props = assign({}, rawProps);
            props.href = href;
            props.rel = 'preload';
            props.as = as;
            if (as === 'font') {
                props.crossOrigin = '';
            }
            return props;
        }
        function preloadAsStylePropsFromProps(href, props) {
            return {
                rel: 'preload',
                as: 'style',
                href: href,
                crossOrigin: props.crossOrigin,
                integrity: props.integrity,
                media: props.media,
                hrefLang: props.hrefLang,
                referrerPolicy: props.referrerPolicy
            };
        }
        function preloadAsScriptPropsFromProps(href, props) {
            return {
                rel: 'preload',
                as: 'script',
                href: href,
                crossOrigin: props.crossOrigin,
                integrity: props.integrity,
                referrerPolicy: props.referrerPolicy
            };
        }
        function createPreloadResource(resources, href, as, props) {
            var preloadsMap = resources.preloadsMap;
            {
                if (preloadsMap.has(href)) {
                    error('createPreloadResource was called when a preload Resource matching the same href already exists. This is a bug in React.');
                }
            }
            var resource = {
                type: 'preload',
                as: as,
                href: href,
                flushed: false,
                props: props
            };
            preloadsMap.set(href, resource);
            return resource;
        }
        function stylePropsFromRawProps(href, precedence, rawProps) {
            var props = assign({}, rawProps);
            props.href = href;
            props.rel = 'stylesheet';
            props['data-precedence'] = precedence;
            delete props.precedence;
            return props;
        }
        function stylePropsFromPreinitOptions(href, precedence, options) {
            return {
                rel: 'stylesheet',
                href: href,
                'data-precedence': precedence,
                crossOrigin: options.crossOrigin
            };
        }
        function createStyleResource(resources, href, precedence, props) {
            {
                if (resources.stylesMap.has(href)) {
                    error('createStyleResource was called when a style Resource matching the same href already exists. This is a bug in React.');
                }
            }
            var stylesMap = resources.stylesMap, preloadsMap = resources.preloadsMap, precedences = resources.precedences;
            var precedenceSet = precedences.get(precedence);
            if (!precedenceSet) {
                precedenceSet = new Set();
                precedences.set(precedence, precedenceSet);
            }
            var hint = preloadsMap.get(href);
            if (hint) {
                adoptPreloadPropsForStyleProps(props, hint.props);
                {
                    validateStyleAndHintProps(hint.props, props, hint._dev_implicit_construction);
                }
            } else {
                var preloadResourceProps = preloadAsStylePropsFromProps(href, props);
                hint = createPreloadResource(resources, href, 'style', preloadResourceProps);
                {
                    hint._dev_implicit_construction = true;
                }
                resources.explicitStylePreloads.add(hint);
            }
            var resource = {
                type: 'style',
                href: href,
                precedence: precedence,
                flushed: false,
                inShell: false,
                props: props,
                hint: hint,
                set: precedenceSet
            };
            stylesMap.set(href, resource);
            return resource;
        }
        function adoptPreloadPropsForStyleProps(resourceProps, preloadProps) {
            if (resourceProps.crossOrigin == null) resourceProps.crossOrigin = preloadProps.crossOrigin;
            if (resourceProps.referrerPolicy == null) resourceProps.referrerPolicy = preloadProps.referrerPolicy;
            if (resourceProps.title == null) resourceProps.title = preloadProps.title;
        }
        function scriptPropsFromPreinitOptions(src, options) {
            return {
                src: src,
                async: true,
                crossOrigin: options.crossOrigin,
                integrity: options.integrity
            };
        }
        function scriptPropsFromRawProps(src, rawProps) {
            var props = assign({}, rawProps);
            props.src = src;
            return props;
        }
        function createScriptResource(resources, src, props) {
            {
                if (resources.scriptsMap.has(src)) {
                    error('createScriptResource was called when a script Resource matching the same src already exists. This is a bug in React.');
                }
            }
            var scriptsMap = resources.scriptsMap, preloadsMap = resources.preloadsMap;
            var hint = preloadsMap.get(src);
            if (hint) {
                adoptPreloadPropsForScriptProps(props, hint.props);
                {
                    validateScriptAndHintProps(hint.props, props, hint._dev_implicit_construction);
                }
            } else {
                var preloadResourceProps = preloadAsScriptPropsFromProps(src, props);
                hint = createPreloadResource(resources, src, 'script', preloadResourceProps);
                {
                    hint._dev_implicit_construction = true;
                }
                resources.explicitScriptPreloads.add(hint);
            }
            var resource = {
                type: 'script',
                src: src,
                flushed: false,
                props: props,
                hint: hint
            };
            scriptsMap.set(src, resource);
            return resource;
        }
        function adoptPreloadPropsForScriptProps(resourceProps, preloadProps) {
            if (resourceProps.crossOrigin == null) resourceProps.crossOrigin = preloadProps.crossOrigin;
            if (resourceProps.referrerPolicy == null) resourceProps.referrerPolicy = preloadProps.referrerPolicy;
            if (resourceProps.integrity == null) resourceProps.integrity = preloadProps.integrity;
        }
        function titlePropsFromRawProps(child, rawProps) {
            var props = assign({}, rawProps);
            props.children = child;
            return props;
        }
        function resourcesFromElement(type, props) {
            if (!currentResources) {
                throw new Error('"currentResources" was expected to exist. This is a bug in React.');
            }
            var resources = currentResources;
            switch(type){
                case 'title':
                    {
                        var child = props.children;
                        if (Array.isArray(child) && child.length === 1) {
                            child = child[0];
                        }
                        if (typeof child === 'string' || typeof child === 'number') {
                            var key = 'title::' + child;
                            var resource = resources.headsMap.get(key);
                            if (!resource) {
                                resource = {
                                    type: 'title',
                                    props: titlePropsFromRawProps(child, props),
                                    flushed: false
                                };
                                resources.headsMap.set(key, resource);
                                resources.headResources.add(resource);
                            }
                        }
                        return true;
                    }
                case 'meta':
                    {
                        var _key, propertyPath;
                        if (typeof props.charSet === 'string') {
                            _key = 'charSet';
                        } else if (typeof props.content === 'string') {
                            var contentKey = '::' + props.content;
                            if (typeof props.httpEquiv === 'string') {
                                _key = 'httpEquiv::' + props.httpEquiv + contentKey;
                            } else if (typeof props.name === 'string') {
                                _key = 'name::' + props.name + contentKey;
                            } else if (typeof props.itemProp === 'string') {
                                _key = 'itemProp::' + props.itemProp + contentKey;
                            } else if (typeof props.property === 'string') {
                                var property = props.property;
                                _key = 'property::' + property + contentKey;
                                propertyPath = property;
                                var parentPath = property.split(':').slice(0, -1).join(':');
                                var parentResource = resources.structuredMetaKeys.get(parentPath);
                                if (parentResource) {
                                    _key = parentResource.key + '::child::' + _key;
                                }
                            }
                        }
                        if (_key) {
                            if (!resources.headsMap.has(_key)) {
                                var _resource2 = {
                                    type: 'meta',
                                    key: _key,
                                    props: assign({}, props),
                                    flushed: false
                                };
                                resources.headsMap.set(_key, _resource2);
                                if (_key === 'charSet') {
                                    resources.charset = _resource2;
                                } else {
                                    if (propertyPath) {
                                        resources.structuredMetaKeys.set(propertyPath, _resource2);
                                    }
                                    resources.headResources.add(_resource2);
                                }
                            }
                        }
                        return true;
                    }
                case 'base':
                    {
                        var target = props.target, href = props.href;
                        var _key2 = 'base';
                        _key2 += typeof href === 'string' ? "[href=\"" + href + "\"]" : ':not([href])';
                        _key2 += typeof target === 'string' ? "[target=\"" + target + "\"]" : ':not([target])';
                        if (!resources.headsMap.has(_key2)) {
                            var _resource3 = {
                                type: 'base',
                                props: assign({}, props),
                                flushed: false
                            };
                            resources.headsMap.set(_key2, _resource3);
                            resources.bases.add(_resource3);
                        }
                        return true;
                    }
            }
            return false;
        }
        function resourcesFromLink(props) {
            if (!currentResources) {
                throw new Error('"currentResources" was expected to exist. This is a bug in React.');
            }
            var resources = currentResources;
            var rel = props.rel, href = props.href;
            if (!href || typeof href !== 'string' || !rel || typeof rel !== 'string') {
                return false;
            }
            var key = '';
            switch(rel){
                case 'stylesheet':
                    {
                        var onLoad = props.onLoad, onError = props.onError, precedence = props.precedence, disabled = props.disabled;
                        if (typeof precedence !== 'string' || onLoad || onError || disabled != null) {
                            {
                                validateLinkPropsForStyleResource(props);
                            }
                            var preloadResource = resources.preloadsMap.get(href);
                            if (!preloadResource) {
                                preloadResource = createPreloadResource(resources, href, 'style', preloadAsStylePropsFromProps(href, props));
                                {
                                    preloadResource._dev_implicit_construction = true;
                                }
                                resources.usedStylePreloads.add(preloadResource);
                            }
                            return false;
                        } else {
                            var _resource4 = resources.stylesMap.get(href);
                            if (_resource4) {
                                {
                                    var resourceProps = stylePropsFromRawProps(href, precedence, props);
                                    adoptPreloadPropsForStyleProps(resourceProps, _resource4.hint.props);
                                    validateStyleResourceDifference(_resource4.props, resourceProps);
                                }
                            } else {
                                var _resourceProps = stylePropsFromRawProps(href, precedence, props);
                                _resource4 = createStyleResource(currentResources, href, precedence, _resourceProps);
                                resources.usedStylePreloads.add(_resource4.hint);
                            }
                            if (resources.boundaryResources) {
                                resources.boundaryResources.add(_resource4);
                            } else {
                                _resource4.set.add(_resource4);
                            }
                            return true;
                        }
                    }
                case 'preload':
                    {
                        var as = props.as;
                        switch(as){
                            case 'script':
                            case 'style':
                            case 'font':
                                {
                                    {
                                        validateLinkPropsForPreloadResource(props);
                                    }
                                    var _resource5 = resources.preloadsMap.get(href);
                                    if (_resource5) {
                                        {
                                            var originallyImplicit = _resource5._dev_implicit_construction === true;
                                            var latestProps = preloadPropsFromRawProps(href, as, props);
                                            validatePreloadResourceDifference(_resource5.props, originallyImplicit, latestProps, false);
                                        }
                                    } else {
                                        _resource5 = createPreloadResource(resources, href, as, preloadPropsFromRawProps(href, as, props));
                                        switch(as){
                                            case 'script':
                                                {
                                                    resources.explicitScriptPreloads.add(_resource5);
                                                    break;
                                                }
                                            case 'style':
                                                {
                                                    resources.explicitStylePreloads.add(_resource5);
                                                    break;
                                                }
                                            case 'font':
                                                {
                                                    resources.fontPreloads.add(_resource5);
                                                    break;
                                                }
                                        }
                                    }
                                    return true;
                                }
                        }
                        break;
                    }
            }
            if (props.onLoad || props.onError) {
                return true;
            }
            var sizes = typeof props.sizes === 'string' ? props.sizes : '';
            var media = typeof props.media === 'string' ? props.media : '';
            key = 'rel:' + rel + '::href:' + href + '::sizes:' + sizes + '::media:' + media;
            var resource = resources.headsMap.get(key);
            if (!resource) {
                resource = {
                    type: 'link',
                    props: assign({}, props),
                    flushed: false
                };
                resources.headsMap.set(key, resource);
                switch(rel){
                    case 'preconnect':
                    case 'dns-prefetch':
                        {
                            resources.preconnects.add(resource);
                            break;
                        }
                    default:
                        {
                            resources.headResources.add(resource);
                        }
                }
            }
            return true;
        }
        function resourcesFromScript(props) {
            if (!currentResources) {
                throw new Error('"currentResources" was expected to exist. This is a bug in React.');
            }
            var resources = currentResources;
            var src = props.src, async = props.async, onLoad = props.onLoad, onError = props.onError;
            if (!src || typeof src !== 'string') {
                return false;
            }
            if (async) {
                if (onLoad || onError) {
                    var preloadResource = resources.preloadsMap.get(src);
                    if (!preloadResource) {
                        preloadResource = createPreloadResource(resources, src, 'script', preloadAsScriptPropsFromProps(src, props));
                        {
                            preloadResource._dev_implicit_construction = true;
                        }
                        resources.usedScriptPreloads.add(preloadResource);
                    }
                } else {
                    var resource = resources.scriptsMap.get(src);
                    if (resource) {
                        {
                            var latestProps = scriptPropsFromRawProps(src, props);
                            adoptPreloadPropsForScriptProps(latestProps, resource.hint.props);
                            validateScriptResourceDifference(resource.props, latestProps);
                        }
                    } else {
                        var resourceProps = scriptPropsFromRawProps(src, props);
                        resource = createScriptResource(resources, src, resourceProps);
                        resources.scripts.add(resource);
                    }
                }
                return true;
            }
            return false;
        }
        function hoistResources(resources, source) {
            var currentBoundaryResources = resources.boundaryResources;
            if (currentBoundaryResources) {
                source.forEach(function(resource) {
                    return currentBoundaryResources.add(resource);
                });
                source.clear();
            }
        }
        function hoistResourcesToRoot(resources, boundaryResources) {
            boundaryResources.forEach(function(resource) {
                return resource.set.add(resource);
            });
            boundaryResources.clear();
        }
        var clientRenderBoundary = '$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};';
        var completeBoundary = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};';
        var completeBoundaryWithStyles = '$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};';
        var completeSegment = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};';
        var ReactDOMSharedInternals = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var ReactDOMCurrentDispatcher = ReactDOMSharedInternals.Dispatcher;
        function prepareToRender(resources) {
            prepareToRenderResources(resources);
            var previousHostDispatcher = ReactDOMCurrentDispatcher.current;
            ReactDOMCurrentDispatcher.current = ReactDOMServerDispatcher;
            return previousHostDispatcher;
        }
        function cleanupAfterRender(previousDispatcher) {
            finishRenderingResources();
            ReactDOMCurrentDispatcher.current = previousDispatcher;
        }
        var ScriptStreamingFormat = 0;
        var startInlineScript = stringToPrecomputedChunk('<script>');
        var endInlineScript = stringToPrecomputedChunk('</script>');
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var scriptIntegirty = stringToPrecomputedChunk('" integrity="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
        function escapeBootstrapScriptContent(scriptText) {
            {
                checkHtmlStringCoercion(scriptText);
            }
            return ('' + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix, s, suffix) {
            return "" + prefix + (s === 's' ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules, externalRuntimeConfig) {
            var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
            var inlineScriptWithNonce = nonce === undefined ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
            var bootstrapChunks = [];
            var externalRuntimeDesc = null;
            var streamingFormat = ScriptStreamingFormat;
            if (bootstrapScriptContent !== undefined) {
                bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
            }
            if (bootstrapScripts !== undefined) {
                for(var i = 0; i < bootstrapScripts.length; i++){
                    var scriptConfig = bootstrapScripts[i];
                    var src = typeof scriptConfig === 'string' ? scriptConfig : scriptConfig.src;
                    var integrity = typeof scriptConfig === 'string' ? undefined : scriptConfig.integrity;
                    bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(src)));
                    if (integrity) {
                        bootstrapChunks.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(integrity)));
                    }
                    bootstrapChunks.push(endAsyncScript);
                }
            }
            if (bootstrapModules !== undefined) {
                for(var _i = 0; _i < bootstrapModules.length; _i++){
                    var _scriptConfig = bootstrapModules[_i];
                    var _src = typeof _scriptConfig === 'string' ? _scriptConfig : _scriptConfig.src;
                    var _integrity = typeof _scriptConfig === 'string' ? undefined : _scriptConfig.integrity;
                    bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(_src)));
                    if (_integrity) {
                        bootstrapChunks.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(_integrity)));
                    }
                    bootstrapChunks.push(endAsyncScript);
                }
            }
            return {
                bootstrapChunks: bootstrapChunks,
                placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
                segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
                boundaryPrefix: idPrefix + 'B:',
                idPrefix: idPrefix,
                nextSuspenseID: 0,
                streamingFormat: streamingFormat,
                startInlineScript: inlineScriptWithNonce,
                sentCompleteSegmentFunction: false,
                sentCompleteBoundaryFunction: false,
                sentClientRenderFunction: false,
                sentStyleInsertionFunction: false,
                externalRuntimeConfig: externalRuntimeDesc
            };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue, noscriptTagInScope) {
            return {
                insertionMode: insertionMode,
                selectedValue: selectedValue,
                noscriptTagInScope: noscriptTagInScope
            };
        }
        function getChildFormatContext(parentContext, type, props) {
            switch(type){
                case 'noscript':
                    return createFormatContext(HTML_MODE, null, true);
                case 'select':
                    return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue, parentContext.noscriptTagInScope);
                case 'svg':
                    return createFormatContext(SVG_MODE, null, parentContext.noscriptTagInScope);
                case 'math':
                    return createFormatContext(MATHML_MODE, null, parentContext.noscriptTagInScope);
                case 'foreignObject':
                    return createFormatContext(HTML_MODE, null, parentContext.noscriptTagInScope);
                case 'table':
                    return createFormatContext(HTML_TABLE_MODE, null, parentContext.noscriptTagInScope);
                case 'thead':
                case 'tbody':
                case 'tfoot':
                    return createFormatContext(HTML_TABLE_BODY_MODE, null, parentContext.noscriptTagInScope);
                case 'colgroup':
                    return createFormatContext(HTML_COLGROUP_MODE, null, parentContext.noscriptTagInScope);
                case 'tr':
                    return createFormatContext(HTML_TABLE_ROW_MODE, null, parentContext.noscriptTagInScope);
            }
            if (parentContext.insertionMode >= HTML_TABLE_MODE) {
                return createFormatContext(HTML_MODE, null, parentContext.noscriptTagInScope);
            }
            if (parentContext.insertionMode === ROOT_HTML_MODE) {
                return createFormatContext(HTML_MODE, null, parentContext.noscriptTagInScope);
            }
            return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
            var generatedID = responseState.nextSuspenseID++;
            return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
            var idPrefix = responseState.idPrefix;
            var id = ':' + idPrefix + 'R' + treeId;
            if (localId > 0) {
                id += 'H' + localId.toString(32);
            }
            return id + ':';
        }
        function encodeHTMLTextNode(text) {
            return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk('<!-- -->');
        function pushTextInstance(target, text, responseState, textEmbedded) {
            if (text === '') {
                return textEmbedded;
            }
            if (textEmbedded) {
                target.push(textSeparator);
            }
            target.push(stringToChunk(encodeHTMLTextNode(text)));
            return true;
        }
        function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
            if (lastPushedText && textEmbedded) {
                target.push(textSeparator);
            }
        }
        var styleNameCache = new Map();
        function processStyleName(styleName) {
            var chunk = styleNameCache.get(styleName);
            if (chunk !== undefined) {
                return chunk;
            }
            var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
            styleNameCache.set(styleName, result);
            return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(':');
        var styleSeparator = stringToPrecomputedChunk(';');
        function pushStyle(target, responseState, style) {
            if (typeof style !== 'object') {
                throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.');
            }
            var isFirst = true;
            for(var styleName in style){
                if (!hasOwnProperty.call(style, styleName)) {
                    continue;
                }
                var styleValue = style[styleName];
                if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') {
                    continue;
                }
                var nameChunk = void 0;
                var valueChunk = void 0;
                var isCustomProperty = styleName.indexOf('--') === 0;
                if (isCustomProperty) {
                    nameChunk = stringToChunk(escapeTextForBrowser(styleName));
                    {
                        checkCSSPropertyStringCoercion(styleValue, styleName);
                    }
                    valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
                } else {
                    {
                        warnValidStyle$1(styleName, styleValue);
                    }
                    nameChunk = processStyleName(styleName);
                    if (typeof styleValue === 'number') {
                        if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                            valueChunk = stringToChunk(styleValue + 'px');
                        } else {
                            valueChunk = stringToChunk('' + styleValue);
                        }
                    } else {
                        {
                            checkCSSPropertyStringCoercion(styleValue, styleName);
                        }
                        valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
                    }
                }
                if (isFirst) {
                    isFirst = false;
                    target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
                } else {
                    target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
                }
            }
            if (!isFirst) {
                target.push(attributeEnd);
            }
        }
        var attributeSeparator = stringToPrecomputedChunk(' ');
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
            switch(name){
                case 'style':
                    {
                        pushStyle(target, responseState, value);
                        return;
                    }
                case 'defaultValue':
                case 'defaultChecked':
                case 'innerHTML':
                case 'suppressContentEditableWarning':
                case 'suppressHydrationWarning':
                    return;
            }
            if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
                return;
            }
            var propertyInfo = getPropertyInfo(name);
            if (propertyInfo !== null) {
                switch(typeof value){
                    case 'function':
                    case 'symbol':
                        return;
                    case 'boolean':
                        {
                            if (!propertyInfo.acceptsBooleans) {
                                return;
                            }
                        }
                }
                var attributeName = propertyInfo.attributeName;
                var attributeNameChunk = stringToChunk(attributeName);
                switch(propertyInfo.type){
                    case BOOLEAN:
                        if (value) {
                            target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                        }
                        return;
                    case OVERLOADED_BOOLEAN:
                        if (value === true) {
                            target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                        } else if (value === false) ;
                        else {
                            target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                        }
                        return;
                    case NUMERIC:
                        if (!isNaN(value)) {
                            target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                        }
                        break;
                    case POSITIVE_NUMERIC:
                        if (!isNaN(value) && value >= 1) {
                            target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                        }
                        break;
                    default:
                        if (propertyInfo.sanitizeURL) {
                            {
                                checkAttributeStringCoercion(value, attributeName);
                            }
                            value = '' + value;
                            sanitizeURL(value);
                        }
                        target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
            } else if (isAttributeNameSafe(name)) {
                switch(typeof value){
                    case 'function':
                    case 'symbol':
                        return;
                    case 'boolean':
                        {
                            var prefix = name.toLowerCase().slice(0, 5);
                            if (prefix !== 'data-' && prefix !== 'aria-') {
                                return;
                            }
                        }
                }
                target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
        }
        var endOfStartTag = stringToPrecomputedChunk('>');
        var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');
        function pushInnerHTML(target, innerHTML, children) {
            if (innerHTML != null) {
                if (children != null) {
                    throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
                }
                if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
                    throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
                }
                var html = innerHTML.__html;
                if (html !== null && html !== undefined) {
                    {
                        checkHtmlStringCoercion(html);
                    }
                    target.push(stringToChunk('' + html));
                }
            }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
            {
                var value = props[propName];
                if (value != null) {
                    var array = isArray(value);
                    if (props.multiple && !array) {
                        error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
                    } else if (!props.multiple && array) {
                        error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
                    }
                }
            }
        }
        function pushStartSelect(target, props, responseState) {
            {
                checkControlledValueProps('select', props);
                checkSelectProp(props, 'value');
                checkSelectProp(props, 'defaultValue');
                if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
                    error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');
                    didWarnDefaultSelectValue = true;
                }
            }
            target.push(startChunkForTag('select'));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        case 'defaultValue':
                        case 'value':
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            return children;
        }
        function flattenOptionChildren(children) {
            var content = '';
            React.Children.forEach(children, function(child) {
                if (child == null) {
                    return;
                }
                content += child;
                {
                    if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
                        didWarnInvalidOptionChildren = true;
                        error('Cannot infer the option value of complex children. ' + 'Pass a `value` prop or use a plain string as children to <option>.');
                    }
                }
            });
            return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
            var selectedValue = formatContext.selectedValue;
            target.push(startChunkForTag('option'));
            var children = null;
            var value = null;
            var selected = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'selected':
                            selected = propValue;
                            {
                                if (!didWarnSelectedSetOnOption) {
                                    error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');
                                    didWarnSelectedSetOnOption = true;
                                }
                            }
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        case 'value':
                            value = propValue;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            if (selectedValue != null) {
                var stringValue;
                if (value !== null) {
                    {
                        checkAttributeStringCoercion(value, 'value');
                    }
                    stringValue = '' + value;
                } else {
                    {
                        if (innerHTML !== null) {
                            if (!didWarnInvalidOptionInnerHTML) {
                                didWarnInvalidOptionInnerHTML = true;
                                error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows ' + 'which value should be selected.');
                            }
                        }
                    }
                    stringValue = flattenOptionChildren(children);
                }
                if (isArray(selectedValue)) {
                    for(var i = 0; i < selectedValue.length; i++){
                        {
                            checkAttributeStringCoercion(selectedValue[i], 'value');
                        }
                        var v = '' + selectedValue[i];
                        if (v === stringValue) {
                            target.push(selectedMarkerAttribute);
                            break;
                        }
                    }
                } else {
                    {
                        checkAttributeStringCoercion(selectedValue, 'select.value');
                    }
                    if ('' + selectedValue === stringValue) {
                        target.push(selectedMarkerAttribute);
                    }
                }
            } else if (selected) {
                target.push(selectedMarkerAttribute);
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            return children;
        }
        function pushInput(target, props, responseState) {
            {
                checkControlledValueProps('input', props);
                if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
                    error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);
                    didWarnDefaultChecked = true;
                }
                if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
                    error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);
                    didWarnDefaultInputValue = true;
                }
            }
            target.push(startChunkForTag('input'));
            var value = null;
            var defaultValue = null;
            var checked = null;
            var defaultChecked = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('input' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        case 'defaultChecked':
                            defaultChecked = propValue;
                            break;
                        case 'defaultValue':
                            defaultValue = propValue;
                            break;
                        case 'checked':
                            checked = propValue;
                            break;
                        case 'value':
                            value = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            if (checked !== null) {
                pushAttribute(target, responseState, 'checked', checked);
            } else if (defaultChecked !== null) {
                pushAttribute(target, responseState, 'checked', defaultChecked);
            }
            if (value !== null) {
                pushAttribute(target, responseState, 'value', value);
            } else if (defaultValue !== null) {
                pushAttribute(target, responseState, 'value', defaultValue);
            }
            target.push(endOfStartTagSelfClosing);
            return null;
        }
        function pushStartTextArea(target, props, responseState) {
            {
                checkControlledValueProps('textarea', props);
                if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
                    error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');
                    didWarnDefaultTextareaValue = true;
                }
            }
            target.push(startChunkForTag('textarea'));
            var value = null;
            var defaultValue = null;
            var children = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'value':
                            value = propValue;
                            break;
                        case 'defaultValue':
                            defaultValue = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            if (value === null && defaultValue !== null) {
                value = defaultValue;
            }
            target.push(endOfStartTag);
            if (children != null) {
                {
                    error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
                }
                if (value != null) {
                    throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
                }
                if (isArray(children)) {
                    if (children.length > 1) {
                        throw new Error('<textarea> can only have at most one child.');
                    }
                    {
                        checkHtmlStringCoercion(children[0]);
                    }
                    value = '' + children[0];
                }
                {
                    checkHtmlStringCoercion(children);
                }
                value = '' + children;
            }
            if (typeof value === 'string' && value[0] === '\n') {
                target.push(leadingNewline);
            }
            if (value !== null) {
                {
                    checkAttributeStringCoercion(value, 'value');
                }
                target.push(stringToChunk(encodeHTMLTextNode('' + value)));
            }
            return null;
        }
        function pushBase(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromElement('base', props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushSelfClosing(target, props, 'base', responseState);
        }
        function pushMeta(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromElement('meta', props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushSelfClosing(target, props, 'meta', responseState);
        }
        function pushLink(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromLink(props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushLinkImpl(target, props, responseState);
        }
        function pushLinkImpl(target, props, responseState) {
            var isStylesheet = props.rel === 'stylesheet';
            target.push(startChunkForTag('link'));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('link' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        case 'precedence':
                            {
                                if (isStylesheet) {
                                    continue;
                                }
                            }
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTagSelfClosing);
            return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error(tag + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTagSelfClosing);
            return null;
        }
        function pushStartMenuItem(target, props, responseState) {
            target.push(startChunkForTag('menuitem'));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            return null;
        }
        function pushTitle(target, props, responseState, insertionMode, noscriptTagInScope) {
            {
                var children = props.children;
                var childForValidation = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
                if (Array.isArray(children) && children.length > 1) {
                    error('A title element received an array with more than 1 element as children. ' + 'In browsers title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
                } else if (childForValidation != null && childForValidation.$$typeof != null) {
                    error('A title element received a React element for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
                } else if (childForValidation != null && typeof childForValidation !== 'string' && typeof childForValidation !== 'number') {
                    error('A title element received a value that was not a string or number for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
                }
            }
            if (insertionMode !== SVG_MODE && !noscriptTagInScope && resourcesFromElement('title', props)) {
                return null;
            }
            return pushTitleImpl(target, props, responseState);
        }
        function pushTitleImpl(target, props, responseState) {
            target.push(startChunkForTag('title'));
            var children = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            throw new Error('`dangerouslySetInnerHTML` does not make sense on <title>.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
            if (typeof child === 'string' || typeof child === 'number') {
                target.push(stringToChunk(escapeTextForBrowser(child)));
            }
            target.push(endTag1, stringToChunk('title'), endTag2);
            return null;
        }
        function pushStartHead(target, preamble, props, tag, responseState) {
            return pushStartGenericElement(preamble, props, tag, responseState);
        }
        function pushStartHtml(target, preamble, props, tag, responseState, formatContext) {
            target = preamble;
            if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
            }
            return pushStartGenericElement(target, props, tag, responseState);
        }
        function pushScript(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromScript(props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushScriptImpl(target, props, responseState);
        }
        function pushScriptImpl(target, props, responseState) {
            target.push(startChunkForTag('script'));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            {
                if (children != null && typeof children !== 'string') {
                    var descriptiveStatement = typeof children === 'number' ? 'a number for children' : Array.isArray(children) ? 'an array for children' : 'something unexpected for children';
                    error('A script element was rendered with %s. If script element has children it must be a single string.' + ' Consider using dangerouslySetInnerHTML or passing a plain string as children.', descriptiveStatement);
                }
            }
            pushInnerHTML(target, innerHTML, children);
            if (typeof children === 'string') {
                target.push(stringToChunk(encodeHTMLTextNode(children)));
            }
            target.push(endTag1, stringToChunk('script'), endTag2);
            return null;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            if (typeof children === 'string') {
                target.push(stringToChunk(encodeHTMLTextNode(children)));
                return null;
            }
            return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        case 'style':
                            pushStyle(target, responseState, propValue);
                            break;
                        case 'suppressContentEditableWarning':
                        case 'suppressHydrationWarning':
                            break;
                        default:
                            if (isAttributeNameSafe(propKey) && typeof propValue !== 'function' && typeof propValue !== 'symbol') {
                                target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                            }
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            return children;
        }
        var leadingNewline = stringToPrecomputedChunk('\n');
        function pushStartPreformattedElement(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            if (innerHTML != null) {
                if (children != null) {
                    throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
                }
                if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
                    throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
                }
                var html = innerHTML.__html;
                if (html !== null && html !== undefined) {
                    if (typeof html === 'string' && html.length > 0 && html[0] === '\n') {
                        target.push(leadingNewline, stringToChunk(html));
                    } else {
                        {
                            checkHtmlStringCoercion(html);
                        }
                        target.push(stringToChunk('' + html));
                    }
                }
            }
            if (typeof children === 'string' && children[0] === '\n') {
                target.push(leadingNewline);
            }
            return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = new Map();
        function startChunkForTag(tag) {
            var tagStartChunk = validatedTagCache.get(tag);
            if (tagStartChunk === undefined) {
                if (!VALID_TAG_REGEX.test(tag)) {
                    throw new Error("Invalid tag: " + tag);
                }
                tagStartChunk = stringToPrecomputedChunk('<' + tag);
                validatedTagCache.set(tag, tagStartChunk);
            }
            return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
        function pushStartInstance(target, preamble, type, props, responseState, formatContext, textEmbedded) {
            {
                validateProperties(type, props);
                validateProperties$1(type, props);
                validateProperties$2(type, props, null);
                if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
                    error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
                }
                if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
                    if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type) {
                        error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type);
                    }
                }
            }
            switch(type){
                case 'select':
                    return pushStartSelect(target, props, responseState);
                case 'option':
                    return pushStartOption(target, props, responseState, formatContext);
                case 'textarea':
                    return pushStartTextArea(target, props, responseState);
                case 'input':
                    return pushInput(target, props, responseState);
                case 'menuitem':
                    return pushStartMenuItem(target, props, responseState);
                case 'title':
                    return pushTitle(target, props, responseState, formatContext.insertionMode, formatContext.noscriptTagInScope);
                case 'link':
                    return pushLink(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'script':
                    return pushScript(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'meta':
                    return pushMeta(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'base':
                    return pushBase(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'listing':
                case 'pre':
                    {
                        return pushStartPreformattedElement(target, props, type, responseState);
                    }
                case 'area':
                case 'br':
                case 'col':
                case 'embed':
                case 'hr':
                case 'img':
                case 'keygen':
                case 'param':
                case 'source':
                case 'track':
                case 'wbr':
                    {
                        return pushSelfClosing(target, props, type, responseState);
                    }
                case 'annotation-xml':
                case 'color-profile':
                case 'font-face':
                case 'font-face-src':
                case 'font-face-uri':
                case 'font-face-format':
                case 'font-face-name':
                case 'missing-glyph':
                    {
                        return pushStartGenericElement(target, props, type, responseState);
                    }
                case 'head':
                    return pushStartHead(target, preamble, props, type, responseState);
                case 'html':
                    {
                        return pushStartHtml(target, preamble, props, type, responseState, formatContext);
                    }
                default:
                    {
                        if (type.indexOf('-') === -1 && typeof props.is !== 'string') {
                            return pushStartGenericElement(target, props, type, responseState);
                        } else {
                            return pushStartCustomElement(target, props, type, responseState);
                        }
                    }
            }
        }
        var endTag1 = stringToPrecomputedChunk('</');
        var endTag2 = stringToPrecomputedChunk('>');
        function pushEndInstance(target, postamble, type, props) {
            switch(type){
                case 'title':
                case 'script':
                case 'area':
                case 'base':
                case 'br':
                case 'col':
                case 'embed':
                case 'hr':
                case 'img':
                case 'input':
                case 'keygen':
                case 'link':
                case 'meta':
                case 'param':
                case 'source':
                case 'track':
                case 'wbr':
                    {
                        return;
                    }
                case 'body':
                    {
                        {
                            postamble.unshift(endTag1, stringToChunk(type), endTag2);
                            return;
                        }
                    }
                case 'html':
                    {
                        postamble.push(endTag1, stringToChunk(type), endTag2);
                        return;
                    }
            }
            target.push(endTag1, stringToChunk(type), endTag2);
        }
        function writeCompletedRoot(destination, responseState) {
            var bootstrapChunks = responseState.bootstrapChunks;
            var i = 0;
            for(; i < bootstrapChunks.length - 1; i++){
                writeChunk(destination, bootstrapChunks[i]);
            }
            if (i < bootstrapChunks.length) {
                return writeChunkAndReturn(destination, bootstrapChunks[i]);
            }
            return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
            writeChunk(destination, placeholder1);
            writeChunk(destination, responseState.placeholderPrefix);
            var formattedID = stringToChunk(id.toString(16));
            writeChunk(destination, formattedID);
            return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
        var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
        var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk('<template');
        var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
        var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
        var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
        var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
        var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk('></template>');
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
            writeChunk(destination, startPendingSuspenseBoundary1);
            if (id === null) {
                throw new Error('An ID must have been assigned before we can complete the boundary.');
            }
            writeChunk(destination, id);
            return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
            var result;
            result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
            writeChunk(destination, clientRenderedSuspenseBoundaryError1);
            if (errorDigest) {
                writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
                writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
                writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
            {
                if (errorMesssage) {
                    writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
                    writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
                    writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
                }
                if (errorComponentStack) {
                    writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
                    writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
                    writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
                }
            }
            result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
            return result;
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk('</div>');
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk('</svg>');
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk('</math>');
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk('</table>');
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
        function writeStartSegment(destination, responseState, formatContext, id) {
            switch(formatContext.insertionMode){
                case ROOT_HTML_MODE:
                case HTML_MODE:
                    {
                        writeChunk(destination, startSegmentHTML);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentHTML2);
                    }
                case SVG_MODE:
                    {
                        writeChunk(destination, startSegmentSVG);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentSVG2);
                    }
                case MATHML_MODE:
                    {
                        writeChunk(destination, startSegmentMathML);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentMathML2);
                    }
                case HTML_TABLE_MODE:
                    {
                        writeChunk(destination, startSegmentTable);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentTable2);
                    }
                case HTML_TABLE_BODY_MODE:
                    {
                        writeChunk(destination, startSegmentTableBody);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentTableBody2);
                    }
                case HTML_TABLE_ROW_MODE:
                    {
                        writeChunk(destination, startSegmentTableRow);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentTableRow2);
                    }
                case HTML_COLGROUP_MODE:
                    {
                        writeChunk(destination, startSegmentColGroup);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentColGroup2);
                    }
                default:
                    {
                        throw new Error('Unknown insertion mode. This is a bug in React.');
                    }
            }
        }
        function writeEndSegment(destination, formatContext) {
            switch(formatContext.insertionMode){
                case ROOT_HTML_MODE:
                case HTML_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentHTML);
                    }
                case SVG_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentSVG);
                    }
                case MATHML_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentMathML);
                    }
                case HTML_TABLE_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentTable);
                    }
                case HTML_TABLE_BODY_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentTableBody);
                    }
                case HTML_TABLE_ROW_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentTableRow);
                    }
                case HTML_COLGROUP_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentColGroup);
                    }
                default:
                    {
                        throw new Error('Unknown insertion mode. This is a bug in React.');
                    }
            }
        }
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegment + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScriptEnd = stringToPrecomputedChunk('")</script>');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
            {
                writeChunk(destination, responseState.startInlineScript);
                if (!responseState.sentCompleteSegmentFunction) {
                    responseState.sentCompleteSegmentFunction = true;
                    writeChunk(destination, completeSegmentScript1Full);
                } else {
                    writeChunk(destination, completeSegmentScript1Partial);
                }
            }
            writeChunk(destination, responseState.segmentPrefix);
            var formattedID = stringToChunk(contentSegmentID.toString(16));
            writeChunk(destination, formattedID);
            {
                writeChunk(destination, completeSegmentScript2);
            }
            writeChunk(destination, responseState.placeholderPrefix);
            writeChunk(destination, formattedID);
            {
                return writeChunkAndReturn(destination, completeSegmentScriptEnd);
            }
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundary + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryWithStylesScript1FullBoth = stringToPrecomputedChunk(completeBoundary + ';' + completeBoundaryWithStyles + ';$RR("');
        var completeBoundaryWithStylesScript1FullPartial = stringToPrecomputedChunk(completeBoundaryWithStyles + ';$RR("');
        var completeBoundaryWithStylesScript1Partial = stringToPrecomputedChunk('$RR("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3a = stringToPrecomputedChunk('",');
        var completeBoundaryScript3b = stringToPrecomputedChunk('"');
        var completeBoundaryScriptEnd = stringToPrecomputedChunk(')</script>');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID, boundaryResources) {
            var hasStyleDependencies;
            {
                hasStyleDependencies = hasStyleResourceDependencies(boundaryResources);
            }
            {
                writeChunk(destination, responseState.startInlineScript);
                if (hasStyleDependencies) {
                    if (!responseState.sentCompleteBoundaryFunction) {
                        responseState.sentCompleteBoundaryFunction = true;
                        responseState.sentStyleInsertionFunction = true;
                        writeChunk(destination, clonePrecomputedChunk(completeBoundaryWithStylesScript1FullBoth));
                    } else if (!responseState.sentStyleInsertionFunction) {
                        responseState.sentStyleInsertionFunction = true;
                        writeChunk(destination, completeBoundaryWithStylesScript1FullPartial);
                    } else {
                        writeChunk(destination, completeBoundaryWithStylesScript1Partial);
                    }
                } else {
                    if (!responseState.sentCompleteBoundaryFunction) {
                        responseState.sentCompleteBoundaryFunction = true;
                        writeChunk(destination, completeBoundaryScript1Full);
                    } else {
                        writeChunk(destination, completeBoundaryScript1Partial);
                    }
                }
            }
            if (boundaryID === null) {
                throw new Error('An ID must have been assigned before we can complete the boundary.');
            }
            var formattedContentID = stringToChunk(contentSegmentID.toString(16));
            writeChunk(destination, boundaryID);
            {
                writeChunk(destination, completeBoundaryScript2);
            }
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, formattedContentID);
            if (hasStyleDependencies) {
                {
                    writeChunk(destination, completeBoundaryScript3a);
                    writeStyleResourceDependenciesInJS(destination, boundaryResources);
                }
            } else {
                {
                    writeChunk(destination, completeBoundaryScript3b);
                }
            }
            {
                return writeChunkAndReturn(destination, completeBoundaryScriptEnd);
            }
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderBoundary + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript1A = stringToPrecomputedChunk('"');
        var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');
        var clientRenderScriptEnd = stringToPrecomputedChunk(')</script>');
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
            {
                writeChunk(destination, responseState.startInlineScript);
                if (!responseState.sentClientRenderFunction) {
                    responseState.sentClientRenderFunction = true;
                    writeChunk(destination, clientRenderScript1Full);
                } else {
                    writeChunk(destination, clientRenderScript1Partial);
                }
            }
            if (boundaryID === null) {
                throw new Error('An ID must have been assigned before we can complete the boundary.');
            }
            writeChunk(destination, boundaryID);
            {
                writeChunk(destination, clientRenderScript1A);
            }
            if (errorDigest || errorMessage || errorComponentStack) {
                {
                    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
                    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || '')));
                }
            }
            if (errorMessage || errorComponentStack) {
                {
                    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
                    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || '')));
                }
            }
            if (errorComponentStack) {
                {
                    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
                    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
                }
            }
            {
                return writeChunkAndReturn(destination, clientRenderScriptEnd);
            }
        }
        var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
        function escapeJSStringsForInstructionScripts(input) {
            var escaped = JSON.stringify(input);
            return escaped.replace(regexForJSStringsInInstructionScripts, function(match) {
                switch(match){
                    case '<':
                        return "\\u003c";
                    case "\u2028":
                        return "\\u2028";
                    case "\u2029":
                        return "\\u2029";
                    default:
                        {
                            throw new Error('escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
                        }
                }
            });
        }
        var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
        function escapeJSObjectForInstructionScripts(input) {
            var escaped = JSON.stringify(input);
            return escaped.replace(regexForJSStringsInScripts, function(match) {
                switch(match){
                    case '&':
                        return "\\u0026";
                    case '>':
                        return "\\u003e";
                    case '<':
                        return "\\u003c";
                    case "\u2028":
                        return "\\u2028";
                    case "\u2029":
                        return "\\u2029";
                    default:
                        {
                            throw new Error('escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
                        }
                }
            });
        }
        var precedencePlaceholderStart = stringToPrecomputedChunk('<style data-precedence="');
        var precedencePlaceholderEnd = stringToPrecomputedChunk('"></style>');
        function writeInitialResources(destination, resources, responseState, willFlushAllSegments) {
            function flushLinkResource(resource) {
                if (!resource.flushed) {
                    pushLinkImpl(target, resource.props, responseState);
                    resource.flushed = true;
                }
            }
            var target = [];
            var charset = resources.charset, bases = resources.bases, preconnects = resources.preconnects, fontPreloads = resources.fontPreloads, precedences = resources.precedences, usedStylePreloads = resources.usedStylePreloads, scripts = resources.scripts, usedScriptPreloads = resources.usedScriptPreloads, explicitStylePreloads = resources.explicitStylePreloads, explicitScriptPreloads = resources.explicitScriptPreloads, headResources = resources.headResources;
            if (charset) {
                pushSelfClosing(target, charset.props, 'meta', responseState);
                charset.flushed = true;
                resources.charset = null;
            }
            bases.forEach(function(r) {
                pushSelfClosing(target, r.props, 'base', responseState);
                r.flushed = true;
            });
            bases.clear();
            preconnects.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            preconnects.clear();
            fontPreloads.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            fontPreloads.clear();
            precedences.forEach(function(p, precedence) {
                if (p.size) {
                    p.forEach(function(r) {
                        pushLinkImpl(target, r.props, responseState);
                        r.flushed = true;
                        r.inShell = true;
                        r.hint.flushed = true;
                    });
                    p.clear();
                } else {
                    target.push(precedencePlaceholderStart, stringToChunk(escapeTextForBrowser(precedence)), precedencePlaceholderEnd);
                }
            });
            usedStylePreloads.forEach(flushLinkResource);
            usedStylePreloads.clear();
            scripts.forEach(function(r) {
                pushScriptImpl(target, r.props, responseState);
                r.flushed = true;
                r.hint.flushed = true;
            });
            scripts.clear();
            usedScriptPreloads.forEach(flushLinkResource);
            usedScriptPreloads.clear();
            explicitStylePreloads.forEach(flushLinkResource);
            explicitStylePreloads.clear();
            explicitScriptPreloads.forEach(flushLinkResource);
            explicitScriptPreloads.clear();
            headResources.forEach(function(r) {
                switch(r.type){
                    case 'title':
                        {
                            pushTitleImpl(target, r.props, responseState);
                            break;
                        }
                    case 'meta':
                        {
                            pushSelfClosing(target, r.props, 'meta', responseState);
                            break;
                        }
                    case 'link':
                        {
                            pushLinkImpl(target, r.props, responseState);
                            break;
                        }
                }
                r.flushed = true;
            });
            headResources.clear();
            var i;
            var r = true;
            for(i = 0; i < target.length - 1; i++){
                writeChunk(destination, target[i]);
            }
            if (i < target.length) {
                r = writeChunkAndReturn(destination, target[i]);
            }
            return r;
        }
        function writeImmediateResources(destination, resources, responseState) {
            function flushLinkResource(resource) {
                if (!resource.flushed) {
                    pushLinkImpl(target, resource.props, responseState);
                    resource.flushed = true;
                }
            }
            var target = [];
            var charset = resources.charset, preconnects = resources.preconnects, fontPreloads = resources.fontPreloads, usedStylePreloads = resources.usedStylePreloads, scripts = resources.scripts, usedScriptPreloads = resources.usedScriptPreloads, explicitStylePreloads = resources.explicitStylePreloads, explicitScriptPreloads = resources.explicitScriptPreloads, headResources = resources.headResources;
            if (charset) {
                pushSelfClosing(target, charset.props, 'meta', responseState);
                charset.flushed = true;
                resources.charset = null;
            }
            preconnects.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            preconnects.clear();
            fontPreloads.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            fontPreloads.clear();
            usedStylePreloads.forEach(flushLinkResource);
            usedStylePreloads.clear();
            scripts.forEach(function(r) {
                pushStartGenericElement(target, r.props, 'script', responseState);
                pushEndInstance(target, target, 'script', r.props);
                r.flushed = true;
                r.hint.flushed = true;
            });
            scripts.clear();
            usedScriptPreloads.forEach(flushLinkResource);
            usedScriptPreloads.clear();
            explicitStylePreloads.forEach(flushLinkResource);
            explicitStylePreloads.clear();
            explicitScriptPreloads.forEach(flushLinkResource);
            explicitScriptPreloads.clear();
            headResources.forEach(function(r) {
                switch(r.type){
                    case 'title':
                        {
                            pushTitleImpl(target, r.props, responseState);
                            break;
                        }
                    case 'meta':
                        {
                            pushSelfClosing(target, r.props, 'meta', responseState);
                            break;
                        }
                    case 'link':
                        {
                            pushLinkImpl(target, r.props, responseState);
                            break;
                        }
                }
                r.flushed = true;
            });
            headResources.clear();
            var i;
            var r = true;
            for(i = 0; i < target.length - 1; i++){
                writeChunk(destination, target[i]);
            }
            if (i < target.length) {
                r = writeChunkAndReturn(destination, target[i]);
            }
            return r;
        }
        function hasStyleResourceDependencies(boundaryResources) {
            var iter = boundaryResources.values();
            while(true){
                var _iter$next = iter.next(), resource = _iter$next.value;
                if (!resource) break;
                if (!resource.inShell) {
                    return true;
                }
            }
            return false;
        }
        var arrayFirstOpenBracket = stringToPrecomputedChunk('[');
        var arraySubsequentOpenBracket = stringToPrecomputedChunk(',[');
        var arrayInterstitial = stringToPrecomputedChunk(',');
        var arrayCloseBracket = stringToPrecomputedChunk(']');
        function writeStyleResourceDependenciesInJS(destination, boundaryResources) {
            writeChunk(destination, arrayFirstOpenBracket);
            var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
            boundaryResources.forEach(function(resource) {
                if (resource.inShell) ;
                else if (resource.flushed) {
                    writeChunk(destination, nextArrayOpenBrackChunk);
                    writeStyleResourceDependencyHrefOnlyInJS(destination, resource.href);
                    writeChunk(destination, arrayCloseBracket);
                    nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                } else {
                    writeChunk(destination, nextArrayOpenBrackChunk);
                    writeStyleResourceDependencyInJS(destination, resource.href, resource.precedence, resource.props);
                    writeChunk(destination, arrayCloseBracket);
                    nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                    resource.flushed = true;
                    resource.hint.flushed = true;
                }
            });
            writeChunk(destination, arrayCloseBracket);
        }
        function writeStyleResourceDependencyHrefOnlyInJS(destination, href) {
            {
                checkAttributeStringCoercion(href, 'href');
            }
            var coercedHref = '' + href;
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedHref)));
        }
        function writeStyleResourceDependencyInJS(destination, href, precedence, props) {
            {
                checkAttributeStringCoercion(href, 'href');
            }
            var coercedHref = '' + href;
            sanitizeURL(coercedHref);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedHref)));
            {
                checkAttributeStringCoercion(precedence, 'precedence');
            }
            var coercedPrecedence = '' + precedence;
            writeChunk(destination, arrayInterstitial);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedPrecedence)));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'href':
                        case 'rel':
                        case 'precedence':
                        case 'data-precedence':
                            {
                                break;
                            }
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('link' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        default:
                            writeStyleResourceAttributeInJS(destination, propKey, propValue);
                            break;
                    }
                }
            }
            return null;
        }
        function writeStyleResourceAttributeInJS(destination, name, value) {
            var attributeName = name.toLowerCase();
            var attributeValue;
            switch(typeof value){
                case 'function':
                case 'symbol':
                    return;
            }
            switch(name){
                case 'innerHTML':
                case 'dangerouslySetInnerHTML':
                case 'suppressContentEditableWarning':
                case 'suppressHydrationWarning':
                case 'style':
                    return;
                case 'className':
                    attributeName = 'class';
                    break;
                case 'hidden':
                    if (value === false) {
                        return;
                    }
                    attributeValue = '';
                    break;
                case 'src':
                case 'href':
                    {
                        {
                            checkAttributeStringCoercion(value, attributeName);
                        }
                        attributeValue = '' + value;
                        sanitizeURL(attributeValue);
                        break;
                    }
                default:
                    {
                        if (!isAttributeNameSafe(name)) {
                            return;
                        }
                    }
            }
            if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
                return;
            }
            {
                checkAttributeStringCoercion(value, attributeName);
            }
            attributeValue = '' + value;
            writeChunk(destination, arrayInterstitial);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(attributeName)));
            writeChunk(destination, arrayInterstitial);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(attributeValue)));
        }
        function createResponseState$1(generateStaticMarkup, identifierPrefix, externalRuntimeConfig) {
            var responseState = createResponseState(identifierPrefix, undefined, undefined, undefined, undefined);
            return {
                bootstrapChunks: responseState.bootstrapChunks,
                placeholderPrefix: responseState.placeholderPrefix,
                segmentPrefix: responseState.segmentPrefix,
                boundaryPrefix: responseState.boundaryPrefix,
                idPrefix: responseState.idPrefix,
                nextSuspenseID: responseState.nextSuspenseID,
                streamingFormat: responseState.streamingFormat,
                startInlineScript: responseState.startInlineScript,
                sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
                sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
                sentClientRenderFunction: responseState.sentClientRenderFunction,
                sentStyleInsertionFunction: responseState.sentStyleInsertionFunction,
                externalRuntimeConfig: responseState.externalRuntimeConfig,
                generateStaticMarkup: generateStaticMarkup
            };
        }
        function createRootFormatContext() {
            return {
                insertionMode: HTML_MODE,
                selectedValue: null,
                noscriptTagInScope: false
            };
        }
        function pushTextInstance$1(target, text, responseState, textEmbedded) {
            if (responseState.generateStaticMarkup) {
                target.push(stringToChunk(escapeTextForBrowser(text)));
                return false;
            } else {
                return pushTextInstance(target, text, responseState, textEmbedded);
            }
        }
        function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
            if (responseState.generateStaticMarkup) {
                return;
            } else {
                return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
            }
        }
        function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
            if (responseState.generateStaticMarkup) {
                return true;
            }
            return writeStartCompletedSuspenseBoundary(destination);
        }
        function writeStartClientRenderedSuspenseBoundary$1(destination, responseState, errorDigest, errorMessage, errorComponentStack) {
            if (responseState.generateStaticMarkup) {
                return true;
            }
            return writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMessage, errorComponentStack);
        }
        function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
            if (responseState.generateStaticMarkup) {
                return true;
            }
            return writeEndCompletedSuspenseBoundary(destination);
        }
        function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
            if (responseState.generateStaticMarkup) {
                return true;
            }
            return writeEndClientRenderedSuspenseBoundary(destination);
        }
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_SCOPE_TYPE = Symbol.for('react.scope');
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentNameFromType(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                    case REACT_SERVER_CONTEXT_TYPE:
                        {
                            var context2 = type;
                            return (context2.displayName || context2._globalName) + '.Provider';
                        }
                }
            }
            return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function() {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function() {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        } catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    } else {
                        try {
                            Fake.call();
                        } catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                } else {
                    try {
                        throw Error();
                    } catch (x) {
                        control = x;
                    }
                    fn();
                }
            } catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                        c--;
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
            {
                return describeNativeComponentFrame(ctor, true);
            }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(hasOwnProperty);
                for(var typeSpecName in typeSpecs){
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        } catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement(null);
                        }
                    }
                }
            }
        }
        var warnedAboutMissingGetChildContext;
        {
            warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
            Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
            {
                var contextTypes = type.contextTypes;
                if (!contextTypes) {
                    return emptyContextObject;
                }
                var context = {};
                for(var key in contextTypes){
                    context[key] = unmaskedContext[key];
                }
                {
                    var name = getComponentNameFromType(type) || 'Unknown';
                    checkPropTypes(contextTypes, context, 'context', name);
                }
                return context;
            }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
            {
                if (typeof instance.getChildContext !== 'function') {
                    {
                        var componentName = getComponentNameFromType(type) || 'Unknown';
                        if (!warnedAboutMissingGetChildContext[componentName]) {
                            warnedAboutMissingGetChildContext[componentName] = true;
                            error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
                        }
                    }
                    return parentContext;
                }
                var childContext = instance.getChildContext();
                for(var contextKey in childContext){
                    if (!(contextKey in childContextTypes)) {
                        throw new Error((getComponentNameFromType(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
                    }
                }
                {
                    var name = getComponentNameFromType(type) || 'Unknown';
                    checkPropTypes(childContextTypes, childContext, 'child context', name);
                }
                return assign({}, parentContext, childContext);
            }
        }
        var rendererSigil;
        {
            rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
            {
                prev.context._currentValue2 = prev.parentValue;
            }
        }
        function pushNode(next) {
            {
                next.context._currentValue2 = next.value;
            }
        }
        function popToNearestCommonAncestor(prev, next) {
            if (prev === next) ;
            else {
                popNode(prev);
                var parentPrev = prev.parent;
                var parentNext = next.parent;
                if (parentPrev === null) {
                    if (parentNext !== null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                } else {
                    if (parentNext === null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                    popToNearestCommonAncestor(parentPrev, parentNext);
                }
                pushNode(next);
            }
        }
        function popAllPrevious(prev) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev !== null) {
                popAllPrevious(parentPrev);
            }
        }
        function pushAllNext(next) {
            var parentNext = next.parent;
            if (parentNext !== null) {
                pushAllNext(parentNext);
            }
            pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (parentPrev.depth === next.depth) {
                popToNearestCommonAncestor(parentPrev, next);
            } else {
                popPreviousToCommonLevel(parentPrev, next);
            }
        }
        function popNextToCommonLevel(prev, next) {
            var parentNext = next.parent;
            if (parentNext === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (prev.depth === parentNext.depth) {
                popToNearestCommonAncestor(prev, parentNext);
            } else {
                popNextToCommonLevel(prev, parentNext);
            }
            pushNode(next);
        }
        function switchContext(newSnapshot) {
            var prev = currentActiveSnapshot;
            var next = newSnapshot;
            if (prev !== next) {
                if (prev === null) {
                    pushAllNext(next);
                } else if (next === null) {
                    popAllPrevious(prev);
                } else if (prev.depth === next.depth) {
                    popToNearestCommonAncestor(prev, next);
                } else if (prev.depth > next.depth) {
                    popPreviousToCommonLevel(prev, next);
                } else {
                    popNextToCommonLevel(prev, next);
                }
                currentActiveSnapshot = next;
            }
        }
        function pushProvider(context, nextValue) {
            var prevValue;
            {
                prevValue = context._currentValue2;
                context._currentValue2 = nextValue;
                {
                    if (context._currentRenderer2 !== undefined && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
                    }
                    context._currentRenderer2 = rendererSigil;
                }
            }
            var prevNode = currentActiveSnapshot;
            var newNode = {
                parent: prevNode,
                depth: prevNode === null ? 0 : prevNode.depth + 1,
                context: context,
                parentValue: prevValue,
                value: nextValue
            };
            currentActiveSnapshot = newNode;
            return newNode;
        }
        function popProvider(context) {
            var prevSnapshot = currentActiveSnapshot;
            if (prevSnapshot === null) {
                throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
            }
            {
                if (prevSnapshot.context !== context) {
                    error('The parent context is not the expected context. This is probably a bug in React.');
                }
            }
            {
                var _value = prevSnapshot.parentValue;
                if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                    prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
                } else {
                    prevSnapshot.context._currentValue2 = _value;
                }
                {
                    if (context._currentRenderer2 !== undefined && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
                    }
                    context._currentRenderer2 = rendererSigil;
                }
            }
            return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
            return currentActiveSnapshot;
        }
        function readContext(context) {
            var value = context._currentValue2;
            return value;
        }
        function get(key) {
            return key._reactInternals;
        }
        function set(key, value) {
            key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
            didWarnAboutUninitializedState = new Set();
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
            didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
            didWarnAboutDirectlyAssigningPropsToState = new Set();
            didWarnAboutUndefinedDerivedState = new Set();
            didWarnAboutContextTypeAndContextTypes = new Set();
            didWarnAboutInvalidateContextType = new Set();
            var didWarnOnInvalidCallback = new Set();
            warnOnInvalidCallback = function(callback, callerName) {
                if (callback === null || typeof callback === 'function') {
                    return;
                }
                var key = callerName + '_' + callback;
                if (!didWarnOnInvalidCallback.has(key)) {
                    didWarnOnInvalidCallback.add(key);
                    error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
                }
            };
            warnOnUndefinedDerivedState = function(type, partialState) {
                if (partialState === undefined) {
                    var componentName = getComponentNameFromType(type) || 'Component';
                    if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                        didWarnAboutUndefinedDerivedState.add(componentName);
                        error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
                    }
                }
            };
        }
        function warnNoop(publicInstance, callerName) {
            {
                var _constructor = publicInstance.constructor;
                var componentName = _constructor && getComponentNameFromType(_constructor) || 'ReactClass';
                var warningKey = componentName + '.' + callerName;
                if (didWarnAboutNoopUpdateForComponent[warningKey]) {
                    return;
                }
                error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
                didWarnAboutNoopUpdateForComponent[warningKey] = true;
            }
        }
        var classComponentUpdater = {
            isMounted: function(inst) {
                return false;
            },
            enqueueSetState: function(inst, payload, callback) {
                var internals = get(inst);
                if (internals.queue === null) {
                    warnNoop(inst, 'setState');
                } else {
                    internals.queue.push(payload);
                    {
                        if (callback !== undefined && callback !== null) {
                            warnOnInvalidCallback(callback, 'setState');
                        }
                    }
                }
            },
            enqueueReplaceState: function(inst, payload, callback) {
                var internals = get(inst);
                internals.replace = true;
                internals.queue = [
                    payload
                ];
                {
                    if (callback !== undefined && callback !== null) {
                        warnOnInvalidCallback(callback, 'setState');
                    }
                }
            },
            enqueueForceUpdate: function(inst, callback) {
                var internals = get(inst);
                if (internals.queue === null) {
                    warnNoop(inst, 'forceUpdate');
                } else {
                    {
                        if (callback !== undefined && callback !== null) {
                            warnOnInvalidCallback(callback, 'setState');
                        }
                    }
                }
            }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
            var partialState = getDerivedStateFromProps(nextProps, prevState);
            {
                warnOnUndefinedDerivedState(ctor, partialState);
            }
            var newState = partialState === null || partialState === undefined ? prevState : assign({}, prevState, partialState);
            return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
            var context = emptyContextObject;
            var contextType = ctor.contextType;
            {
                if ('contextType' in ctor) {
                    var isValid = contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined;
                    if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                        didWarnAboutInvalidateContextType.add(ctor);
                        var addendum = '';
                        if (contextType === undefined) {
                            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
                        } else if (typeof contextType !== 'object') {
                            addendum = ' However, it is set to a ' + typeof contextType + '.';
                        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                            addendum = ' Did you accidentally pass the Context.Provider instead?';
                        } else if (contextType._context !== undefined) {
                            addendum = ' Did you accidentally pass the Context.Consumer instead?';
                        } else {
                            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
                        }
                        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentNameFromType(ctor) || 'Component', addendum);
                    }
                }
            }
            if (typeof contextType === 'object' && contextType !== null) {
                context = readContext(contextType);
            } else {
                context = maskedLegacyContext;
            }
            var instance = new ctor(props, context);
            {
                if (typeof ctor.getDerivedStateFromProps === 'function' && (instance.state === null || instance.state === undefined)) {
                    var componentName = getComponentNameFromType(ctor) || 'Component';
                    if (!didWarnAboutUninitializedState.has(componentName)) {
                        didWarnAboutUninitializedState.add(componentName);
                        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
                    }
                }
                if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
                    var foundWillMountName = null;
                    var foundWillReceivePropsName = null;
                    var foundWillUpdateName = null;
                    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                        foundWillMountName = 'componentWillMount';
                    } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
                        foundWillMountName = 'UNSAFE_componentWillMount';
                    }
                    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                        foundWillReceivePropsName = 'componentWillReceiveProps';
                    } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
                        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
                    }
                    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                        foundWillUpdateName = 'componentWillUpdate';
                    } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
                        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
                    }
                    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                        var _componentName = getComponentNameFromType(ctor) || 'Component';
                        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
                        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                            didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                            error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
                        }
                    }
                }
            }
            return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
            {
                var name = getComponentNameFromType(ctor) || 'Component';
                var renderPresent = instance.render;
                if (!renderPresent) {
                    if (ctor.prototype && typeof ctor.prototype.render === 'function') {
                        error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
                    } else {
                        error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
                    }
                }
                if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
                    error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
                }
                if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
                }
                if (instance.propTypes) {
                    error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
                }
                if (instance.contextType) {
                    error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
                }
                {
                    if (instance.contextTypes) {
                        error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
                    }
                    if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                        didWarnAboutContextTypeAndContextTypes.add(ctor);
                        error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
                    }
                }
                if (typeof instance.componentShouldUpdate === 'function') {
                    error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
                }
                if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
                    error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentNameFromType(ctor) || 'A pure component');
                }
                if (typeof instance.componentDidUnmount === 'function') {
                    error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
                }
                if (typeof instance.componentDidReceiveProps === 'function') {
                    error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
                }
                if (typeof instance.componentWillRecieveProps === 'function') {
                    error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
                }
                if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
                    error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
                }
                var hasMutatedProps = instance.props !== newProps;
                if (instance.props !== undefined && hasMutatedProps) {
                    error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
                }
                if (instance.defaultProps) {
                    error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
                }
                if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
                    didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
                    error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentNameFromType(ctor));
                }
                if (typeof instance.getDerivedStateFromProps === 'function') {
                    error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
                }
                if (typeof instance.getDerivedStateFromError === 'function') {
                    error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
                }
                if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
                    error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
                }
                var _state = instance.state;
                if (_state && (typeof _state !== 'object' || isArray(_state))) {
                    error('%s.state: must be set to an object or null', name);
                }
                if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
                    error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
                }
            }
        }
        function callComponentWillMount(type, instance) {
            var oldState = instance.state;
            if (typeof instance.componentWillMount === 'function') {
                {
                    if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                        var componentName = getComponentNameFromType(type) || 'Unknown';
                        if (!didWarnAboutDeprecatedWillMount[componentName]) {
                            warn('componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', componentName);
                            didWarnAboutDeprecatedWillMount[componentName] = true;
                        }
                    }
                }
                instance.componentWillMount();
            }
            if (typeof instance.UNSAFE_componentWillMount === 'function') {
                instance.UNSAFE_componentWillMount();
            }
            if (oldState !== instance.state) {
                {
                    error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentNameFromType(type) || 'Component');
                }
                classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
            }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
            if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
                var oldQueue = internalInstance.queue;
                var oldReplace = internalInstance.replace;
                internalInstance.queue = null;
                internalInstance.replace = false;
                if (oldReplace && oldQueue.length === 1) {
                    inst.state = oldQueue[0];
                } else {
                    var nextState = oldReplace ? oldQueue[0] : inst.state;
                    var dontMutate = true;
                    for(var i = oldReplace ? 1 : 0; i < oldQueue.length; i++){
                        var partial = oldQueue[i];
                        var partialState = typeof partial === 'function' ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                        if (partialState != null) {
                            if (dontMutate) {
                                dontMutate = false;
                                nextState = assign({}, nextState, partialState);
                            } else {
                                assign(nextState, partialState);
                            }
                        }
                    }
                    inst.state = nextState;
                }
            } else {
                internalInstance.queue = null;
            }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
            {
                checkClassInstance(instance, ctor, newProps);
            }
            var initialState = instance.state !== undefined ? instance.state : null;
            instance.updater = classComponentUpdater;
            instance.props = newProps;
            instance.state = initialState;
            var internalInstance = {
                queue: [],
                replace: false
            };
            set(instance, internalInstance);
            var contextType = ctor.contextType;
            if (typeof contextType === 'object' && contextType !== null) {
                instance.context = readContext(contextType);
            } else {
                instance.context = maskedLegacyContext;
            }
            {
                if (instance.state === newProps) {
                    var componentName = getComponentNameFromType(ctor) || 'Component';
                    if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                        didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
                    }
                }
            }
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            if (typeof getDerivedStateFromProps === 'function') {
                instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
            }
            if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
                callComponentWillMount(ctor, instance);
                processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
            }
        }
        var emptyTreeContext = {
            id: 1,
            overflow: ''
        };
        function getTreeId(context) {
            var overflow = context.overflow;
            var idWithLeadingBit = context.id;
            var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
            return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
            var baseIdWithLeadingBit = baseContext.id;
            var baseOverflow = baseContext.overflow;
            var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
            var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
            var slot = index + 1;
            var length = getBitLength(totalChildren) + baseLength;
            if (length > 30) {
                var numberOfOverflowBits = baseLength - baseLength % 5;
                var newOverflowBits = (1 << numberOfOverflowBits) - 1;
                var newOverflow = (baseId & newOverflowBits).toString(32);
                var restOfBaseId = baseId >> numberOfOverflowBits;
                var restOfBaseLength = baseLength - numberOfOverflowBits;
                var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
                var restOfNewBits = slot << restOfBaseLength;
                var id = restOfNewBits | restOfBaseId;
                var overflow = newOverflow + baseOverflow;
                return {
                    id: 1 << restOfLength | id,
                    overflow: overflow
                };
            } else {
                var newBits = slot << baseLength;
                var _id = newBits | baseId;
                var _overflow = baseOverflow;
                return {
                    id: 1 << length | _id,
                    overflow: _overflow
                };
            }
        }
        function getBitLength(number) {
            return 32 - clz32(number);
        }
        function getLeadingBit(id) {
            return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x) {
            var asUint = x >>> 0;
            if (asUint === 0) {
                return 32;
            }
            return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        var SuspenseException = new Error("Suspense Exception: This is not a real error! It's an implementation " + 'detail of `use` to interrupt the current render. You must either ' + 'rethrow it immediately, or move the `use` call outside of the ' + '`try/catch` block. Capturing without rethrowing will lead to ' + 'unexpected behavior.\n\n' + 'To handle async errors, wrap your component in an error boundary, or ' + "call the promise's `.catch` method and pass the result to `use`");
        function createThenableState() {
            return [];
        }
        function noop() {}
        function trackUsedThenable(thenableState, thenable, index) {
            var previous = thenableState[index];
            if (previous === undefined) {
                thenableState.push(thenable);
            } else {
                if (previous !== thenable) {
                    thenable.then(noop, noop);
                    thenable = previous;
                }
            }
            switch(thenable.status){
                case 'fulfilled':
                    {
                        var fulfilledValue = thenable.value;
                        return fulfilledValue;
                    }
                case 'rejected':
                    {
                        var rejectedError = thenable.reason;
                        throw rejectedError;
                    }
                default:
                    {
                        if (typeof thenable.status === 'string') ;
                        else {
                            var pendingThenable = thenable;
                            pendingThenable.status = 'pending';
                            pendingThenable.then(function(fulfilledValue) {
                                if (thenable.status === 'pending') {
                                    var fulfilledThenable = thenable;
                                    fulfilledThenable.status = 'fulfilled';
                                    fulfilledThenable.value = fulfilledValue;
                                }
                            }, function(error) {
                                if (thenable.status === 'pending') {
                                    var rejectedThenable = thenable;
                                    rejectedThenable.status = 'rejected';
                                    rejectedThenable.reason = error;
                                }
                            });
                            switch(thenable.status){
                                case 'fulfilled':
                                    {
                                        var fulfilledThenable = thenable;
                                        return fulfilledThenable.value;
                                    }
                                case 'rejected':
                                    {
                                        var rejectedThenable = thenable;
                                        throw rejectedThenable.reason;
                                    }
                            }
                        }
                        suspendedThenable = thenable;
                        throw SuspenseException;
                    }
            }
        }
        var suspendedThenable = null;
        function getSuspendedThenable() {
            if (suspendedThenable === null) {
                throw new Error('Expected a suspended thenable. This is a bug in React. Please file ' + 'an issue.');
            }
            var thenable = suspendedThenable;
            suspendedThenable = null;
            return thenable;
        }
        function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var thenableIndexCounter = 0;
        var thenableState = null;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
            if (currentlyRenderingComponent === null) {
                throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
            }
            {
                if (isInHookUserCodeInDev) {
                    error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
                }
            }
            return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
            if (prevDeps === null) {
                {
                    error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
                }
                return false;
            }
            {
                if (nextDeps.length !== prevDeps.length) {
                    error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
                }
            }
            for(var i = 0; i < prevDeps.length && i < nextDeps.length; i++){
                if (objectIs(nextDeps[i], prevDeps[i])) {
                    continue;
                }
                return false;
            }
            return true;
        }
        function createHook() {
            if (numberOfReRenders > 0) {
                throw new Error('Rendered more hooks than during the previous render');
            }
            return {
                memoizedState: null,
                queue: null,
                next: null
            };
        }
        function createWorkInProgressHook() {
            if (workInProgressHook === null) {
                if (firstWorkInProgressHook === null) {
                    isReRender = false;
                    firstWorkInProgressHook = workInProgressHook = createHook();
                } else {
                    isReRender = true;
                    workInProgressHook = firstWorkInProgressHook;
                }
            } else {
                if (workInProgressHook.next === null) {
                    isReRender = false;
                    workInProgressHook = workInProgressHook.next = createHook();
                } else {
                    isReRender = true;
                    workInProgressHook = workInProgressHook.next;
                }
            }
            return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity, prevThenableState) {
            currentlyRenderingComponent = componentIdentity;
            currentlyRenderingTask = task;
            {
                isInHookUserCodeInDev = false;
            }
            localIdCounter = 0;
            thenableIndexCounter = 0;
            thenableState = prevThenableState;
        }
        function finishHooks(Component, props, children, refOrContext) {
            while(didScheduleRenderPhaseUpdate){
                didScheduleRenderPhaseUpdate = false;
                localIdCounter = 0;
                thenableIndexCounter = 0;
                numberOfReRenders += 1;
                workInProgressHook = null;
                children = Component(props, refOrContext);
            }
            resetHooksState();
            return children;
        }
        function getThenableStateAfterSuspending() {
            var state = thenableState;
            thenableState = null;
            return state;
        }
        function checkDidRenderIdHook() {
            var didRenderIdHook = localIdCounter !== 0;
            return didRenderIdHook;
        }
        function resetHooksState() {
            {
                isInHookUserCodeInDev = false;
            }
            currentlyRenderingComponent = null;
            currentlyRenderingTask = null;
            didScheduleRenderPhaseUpdate = false;
            firstWorkInProgressHook = null;
            numberOfReRenders = 0;
            renderPhaseUpdates = null;
            workInProgressHook = null;
        }
        function readContext$1(context) {
            {
                if (isInHookUserCodeInDev) {
                    error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
                }
            }
            return readContext(context);
        }
        function useContext(context) {
            {
                currentHookNameInDev = 'useContext';
            }
            resolveCurrentlyRenderingComponent();
            return readContext(context);
        }
        function basicStateReducer(state, action) {
            return typeof action === 'function' ? action(state) : action;
        }
        function useState(initialState) {
            {
                currentHookNameInDev = 'useState';
            }
            return useReducer(basicStateReducer, initialState);
        }
        function useReducer(reducer, initialArg, init) {
            {
                if (reducer !== basicStateReducer) {
                    currentHookNameInDev = 'useReducer';
                }
            }
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            if (isReRender) {
                var queue = workInProgressHook.queue;
                var dispatch = queue.dispatch;
                if (renderPhaseUpdates !== null) {
                    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
                    if (firstRenderPhaseUpdate !== undefined) {
                        renderPhaseUpdates.delete(queue);
                        var newState = workInProgressHook.memoizedState;
                        var update = firstRenderPhaseUpdate;
                        do {
                            var action = update.action;
                            {
                                isInHookUserCodeInDev = true;
                            }
                            newState = reducer(newState, action);
                            {
                                isInHookUserCodeInDev = false;
                            }
                            update = update.next;
                        }while (update !== null)
                        workInProgressHook.memoizedState = newState;
                        return [
                            newState,
                            dispatch
                        ];
                    }
                }
                return [
                    workInProgressHook.memoizedState,
                    dispatch
                ];
            } else {
                {
                    isInHookUserCodeInDev = true;
                }
                var initialState;
                if (reducer === basicStateReducer) {
                    initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
                } else {
                    initialState = init !== undefined ? init(initialArg) : initialArg;
                }
                {
                    isInHookUserCodeInDev = false;
                }
                workInProgressHook.memoizedState = initialState;
                var _queue = workInProgressHook.queue = {
                    last: null,
                    dispatch: null
                };
                var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
                return [
                    workInProgressHook.memoizedState,
                    _dispatch
                ];
            }
        }
        function useMemo(nextCreate, deps) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var nextDeps = deps === undefined ? null : deps;
            if (workInProgressHook !== null) {
                var prevState = workInProgressHook.memoizedState;
                if (prevState !== null) {
                    if (nextDeps !== null) {
                        var prevDeps = prevState[1];
                        if (areHookInputsEqual(nextDeps, prevDeps)) {
                            return prevState[0];
                        }
                    }
                }
            }
            {
                isInHookUserCodeInDev = true;
            }
            var nextValue = nextCreate();
            {
                isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = [
                nextValue,
                nextDeps
            ];
            return nextValue;
        }
        function useRef(initialValue) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var previousRef = workInProgressHook.memoizedState;
            if (previousRef === null) {
                var ref = {
                    current: initialValue
                };
                {
                    Object.seal(ref);
                }
                workInProgressHook.memoizedState = ref;
                return ref;
            } else {
                return previousRef;
            }
        }
        function useLayoutEffect(create, inputs) {
            {
                currentHookNameInDev = 'useLayoutEffect';
                error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
            }
        }
        function dispatchAction(componentIdentity, queue, action) {
            if (numberOfReRenders >= RE_RENDER_LIMIT) {
                throw new Error('Too many re-renders. React limits the number of renders to prevent ' + 'an infinite loop.');
            }
            if (componentIdentity === currentlyRenderingComponent) {
                didScheduleRenderPhaseUpdate = true;
                var update = {
                    action: action,
                    next: null
                };
                if (renderPhaseUpdates === null) {
                    renderPhaseUpdates = new Map();
                }
                var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
                if (firstRenderPhaseUpdate === undefined) {
                    renderPhaseUpdates.set(queue, update);
                } else {
                    var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
                    while(lastRenderPhaseUpdate.next !== null){
                        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
                    }
                    lastRenderPhaseUpdate.next = update;
                }
            }
        }
        function useCallback(callback, deps) {
            return useMemo(function() {
                return callback;
            }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
            resolveCurrentlyRenderingComponent();
            return getSnapshot(source._source);
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            if (getServerSnapshot === undefined) {
                throw new Error('Missing getServerSnapshot, which is required for ' + 'server-rendered content. Will revert to client rendering.');
            }
            return getServerSnapshot();
        }
        function useDeferredValue(value) {
            resolveCurrentlyRenderingComponent();
            return value;
        }
        function unsupportedStartTransition() {
            throw new Error('startTransition cannot be called during server rendering.');
        }
        function useTransition() {
            resolveCurrentlyRenderingComponent();
            return [
                false,
                unsupportedStartTransition
            ];
        }
        function useId() {
            var task = currentlyRenderingTask;
            var treeId = getTreeId(task.treeContext);
            var responseState = currentResponseState;
            if (responseState === null) {
                throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component.');
            }
            var localId = localIdCounter++;
            return makeId(responseState, treeId, localId);
        }
        function use(usable) {
            if (usable !== null && typeof usable === 'object') {
                if (typeof usable.then === 'function') {
                    var thenable = usable;
                    var index = thenableIndexCounter;
                    thenableIndexCounter += 1;
                    if (thenableState === null) {
                        thenableState = createThenableState();
                    }
                    return trackUsedThenable(thenableState, thenable, index);
                } else if (usable.$$typeof === REACT_CONTEXT_TYPE || usable.$$typeof === REACT_SERVER_CONTEXT_TYPE) {
                    var context = usable;
                    return readContext$1(context);
                }
            }
            throw new Error('An unsupported type was passed to use(): ' + String(usable));
        }
        function unsupportedRefresh() {
            throw new Error('Cache cannot be refreshed during server rendering.');
        }
        function useCacheRefresh() {
            return unsupportedRefresh;
        }
        function noop$1() {}
        var HooksDispatcher = {
            readContext: readContext$1,
            useContext: useContext,
            useMemo: useMemo,
            useReducer: useReducer,
            useRef: useRef,
            useState: useState,
            useInsertionEffect: noop$1,
            useLayoutEffect: useLayoutEffect,
            useCallback: useCallback,
            useImperativeHandle: noop$1,
            useEffect: noop$1,
            useDebugValue: noop$1,
            useDeferredValue: useDeferredValue,
            useTransition: useTransition,
            useId: useId,
            useMutableSource: useMutableSource,
            useSyncExternalStore: useSyncExternalStore
        };
        {
            HooksDispatcher.useCacheRefresh = useCacheRefresh;
        }
        {
            HooksDispatcher.use = use;
        }
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
            currentResponseState = responseState;
        }
        function getCacheSignal() {
            throw new Error('Not implemented.');
        }
        function getCacheForType(resourceType) {
            throw new Error('Not implemented.');
        }
        var DefaultCacheDispatcher = {
            getCacheSignal: getCacheSignal,
            getCacheForType: getCacheForType
        };
        function getStackByComponentStackNode(componentStack) {
            try {
                var info = '';
                var node = componentStack;
                do {
                    switch(node.tag){
                        case 0:
                            info += describeBuiltInComponentFrame(node.type, null, null);
                            break;
                        case 1:
                            info += describeFunctionComponentFrame(node.type, null, null);
                            break;
                        case 2:
                            info += describeClassComponentFrame(node.type, null, null);
                            break;
                    }
                    node = node.parent;
                }while (node)
                return info;
            } catch (x) {
                return '\nError generating stack: ' + x.message + '\n' + x.stack;
            }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactCurrentCache = ReactSharedInternals.ReactCurrentCache;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error) {
            console['error'](error);
            return null;
        }
        function noop$2() {}
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
            var pingedTasks = [];
            var abortSet = new Set();
            var resources = createResources();
            var request = {
                destination: null,
                responseState: responseState,
                progressiveChunkSize: progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
                status: OPEN,
                fatalError: null,
                nextSegmentId: 0,
                allPendingTasks: 0,
                pendingRootTasks: 0,
                resources: resources,
                completedRootSegment: null,
                abortableTasks: abortSet,
                pingedTasks: pingedTasks,
                clientRenderedBoundaries: [],
                completedBoundaries: [],
                partialBoundaries: [],
                preamble: [],
                postamble: [],
                onError: onError === undefined ? defaultErrorHandler : onError,
                onAllReady: onAllReady === undefined ? noop$2 : onAllReady,
                onShellReady: onShellReady === undefined ? noop$2 : onShellReady,
                onShellError: onShellError === undefined ? noop$2 : onShellError,
                onFatalError: onFatalError === undefined ? noop$2 : onFatalError
            };
            var rootSegment = createPendingSegment(request, 0, null, rootFormatContext, false, false);
            rootSegment.parentFlushed = true;
            var rootTask = createTask(request, null, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
            pingedTasks.push(rootTask);
            return request;
        }
        function pingTask(request, task) {
            var pingedTasks = request.pingedTasks;
            pingedTasks.push(task);
            if (pingedTasks.length === 1) {
                scheduleWork(function() {
                    return performWork(request);
                });
            }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
            return {
                id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
                rootSegmentID: -1,
                parentFlushed: false,
                pendingTasks: 0,
                forceClientRender: false,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: fallbackAbortableTasks,
                errorDigest: null,
                resources: createBoundaryResources()
            };
        }
        function createTask(request, thenableState, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
            request.allPendingTasks++;
            if (blockedBoundary === null) {
                request.pendingRootTasks++;
            } else {
                blockedBoundary.pendingTasks++;
            }
            var task = {
                node: node,
                ping: function() {
                    return pingTask(request, task);
                },
                blockedBoundary: blockedBoundary,
                blockedSegment: blockedSegment,
                abortSet: abortSet,
                legacyContext: legacyContext,
                context: context,
                treeContext: treeContext,
                thenableState: thenableState
            };
            {
                task.componentStack = null;
            }
            abortSet.add(task);
            return task;
        }
        function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
            return {
                status: PENDING,
                id: -1,
                index: index,
                parentFlushed: false,
                chunks: [],
                children: [],
                formatContext: formatContext,
                boundary: boundary,
                lastPushedText: lastPushedText,
                textEmbedded: textEmbedded
            };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
            {
                if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
                    return '';
                }
                return getStackByComponentStackNode(currentTaskInDEV.componentStack);
            }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
            {
                task.componentStack = {
                    tag: 0,
                    parent: task.componentStack,
                    type: type
                };
            }
        }
        function pushFunctionComponentStackInDEV(task, type) {
            {
                task.componentStack = {
                    tag: 1,
                    parent: task.componentStack,
                    type: type
                };
            }
        }
        function pushClassComponentStackInDEV(task, type) {
            {
                task.componentStack = {
                    tag: 2,
                    parent: task.componentStack,
                    type: type
                };
            }
        }
        function popComponentStackInDEV(task) {
            {
                if (task.componentStack === null) {
                    error('Unexpectedly popped too many stack frames. This is a bug in React.');
                } else {
                    task.componentStack = task.componentStack.parent;
                }
            }
        }
        var lastBoundaryErrorComponentStackDev = null;
        function captureBoundaryErrorDetailsDev(boundary, error) {
            {
                var errorMessage;
                if (typeof error === 'string') {
                    errorMessage = error;
                } else if (error && typeof error.message === 'string') {
                    errorMessage = error.message;
                } else {
                    errorMessage = String(error);
                }
                var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
                lastBoundaryErrorComponentStackDev = null;
                boundary.errorMessage = errorMessage;
                boundary.errorComponentStack = errorComponentStack;
            }
        }
        function logRecoverableError(request, error) {
            var errorDigest = request.onError(error);
            if (errorDigest != null && typeof errorDigest !== 'string') {
                throw new Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
            }
            return errorDigest;
        }
        function fatalError(request, error) {
            var onShellError = request.onShellError;
            onShellError(error);
            var onFatalError = request.onFatalError;
            onFatalError(error);
            if (request.destination !== null) {
                request.status = CLOSED;
                closeWithError(request.destination, error);
            } else {
                request.status = CLOSING;
                request.fatalError = error;
            }
        }
        function renderSuspenseBoundary(request, task, props) {
            pushBuiltInComponentStackInDEV(task, 'Suspense');
            var parentBoundary = task.blockedBoundary;
            var parentSegment = task.blockedSegment;
            var fallback = props.fallback;
            var content = props.children;
            var fallbackAbortSet = new Set();
            var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
            var insertionIndex = parentSegment.chunks.length;
            var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext, false, false);
            parentSegment.children.push(boundarySegment);
            parentSegment.lastPushedText = false;
            var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext, false, false);
            contentRootSegment.parentFlushed = true;
            task.blockedBoundary = newBoundary;
            task.blockedSegment = contentRootSegment;
            {
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, newBoundary.resources);
            }
            try {
                renderNode(request, task, content);
                pushSegmentFinale$1(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
                contentRootSegment.status = COMPLETED;
                if (enableFloat) {
                    if (newBoundary.pendingTasks === 0) {
                        hoistCompletedBoundaryResources(request, newBoundary);
                    }
                }
                queueCompletedSegment(newBoundary, contentRootSegment);
                if (newBoundary.pendingTasks === 0) {
                    popComponentStackInDEV(task);
                    return;
                }
            } catch (error) {
                contentRootSegment.status = ERRORED;
                newBoundary.forceClientRender = true;
                newBoundary.errorDigest = logRecoverableError(request, error);
                {
                    captureBoundaryErrorDetailsDev(newBoundary, error);
                }
            } finally{
                {
                    setCurrentlyRenderingBoundaryResourcesTarget(request.resources, parentBoundary ? parentBoundary.resources : null);
                }
                task.blockedBoundary = parentBoundary;
                task.blockedSegment = parentSegment;
            }
            var suspendedFallbackTask = createTask(request, null, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
            {
                suspendedFallbackTask.componentStack = task.componentStack;
            }
            request.pingedTasks.push(suspendedFallbackTask);
            popComponentStackInDEV(task);
        }
        function hoistCompletedBoundaryResources(request, completedBoundary) {
            if (request.completedRootSegment !== null || request.pendingRootTasks > 0) {
                hoistResourcesToRoot(request.resources, completedBoundary.resources);
            }
        }
        function renderHostElement(request, task, type, props) {
            pushBuiltInComponentStackInDEV(task, type);
            var segment = task.blockedSegment;
            var children = pushStartInstance(segment.chunks, request.preamble, type, props, request.responseState, segment.formatContext, segment.lastPushedText);
            segment.lastPushedText = false;
            var prevContext = segment.formatContext;
            segment.formatContext = getChildFormatContext(prevContext, type, props);
            renderNode(request, task, children);
            segment.formatContext = prevContext;
            pushEndInstance(segment.chunks, request.postamble, type);
            segment.lastPushedText = false;
            popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component) {
            return Component.prototype && Component.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, prevThenableState, Component, props, secondArg) {
            var componentIdentity = {};
            prepareToUseHooks(task, componentIdentity, prevThenableState);
            var result = Component(props, secondArg);
            return finishHooks(Component, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component, props) {
            var nextChildren = instance.render();
            {
                if (instance.props !== props) {
                    if (!didWarnAboutReassigningProps) {
                        error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentNameFromType(Component) || 'a component');
                    }
                    didWarnAboutReassigningProps = true;
                }
            }
            {
                var childContextTypes = Component.childContextTypes;
                if (childContextTypes !== null && childContextTypes !== undefined) {
                    var previousContext = task.legacyContext;
                    var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
                    task.legacyContext = mergedContext;
                    renderNodeDestructive(request, task, null, nextChildren);
                    task.legacyContext = previousContext;
                    return;
                }
            }
            renderNodeDestructive(request, task, null, nextChildren);
        }
        function renderClassComponent(request, task, Component, props) {
            pushClassComponentStackInDEV(task, Component);
            var maskedContext = getMaskedContext(Component, task.legacyContext);
            var instance = constructClassInstance(Component, props, maskedContext);
            mountClassInstance(instance, Component, props, maskedContext);
            finishClassComponent(request, task, instance, Component, props);
            popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutDefaultPropsOnFunctionComponent = {};
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, prevThenableState, Component, props) {
            var legacyContext;
            {
                legacyContext = getMaskedContext(Component, task.legacyContext);
            }
            pushFunctionComponentStackInDEV(task, Component);
            {
                if (Component.prototype && typeof Component.prototype.render === 'function') {
                    var componentName = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutBadClass[componentName]) {
                        error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
                        didWarnAboutBadClass[componentName] = true;
                    }
                }
            }
            var value = renderWithHooks(request, task, prevThenableState, Component, props, legacyContext);
            var hasId = checkDidRenderIdHook();
            {
                if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
                    var _componentName = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutModulePatternComponent[_componentName]) {
                        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);
                        didWarnAboutModulePatternComponent[_componentName] = true;
                    }
                }
            }
            if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
                {
                    var _componentName2 = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutModulePatternComponent[_componentName2]) {
                        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);
                        didWarnAboutModulePatternComponent[_componentName2] = true;
                    }
                }
                mountClassInstance(value, Component, props, legacyContext);
                finishClassComponent(request, task, value, Component, props);
            } else {
                {
                    validateFunctionComponentInDev(Component);
                }
                if (hasId) {
                    var prevTreeContext = task.treeContext;
                    var totalChildren = 1;
                    var index = 0;
                    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
                    try {
                        renderNodeDestructive(request, task, null, value);
                    } finally{
                        task.treeContext = prevTreeContext;
                    }
                } else {
                    renderNodeDestructive(request, task, null, value);
                }
            }
            popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component) {
            {
                if (Component) {
                    if (Component.childContextTypes) {
                        error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
                    }
                }
                if (Component.defaultProps !== undefined) {
                    var componentName = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
                        error('%s: Support for defaultProps will be removed from function components ' + 'in a future major release. Use JavaScript default parameters instead.', componentName);
                        didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
                    }
                }
                if (typeof Component.getDerivedStateFromProps === 'function') {
                    var _componentName3 = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                        error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);
                        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
                    }
                }
                if (typeof Component.contextType === 'object' && Component.contextType !== null) {
                    var _componentName4 = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                        error('%s: Function components do not support contextType.', _componentName4);
                        didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
                    }
                }
            }
        }
        function resolveDefaultProps(Component, baseProps) {
            if (Component && Component.defaultProps) {
                var props = assign({}, baseProps);
                var defaultProps = Component.defaultProps;
                for(var propName in defaultProps){
                    if (props[propName] === undefined) {
                        props[propName] = defaultProps[propName];
                    }
                }
                return props;
            }
            return baseProps;
        }
        function renderForwardRef(request, task, prevThenableState, type, props, ref) {
            pushFunctionComponentStackInDEV(task, type.render);
            var children = renderWithHooks(request, task, prevThenableState, type.render, props, ref);
            var hasId = checkDidRenderIdHook();
            if (hasId) {
                var prevTreeContext = task.treeContext;
                var totalChildren = 1;
                var index = 0;
                task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
                try {
                    renderNodeDestructive(request, task, null, children);
                } finally{
                    task.treeContext = prevTreeContext;
                }
            } else {
                renderNodeDestructive(request, task, null, children);
            }
            popComponentStackInDEV(task);
        }
        function renderMemo(request, task, prevThenableState, type, props, ref) {
            var innerType = type.type;
            var resolvedProps = resolveDefaultProps(innerType, props);
            renderElement(request, task, prevThenableState, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
            {
                if (context._context === undefined) {
                    if (context !== context.Consumer) {
                        if (!hasWarnedAboutUsingContextAsConsumer) {
                            hasWarnedAboutUsingContextAsConsumer = true;
                            error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                        }
                    }
                } else {
                    context = context._context;
                }
            }
            var render = props.children;
            {
                if (typeof render !== 'function') {
                    error('A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.');
                }
            }
            var newValue = readContext(context);
            var newChildren = render(newValue);
            renderNodeDestructive(request, task, null, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
            var context = type._context;
            var value = props.value;
            var children = props.children;
            var prevSnapshot;
            {
                prevSnapshot = task.context;
            }
            task.context = pushProvider(context, value);
            renderNodeDestructive(request, task, null, children);
            task.context = popProvider(context);
            {
                if (prevSnapshot !== task.context) {
                    error('Popping the context provider did not return back to the original snapshot. This is a bug in React.');
                }
            }
        }
        function renderLazyComponent(request, task, prevThenableState, lazyComponent, props, ref) {
            pushBuiltInComponentStackInDEV(task, 'Lazy');
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            var Component = init(payload);
            var resolvedProps = resolveDefaultProps(Component, props);
            renderElement(request, task, prevThenableState, Component, resolvedProps, ref);
            popComponentStackInDEV(task);
        }
        function renderOffscreen(request, task, props) {
            var mode = props.mode;
            if (mode === 'hidden') ;
            else {
                renderNodeDestructive(request, task, null, props.children);
            }
        }
        function renderElement(request, task, prevThenableState, type, props, ref) {
            if (typeof type === 'function') {
                if (shouldConstruct$1(type)) {
                    renderClassComponent(request, task, type, props);
                    return;
                } else {
                    renderIndeterminateComponent(request, task, prevThenableState, type, props);
                    return;
                }
            }
            if (typeof type === 'string') {
                renderHostElement(request, task, type, props);
                return;
            }
            switch(type){
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_DEBUG_TRACING_MODE_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_FRAGMENT_TYPE:
                    {
                        renderNodeDestructive(request, task, null, props.children);
                        return;
                    }
                case REACT_OFFSCREEN_TYPE:
                    {
                        renderOffscreen(request, task, props);
                        return;
                    }
                case REACT_SUSPENSE_LIST_TYPE:
                    {
                        pushBuiltInComponentStackInDEV(task, 'SuspenseList');
                        renderNodeDestructive(request, task, null, props.children);
                        popComponentStackInDEV(task);
                        return;
                    }
                case REACT_SCOPE_TYPE:
                    {
                        throw new Error('ReactDOMServer does not yet support scope components.');
                    }
                case REACT_SUSPENSE_TYPE:
                    {
                        {
                            renderSuspenseBoundary(request, task, props);
                        }
                        return;
                    }
            }
            if (typeof type === 'object' && type !== null) {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        {
                            renderForwardRef(request, task, prevThenableState, type, props, ref);
                            return;
                        }
                    case REACT_MEMO_TYPE:
                        {
                            renderMemo(request, task, prevThenableState, type, props, ref);
                            return;
                        }
                    case REACT_PROVIDER_TYPE:
                        {
                            renderContextProvider(request, task, type, props);
                            return;
                        }
                    case REACT_CONTEXT_TYPE:
                        {
                            renderContextConsumer(request, task, type, props);
                            return;
                        }
                    case REACT_LAZY_TYPE:
                        {
                            renderLazyComponent(request, task, prevThenableState, type, props);
                            return;
                        }
                }
            }
            var info = '';
            {
                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
                }
            }
            throw new Error('Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
            {
                if (typeof Symbol === 'function' && iterable[Symbol.toStringTag] === 'Generator') {
                    if (!didWarnAboutGenerators) {
                        error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
                    }
                    didWarnAboutGenerators = true;
                }
                if (iterable.entries === iteratorFn) {
                    if (!didWarnAboutMaps) {
                        error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                    }
                    didWarnAboutMaps = true;
                }
            }
        }
        function renderNodeDestructive(request, task, prevThenableState, node) {
            {
                try {
                    return renderNodeDestructiveImpl(request, task, prevThenableState, node);
                } catch (x) {
                    if (typeof x === 'object' && x !== null && typeof x.then === 'function') ;
                    else {
                        lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
                    }
                    throw x;
                }
            }
        }
        function renderNodeDestructiveImpl(request, task, prevThenableState, node) {
            task.node = node;
            if (typeof node === 'object' && node !== null) {
                switch(node.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        {
                            var element = node;
                            var type = element.type;
                            var props = element.props;
                            var ref = element.ref;
                            renderElement(request, task, prevThenableState, type, props, ref);
                            return;
                        }
                    case REACT_PORTAL_TYPE:
                        throw new Error('Portals are not currently supported by the server renderer. ' + 'Render them conditionally so that they only appear on the client render.');
                    case REACT_LAZY_TYPE:
                        {
                            var lazyNode = node;
                            var payload = lazyNode._payload;
                            var init = lazyNode._init;
                            var resolvedNode;
                            {
                                try {
                                    resolvedNode = init(payload);
                                } catch (x) {
                                    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                                        pushBuiltInComponentStackInDEV(task, 'Lazy');
                                    }
                                    throw x;
                                }
                            }
                            renderNodeDestructive(request, task, null, resolvedNode);
                            return;
                        }
                }
                if (isArray(node)) {
                    renderChildrenArray(request, task, node);
                    return;
                }
                var iteratorFn = getIteratorFn(node);
                if (iteratorFn) {
                    {
                        validateIterable(node, iteratorFn);
                    }
                    var iterator = iteratorFn.call(node);
                    if (iterator) {
                        var step = iterator.next();
                        if (!step.done) {
                            var children = [];
                            do {
                                children.push(step.value);
                                step = iterator.next();
                            }while (!step.done)
                            renderChildrenArray(request, task, children);
                            return;
                        }
                        return;
                    }
                }
                var childString = Object.prototype.toString.call(node);
                throw new Error("Objects are not valid as a React child (found: " + (childString === '[object Object]' ? 'object with keys {' + Object.keys(node).join(', ') + '}' : childString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
            }
            if (typeof node === 'string') {
                var segment = task.blockedSegment;
                segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
                return;
            }
            if (typeof node === 'number') {
                var _segment = task.blockedSegment;
                _segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, '' + node, request.responseState, _segment.lastPushedText);
                return;
            }
            {
                if (typeof node === 'function') {
                    error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
                }
            }
        }
        function renderChildrenArray(request, task, children) {
            var totalChildren = children.length;
            for(var i = 0; i < totalChildren; i++){
                var prevTreeContext = task.treeContext;
                task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
                try {
                    renderNode(request, task, children[i]);
                } finally{
                    task.treeContext = prevTreeContext;
                }
            }
        }
        function spawnNewSuspendedTask(request, task, thenableState, x) {
            var segment = task.blockedSegment;
            var insertionIndex = segment.chunks.length;
            var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext, segment.lastPushedText, true);
            segment.children.push(newSegment);
            segment.lastPushedText = false;
            var newTask = createTask(request, thenableState, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
            {
                if (task.componentStack !== null) {
                    newTask.componentStack = task.componentStack.parent;
                }
            }
            var ping = newTask.ping;
            x.then(ping, ping);
        }
        function renderNode(request, task, node) {
            var previousFormatContext = task.blockedSegment.formatContext;
            var previousLegacyContext = task.legacyContext;
            var previousContext = task.context;
            var previousComponentStack = null;
            {
                previousComponentStack = task.componentStack;
            }
            try {
                return renderNodeDestructive(request, task, null, node);
            } catch (thrownValue) {
                resetHooksState();
                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                    var wakeable = x;
                    var thenableState = getThenableStateAfterSuspending();
                    spawnNewSuspendedTask(request, task, thenableState, wakeable);
                    task.blockedSegment.formatContext = previousFormatContext;
                    task.legacyContext = previousLegacyContext;
                    task.context = previousContext;
                    switchContext(previousContext);
                    {
                        task.componentStack = previousComponentStack;
                    }
                    return;
                } else {
                    task.blockedSegment.formatContext = previousFormatContext;
                    task.legacyContext = previousLegacyContext;
                    task.context = previousContext;
                    switchContext(previousContext);
                    {
                        task.componentStack = previousComponentStack;
                    }
                    throw x;
                }
            }
        }
        function erroredTask(request, boundary, segment, error) {
            var errorDigest = logRecoverableError(request, error);
            if (boundary === null) {
                fatalError(request, error);
            } else {
                boundary.pendingTasks--;
                if (!boundary.forceClientRender) {
                    boundary.forceClientRender = true;
                    boundary.errorDigest = errorDigest;
                    {
                        captureBoundaryErrorDetailsDev(boundary, error);
                    }
                    if (boundary.parentFlushed) {
                        request.clientRenderedBoundaries.push(boundary);
                    }
                }
            }
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
                var onAllReady = request.onAllReady;
                onAllReady();
            }
        }
        function abortTaskSoft(task) {
            var request = this;
            var boundary = task.blockedBoundary;
            var segment = task.blockedSegment;
            segment.status = ABORTED;
            finishedTask(request, boundary, segment);
        }
        function abortTask(task, request, error) {
            var boundary = task.blockedBoundary;
            var segment = task.blockedSegment;
            segment.status = ABORTED;
            if (boundary === null) {
                request.allPendingTasks--;
                if (request.status !== CLOSING && request.status !== CLOSED) {
                    logRecoverableError(request, error);
                    fatalError(request, error);
                }
            } else {
                boundary.pendingTasks--;
                if (!boundary.forceClientRender) {
                    boundary.forceClientRender = true;
                    boundary.errorDigest = request.onError(error);
                    {
                        var errorPrefix = 'The server did not finish this Suspense boundary: ';
                        var errorMessage;
                        if (error && typeof error.message === 'string') {
                            errorMessage = errorPrefix + error.message;
                        } else {
                            errorMessage = errorPrefix + String(error);
                        }
                        var previousTaskInDev = currentTaskInDEV;
                        currentTaskInDEV = task;
                        try {
                            captureBoundaryErrorDetailsDev(boundary, errorMessage);
                        } finally{
                            currentTaskInDEV = previousTaskInDev;
                        }
                    }
                    if (boundary.parentFlushed) {
                        request.clientRenderedBoundaries.push(boundary);
                    }
                }
                boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
                    return abortTask(fallbackTask, request, error);
                });
                boundary.fallbackAbortableTasks.clear();
                request.allPendingTasks--;
                if (request.allPendingTasks === 0) {
                    var onAllReady = request.onAllReady;
                    onAllReady();
                }
            }
        }
        function queueCompletedSegment(boundary, segment) {
            if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
                var childSegment = segment.children[0];
                childSegment.id = segment.id;
                childSegment.parentFlushed = true;
                if (childSegment.status === COMPLETED) {
                    queueCompletedSegment(boundary, childSegment);
                }
            } else {
                var completedSegments = boundary.completedSegments;
                completedSegments.push(segment);
            }
        }
        function finishedTask(request, boundary, segment) {
            if (boundary === null) {
                if (segment.parentFlushed) {
                    if (request.completedRootSegment !== null) {
                        throw new Error('There can only be one root segment. This is a bug in React.');
                    }
                    request.completedRootSegment = segment;
                }
                request.pendingRootTasks--;
                if (request.pendingRootTasks === 0) {
                    request.onShellError = noop$2;
                    var onShellReady = request.onShellReady;
                    onShellReady();
                }
            } else {
                boundary.pendingTasks--;
                if (boundary.forceClientRender) ;
                else if (boundary.pendingTasks === 0) {
                    if (segment.parentFlushed) {
                        if (segment.status === COMPLETED) {
                            queueCompletedSegment(boundary, segment);
                        }
                    }
                    {
                        hoistCompletedBoundaryResources(request, boundary);
                    }
                    if (boundary.parentFlushed) {
                        request.completedBoundaries.push(boundary);
                    }
                    boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
                    boundary.fallbackAbortableTasks.clear();
                } else {
                    if (segment.parentFlushed) {
                        if (segment.status === COMPLETED) {
                            queueCompletedSegment(boundary, segment);
                            var completedSegments = boundary.completedSegments;
                            if (completedSegments.length === 1) {
                                if (boundary.parentFlushed) {
                                    request.partialBoundaries.push(boundary);
                                }
                            }
                        }
                    }
                }
            }
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
                var onAllReady = request.onAllReady;
                onAllReady();
            }
        }
        function retryTask(request, task) {
            {
                var blockedBoundary = task.blockedBoundary;
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, blockedBoundary ? blockedBoundary.resources : null);
            }
            var segment = task.blockedSegment;
            if (segment.status !== PENDING) {
                return;
            }
            switchContext(task.context);
            var prevTaskInDEV = null;
            {
                prevTaskInDEV = currentTaskInDEV;
                currentTaskInDEV = task;
            }
            try {
                var prevThenableState = task.thenableState;
                task.thenableState = null;
                renderNodeDestructive(request, task, prevThenableState, task.node);
                pushSegmentFinale$1(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
                task.abortSet.delete(task);
                segment.status = COMPLETED;
                finishedTask(request, task.blockedBoundary, segment);
            } catch (thrownValue) {
                resetHooksState();
                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                    var ping = task.ping;
                    x.then(ping, ping);
                    task.thenableState = getThenableStateAfterSuspending();
                } else {
                    task.abortSet.delete(task);
                    segment.status = ERRORED;
                    erroredTask(request, task.blockedBoundary, segment, x);
                }
            } finally{
                {
                    setCurrentlyRenderingBoundaryResourcesTarget(request.resources, null);
                }
                {
                    currentTaskInDEV = prevTaskInDEV;
                }
            }
        }
        function performWork(request) {
            if (request.status === CLOSED) {
                return;
            }
            var prevContext = getActiveContext();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = HooksDispatcher;
            var prevCacheDispatcher;
            {
                prevCacheDispatcher = ReactCurrentCache.current;
                ReactCurrentCache.current = DefaultCacheDispatcher;
            }
            var previousHostDispatcher = prepareToRender(request.resources);
            var prevGetCurrentStackImpl;
            {
                prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
                ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
            }
            var prevResponseState = currentResponseState;
            setCurrentResponseState(request.responseState);
            try {
                var pingedTasks = request.pingedTasks;
                var i;
                for(i = 0; i < pingedTasks.length; i++){
                    var task = pingedTasks[i];
                    retryTask(request, task);
                }
                pingedTasks.splice(0, i);
                if (request.destination !== null) {
                    flushCompletedQueues(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            } finally{
                setCurrentResponseState(prevResponseState);
                ReactCurrentDispatcher$1.current = prevDispatcher;
                {
                    ReactCurrentCache.current = prevCacheDispatcher;
                }
                cleanupAfterRender(previousHostDispatcher);
                {
                    ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
                }
                if (prevDispatcher === HooksDispatcher) {
                    switchContext(prevContext);
                }
            }
        }
        function flushSubtree(request, destination, segment) {
            segment.parentFlushed = true;
            switch(segment.status){
                case PENDING:
                    {
                        var segmentID = segment.id = request.nextSegmentId++;
                        segment.lastPushedText = false;
                        segment.textEmbedded = false;
                        return writePlaceholder(destination, request.responseState, segmentID);
                    }
                case COMPLETED:
                    {
                        segment.status = FLUSHED;
                        var r = true;
                        var chunks = segment.chunks;
                        var chunkIdx = 0;
                        var children = segment.children;
                        for(var childIdx = 0; childIdx < children.length; childIdx++){
                            var nextChild = children[childIdx];
                            for(; chunkIdx < nextChild.index; chunkIdx++){
                                writeChunk(destination, chunks[chunkIdx]);
                            }
                            r = flushSegment(request, destination, nextChild);
                        }
                        for(; chunkIdx < chunks.length - 1; chunkIdx++){
                            writeChunk(destination, chunks[chunkIdx]);
                        }
                        if (chunkIdx < chunks.length) {
                            r = writeChunkAndReturn(destination, chunks[chunkIdx]);
                        }
                        return r;
                    }
                default:
                    {
                        throw new Error('Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.');
                    }
            }
        }
        function flushSegment(request, destination, segment) {
            var boundary = segment.boundary;
            if (boundary === null) {
                return flushSubtree(request, destination, segment);
            }
            boundary.parentFlushed = true;
            if (boundary.forceClientRender) {
                writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
                flushSubtree(request, destination, segment);
                return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
            } else if (boundary.pendingTasks > 0) {
                boundary.rootSegmentID = request.nextSegmentId++;
                if (boundary.completedSegments.length > 0) {
                    request.partialBoundaries.push(boundary);
                }
                var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
                writeStartPendingSuspenseBoundary(destination, request.responseState, id);
                flushSubtree(request, destination, segment);
                return writeEndPendingSuspenseBoundary(destination, request.responseState);
            } else if (boundary.byteSize > request.progressiveChunkSize) {
                boundary.rootSegmentID = request.nextSegmentId++;
                request.completedBoundaries.push(boundary);
                writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
                flushSubtree(request, destination, segment);
                return writeEndPendingSuspenseBoundary(destination, request.responseState);
            } else {
                {
                    hoistResources(request.resources, boundary.resources);
                }
                writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
                var completedSegments = boundary.completedSegments;
                if (completedSegments.length !== 1) {
                    throw new Error('A previously unvisited boundary must have exactly one root segment. This is a bug in React.');
                }
                var contentSegment = completedSegments[0];
                flushSegment(request, destination, contentSegment);
                return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
            }
        }
        function flushInitialResources(destination, resources, responseState, willFlushAllSegments) {
            writeInitialResources(destination, resources, responseState);
        }
        function flushImmediateResources(destination, request) {
            writeImmediateResources(destination, request.resources, request.responseState);
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
            return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
        }
        function flushSegmentContainer(request, destination, segment) {
            writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
            flushSegment(request, destination, segment);
            return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
            {
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, boundary.resources);
            }
            var completedSegments = boundary.completedSegments;
            var i = 0;
            for(; i < completedSegments.length; i++){
                var segment = completedSegments[i];
                flushPartiallyCompletedSegment(request, destination, boundary, segment);
            }
            completedSegments.length = 0;
            return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID, boundary.resources);
        }
        function flushPartialBoundary(request, destination, boundary) {
            {
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, boundary.resources);
            }
            var completedSegments = boundary.completedSegments;
            var i = 0;
            for(; i < completedSegments.length; i++){
                var segment = completedSegments[i];
                if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
                    i++;
                    completedSegments.splice(0, i);
                    return false;
                }
            }
            completedSegments.splice(0, i);
            return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
            if (segment.status === FLUSHED) {
                return true;
            }
            var segmentID = segment.id;
            if (segmentID === -1) {
                var rootSegmentID = segment.id = boundary.rootSegmentID;
                if (rootSegmentID === -1) {
                    throw new Error('A root segment ID must have been assigned by now. This is a bug in React.');
                }
                return flushSegmentContainer(request, destination, segment);
            } else {
                flushSegmentContainer(request, destination, segment);
                return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
            }
        }
        function flushCompletedQueues(request, destination) {
            try {
                var i;
                var completedRootSegment = request.completedRootSegment;
                if (completedRootSegment !== null) {
                    if (request.pendingRootTasks === 0) {
                        if (enableFloat) {
                            var preamble = request.preamble;
                            for(i = 0; i < preamble.length; i++){
                                writeChunk(destination, preamble[i]);
                            }
                            flushInitialResources(destination, request.resources, request.responseState, request.allPendingTasks === 0);
                        }
                        flushSegment(request, destination, completedRootSegment);
                        request.completedRootSegment = null;
                        writeCompletedRoot(destination, request.responseState);
                    } else {
                        return;
                    }
                } else if (enableFloat) {
                    flushImmediateResources(destination, request);
                }
                var clientRenderedBoundaries = request.clientRenderedBoundaries;
                for(i = 0; i < clientRenderedBoundaries.length; i++){
                    var boundary = clientRenderedBoundaries[i];
                    if (!flushClientRenderedBoundary(request, destination, boundary)) {
                        request.destination = null;
                        i++;
                        clientRenderedBoundaries.splice(0, i);
                        return;
                    }
                }
                clientRenderedBoundaries.splice(0, i);
                var completedBoundaries = request.completedBoundaries;
                for(i = 0; i < completedBoundaries.length; i++){
                    var _boundary = completedBoundaries[i];
                    if (!flushCompletedBoundary(request, destination, _boundary)) {
                        request.destination = null;
                        i++;
                        completedBoundaries.splice(0, i);
                        return;
                    }
                }
                completedBoundaries.splice(0, i);
                completeWriting(destination);
                beginWriting(destination);
                var partialBoundaries = request.partialBoundaries;
                for(i = 0; i < partialBoundaries.length; i++){
                    var _boundary2 = partialBoundaries[i];
                    if (!flushPartialBoundary(request, destination, _boundary2)) {
                        request.destination = null;
                        i++;
                        partialBoundaries.splice(0, i);
                        return;
                    }
                }
                partialBoundaries.splice(0, i);
                var largeBoundaries = request.completedBoundaries;
                for(i = 0; i < largeBoundaries.length; i++){
                    var _boundary3 = largeBoundaries[i];
                    if (!flushCompletedBoundary(request, destination, _boundary3)) {
                        request.destination = null;
                        i++;
                        largeBoundaries.splice(0, i);
                        return;
                    }
                }
                largeBoundaries.splice(0, i);
            } finally{
                if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
                    {
                        var postamble = request.postamble;
                        for(var _i = 0; _i < postamble.length; _i++){
                            writeChunk(destination, postamble[_i]);
                        }
                    }
                    {
                        if (request.abortableTasks.size !== 0) {
                            error('There was still abortable task at the root when we closed. This is a bug in React.');
                        }
                    }
                    close(destination);
                }
            }
        }
        function startWork(request) {
            scheduleWork(function() {
                return performWork(request);
            });
        }
        function startFlowing(request, destination) {
            if (request.status === CLOSING) {
                request.status = CLOSED;
                closeWithError(destination, request.fatalError);
                return;
            }
            if (request.status === CLOSED) {
                return;
            }
            if (request.destination !== null) {
                return;
            }
            request.destination = destination;
            try {
                flushCompletedQueues(request, destination);
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function abort(request, reason) {
            try {
                var abortableTasks = request.abortableTasks;
                if (abortableTasks.size > 0) {
                    var _error = reason === undefined ? new Error('The render was aborted by the server without a reason.') : reason;
                    abortableTasks.forEach(function(task) {
                        return abortTask(task, request, _error);
                    });
                    abortableTasks.clear();
                }
                if (request.destination !== null) {
                    flushCompletedQueues(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function onError() {}
        function renderToStringImpl(children, options, generateStaticMarkup, abortReason, unstable_externalRuntimeSrc) {
            var didFatal = false;
            var fatalError = null;
            var result = '';
            var destination = {
                push: function(chunk) {
                    if (chunk !== null) {
                        result += chunk;
                    }
                    return true;
                },
                destroy: function(error) {
                    didFatal = true;
                    fatalError = error;
                }
            };
            var readyToStream = false;
            function onShellReady() {
                readyToStream = true;
            }
            var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : undefined), createRootFormatContext(), Infinity, onError, undefined, onShellReady, undefined, undefined);
            startWork(request);
            abort(request, abortReason);
            startFlowing(request, destination);
            if (didFatal && fatalError !== abortReason) {
                throw fatalError;
            }
            if (!readyToStream) {
                throw new Error('A component suspended while responding to synchronous input. This ' + 'will cause the UI to be replaced with a loading indicator. To fix, ' + 'updates that suspend should be wrapped with startTransition.');
            }
            return result;
        }
        function renderToString(children, options) {
            return renderToStringImpl(children, options, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
        }
        function renderToStaticMarkup(children, options) {
            return renderToStringImpl(children, options, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
        }
        function renderToNodeStream() {
            throw new Error('ReactDOMServer.renderToNodeStream(): The streaming API is not available ' + 'in the browser. Use ReactDOMServer.renderToString() instead.');
        }
        function renderToStaticNodeStream() {
            throw new Error('ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available ' + 'in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
        }
        exports.renderToNodeStream = renderToNodeStream;
        exports.renderToStaticMarkup = renderToStaticMarkup;
        exports.renderToStaticNodeStream = renderToStaticNodeStream;
        exports.renderToString = renderToString;
        exports.version = ReactVersion;
    })();
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server.browser.development.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
if (process.env.NODE_ENV !== "production") {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
        var ReactDOM = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)");
        var ReactVersion = '18.3.0-next-3ba7add60-20221201';
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
            {
                {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    printWarning('warn', format, args);
                }
            }
        }
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                }
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        function scheduleWork(callback) {
            callback();
        }
        var supportsRequestStorage = typeof AsyncLocalStorage === 'function';
        var requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null;
        var VIEW_SIZE = 512;
        var currentView = null;
        var writtenBytes = 0;
        function beginWriting(destination) {
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
        }
        function writeChunk(destination, chunk) {
            if (chunk.length === 0) {
                return;
            }
            if (chunk.length > VIEW_SIZE) {
                {
                    if (precomputedChunkSet.has(chunk)) {
                        error('A large precomputed chunk was passed to writeChunk without being copied.' + ' Large chunks get enqueued directly and are not copied. This is incompatible with precomputed chunks because you cannot enqueue the same precomputed chunk twice.' + ' Use "cloneChunk" to make a copy of this large precomputed chunk before writing it. This is a bug in React.');
                    }
                }
                if (writtenBytes > 0) {
                    destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
                    currentView = new Uint8Array(VIEW_SIZE);
                    writtenBytes = 0;
                }
                destination.enqueue(chunk);
                return;
            }
            var bytesToWrite = chunk;
            var allowableBytes = currentView.length - writtenBytes;
            if (allowableBytes < bytesToWrite.length) {
                if (allowableBytes === 0) {
                    destination.enqueue(currentView);
                } else {
                    currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
                    destination.enqueue(currentView);
                    bytesToWrite = bytesToWrite.subarray(allowableBytes);
                }
                currentView = new Uint8Array(VIEW_SIZE);
                writtenBytes = 0;
            }
            currentView.set(bytesToWrite, writtenBytes);
            writtenBytes += bytesToWrite.length;
        }
        function writeChunkAndReturn(destination, chunk) {
            writeChunk(destination, chunk);
            return true;
        }
        function completeWriting(destination) {
            if (currentView && writtenBytes > 0) {
                destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
                currentView = null;
                writtenBytes = 0;
            }
        }
        function close(destination) {
            destination.close();
        }
        var textEncoder = new TextEncoder();
        function stringToChunk(content) {
            return textEncoder.encode(content);
        }
        var precomputedChunkSet = new Set();
        function stringToPrecomputedChunk(content) {
            var precomputedChunk = textEncoder.encode(content);
            {
                precomputedChunkSet.add(precomputedChunk);
            }
            return precomputedChunk;
        }
        function clonePrecomputedChunk(precomputedChunk) {
            return precomputedChunk.length > VIEW_SIZE ? precomputedChunk.slice() : precomputedChunk;
        }
        function closeWithError(destination, error) {
            if (typeof destination.error === 'function') {
                destination.error(error);
            } else {
                destination.close();
            }
        }
        function typeName(value) {
            {
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
                return type;
            }
        }
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            return '' + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided `%s` CSS property is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        function checkHtmlStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value);
                }
            }
        }
        var enableFloat = true;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
            if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
                return true;
            }
            if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
                return false;
            }
            if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
                validatedAttributeNameCache[attributeName] = true;
                return true;
            }
            illegalAttributeNameCache[attributeName] = true;
            {
                error('Invalid attribute name: `%s`', attributeName);
            }
            return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
            if (propertyInfo !== null && propertyInfo.type === RESERVED) {
                return false;
            }
            switch(typeof value){
                case 'function':
                case 'symbol':
                    return true;
                case 'boolean':
                    {
                        if (isCustomComponentTag) {
                            return false;
                        }
                        if (propertyInfo !== null) {
                            return !propertyInfo.acceptsBooleans;
                        } else {
                            var prefix = name.toLowerCase().slice(0, 5);
                            return prefix !== 'data-' && prefix !== 'aria-';
                        }
                    }
                default:
                    return false;
            }
        }
        function getPropertyInfo(name) {
            return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
            this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
            this.attributeName = attributeName;
            this.attributeNamespace = attributeNamespace;
            this.mustUseProperty = mustUseProperty;
            this.propertyName = name;
            this.type = type;
            this.sanitizeURL = sanitizeURL;
            this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
            'children',
            'dangerouslySetInnerHTML',
            'defaultValue',
            'defaultChecked',
            'innerHTML',
            'suppressContentEditableWarning',
            'suppressHydrationWarning',
            'style'
        ];
        reservedProps.forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        });
        [
            [
                'acceptCharset',
                'accept-charset'
            ],
            [
                'className',
                'class'
            ],
            [
                'htmlFor',
                'for'
            ],
            [
                'httpEquiv',
                'http-equiv'
            ]
        ].forEach(function(_ref) {
            var name = _ref[0], attributeName = _ref[1];
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
            'contentEditable',
            'draggable',
            'spellCheck',
            'value'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        });
        [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        });
        [
            'allowFullScreen',
            'async',
            'autoFocus',
            'autoPlay',
            'controls',
            'default',
            'defer',
            'disabled',
            'disablePictureInPicture',
            'disableRemotePlayback',
            'formNoValidate',
            'hidden',
            'loop',
            'noModule',
            'noValidate',
            'open',
            'playsInline',
            'readOnly',
            'required',
            'reversed',
            'scoped',
            'seamless',
            'itemScope'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        });
        [
            'checked',
            'multiple',
            'muted',
            'selected'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        });
        [
            'capture',
            'download'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        });
        [
            'cols',
            'rows',
            'size',
            'span'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        });
        [
            'rowSpan',
            'start'
        ].forEach(function(name) {
            properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
            return token[1].toUpperCase();
        };
        [
            'accent-height',
            'alignment-baseline',
            'arabic-form',
            'baseline-shift',
            'cap-height',
            'clip-path',
            'clip-rule',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'dominant-baseline',
            'enable-background',
            'fill-opacity',
            'fill-rule',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'glyph-name',
            'glyph-orientation-horizontal',
            'glyph-orientation-vertical',
            'horiz-adv-x',
            'horiz-origin-x',
            'image-rendering',
            'letter-spacing',
            'lighting-color',
            'marker-end',
            'marker-mid',
            'marker-start',
            'overline-position',
            'overline-thickness',
            'paint-order',
            'panose-1',
            'pointer-events',
            'rendering-intent',
            'shape-rendering',
            'stop-color',
            'stop-opacity',
            'strikethrough-position',
            'strikethrough-thickness',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'underline-position',
            'underline-thickness',
            'unicode-bidi',
            'unicode-range',
            'units-per-em',
            'v-alphabetic',
            'v-hanging',
            'v-ideographic',
            'v-mathematical',
            'vector-effect',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'word-spacing',
            'writing-mode',
            'xmlns:xlink',
            'x-height'
        ].forEach(function(attributeName) {
            var name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
            'xlink:actuate',
            'xlink:arcrole',
            'xlink:role',
            'xlink:show',
            'xlink:title',
            'xlink:type'
        ].forEach(function(attributeName) {
            var name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/1999/xlink', false, false);
        });
        [
            'xml:base',
            'xml:lang',
            'xml:space'
        ].forEach(function(attributeName) {
            var name = attributeName.replace(CAMELIZE, capitalize);
            properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/XML/1998/namespace', false, false);
        });
        [
            'tabIndex',
            'crossOrigin'
        ].forEach(function(attributeName) {
            properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = 'xlinkHref';
        properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, 'xlink:href', 'http://www.w3.org/1999/xlink', true, false);
        [
            'src',
            'href',
            'action',
            'formAction'
        ].forEach(function(attributeName) {
            properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isUnitlessNumber = {
            animationIterationCount: true,
            aspectRatio: true,
            borderImageOutset: true,
            borderImageSlice: true,
            borderImageWidth: true,
            boxFlex: true,
            boxFlexGroup: true,
            boxOrdinalGroup: true,
            columnCount: true,
            columns: true,
            flex: true,
            flexGrow: true,
            flexPositive: true,
            flexShrink: true,
            flexNegative: true,
            flexOrder: true,
            gridArea: true,
            gridRow: true,
            gridRowEnd: true,
            gridRowSpan: true,
            gridRowStart: true,
            gridColumn: true,
            gridColumnEnd: true,
            gridColumnSpan: true,
            gridColumnStart: true,
            fontWeight: true,
            lineClamp: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            tabSize: true,
            widows: true,
            zIndex: true,
            zoom: true,
            fillOpacity: true,
            floodOpacity: true,
            stopOpacity: true,
            strokeDasharray: true,
            strokeDashoffset: true,
            strokeMiterlimit: true,
            strokeOpacity: true,
            strokeWidth: true
        };
        function prefixKey(prefix, key) {
            return prefix + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = [
            'Webkit',
            'ms',
            'Moz',
            'O'
        ];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
            prefixes.forEach(function(prefix) {
                isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
            });
        });
        var hasReadOnlyValue = {
            button: true,
            checkbox: true,
            image: true,
            hidden: true,
            radio: true,
            reset: true,
            submit: true
        };
        function checkControlledValueProps(tagName, props) {
            {
                if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
                    error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
                }
                if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
                    error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
                }
            }
        }
        function isCustomComponent(tagName, props) {
            if (tagName.indexOf('-') === -1) {
                return typeof props.is === 'string';
            }
            switch(tagName){
                case 'annotation-xml':
                case 'color-profile':
                case 'font-face':
                case 'font-face-src':
                case 'font-face-uri':
                case 'font-face-format':
                case 'font-face-name':
                case 'missing-glyph':
                    return false;
                default:
                    return true;
            }
        }
        var ariaProperties = {
            'aria-current': 0,
            'aria-description': 0,
            'aria-details': 0,
            'aria-disabled': 0,
            'aria-hidden': 0,
            'aria-invalid': 0,
            'aria-keyshortcuts': 0,
            'aria-label': 0,
            'aria-roledescription': 0,
            'aria-autocomplete': 0,
            'aria-checked': 0,
            'aria-expanded': 0,
            'aria-haspopup': 0,
            'aria-level': 0,
            'aria-modal': 0,
            'aria-multiline': 0,
            'aria-multiselectable': 0,
            'aria-orientation': 0,
            'aria-placeholder': 0,
            'aria-pressed': 0,
            'aria-readonly': 0,
            'aria-required': 0,
            'aria-selected': 0,
            'aria-sort': 0,
            'aria-valuemax': 0,
            'aria-valuemin': 0,
            'aria-valuenow': 0,
            'aria-valuetext': 0,
            'aria-atomic': 0,
            'aria-busy': 0,
            'aria-live': 0,
            'aria-relevant': 0,
            'aria-dropeffect': 0,
            'aria-grabbed': 0,
            'aria-activedescendant': 0,
            'aria-colcount': 0,
            'aria-colindex': 0,
            'aria-colspan': 0,
            'aria-controls': 0,
            'aria-describedby': 0,
            'aria-errormessage': 0,
            'aria-flowto': 0,
            'aria-labelledby': 0,
            'aria-owns': 0,
            'aria-posinset': 0,
            'aria-rowcount': 0,
            'aria-rowindex': 0,
            'aria-rowspan': 0,
            'aria-setsize': 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
        var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
        function validateProperty(tagName, name) {
            {
                if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
                    return true;
                }
                if (rARIACamel.test(name)) {
                    var ariaName = 'aria-' + name.slice(4).toLowerCase();
                    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
                    if (correctName == null) {
                        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
                        warnedProperties[name] = true;
                        return true;
                    }
                    if (name !== correctName) {
                        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
                        warnedProperties[name] = true;
                        return true;
                    }
                }
                if (rARIA.test(name)) {
                    var lowerCasedName = name.toLowerCase();
                    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
                    if (standardName == null) {
                        warnedProperties[name] = true;
                        return false;
                    }
                    if (name !== standardName) {
                        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
                        warnedProperties[name] = true;
                        return true;
                    }
                }
            }
            return true;
        }
        function warnInvalidARIAProps(type, props) {
            {
                var invalidProps = [];
                for(var key in props){
                    var isValid = validateProperty(type, key);
                    if (!isValid) {
                        invalidProps.push(key);
                    }
                }
                var unknownPropString = invalidProps.map(function(prop) {
                    return '`' + prop + '`';
                }).join(', ');
                if (invalidProps.length === 1) {
                    error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
                } else if (invalidProps.length > 1) {
                    error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
                }
            }
        }
        function validateProperties(type, props) {
            if (isCustomComponent(type, props)) {
                return;
            }
            warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
            {
                if (type !== 'input' && type !== 'textarea' && type !== 'select') {
                    return;
                }
                if (props != null && props.value === null && !didWarnValueNull) {
                    didWarnValueNull = true;
                    if (type === 'select' && props.multiple) {
                        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
                    } else {
                        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
                    }
                }
            }
        }
        var possibleStandardNames = {
            accept: 'accept',
            acceptcharset: 'acceptCharset',
            'accept-charset': 'acceptCharset',
            accesskey: 'accessKey',
            action: 'action',
            allowfullscreen: 'allowFullScreen',
            alt: 'alt',
            as: 'as',
            async: 'async',
            autocapitalize: 'autoCapitalize',
            autocomplete: 'autoComplete',
            autocorrect: 'autoCorrect',
            autofocus: 'autoFocus',
            autoplay: 'autoPlay',
            autosave: 'autoSave',
            capture: 'capture',
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            challenge: 'challenge',
            charset: 'charSet',
            checked: 'checked',
            children: 'children',
            cite: 'cite',
            class: 'className',
            classid: 'classID',
            classname: 'className',
            cols: 'cols',
            colspan: 'colSpan',
            content: 'content',
            contenteditable: 'contentEditable',
            contextmenu: 'contextMenu',
            controls: 'controls',
            controlslist: 'controlsList',
            coords: 'coords',
            crossorigin: 'crossOrigin',
            dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
            data: 'data',
            datetime: 'dateTime',
            default: 'default',
            defaultchecked: 'defaultChecked',
            defaultvalue: 'defaultValue',
            defer: 'defer',
            dir: 'dir',
            disabled: 'disabled',
            disablepictureinpicture: 'disablePictureInPicture',
            disableremoteplayback: 'disableRemotePlayback',
            download: 'download',
            draggable: 'draggable',
            enctype: 'encType',
            enterkeyhint: 'enterKeyHint',
            for: 'htmlFor',
            form: 'form',
            formmethod: 'formMethod',
            formaction: 'formAction',
            formenctype: 'formEncType',
            formnovalidate: 'formNoValidate',
            formtarget: 'formTarget',
            frameborder: 'frameBorder',
            headers: 'headers',
            height: 'height',
            hidden: 'hidden',
            high: 'high',
            href: 'href',
            hreflang: 'hrefLang',
            htmlfor: 'htmlFor',
            httpequiv: 'httpEquiv',
            'http-equiv': 'httpEquiv',
            icon: 'icon',
            id: 'id',
            imagesizes: 'imageSizes',
            imagesrcset: 'imageSrcSet',
            innerhtml: 'innerHTML',
            inputmode: 'inputMode',
            integrity: 'integrity',
            is: 'is',
            itemid: 'itemID',
            itemprop: 'itemProp',
            itemref: 'itemRef',
            itemscope: 'itemScope',
            itemtype: 'itemType',
            keyparams: 'keyParams',
            keytype: 'keyType',
            kind: 'kind',
            label: 'label',
            lang: 'lang',
            list: 'list',
            loop: 'loop',
            low: 'low',
            manifest: 'manifest',
            marginwidth: 'marginWidth',
            marginheight: 'marginHeight',
            max: 'max',
            maxlength: 'maxLength',
            media: 'media',
            mediagroup: 'mediaGroup',
            method: 'method',
            min: 'min',
            minlength: 'minLength',
            multiple: 'multiple',
            muted: 'muted',
            name: 'name',
            nomodule: 'noModule',
            nonce: 'nonce',
            novalidate: 'noValidate',
            open: 'open',
            optimum: 'optimum',
            pattern: 'pattern',
            placeholder: 'placeholder',
            playsinline: 'playsInline',
            poster: 'poster',
            preload: 'preload',
            profile: 'profile',
            radiogroup: 'radioGroup',
            readonly: 'readOnly',
            referrerpolicy: 'referrerPolicy',
            rel: 'rel',
            required: 'required',
            reversed: 'reversed',
            role: 'role',
            rows: 'rows',
            rowspan: 'rowSpan',
            sandbox: 'sandbox',
            scope: 'scope',
            scoped: 'scoped',
            scrolling: 'scrolling',
            seamless: 'seamless',
            selected: 'selected',
            shape: 'shape',
            size: 'size',
            sizes: 'sizes',
            span: 'span',
            spellcheck: 'spellCheck',
            src: 'src',
            srcdoc: 'srcDoc',
            srclang: 'srcLang',
            srcset: 'srcSet',
            start: 'start',
            step: 'step',
            style: 'style',
            summary: 'summary',
            tabindex: 'tabIndex',
            target: 'target',
            title: 'title',
            type: 'type',
            usemap: 'useMap',
            value: 'value',
            width: 'width',
            wmode: 'wmode',
            wrap: 'wrap',
            about: 'about',
            accentheight: 'accentHeight',
            'accent-height': 'accentHeight',
            accumulate: 'accumulate',
            additive: 'additive',
            alignmentbaseline: 'alignmentBaseline',
            'alignment-baseline': 'alignmentBaseline',
            allowreorder: 'allowReorder',
            alphabetic: 'alphabetic',
            amplitude: 'amplitude',
            arabicform: 'arabicForm',
            'arabic-form': 'arabicForm',
            ascent: 'ascent',
            attributename: 'attributeName',
            attributetype: 'attributeType',
            autoreverse: 'autoReverse',
            azimuth: 'azimuth',
            basefrequency: 'baseFrequency',
            baselineshift: 'baselineShift',
            'baseline-shift': 'baselineShift',
            baseprofile: 'baseProfile',
            bbox: 'bbox',
            begin: 'begin',
            bias: 'bias',
            by: 'by',
            calcmode: 'calcMode',
            capheight: 'capHeight',
            'cap-height': 'capHeight',
            clip: 'clip',
            clippath: 'clipPath',
            'clip-path': 'clipPath',
            clippathunits: 'clipPathUnits',
            cliprule: 'clipRule',
            'clip-rule': 'clipRule',
            color: 'color',
            colorinterpolation: 'colorInterpolation',
            'color-interpolation': 'colorInterpolation',
            colorinterpolationfilters: 'colorInterpolationFilters',
            'color-interpolation-filters': 'colorInterpolationFilters',
            colorprofile: 'colorProfile',
            'color-profile': 'colorProfile',
            colorrendering: 'colorRendering',
            'color-rendering': 'colorRendering',
            contentscripttype: 'contentScriptType',
            contentstyletype: 'contentStyleType',
            cursor: 'cursor',
            cx: 'cx',
            cy: 'cy',
            d: 'd',
            datatype: 'datatype',
            decelerate: 'decelerate',
            descent: 'descent',
            diffuseconstant: 'diffuseConstant',
            direction: 'direction',
            display: 'display',
            divisor: 'divisor',
            dominantbaseline: 'dominantBaseline',
            'dominant-baseline': 'dominantBaseline',
            dur: 'dur',
            dx: 'dx',
            dy: 'dy',
            edgemode: 'edgeMode',
            elevation: 'elevation',
            enablebackground: 'enableBackground',
            'enable-background': 'enableBackground',
            end: 'end',
            exponent: 'exponent',
            externalresourcesrequired: 'externalResourcesRequired',
            fill: 'fill',
            fillopacity: 'fillOpacity',
            'fill-opacity': 'fillOpacity',
            fillrule: 'fillRule',
            'fill-rule': 'fillRule',
            filter: 'filter',
            filterres: 'filterRes',
            filterunits: 'filterUnits',
            floodopacity: 'floodOpacity',
            'flood-opacity': 'floodOpacity',
            floodcolor: 'floodColor',
            'flood-color': 'floodColor',
            focusable: 'focusable',
            fontfamily: 'fontFamily',
            'font-family': 'fontFamily',
            fontsize: 'fontSize',
            'font-size': 'fontSize',
            fontsizeadjust: 'fontSizeAdjust',
            'font-size-adjust': 'fontSizeAdjust',
            fontstretch: 'fontStretch',
            'font-stretch': 'fontStretch',
            fontstyle: 'fontStyle',
            'font-style': 'fontStyle',
            fontvariant: 'fontVariant',
            'font-variant': 'fontVariant',
            fontweight: 'fontWeight',
            'font-weight': 'fontWeight',
            format: 'format',
            from: 'from',
            fx: 'fx',
            fy: 'fy',
            g1: 'g1',
            g2: 'g2',
            glyphname: 'glyphName',
            'glyph-name': 'glyphName',
            glyphorientationhorizontal: 'glyphOrientationHorizontal',
            'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
            glyphorientationvertical: 'glyphOrientationVertical',
            'glyph-orientation-vertical': 'glyphOrientationVertical',
            glyphref: 'glyphRef',
            gradienttransform: 'gradientTransform',
            gradientunits: 'gradientUnits',
            hanging: 'hanging',
            horizadvx: 'horizAdvX',
            'horiz-adv-x': 'horizAdvX',
            horizoriginx: 'horizOriginX',
            'horiz-origin-x': 'horizOriginX',
            ideographic: 'ideographic',
            imagerendering: 'imageRendering',
            'image-rendering': 'imageRendering',
            in2: 'in2',
            in: 'in',
            inlist: 'inlist',
            intercept: 'intercept',
            k1: 'k1',
            k2: 'k2',
            k3: 'k3',
            k4: 'k4',
            k: 'k',
            kernelmatrix: 'kernelMatrix',
            kernelunitlength: 'kernelUnitLength',
            kerning: 'kerning',
            keypoints: 'keyPoints',
            keysplines: 'keySplines',
            keytimes: 'keyTimes',
            lengthadjust: 'lengthAdjust',
            letterspacing: 'letterSpacing',
            'letter-spacing': 'letterSpacing',
            lightingcolor: 'lightingColor',
            'lighting-color': 'lightingColor',
            limitingconeangle: 'limitingConeAngle',
            local: 'local',
            markerend: 'markerEnd',
            'marker-end': 'markerEnd',
            markerheight: 'markerHeight',
            markermid: 'markerMid',
            'marker-mid': 'markerMid',
            markerstart: 'markerStart',
            'marker-start': 'markerStart',
            markerunits: 'markerUnits',
            markerwidth: 'markerWidth',
            mask: 'mask',
            maskcontentunits: 'maskContentUnits',
            maskunits: 'maskUnits',
            mathematical: 'mathematical',
            mode: 'mode',
            numoctaves: 'numOctaves',
            offset: 'offset',
            opacity: 'opacity',
            operator: 'operator',
            order: 'order',
            orient: 'orient',
            orientation: 'orientation',
            origin: 'origin',
            overflow: 'overflow',
            overlineposition: 'overlinePosition',
            'overline-position': 'overlinePosition',
            overlinethickness: 'overlineThickness',
            'overline-thickness': 'overlineThickness',
            paintorder: 'paintOrder',
            'paint-order': 'paintOrder',
            panose1: 'panose1',
            'panose-1': 'panose1',
            pathlength: 'pathLength',
            patterncontentunits: 'patternContentUnits',
            patterntransform: 'patternTransform',
            patternunits: 'patternUnits',
            pointerevents: 'pointerEvents',
            'pointer-events': 'pointerEvents',
            points: 'points',
            pointsatx: 'pointsAtX',
            pointsaty: 'pointsAtY',
            pointsatz: 'pointsAtZ',
            prefix: 'prefix',
            preservealpha: 'preserveAlpha',
            preserveaspectratio: 'preserveAspectRatio',
            primitiveunits: 'primitiveUnits',
            property: 'property',
            r: 'r',
            radius: 'radius',
            refx: 'refX',
            refy: 'refY',
            renderingintent: 'renderingIntent',
            'rendering-intent': 'renderingIntent',
            repeatcount: 'repeatCount',
            repeatdur: 'repeatDur',
            requiredextensions: 'requiredExtensions',
            requiredfeatures: 'requiredFeatures',
            resource: 'resource',
            restart: 'restart',
            result: 'result',
            results: 'results',
            rotate: 'rotate',
            rx: 'rx',
            ry: 'ry',
            scale: 'scale',
            security: 'security',
            seed: 'seed',
            shaperendering: 'shapeRendering',
            'shape-rendering': 'shapeRendering',
            slope: 'slope',
            spacing: 'spacing',
            specularconstant: 'specularConstant',
            specularexponent: 'specularExponent',
            speed: 'speed',
            spreadmethod: 'spreadMethod',
            startoffset: 'startOffset',
            stddeviation: 'stdDeviation',
            stemh: 'stemh',
            stemv: 'stemv',
            stitchtiles: 'stitchTiles',
            stopcolor: 'stopColor',
            'stop-color': 'stopColor',
            stopopacity: 'stopOpacity',
            'stop-opacity': 'stopOpacity',
            strikethroughposition: 'strikethroughPosition',
            'strikethrough-position': 'strikethroughPosition',
            strikethroughthickness: 'strikethroughThickness',
            'strikethrough-thickness': 'strikethroughThickness',
            string: 'string',
            stroke: 'stroke',
            strokedasharray: 'strokeDasharray',
            'stroke-dasharray': 'strokeDasharray',
            strokedashoffset: 'strokeDashoffset',
            'stroke-dashoffset': 'strokeDashoffset',
            strokelinecap: 'strokeLinecap',
            'stroke-linecap': 'strokeLinecap',
            strokelinejoin: 'strokeLinejoin',
            'stroke-linejoin': 'strokeLinejoin',
            strokemiterlimit: 'strokeMiterlimit',
            'stroke-miterlimit': 'strokeMiterlimit',
            strokewidth: 'strokeWidth',
            'stroke-width': 'strokeWidth',
            strokeopacity: 'strokeOpacity',
            'stroke-opacity': 'strokeOpacity',
            suppresscontenteditablewarning: 'suppressContentEditableWarning',
            suppresshydrationwarning: 'suppressHydrationWarning',
            surfacescale: 'surfaceScale',
            systemlanguage: 'systemLanguage',
            tablevalues: 'tableValues',
            targetx: 'targetX',
            targety: 'targetY',
            textanchor: 'textAnchor',
            'text-anchor': 'textAnchor',
            textdecoration: 'textDecoration',
            'text-decoration': 'textDecoration',
            textlength: 'textLength',
            textrendering: 'textRendering',
            'text-rendering': 'textRendering',
            to: 'to',
            transform: 'transform',
            typeof: 'typeof',
            u1: 'u1',
            u2: 'u2',
            underlineposition: 'underlinePosition',
            'underline-position': 'underlinePosition',
            underlinethickness: 'underlineThickness',
            'underline-thickness': 'underlineThickness',
            unicode: 'unicode',
            unicodebidi: 'unicodeBidi',
            'unicode-bidi': 'unicodeBidi',
            unicoderange: 'unicodeRange',
            'unicode-range': 'unicodeRange',
            unitsperem: 'unitsPerEm',
            'units-per-em': 'unitsPerEm',
            unselectable: 'unselectable',
            valphabetic: 'vAlphabetic',
            'v-alphabetic': 'vAlphabetic',
            values: 'values',
            vectoreffect: 'vectorEffect',
            'vector-effect': 'vectorEffect',
            version: 'version',
            vertadvy: 'vertAdvY',
            'vert-adv-y': 'vertAdvY',
            vertoriginx: 'vertOriginX',
            'vert-origin-x': 'vertOriginX',
            vertoriginy: 'vertOriginY',
            'vert-origin-y': 'vertOriginY',
            vhanging: 'vHanging',
            'v-hanging': 'vHanging',
            videographic: 'vIdeographic',
            'v-ideographic': 'vIdeographic',
            viewbox: 'viewBox',
            viewtarget: 'viewTarget',
            visibility: 'visibility',
            vmathematical: 'vMathematical',
            'v-mathematical': 'vMathematical',
            vocab: 'vocab',
            widths: 'widths',
            wordspacing: 'wordSpacing',
            'word-spacing': 'wordSpacing',
            writingmode: 'writingMode',
            'writing-mode': 'writingMode',
            x1: 'x1',
            x2: 'x2',
            x: 'x',
            xchannelselector: 'xChannelSelector',
            xheight: 'xHeight',
            'x-height': 'xHeight',
            xlinkactuate: 'xlinkActuate',
            'xlink:actuate': 'xlinkActuate',
            xlinkarcrole: 'xlinkArcrole',
            'xlink:arcrole': 'xlinkArcrole',
            xlinkhref: 'xlinkHref',
            'xlink:href': 'xlinkHref',
            xlinkrole: 'xlinkRole',
            'xlink:role': 'xlinkRole',
            xlinkshow: 'xlinkShow',
            'xlink:show': 'xlinkShow',
            xlinktitle: 'xlinkTitle',
            'xlink:title': 'xlinkTitle',
            xlinktype: 'xlinkType',
            'xlink:type': 'xlinkType',
            xmlbase: 'xmlBase',
            'xml:base': 'xmlBase',
            xmllang: 'xmlLang',
            'xml:lang': 'xmlLang',
            xmlns: 'xmlns',
            'xml:space': 'xmlSpace',
            xmlnsxlink: 'xmlnsXlink',
            'xmlns:xlink': 'xmlnsXlink',
            xmlspace: 'xmlSpace',
            y1: 'y1',
            y2: 'y2',
            y: 'y',
            ychannelselector: 'yChannelSelector',
            z: 'z',
            zoomandpan: 'zoomAndPan'
        };
        var validateProperty$1 = function() {};
        {
            var warnedProperties$1 = {};
            var EVENT_NAME_REGEX = /^on./;
            var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
            var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
            var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
            validateProperty$1 = function(tagName, name, value, eventRegistry) {
                if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
                    return true;
                }
                var lowerCasedName = name.toLowerCase();
                if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
                    error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (eventRegistry != null) {
                    var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
                    if (registrationNameDependencies.hasOwnProperty(name)) {
                        return true;
                    }
                    var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
                    if (registrationName != null) {
                        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
                        warnedProperties$1[name] = true;
                        return true;
                    }
                    if (EVENT_NAME_REGEX.test(name)) {
                        error('Unknown event handler property `%s`. It will be ignored.', name);
                        warnedProperties$1[name] = true;
                        return true;
                    }
                } else if (EVENT_NAME_REGEX.test(name)) {
                    if (INVALID_EVENT_NAME_REGEX.test(name)) {
                        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
                    }
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
                    return true;
                }
                if (lowerCasedName === 'innerhtml') {
                    error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (lowerCasedName === 'aria') {
                    error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
                    error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (typeof value === 'number' && isNaN(value)) {
                    error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
                    warnedProperties$1[name] = true;
                    return true;
                }
                var propertyInfo = getPropertyInfo(name);
                var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
                if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
                    var standardName = possibleStandardNames[lowerCasedName];
                    if (standardName !== name) {
                        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
                        warnedProperties$1[name] = true;
                        return true;
                    }
                } else if (!isReserved && name !== lowerCasedName) {
                    error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
                    if (value) {
                        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
                    } else {
                        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
                    }
                    warnedProperties$1[name] = true;
                    return true;
                }
                if (isReserved) {
                    return true;
                }
                if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
                    warnedProperties$1[name] = true;
                    return false;
                }
                if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
                    error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
                    warnedProperties$1[name] = true;
                    return true;
                }
                return true;
            };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
            {
                var unknownProps = [];
                for(var key in props){
                    var isValid = validateProperty$1(type, key, props[key], eventRegistry);
                    if (!isValid) {
                        unknownProps.push(key);
                    }
                }
                var unknownPropString = unknownProps.map(function(prop) {
                    return '`' + prop + '`';
                }).join(', ');
                if (unknownProps.length === 1) {
                    error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
                } else if (unknownProps.length > 1) {
                    error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
                }
            }
        };
        function validateProperties$2(type, props, eventRegistry) {
            if (isCustomComponent(type, props)) {
                return;
            }
            warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {};
        {
            var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
            var msPattern = /^-ms-/;
            var hyphenPattern = /-(.)/g;
            var badStyleValueWithSemicolonPattern = /;\s*$/;
            var warnedStyleNames = {};
            var warnedStyleValues = {};
            var warnedForNaNValue = false;
            var warnedForInfinityValue = false;
            var camelize = function(string) {
                return string.replace(hyphenPattern, function(_, character) {
                    return character.toUpperCase();
                });
            };
            var warnHyphenatedStyleName = function(name) {
                if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
                    return;
                }
                warnedStyleNames[name] = true;
                error('Unsupported style property %s. Did you mean %s?', name, camelize(name.replace(msPattern, 'ms-')));
            };
            var warnBadVendoredStyleName = function(name) {
                if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
                    return;
                }
                warnedStyleNames[name] = true;
                error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
            };
            var warnStyleValueWithSemicolon = function(name, value) {
                if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
                    return;
                }
                warnedStyleValues[value] = true;
                error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
            };
            var warnStyleValueIsNaN = function(name, value) {
                if (warnedForNaNValue) {
                    return;
                }
                warnedForNaNValue = true;
                error('`NaN` is an invalid value for the `%s` css style property.', name);
            };
            var warnStyleValueIsInfinity = function(name, value) {
                if (warnedForInfinityValue) {
                    return;
                }
                warnedForInfinityValue = true;
                error('`Infinity` is an invalid value for the `%s` css style property.', name);
            };
            warnValidStyle = function(name, value) {
                if (name.indexOf('-') > -1) {
                    warnHyphenatedStyleName(name);
                } else if (badVendoredStyleNamePattern.test(name)) {
                    warnBadVendoredStyleName(name);
                } else if (badStyleValueWithSemicolonPattern.test(value)) {
                    warnStyleValueWithSemicolon(name, value);
                }
                if (typeof value === 'number') {
                    if (isNaN(value)) {
                        warnStyleValueIsNaN(name, value);
                    } else if (!isFinite(value)) {
                        warnStyleValueIsInfinity(name, value);
                    }
                }
            };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
            {
                checkHtmlStringCoercion(string);
            }
            var str = '' + string;
            var match = matchHtmlRegExp.exec(str);
            if (!match) {
                return str;
            }
            var escape;
            var html = '';
            var index;
            var lastIndex = 0;
            for(index = match.index; index < str.length; index++){
                switch(str.charCodeAt(index)){
                    case 34:
                        escape = '&quot;';
                        break;
                    case 38:
                        escape = '&amp;';
                        break;
                    case 39:
                        escape = '&#x27;';
                        break;
                    case 60:
                        escape = '&lt;';
                        break;
                    case 62:
                        escape = '&gt;';
                        break;
                    default:
                        continue;
                }
                if (lastIndex !== index) {
                    html += str.substring(lastIndex, index);
                }
                lastIndex = index + 1;
                html += escape;
            }
            return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
            if (typeof text === 'boolean' || typeof text === 'number') {
                return '' + text;
            }
            return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
            return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern$1, '-ms-');
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
            {
                if (!didWarn && isJavaScriptProtocol.test(url)) {
                    didWarn = true;
                    error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
                }
            }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
            return isArrayImpl(a);
        }
        var assign = Object.assign;
        function validatePreloadResourceDifference(originalProps, originalImplicit, latestProps, latestImplicit) {
            {
                var href = originalProps.href;
                var originalWarningName = getResourceNameForWarning('preload', originalProps, originalImplicit);
                var latestWarningName = getResourceNameForWarning('preload', latestProps, latestImplicit);
                if (latestProps.as !== originalProps.as) {
                    error('A %s is using the same href "%s" as a %s. This is always an error and React will only keep the first preload' + ' for any given href, discarding subsequent instances. To fix, find where you are using this href in link' + ' tags or in calls to ReactDOM.preload() or ReactDOM.preinit() and either make the Resource types agree or' + ' update the hrefs to be distinct for different Resource types.', latestWarningName, href, originalWarningName);
                } else {
                    var missingProps = null;
                    var extraProps = null;
                    var differentProps = null;
                    if (originalProps.media != null && latestProps.media == null) {
                        missingProps = missingProps || {};
                        missingProps.media = originalProps.media;
                    }
                    for(var propName in latestProps){
                        var propValue = latestProps[propName];
                        var originalValue = originalProps[propName];
                        if (propValue != null && propValue !== originalValue) {
                            if (originalValue == null) {
                                extraProps = extraProps || {};
                                extraProps[propName] = propValue;
                            } else {
                                differentProps = differentProps || {};
                                differentProps[propName] = {
                                    original: originalValue,
                                    latest: propValue
                                };
                            }
                        }
                    }
                    if (missingProps || extraProps || differentProps) {
                        warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                    }
                }
            }
        }
        function validateStyleResourceDifference(originalProps, latestProps) {
            {
                var href = originalProps.href;
                var originalWarningName = getResourceNameForWarning('style', originalProps, false);
                var latestWarningName = getResourceNameForWarning('style', latestProps, false);
                var missingProps = null;
                var extraProps = null;
                var differentProps = null;
                if (originalProps.media != null && latestProps.media == null) {
                    missingProps = missingProps || {};
                    missingProps.media = originalProps.media;
                }
                for(var propName in latestProps){
                    var propValue = latestProps[propName];
                    var originalValue = originalProps[propName];
                    if (propValue != null && propValue !== originalValue) {
                        propName = propName === 'data-precedence' ? 'precedence' : propName;
                        if (originalValue == null) {
                            extraProps = extraProps || {};
                            extraProps[propName] = propValue;
                        } else {
                            differentProps = differentProps || {};
                            differentProps[propName] = {
                                original: originalValue,
                                latest: propValue
                            };
                        }
                    }
                }
                if (missingProps || extraProps || differentProps) {
                    warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                }
            }
        }
        function validateScriptResourceDifference(originalProps, latestProps) {
            {
                var src = originalProps.src;
                var originalWarningName = getResourceNameForWarning('script', originalProps, false);
                var latestWarningName = getResourceNameForWarning('script', latestProps, false);
                var extraProps = null;
                var differentProps = null;
                for(var propName in latestProps){
                    var propValue = latestProps[propName];
                    var originalValue = originalProps[propName];
                    if (propValue != null && propValue !== originalValue) {
                        if (originalValue == null) {
                            extraProps = extraProps || {};
                            extraProps[propName] = propValue;
                        } else {
                            differentProps = differentProps || {};
                            differentProps[propName] = {
                                original: originalValue,
                                latest: propValue
                            };
                        }
                    }
                }
                if (extraProps || differentProps) {
                    warnDifferentProps(src, 'src', originalWarningName, latestWarningName, extraProps, null, differentProps);
                }
            }
        }
        function validateStyleAndHintProps(preloadProps, styleProps, implicitPreload) {
            {
                var href = preloadProps.href;
                var originalWarningName = getResourceNameForWarning('preload', preloadProps, implicitPreload);
                var latestWarningName = getResourceNameForWarning('style', styleProps, false);
                if (preloadProps.as !== 'style') {
                    error('While creating a %s for href "%s" a %s for this same href was found. When preloading a stylesheet the' + ' "as" prop must be of type "style". This most likely ocurred by rendering a preload link with an incorrect' + ' "as" prop or by calling ReactDOM.preload with an incorrect "as" option.', latestWarningName, href, originalWarningName);
                }
                var missingProps = null;
                var extraProps = null;
                var differentProps = null;
                for(var propName in styleProps){
                    var styleValue = styleProps[propName];
                    var preloadValue = preloadProps[propName];
                    switch(propName){
                        case 'crossOrigin':
                        case 'referrerPolicy':
                        case 'media':
                        case 'title':
                            {
                                if (preloadValue !== styleValue && !(preloadValue == null && styleValue == null)) {
                                    if (styleValue == null) {
                                        missingProps = missingProps || {};
                                        missingProps[propName] = preloadValue;
                                    } else if (preloadValue == null) {
                                        extraProps = extraProps || {};
                                        extraProps[propName] = styleValue;
                                    } else {
                                        differentProps = differentProps || {};
                                        differentProps[propName] = {
                                            original: preloadValue,
                                            latest: styleValue
                                        };
                                    }
                                }
                            }
                    }
                }
                if (missingProps || extraProps || differentProps) {
                    warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                }
            }
        }
        function validateScriptAndHintProps(preloadProps, scriptProps, implicitPreload) {
            {
                var href = preloadProps.href;
                var originalWarningName = getResourceNameForWarning('preload', preloadProps, implicitPreload);
                var latestWarningName = getResourceNameForWarning('script', scriptProps, false);
                if (preloadProps.as !== 'script') {
                    error('While creating a %s for href "%s" a %s for this same url was found. When preloading a script the' + ' "as" prop must be of type "script". This most likely ocurred by rendering a preload link with an incorrect' + ' "as" prop or by calling ReactDOM.preload with an incorrect "as" option.', latestWarningName, href, originalWarningName);
                }
                var missingProps = null;
                var extraProps = null;
                var differentProps = null;
                for(var propName in scriptProps){
                    var scriptValue = scriptProps[propName];
                    var preloadValue = preloadProps[propName];
                    switch(propName){
                        case 'crossOrigin':
                        case 'referrerPolicy':
                        case 'integrity':
                            {
                                if (preloadValue !== scriptValue && !(preloadValue == null && scriptValue == null)) {
                                    if (scriptValue == null) {
                                        missingProps = missingProps || {};
                                        missingProps[propName] = preloadValue;
                                    } else if (preloadValue == null) {
                                        extraProps = extraProps || {};
                                        extraProps[propName] = scriptValue;
                                    } else {
                                        differentProps = differentProps || {};
                                        differentProps[propName] = {
                                            original: preloadValue,
                                            latest: scriptValue
                                        };
                                    }
                                }
                            }
                    }
                }
                if (missingProps || extraProps || differentProps) {
                    warnDifferentProps(href, 'href', originalWarningName, latestWarningName, extraProps, missingProps, differentProps);
                }
            }
        }
        function warnDifferentProps(url, urlPropKey, originalName, latestName, extraProps, missingProps, differentProps) {
            {
                var juxtaposedNameStatement = latestName === originalName ? 'an earlier instance of this Resource' : "a " + originalName + " with the same " + urlPropKey;
                var comparisonStatement = '';
                if (missingProps !== null && typeof missingProps === 'object') {
                    for(var propName in missingProps){
                        comparisonStatement += "\n  " + propName + ": missing or null in latest props, \"" + missingProps[propName] + "\" in original props";
                    }
                }
                if (extraProps !== null && typeof extraProps === 'object') {
                    for(var _propName in extraProps){
                        comparisonStatement += "\n  " + _propName + ": \"" + extraProps[_propName] + "\" in latest props, missing or null in original props";
                    }
                }
                if (differentProps !== null && typeof differentProps === 'object') {
                    for(var _propName2 in differentProps){
                        comparisonStatement += "\n  " + _propName2 + ": \"" + differentProps[_propName2].latest + "\" in latest props, \"" + differentProps[_propName2].original + "\" in original props";
                    }
                }
                error('A %s with %s "%s" has props that disagree with those found on %s. Resources always use the props' + ' that were provided the first time they are encountered so any differences will be ignored. Please' + ' update Resources that share an %s to have props that agree. The differences are described below.%s', latestName, urlPropKey, url, juxtaposedNameStatement, urlPropKey, comparisonStatement);
            }
        }
        function getResourceNameForWarning(type, props, implicit) {
            {
                switch(type){
                    case 'style':
                        {
                            return 'style Resource';
                        }
                    case 'script':
                        {
                            return 'script Resource';
                        }
                    case 'preload':
                        {
                            if (implicit) {
                                return "preload for a " + props.as + " Resource";
                            }
                            return "preload Resource (as \"" + props.as + "\")";
                        }
                }
            }
            return 'Resource';
        }
        function validateLinkPropsForStyleResource(props) {
            {
                var href = props.href, onLoad = props.onLoad, onError = props.onError, disabled = props.disabled;
                var allProps = [
                    'onLoad',
                    'onError',
                    'disabled'
                ];
                var includedProps = [];
                if (onLoad) includedProps.push('onLoad');
                if (onError) includedProps.push('onError');
                if (disabled != null) includedProps.push('disabled');
                var allPropsUnionPhrase = propNamesListJoin(allProps, 'or');
                var includedPropsPhrase = propNamesListJoin(includedProps, 'and');
                includedPropsPhrase += includedProps.length === 1 ? ' prop' : ' props';
                if (includedProps.length) {
                    error('A link (rel="stylesheet") element with href "%s" has the precedence prop but also included the %s.' + ' When using %s React will opt out of Resource behavior. If you meant for this' + ' element to be treated as a Resource remove the %s. Otherwise remove the precedence prop.', href, includedPropsPhrase, allPropsUnionPhrase, includedPropsPhrase);
                    return true;
                }
            }
            return false;
        }
        function propNamesListJoin(list, combinator) {
            switch(list.length){
                case 0:
                    return '';
                case 1:
                    return list[0];
                case 2:
                    return list[0] + ' ' + combinator + ' ' + list[1];
                default:
                    return list.slice(0, -1).join(', ') + ', ' + combinator + ' ' + list[list.length - 1];
            }
        }
        function validateLinkPropsForPreloadResource(linkProps) {
            {
                var href = linkProps.href, as = linkProps.as;
                if (as === 'font') {
                    var name = getResourceNameForWarning('preload', linkProps, false);
                    if (!hasOwnProperty.call(linkProps, 'crossOrigin')) {
                        error('A %s with href "%s" did not specify the crossOrigin prop. Font preloads must always use' + ' anonymouse CORS mode. To fix add an empty string, "anonymous", or any other string' + ' value except "use-credentials" for the crossOrigin prop of all font preloads.', name, href);
                    } else if (linkProps.crossOrigin === 'use-credentials') {
                        error('A %s with href "%s" specified a crossOrigin value of "use-credentials". Font preloads must always use' + ' anonymouse CORS mode. To fix use an empty string, "anonymous", or any other string' + ' value except "use-credentials" for the crossOrigin prop of all font preloads.', name, href);
                    }
                }
            }
        }
        function validatePreloadArguments(href, options) {
            {
                if (!href || typeof href !== 'string') {
                    var typeOfArg = getValueDescriptorExpectingObjectForWarning(href);
                    error('ReactDOM.preload() expected the first argument to be a string representing an href but found %s instead.', typeOfArg);
                } else if (typeof options !== 'object' || options === null) {
                    var _typeOfArg = getValueDescriptorExpectingObjectForWarning(options);
                    error('ReactDOM.preload() expected the second argument to be an options argument containing at least an "as" property' + ' specifying the Resource type. It found %s instead. The href for the preload call where this warning originated is "%s".', _typeOfArg, href);
                } else {
                    var as = options.as;
                    switch(as){
                        case 'font':
                            {
                                if (options.crossOrigin === 'use-credentials') {
                                    error('ReactDOM.preload() was called with an "as" type of "font" and with a "crossOrigin" option of "use-credentials".' + ' Fonts preloading must use crossOrigin "anonymous" to be functional. Please update your font preload to omit' + ' the crossOrigin option or change it to any other value than "use-credentials" (Browsers default all other values' + ' to anonymous mode). The href for the preload call where this warning originated is "%s"', href);
                                }
                                break;
                            }
                        case 'script':
                        case 'style':
                            {
                                break;
                            }
                        default:
                            {
                                var typeOfAs = getValueDescriptorExpectingEnumForWarning(as);
                                error('ReactDOM.preload() expected a valid "as" type in the options (second) argument but found %s instead.' + ' Please use one of the following valid values instead: %s. The href for the preload call where this' + ' warning originated is "%s".', typeOfAs, '"style", "font", or "script"', href);
                            }
                    }
                }
            }
        }
        function validatePreinitArguments(href, options) {
            {
                if (!href || typeof href !== 'string') {
                    var typeOfArg = getValueDescriptorExpectingObjectForWarning(href);
                    error('ReactDOM.preinit() expected the first argument to be a string representing an href but found %s instead.', typeOfArg);
                } else if (typeof options !== 'object' || options === null) {
                    var _typeOfArg2 = getValueDescriptorExpectingObjectForWarning(options);
                    error('ReactDOM.preinit() expected the second argument to be an options argument containing at least an "as" property' + ' specifying the Resource type. It found %s instead. The href for the preload call where this warning originated is "%s".', _typeOfArg2, href);
                } else {
                    var as = options.as;
                    switch(as){
                        case 'style':
                        case 'script':
                            {
                                break;
                            }
                        default:
                            {
                                var typeOfAs = getValueDescriptorExpectingEnumForWarning(as);
                                error('ReactDOM.preinit() expected the second argument to be an options argument containing at least an "as" property' + ' specifying the Resource type. It found %s instead. Currently, valid resource types for for preinit are "style"' + ' and "script". The href for the preinit call where this warning originated is "%s".', typeOfAs, href);
                            }
                    }
                }
            }
        }
        function getValueDescriptorExpectingObjectForWarning(thing) {
            return thing === null ? 'null' : thing === undefined ? 'undefined' : thing === '' ? 'an empty string' : "something with type \"" + typeof thing + "\"";
        }
        function getValueDescriptorExpectingEnumForWarning(thing) {
            return thing === null ? 'null' : thing === undefined ? 'undefined' : thing === '' ? 'an empty string' : typeof thing === 'string' ? JSON.stringify(thing) : "something with type \"" + typeof thing + "\"";
        }
        function createResources() {
            return {
                preloadsMap: new Map(),
                stylesMap: new Map(),
                scriptsMap: new Map(),
                headsMap: new Map(),
                charset: null,
                bases: new Set(),
                preconnects: new Set(),
                fontPreloads: new Set(),
                precedences: new Map(),
                usedStylePreloads: new Set(),
                scripts: new Set(),
                usedScriptPreloads: new Set(),
                explicitStylePreloads: new Set(),
                explicitScriptPreloads: new Set(),
                headResources: new Set(),
                structuredMetaKeys: new Map(),
                boundaryResources: null
            };
        }
        function createBoundaryResources() {
            return new Set();
        }
        var currentResources = null;
        var currentResourcesStack = [];
        function prepareToRenderResources(resources) {
            currentResourcesStack.push(currentResources);
            currentResources = resources;
        }
        function finishRenderingResources() {
            currentResources = currentResourcesStack.pop();
        }
        function setCurrentlyRenderingBoundaryResourcesTarget(resources, boundaryResources) {
            resources.boundaryResources = boundaryResources;
        }
        var ReactDOMServerDispatcher = {
            preload: preload,
            preinit: preinit
        };
        function preload(href, options) {
            if (!currentResources) {
                return;
            }
            var resources = currentResources;
            {
                validatePreloadArguments(href, options);
            }
            if (typeof href === 'string' && href && typeof options === 'object' && options !== null) {
                var as = options.as;
                var resource = resources.preloadsMap.get(href);
                if (resource) {
                    {
                        var originallyImplicit = resource._dev_implicit_construction === true;
                        var latestProps = preloadPropsFromPreloadOptions(href, as, options);
                        validatePreloadResourceDifference(resource.props, originallyImplicit, latestProps, false);
                    }
                } else {
                    resource = createPreloadResource(resources, href, as, preloadPropsFromPreloadOptions(href, as, options));
                }
                switch(as){
                    case 'font':
                        {
                            resources.fontPreloads.add(resource);
                            break;
                        }
                    case 'style':
                        {
                            resources.explicitStylePreloads.add(resource);
                            break;
                        }
                    case 'script':
                        {
                            resources.explicitScriptPreloads.add(resource);
                            break;
                        }
                }
            }
        }
        function preinit(href, options) {
            if (!currentResources) {
                return;
            }
            preinitImpl(currentResources, href, options);
        }
        function preinitImpl(resources, href, options) {
            {
                validatePreinitArguments(href, options);
            }
            if (typeof href === 'string' && href && typeof options === 'object' && options !== null) {
                var as = options.as;
                switch(as){
                    case 'style':
                        {
                            var resource = resources.stylesMap.get(href);
                            if (resource) {
                                {
                                    var latestProps = stylePropsFromPreinitOptions(href, resource.precedence, options);
                                    validateStyleResourceDifference(resource.props, latestProps);
                                }
                            } else {
                                var precedence = options.precedence || 'default';
                                var resourceProps = stylePropsFromPreinitOptions(href, precedence, options);
                                resource = createStyleResource(resources, href, precedence, resourceProps);
                            }
                            resource.set.add(resource);
                            resources.explicitStylePreloads.add(resource.hint);
                            return;
                        }
                    case 'script':
                        {
                            var src = href;
                            var _resource = resources.scriptsMap.get(src);
                            if (_resource) {
                                {
                                    var _latestProps = scriptPropsFromPreinitOptions(src, options);
                                    validateScriptResourceDifference(_resource.props, _latestProps);
                                }
                            } else {
                                var scriptProps = scriptPropsFromPreinitOptions(src, options);
                                _resource = createScriptResource(resources, src, scriptProps);
                                resources.scripts.add(_resource);
                            }
                            return;
                        }
                }
            }
        }
        function preloadPropsFromPreloadOptions(href, as, options) {
            return {
                href: href,
                rel: 'preload',
                as: as,
                crossOrigin: as === 'font' ? '' : options.crossOrigin,
                integrity: options.integrity
            };
        }
        function preloadPropsFromRawProps(href, as, rawProps) {
            var props = assign({}, rawProps);
            props.href = href;
            props.rel = 'preload';
            props.as = as;
            if (as === 'font') {
                props.crossOrigin = '';
            }
            return props;
        }
        function preloadAsStylePropsFromProps(href, props) {
            return {
                rel: 'preload',
                as: 'style',
                href: href,
                crossOrigin: props.crossOrigin,
                integrity: props.integrity,
                media: props.media,
                hrefLang: props.hrefLang,
                referrerPolicy: props.referrerPolicy
            };
        }
        function preloadAsScriptPropsFromProps(href, props) {
            return {
                rel: 'preload',
                as: 'script',
                href: href,
                crossOrigin: props.crossOrigin,
                integrity: props.integrity,
                referrerPolicy: props.referrerPolicy
            };
        }
        function createPreloadResource(resources, href, as, props) {
            var preloadsMap = resources.preloadsMap;
            {
                if (preloadsMap.has(href)) {
                    error('createPreloadResource was called when a preload Resource matching the same href already exists. This is a bug in React.');
                }
            }
            var resource = {
                type: 'preload',
                as: as,
                href: href,
                flushed: false,
                props: props
            };
            preloadsMap.set(href, resource);
            return resource;
        }
        function stylePropsFromRawProps(href, precedence, rawProps) {
            var props = assign({}, rawProps);
            props.href = href;
            props.rel = 'stylesheet';
            props['data-precedence'] = precedence;
            delete props.precedence;
            return props;
        }
        function stylePropsFromPreinitOptions(href, precedence, options) {
            return {
                rel: 'stylesheet',
                href: href,
                'data-precedence': precedence,
                crossOrigin: options.crossOrigin
            };
        }
        function createStyleResource(resources, href, precedence, props) {
            {
                if (resources.stylesMap.has(href)) {
                    error('createStyleResource was called when a style Resource matching the same href already exists. This is a bug in React.');
                }
            }
            var stylesMap = resources.stylesMap, preloadsMap = resources.preloadsMap, precedences = resources.precedences;
            var precedenceSet = precedences.get(precedence);
            if (!precedenceSet) {
                precedenceSet = new Set();
                precedences.set(precedence, precedenceSet);
            }
            var hint = preloadsMap.get(href);
            if (hint) {
                adoptPreloadPropsForStyleProps(props, hint.props);
                {
                    validateStyleAndHintProps(hint.props, props, hint._dev_implicit_construction);
                }
            } else {
                var preloadResourceProps = preloadAsStylePropsFromProps(href, props);
                hint = createPreloadResource(resources, href, 'style', preloadResourceProps);
                {
                    hint._dev_implicit_construction = true;
                }
                resources.explicitStylePreloads.add(hint);
            }
            var resource = {
                type: 'style',
                href: href,
                precedence: precedence,
                flushed: false,
                inShell: false,
                props: props,
                hint: hint,
                set: precedenceSet
            };
            stylesMap.set(href, resource);
            return resource;
        }
        function adoptPreloadPropsForStyleProps(resourceProps, preloadProps) {
            if (resourceProps.crossOrigin == null) resourceProps.crossOrigin = preloadProps.crossOrigin;
            if (resourceProps.referrerPolicy == null) resourceProps.referrerPolicy = preloadProps.referrerPolicy;
            if (resourceProps.title == null) resourceProps.title = preloadProps.title;
        }
        function scriptPropsFromPreinitOptions(src, options) {
            return {
                src: src,
                async: true,
                crossOrigin: options.crossOrigin,
                integrity: options.integrity
            };
        }
        function scriptPropsFromRawProps(src, rawProps) {
            var props = assign({}, rawProps);
            props.src = src;
            return props;
        }
        function createScriptResource(resources, src, props) {
            {
                if (resources.scriptsMap.has(src)) {
                    error('createScriptResource was called when a script Resource matching the same src already exists. This is a bug in React.');
                }
            }
            var scriptsMap = resources.scriptsMap, preloadsMap = resources.preloadsMap;
            var hint = preloadsMap.get(src);
            if (hint) {
                adoptPreloadPropsForScriptProps(props, hint.props);
                {
                    validateScriptAndHintProps(hint.props, props, hint._dev_implicit_construction);
                }
            } else {
                var preloadResourceProps = preloadAsScriptPropsFromProps(src, props);
                hint = createPreloadResource(resources, src, 'script', preloadResourceProps);
                {
                    hint._dev_implicit_construction = true;
                }
                resources.explicitScriptPreloads.add(hint);
            }
            var resource = {
                type: 'script',
                src: src,
                flushed: false,
                props: props,
                hint: hint
            };
            scriptsMap.set(src, resource);
            return resource;
        }
        function adoptPreloadPropsForScriptProps(resourceProps, preloadProps) {
            if (resourceProps.crossOrigin == null) resourceProps.crossOrigin = preloadProps.crossOrigin;
            if (resourceProps.referrerPolicy == null) resourceProps.referrerPolicy = preloadProps.referrerPolicy;
            if (resourceProps.integrity == null) resourceProps.integrity = preloadProps.integrity;
        }
        function titlePropsFromRawProps(child, rawProps) {
            var props = assign({}, rawProps);
            props.children = child;
            return props;
        }
        function resourcesFromElement(type, props) {
            if (!currentResources) {
                throw new Error('"currentResources" was expected to exist. This is a bug in React.');
            }
            var resources = currentResources;
            switch(type){
                case 'title':
                    {
                        var child = props.children;
                        if (Array.isArray(child) && child.length === 1) {
                            child = child[0];
                        }
                        if (typeof child === 'string' || typeof child === 'number') {
                            var key = 'title::' + child;
                            var resource = resources.headsMap.get(key);
                            if (!resource) {
                                resource = {
                                    type: 'title',
                                    props: titlePropsFromRawProps(child, props),
                                    flushed: false
                                };
                                resources.headsMap.set(key, resource);
                                resources.headResources.add(resource);
                            }
                        }
                        return true;
                    }
                case 'meta':
                    {
                        var _key, propertyPath;
                        if (typeof props.charSet === 'string') {
                            _key = 'charSet';
                        } else if (typeof props.content === 'string') {
                            var contentKey = '::' + props.content;
                            if (typeof props.httpEquiv === 'string') {
                                _key = 'httpEquiv::' + props.httpEquiv + contentKey;
                            } else if (typeof props.name === 'string') {
                                _key = 'name::' + props.name + contentKey;
                            } else if (typeof props.itemProp === 'string') {
                                _key = 'itemProp::' + props.itemProp + contentKey;
                            } else if (typeof props.property === 'string') {
                                var property = props.property;
                                _key = 'property::' + property + contentKey;
                                propertyPath = property;
                                var parentPath = property.split(':').slice(0, -1).join(':');
                                var parentResource = resources.structuredMetaKeys.get(parentPath);
                                if (parentResource) {
                                    _key = parentResource.key + '::child::' + _key;
                                }
                            }
                        }
                        if (_key) {
                            if (!resources.headsMap.has(_key)) {
                                var _resource2 = {
                                    type: 'meta',
                                    key: _key,
                                    props: assign({}, props),
                                    flushed: false
                                };
                                resources.headsMap.set(_key, _resource2);
                                if (_key === 'charSet') {
                                    resources.charset = _resource2;
                                } else {
                                    if (propertyPath) {
                                        resources.structuredMetaKeys.set(propertyPath, _resource2);
                                    }
                                    resources.headResources.add(_resource2);
                                }
                            }
                        }
                        return true;
                    }
                case 'base':
                    {
                        var target = props.target, href = props.href;
                        var _key2 = 'base';
                        _key2 += typeof href === 'string' ? "[href=\"" + href + "\"]" : ':not([href])';
                        _key2 += typeof target === 'string' ? "[target=\"" + target + "\"]" : ':not([target])';
                        if (!resources.headsMap.has(_key2)) {
                            var _resource3 = {
                                type: 'base',
                                props: assign({}, props),
                                flushed: false
                            };
                            resources.headsMap.set(_key2, _resource3);
                            resources.bases.add(_resource3);
                        }
                        return true;
                    }
            }
            return false;
        }
        function resourcesFromLink(props) {
            if (!currentResources) {
                throw new Error('"currentResources" was expected to exist. This is a bug in React.');
            }
            var resources = currentResources;
            var rel = props.rel, href = props.href;
            if (!href || typeof href !== 'string' || !rel || typeof rel !== 'string') {
                return false;
            }
            var key = '';
            switch(rel){
                case 'stylesheet':
                    {
                        var onLoad = props.onLoad, onError = props.onError, precedence = props.precedence, disabled = props.disabled;
                        if (typeof precedence !== 'string' || onLoad || onError || disabled != null) {
                            {
                                validateLinkPropsForStyleResource(props);
                            }
                            var preloadResource = resources.preloadsMap.get(href);
                            if (!preloadResource) {
                                preloadResource = createPreloadResource(resources, href, 'style', preloadAsStylePropsFromProps(href, props));
                                {
                                    preloadResource._dev_implicit_construction = true;
                                }
                                resources.usedStylePreloads.add(preloadResource);
                            }
                            return false;
                        } else {
                            var _resource4 = resources.stylesMap.get(href);
                            if (_resource4) {
                                {
                                    var resourceProps = stylePropsFromRawProps(href, precedence, props);
                                    adoptPreloadPropsForStyleProps(resourceProps, _resource4.hint.props);
                                    validateStyleResourceDifference(_resource4.props, resourceProps);
                                }
                            } else {
                                var _resourceProps = stylePropsFromRawProps(href, precedence, props);
                                _resource4 = createStyleResource(currentResources, href, precedence, _resourceProps);
                                resources.usedStylePreloads.add(_resource4.hint);
                            }
                            if (resources.boundaryResources) {
                                resources.boundaryResources.add(_resource4);
                            } else {
                                _resource4.set.add(_resource4);
                            }
                            return true;
                        }
                    }
                case 'preload':
                    {
                        var as = props.as;
                        switch(as){
                            case 'script':
                            case 'style':
                            case 'font':
                                {
                                    {
                                        validateLinkPropsForPreloadResource(props);
                                    }
                                    var _resource5 = resources.preloadsMap.get(href);
                                    if (_resource5) {
                                        {
                                            var originallyImplicit = _resource5._dev_implicit_construction === true;
                                            var latestProps = preloadPropsFromRawProps(href, as, props);
                                            validatePreloadResourceDifference(_resource5.props, originallyImplicit, latestProps, false);
                                        }
                                    } else {
                                        _resource5 = createPreloadResource(resources, href, as, preloadPropsFromRawProps(href, as, props));
                                        switch(as){
                                            case 'script':
                                                {
                                                    resources.explicitScriptPreloads.add(_resource5);
                                                    break;
                                                }
                                            case 'style':
                                                {
                                                    resources.explicitStylePreloads.add(_resource5);
                                                    break;
                                                }
                                            case 'font':
                                                {
                                                    resources.fontPreloads.add(_resource5);
                                                    break;
                                                }
                                        }
                                    }
                                    return true;
                                }
                        }
                        break;
                    }
            }
            if (props.onLoad || props.onError) {
                return true;
            }
            var sizes = typeof props.sizes === 'string' ? props.sizes : '';
            var media = typeof props.media === 'string' ? props.media : '';
            key = 'rel:' + rel + '::href:' + href + '::sizes:' + sizes + '::media:' + media;
            var resource = resources.headsMap.get(key);
            if (!resource) {
                resource = {
                    type: 'link',
                    props: assign({}, props),
                    flushed: false
                };
                resources.headsMap.set(key, resource);
                switch(rel){
                    case 'preconnect':
                    case 'dns-prefetch':
                        {
                            resources.preconnects.add(resource);
                            break;
                        }
                    default:
                        {
                            resources.headResources.add(resource);
                        }
                }
            }
            return true;
        }
        function resourcesFromScript(props) {
            if (!currentResources) {
                throw new Error('"currentResources" was expected to exist. This is a bug in React.');
            }
            var resources = currentResources;
            var src = props.src, async = props.async, onLoad = props.onLoad, onError = props.onError;
            if (!src || typeof src !== 'string') {
                return false;
            }
            if (async) {
                if (onLoad || onError) {
                    var preloadResource = resources.preloadsMap.get(src);
                    if (!preloadResource) {
                        preloadResource = createPreloadResource(resources, src, 'script', preloadAsScriptPropsFromProps(src, props));
                        {
                            preloadResource._dev_implicit_construction = true;
                        }
                        resources.usedScriptPreloads.add(preloadResource);
                    }
                } else {
                    var resource = resources.scriptsMap.get(src);
                    if (resource) {
                        {
                            var latestProps = scriptPropsFromRawProps(src, props);
                            adoptPreloadPropsForScriptProps(latestProps, resource.hint.props);
                            validateScriptResourceDifference(resource.props, latestProps);
                        }
                    } else {
                        var resourceProps = scriptPropsFromRawProps(src, props);
                        resource = createScriptResource(resources, src, resourceProps);
                        resources.scripts.add(resource);
                    }
                }
                return true;
            }
            return false;
        }
        function hoistResources(resources, source) {
            var currentBoundaryResources = resources.boundaryResources;
            if (currentBoundaryResources) {
                source.forEach(function(resource) {
                    return currentBoundaryResources.add(resource);
                });
                source.clear();
            }
        }
        function hoistResourcesToRoot(resources, boundaryResources) {
            boundaryResources.forEach(function(resource) {
                return resource.set.add(resource);
            });
            boundaryResources.clear();
        }
        var clientRenderBoundary = '$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};';
        var completeBoundary = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};';
        var completeBoundaryWithStyles = '$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};';
        var completeSegment = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};';
        var ReactDOMSharedInternals = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var ReactDOMCurrentDispatcher = ReactDOMSharedInternals.Dispatcher;
        function prepareToRender(resources) {
            prepareToRenderResources(resources);
            var previousHostDispatcher = ReactDOMCurrentDispatcher.current;
            ReactDOMCurrentDispatcher.current = ReactDOMServerDispatcher;
            return previousHostDispatcher;
        }
        function cleanupAfterRender(previousDispatcher) {
            finishRenderingResources();
            ReactDOMCurrentDispatcher.current = previousDispatcher;
        }
        var ScriptStreamingFormat = 0;
        var dataElementQuotedEnd = stringToPrecomputedChunk('"></template>');
        var startInlineScript = stringToPrecomputedChunk('<script>');
        var endInlineScript = stringToPrecomputedChunk('</script>');
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var scriptIntegirty = stringToPrecomputedChunk('" integrity="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
        function escapeBootstrapScriptContent(scriptText) {
            {
                checkHtmlStringCoercion(scriptText);
            }
            return ('' + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix, s, suffix) {
            return "" + prefix + (s === 's' ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules, externalRuntimeConfig) {
            var idPrefix = identifierPrefix === undefined ? '' : identifierPrefix;
            var inlineScriptWithNonce = nonce === undefined ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
            var bootstrapChunks = [];
            var externalRuntimeDesc = null;
            var streamingFormat = ScriptStreamingFormat;
            if (bootstrapScriptContent !== undefined) {
                bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
            }
            if (bootstrapScripts !== undefined) {
                for(var i = 0; i < bootstrapScripts.length; i++){
                    var scriptConfig = bootstrapScripts[i];
                    var src = typeof scriptConfig === 'string' ? scriptConfig : scriptConfig.src;
                    var integrity = typeof scriptConfig === 'string' ? undefined : scriptConfig.integrity;
                    bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(src)));
                    if (integrity) {
                        bootstrapChunks.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(integrity)));
                    }
                    bootstrapChunks.push(endAsyncScript);
                }
            }
            if (bootstrapModules !== undefined) {
                for(var _i = 0; _i < bootstrapModules.length; _i++){
                    var _scriptConfig = bootstrapModules[_i];
                    var _src = typeof _scriptConfig === 'string' ? _scriptConfig : _scriptConfig.src;
                    var _integrity = typeof _scriptConfig === 'string' ? undefined : _scriptConfig.integrity;
                    bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(_src)));
                    if (_integrity) {
                        bootstrapChunks.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(_integrity)));
                    }
                    bootstrapChunks.push(endAsyncScript);
                }
            }
            return {
                bootstrapChunks: bootstrapChunks,
                placeholderPrefix: stringToPrecomputedChunk(idPrefix + 'P:'),
                segmentPrefix: stringToPrecomputedChunk(idPrefix + 'S:'),
                boundaryPrefix: idPrefix + 'B:',
                idPrefix: idPrefix,
                nextSuspenseID: 0,
                streamingFormat: streamingFormat,
                startInlineScript: inlineScriptWithNonce,
                sentCompleteSegmentFunction: false,
                sentCompleteBoundaryFunction: false,
                sentClientRenderFunction: false,
                sentStyleInsertionFunction: false,
                externalRuntimeConfig: externalRuntimeDesc
            };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue, noscriptTagInScope) {
            return {
                insertionMode: insertionMode,
                selectedValue: selectedValue,
                noscriptTagInScope: noscriptTagInScope
            };
        }
        function createRootFormatContext(namespaceURI) {
            var insertionMode = namespaceURI === 'http://www.w3.org/2000/svg' ? SVG_MODE : namespaceURI === 'http://www.w3.org/1998/Math/MathML' ? MATHML_MODE : ROOT_HTML_MODE;
            return createFormatContext(insertionMode, null, false);
        }
        function getChildFormatContext(parentContext, type, props) {
            switch(type){
                case 'noscript':
                    return createFormatContext(HTML_MODE, null, true);
                case 'select':
                    return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue, parentContext.noscriptTagInScope);
                case 'svg':
                    return createFormatContext(SVG_MODE, null, parentContext.noscriptTagInScope);
                case 'math':
                    return createFormatContext(MATHML_MODE, null, parentContext.noscriptTagInScope);
                case 'foreignObject':
                    return createFormatContext(HTML_MODE, null, parentContext.noscriptTagInScope);
                case 'table':
                    return createFormatContext(HTML_TABLE_MODE, null, parentContext.noscriptTagInScope);
                case 'thead':
                case 'tbody':
                case 'tfoot':
                    return createFormatContext(HTML_TABLE_BODY_MODE, null, parentContext.noscriptTagInScope);
                case 'colgroup':
                    return createFormatContext(HTML_COLGROUP_MODE, null, parentContext.noscriptTagInScope);
                case 'tr':
                    return createFormatContext(HTML_TABLE_ROW_MODE, null, parentContext.noscriptTagInScope);
            }
            if (parentContext.insertionMode >= HTML_TABLE_MODE) {
                return createFormatContext(HTML_MODE, null, parentContext.noscriptTagInScope);
            }
            if (parentContext.insertionMode === ROOT_HTML_MODE) {
                return createFormatContext(HTML_MODE, null, parentContext.noscriptTagInScope);
            }
            return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
            var generatedID = responseState.nextSuspenseID++;
            return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
            var idPrefix = responseState.idPrefix;
            var id = ':' + idPrefix + 'R' + treeId;
            if (localId > 0) {
                id += 'H' + localId.toString(32);
            }
            return id + ':';
        }
        function encodeHTMLTextNode(text) {
            return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk('<!-- -->');
        function pushTextInstance(target, text, responseState, textEmbedded) {
            if (text === '') {
                return textEmbedded;
            }
            if (textEmbedded) {
                target.push(textSeparator);
            }
            target.push(stringToChunk(encodeHTMLTextNode(text)));
            return true;
        }
        function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
            if (lastPushedText && textEmbedded) {
                target.push(textSeparator);
            }
        }
        var styleNameCache = new Map();
        function processStyleName(styleName) {
            var chunk = styleNameCache.get(styleName);
            if (chunk !== undefined) {
                return chunk;
            }
            var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
            styleNameCache.set(styleName, result);
            return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(':');
        var styleSeparator = stringToPrecomputedChunk(';');
        function pushStyle(target, responseState, style) {
            if (typeof style !== 'object') {
                throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.');
            }
            var isFirst = true;
            for(var styleName in style){
                if (!hasOwnProperty.call(style, styleName)) {
                    continue;
                }
                var styleValue = style[styleName];
                if (styleValue == null || typeof styleValue === 'boolean' || styleValue === '') {
                    continue;
                }
                var nameChunk = void 0;
                var valueChunk = void 0;
                var isCustomProperty = styleName.indexOf('--') === 0;
                if (isCustomProperty) {
                    nameChunk = stringToChunk(escapeTextForBrowser(styleName));
                    {
                        checkCSSPropertyStringCoercion(styleValue, styleName);
                    }
                    valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
                } else {
                    {
                        warnValidStyle$1(styleName, styleValue);
                    }
                    nameChunk = processStyleName(styleName);
                    if (typeof styleValue === 'number') {
                        if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                            valueChunk = stringToChunk(styleValue + 'px');
                        } else {
                            valueChunk = stringToChunk('' + styleValue);
                        }
                    } else {
                        {
                            checkCSSPropertyStringCoercion(styleValue, styleName);
                        }
                        valueChunk = stringToChunk(escapeTextForBrowser(('' + styleValue).trim()));
                    }
                }
                if (isFirst) {
                    isFirst = false;
                    target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
                } else {
                    target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
                }
            }
            if (!isFirst) {
                target.push(attributeEnd);
            }
        }
        var attributeSeparator = stringToPrecomputedChunk(' ');
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
            switch(name){
                case 'style':
                    {
                        pushStyle(target, responseState, value);
                        return;
                    }
                case 'defaultValue':
                case 'defaultChecked':
                case 'innerHTML':
                case 'suppressContentEditableWarning':
                case 'suppressHydrationWarning':
                    return;
            }
            if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
                return;
            }
            var propertyInfo = getPropertyInfo(name);
            if (propertyInfo !== null) {
                switch(typeof value){
                    case 'function':
                    case 'symbol':
                        return;
                    case 'boolean':
                        {
                            if (!propertyInfo.acceptsBooleans) {
                                return;
                            }
                        }
                }
                var attributeName = propertyInfo.attributeName;
                var attributeNameChunk = stringToChunk(attributeName);
                switch(propertyInfo.type){
                    case BOOLEAN:
                        if (value) {
                            target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                        }
                        return;
                    case OVERLOADED_BOOLEAN:
                        if (value === true) {
                            target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                        } else if (value === false) ;
                        else {
                            target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                        }
                        return;
                    case NUMERIC:
                        if (!isNaN(value)) {
                            target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                        }
                        break;
                    case POSITIVE_NUMERIC:
                        if (!isNaN(value) && value >= 1) {
                            target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                        }
                        break;
                    default:
                        if (propertyInfo.sanitizeURL) {
                            {
                                checkAttributeStringCoercion(value, attributeName);
                            }
                            value = '' + value;
                            sanitizeURL(value);
                        }
                        target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
            } else if (isAttributeNameSafe(name)) {
                switch(typeof value){
                    case 'function':
                    case 'symbol':
                        return;
                    case 'boolean':
                        {
                            var prefix = name.toLowerCase().slice(0, 5);
                            if (prefix !== 'data-' && prefix !== 'aria-') {
                                return;
                            }
                        }
                }
                target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
        }
        var endOfStartTag = stringToPrecomputedChunk('>');
        var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');
        function pushInnerHTML(target, innerHTML, children) {
            if (innerHTML != null) {
                if (children != null) {
                    throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
                }
                if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
                    throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
                }
                var html = innerHTML.__html;
                if (html !== null && html !== undefined) {
                    {
                        checkHtmlStringCoercion(html);
                    }
                    target.push(stringToChunk('' + html));
                }
            }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
            {
                var value = props[propName];
                if (value != null) {
                    var array = isArray(value);
                    if (props.multiple && !array) {
                        error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
                    } else if (!props.multiple && array) {
                        error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
                    }
                }
            }
        }
        function pushStartSelect(target, props, responseState) {
            {
                checkControlledValueProps('select', props);
                checkSelectProp(props, 'value');
                checkSelectProp(props, 'defaultValue');
                if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
                    error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');
                    didWarnDefaultSelectValue = true;
                }
            }
            target.push(startChunkForTag('select'));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        case 'defaultValue':
                        case 'value':
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            return children;
        }
        function flattenOptionChildren(children) {
            var content = '';
            React.Children.forEach(children, function(child) {
                if (child == null) {
                    return;
                }
                content += child;
                {
                    if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
                        didWarnInvalidOptionChildren = true;
                        error('Cannot infer the option value of complex children. ' + 'Pass a `value` prop or use a plain string as children to <option>.');
                    }
                }
            });
            return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
            var selectedValue = formatContext.selectedValue;
            target.push(startChunkForTag('option'));
            var children = null;
            var value = null;
            var selected = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'selected':
                            selected = propValue;
                            {
                                if (!didWarnSelectedSetOnOption) {
                                    error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');
                                    didWarnSelectedSetOnOption = true;
                                }
                            }
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        case 'value':
                            value = propValue;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            if (selectedValue != null) {
                var stringValue;
                if (value !== null) {
                    {
                        checkAttributeStringCoercion(value, 'value');
                    }
                    stringValue = '' + value;
                } else {
                    {
                        if (innerHTML !== null) {
                            if (!didWarnInvalidOptionInnerHTML) {
                                didWarnInvalidOptionInnerHTML = true;
                                error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows ' + 'which value should be selected.');
                            }
                        }
                    }
                    stringValue = flattenOptionChildren(children);
                }
                if (isArray(selectedValue)) {
                    for(var i = 0; i < selectedValue.length; i++){
                        {
                            checkAttributeStringCoercion(selectedValue[i], 'value');
                        }
                        var v = '' + selectedValue[i];
                        if (v === stringValue) {
                            target.push(selectedMarkerAttribute);
                            break;
                        }
                    }
                } else {
                    {
                        checkAttributeStringCoercion(selectedValue, 'select.value');
                    }
                    if ('' + selectedValue === stringValue) {
                        target.push(selectedMarkerAttribute);
                    }
                }
            } else if (selected) {
                target.push(selectedMarkerAttribute);
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            return children;
        }
        function pushInput(target, props, responseState) {
            {
                checkControlledValueProps('input', props);
                if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
                    error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);
                    didWarnDefaultChecked = true;
                }
                if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
                    error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);
                    didWarnDefaultInputValue = true;
                }
            }
            target.push(startChunkForTag('input'));
            var value = null;
            var defaultValue = null;
            var checked = null;
            var defaultChecked = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('input' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        case 'defaultChecked':
                            defaultChecked = propValue;
                            break;
                        case 'defaultValue':
                            defaultValue = propValue;
                            break;
                        case 'checked':
                            checked = propValue;
                            break;
                        case 'value':
                            value = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            if (checked !== null) {
                pushAttribute(target, responseState, 'checked', checked);
            } else if (defaultChecked !== null) {
                pushAttribute(target, responseState, 'checked', defaultChecked);
            }
            if (value !== null) {
                pushAttribute(target, responseState, 'value', value);
            } else if (defaultValue !== null) {
                pushAttribute(target, responseState, 'value', defaultValue);
            }
            target.push(endOfStartTagSelfClosing);
            return null;
        }
        function pushStartTextArea(target, props, responseState) {
            {
                checkControlledValueProps('textarea', props);
                if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
                    error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');
                    didWarnDefaultTextareaValue = true;
                }
            }
            target.push(startChunkForTag('textarea'));
            var value = null;
            var defaultValue = null;
            var children = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'value':
                            value = propValue;
                            break;
                        case 'defaultValue':
                            defaultValue = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            throw new Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            if (value === null && defaultValue !== null) {
                value = defaultValue;
            }
            target.push(endOfStartTag);
            if (children != null) {
                {
                    error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
                }
                if (value != null) {
                    throw new Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
                }
                if (isArray(children)) {
                    if (children.length > 1) {
                        throw new Error('<textarea> can only have at most one child.');
                    }
                    {
                        checkHtmlStringCoercion(children[0]);
                    }
                    value = '' + children[0];
                }
                {
                    checkHtmlStringCoercion(children);
                }
                value = '' + children;
            }
            if (typeof value === 'string' && value[0] === '\n') {
                target.push(leadingNewline);
            }
            if (value !== null) {
                {
                    checkAttributeStringCoercion(value, 'value');
                }
                target.push(stringToChunk(encodeHTMLTextNode('' + value)));
            }
            return null;
        }
        function pushBase(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromElement('base', props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushSelfClosing(target, props, 'base', responseState);
        }
        function pushMeta(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromElement('meta', props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushSelfClosing(target, props, 'meta', responseState);
        }
        function pushLink(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromLink(props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushLinkImpl(target, props, responseState);
        }
        function pushLinkImpl(target, props, responseState) {
            var isStylesheet = props.rel === 'stylesheet';
            target.push(startChunkForTag('link'));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('link' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        case 'precedence':
                            {
                                if (isStylesheet) {
                                    continue;
                                }
                            }
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTagSelfClosing);
            return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error(tag + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTagSelfClosing);
            return null;
        }
        function pushStartMenuItem(target, props, responseState) {
            target.push(startChunkForTag('menuitem'));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('menuitems cannot have `children` nor `dangerouslySetInnerHTML`.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            return null;
        }
        function pushTitle(target, props, responseState, insertionMode, noscriptTagInScope) {
            {
                var children = props.children;
                var childForValidation = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
                if (Array.isArray(children) && children.length > 1) {
                    error('A title element received an array with more than 1 element as children. ' + 'In browsers title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
                } else if (childForValidation != null && childForValidation.$$typeof != null) {
                    error('A title element received a React element for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
                } else if (childForValidation != null && typeof childForValidation !== 'string' && typeof childForValidation !== 'number') {
                    error('A title element received a value that was not a string or number for children. ' + 'In the browser title Elements can only have Text Nodes as children. If ' + 'the children being rendered output more than a single text node in aggregate the browser ' + 'will display markup and comments as text in the title and hydration will likely fail and ' + 'fall back to client rendering');
                }
            }
            if (insertionMode !== SVG_MODE && !noscriptTagInScope && resourcesFromElement('title', props)) {
                return null;
            }
            return pushTitleImpl(target, props, responseState);
        }
        function pushTitleImpl(target, props, responseState) {
            target.push(startChunkForTag('title'));
            var children = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            throw new Error('`dangerouslySetInnerHTML` does not make sense on <title>.');
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
            if (typeof child === 'string' || typeof child === 'number') {
                target.push(stringToChunk(escapeTextForBrowser(child)));
            }
            target.push(endTag1, stringToChunk('title'), endTag2);
            return null;
        }
        function pushStartHead(target, preamble, props, tag, responseState) {
            return pushStartGenericElement(preamble, props, tag, responseState);
        }
        function pushStartHtml(target, preamble, props, tag, responseState, formatContext) {
            target = preamble;
            if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
            }
            return pushStartGenericElement(target, props, tag, responseState);
        }
        function pushScript(target, props, responseState, textEmbedded, noscriptTagInScope) {
            if (!noscriptTagInScope && resourcesFromScript(props)) {
                if (textEmbedded) {
                    target.push(textSeparator);
                }
                return null;
            }
            return pushScriptImpl(target, props, responseState);
        }
        function pushScriptImpl(target, props, responseState) {
            target.push(startChunkForTag('script'));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            {
                if (children != null && typeof children !== 'string') {
                    var descriptiveStatement = typeof children === 'number' ? 'a number for children' : Array.isArray(children) ? 'an array for children' : 'something unexpected for children';
                    error('A script element was rendered with %s. If script element has children it must be a single string.' + ' Consider using dangerouslySetInnerHTML or passing a plain string as children.', descriptiveStatement);
                }
            }
            pushInnerHTML(target, innerHTML, children);
            if (typeof children === 'string') {
                target.push(stringToChunk(encodeHTMLTextNode(children)));
            }
            target.push(endTag1, stringToChunk('script'), endTag2);
            return null;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            if (typeof children === 'string') {
                target.push(stringToChunk(encodeHTMLTextNode(children)));
                return null;
            }
            return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        case 'style':
                            pushStyle(target, responseState, propValue);
                            break;
                        case 'suppressContentEditableWarning':
                        case 'suppressHydrationWarning':
                            break;
                        default:
                            if (isAttributeNameSafe(propKey) && typeof propValue !== 'function' && typeof propValue !== 'symbol') {
                                target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                            }
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            pushInnerHTML(target, innerHTML, children);
            return children;
        }
        var leadingNewline = stringToPrecomputedChunk('\n');
        function pushStartPreformattedElement(target, props, tag, responseState) {
            target.push(startChunkForTag(tag));
            var children = null;
            var innerHTML = null;
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'children':
                            children = propValue;
                            break;
                        case 'dangerouslySetInnerHTML':
                            innerHTML = propValue;
                            break;
                        default:
                            pushAttribute(target, responseState, propKey, propValue);
                            break;
                    }
                }
            }
            target.push(endOfStartTag);
            if (innerHTML != null) {
                if (children != null) {
                    throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
                }
                if (typeof innerHTML !== 'object' || !('__html' in innerHTML)) {
                    throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
                }
                var html = innerHTML.__html;
                if (html !== null && html !== undefined) {
                    if (typeof html === 'string' && html.length > 0 && html[0] === '\n') {
                        target.push(leadingNewline, stringToChunk(html));
                    } else {
                        {
                            checkHtmlStringCoercion(html);
                        }
                        target.push(stringToChunk('' + html));
                    }
                }
            }
            if (typeof children === 'string' && children[0] === '\n') {
                target.push(leadingNewline);
            }
            return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = new Map();
        function startChunkForTag(tag) {
            var tagStartChunk = validatedTagCache.get(tag);
            if (tagStartChunk === undefined) {
                if (!VALID_TAG_REGEX.test(tag)) {
                    throw new Error("Invalid tag: " + tag);
                }
                tagStartChunk = stringToPrecomputedChunk('<' + tag);
                validatedTagCache.set(tag, tagStartChunk);
            }
            return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
        function pushStartInstance(target, preamble, type, props, responseState, formatContext, textEmbedded) {
            {
                validateProperties(type, props);
                validateProperties$1(type, props);
                validateProperties$2(type, props, null);
                if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
                    error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
                }
                if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
                    if (type.indexOf('-') === -1 && typeof props.is !== 'string' && type.toLowerCase() !== type) {
                        error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', type);
                    }
                }
            }
            switch(type){
                case 'select':
                    return pushStartSelect(target, props, responseState);
                case 'option':
                    return pushStartOption(target, props, responseState, formatContext);
                case 'textarea':
                    return pushStartTextArea(target, props, responseState);
                case 'input':
                    return pushInput(target, props, responseState);
                case 'menuitem':
                    return pushStartMenuItem(target, props, responseState);
                case 'title':
                    return pushTitle(target, props, responseState, formatContext.insertionMode, formatContext.noscriptTagInScope);
                case 'link':
                    return pushLink(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'script':
                    return pushScript(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'meta':
                    return pushMeta(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'base':
                    return pushBase(target, props, responseState, textEmbedded, formatContext.noscriptTagInScope);
                case 'listing':
                case 'pre':
                    {
                        return pushStartPreformattedElement(target, props, type, responseState);
                    }
                case 'area':
                case 'br':
                case 'col':
                case 'embed':
                case 'hr':
                case 'img':
                case 'keygen':
                case 'param':
                case 'source':
                case 'track':
                case 'wbr':
                    {
                        return pushSelfClosing(target, props, type, responseState);
                    }
                case 'annotation-xml':
                case 'color-profile':
                case 'font-face':
                case 'font-face-src':
                case 'font-face-uri':
                case 'font-face-format':
                case 'font-face-name':
                case 'missing-glyph':
                    {
                        return pushStartGenericElement(target, props, type, responseState);
                    }
                case 'head':
                    return pushStartHead(target, preamble, props, type, responseState);
                case 'html':
                    {
                        return pushStartHtml(target, preamble, props, type, responseState, formatContext);
                    }
                default:
                    {
                        if (type.indexOf('-') === -1 && typeof props.is !== 'string') {
                            return pushStartGenericElement(target, props, type, responseState);
                        } else {
                            return pushStartCustomElement(target, props, type, responseState);
                        }
                    }
            }
        }
        var endTag1 = stringToPrecomputedChunk('</');
        var endTag2 = stringToPrecomputedChunk('>');
        function pushEndInstance(target, postamble, type, props) {
            switch(type){
                case 'title':
                case 'script':
                case 'area':
                case 'base':
                case 'br':
                case 'col':
                case 'embed':
                case 'hr':
                case 'img':
                case 'input':
                case 'keygen':
                case 'link':
                case 'meta':
                case 'param':
                case 'source':
                case 'track':
                case 'wbr':
                    {
                        return;
                    }
                case 'body':
                    {
                        {
                            postamble.unshift(endTag1, stringToChunk(type), endTag2);
                            return;
                        }
                    }
                case 'html':
                    {
                        postamble.push(endTag1, stringToChunk(type), endTag2);
                        return;
                    }
            }
            target.push(endTag1, stringToChunk(type), endTag2);
        }
        function writeCompletedRoot(destination, responseState) {
            var bootstrapChunks = responseState.bootstrapChunks;
            var i = 0;
            for(; i < bootstrapChunks.length - 1; i++){
                writeChunk(destination, bootstrapChunks[i]);
            }
            if (i < bootstrapChunks.length) {
                return writeChunkAndReturn(destination, bootstrapChunks[i]);
            }
            return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
            writeChunk(destination, placeholder1);
            writeChunk(destination, responseState.placeholderPrefix);
            var formattedID = stringToChunk(id.toString(16));
            writeChunk(destination, formattedID);
            return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk('<!--$-->');
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk('<!--$!-->');
        var endSuspenseBoundary = stringToPrecomputedChunk('<!--/$-->');
        var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk('<template');
        var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
        var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
        var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
        var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
        var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk('></template>');
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
            writeChunk(destination, startPendingSuspenseBoundary1);
            if (id === null) {
                throw new Error('An ID must have been assigned before we can complete the boundary.');
            }
            writeChunk(destination, id);
            return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
            var result;
            result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
            writeChunk(destination, clientRenderedSuspenseBoundaryError1);
            if (errorDigest) {
                writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
                writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
                writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
            }
            {
                if (errorMesssage) {
                    writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
                    writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
                    writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
                }
                if (errorComponentStack) {
                    writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
                    writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
                    writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
                }
            }
            result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
            return result;
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
            return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk('</div>');
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk('</svg>');
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk('</math>');
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk('</table>');
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk('</tbody></table>');
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk('</tr></table>');
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk('</colgroup></table>');
        function writeStartSegment(destination, responseState, formatContext, id) {
            switch(formatContext.insertionMode){
                case ROOT_HTML_MODE:
                case HTML_MODE:
                    {
                        writeChunk(destination, startSegmentHTML);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentHTML2);
                    }
                case SVG_MODE:
                    {
                        writeChunk(destination, startSegmentSVG);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentSVG2);
                    }
                case MATHML_MODE:
                    {
                        writeChunk(destination, startSegmentMathML);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentMathML2);
                    }
                case HTML_TABLE_MODE:
                    {
                        writeChunk(destination, startSegmentTable);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentTable2);
                    }
                case HTML_TABLE_BODY_MODE:
                    {
                        writeChunk(destination, startSegmentTableBody);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentTableBody2);
                    }
                case HTML_TABLE_ROW_MODE:
                    {
                        writeChunk(destination, startSegmentTableRow);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentTableRow2);
                    }
                case HTML_COLGROUP_MODE:
                    {
                        writeChunk(destination, startSegmentColGroup);
                        writeChunk(destination, responseState.segmentPrefix);
                        writeChunk(destination, stringToChunk(id.toString(16)));
                        return writeChunkAndReturn(destination, startSegmentColGroup2);
                    }
                default:
                    {
                        throw new Error('Unknown insertion mode. This is a bug in React.');
                    }
            }
        }
        function writeEndSegment(destination, formatContext) {
            switch(formatContext.insertionMode){
                case ROOT_HTML_MODE:
                case HTML_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentHTML);
                    }
                case SVG_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentSVG);
                    }
                case MATHML_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentMathML);
                    }
                case HTML_TABLE_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentTable);
                    }
                case HTML_TABLE_BODY_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentTableBody);
                    }
                case HTML_TABLE_ROW_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentTableRow);
                    }
                case HTML_COLGROUP_MODE:
                    {
                        return writeChunkAndReturn(destination, endSegmentColGroup);
                    }
                default:
                    {
                        throw new Error('Unknown insertion mode. This is a bug in React.');
                    }
            }
        }
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegment + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScriptEnd = stringToPrecomputedChunk('")</script>');
        var completeSegmentData1 = stringToPrecomputedChunk('<template data-rsi="" data-sid="');
        var completeSegmentData2 = stringToPrecomputedChunk('" data-pid="');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
            {
                writeChunk(destination, responseState.startInlineScript);
                if (!responseState.sentCompleteSegmentFunction) {
                    responseState.sentCompleteSegmentFunction = true;
                    writeChunk(destination, completeSegmentScript1Full);
                } else {
                    writeChunk(destination, completeSegmentScript1Partial);
                }
            }
            writeChunk(destination, responseState.segmentPrefix);
            var formattedID = stringToChunk(contentSegmentID.toString(16));
            writeChunk(destination, formattedID);
            {
                writeChunk(destination, completeSegmentScript2);
            }
            writeChunk(destination, responseState.placeholderPrefix);
            writeChunk(destination, formattedID);
            {
                return writeChunkAndReturn(destination, completeSegmentScriptEnd);
            }
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundary + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryWithStylesScript1FullBoth = stringToPrecomputedChunk(completeBoundary + ';' + completeBoundaryWithStyles + ';$RR("');
        var completeBoundaryWithStylesScript1FullPartial = stringToPrecomputedChunk(completeBoundaryWithStyles + ';$RR("');
        var completeBoundaryWithStylesScript1Partial = stringToPrecomputedChunk('$RR("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3a = stringToPrecomputedChunk('",');
        var completeBoundaryScript3b = stringToPrecomputedChunk('"');
        var completeBoundaryScriptEnd = stringToPrecomputedChunk(')</script>');
        var completeBoundaryData1 = stringToPrecomputedChunk('<template data-rci="" data-bid="');
        var completeBoundaryWithStylesData1 = stringToPrecomputedChunk('<template data-rri="" data-bid="');
        var completeBoundaryData2 = stringToPrecomputedChunk('" data-sid="');
        var completeBoundaryData3a = stringToPrecomputedChunk('" data-sty="');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID, boundaryResources) {
            var hasStyleDependencies;
            {
                hasStyleDependencies = hasStyleResourceDependencies(boundaryResources);
            }
            {
                writeChunk(destination, responseState.startInlineScript);
                if (hasStyleDependencies) {
                    if (!responseState.sentCompleteBoundaryFunction) {
                        responseState.sentCompleteBoundaryFunction = true;
                        responseState.sentStyleInsertionFunction = true;
                        writeChunk(destination, clonePrecomputedChunk(completeBoundaryWithStylesScript1FullBoth));
                    } else if (!responseState.sentStyleInsertionFunction) {
                        responseState.sentStyleInsertionFunction = true;
                        writeChunk(destination, completeBoundaryWithStylesScript1FullPartial);
                    } else {
                        writeChunk(destination, completeBoundaryWithStylesScript1Partial);
                    }
                } else {
                    if (!responseState.sentCompleteBoundaryFunction) {
                        responseState.sentCompleteBoundaryFunction = true;
                        writeChunk(destination, completeBoundaryScript1Full);
                    } else {
                        writeChunk(destination, completeBoundaryScript1Partial);
                    }
                }
            }
            if (boundaryID === null) {
                throw new Error('An ID must have been assigned before we can complete the boundary.');
            }
            var formattedContentID = stringToChunk(contentSegmentID.toString(16));
            writeChunk(destination, boundaryID);
            {
                writeChunk(destination, completeBoundaryScript2);
            }
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, formattedContentID);
            if (hasStyleDependencies) {
                {
                    writeChunk(destination, completeBoundaryScript3a);
                    writeStyleResourceDependenciesInJS(destination, boundaryResources);
                }
            } else {
                {
                    writeChunk(destination, completeBoundaryScript3b);
                }
            }
            {
                return writeChunkAndReturn(destination, completeBoundaryScriptEnd);
            }
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderBoundary + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript1A = stringToPrecomputedChunk('"');
        var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');
        var clientRenderScriptEnd = stringToPrecomputedChunk(')</script>');
        var clientRenderData1 = stringToPrecomputedChunk('<template data-rxi="" data-bid="');
        var clientRenderData2 = stringToPrecomputedChunk('" data-dgst="');
        var clientRenderData3 = stringToPrecomputedChunk('" data-msg="');
        var clientRenderData4 = stringToPrecomputedChunk('" data-stck="');
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
            {
                writeChunk(destination, responseState.startInlineScript);
                if (!responseState.sentClientRenderFunction) {
                    responseState.sentClientRenderFunction = true;
                    writeChunk(destination, clientRenderScript1Full);
                } else {
                    writeChunk(destination, clientRenderScript1Partial);
                }
            }
            if (boundaryID === null) {
                throw new Error('An ID must have been assigned before we can complete the boundary.');
            }
            writeChunk(destination, boundaryID);
            {
                writeChunk(destination, clientRenderScript1A);
            }
            if (errorDigest || errorMessage || errorComponentStack) {
                {
                    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
                    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || '')));
                }
            }
            if (errorMessage || errorComponentStack) {
                {
                    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
                    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || '')));
                }
            }
            if (errorComponentStack) {
                {
                    writeChunk(destination, clientRenderErrorScriptArgInterstitial);
                    writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
                }
            }
            {
                return writeChunkAndReturn(destination, clientRenderScriptEnd);
            }
        }
        var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g;
        function escapeJSStringsForInstructionScripts(input) {
            var escaped = JSON.stringify(input);
            return escaped.replace(regexForJSStringsInInstructionScripts, function(match) {
                switch(match){
                    case '<':
                        return "\\u003c";
                    case "\u2028":
                        return "\\u2028";
                    case "\u2029":
                        return "\\u2029";
                    default:
                        {
                            throw new Error('escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
                        }
                }
            });
        }
        var regexForJSStringsInScripts = /[&><\u2028\u2029]/g;
        function escapeJSObjectForInstructionScripts(input) {
            var escaped = JSON.stringify(input);
            return escaped.replace(regexForJSStringsInScripts, function(match) {
                switch(match){
                    case '&':
                        return "\\u0026";
                    case '>':
                        return "\\u003e";
                    case '<':
                        return "\\u003c";
                    case "\u2028":
                        return "\\u2028";
                    case "\u2029":
                        return "\\u2029";
                    default:
                        {
                            throw new Error('escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React');
                        }
                }
            });
        }
        var precedencePlaceholderStart = stringToPrecomputedChunk('<style data-precedence="');
        var precedencePlaceholderEnd = stringToPrecomputedChunk('"></style>');
        function writeInitialResources(destination, resources, responseState, willFlushAllSegments) {
            function flushLinkResource(resource) {
                if (!resource.flushed) {
                    pushLinkImpl(target, resource.props, responseState);
                    resource.flushed = true;
                }
            }
            var target = [];
            var charset = resources.charset, bases = resources.bases, preconnects = resources.preconnects, fontPreloads = resources.fontPreloads, precedences = resources.precedences, usedStylePreloads = resources.usedStylePreloads, scripts = resources.scripts, usedScriptPreloads = resources.usedScriptPreloads, explicitStylePreloads = resources.explicitStylePreloads, explicitScriptPreloads = resources.explicitScriptPreloads, headResources = resources.headResources;
            if (charset) {
                pushSelfClosing(target, charset.props, 'meta', responseState);
                charset.flushed = true;
                resources.charset = null;
            }
            bases.forEach(function(r) {
                pushSelfClosing(target, r.props, 'base', responseState);
                r.flushed = true;
            });
            bases.clear();
            preconnects.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            preconnects.clear();
            fontPreloads.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            fontPreloads.clear();
            precedences.forEach(function(p, precedence) {
                if (p.size) {
                    p.forEach(function(r) {
                        pushLinkImpl(target, r.props, responseState);
                        r.flushed = true;
                        r.inShell = true;
                        r.hint.flushed = true;
                    });
                    p.clear();
                } else {
                    target.push(precedencePlaceholderStart, stringToChunk(escapeTextForBrowser(precedence)), precedencePlaceholderEnd);
                }
            });
            usedStylePreloads.forEach(flushLinkResource);
            usedStylePreloads.clear();
            scripts.forEach(function(r) {
                pushScriptImpl(target, r.props, responseState);
                r.flushed = true;
                r.hint.flushed = true;
            });
            scripts.clear();
            usedScriptPreloads.forEach(flushLinkResource);
            usedScriptPreloads.clear();
            explicitStylePreloads.forEach(flushLinkResource);
            explicitStylePreloads.clear();
            explicitScriptPreloads.forEach(flushLinkResource);
            explicitScriptPreloads.clear();
            headResources.forEach(function(r) {
                switch(r.type){
                    case 'title':
                        {
                            pushTitleImpl(target, r.props, responseState);
                            break;
                        }
                    case 'meta':
                        {
                            pushSelfClosing(target, r.props, 'meta', responseState);
                            break;
                        }
                    case 'link':
                        {
                            pushLinkImpl(target, r.props, responseState);
                            break;
                        }
                }
                r.flushed = true;
            });
            headResources.clear();
            var i;
            var r = true;
            for(i = 0; i < target.length - 1; i++){
                writeChunk(destination, target[i]);
            }
            if (i < target.length) {
                r = writeChunkAndReturn(destination, target[i]);
            }
            return r;
        }
        function writeImmediateResources(destination, resources, responseState) {
            function flushLinkResource(resource) {
                if (!resource.flushed) {
                    pushLinkImpl(target, resource.props, responseState);
                    resource.flushed = true;
                }
            }
            var target = [];
            var charset = resources.charset, preconnects = resources.preconnects, fontPreloads = resources.fontPreloads, usedStylePreloads = resources.usedStylePreloads, scripts = resources.scripts, usedScriptPreloads = resources.usedScriptPreloads, explicitStylePreloads = resources.explicitStylePreloads, explicitScriptPreloads = resources.explicitScriptPreloads, headResources = resources.headResources;
            if (charset) {
                pushSelfClosing(target, charset.props, 'meta', responseState);
                charset.flushed = true;
                resources.charset = null;
            }
            preconnects.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            preconnects.clear();
            fontPreloads.forEach(function(r) {
                pushLinkImpl(target, r.props, responseState);
                r.flushed = true;
            });
            fontPreloads.clear();
            usedStylePreloads.forEach(flushLinkResource);
            usedStylePreloads.clear();
            scripts.forEach(function(r) {
                pushStartGenericElement(target, r.props, 'script', responseState);
                pushEndInstance(target, target, 'script', r.props);
                r.flushed = true;
                r.hint.flushed = true;
            });
            scripts.clear();
            usedScriptPreloads.forEach(flushLinkResource);
            usedScriptPreloads.clear();
            explicitStylePreloads.forEach(flushLinkResource);
            explicitStylePreloads.clear();
            explicitScriptPreloads.forEach(flushLinkResource);
            explicitScriptPreloads.clear();
            headResources.forEach(function(r) {
                switch(r.type){
                    case 'title':
                        {
                            pushTitleImpl(target, r.props, responseState);
                            break;
                        }
                    case 'meta':
                        {
                            pushSelfClosing(target, r.props, 'meta', responseState);
                            break;
                        }
                    case 'link':
                        {
                            pushLinkImpl(target, r.props, responseState);
                            break;
                        }
                }
                r.flushed = true;
            });
            headResources.clear();
            var i;
            var r = true;
            for(i = 0; i < target.length - 1; i++){
                writeChunk(destination, target[i]);
            }
            if (i < target.length) {
                r = writeChunkAndReturn(destination, target[i]);
            }
            return r;
        }
        function hasStyleResourceDependencies(boundaryResources) {
            var iter = boundaryResources.values();
            while(true){
                var _iter$next = iter.next(), resource = _iter$next.value;
                if (!resource) break;
                if (!resource.inShell) {
                    return true;
                }
            }
            return false;
        }
        var arrayFirstOpenBracket = stringToPrecomputedChunk('[');
        var arraySubsequentOpenBracket = stringToPrecomputedChunk(',[');
        var arrayInterstitial = stringToPrecomputedChunk(',');
        var arrayCloseBracket = stringToPrecomputedChunk(']');
        function writeStyleResourceDependenciesInJS(destination, boundaryResources) {
            writeChunk(destination, arrayFirstOpenBracket);
            var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
            boundaryResources.forEach(function(resource) {
                if (resource.inShell) ;
                else if (resource.flushed) {
                    writeChunk(destination, nextArrayOpenBrackChunk);
                    writeStyleResourceDependencyHrefOnlyInJS(destination, resource.href);
                    writeChunk(destination, arrayCloseBracket);
                    nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                } else {
                    writeChunk(destination, nextArrayOpenBrackChunk);
                    writeStyleResourceDependencyInJS(destination, resource.href, resource.precedence, resource.props);
                    writeChunk(destination, arrayCloseBracket);
                    nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                    resource.flushed = true;
                    resource.hint.flushed = true;
                }
            });
            writeChunk(destination, arrayCloseBracket);
        }
        function writeStyleResourceDependencyHrefOnlyInJS(destination, href) {
            {
                checkAttributeStringCoercion(href, 'href');
            }
            var coercedHref = '' + href;
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedHref)));
        }
        function writeStyleResourceDependencyInJS(destination, href, precedence, props) {
            {
                checkAttributeStringCoercion(href, 'href');
            }
            var coercedHref = '' + href;
            sanitizeURL(coercedHref);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedHref)));
            {
                checkAttributeStringCoercion(precedence, 'precedence');
            }
            var coercedPrecedence = '' + precedence;
            writeChunk(destination, arrayInterstitial);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedPrecedence)));
            for(var propKey in props){
                if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (propValue == null) {
                        continue;
                    }
                    switch(propKey){
                        case 'href':
                        case 'rel':
                        case 'precedence':
                        case 'data-precedence':
                            {
                                break;
                            }
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                            throw new Error('link' + " is a self-closing tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
                        default:
                            writeStyleResourceAttributeInJS(destination, propKey, propValue);
                            break;
                    }
                }
            }
            return null;
        }
        function writeStyleResourceAttributeInJS(destination, name, value) {
            var attributeName = name.toLowerCase();
            var attributeValue;
            switch(typeof value){
                case 'function':
                case 'symbol':
                    return;
            }
            switch(name){
                case 'innerHTML':
                case 'dangerouslySetInnerHTML':
                case 'suppressContentEditableWarning':
                case 'suppressHydrationWarning':
                case 'style':
                    return;
                case 'className':
                    attributeName = 'class';
                    break;
                case 'hidden':
                    if (value === false) {
                        return;
                    }
                    attributeValue = '';
                    break;
                case 'src':
                case 'href':
                    {
                        {
                            checkAttributeStringCoercion(value, attributeName);
                        }
                        attributeValue = '' + value;
                        sanitizeURL(attributeValue);
                        break;
                    }
                default:
                    {
                        if (!isAttributeNameSafe(name)) {
                            return;
                        }
                    }
            }
            if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
                return;
            }
            {
                checkAttributeStringCoercion(value, attributeName);
            }
            attributeValue = '' + value;
            writeChunk(destination, arrayInterstitial);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(attributeName)));
            writeChunk(destination, arrayInterstitial);
            writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(attributeValue)));
        }
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_SCOPE_TYPE = Symbol.for('react.scope');
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        function getComponentNameFromType(type) {
            if (type == null) {
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                    case REACT_SERVER_CONTEXT_TYPE:
                        {
                            var context2 = type;
                            return (context2.displayName || context2._globalName) + '.Provider';
                        }
                }
            }
            return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd;
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    };
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                }
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current;
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            try {
                if (construct) {
                    var Fake = function() {
                        throw Error();
                    };
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function() {
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        try {
                            Reflect.construct(Fake, []);
                        } catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    } else {
                        try {
                            Fake.call();
                        } catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                } else {
                    try {
                        throw Error();
                    } catch (x) {
                        control = x;
                    }
                    fn();
                }
            } catch (sample) {
                if (sample && control && typeof sample.stack === 'string') {
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                        c--;
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        if (sampleLines[s] !== controlLines[c]) {
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--;
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
            {
                return describeNativeComponentFrame(ctor, true);
            }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                var has = Function.call.bind(hasOwnProperty);
                for(var typeSpecName in typeSpecs){
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0;
                        try {
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        } catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement(null);
                        }
                    }
                }
            }
        }
        var warnedAboutMissingGetChildContext;
        {
            warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
            Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
            {
                var contextTypes = type.contextTypes;
                if (!contextTypes) {
                    return emptyContextObject;
                }
                var context = {};
                for(var key in contextTypes){
                    context[key] = unmaskedContext[key];
                }
                {
                    var name = getComponentNameFromType(type) || 'Unknown';
                    checkPropTypes(contextTypes, context, 'context', name);
                }
                return context;
            }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
            {
                if (typeof instance.getChildContext !== 'function') {
                    {
                        var componentName = getComponentNameFromType(type) || 'Unknown';
                        if (!warnedAboutMissingGetChildContext[componentName]) {
                            warnedAboutMissingGetChildContext[componentName] = true;
                            error('%s.childContextTypes is specified but there is no getChildContext() method ' + 'on the instance. You can either define getChildContext() on %s or remove ' + 'childContextTypes from it.', componentName, componentName);
                        }
                    }
                    return parentContext;
                }
                var childContext = instance.getChildContext();
                for(var contextKey in childContext){
                    if (!(contextKey in childContextTypes)) {
                        throw new Error((getComponentNameFromType(type) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
                    }
                }
                {
                    var name = getComponentNameFromType(type) || 'Unknown';
                    checkPropTypes(childContextTypes, childContext, 'child context', name);
                }
                return assign({}, parentContext, childContext);
            }
        }
        var rendererSigil;
        {
            rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
            {
                prev.context._currentValue = prev.parentValue;
            }
        }
        function pushNode(next) {
            {
                next.context._currentValue = next.value;
            }
        }
        function popToNearestCommonAncestor(prev, next) {
            if (prev === next) ;
            else {
                popNode(prev);
                var parentPrev = prev.parent;
                var parentNext = next.parent;
                if (parentPrev === null) {
                    if (parentNext !== null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                } else {
                    if (parentNext === null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                    popToNearestCommonAncestor(parentPrev, parentNext);
                }
                pushNode(next);
            }
        }
        function popAllPrevious(prev) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev !== null) {
                popAllPrevious(parentPrev);
            }
        }
        function pushAllNext(next) {
            var parentNext = next.parent;
            if (parentNext !== null) {
                pushAllNext(parentNext);
            }
            pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (parentPrev.depth === next.depth) {
                popToNearestCommonAncestor(parentPrev, next);
            } else {
                popPreviousToCommonLevel(parentPrev, next);
            }
        }
        function popNextToCommonLevel(prev, next) {
            var parentNext = next.parent;
            if (parentNext === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (prev.depth === parentNext.depth) {
                popToNearestCommonAncestor(prev, parentNext);
            } else {
                popNextToCommonLevel(prev, parentNext);
            }
            pushNode(next);
        }
        function switchContext(newSnapshot) {
            var prev = currentActiveSnapshot;
            var next = newSnapshot;
            if (prev !== next) {
                if (prev === null) {
                    pushAllNext(next);
                } else if (next === null) {
                    popAllPrevious(prev);
                } else if (prev.depth === next.depth) {
                    popToNearestCommonAncestor(prev, next);
                } else if (prev.depth > next.depth) {
                    popPreviousToCommonLevel(prev, next);
                } else {
                    popNextToCommonLevel(prev, next);
                }
                currentActiveSnapshot = next;
            }
        }
        function pushProvider(context, nextValue) {
            var prevValue;
            {
                prevValue = context._currentValue;
                context._currentValue = nextValue;
                {
                    if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
                    }
                    context._currentRenderer = rendererSigil;
                }
            }
            var prevNode = currentActiveSnapshot;
            var newNode = {
                parent: prevNode,
                depth: prevNode === null ? 0 : prevNode.depth + 1,
                context: context,
                parentValue: prevValue,
                value: nextValue
            };
            currentActiveSnapshot = newNode;
            return newNode;
        }
        function popProvider(context) {
            var prevSnapshot = currentActiveSnapshot;
            if (prevSnapshot === null) {
                throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
            }
            {
                if (prevSnapshot.context !== context) {
                    error('The parent context is not the expected context. This is probably a bug in React.');
                }
            }
            {
                var value = prevSnapshot.parentValue;
                if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                    prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
                } else {
                    prevSnapshot.context._currentValue = value;
                }
                {
                    if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                        error('Detected multiple renderers concurrently rendering the ' + 'same context provider. This is currently unsupported.');
                    }
                    context._currentRenderer = rendererSigil;
                }
            }
            return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
            return currentActiveSnapshot;
        }
        function readContext(context) {
            var value = context._currentValue;
            return value;
        }
        function get(key) {
            return key._reactInternals;
        }
        function set(key, value) {
            key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
            didWarnAboutUninitializedState = new Set();
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
            didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
            didWarnAboutDirectlyAssigningPropsToState = new Set();
            didWarnAboutUndefinedDerivedState = new Set();
            didWarnAboutContextTypeAndContextTypes = new Set();
            didWarnAboutInvalidateContextType = new Set();
            var didWarnOnInvalidCallback = new Set();
            warnOnInvalidCallback = function(callback, callerName) {
                if (callback === null || typeof callback === 'function') {
                    return;
                }
                var key = callerName + '_' + callback;
                if (!didWarnOnInvalidCallback.has(key)) {
                    didWarnOnInvalidCallback.add(key);
                    error('%s(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callerName, callback);
                }
            };
            warnOnUndefinedDerivedState = function(type, partialState) {
                if (partialState === undefined) {
                    var componentName = getComponentNameFromType(type) || 'Component';
                    if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                        didWarnAboutUndefinedDerivedState.add(componentName);
                        error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', componentName);
                    }
                }
            };
        }
        function warnNoop(publicInstance, callerName) {
            {
                var _constructor = publicInstance.constructor;
                var componentName = _constructor && getComponentNameFromType(_constructor) || 'ReactClass';
                var warningKey = componentName + '.' + callerName;
                if (didWarnAboutNoopUpdateForComponent[warningKey]) {
                    return;
                }
                error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
                didWarnAboutNoopUpdateForComponent[warningKey] = true;
            }
        }
        var classComponentUpdater = {
            isMounted: function(inst) {
                return false;
            },
            enqueueSetState: function(inst, payload, callback) {
                var internals = get(inst);
                if (internals.queue === null) {
                    warnNoop(inst, 'setState');
                } else {
                    internals.queue.push(payload);
                    {
                        if (callback !== undefined && callback !== null) {
                            warnOnInvalidCallback(callback, 'setState');
                        }
                    }
                }
            },
            enqueueReplaceState: function(inst, payload, callback) {
                var internals = get(inst);
                internals.replace = true;
                internals.queue = [
                    payload
                ];
                {
                    if (callback !== undefined && callback !== null) {
                        warnOnInvalidCallback(callback, 'setState');
                    }
                }
            },
            enqueueForceUpdate: function(inst, callback) {
                var internals = get(inst);
                if (internals.queue === null) {
                    warnNoop(inst, 'forceUpdate');
                } else {
                    {
                        if (callback !== undefined && callback !== null) {
                            warnOnInvalidCallback(callback, 'setState');
                        }
                    }
                }
            }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
            var partialState = getDerivedStateFromProps(nextProps, prevState);
            {
                warnOnUndefinedDerivedState(ctor, partialState);
            }
            var newState = partialState === null || partialState === undefined ? prevState : assign({}, prevState, partialState);
            return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
            var context = emptyContextObject;
            var contextType = ctor.contextType;
            {
                if ('contextType' in ctor) {
                    var isValid = contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined;
                    if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                        didWarnAboutInvalidateContextType.add(ctor);
                        var addendum = '';
                        if (contextType === undefined) {
                            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
                        } else if (typeof contextType !== 'object') {
                            addendum = ' However, it is set to a ' + typeof contextType + '.';
                        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                            addendum = ' Did you accidentally pass the Context.Provider instead?';
                        } else if (contextType._context !== undefined) {
                            addendum = ' Did you accidentally pass the Context.Consumer instead?';
                        } else {
                            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
                        }
                        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentNameFromType(ctor) || 'Component', addendum);
                    }
                }
            }
            if (typeof contextType === 'object' && contextType !== null) {
                context = readContext(contextType);
            } else {
                context = maskedLegacyContext;
            }
            var instance = new ctor(props, context);
            {
                if (typeof ctor.getDerivedStateFromProps === 'function' && (instance.state === null || instance.state === undefined)) {
                    var componentName = getComponentNameFromType(ctor) || 'Component';
                    if (!didWarnAboutUninitializedState.has(componentName)) {
                        didWarnAboutUninitializedState.add(componentName);
                        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
                    }
                }
                if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
                    var foundWillMountName = null;
                    var foundWillReceivePropsName = null;
                    var foundWillUpdateName = null;
                    if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                        foundWillMountName = 'componentWillMount';
                    } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
                        foundWillMountName = 'UNSAFE_componentWillMount';
                    }
                    if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                        foundWillReceivePropsName = 'componentWillReceiveProps';
                    } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
                        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
                    }
                    if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                        foundWillUpdateName = 'componentWillUpdate';
                    } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
                        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
                    }
                    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                        var _componentName = getComponentNameFromType(ctor) || 'Component';
                        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
                        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                            didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                            error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
                        }
                    }
                }
            }
            return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
            {
                var name = getComponentNameFromType(ctor) || 'Component';
                var renderPresent = instance.render;
                if (!renderPresent) {
                    if (ctor.prototype && typeof ctor.prototype.render === 'function') {
                        error('%s(...): No `render` method found on the returned component ' + 'instance: did you accidentally return an object from the constructor?', name);
                    } else {
                        error('%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', name);
                    }
                }
                if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
                    error('getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', name);
                }
                if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', name);
                }
                if (instance.propTypes) {
                    error('propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', name);
                }
                if (instance.contextType) {
                    error('contextType was defined as an instance property on %s. Use a static ' + 'property to define contextType instead.', name);
                }
                {
                    if (instance.contextTypes) {
                        error('contextTypes was defined as an instance property on %s. Use a static ' + 'property to define contextTypes instead.', name);
                    }
                    if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                        didWarnAboutContextTypeAndContextTypes.add(ctor);
                        error('%s declares both contextTypes and contextType static properties. ' + 'The legacy contextTypes property will be ignored.', name);
                    }
                }
                if (typeof instance.componentShouldUpdate === 'function') {
                    error('%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', name);
                }
                if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== 'undefined') {
                    error('%s has a method called shouldComponentUpdate(). ' + 'shouldComponentUpdate should not be used when extending React.PureComponent. ' + 'Please extend React.Component if shouldComponentUpdate is used.', getComponentNameFromType(ctor) || 'A pure component');
                }
                if (typeof instance.componentDidUnmount === 'function') {
                    error('%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', name);
                }
                if (typeof instance.componentDidReceiveProps === 'function') {
                    error('%s has a method called ' + 'componentDidReceiveProps(). But there is no such lifecycle method. ' + 'If you meant to update the state in response to changing props, ' + 'use componentWillReceiveProps(). If you meant to fetch data or ' + 'run side-effects or mutations after React has updated the UI, use componentDidUpdate().', name);
                }
                if (typeof instance.componentWillRecieveProps === 'function') {
                    error('%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', name);
                }
                if (typeof instance.UNSAFE_componentWillRecieveProps === 'function') {
                    error('%s has a method called ' + 'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?', name);
                }
                var hasMutatedProps = instance.props !== newProps;
                if (instance.props !== undefined && hasMutatedProps) {
                    error('%s(...): When calling super() in `%s`, make sure to pass ' + "up the same props that your component's constructor was passed.", name, name);
                }
                if (instance.defaultProps) {
                    error('Setting defaultProps as an instance property on %s is not supported and will be ignored.' + ' Instead, define defaultProps as a static property on %s.', name, name);
                }
                if (typeof instance.getSnapshotBeforeUpdate === 'function' && typeof instance.componentDidUpdate !== 'function' && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
                    didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
                    error('%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). ' + 'This component defines getSnapshotBeforeUpdate() only.', getComponentNameFromType(ctor));
                }
                if (typeof instance.getDerivedStateFromProps === 'function') {
                    error('%s: getDerivedStateFromProps() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
                }
                if (typeof instance.getDerivedStateFromError === 'function') {
                    error('%s: getDerivedStateFromError() is defined as an instance method ' + 'and will be ignored. Instead, declare it as a static method.', name);
                }
                if (typeof ctor.getSnapshotBeforeUpdate === 'function') {
                    error('%s: getSnapshotBeforeUpdate() is defined as a static method ' + 'and will be ignored. Instead, declare it as an instance method.', name);
                }
                var _state = instance.state;
                if (_state && (typeof _state !== 'object' || isArray(_state))) {
                    error('%s.state: must be set to an object or null', name);
                }
                if (typeof instance.getChildContext === 'function' && typeof ctor.childContextTypes !== 'object') {
                    error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', name);
                }
            }
        }
        function callComponentWillMount(type, instance) {
            var oldState = instance.state;
            if (typeof instance.componentWillMount === 'function') {
                {
                    if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                        var componentName = getComponentNameFromType(type) || 'Unknown';
                        if (!didWarnAboutDeprecatedWillMount[componentName]) {
                            warn('componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', componentName);
                            didWarnAboutDeprecatedWillMount[componentName] = true;
                        }
                    }
                }
                instance.componentWillMount();
            }
            if (typeof instance.UNSAFE_componentWillMount === 'function') {
                instance.UNSAFE_componentWillMount();
            }
            if (oldState !== instance.state) {
                {
                    error('%s.componentWillMount(): Assigning directly to this.state is ' + "deprecated (except inside a component's " + 'constructor). Use setState instead.', getComponentNameFromType(type) || 'Component');
                }
                classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
            }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
            if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
                var oldQueue = internalInstance.queue;
                var oldReplace = internalInstance.replace;
                internalInstance.queue = null;
                internalInstance.replace = false;
                if (oldReplace && oldQueue.length === 1) {
                    inst.state = oldQueue[0];
                } else {
                    var nextState = oldReplace ? oldQueue[0] : inst.state;
                    var dontMutate = true;
                    for(var i = oldReplace ? 1 : 0; i < oldQueue.length; i++){
                        var partial = oldQueue[i];
                        var partialState = typeof partial === 'function' ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                        if (partialState != null) {
                            if (dontMutate) {
                                dontMutate = false;
                                nextState = assign({}, nextState, partialState);
                            } else {
                                assign(nextState, partialState);
                            }
                        }
                    }
                    inst.state = nextState;
                }
            } else {
                internalInstance.queue = null;
            }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
            {
                checkClassInstance(instance, ctor, newProps);
            }
            var initialState = instance.state !== undefined ? instance.state : null;
            instance.updater = classComponentUpdater;
            instance.props = newProps;
            instance.state = initialState;
            var internalInstance = {
                queue: [],
                replace: false
            };
            set(instance, internalInstance);
            var contextType = ctor.contextType;
            if (typeof contextType === 'object' && contextType !== null) {
                instance.context = readContext(contextType);
            } else {
                instance.context = maskedLegacyContext;
            }
            {
                if (instance.state === newProps) {
                    var componentName = getComponentNameFromType(ctor) || 'Component';
                    if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                        didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
                    }
                }
            }
            var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
            if (typeof getDerivedStateFromProps === 'function') {
                instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
            }
            if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
                callComponentWillMount(ctor, instance);
                processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
            }
        }
        var emptyTreeContext = {
            id: 1,
            overflow: ''
        };
        function getTreeId(context) {
            var overflow = context.overflow;
            var idWithLeadingBit = context.id;
            var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
            return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
            var baseIdWithLeadingBit = baseContext.id;
            var baseOverflow = baseContext.overflow;
            var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
            var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
            var slot = index + 1;
            var length = getBitLength(totalChildren) + baseLength;
            if (length > 30) {
                var numberOfOverflowBits = baseLength - baseLength % 5;
                var newOverflowBits = (1 << numberOfOverflowBits) - 1;
                var newOverflow = (baseId & newOverflowBits).toString(32);
                var restOfBaseId = baseId >> numberOfOverflowBits;
                var restOfBaseLength = baseLength - numberOfOverflowBits;
                var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
                var restOfNewBits = slot << restOfBaseLength;
                var id = restOfNewBits | restOfBaseId;
                var overflow = newOverflow + baseOverflow;
                return {
                    id: 1 << restOfLength | id,
                    overflow: overflow
                };
            } else {
                var newBits = slot << baseLength;
                var _id = newBits | baseId;
                var _overflow = baseOverflow;
                return {
                    id: 1 << length | _id,
                    overflow: _overflow
                };
            }
        }
        function getBitLength(number) {
            return 32 - clz32(number);
        }
        function getLeadingBit(id) {
            return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x) {
            var asUint = x >>> 0;
            if (asUint === 0) {
                return 32;
            }
            return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        var SuspenseException = new Error("Suspense Exception: This is not a real error! It's an implementation " + 'detail of `use` to interrupt the current render. You must either ' + 'rethrow it immediately, or move the `use` call outside of the ' + '`try/catch` block. Capturing without rethrowing will lead to ' + 'unexpected behavior.\n\n' + 'To handle async errors, wrap your component in an error boundary, or ' + "call the promise's `.catch` method and pass the result to `use`");
        function createThenableState() {
            return [];
        }
        function noop() {}
        function trackUsedThenable(thenableState, thenable, index) {
            var previous = thenableState[index];
            if (previous === undefined) {
                thenableState.push(thenable);
            } else {
                if (previous !== thenable) {
                    thenable.then(noop, noop);
                    thenable = previous;
                }
            }
            switch(thenable.status){
                case 'fulfilled':
                    {
                        var fulfilledValue = thenable.value;
                        return fulfilledValue;
                    }
                case 'rejected':
                    {
                        var rejectedError = thenable.reason;
                        throw rejectedError;
                    }
                default:
                    {
                        if (typeof thenable.status === 'string') ;
                        else {
                            var pendingThenable = thenable;
                            pendingThenable.status = 'pending';
                            pendingThenable.then(function(fulfilledValue) {
                                if (thenable.status === 'pending') {
                                    var fulfilledThenable = thenable;
                                    fulfilledThenable.status = 'fulfilled';
                                    fulfilledThenable.value = fulfilledValue;
                                }
                            }, function(error) {
                                if (thenable.status === 'pending') {
                                    var rejectedThenable = thenable;
                                    rejectedThenable.status = 'rejected';
                                    rejectedThenable.reason = error;
                                }
                            });
                            switch(thenable.status){
                                case 'fulfilled':
                                    {
                                        var fulfilledThenable = thenable;
                                        return fulfilledThenable.value;
                                    }
                                case 'rejected':
                                    {
                                        var rejectedThenable = thenable;
                                        throw rejectedThenable.reason;
                                    }
                            }
                        }
                        suspendedThenable = thenable;
                        throw SuspenseException;
                    }
            }
        }
        var suspendedThenable = null;
        function getSuspendedThenable() {
            if (suspendedThenable === null) {
                throw new Error('Expected a suspended thenable. This is a bug in React. Please file ' + 'an issue.');
            }
            var thenable = suspendedThenable;
            suspendedThenable = null;
            return thenable;
        }
        function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var thenableIndexCounter = 0;
        var thenableState = null;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
            if (currentlyRenderingComponent === null) {
                throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
            }
            {
                if (isInHookUserCodeInDev) {
                    error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
                }
            }
            return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
            if (prevDeps === null) {
                {
                    error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
                }
                return false;
            }
            {
                if (nextDeps.length !== prevDeps.length) {
                    error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
                }
            }
            for(var i = 0; i < prevDeps.length && i < nextDeps.length; i++){
                if (objectIs(nextDeps[i], prevDeps[i])) {
                    continue;
                }
                return false;
            }
            return true;
        }
        function createHook() {
            if (numberOfReRenders > 0) {
                throw new Error('Rendered more hooks than during the previous render');
            }
            return {
                memoizedState: null,
                queue: null,
                next: null
            };
        }
        function createWorkInProgressHook() {
            if (workInProgressHook === null) {
                if (firstWorkInProgressHook === null) {
                    isReRender = false;
                    firstWorkInProgressHook = workInProgressHook = createHook();
                } else {
                    isReRender = true;
                    workInProgressHook = firstWorkInProgressHook;
                }
            } else {
                if (workInProgressHook.next === null) {
                    isReRender = false;
                    workInProgressHook = workInProgressHook.next = createHook();
                } else {
                    isReRender = true;
                    workInProgressHook = workInProgressHook.next;
                }
            }
            return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity, prevThenableState) {
            currentlyRenderingComponent = componentIdentity;
            currentlyRenderingTask = task;
            {
                isInHookUserCodeInDev = false;
            }
            localIdCounter = 0;
            thenableIndexCounter = 0;
            thenableState = prevThenableState;
        }
        function finishHooks(Component, props, children, refOrContext) {
            while(didScheduleRenderPhaseUpdate){
                didScheduleRenderPhaseUpdate = false;
                localIdCounter = 0;
                thenableIndexCounter = 0;
                numberOfReRenders += 1;
                workInProgressHook = null;
                children = Component(props, refOrContext);
            }
            resetHooksState();
            return children;
        }
        function getThenableStateAfterSuspending() {
            var state = thenableState;
            thenableState = null;
            return state;
        }
        function checkDidRenderIdHook() {
            var didRenderIdHook = localIdCounter !== 0;
            return didRenderIdHook;
        }
        function resetHooksState() {
            {
                isInHookUserCodeInDev = false;
            }
            currentlyRenderingComponent = null;
            currentlyRenderingTask = null;
            didScheduleRenderPhaseUpdate = false;
            firstWorkInProgressHook = null;
            numberOfReRenders = 0;
            renderPhaseUpdates = null;
            workInProgressHook = null;
        }
        function readContext$1(context) {
            {
                if (isInHookUserCodeInDev) {
                    error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
                }
            }
            return readContext(context);
        }
        function useContext(context) {
            {
                currentHookNameInDev = 'useContext';
            }
            resolveCurrentlyRenderingComponent();
            return readContext(context);
        }
        function basicStateReducer(state, action) {
            return typeof action === 'function' ? action(state) : action;
        }
        function useState(initialState) {
            {
                currentHookNameInDev = 'useState';
            }
            return useReducer(basicStateReducer, initialState);
        }
        function useReducer(reducer, initialArg, init) {
            {
                if (reducer !== basicStateReducer) {
                    currentHookNameInDev = 'useReducer';
                }
            }
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            if (isReRender) {
                var queue = workInProgressHook.queue;
                var dispatch = queue.dispatch;
                if (renderPhaseUpdates !== null) {
                    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
                    if (firstRenderPhaseUpdate !== undefined) {
                        renderPhaseUpdates.delete(queue);
                        var newState = workInProgressHook.memoizedState;
                        var update = firstRenderPhaseUpdate;
                        do {
                            var action = update.action;
                            {
                                isInHookUserCodeInDev = true;
                            }
                            newState = reducer(newState, action);
                            {
                                isInHookUserCodeInDev = false;
                            }
                            update = update.next;
                        }while (update !== null)
                        workInProgressHook.memoizedState = newState;
                        return [
                            newState,
                            dispatch
                        ];
                    }
                }
                return [
                    workInProgressHook.memoizedState,
                    dispatch
                ];
            } else {
                {
                    isInHookUserCodeInDev = true;
                }
                var initialState;
                if (reducer === basicStateReducer) {
                    initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
                } else {
                    initialState = init !== undefined ? init(initialArg) : initialArg;
                }
                {
                    isInHookUserCodeInDev = false;
                }
                workInProgressHook.memoizedState = initialState;
                var _queue = workInProgressHook.queue = {
                    last: null,
                    dispatch: null
                };
                var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
                return [
                    workInProgressHook.memoizedState,
                    _dispatch
                ];
            }
        }
        function useMemo(nextCreate, deps) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var nextDeps = deps === undefined ? null : deps;
            if (workInProgressHook !== null) {
                var prevState = workInProgressHook.memoizedState;
                if (prevState !== null) {
                    if (nextDeps !== null) {
                        var prevDeps = prevState[1];
                        if (areHookInputsEqual(nextDeps, prevDeps)) {
                            return prevState[0];
                        }
                    }
                }
            }
            {
                isInHookUserCodeInDev = true;
            }
            var nextValue = nextCreate();
            {
                isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = [
                nextValue,
                nextDeps
            ];
            return nextValue;
        }
        function useRef(initialValue) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var previousRef = workInProgressHook.memoizedState;
            if (previousRef === null) {
                var ref = {
                    current: initialValue
                };
                {
                    Object.seal(ref);
                }
                workInProgressHook.memoizedState = ref;
                return ref;
            } else {
                return previousRef;
            }
        }
        function useLayoutEffect(create, inputs) {
            {
                currentHookNameInDev = 'useLayoutEffect';
                error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
            }
        }
        function dispatchAction(componentIdentity, queue, action) {
            if (numberOfReRenders >= RE_RENDER_LIMIT) {
                throw new Error('Too many re-renders. React limits the number of renders to prevent ' + 'an infinite loop.');
            }
            if (componentIdentity === currentlyRenderingComponent) {
                didScheduleRenderPhaseUpdate = true;
                var update = {
                    action: action,
                    next: null
                };
                if (renderPhaseUpdates === null) {
                    renderPhaseUpdates = new Map();
                }
                var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
                if (firstRenderPhaseUpdate === undefined) {
                    renderPhaseUpdates.set(queue, update);
                } else {
                    var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
                    while(lastRenderPhaseUpdate.next !== null){
                        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
                    }
                    lastRenderPhaseUpdate.next = update;
                }
            }
        }
        function useCallback(callback, deps) {
            return useMemo(function() {
                return callback;
            }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
            resolveCurrentlyRenderingComponent();
            return getSnapshot(source._source);
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            if (getServerSnapshot === undefined) {
                throw new Error('Missing getServerSnapshot, which is required for ' + 'server-rendered content. Will revert to client rendering.');
            }
            return getServerSnapshot();
        }
        function useDeferredValue(value) {
            resolveCurrentlyRenderingComponent();
            return value;
        }
        function unsupportedStartTransition() {
            throw new Error('startTransition cannot be called during server rendering.');
        }
        function useTransition() {
            resolveCurrentlyRenderingComponent();
            return [
                false,
                unsupportedStartTransition
            ];
        }
        function useId() {
            var task = currentlyRenderingTask;
            var treeId = getTreeId(task.treeContext);
            var responseState = currentResponseState;
            if (responseState === null) {
                throw new Error('Invalid hook call. Hooks can only be called inside of the body of a function component.');
            }
            var localId = localIdCounter++;
            return makeId(responseState, treeId, localId);
        }
        function use(usable) {
            if (usable !== null && typeof usable === 'object') {
                if (typeof usable.then === 'function') {
                    var thenable = usable;
                    var index = thenableIndexCounter;
                    thenableIndexCounter += 1;
                    if (thenableState === null) {
                        thenableState = createThenableState();
                    }
                    return trackUsedThenable(thenableState, thenable, index);
                } else if (usable.$$typeof === REACT_CONTEXT_TYPE || usable.$$typeof === REACT_SERVER_CONTEXT_TYPE) {
                    var context = usable;
                    return readContext$1(context);
                }
            }
            throw new Error('An unsupported type was passed to use(): ' + String(usable));
        }
        function unsupportedRefresh() {
            throw new Error('Cache cannot be refreshed during server rendering.');
        }
        function useCacheRefresh() {
            return unsupportedRefresh;
        }
        function noop$1() {}
        var HooksDispatcher = {
            readContext: readContext$1,
            useContext: useContext,
            useMemo: useMemo,
            useReducer: useReducer,
            useRef: useRef,
            useState: useState,
            useInsertionEffect: noop$1,
            useLayoutEffect: useLayoutEffect,
            useCallback: useCallback,
            useImperativeHandle: noop$1,
            useEffect: noop$1,
            useDebugValue: noop$1,
            useDeferredValue: useDeferredValue,
            useTransition: useTransition,
            useId: useId,
            useMutableSource: useMutableSource,
            useSyncExternalStore: useSyncExternalStore
        };
        {
            HooksDispatcher.useCacheRefresh = useCacheRefresh;
        }
        {
            HooksDispatcher.use = use;
        }
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
            currentResponseState = responseState;
        }
        function getCacheSignal() {
            throw new Error('Not implemented.');
        }
        function getCacheForType(resourceType) {
            throw new Error('Not implemented.');
        }
        var DefaultCacheDispatcher = {
            getCacheSignal: getCacheSignal,
            getCacheForType: getCacheForType
        };
        function getStackByComponentStackNode(componentStack) {
            try {
                var info = '';
                var node = componentStack;
                do {
                    switch(node.tag){
                        case 0:
                            info += describeBuiltInComponentFrame(node.type, null, null);
                            break;
                        case 1:
                            info += describeFunctionComponentFrame(node.type, null, null);
                            break;
                        case 2:
                            info += describeClassComponentFrame(node.type, null, null);
                            break;
                    }
                    node = node.parent;
                }while (node)
                return info;
            } catch (x) {
                return '\nError generating stack: ' + x.message + '\n' + x.stack;
            }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactCurrentCache = ReactSharedInternals.ReactCurrentCache;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error) {
            console['error'](error);
            return null;
        }
        function noop$2() {}
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
            var pingedTasks = [];
            var abortSet = new Set();
            var resources = createResources();
            var request = {
                destination: null,
                responseState: responseState,
                progressiveChunkSize: progressiveChunkSize === undefined ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
                status: OPEN,
                fatalError: null,
                nextSegmentId: 0,
                allPendingTasks: 0,
                pendingRootTasks: 0,
                resources: resources,
                completedRootSegment: null,
                abortableTasks: abortSet,
                pingedTasks: pingedTasks,
                clientRenderedBoundaries: [],
                completedBoundaries: [],
                partialBoundaries: [],
                preamble: [],
                postamble: [],
                onError: onError === undefined ? defaultErrorHandler : onError,
                onAllReady: onAllReady === undefined ? noop$2 : onAllReady,
                onShellReady: onShellReady === undefined ? noop$2 : onShellReady,
                onShellError: onShellError === undefined ? noop$2 : onShellError,
                onFatalError: onFatalError === undefined ? noop$2 : onFatalError
            };
            var rootSegment = createPendingSegment(request, 0, null, rootFormatContext, false, false);
            rootSegment.parentFlushed = true;
            var rootTask = createTask(request, null, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
            pingedTasks.push(rootTask);
            return request;
        }
        function pingTask(request, task) {
            var pingedTasks = request.pingedTasks;
            pingedTasks.push(task);
            if (pingedTasks.length === 1) {
                scheduleWork(function() {
                    return performWork(request);
                });
            }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
            return {
                id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
                rootSegmentID: -1,
                parentFlushed: false,
                pendingTasks: 0,
                forceClientRender: false,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: fallbackAbortableTasks,
                errorDigest: null,
                resources: createBoundaryResources()
            };
        }
        function createTask(request, thenableState, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
            request.allPendingTasks++;
            if (blockedBoundary === null) {
                request.pendingRootTasks++;
            } else {
                blockedBoundary.pendingTasks++;
            }
            var task = {
                node: node,
                ping: function() {
                    return pingTask(request, task);
                },
                blockedBoundary: blockedBoundary,
                blockedSegment: blockedSegment,
                abortSet: abortSet,
                legacyContext: legacyContext,
                context: context,
                treeContext: treeContext,
                thenableState: thenableState
            };
            {
                task.componentStack = null;
            }
            abortSet.add(task);
            return task;
        }
        function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
            return {
                status: PENDING,
                id: -1,
                index: index,
                parentFlushed: false,
                chunks: [],
                children: [],
                formatContext: formatContext,
                boundary: boundary,
                lastPushedText: lastPushedText,
                textEmbedded: textEmbedded
            };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
            {
                if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
                    return '';
                }
                return getStackByComponentStackNode(currentTaskInDEV.componentStack);
            }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
            {
                task.componentStack = {
                    tag: 0,
                    parent: task.componentStack,
                    type: type
                };
            }
        }
        function pushFunctionComponentStackInDEV(task, type) {
            {
                task.componentStack = {
                    tag: 1,
                    parent: task.componentStack,
                    type: type
                };
            }
        }
        function pushClassComponentStackInDEV(task, type) {
            {
                task.componentStack = {
                    tag: 2,
                    parent: task.componentStack,
                    type: type
                };
            }
        }
        function popComponentStackInDEV(task) {
            {
                if (task.componentStack === null) {
                    error('Unexpectedly popped too many stack frames. This is a bug in React.');
                } else {
                    task.componentStack = task.componentStack.parent;
                }
            }
        }
        var lastBoundaryErrorComponentStackDev = null;
        function captureBoundaryErrorDetailsDev(boundary, error) {
            {
                var errorMessage;
                if (typeof error === 'string') {
                    errorMessage = error;
                } else if (error && typeof error.message === 'string') {
                    errorMessage = error.message;
                } else {
                    errorMessage = String(error);
                }
                var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
                lastBoundaryErrorComponentStackDev = null;
                boundary.errorMessage = errorMessage;
                boundary.errorComponentStack = errorComponentStack;
            }
        }
        function logRecoverableError(request, error) {
            var errorDigest = request.onError(error);
            if (errorDigest != null && typeof errorDigest !== 'string') {
                throw new Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
            }
            return errorDigest;
        }
        function fatalError(request, error) {
            var onShellError = request.onShellError;
            onShellError(error);
            var onFatalError = request.onFatalError;
            onFatalError(error);
            if (request.destination !== null) {
                request.status = CLOSED;
                closeWithError(request.destination, error);
            } else {
                request.status = CLOSING;
                request.fatalError = error;
            }
        }
        function renderSuspenseBoundary(request, task, props) {
            pushBuiltInComponentStackInDEV(task, 'Suspense');
            var parentBoundary = task.blockedBoundary;
            var parentSegment = task.blockedSegment;
            var fallback = props.fallback;
            var content = props.children;
            var fallbackAbortSet = new Set();
            var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
            var insertionIndex = parentSegment.chunks.length;
            var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext, false, false);
            parentSegment.children.push(boundarySegment);
            parentSegment.lastPushedText = false;
            var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext, false, false);
            contentRootSegment.parentFlushed = true;
            task.blockedBoundary = newBoundary;
            task.blockedSegment = contentRootSegment;
            {
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, newBoundary.resources);
            }
            try {
                renderNode(request, task, content);
                pushSegmentFinale(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
                contentRootSegment.status = COMPLETED;
                if (enableFloat) {
                    if (newBoundary.pendingTasks === 0) {
                        hoistCompletedBoundaryResources(request, newBoundary);
                    }
                }
                queueCompletedSegment(newBoundary, contentRootSegment);
                if (newBoundary.pendingTasks === 0) {
                    popComponentStackInDEV(task);
                    return;
                }
            } catch (error) {
                contentRootSegment.status = ERRORED;
                newBoundary.forceClientRender = true;
                newBoundary.errorDigest = logRecoverableError(request, error);
                {
                    captureBoundaryErrorDetailsDev(newBoundary, error);
                }
            } finally{
                {
                    setCurrentlyRenderingBoundaryResourcesTarget(request.resources, parentBoundary ? parentBoundary.resources : null);
                }
                task.blockedBoundary = parentBoundary;
                task.blockedSegment = parentSegment;
            }
            var suspendedFallbackTask = createTask(request, null, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
            {
                suspendedFallbackTask.componentStack = task.componentStack;
            }
            request.pingedTasks.push(suspendedFallbackTask);
            popComponentStackInDEV(task);
        }
        function hoistCompletedBoundaryResources(request, completedBoundary) {
            if (request.completedRootSegment !== null || request.pendingRootTasks > 0) {
                hoistResourcesToRoot(request.resources, completedBoundary.resources);
            }
        }
        function renderHostElement(request, task, type, props) {
            pushBuiltInComponentStackInDEV(task, type);
            var segment = task.blockedSegment;
            var children = pushStartInstance(segment.chunks, request.preamble, type, props, request.responseState, segment.formatContext, segment.lastPushedText);
            segment.lastPushedText = false;
            var prevContext = segment.formatContext;
            segment.formatContext = getChildFormatContext(prevContext, type, props);
            renderNode(request, task, children);
            segment.formatContext = prevContext;
            pushEndInstance(segment.chunks, request.postamble, type);
            segment.lastPushedText = false;
            popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component) {
            return Component.prototype && Component.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, prevThenableState, Component, props, secondArg) {
            var componentIdentity = {};
            prepareToUseHooks(task, componentIdentity, prevThenableState);
            var result = Component(props, secondArg);
            return finishHooks(Component, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component, props) {
            var nextChildren = instance.render();
            {
                if (instance.props !== props) {
                    if (!didWarnAboutReassigningProps) {
                        error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentNameFromType(Component) || 'a component');
                    }
                    didWarnAboutReassigningProps = true;
                }
            }
            {
                var childContextTypes = Component.childContextTypes;
                if (childContextTypes !== null && childContextTypes !== undefined) {
                    var previousContext = task.legacyContext;
                    var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
                    task.legacyContext = mergedContext;
                    renderNodeDestructive(request, task, null, nextChildren);
                    task.legacyContext = previousContext;
                    return;
                }
            }
            renderNodeDestructive(request, task, null, nextChildren);
        }
        function renderClassComponent(request, task, Component, props) {
            pushClassComponentStackInDEV(task, Component);
            var maskedContext = getMaskedContext(Component, task.legacyContext);
            var instance = constructClassInstance(Component, props, maskedContext);
            mountClassInstance(instance, Component, props, maskedContext);
            finishClassComponent(request, task, instance, Component, props);
            popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutDefaultPropsOnFunctionComponent = {};
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, prevThenableState, Component, props) {
            var legacyContext;
            {
                legacyContext = getMaskedContext(Component, task.legacyContext);
            }
            pushFunctionComponentStackInDEV(task, Component);
            {
                if (Component.prototype && typeof Component.prototype.render === 'function') {
                    var componentName = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutBadClass[componentName]) {
                        error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);
                        didWarnAboutBadClass[componentName] = true;
                    }
                }
            }
            var value = renderWithHooks(request, task, prevThenableState, Component, props, legacyContext);
            var hasId = checkDidRenderIdHook();
            {
                if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
                    var _componentName = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutModulePatternComponent[_componentName]) {
                        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);
                        didWarnAboutModulePatternComponent[_componentName] = true;
                    }
                }
            }
            if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
                {
                    var _componentName2 = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutModulePatternComponent[_componentName2]) {
                        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);
                        didWarnAboutModulePatternComponent[_componentName2] = true;
                    }
                }
                mountClassInstance(value, Component, props, legacyContext);
                finishClassComponent(request, task, value, Component, props);
            } else {
                {
                    validateFunctionComponentInDev(Component);
                }
                if (hasId) {
                    var prevTreeContext = task.treeContext;
                    var totalChildren = 1;
                    var index = 0;
                    task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
                    try {
                        renderNodeDestructive(request, task, null, value);
                    } finally{
                        task.treeContext = prevTreeContext;
                    }
                } else {
                    renderNodeDestructive(request, task, null, value);
                }
            }
            popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component) {
            {
                if (Component) {
                    if (Component.childContextTypes) {
                        error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
                    }
                }
                if (Component.defaultProps !== undefined) {
                    var componentName = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
                        error('%s: Support for defaultProps will be removed from function components ' + 'in a future major release. Use JavaScript default parameters instead.', componentName);
                        didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
                    }
                }
                if (typeof Component.getDerivedStateFromProps === 'function') {
                    var _componentName3 = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                        error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);
                        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
                    }
                }
                if (typeof Component.contextType === 'object' && Component.contextType !== null) {
                    var _componentName4 = getComponentNameFromType(Component) || 'Unknown';
                    if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                        error('%s: Function components do not support contextType.', _componentName4);
                        didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
                    }
                }
            }
        }
        function resolveDefaultProps(Component, baseProps) {
            if (Component && Component.defaultProps) {
                var props = assign({}, baseProps);
                var defaultProps = Component.defaultProps;
                for(var propName in defaultProps){
                    if (props[propName] === undefined) {
                        props[propName] = defaultProps[propName];
                    }
                }
                return props;
            }
            return baseProps;
        }
        function renderForwardRef(request, task, prevThenableState, type, props, ref) {
            pushFunctionComponentStackInDEV(task, type.render);
            var children = renderWithHooks(request, task, prevThenableState, type.render, props, ref);
            var hasId = checkDidRenderIdHook();
            if (hasId) {
                var prevTreeContext = task.treeContext;
                var totalChildren = 1;
                var index = 0;
                task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
                try {
                    renderNodeDestructive(request, task, null, children);
                } finally{
                    task.treeContext = prevTreeContext;
                }
            } else {
                renderNodeDestructive(request, task, null, children);
            }
            popComponentStackInDEV(task);
        }
        function renderMemo(request, task, prevThenableState, type, props, ref) {
            var innerType = type.type;
            var resolvedProps = resolveDefaultProps(innerType, props);
            renderElement(request, task, prevThenableState, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
            {
                if (context._context === undefined) {
                    if (context !== context.Consumer) {
                        if (!hasWarnedAboutUsingContextAsConsumer) {
                            hasWarnedAboutUsingContextAsConsumer = true;
                            error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                        }
                    }
                } else {
                    context = context._context;
                }
            }
            var render = props.children;
            {
                if (typeof render !== 'function') {
                    error('A context consumer was rendered with multiple children, or a child ' + "that isn't a function. A context consumer expects a single child " + 'that is a function. If you did pass a function, make sure there ' + 'is no trailing or leading whitespace around it.');
                }
            }
            var newValue = readContext(context);
            var newChildren = render(newValue);
            renderNodeDestructive(request, task, null, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
            var context = type._context;
            var value = props.value;
            var children = props.children;
            var prevSnapshot;
            {
                prevSnapshot = task.context;
            }
            task.context = pushProvider(context, value);
            renderNodeDestructive(request, task, null, children);
            task.context = popProvider(context);
            {
                if (prevSnapshot !== task.context) {
                    error('Popping the context provider did not return back to the original snapshot. This is a bug in React.');
                }
            }
        }
        function renderLazyComponent(request, task, prevThenableState, lazyComponent, props, ref) {
            pushBuiltInComponentStackInDEV(task, 'Lazy');
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            var Component = init(payload);
            var resolvedProps = resolveDefaultProps(Component, props);
            renderElement(request, task, prevThenableState, Component, resolvedProps, ref);
            popComponentStackInDEV(task);
        }
        function renderOffscreen(request, task, props) {
            var mode = props.mode;
            if (mode === 'hidden') ;
            else {
                renderNodeDestructive(request, task, null, props.children);
            }
        }
        function renderElement(request, task, prevThenableState, type, props, ref) {
            if (typeof type === 'function') {
                if (shouldConstruct$1(type)) {
                    renderClassComponent(request, task, type, props);
                    return;
                } else {
                    renderIndeterminateComponent(request, task, prevThenableState, type, props);
                    return;
                }
            }
            if (typeof type === 'string') {
                renderHostElement(request, task, type, props);
                return;
            }
            switch(type){
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_DEBUG_TRACING_MODE_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_FRAGMENT_TYPE:
                    {
                        renderNodeDestructive(request, task, null, props.children);
                        return;
                    }
                case REACT_OFFSCREEN_TYPE:
                    {
                        renderOffscreen(request, task, props);
                        return;
                    }
                case REACT_SUSPENSE_LIST_TYPE:
                    {
                        pushBuiltInComponentStackInDEV(task, 'SuspenseList');
                        renderNodeDestructive(request, task, null, props.children);
                        popComponentStackInDEV(task);
                        return;
                    }
                case REACT_SCOPE_TYPE:
                    {
                        throw new Error('ReactDOMServer does not yet support scope components.');
                    }
                case REACT_SUSPENSE_TYPE:
                    {
                        {
                            renderSuspenseBoundary(request, task, props);
                        }
                        return;
                    }
            }
            if (typeof type === 'object' && type !== null) {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        {
                            renderForwardRef(request, task, prevThenableState, type, props, ref);
                            return;
                        }
                    case REACT_MEMO_TYPE:
                        {
                            renderMemo(request, task, prevThenableState, type, props, ref);
                            return;
                        }
                    case REACT_PROVIDER_TYPE:
                        {
                            renderContextProvider(request, task, type, props);
                            return;
                        }
                    case REACT_CONTEXT_TYPE:
                        {
                            renderContextConsumer(request, task, type, props);
                            return;
                        }
                    case REACT_LAZY_TYPE:
                        {
                            renderLazyComponent(request, task, prevThenableState, type, props);
                            return;
                        }
                }
            }
            var info = '';
            {
                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
                }
            }
            throw new Error('Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
            {
                if (typeof Symbol === 'function' && iterable[Symbol.toStringTag] === 'Generator') {
                    if (!didWarnAboutGenerators) {
                        error('Using Generators as children is unsupported and will likely yield ' + 'unexpected results because enumerating a generator mutates it. ' + 'You may convert it to an array with `Array.from()` or the ' + '`[...spread]` operator before rendering. Keep in mind ' + 'you might need to polyfill these features for older browsers.');
                    }
                    didWarnAboutGenerators = true;
                }
                if (iterable.entries === iteratorFn) {
                    if (!didWarnAboutMaps) {
                        error('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                    }
                    didWarnAboutMaps = true;
                }
            }
        }
        function renderNodeDestructive(request, task, prevThenableState, node) {
            {
                try {
                    return renderNodeDestructiveImpl(request, task, prevThenableState, node);
                } catch (x) {
                    if (typeof x === 'object' && x !== null && typeof x.then === 'function') ;
                    else {
                        lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
                    }
                    throw x;
                }
            }
        }
        function renderNodeDestructiveImpl(request, task, prevThenableState, node) {
            task.node = node;
            if (typeof node === 'object' && node !== null) {
                switch(node.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        {
                            var element = node;
                            var type = element.type;
                            var props = element.props;
                            var ref = element.ref;
                            renderElement(request, task, prevThenableState, type, props, ref);
                            return;
                        }
                    case REACT_PORTAL_TYPE:
                        throw new Error('Portals are not currently supported by the server renderer. ' + 'Render them conditionally so that they only appear on the client render.');
                    case REACT_LAZY_TYPE:
                        {
                            var lazyNode = node;
                            var payload = lazyNode._payload;
                            var init = lazyNode._init;
                            var resolvedNode;
                            {
                                try {
                                    resolvedNode = init(payload);
                                } catch (x) {
                                    if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                                        pushBuiltInComponentStackInDEV(task, 'Lazy');
                                    }
                                    throw x;
                                }
                            }
                            renderNodeDestructive(request, task, null, resolvedNode);
                            return;
                        }
                }
                if (isArray(node)) {
                    renderChildrenArray(request, task, node);
                    return;
                }
                var iteratorFn = getIteratorFn(node);
                if (iteratorFn) {
                    {
                        validateIterable(node, iteratorFn);
                    }
                    var iterator = iteratorFn.call(node);
                    if (iterator) {
                        var step = iterator.next();
                        if (!step.done) {
                            var children = [];
                            do {
                                children.push(step.value);
                                step = iterator.next();
                            }while (!step.done)
                            renderChildrenArray(request, task, children);
                            return;
                        }
                        return;
                    }
                }
                var childString = Object.prototype.toString.call(node);
                throw new Error("Objects are not valid as a React child (found: " + (childString === '[object Object]' ? 'object with keys {' + Object.keys(node).join(', ') + '}' : childString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
            }
            if (typeof node === 'string') {
                var segment = task.blockedSegment;
                segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
                return;
            }
            if (typeof node === 'number') {
                var _segment = task.blockedSegment;
                _segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, '' + node, request.responseState, _segment.lastPushedText);
                return;
            }
            {
                if (typeof node === 'function') {
                    error('Functions are not valid as a React child. This may happen if ' + 'you return a Component instead of <Component /> from render. ' + 'Or maybe you meant to call this function rather than return it.');
                }
            }
        }
        function renderChildrenArray(request, task, children) {
            var totalChildren = children.length;
            for(var i = 0; i < totalChildren; i++){
                var prevTreeContext = task.treeContext;
                task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
                try {
                    renderNode(request, task, children[i]);
                } finally{
                    task.treeContext = prevTreeContext;
                }
            }
        }
        function spawnNewSuspendedTask(request, task, thenableState, x) {
            var segment = task.blockedSegment;
            var insertionIndex = segment.chunks.length;
            var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext, segment.lastPushedText, true);
            segment.children.push(newSegment);
            segment.lastPushedText = false;
            var newTask = createTask(request, thenableState, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
            {
                if (task.componentStack !== null) {
                    newTask.componentStack = task.componentStack.parent;
                }
            }
            var ping = newTask.ping;
            x.then(ping, ping);
        }
        function renderNode(request, task, node) {
            var previousFormatContext = task.blockedSegment.formatContext;
            var previousLegacyContext = task.legacyContext;
            var previousContext = task.context;
            var previousComponentStack = null;
            {
                previousComponentStack = task.componentStack;
            }
            try {
                return renderNodeDestructive(request, task, null, node);
            } catch (thrownValue) {
                resetHooksState();
                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                    var wakeable = x;
                    var thenableState = getThenableStateAfterSuspending();
                    spawnNewSuspendedTask(request, task, thenableState, wakeable);
                    task.blockedSegment.formatContext = previousFormatContext;
                    task.legacyContext = previousLegacyContext;
                    task.context = previousContext;
                    switchContext(previousContext);
                    {
                        task.componentStack = previousComponentStack;
                    }
                    return;
                } else {
                    task.blockedSegment.formatContext = previousFormatContext;
                    task.legacyContext = previousLegacyContext;
                    task.context = previousContext;
                    switchContext(previousContext);
                    {
                        task.componentStack = previousComponentStack;
                    }
                    throw x;
                }
            }
        }
        function erroredTask(request, boundary, segment, error) {
            var errorDigest = logRecoverableError(request, error);
            if (boundary === null) {
                fatalError(request, error);
            } else {
                boundary.pendingTasks--;
                if (!boundary.forceClientRender) {
                    boundary.forceClientRender = true;
                    boundary.errorDigest = errorDigest;
                    {
                        captureBoundaryErrorDetailsDev(boundary, error);
                    }
                    if (boundary.parentFlushed) {
                        request.clientRenderedBoundaries.push(boundary);
                    }
                }
            }
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
                var onAllReady = request.onAllReady;
                onAllReady();
            }
        }
        function abortTaskSoft(task) {
            var request = this;
            var boundary = task.blockedBoundary;
            var segment = task.blockedSegment;
            segment.status = ABORTED;
            finishedTask(request, boundary, segment);
        }
        function abortTask(task, request, error) {
            var boundary = task.blockedBoundary;
            var segment = task.blockedSegment;
            segment.status = ABORTED;
            if (boundary === null) {
                request.allPendingTasks--;
                if (request.status !== CLOSING && request.status !== CLOSED) {
                    logRecoverableError(request, error);
                    fatalError(request, error);
                }
            } else {
                boundary.pendingTasks--;
                if (!boundary.forceClientRender) {
                    boundary.forceClientRender = true;
                    boundary.errorDigest = request.onError(error);
                    {
                        var errorPrefix = 'The server did not finish this Suspense boundary: ';
                        var errorMessage;
                        if (error && typeof error.message === 'string') {
                            errorMessage = errorPrefix + error.message;
                        } else {
                            errorMessage = errorPrefix + String(error);
                        }
                        var previousTaskInDev = currentTaskInDEV;
                        currentTaskInDEV = task;
                        try {
                            captureBoundaryErrorDetailsDev(boundary, errorMessage);
                        } finally{
                            currentTaskInDEV = previousTaskInDev;
                        }
                    }
                    if (boundary.parentFlushed) {
                        request.clientRenderedBoundaries.push(boundary);
                    }
                }
                boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
                    return abortTask(fallbackTask, request, error);
                });
                boundary.fallbackAbortableTasks.clear();
                request.allPendingTasks--;
                if (request.allPendingTasks === 0) {
                    var onAllReady = request.onAllReady;
                    onAllReady();
                }
            }
        }
        function queueCompletedSegment(boundary, segment) {
            if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
                var childSegment = segment.children[0];
                childSegment.id = segment.id;
                childSegment.parentFlushed = true;
                if (childSegment.status === COMPLETED) {
                    queueCompletedSegment(boundary, childSegment);
                }
            } else {
                var completedSegments = boundary.completedSegments;
                completedSegments.push(segment);
            }
        }
        function finishedTask(request, boundary, segment) {
            if (boundary === null) {
                if (segment.parentFlushed) {
                    if (request.completedRootSegment !== null) {
                        throw new Error('There can only be one root segment. This is a bug in React.');
                    }
                    request.completedRootSegment = segment;
                }
                request.pendingRootTasks--;
                if (request.pendingRootTasks === 0) {
                    request.onShellError = noop$2;
                    var onShellReady = request.onShellReady;
                    onShellReady();
                }
            } else {
                boundary.pendingTasks--;
                if (boundary.forceClientRender) ;
                else if (boundary.pendingTasks === 0) {
                    if (segment.parentFlushed) {
                        if (segment.status === COMPLETED) {
                            queueCompletedSegment(boundary, segment);
                        }
                    }
                    {
                        hoistCompletedBoundaryResources(request, boundary);
                    }
                    if (boundary.parentFlushed) {
                        request.completedBoundaries.push(boundary);
                    }
                    boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
                    boundary.fallbackAbortableTasks.clear();
                } else {
                    if (segment.parentFlushed) {
                        if (segment.status === COMPLETED) {
                            queueCompletedSegment(boundary, segment);
                            var completedSegments = boundary.completedSegments;
                            if (completedSegments.length === 1) {
                                if (boundary.parentFlushed) {
                                    request.partialBoundaries.push(boundary);
                                }
                            }
                        }
                    }
                }
            }
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
                var onAllReady = request.onAllReady;
                onAllReady();
            }
        }
        function retryTask(request, task) {
            {
                var blockedBoundary = task.blockedBoundary;
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, blockedBoundary ? blockedBoundary.resources : null);
            }
            var segment = task.blockedSegment;
            if (segment.status !== PENDING) {
                return;
            }
            switchContext(task.context);
            var prevTaskInDEV = null;
            {
                prevTaskInDEV = currentTaskInDEV;
                currentTaskInDEV = task;
            }
            try {
                var prevThenableState = task.thenableState;
                task.thenableState = null;
                renderNodeDestructive(request, task, prevThenableState, task.node);
                pushSegmentFinale(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
                task.abortSet.delete(task);
                segment.status = COMPLETED;
                finishedTask(request, task.blockedBoundary, segment);
            } catch (thrownValue) {
                resetHooksState();
                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                    var ping = task.ping;
                    x.then(ping, ping);
                    task.thenableState = getThenableStateAfterSuspending();
                } else {
                    task.abortSet.delete(task);
                    segment.status = ERRORED;
                    erroredTask(request, task.blockedBoundary, segment, x);
                }
            } finally{
                {
                    setCurrentlyRenderingBoundaryResourcesTarget(request.resources, null);
                }
                {
                    currentTaskInDEV = prevTaskInDEV;
                }
            }
        }
        function performWork(request) {
            if (request.status === CLOSED) {
                return;
            }
            var prevContext = getActiveContext();
            var prevDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = HooksDispatcher;
            var prevCacheDispatcher;
            {
                prevCacheDispatcher = ReactCurrentCache.current;
                ReactCurrentCache.current = DefaultCacheDispatcher;
            }
            var previousHostDispatcher = prepareToRender(request.resources);
            var prevGetCurrentStackImpl;
            {
                prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
                ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
            }
            var prevResponseState = currentResponseState;
            setCurrentResponseState(request.responseState);
            try {
                var pingedTasks = request.pingedTasks;
                var i;
                for(i = 0; i < pingedTasks.length; i++){
                    var task = pingedTasks[i];
                    retryTask(request, task);
                }
                pingedTasks.splice(0, i);
                if (request.destination !== null) {
                    flushCompletedQueues(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            } finally{
                setCurrentResponseState(prevResponseState);
                ReactCurrentDispatcher$1.current = prevDispatcher;
                {
                    ReactCurrentCache.current = prevCacheDispatcher;
                }
                cleanupAfterRender(previousHostDispatcher);
                {
                    ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
                }
                if (prevDispatcher === HooksDispatcher) {
                    switchContext(prevContext);
                }
            }
        }
        function flushSubtree(request, destination, segment) {
            segment.parentFlushed = true;
            switch(segment.status){
                case PENDING:
                    {
                        var segmentID = segment.id = request.nextSegmentId++;
                        segment.lastPushedText = false;
                        segment.textEmbedded = false;
                        return writePlaceholder(destination, request.responseState, segmentID);
                    }
                case COMPLETED:
                    {
                        segment.status = FLUSHED;
                        var r = true;
                        var chunks = segment.chunks;
                        var chunkIdx = 0;
                        var children = segment.children;
                        for(var childIdx = 0; childIdx < children.length; childIdx++){
                            var nextChild = children[childIdx];
                            for(; chunkIdx < nextChild.index; chunkIdx++){
                                writeChunk(destination, chunks[chunkIdx]);
                            }
                            r = flushSegment(request, destination, nextChild);
                        }
                        for(; chunkIdx < chunks.length - 1; chunkIdx++){
                            writeChunk(destination, chunks[chunkIdx]);
                        }
                        if (chunkIdx < chunks.length) {
                            r = writeChunkAndReturn(destination, chunks[chunkIdx]);
                        }
                        return r;
                    }
                default:
                    {
                        throw new Error('Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.');
                    }
            }
        }
        function flushSegment(request, destination, segment) {
            var boundary = segment.boundary;
            if (boundary === null) {
                return flushSubtree(request, destination, segment);
            }
            boundary.parentFlushed = true;
            if (boundary.forceClientRender) {
                writeStartClientRenderedSuspenseBoundary(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
                flushSubtree(request, destination, segment);
                return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
            } else if (boundary.pendingTasks > 0) {
                boundary.rootSegmentID = request.nextSegmentId++;
                if (boundary.completedSegments.length > 0) {
                    request.partialBoundaries.push(boundary);
                }
                var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
                writeStartPendingSuspenseBoundary(destination, request.responseState, id);
                flushSubtree(request, destination, segment);
                return writeEndPendingSuspenseBoundary(destination, request.responseState);
            } else if (boundary.byteSize > request.progressiveChunkSize) {
                boundary.rootSegmentID = request.nextSegmentId++;
                request.completedBoundaries.push(boundary);
                writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
                flushSubtree(request, destination, segment);
                return writeEndPendingSuspenseBoundary(destination, request.responseState);
            } else {
                {
                    hoistResources(request.resources, boundary.resources);
                }
                writeStartCompletedSuspenseBoundary(destination, request.responseState);
                var completedSegments = boundary.completedSegments;
                if (completedSegments.length !== 1) {
                    throw new Error('A previously unvisited boundary must have exactly one root segment. This is a bug in React.');
                }
                var contentSegment = completedSegments[0];
                flushSegment(request, destination, contentSegment);
                return writeEndCompletedSuspenseBoundary(destination, request.responseState);
            }
        }
        function flushInitialResources(destination, resources, responseState, willFlushAllSegments) {
            writeInitialResources(destination, resources, responseState);
        }
        function flushImmediateResources(destination, request) {
            writeImmediateResources(destination, request.resources, request.responseState);
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
            return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
        }
        function flushSegmentContainer(request, destination, segment) {
            writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
            flushSegment(request, destination, segment);
            return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
            {
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, boundary.resources);
            }
            var completedSegments = boundary.completedSegments;
            var i = 0;
            for(; i < completedSegments.length; i++){
                var segment = completedSegments[i];
                flushPartiallyCompletedSegment(request, destination, boundary, segment);
            }
            completedSegments.length = 0;
            return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID, boundary.resources);
        }
        function flushPartialBoundary(request, destination, boundary) {
            {
                setCurrentlyRenderingBoundaryResourcesTarget(request.resources, boundary.resources);
            }
            var completedSegments = boundary.completedSegments;
            var i = 0;
            for(; i < completedSegments.length; i++){
                var segment = completedSegments[i];
                if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
                    i++;
                    completedSegments.splice(0, i);
                    return false;
                }
            }
            completedSegments.splice(0, i);
            return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
            if (segment.status === FLUSHED) {
                return true;
            }
            var segmentID = segment.id;
            if (segmentID === -1) {
                var rootSegmentID = segment.id = boundary.rootSegmentID;
                if (rootSegmentID === -1) {
                    throw new Error('A root segment ID must have been assigned by now. This is a bug in React.');
                }
                return flushSegmentContainer(request, destination, segment);
            } else {
                flushSegmentContainer(request, destination, segment);
                return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
            }
        }
        function flushCompletedQueues(request, destination) {
            beginWriting();
            try {
                var i;
                var completedRootSegment = request.completedRootSegment;
                if (completedRootSegment !== null) {
                    if (request.pendingRootTasks === 0) {
                        if (enableFloat) {
                            var preamble = request.preamble;
                            for(i = 0; i < preamble.length; i++){
                                writeChunk(destination, preamble[i]);
                            }
                            flushInitialResources(destination, request.resources, request.responseState, request.allPendingTasks === 0);
                        }
                        flushSegment(request, destination, completedRootSegment);
                        request.completedRootSegment = null;
                        writeCompletedRoot(destination, request.responseState);
                    } else {
                        return;
                    }
                } else if (enableFloat) {
                    flushImmediateResources(destination, request);
                }
                var clientRenderedBoundaries = request.clientRenderedBoundaries;
                for(i = 0; i < clientRenderedBoundaries.length; i++){
                    var boundary = clientRenderedBoundaries[i];
                    if (!flushClientRenderedBoundary(request, destination, boundary)) {
                        request.destination = null;
                        i++;
                        clientRenderedBoundaries.splice(0, i);
                        return;
                    }
                }
                clientRenderedBoundaries.splice(0, i);
                var completedBoundaries = request.completedBoundaries;
                for(i = 0; i < completedBoundaries.length; i++){
                    var _boundary = completedBoundaries[i];
                    if (!flushCompletedBoundary(request, destination, _boundary)) {
                        request.destination = null;
                        i++;
                        completedBoundaries.splice(0, i);
                        return;
                    }
                }
                completedBoundaries.splice(0, i);
                completeWriting(destination);
                beginWriting(destination);
                var partialBoundaries = request.partialBoundaries;
                for(i = 0; i < partialBoundaries.length; i++){
                    var _boundary2 = partialBoundaries[i];
                    if (!flushPartialBoundary(request, destination, _boundary2)) {
                        request.destination = null;
                        i++;
                        partialBoundaries.splice(0, i);
                        return;
                    }
                }
                partialBoundaries.splice(0, i);
                var largeBoundaries = request.completedBoundaries;
                for(i = 0; i < largeBoundaries.length; i++){
                    var _boundary3 = largeBoundaries[i];
                    if (!flushCompletedBoundary(request, destination, _boundary3)) {
                        request.destination = null;
                        i++;
                        largeBoundaries.splice(0, i);
                        return;
                    }
                }
                largeBoundaries.splice(0, i);
            } finally{
                if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
                    {
                        var postamble = request.postamble;
                        for(var _i = 0; _i < postamble.length; _i++){
                            writeChunk(destination, postamble[_i]);
                        }
                    }
                    completeWriting(destination);
                    {
                        if (request.abortableTasks.size !== 0) {
                            error('There was still abortable task at the root when we closed. This is a bug in React.');
                        }
                    }
                    close(destination);
                } else {
                    completeWriting(destination);
                }
            }
        }
        function startWork(request) {
            scheduleWork(function() {
                return performWork(request);
            });
        }
        function startFlowing(request, destination) {
            if (request.status === CLOSING) {
                request.status = CLOSED;
                closeWithError(destination, request.fatalError);
                return;
            }
            if (request.status === CLOSED) {
                return;
            }
            if (request.destination !== null) {
                return;
            }
            request.destination = destination;
            try {
                flushCompletedQueues(request, destination);
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function abort(request, reason) {
            try {
                var abortableTasks = request.abortableTasks;
                if (abortableTasks.size > 0) {
                    var _error = reason === undefined ? new Error('The render was aborted by the server without a reason.') : reason;
                    abortableTasks.forEach(function(task) {
                        return abortTask(task, request, _error);
                    });
                    abortableTasks.clear();
                }
                if (request.destination !== null) {
                    flushCompletedQueues(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function renderToReadableStream(children, options) {
            return new Promise(function(resolve, reject) {
                var onFatalError;
                var onAllReady;
                var allReady = new Promise(function(res, rej) {
                    onAllReady = res;
                    onFatalError = rej;
                });
                function onShellReady() {
                    var stream = new ReadableStream({
                        type: 'bytes',
                        pull: function(controller) {
                            startFlowing(request, controller);
                        },
                        cancel: function(reason) {
                            abort(request);
                        }
                    }, {
                        highWaterMark: 0
                    });
                    stream.allReady = allReady;
                    resolve(stream);
                }
                function onShellError(error) {
                    allReady.catch(function() {});
                    reject(error);
                }
                var request = createRequest(children, createResponseState(options ? options.identifierPrefix : undefined, options ? options.nonce : undefined, options ? options.bootstrapScriptContent : undefined, options ? options.bootstrapScripts : undefined, options ? options.bootstrapModules : undefined, options ? options.unstable_externalRuntimeSrc : undefined), createRootFormatContext(options ? options.namespaceURI : undefined), options ? options.progressiveChunkSize : undefined, options ? options.onError : undefined, onAllReady, onShellReady, onShellError, onFatalError);
                if (options && options.signal) {
                    var signal = options.signal;
                    if (signal.aborted) {
                        abort(request, signal.reason);
                    } else {
                        var listener = function() {
                            abort(request, signal.reason);
                            signal.removeEventListener('abort', listener);
                        };
                        signal.addEventListener('abort', listener);
                    }
                }
                startWork(request);
            });
        }
        exports.renderToReadableStream = renderToReadableStream;
        exports.version = ReactVersion;
    })();
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
if (process.env.NODE_ENV === 'production') {
    module.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.production.min.js (ecmascript, ssr)");
} else {
    module.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js (ecmascript, ssr)");
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.production.min.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

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
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

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


//# sourceMappingURL=87416_next_dist_compiled_react-dom_server.browser.js.map