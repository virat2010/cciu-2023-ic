(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/a8858_daisyui_dist_utilities-styled.js", {

"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/utilities-styled.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    ".artboard-demo": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "borderRadius": "var(--rounded-box, 1rem)",
        "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
    },
    ".avatar.online:before": {
        "content": "\"\"",
        "position": "absolute",
        "zIndex": "10",
        "display": "block",
        "borderRadius": "9999px",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "width": "15%",
        "height": "15%",
        "top": "7%",
        "right": "7%",
        "boxShadow": "0 0 0 2px hsl(var(--b1))"
    },
    ".avatar.offline:before": {
        "content": "\"\"",
        "position": "absolute",
        "zIndex": "10",
        "display": "block",
        "borderRadius": "9999px",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))",
        "width": "15%",
        "height": "15%",
        "top": "7%",
        "right": "7%",
        "boxShadow": "0 0 0 2px hsl(var(--b1))"
    },
    ".btn-group .btn:not(:first-child):not(:last-child), .btn-group.btn-group-horizontal .btn:not(:first-child):not(:last-child)": {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "0",
        "borderBottomLeftRadius": "0",
        "borderBottomRightRadius": "0"
    },
    ".btn-group .btn:first-child:not(:last-child), .btn-group.btn-group-horizontal .btn:first-child:not(:last-child)": {
        "marginLeft": "-1px",
        "marginTop": "-0px",
        "borderTopLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderTopRightRadius": "0",
        "borderBottomLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomRightRadius": "0"
    },
    ".btn-group .btn:last-child:not(:first-child), .btn-group.btn-group-horizontal .btn:last-child:not(:first-child)": {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomLeftRadius": "0",
        "borderBottomRightRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".btn-group.btn-group-vertical .btn:first-child:not(:last-child)": {
        "marginLeft": "-0px",
        "marginTop": "-1px",
        "borderTopLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderTopRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomLeftRadius": "0",
        "borderBottomRightRadius": "0"
    },
    ".btn-group.btn-group-vertical .btn:last-child:not(:first-child)": {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "0",
        "borderBottomLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomRightRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".card-compact .card-body": {
        "padding": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".card-compact .card-title": {
        "marginBottom": "0.25rem"
    },
    ".card-normal .card-body": {
        "padding": "var(--padding-card, 2rem)",
        "fontSize": "1rem",
        "lineHeight": "1.5rem"
    },
    ".card-normal .card-title": {
        "marginBottom": "0.75rem"
    },
    ".divider-horizontal": {
        "marginTop": "0px",
        "marginBottom": "0px",
        "marginLeft": "1rem",
        "marginRight": "1rem",
        "height": "auto",
        "width": "1rem"
    },
    ".divider-vertical": {
        "marginLeft": "0px",
        "marginRight": "0px",
        "marginTop": "1rem",
        "marginBottom": "1rem",
        "height": "1rem",
        "width": "auto"
    },
    ".menu-vertical :where(li.bordered > *)": {
        "borderLeftWidth": "4px",
        "borderBottomWidth": "0px"
    },
    ".menu-horizontal :where(li.bordered > *)": {
        "borderLeftWidth": "0px",
        "borderBottomWidth": "4px"
    },
    ".menu-normal :where(li > *)": {
        "paddingTop": "0.75rem",
        "paddingBottom": "0.75rem",
        "fontSize": "1rem",
        "lineHeight": "1.5rem"
    },
    ".menu-compact :where(li > *)": {
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".menu-vertical > :where(li:first-child)": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "unset"
    },
    ".menu-vertical > :where(li:first-child) > :where(*:not(ul))": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "unset"
    },
    ".menu-vertical > :where(li:last-child)": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu-vertical > :where(li:last-child) > :where(*:not(ul))": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu-horizontal > :where(li:first-child)": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu-horizontal > :where(li:first-child) > :where(*:not(ul))": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu-horizontal > :where(li:last-child)": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "unset"
    },
    ".menu-horizontal > :where(li:last-child) > :where(*:not(ul))": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "unset"
    },
    ".modal-bottom :where(.modal-box)": {
        "width": "100%",
        "maxWidth": "none",
        "-TwTranslateY": "2.5rem",
        "-TwScaleX": "1",
        "-TwScaleY": "1",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "borderBottomRightRadius": "0px",
        "borderBottomLeftRadius": "0px"
    },
    ".modal-middle :where(.modal-box)": {
        "width": "91.666667%",
        "maxWidth": "32rem",
        "-TwTranslateY": "0px",
        "-TwScaleX": ".9",
        "-TwScaleY": ".9",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "borderBottomLeftRadius": "var(--rounded-box, 1rem)",
        "borderBottomRightRadius": "var(--rounded-box, 1rem)"
    },
    ".stats-horizontal > :not([hidden]) ~ :not([hidden])": {
        "-TwDivideXReverse": "0",
        "borderRightWidth": "calc(1px * var(--tw-divide-x-reverse))",
        "borderLeftWidth": "calc(1px * calc(1 - var(--tw-divide-x-reverse)))",
        "-TwDivideYReverse": "0",
        "borderTopWidth": "calc(0px * calc(1 - var(--tw-divide-y-reverse)))",
        "borderBottomWidth": "calc(0px * var(--tw-divide-y-reverse))"
    },
    ".stats-horizontal": {
        "overflowX": "auto"
    },
    ".stats-vertical > :not([hidden]) ~ :not([hidden])": {
        "-TwDivideYReverse": "0",
        "borderTopWidth": "calc(1px * calc(1 - var(--tw-divide-y-reverse)))",
        "borderBottomWidth": "calc(1px * var(--tw-divide-y-reverse))",
        "-TwDivideXReverse": "0",
        "borderRightWidth": "calc(0px * var(--tw-divide-x-reverse))",
        "borderLeftWidth": "calc(0px * calc(1 - var(--tw-divide-x-reverse)))"
    },
    ".stats-vertical": {
        "overflowY": "auto"
    },
    ".steps-horizontal .step": {
        "gridTemplateRows": "40px 1fr",
        "gridTemplateColumns": "auto",
        "minWidth": "4rem"
    },
    ".steps-horizontal .step:before": {
        "height": "0.5rem",
        "width": "100%",
        "-TwTranslateY": "0px",
        "-TwTranslateX": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "content": "\"\"",
        "marginLeft": "-100%"
    },
    ".steps-vertical .step": {
        "gap": "0.5rem",
        "gridTemplateColumns": "40px 1fr",
        "gridTemplateRows": "auto",
        "minHeight": "4rem",
        "justifyItems": "start"
    },
    ".steps-vertical .step:before": {
        "height": "100%",
        "width": "0.5rem",
        "-TwTranslateY": "-50%",
        "-TwTranslateX": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "marginLeft": "50%"
    },
    ".table-normal :where(th, td)": {
        "padding": "1rem",
        "fontSize": "1rem",
        "lineHeight": "1.5rem"
    },
    ".table-compact :where(th, td)": {
        "padding": "0.5rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    }
};

}.call(this) }),
}]);


//# sourceMappingURL=a8858_daisyui_dist_utilities-styled.js.map