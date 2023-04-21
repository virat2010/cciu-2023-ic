(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/a8858_daisyui_dist_styled.js", {

"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/styled.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    ".alert": {
        "display": "flex",
        "width": "100%",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "space-between",
        "gap": "1rem",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "padding": "1rem",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".alert > :not([hidden]) ~ :not([hidden])": {
        "-TwSpaceYReverse": "0",
        "marginTop": "calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))",
        "marginBottom": "calc(0.5rem * var(--tw-space-y-reverse))"
    },
    "@media (min-width: 768px)": {
        ".alert": {
            "flexDirection": "row"
        },
        ".alert > :not([hidden]) ~ :not([hidden])": {
            "-TwSpaceYReverse": "0",
            "marginTop": "calc(0px * calc(1 - var(--tw-space-y-reverse)))",
            "marginBottom": "calc(0px * var(--tw-space-y-reverse))"
        }
    },
    ".alert > :where(*)": {
        "display": "flex",
        "alignItems": "center",
        "gap": "0.5rem"
    },
    ".artboard": {
        "width": "100%"
    },
    ".avatar": {
        "position": "relative",
        "display": "inline-flex"
    },
    ".avatar > div": {
        "display": "block",
        "aspectRatio": "1 / 1",
        "overflow": "hidden"
    },
    ".avatar img": {
        "height": "100%",
        "width": "100%",
        "objectFit": "cover"
    },
    ".avatar.placeholder > div": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    ".badge": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "height": "1.25rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem",
        "width": "fit-content",
        "paddingLeft": "0.563rem",
        "paddingRight": "0.563rem",
        "borderWidth": "1px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--n) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))",
        "borderRadius": "var(--rounded-badge, 1.9rem)"
    },
    ".btm-nav": {
        "position": "fixed",
        "bottom": "0px",
        "left": "0px",
        "right": "0px",
        "display": "flex",
        "width": "100%",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "space-around",
        "paddingBottom": "env(safe-area-inset-bottom)",
        "height": "4rem",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "color": "currentColor"
    },
    ".btm-nav>*": {
        "position": "relative",
        "display": "flex",
        "height": "100%",
        "flexBasis": "100%",
        "cursor": "pointer",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "gap": "0.25rem",
        "borderColor": "currentColor"
    },
    ".breadcrumbs": {
        "maxWidth": "100%",
        "overflowX": "auto",
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem"
    },
    ".breadcrumbs > ul": {
        "display": "flex",
        "alignItems": "center",
        "whiteSpace": "nowrap",
        "minHeight": "min-content"
    },
    ".breadcrumbs > ul > li": {
        "display": "flex",
        "alignItems": "center"
    },
    ".breadcrumbs > ul > li > a": {
        "display": "flex",
        "cursor": "pointer",
        "alignItems": "center"
    },
    ".breadcrumbs > ul > li > a:hover": {
        "textDecorationLine": "underline"
    },
    ".btn": {
        "display": "inline-flex",
        "flexShrink": "0",
        "cursor": "pointer",
        "userSelect": "none",
        "flexWrap": "wrap",
        "alignItems": "center",
        "justifyContent": "center",
        "borderColor": [
            "transparent",
            "hsl(var(--n) / var(--tw-border-opacity))"
        ],
        "textAlign": "center",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "borderRadius": "var(--rounded-btn, 0.5rem)",
        "height": "3rem",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "1em"
        ],
        "minHeight": "3rem",
        "fontWeight": "600",
        "textTransform": [
            "uppercase",
            "var(--btn-text-case, uppercase)"
        ],
        "textDecorationLine": [
            "none",
            "none"
        ],
        "borderWidth": "var(--border-btn, 1px)",
        "animation": "button-pop var(--animation-btn, 0.25s) ease-out",
        "-TwBorderOpacity": "1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))"
    },
    ".btn-disabled,\n  .btn[disabled]": {
        "pointerEvents": "none"
    },
    ".btn-square": {
        "height": "3rem",
        "width": "3rem",
        "padding": "0px"
    },
    ".btn-circle": {
        "height": "3rem",
        "width": "3rem",
        "borderRadius": "9999px",
        "padding": "0px"
    },
    ".btn.loading,\n    .btn.loading:hover": {
        "pointerEvents": "none"
    },
    ".btn.loading:before": {
        "marginRight": "0.5rem",
        "height": "1rem",
        "width": "1rem",
        "borderRadius": "9999px",
        "borderWidth": "2px",
        "animation": "spin 2s linear infinite",
        "content": "\"\"",
        "borderTopColor": "transparent",
        "borderLeftColor": "transparent",
        "borderBottomColor": "currentColor",
        "borderRightColor": "currentColor"
    },
    "@media (prefers-reduced-motion: reduce)": {
        ".btn.loading:before": {
            "animation": "spin 10s linear infinite"
        }
    },
    "@keyframes spin": {
        "from": {
            "transform": "rotate(0deg)"
        },
        "to": {
            "transform": "rotate(360deg)"
        }
    },
    ".btn-group": {
        "display": "inline-flex"
    },
    ".btn-group > input[type=\"radio\"].btn": {
        "appearance": "none"
    },
    ".btn-group > input[type=\"radio\"].btn:before": {
        "content": "attr(data-title)"
    },
    ".card": {
        "position": "relative",
        "display": "flex",
        "flexDirection": "column",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".card:focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".card-body": {
        "display": [
            "flex",
            "flex"
        ],
        "flex": "1 1 auto",
        "flexDirection": [
            "column",
            "column"
        ],
        "padding": "var(--padding-card, 2rem)",
        "gap": "0.5rem"
    },
    ".card-body :where(p)": {
        "flexGrow": "1"
    },
    ".card-actions": {
        "display": "flex",
        "flexWrap": "wrap",
        "alignItems": "flex-start",
        "gap": "0.5rem"
    },
    ".card figure": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    ".card.image-full": {
        "display": "grid"
    },
    ".card.image-full:before": {
        "position": "relative",
        "content": "\"\"",
        "zIndex": "10",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "opacity": "0.75",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".card.image-full:before,\n    .card.image-full > *": {
        "gridColumnStart": "1",
        "gridRowStart": "1"
    },
    ".card.image-full > figure img": {
        "height": "100%",
        "objectFit": "cover"
    },
    ".card.image-full > .card-body": {
        "position": "relative",
        "zIndex": "20",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))"
    },
    ".carousel": {
        "display": "flex",
        "overflowX": "scroll",
        "scrollSnapType": "x mandatory",
        "scrollBehavior": "smooth",
        "msOverflowStyle": "none",
        "scrollbarWidth": "none"
    },
    ".carousel-vertical": {
        "flexDirection": "column",
        "overflowY": "scroll",
        "scrollSnapType": "y mandatory"
    },
    ".carousel-item": {
        "boxSizing": "content-box",
        "display": "flex",
        "flex": "none",
        "scrollSnapAlign": "start"
    },
    ".carousel-center .carousel-item": {
        "scrollSnapAlign": "center"
    },
    ".carousel-end .carousel-item": {
        "scrollSnapAlign": "end"
    },
    ".chat": {
        "display": "grid",
        "gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
        "columnGap": "0.75rem",
        "paddingTop": "0.25rem",
        "paddingBottom": "0.25rem"
    },
    ".chat-image": {
        "gridRow": "span 2 / span 2",
        "alignSelf": "flex-end"
    },
    ".chat-header": {
        "gridRowStart": "1",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".chat-footer": {
        "gridRowStart": "3",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".chat-bubble": {
        "position": "relative",
        "display": "block",
        "width": "fit-content",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem",
        "maxWidth": "90%",
        "borderRadius": "var(--rounded-box, 1rem)",
        "minHeight": "2.75rem",
        "minWidth": "2.75rem",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))"
    },
    ".chat-bubble:before": {
        "position": "absolute",
        "bottom": "0px",
        "height": "0.75rem",
        "width": "0.75rem",
        "backgroundColor": "inherit",
        "content": "\"\"",
        "WebkitMaskSize": "contain",
        "maskSize": "contain",
        "WebkitMaskRepeat": "no-repeat",
        "maskRepeat": "no-repeat",
        "WebkitMaskPosition": "center",
        "maskPosition": "center"
    },
    ".chat-start": {
        "placeItems": "start",
        "gridTemplateColumns": "auto 1fr"
    },
    ".chat-start .chat-header": {
        "gridColumnStart": "2"
    },
    ".chat-start .chat-footer": {
        "gridColumnStart": "2"
    },
    ".chat-start .chat-image": {
        "gridColumnStart": "1"
    },
    ".chat-start .chat-bubble": {
        "gridColumnStart": "2",
        "borderBottomLeftRadius": "0px"
    },
    ".chat-start .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")",
        "left": "-0.75rem"
    },
    "[dir=\"rtl\"] .chat-start .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")"
    },
    ".chat-end": {
        "placeItems": "end",
        "gridTemplateColumns": "1fr auto"
    },
    ".chat-end .chat-header": {
        "gridColumnStart": "1"
    },
    ".chat-end .chat-footer": {
        "gridColumnStart": "1"
    },
    ".chat-end .chat-image": {
        "gridColumnStart": "2"
    },
    ".chat-end .chat-bubble": {
        "gridColumnStart": "1",
        "borderBottomRightRadius": "0px"
    },
    ".chat-end .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")",
        "left": "100%"
    },
    "[dir=\"rtl\"] .chat-end .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")"
    },
    ".checkbox": {
        "flexShrink": "0",
        "-Chkbg": "var(--bc)",
        "-Chkfg": "var(--b1)",
        "height": "1.5rem",
        "width": "1.5rem",
        "cursor": "pointer",
        "appearance": "none",
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.2",
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".collapse.collapse": {
        "visibility": "visible"
    },
    ".collapse": {
        "position": "relative",
        "display": "grid",
        "overflow": "hidden"
    },
    ".collapse-title,\n.collapse > input[type=\"checkbox\"],\n.collapse-content": {
        "gridColumnStart": "1",
        "gridRowStart": "1"
    },
    ".collapse > input[type=\"checkbox\"]": {
        "appearance": "none",
        "opacity": "0"
    },
    ".collapse-content": {
        "gridRowStart": "2",
        "overflow": "hidden",
        "maxHeight": "0px",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "cursor": "unset",
        "transition": "padding 0.2s ease-in-out, background-color 0.2s ease-in-out"
    },
    ".collapse-open .collapse-content,\n.collapse:focus:not(.collapse-close) .collapse-content,\n.collapse:not(.collapse-close)\n  input[type=\"checkbox\"]:checked\n  ~ .collapse-content": {
        "maxHeight": "none"
    },
    ":root .countdown": {
        "lineHeight": "1em"
    },
    ".countdown": {
        "display": "inline-flex"
    },
    ".countdown > *": {
        "height": "1em",
        "display": "inline-block",
        "overflowY": "hidden"
    },
    ".countdown > *:before": {
        "position": "relative",
        "content": "\"00\\A 01\\A 02\\A 03\\A 04\\A 05\\A 06\\A 07\\A 08\\A 09\\A 10\\A 11\\A 12\\A 13\\A 14\\A 15\\A 16\\A 17\\A 18\\A 19\\A 20\\A 21\\A 22\\A 23\\A 24\\A 25\\A 26\\A 27\\A 28\\A 29\\A 30\\A 31\\A 32\\A 33\\A 34\\A 35\\A 36\\A 37\\A 38\\A 39\\A 40\\A 41\\A 42\\A 43\\A 44\\A 45\\A 46\\A 47\\A 48\\A 49\\A 50\\A 51\\A 52\\A 53\\A 54\\A 55\\A 56\\A 57\\A 58\\A 59\\A 60\\A 61\\A 62\\A 63\\A 64\\A 65\\A 66\\A 67\\A 68\\A 69\\A 70\\A 71\\A 72\\A 73\\A 74\\A 75\\A 76\\A 77\\A 78\\A 79\\A 80\\A 81\\A 82\\A 83\\A 84\\A 85\\A 86\\A 87\\A 88\\A 89\\A 90\\A 91\\A 92\\A 93\\A 94\\A 95\\A 96\\A 97\\A 98\\A 99\\A\"",
        "whiteSpace": "pre",
        "top": "calc(var(--value) * -1em)",
        "textAlign": "center",
        "transition": "all 1s cubic-bezier(1, 0, 0, 1)"
    },
    ".divider": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "alignSelf": "stretch",
        "marginTop": "1rem",
        "marginBottom": "1rem",
        "height": "1rem",
        "whiteSpace": "nowrap"
    },
    ".divider:before,\n  .divider:after": {
        "content": "\"\"",
        "flexGrow": "1",
        "height": "0.125rem",
        "width": "100%"
    },
    ".drawer": {
        "display": "grid",
        "width": "100%",
        "overflow": "hidden",
        "height": [
            "100vh",
            "100dvh"
        ]
    },
    ".drawer.drawer-end": {
        "direction": "rtl"
    },
    ".drawer.drawer-end > *": {
        "direction": "ltr"
    },
    ".drawer.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay + *": {
        "-TwTranslateX": "100%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "justifySelf": "end"
    },
    ".drawer.drawer-end > .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + *": {
        "-TwTranslateX": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ":where(.drawer-toggle ~ .drawer-content)": {
        "height": "inherit"
    },
    ".drawer-toggle": {
        "position": "absolute",
        "height": "0px",
        "width": "0px",
        "appearance": "none",
        "opacity": "0"
    },
    ".drawer-toggle ~ .drawer-content": {
        "zIndex": "0",
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "overflowY": "auto",
        "transitionProperty": "all",
        "transitionDuration": "300ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".drawer-toggle ~ .drawer-side": {
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "display": "grid",
        "maxHeight": "100vh",
        "overflowX": "hidden"
    },
    ".drawer-toggle ~ .drawer-side > .drawer-overlay": {
        "visibility": "hidden",
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "opacity": "0",
        "cursor": "pointer",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))",
        "transitionProperty": "all",
        "transitionDuration": "300ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".drawer-toggle ~ .drawer-side > .drawer-overlay + *": {
        "zIndex": "10",
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "-TwTranslateX": "-100%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "transitionProperty": "all",
        "transitionDuration": "300ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".drawer-toggle:checked ~ .drawer-side": {
        "isolation": "isolate",
        "overflowY": "auto",
        "overflowX": "hidden"
    },
    ".drawer-toggle:checked ~ .drawer-side > .drawer-overlay": {
        "visibility": "visible",
        "opacity": "0.999999",
        "-TwBgOpacity": "0.4"
    },
    ".drawer-toggle:checked ~ .drawer-side > .drawer-overlay + *": {
        "-TwTranslateX": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    "[dir=\"rtl\"] .drawer-toggle ~ .drawer-side > .drawer-overlay + *": {
        "-TwTranslateX": "100%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    "[dir=\"rtl\"] .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + *": {
        "-TwTranslateX": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    "[dir=\"rtl\"] .drawer.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay + *": {
        "-TwTranslateX": "-100%"
    },
    "[dir=\"rtl\"] .drawer.drawer-end > .drawer-toggle:checked ~ .drawer-side > .drawer-overlay + *": {
        "-TwTranslateX": "0px"
    },
    "[dir=\"rtl\"] .drawer.drawer-end > .drawer-toggle:checked ~ .drawer-content": {
        "-TwTranslateX": "0.5rem"
    },
    "@media (min-width: 1024px)": [
        {
            ".drawer-mobile": {
                "gridAutoColumns": "max-content auto"
            },
            ".drawer-mobile > .drawer-toggle ~ .drawer-content": {
                "height": "auto"
            },
            "@media (min-width: 1024px)": [
                {
                    ".drawer-mobile > .drawer-toggle ~ .drawer-content": {
                        "gridColumnStart": "2"
                    }
                },
                {
                    ".drawer-mobile > .drawer-toggle ~ .drawer-side > .drawer-overlay": {
                        "visibility": "visible"
                    },
                    ".drawer-mobile > .drawer-toggle ~ .drawer-side > .drawer-overlay + *": {
                        "-TwTranslateX": "0px",
                        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
                    }
                },
                {
                    ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content": {
                        "gridColumnStart": "1"
                    }
                },
                {
                    ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side": {
                        "gridColumnStart": "2"
                    },
                    ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay": {
                        "visibility": "visible"
                    },
                    ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side > .drawer-overlay + *": {
                        "-TwTranslateX": "0px",
                        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
                    }
                }
            ],
            ".drawer-mobile > .drawer-toggle ~ .drawer-side": {
                "overflowY": "auto"
            },
            ".drawer-mobile.drawer-end": {
                "gridAutoColumns": "auto max-content",
                "direction": "ltr"
            },
            ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content": {
                "height": "auto"
            },
            ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side": {
                "overflowY": "auto"
            }
        },
        {
            ".drawer-mobile > .drawer-toggle:checked ~ .drawer-content": {
                "-TwTranslateX": "0px",
                "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
            }
        }
    ],
    ".dropdown": {
        "position": "relative",
        "display": "inline-block"
    },
    ".dropdown > *:focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".dropdown .dropdown-content": {
        "visibility": "hidden",
        "position": "absolute",
        "zIndex": "50",
        "opacity": "0",
        "transformOrigin": "top",
        "-TwScaleX": ".95",
        "-TwScaleY": ".95",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".dropdown-end .dropdown-content": {
        "right": "0px"
    },
    ".dropdown-left .dropdown-content": {
        "top": "0px",
        "right": "100%",
        "bottom": "auto",
        "transformOrigin": "right"
    },
    ".dropdown-right .dropdown-content": {
        "left": "100%",
        "top": "0px",
        "bottom": "auto",
        "transformOrigin": "left"
    },
    ".dropdown-bottom .dropdown-content": {
        "bottom": "auto",
        "top": "100%",
        "transformOrigin": "top"
    },
    ".dropdown-top .dropdown-content": {
        "bottom": "100%",
        "top": "auto",
        "transformOrigin": "bottom"
    },
    ".dropdown-end.dropdown-right .dropdown-content": {
        "bottom": "0px",
        "top": "auto"
    },
    ".dropdown-end.dropdown-left .dropdown-content": {
        "bottom": "0px",
        "top": "auto"
    },
    ".dropdown.dropdown-open .dropdown-content,\n.dropdown.dropdown-hover:hover .dropdown-content,\n.dropdown:not(.dropdown-hover):focus .dropdown-content,\n.dropdown:not(.dropdown-hover):focus-within .dropdown-content": {
        "visibility": "visible",
        "opacity": "1"
    },
    ".file-input": {
        "height": "3rem",
        "flexShrink": "1",
        "paddingRight": "1rem",
        "fontSize": [
            "0.875rem",
            "1rem"
        ],
        "lineHeight": [
            "1.25rem",
            "2",
            "1.5rem"
        ],
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "overflow": "hidden",
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".file-input::file-selector-button": {
        "marginRight": "1rem",
        "display": "inline-flex",
        "height": "2.875rem",
        "minHeight": "2.875rem",
        "flexShrink": "0",
        "cursor": "pointer",
        "userSelect": "none",
        "flexWrap": "wrap",
        "alignItems": "center",
        "justifyContent": "center",
        "borderColor": [
            "transparent",
            "hsl(var(--n) / var(--tw-border-opacity))"
        ],
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "textAlign": "center",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "1em"
        ],
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "-TwBorderOpacity": "1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "fontWeight": "600",
        "textTransform": [
            "uppercase",
            "var(--btn-text-case, uppercase)"
        ],
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))",
        "textDecorationLine": "none",
        "borderWidth": "var(--border-btn, 1px)",
        "animation": "button-pop var(--animation-btn, 0.25s) ease-out"
    },
    ".footer": {
        "display": "grid",
        "width": "100%",
        "gridAutoFlow": "row",
        "placeItems": "start",
        "rowGap": "2.5rem",
        "columnGap": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".footer > *": {
        "display": "grid",
        "placeItems": "start",
        "gap": "0.5rem"
    },
    ".footer-center": {
        "placeItems": "center",
        "textAlign": "center"
    },
    ".footer-center > *": {
        "placeItems": "center"
    },
    "@media (min-width: 48rem)": {
        ".footer": {
            "gridAutoFlow": "column"
        },
        ".footer-center": {
            "gridAutoFlow": "row dense"
        }
    },
    ".form-control": {
        "display": "flex",
        "flexDirection": "column"
    },
    ".label": {
        "display": "flex",
        "userSelect": "none",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingLeft": "0.25rem",
        "paddingRight": "0.25rem",
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem"
    },
    ".hero": {
        "display": "grid",
        "width": "100%",
        "placeItems": "center",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    },
    ".hero > *": {
        "gridColumnStart": "1",
        "gridRowStart": "1"
    },
    ".hero-overlay": {
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "height": "100%",
        "width": "100%",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.5"
    },
    ".hero-content": {
        "zIndex": "0",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "maxWidth": "80rem",
        "gap": "1rem",
        "padding": "1rem"
    },
    ".indicator": {
        "position": "relative",
        "display": "inline-flex",
        "width": "max-content"
    },
    ".indicator :where(.indicator-item)": {
        "zIndex": "1",
        "position": "absolute",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".input": {
        "flexShrink": "1",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "height": "3rem",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "fontSize": [
            "0.875rem",
            "1rem"
        ],
        "lineHeight": [
            "1.25rem",
            "2",
            "1.5rem"
        ],
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".input-group": {
        "display": "flex",
        "width": "100%",
        "alignItems": "stretch"
    },
    ".input-group > .input": {
        "isolation": "isolate"
    },
    ".input-group > *,\n  .input-group > .input,\n  .input-group > .textarea,\n  .input-group > .select": {
        "borderRadius": "0px"
    },
    ".input-group-md": {
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ]
    },
    ".input-group-lg": {
        "fontSize": "1.125rem",
        "lineHeight": [
            "1.75rem",
            "2"
        ]
    },
    ".input-group-sm": {
        "fontSize": "0.875rem",
        "lineHeight": "2rem"
    },
    ".input-group-xs": {
        "fontSize": "0.75rem",
        "lineHeight": [
            "1rem",
            "1.625"
        ]
    },
    ".input-group :where(span)": {
        "display": "flex",
        "alignItems": "center",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))",
        "paddingLeft": "1rem",
        "paddingRight": "1rem"
    },
    ".input-group > :first-child": {
        "borderTopLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderTopRightRadius": "0",
        "borderBottomLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomRightRadius": "0"
    },
    ".input-group > :last-child": {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomLeftRadius": "0",
        "borderBottomRightRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".input-group-vertical": {
        "flexDirection": "column"
    },
    ".input-group-vertical :first-child": {
        "borderTopLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderTopRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomLeftRadius": "0",
        "borderBottomRightRadius": "0"
    },
    ".input-group-vertical :last-child": {
        "borderTopLeftRadius": "0",
        "borderTopRightRadius": "0",
        "borderBottomLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomRightRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".kbd": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.2",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "paddingLeft": "0.5rem",
        "paddingRight": "0.5rem",
        "borderRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomWidth": "2px",
        "minHeight": "2.2em",
        "minWidth": "2.2em"
    },
    ".link": {
        "cursor": "pointer",
        "textDecorationLine": "underline"
    },
    ".link-hover": {
        "textDecorationLine": "none"
    },
    ".link-hover:hover": {
        "textDecorationLine": "underline"
    },
    ".mask": {
        "WebkitMaskSize": "contain",
        "maskSize": "contain",
        "WebkitMaskRepeat": "no-repeat",
        "maskRepeat": "no-repeat",
        "WebkitMaskPosition": "center",
        "maskPosition": "center"
    },
    ".mask-half-1": {
        "WebkitMaskSize": "200%",
        "maskSize": "200%",
        "WebkitMaskPosition": "left",
        "maskPosition": "left"
    },
    ".mask-half-2": {
        "WebkitMaskSize": "200%",
        "maskSize": "200%",
        "WebkitMaskPosition": "right",
        "maskPosition": "right"
    },
    ".menu": {
        "display": "flex",
        "flexDirection": "column",
        "flexWrap": "wrap"
    },
    ".menu.horizontal": {
        "display": "inline-flex",
        "flexDirection": "row"
    },
    ".menu.horizontal :where(li)": {
        "flexDirection": "row"
    },
    ":where(.menu li)": {
        "position": "relative",
        "display": "flex",
        "flexShrink": "0",
        "flexDirection": "column",
        "flexWrap": "wrap",
        "alignItems": "stretch"
    },
    ".menu :where(li:not(.menu-title)) > :where(*:not(ul))": {
        "display": "flex"
    },
    ".menu :where(li:not(.disabled):not(.menu-title)) > :where(*:not(ul))": {
        "cursor": "pointer",
        "userSelect": "none",
        "alignItems": "center",
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".menu > :where(li > *:not(ul):focus)": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".menu > :where(li.disabled > *:not(ul):focus)": {
        "cursor": "auto"
    },
    ".menu > :where(li) :where(ul)": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "stretch"
    },
    ".menu > :where(li) > :where(ul)": {
        "position": "absolute",
        "display": "none",
        "top": "initial",
        "left": "100%",
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu > :where(li:hover) > :where(ul)": {
        "display": "flex"
    },
    ".menu > :where(li:focus) > :where(ul)": {
        "display": "flex"
    },
    ".mockup-code": {
        "position": "relative",
        "overflow": "hidden",
        "overflowX": "auto",
        "minWidth": "18rem",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "paddingTop": "1.25rem",
        "paddingBottom": "1.25rem",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".mockup-code pre[data-prefix]:before": {
        "content": [
            "attr(data-prefix)",
            "attr(data-prefix)"
        ],
        "display": "inline-block",
        "textAlign": "right",
        "width": "2rem",
        "opacity": "0.5"
    },
    ".mockup-window": {
        "position": "relative",
        "overflow": "hidden",
        "overflowX": "auto",
        "paddingTop": "1.25rem",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".mockup-window pre[data-prefix]:before": {
        "content": "attr(data-prefix)",
        "display": "inline-block",
        "textAlign": "right"
    },
    ".modal": {
        "pointerEvents": "none",
        "visibility": "hidden",
        "position": "fixed",
        "top": "0px",
        "right": "0px",
        "bottom": "0px",
        "left": "0px",
        "display": "flex",
        "justifyContent": "center",
        "opacity": "0",
        "zIndex": "999",
        "backgroundColor": "hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.4",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transitionProperty": "transform, opacity, visibility",
        "overflowY": "hidden",
        "overscrollBehavior": "contain"
    },
    ":where(.modal)": {
        "alignItems": "center"
    },
    ".modal-box": {
        "maxHeight": "calc(100vh - 5em)",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "padding": "1.5rem",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "width": "91.666667%",
        "maxWidth": "32rem",
        "-TwScaleX": ".9",
        "-TwScaleY": ".9",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "borderTopLeftRadius": "var(--rounded-box, 1rem)",
        "borderTopRightRadius": "var(--rounded-box, 1rem)",
        "borderBottomLeftRadius": "var(--rounded-box, 1rem)",
        "borderBottomRightRadius": "var(--rounded-box, 1rem)",
        "boxShadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "overflowY": "auto",
        "overscrollBehavior": "contain"
    },
    ".modal-open,\n.modal:target,\n.modal-toggle:checked + .modal": {
        "pointerEvents": "auto",
        "visibility": "visible",
        "opacity": "1"
    },
    ".modal-action": {
        "display": "flex",
        "marginTop": "1.5rem",
        "justifyContent": "flex-end"
    },
    ".modal-toggle": {
        "position": "fixed",
        "height": "0px",
        "width": "0px",
        "appearance": "none",
        "opacity": "0"
    },
    ".navbar": {
        "display": "flex",
        "alignItems": "center",
        "padding": "var(--navbar-padding, 0.5rem)",
        "minHeight": "4rem",
        "width": "100%"
    },
    ":where(.navbar > *)": {
        "display": "inline-flex",
        "alignItems": "center"
    },
    ".navbar-start": {
        "width": "50%",
        "justifyContent": "flex-start"
    },
    ".navbar-center": {
        "flexShrink": "0"
    },
    ".navbar-end": {
        "width": "50%",
        "justifyContent": "flex-end"
    },
    ".progress": {
        "position": "relative",
        "width": "100%",
        "appearance": "none",
        "overflow": "hidden",
        "height": "0.5rem",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".radial-progress": {
        "position": "relative",
        "display": "inline-grid",
        "height": "var(--size)",
        "width": "var(--size)",
        "placeContent": "center",
        "borderRadius": "9999px",
        "backgroundColor": "transparent",
        "verticalAlign": "middle",
        "boxSizing": "content-box",
        "-Value": "0",
        "-Size": "5rem",
        "-Thickness": "calc(var(--size) / 10)"
    },
    ".radial-progress::-moz-progress-bar": {
        "appearance": "none",
        "backgroundColor": "transparent"
    },
    ".radial-progress::-webkit-progress-value": {
        "appearance": "none",
        "backgroundColor": "transparent"
    },
    ".radial-progress::-webkit-progress-bar": {
        "appearance": "none",
        "backgroundColor": "transparent"
    },
    ".radial-progress:before,\n.radial-progress:after": {
        "position": "absolute",
        "borderRadius": "9999px",
        "content": "\"\""
    },
    ".radial-progress:before": {
        "top": "0px",
        "right": "0px",
        "bottom": "0px",
        "left": "0px",
        "background": "radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0)",
        "WebkitMask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))",
        "mask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))"
    },
    ".radial-progress:after": {
        "inset": "calc(50% - var(--thickness) / 2)",
        "transform": "rotate(calc(var(--value) * 3.6deg - 90deg)) translate(calc(var(--size) / 2 - 50%))",
        "backgroundColor": "currentColor"
    },
    ".radio": {
        "flexShrink": "0",
        "-Chkbg": "var(--bc)",
        "height": "1.5rem",
        "width": "1.5rem",
        "cursor": "pointer",
        "appearance": "none",
        "borderRadius": "9999px",
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.2",
        "transition": "background, box-shadow var(--animation-input, 0.2s) ease-in-out"
    },
    ".range": {
        "height": "1.5rem",
        "width": "100%",
        "cursor": "pointer",
        "appearance": "none",
        "WebkitAppearance": "none",
        "-RangeShdw": "var(--bc)",
        "overflow": "hidden",
        "backgroundColor": "transparent",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".range:focus": {
        "outline": "none"
    },
    ".rating": {
        "position": "relative",
        "display": "inline-flex"
    },
    ".rating :where(input)": {
        "cursor": "pointer",
        "animation": "rating-pop var(--animation-input, 0.25s) ease-out",
        "height": "1.5rem",
        "width": "1.5rem",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "1"
    },
    ".select": {
        "display": "inline-flex",
        "flexShrink": "0",
        "cursor": "pointer",
        "userSelect": "none",
        "appearance": "none",
        "height": "3rem",
        "paddingLeft": "1rem",
        "paddingRight": [
            "2.5rem",
            "2.5rem"
        ],
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ],
        "minHeight": "3rem",
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "fontWeight": "600",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "borderRadius": "var(--rounded-btn, 0.5rem)",
        "backgroundImage": "linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)",
        "backgroundPosition": "calc(100% - 20px) calc(1px + 50%), calc(100% - 16px) calc(1px + 50%)",
        "backgroundSize": "4px 4px, 4px 4px",
        "backgroundRepeat": "no-repeat"
    },
    ".select[multiple]": {
        "height": "auto"
    },
    ".stack": {
        "display": "inline-grid",
        "placeItems": "center",
        "alignItems": "flex-end"
    },
    ".stack > *": {
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "transform": "translateY(10%) scale(0.9)",
        "zIndex": "1",
        "width": "100%",
        "opacity": "0.6"
    },
    ".stack > *:nth-child(2)": {
        "transform": "translateY(5%) scale(0.95)",
        "zIndex": "2",
        "opacity": "0.8"
    },
    ".stack > *:nth-child(1)": {
        "transform": "translateY(0) scale(1)",
        "zIndex": "3",
        "opacity": "1"
    },
    ".stats": {
        "display": "inline-grid",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ":where(.stats)": {
        "gridAutoFlow": "column",
        "overflowX": "auto"
    },
    ".stat": {
        "display": "inline-grid",
        "width": "100%",
        "gridTemplateColumns": "repeat(1, 1fr)",
        "columnGap": "1rem",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "paddingLeft": "1.5rem",
        "paddingRight": "1.5rem",
        "paddingTop": "1rem",
        "paddingBottom": "1rem"
    },
    ".stat-figure": {
        "gridColumnStart": "2",
        "gridRow": "span 3 / span 3",
        "gridRowStart": "1",
        "placeSelf": "center",
        "justifySelf": "end"
    },
    ".stat-title": {
        "gridColumnStart": "1",
        "whiteSpace": "nowrap",
        "opacity": "0.6"
    },
    ".stat-value": {
        "gridColumnStart": "1",
        "whiteSpace": "nowrap",
        "fontSize": "2.25rem",
        "lineHeight": "2.5rem",
        "fontWeight": "800"
    },
    ".stat-desc": {
        "gridColumnStart": "1",
        "whiteSpace": "nowrap",
        "fontSize": "0.75rem",
        "lineHeight": "1rem",
        "opacity": "0.6"
    },
    ".stat-actions": {
        "gridColumnStart": "1",
        "whiteSpace": "nowrap",
        "marginTop": "1rem"
    },
    ".steps": {
        "display": "inline-grid",
        "gridAutoFlow": "column",
        "overflow": "hidden",
        "overflowX": "auto",
        "counterReset": "step",
        "gridAutoColumns": "1fr"
    },
    ".steps .step": {
        "display": "grid",
        "gridTemplateColumns": [
            "repeat(1, minmax(0, 1fr))",
            "auto"
        ],
        "gridTemplateRows": [
            "repeat(2, minmax(0, 1fr))",
            "40px 1fr"
        ],
        "placeItems": "center",
        "textAlign": "center",
        "minWidth": "4rem"
    },
    ".swap": {
        "position": "relative",
        "display": "inline-grid",
        "userSelect": "none",
        "placeContent": "center",
        "cursor": "pointer"
    },
    ".swap > *": {
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "transitionDuration": "300ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transitionProperty": "transform, opacity"
    },
    ".swap input": {
        "appearance": "none"
    },
    ".swap .swap-on,\n.swap .swap-indeterminate,\n.swap input:indeterminate ~ .swap-on": {
        "opacity": "0"
    },
    ".swap input:checked ~ .swap-off,\n.swap.swap-active .swap-off,\n.swap input:indeterminate ~ .swap-off": {
        "opacity": "0"
    },
    ".swap input:checked ~ .swap-on,\n.swap-active .swap-on,\n.swap input:indeterminate ~ .swap-indeterminate": {
        "opacity": "1"
    },
    ".tabs": {
        "display": "flex",
        "flexWrap": "wrap",
        "alignItems": "flex-end"
    },
    ".tab": {
        "position": "relative",
        "display": "inline-flex",
        "cursor": "pointer",
        "userSelect": "none",
        "flexWrap": "wrap",
        "alignItems": "center",
        "justifyContent": "center",
        "textAlign": "center",
        "height": "2rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ],
        "-TabPadding": "1rem",
        "-TwTextOpacity": "0.5",
        "-TabColor": "hsla(var(--bc) / var(--tw-text-opacity, 1))",
        "-TabBg": "hsla(var(--b1) / var(--tw-bg-opacity, 1))",
        "-TabBorderColor": "hsla(var(--b3) / var(--tw-bg-opacity, 1))",
        "color": "var(--tab-color)",
        "paddingLeft": "var(--tab-padding, 1rem)",
        "paddingRight": "var(--tab-padding, 1rem)"
    },
    ".table": {
        "position": "relative",
        "textAlign": "left"
    },
    ".table th:first-child": {
        "position": [
            "sticky",
            "-webkit-sticky"
        ],
        "left": "0px",
        "zIndex": "11"
    },
    ".textarea": {
        "flexShrink": "1",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "minHeight": "3rem",
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ],
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))",
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".toast": {
        "position": "fixed",
        "display": "flex",
        "minWidth": "fit-content",
        "flexDirection": "column",
        "gap": "0.5rem",
        "padding": "1rem"
    },
    ".toggle": {
        "flexShrink": "0",
        "-Tglbg": "hsl(var(--b1))",
        "-Handleoffset": "1.5rem",
        "-Handleoffsetcalculator": "calc(var(--handleoffset) * -1)",
        "-Togglehandleborder": "0 0",
        "height": "1.5rem",
        "width": "3rem",
        "cursor": "pointer",
        "appearance": "none",
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.2",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.5",
        "transitionDuration": "300ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "borderRadius": "var(--rounded-badge, 1.9rem)",
        "transition": "background, box-shadow var(--animation-input, 0.2s) ease-in-out",
        "boxShadow": "var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset, var(--togglehandleborder)"
    },
    ".tooltip": {
        "position": [
            "relative",
            "relative"
        ],
        "display": [
            "inline-block",
            "inline-block"
        ],
        "-TooltipOffset": "calc(100% + 1px + var(--tooltip-tail, 0px))",
        "textAlign": "center",
        "-TooltipTail": "3px",
        "-TooltipColor": "hsl(var(--n))",
        "-TooltipTextColor": "hsl(var(--nc))",
        "-TooltipTailOffset": "calc(100% + 1px - var(--tooltip-tail))"
    },
    ".tooltip:before": {
        "position": "absolute",
        "pointerEvents": "none",
        "zIndex": "1",
        "content": "var(--tw-content)",
        "-TwContent": "attr(data-tip)",
        "maxWidth": "20rem",
        "borderRadius": "0.25rem",
        "paddingLeft": "0.5rem",
        "paddingRight": "0.5rem",
        "paddingTop": "0.25rem",
        "paddingBottom": "0.25rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem",
        "backgroundColor": "var(--tooltip-color)",
        "color": "var(--tooltip-text-color)",
        "width": "max-content"
    },
    ".tooltip:before, .tooltip-top:before": {
        "transform": "translateX(-50%)",
        "top": "auto",
        "left": "50%",
        "right": "auto",
        "bottom": "var(--tooltip-offset)"
    },
    ".tooltip-bottom:before": {
        "transform": "translateX(-50%)",
        "top": "var(--tooltip-offset)",
        "left": "50%",
        "right": "auto",
        "bottom": "auto"
    },
    ".tooltip-left:before": {
        "transform": "translateY(-50%)",
        "top": "50%",
        "left": "auto",
        "right": "var(--tooltip-offset)",
        "bottom": "auto"
    },
    ".tooltip-right:before": {
        "transform": "translateY(-50%)",
        "top": "50%",
        "left": "var(--tooltip-offset)",
        "right": "auto",
        "bottom": "auto"
    },
    ".alert-info": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".alert-success": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".alert-warning": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".alert-error": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".avatar-group": {
        "display": "flex",
        "overflow": "hidden"
    },
    ".avatar-group :where(.avatar)": {
        "overflow": "hidden",
        "borderRadius": "9999px",
        "borderWidth": "4px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b1) / var(--tw-border-opacity))"
    },
    ".badge-primary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".badge-secondary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".badge-accent": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".badge-info": {
        "borderColor": "transparent",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".badge-success": {
        "borderColor": "transparent",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".badge-warning": {
        "borderColor": "transparent",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".badge-error": {
        "borderColor": "transparent",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".badge-ghost": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".badge-outline": {
        "borderColor": "currentColor",
        "-TwBorderOpacity": "0.5",
        "backgroundColor": "transparent",
        "color": "currentColor"
    },
    ".badge-outline.badge-primary": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--p) / var(--tw-text-opacity))"
    },
    ".badge-outline.badge-secondary": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--s) / var(--tw-text-opacity))"
    },
    ".badge-outline.badge-accent": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--a) / var(--tw-text-opacity))"
    },
    ".badge-outline.badge-info": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--in) / var(--tw-text-opacity))"
    },
    ".badge-outline.badge-success": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--su) / var(--tw-text-opacity))"
    },
    ".badge-outline.badge-warning": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wa) / var(--tw-text-opacity))"
    },
    ".badge-outline.badge-error": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--er) / var(--tw-text-opacity))"
    },
    ".btn-outline .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--nf, var(--n)) / var(--tw-border-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-primary .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-secondary .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-accent .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".btn-outline .badge.outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--nf, var(--n)) / var(--tw-border-opacity))",
        "backgroundColor": "transparent"
    },
    ".btn-outline.btn-primary .badge-outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--p) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-secondary .badge-outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--s) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-accent .badge-outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--a) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-info .badge-outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--in) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-success .badge-outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--su) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-warning .badge-outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wa) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-error .badge-outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--er) / var(--tw-text-opacity))"
    },
    ".btn-outline:hover .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".btn-outline:hover .badge.outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-primary:hover .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--pc) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--pc) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--p) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-primary:hover .badge.outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--pc) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--pf, var(--p)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-secondary:hover .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--sc) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--sc) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--s) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-secondary:hover .badge.outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--sc) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--sf, var(--s)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-accent:hover .badge": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--ac) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--ac) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--a) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-accent:hover .badge.outline": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--ac) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--af, var(--a)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".btm-nav>*:not(.active)": {
        "paddingTop": "0.125rem"
    },
    ".btm-nav>*:where(.active)": {
        "borderTopWidth": "2px",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))"
    },
    ".btm-nav>*.disabled,\n    .btm-nav>*.disabled:hover,\n    .btm-nav>*[disabled],\n    .btm-nav>*[disabled]:hover": {
        "pointerEvents": "none",
        "-TwBorderOpacity": "0",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".btm-nav>* .label": {
        "fontSize": "1rem",
        "lineHeight": "1.5rem"
    },
    ".breadcrumbs > ul > li > a:focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".breadcrumbs > ul > li > a:focus-visible": {
        "outline": "2px solid currentColor",
        "outlineOffset": "2px"
    },
    ".breadcrumbs > ul > li + *:before": {
        "content": "\"\"",
        "marginLeft": "0.5rem",
        "marginRight": "0.75rem",
        "display": "block",
        "height": "0.375rem",
        "width": "0.375rem",
        "-TwRotate": "45deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "opacity": "0.4",
        "borderTop": "1px solid",
        "borderRight": "1px solid",
        "backgroundColor": "transparent"
    },
    "[dir=\"rtl\"] .breadcrumbs>ul>li+*:before": {
        "-TwRotate": "-45deg"
    },
    ".btn:active:hover,\n  .btn:active:focus": {
        "animation": "none",
        "transform": "scale(var(--btn-focus-scale, 0.95))"
    },
    ".btn:hover,\n    .btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--nf, var(--n)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))"
    },
    ".btn:focus-visible": {
        "outline": "2px solid hsl(var(--nf))",
        "outlineOffset": "2px"
    },
    ".btn-primary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".btn-primary:hover,\n    .btn-primary.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--pf, var(--p)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--pf, var(--p)) / var(--tw-bg-opacity))"
    },
    ".btn-primary:focus-visible": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".btn-secondary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".btn-secondary:hover,\n    .btn-secondary.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--sf, var(--s)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--sf, var(--s)) / var(--tw-bg-opacity))"
    },
    ".btn-secondary:focus-visible": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".btn-accent": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".btn-accent:hover,\n    .btn-accent.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--af, var(--a)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--af, var(--a)) / var(--tw-bg-opacity))"
    },
    ".btn-accent:focus-visible": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".btn-info": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-info:hover,\n    .btn-info.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))"
    },
    ".btn-info:focus-visible": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".btn-success": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-success:hover,\n    .btn-success.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))"
    },
    ".btn-success:focus-visible": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".btn-warning": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-warning:hover,\n    .btn-warning.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))"
    },
    ".btn-warning:focus-visible": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".btn-error": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-error:hover,\n    .btn-error.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))"
    },
    ".btn-error:focus-visible": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".btn.glass:hover,\n    .btn.glass.btn-active": {
        "-GlassOpacity": "25%",
        "-GlassBorderOpacity": "15%"
    },
    ".btn.glass:focus-visible": {
        "outline": "2px solid currentColor"
    },
    ".btn-ghost": {
        "borderWidth": "1px",
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "currentColor"
    },
    ".btn-ghost:hover,\n    .btn-ghost.btn-active": {
        "-TwBorderOpacity": "0",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.2"
    },
    ".btn-ghost:focus-visible": {
        "outline": "2px solid currentColor"
    },
    ".btn-link": {
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--p) / var(--tw-text-opacity))",
        "textDecorationLine": "underline"
    },
    ".btn-link:hover,\n    .btn-link.btn-active": {
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "textDecorationLine": "underline"
    },
    ".btn-link:focus-visible": {
        "outline": "2px solid currentColor"
    },
    ".btn-outline": {
        "borderColor": "currentColor",
        "backgroundColor": "transparent",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".btn-outline:hover,\n    .btn-outline.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--b1) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-primary": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--p) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-primary:hover,\n      .btn-outline.btn-primary.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--pf, var(--p)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--pf, var(--p)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-secondary": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--s) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-secondary:hover,\n      .btn-outline.btn-secondary.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--sf, var(--s)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--sf, var(--s)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-accent": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--a) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-accent:hover,\n      .btn-outline.btn-accent.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--af, var(--a)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--af, var(--a)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-success": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--su) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-success:hover,\n      .btn-outline.btn-success.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-info": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--in) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-info:hover,\n      .btn-outline.btn-info.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-warning": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wa) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-warning:hover,\n      .btn-outline.btn-warning.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-error": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--er) / var(--tw-text-opacity))"
    },
    ".btn-outline.btn-error:hover,\n      .btn-outline.btn-error.btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".btn-disabled,\n  .btn-disabled:hover,\n  .btn[disabled],\n  .btn[disabled]:hover": {
        "-TwBorderOpacity": "0",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.2",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".btn.loading.btn-square:before,\n    .btn.loading.btn-circle:before": {
        "marginRight": "0px"
    },
    ".btn.loading.btn-xl:before,\n    .btn.loading.btn-lg:before": {
        "height": "1.25rem",
        "width": "1.25rem"
    },
    ".btn.loading.btn-sm:before,\n    .btn.loading.btn-xs:before": {
        "height": "0.75rem",
        "width": "0.75rem"
    },
    ".btn-group > input[type=\"radio\"]:checked.btn,\n  .btn-group > .btn-active": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".btn-group > input[type=\"radio\"]:checked.btn:focus-visible, .btn-group > .btn-active:focus-visible": {
        "outline": "2px solid hsl(var(--p))"
    },
    "@keyframes button-pop": {
        "0%": {
            "transform": "scale(var(--btn-focus-scale, 0.95))"
        },
        "40%": {
            "transform": "scale(1.02)"
        },
        "100%": {
            "transform": "scale(1)"
        }
    },
    ".card :where(figure:first-child)": {
        "overflow": "hidden",
        "borderStartStartRadius": "inherit",
        "borderStartEndRadius": "inherit",
        "borderEndStartRadius": "unset",
        "borderEndEndRadius": "unset"
    },
    ".card :where(figure:last-child)": {
        "overflow": "hidden",
        "borderStartStartRadius": "unset",
        "borderStartEndRadius": "unset",
        "borderEndStartRadius": "inherit",
        "borderEndEndRadius": "inherit"
    },
    ".card:focus-visible": {
        "outline": "2px solid currentColor",
        "outlineOffset": "2px"
    },
    ".card.bordered": {
        "borderWidth": "1px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))"
    },
    ".card-bordered": {
        "borderWidth": "1px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))"
    },
    ".card.compact .card-body": {
        "padding": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".card-title": {
        "display": "flex",
        "alignItems": "center",
        "gap": "0.5rem",
        "fontSize": "1.25rem",
        "lineHeight": "1.75rem",
        "fontWeight": "600"
    },
    ".card.image-full :where(figure)": {
        "overflow": "hidden",
        "borderRadius": "inherit"
    },
    ".carousel::-webkit-scrollbar": {
        "display": "none"
    },
    ".chat-bubble-primary": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".chat-bubble-secondary": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".chat-bubble-accent": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".chat-bubble-info": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".chat-bubble-success": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".chat-bubble-warning": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".chat-bubble-error": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".checkbox:focus-visible": {
        "outline": "2px solid hsl(var(--bc))",
        "outlineOffset": "2px"
    },
    ".checkbox:checked,\n  .checkbox[checked=\"true\"],\n  .checkbox[aria-checked=\"true\"]": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "backgroundRepeat": "no-repeat",
        "animation": "checkmark var(--animation-input, 0.2s) ease-in-out",
        "backgroundImage": "linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%)"
    },
    ".checkbox:indeterminate": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "backgroundRepeat": "no-repeat",
        "animation": "checkmark var(--animation-input, 0.2s) ease-in-out",
        "backgroundImage": "linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(0deg, hsl(var(--chkbg)) 43%, hsl(var(--chkfg)) 43%, hsl(var(--chkfg)) 57%, hsl(var(--chkbg)) 57%)"
    },
    ".checkbox-primary": {
        "-Chkbg": "var(--p)",
        "-Chkfg": "var(--pc)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".checkbox-primary:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".checkbox-primary:focus-visible": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".checkbox-primary:checked,\n    .checkbox-primary[checked=\"true\"],\n    .checkbox-primary[aria-checked=\"true\"]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".checkbox-secondary": {
        "-Chkbg": "var(--s)",
        "-Chkfg": "var(--sc)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".checkbox-secondary:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".checkbox-secondary:focus-visible": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".checkbox-secondary:checked,\n    .checkbox-secondary[checked=\"true\"],\n    .checkbox-secondary[aria-checked=\"true\"]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".checkbox-accent": {
        "-Chkbg": "var(--a)",
        "-Chkfg": "var(--ac)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".checkbox-accent:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".checkbox-accent:focus-visible": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".checkbox-accent:checked,\n    .checkbox-accent[checked=\"true\"],\n    .checkbox-accent[aria-checked=\"true\"]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".checkbox-success": {
        "-Chkbg": "var(--su)",
        "-Chkfg": "var(--suc)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".checkbox-success:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".checkbox-success:focus-visible": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".checkbox-success:checked,\n    .checkbox-success[checked=\"true\"],\n    .checkbox-success[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".checkbox-warning": {
        "-Chkbg": "var(--wa)",
        "-Chkfg": "var(--wac)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".checkbox-warning:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".checkbox-warning:focus-visible": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".checkbox-warning:checked,\n    .checkbox-warning[checked=\"true\"],\n    .checkbox-warning[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".checkbox-info": {
        "-Chkbg": "var(--in)",
        "-Chkfg": "var(--inc)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".checkbox-info:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".checkbox-info:focus-visible": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".checkbox-info:checked,\n    .checkbox-info[checked=\"true\"],\n    .checkbox-info[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".checkbox-error": {
        "-Chkbg": "var(--er)",
        "-Chkfg": "var(--erc)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".checkbox-error:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".checkbox-error:focus-visible": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".checkbox-error:checked,\n    .checkbox-error[checked=\"true\"],\n    .checkbox-error[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".checkbox:disabled": {
        "cursor": "not-allowed",
        "borderColor": "transparent",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "opacity": "0.2"
    },
    "@keyframes checkmark": {
        "0%": {
            "backgroundPositionY": "5px"
        },
        "50%": {
            "backgroundPositionY": "-2px"
        },
        "100%": {
            "backgroundPositionY": "0"
        }
    },
    ".checkbox-mark": {
        "display": "none"
    },
    "[dir=\"rtl\"] .checkbox:checked,\n    [dir=\"rtl\"] .checkbox[checked=\"true\"],\n    [dir=\"rtl\"] .checkbox[aria-checked=\"true\"]": {
        "backgroundImage": "linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%)"
    },
    ".collapse:focus-visible": {
        "outline": "2px solid hsl(var(--nf))",
        "outlineOffset": "2px"
    },
    ".collapse-arrow .collapse-title:after": {
        "position": "absolute",
        "display": "block",
        "height": "0.5rem",
        "width": "0.5rem",
        "-TwTranslateY": "-100%",
        "-TwRotate": "45deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "transitionProperty": "all",
        "transitionDuration": [
            "150ms",
            "0.2s"
        ],
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "top": "50%",
        "right": "1.4rem",
        "content": "\"\"",
        "transformOrigin": "75% 75%",
        "boxShadow": "2px 2px",
        "pointerEvents": "none"
    },
    ".collapse-plus .collapse-title:after": {
        "position": "absolute",
        "display": "block",
        "height": "0.5rem",
        "width": "0.5rem",
        "transitionProperty": "all",
        "transitionDuration": "300ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "top": "0.9rem",
        "right": "1.4rem",
        "content": "\"+\"",
        "pointerEvents": "none"
    },
    ".collapse:not(.collapse-open):not(.collapse-close) input[type=\"checkbox\"],\n.collapse:not(.collapse-open):not(.collapse-close) .collapse-title": {
        "cursor": "pointer"
    },
    ".collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title": {
        "cursor": "unset"
    },
    ".collapse-title": {
        "position": "relative"
    },
    ":where(.collapse > input[type=\"checkbox\"])": {
        "zIndex": "1"
    },
    ".collapse-title,\n:where(.collapse > input[type=\"checkbox\"])": {
        "width": "100%",
        "padding": "1rem",
        "paddingRight": "3rem",
        "minHeight": "3.75rem",
        "transition": "background-color 0.2s ease-in-out"
    },
    ".collapse-open :where(.collapse-content),\n.collapse:focus:not(.collapse-close) :where(.collapse-content),\n.collapse:not(.collapse-close) :where(input[type=\"checkbox\"]:checked ~ .collapse-content)": {
        "paddingBottom": "1rem",
        "transition": "padding 0.2s ease-in-out, background-color 0.2s ease-in-out"
    },
    ".collapse-open.collapse-arrow .collapse-title:after,\n.collapse-arrow:focus:not(.collapse-close) .collapse-title:after,\n.collapse-arrow:not(.collapse-close) input[type=\"checkbox\"]:checked ~ .collapse-title:after": {
        "-TwTranslateY": "-50%",
        "-TwRotate": "225deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".collapse-open.collapse-plus .collapse-title:after,\n.collapse-plus:focus:not(.collapse-close) .collapse-title:after,\n.collapse-plus:not(.collapse-close) input[type=\"checkbox\"]:checked ~ .collapse-title:after": {
        "content": "\"−\""
    },
    ".divider:before": {
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.1"
    },
    ".divider:after": {
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.1"
    },
    ".divider:not(:empty)": {
        "gap": "1rem"
    },
    ".drawer.drawer-end > .drawer-toggle:checked ~ .drawer-content": {
        "-TwTranslateX": "-0.5rem",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".drawer-toggle:checked ~ .drawer-content": {
        "-TwTranslateX": "0.5rem",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button": {
        "outline": "2px solid hsl(var(--nf))",
        "outlineOffset": "2px"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-primary": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-secondary": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-accent": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-info": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-success": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-warning": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-error": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.glass": {
        "outline": "2px solid currentColor"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-ghost": {
        "outline": "2px solid currentColor"
    },
    ".drawer-toggle:focus-visible ~ .drawer-content .drawer-button.btn-link": {
        "outline": "2px solid currentColor"
    },
    ".dropdown.dropdown-open .dropdown-content,\n.dropdown.dropdown-hover:hover .dropdown-content,\n.dropdown:focus .dropdown-content,\n.dropdown:focus-within .dropdown-content": {
        "-TwScaleX": "1",
        "-TwScaleY": "1",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".file-input-bordered": {
        "-TwBorderOpacity": "0.2"
    },
    ".file-input:focus": {
        "outline": "2px solid hsla(var(--bc) / 0.2)",
        "outlineOffset": "2px"
    },
    ".file-input-ghost": {
        "-TwBgOpacity": "0.05"
    },
    ".file-input-ghost:focus": {
        "-TwBgOpacity": "1",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "boxShadow": "none"
    },
    ".file-input-ghost::file-selector-button": {
        "borderWidth": "1px",
        "borderColor": "transparent",
        "backgroundColor": "transparent",
        "color": "currentColor"
    },
    ".file-input-primary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".file-input-primary:focus": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".file-input-primary::file-selector-button": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".file-input-secondary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".file-input-secondary:focus": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".file-input-secondary::file-selector-button": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".file-input-accent": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".file-input-accent:focus": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".file-input-accent::file-selector-button": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".file-input-info": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".file-input-info:focus": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".file-input-info::file-selector-button": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".file-input-success": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".file-input-success:focus": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".file-input-success::file-selector-button": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".file-input-warning": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".file-input-warning:focus": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".file-input-warning::file-selector-button": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".file-input-error": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".file-input-error:focus": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".file-input-error::file-selector-button": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".file-input-disabled,\n  .file-input[disabled]": {
        "cursor": "not-allowed",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".file-input-disabled::placeholder,\n  .file-input[disabled]::placeholder": {
        "color": "hsl(var(--bc) / var(--tw-placeholder-opacity))",
        "-TwPlaceholderOpacity": "0.2"
    },
    ".file-input-disabled::file-selector-button, .file-input[disabled]::file-selector-button": {
        "-TwBorderOpacity": "0",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.2",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".footer-title": {
        "marginBottom": "0.5rem",
        "fontWeight": "700",
        "textTransform": "uppercase",
        "opacity": "0.5"
    },
    ".label-text": {
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".label-text-alt": {
        "fontSize": "0.75rem",
        "lineHeight": "1rem",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".label a:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".input[list]::-webkit-calendar-picker-indicator": {
        "lineHeight": "1em"
    },
    ".input-bordered": {
        "-TwBorderOpacity": "0.2"
    },
    ".input:focus": {
        "outline": "2px solid hsla(var(--bc) / 0.2)",
        "outlineOffset": "2px"
    },
    ".input-ghost": {
        "-TwBgOpacity": "0.05"
    },
    ".input-ghost:focus": {
        "-TwBgOpacity": "1",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "boxShadow": "none"
    },
    ".input-primary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".input-primary:focus": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".input-secondary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".input-secondary:focus": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".input-accent": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".input-accent:focus": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".input-info": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".input-info:focus": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".input-success": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".input-success:focus": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".input-warning": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".input-warning:focus": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".input-error": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".input-error:focus": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".input-disabled,\n  .input[disabled]": {
        "cursor": "not-allowed",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".input-disabled::placeholder,\n  .input[disabled]::placeholder": {
        "color": "hsl(var(--bc) / var(--tw-placeholder-opacity))",
        "-TwPlaceholderOpacity": "0.2"
    },
    ".link-primary": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--p) / var(--tw-text-opacity))"
    },
    ".link-primary:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pf, var(--p)) / var(--tw-text-opacity))"
    },
    ".link-secondary": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--s) / var(--tw-text-opacity))"
    },
    ".link-secondary:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sf, var(--s)) / var(--tw-text-opacity))"
    },
    ".link-accent": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--a) / var(--tw-text-opacity))"
    },
    ".link-accent:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--af, var(--a)) / var(--tw-text-opacity))"
    },
    ".link-neutral": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--n) / var(--tw-text-opacity))"
    },
    ".link-neutral:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nf, var(--n)) / var(--tw-text-opacity))"
    },
    ".link-success": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--su) / var(--tw-text-opacity))"
    },
    ".link-success:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--su) / var(--tw-text-opacity))"
    },
    ".link-info": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--in) / var(--tw-text-opacity))"
    },
    ".link-info:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--in) / var(--tw-text-opacity))"
    },
    ".link-warning": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wa) / var(--tw-text-opacity))"
    },
    ".link-warning:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wa) / var(--tw-text-opacity))"
    },
    ".link-error": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--er) / var(--tw-text-opacity))"
    },
    ".link-error:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--er) / var(--tw-text-opacity))"
    },
    ".link:focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".link:focus-visible": {
        "outline": "2px solid currentColor",
        "outlineOffset": "2px"
    },
    ".mask-squircle": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e\")"
    },
    ".mask-decagon": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 58.779 19.098 36.327 50v61.804l-36.327 50L96 200l-58.779-19.098-36.327-50V69.098l36.327-50z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 58.779 19.098 36.327 50v61.804l-36.327 50L96 200l-58.779-19.098-36.327-50V69.098l36.327-50z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-diamond": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m100 0 100 100-100 100L0 100z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m100 0 100 100-100 100L0 100z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-heart": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")"
    },
    ".mask-hexagon": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")"
    },
    ".mask-hexagon-2": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e\")"
    },
    ".mask-circle": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-parallelogram": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M46.154 0H200l-46.154 153.846H0z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M46.154 0H200l-46.154 153.846H0z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-parallelogram-2": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.846 0H0l46.154 153.846H200z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.846 0H0l46.154 153.846H200z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-parallelogram-3": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.077 47.077v153.846l153.846-46.154V.923z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.077 47.077v153.846l153.846-46.154V.923z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-parallelogram-4": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.923 47.077v153.846L.077 154.77V.923z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.923 47.077v153.846L.077 154.77V.923z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-pentagon": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='181' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 95.106 69.098-36.327 111.804H37.22L.894 69.098z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='181' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 95.106 69.098-36.327 111.804H37.22L.894 69.098z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-square": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 0h200v200H0z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 0h200v200H0z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-star": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 137.263-58.779 42.024 22.163-68.389L.894 68.481l72.476-.243L96 0l22.63 68.238 72.476.243-58.49 42.417 22.163 68.389z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 137.263-58.779 42.024 22.163-68.389L.894 68.481l72.476-.243L96 0l22.63 68.238 72.476.243-58.49 42.417 22.163 68.389z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-star-2": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-triangle": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='174' height='149' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 148.476-86.603.185L43.86 74.423 87 0l43.14 74.423 43.463 74.238z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='174' height='149' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 148.476-86.603.185L43.86 74.423 87 0l43.14 74.423 43.463 74.238z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-triangle-2": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='174' height='150' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 .738 86.603-.184-43.463 74.238L87 149.214 43.86 74.792.397.554z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='174' height='150' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 .738 86.603-.184-43.463 74.238L87 149.214 43.86 74.792.397.554z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-triangle-3": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m149.369 87.107.185 86.603-74.239-43.463L.893 87.107l74.422-43.14L149.554.505z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m149.369 87.107.185 86.603-74.239-43.463L.893 87.107l74.422-43.14L149.554.505z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".mask-triangle-4": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.631 87.107.446.505l74.239 43.462 74.422 43.14-74.422 43.14L.446 173.71z' fill-rule='evenodd'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.631 87.107.446.505l74.239 43.462 74.422 43.14-74.422 43.14L.446 173.71z' fill-rule='evenodd'/%3e%3c/svg%3e\")"
    },
    ".menu.horizontal > li.bordered > a,\n        .menu.horizontal > li.bordered > button,\n        .menu.horizontal > li.bordered > span": {
        "borderLeftWidth": "0px",
        "borderBottomWidth": "4px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".menu[class*=\" px-\"]:not(.menu[class*=\" px-0\"]) li > *,\n  .menu[class^=\"px-\"]:not(.menu[class^=\"px-0\"]) li > *,\n  .menu[class*=\" p-\"]:not(.menu[class*=\" p-0\"]) li > *,\n  .menu[class^=\"p-\"]:not(.menu[class^=\"p-0\"]) li > *": {
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".menu :where(li.bordered > *)": {
        "borderLeftWidth": "4px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".menu :where(li) > :where(*:not(ul))": {
        "gap": "0.75rem",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "paddingTop": "0.75rem",
        "paddingBottom": "0.75rem",
        "color": "currentColor"
    },
    ".menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):focus),\n  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):hover)": {
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.1"
    },
    ".menu :where(li:not(.menu-title):not(:empty)) > :where(:not(ul).active),\n  .menu :where(li:not(.menu-title):not(:empty)) > :where(*:not(ul):active)": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".menu :where(li:empty)": {
        "marginLeft": "1rem",
        "marginRight": "1rem",
        "marginTop": "0.5rem",
        "marginBottom": "0.5rem",
        "height": "1px",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.1"
    },
    ".menu li.disabled > *": {
        "userSelect": "none",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".menu li.disabled > *:hover": {
        "backgroundColor": "transparent"
    },
    ".menu li.hover-bordered a": {
        "borderLeftWidth": "4px",
        "borderColor": "transparent"
    },
    ".menu li.hover-bordered a:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".menu.compact li > a,\n      .menu.compact li > span": {
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".menu .menu-title > *": {
        "paddingTop": "0.25rem",
        "paddingBottom": "0.25rem",
        "fontSize": "0.75rem",
        "lineHeight": "1rem",
        "fontWeight": "700",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "-TwTextOpacity": "0.4"
    },
    ".menu :where(li:not(.disabled)) > :where(*:not(ul))": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".menu > :where(li:first-child)": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "unset"
    },
    ".menu > :where(li:first-child) > :where(:not(ul))": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "unset"
    },
    ".menu > :where(li:last-child)": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu > :where(li:last-child) > :where(:not(ul))": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu > :where(li) > :where(ul) :where(li)": {
        "width": "100%",
        "whiteSpace": "nowrap"
    },
    ".menu > :where(li) > :where(ul) :where(li) :where(ul)": {
        "paddingLeft": "1rem"
    },
    ".menu > :where(li) > :where(ul) :where(li) > :where(:not(ul))": {
        "width": "100%",
        "whiteSpace": "nowrap"
    },
    ".menu > :where(li) > :where(ul) > :where(li:first-child)": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "unset"
    },
    ".menu > :where(li) > :where(ul) > :where(li:first-child) > :where(:not(ul))": {
        "borderTopLeftRadius": "inherit",
        "borderTopRightRadius": "inherit",
        "borderBottomRightRadius": "unset",
        "borderBottomLeftRadius": "unset"
    },
    ".menu > :where(li) > :where(ul) > :where(li:last-child)": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "inherit"
    },
    ".menu > :where(li) > :where(ul) > :where(li:last-child) > :where(:not(ul))": {
        "borderTopLeftRadius": "unset",
        "borderTopRightRadius": "unset",
        "borderBottomRightRadius": "inherit",
        "borderBottomLeftRadius": "inherit"
    },
    ".mockup-code:before": {
        "content": "\"\"",
        "marginBottom": "1rem",
        "display": "block",
        "height": "0.75rem",
        "width": "0.75rem",
        "borderRadius": "9999px",
        "opacity": "0.3",
        "boxShadow": "1.4em 0, 2.8em 0, 4.2em 0"
    },
    ".mockup-code pre": {
        "paddingRight": "1.25rem"
    },
    ".mockup-code pre:before": {
        "content": "\"\"",
        "marginRight": "2ch"
    },
    ".mockup-window:before": {
        "content": "\"\"",
        "marginBottom": "1rem",
        "display": "block",
        "height": "0.75rem",
        "width": "0.75rem",
        "borderRadius": "9999px",
        "opacity": "0.3",
        "boxShadow": "1.4em 0, 2.8em 0, 4.2em 0"
    },
    ".mockup-phone": {
        "display": "inline-block",
        "border": "4px solid #444",
        "borderRadius": "50px",
        "backgroundColor": "#000",
        "padding": "10px",
        "margin": "0 auto",
        "overflow": "hidden"
    },
    ".mockup-phone .camera": {
        "position": "relative",
        "top": "0px",
        "left": "0px",
        "background": "#000",
        "height": "25px",
        "width": "150px",
        "margin": "0 auto",
        "borderBottomLeftRadius": "17px",
        "borderBottomRightRadius": "17px",
        "zIndex": "11"
    },
    ".mockup-phone .camera:before": {
        "content": "\"\"",
        "position": "absolute",
        "top": "35%",
        "left": "50%",
        "width": "50px",
        "height": "4px",
        "borderRadius": "5px",
        "backgroundColor": "#0c0b0e",
        "transform": "translate(-50%, -50%)"
    },
    ".mockup-phone .camera:after": {
        "content": "\"\"",
        "position": "absolute",
        "top": "20%",
        "left": "70%",
        "width": "8px",
        "height": "8px",
        "borderRadius": "5px",
        "backgroundColor": "#0f0b25"
    },
    ".mockup-phone .display": {
        "overflow": "hidden",
        "borderRadius": "40px",
        "marginTop": "-25px"
    },
    ".modal-open .modal-box,\n.modal-toggle:checked + .modal .modal-box,\n.modal:target .modal-box": {
        "-TwTranslateY": "0px",
        "-TwScaleX": "1",
        "-TwScaleY": "1",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".modal-action > :not([hidden]) ~ :not([hidden])": {
        "-TwSpaceXReverse": "0",
        "marginRight": "calc(0.5rem * var(--tw-space-x-reverse))",
        "marginLeft": "calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"
    },
    ".progress::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))"
    },
    ".progress-primary::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))"
    },
    ".progress-secondary::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))"
    },
    ".progress-accent::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))"
    },
    ".progress-info::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))"
    },
    ".progress-success::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))"
    },
    ".progress-warning::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))"
    },
    ".progress-error::-moz-progress-bar": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))"
    },
    ".progress:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "content": "\"\"",
        "position": "absolute",
        "top": "0px",
        "bottom": "0px",
        "left": "-40%",
        "width": "33.333333%",
        "borderRadius": "var(--rounded-box, 1rem)",
        "animation": "progress-loading 5s infinite ease-in-out"
    },
    ".progress-primary:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))"
    },
    ".progress-secondary:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))"
    },
    ".progress-accent:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))"
    },
    ".progress-info:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))"
    },
    ".progress-success:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))"
    },
    ".progress-warning:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))"
    },
    ".progress-error:indeterminate::after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))"
    },
    ".progress::-webkit-progress-bar": {
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwBgOpacity": "0.2",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".progress::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))",
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".progress-primary::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))"
    },
    ".progress-secondary::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))"
    },
    ".progress-accent::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))"
    },
    ".progress-info::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))"
    },
    ".progress-success::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))"
    },
    ".progress-warning::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))"
    },
    ".progress-error::-webkit-progress-value": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))"
    },
    "@keyframes progress-loading": {
        "50%": {
            "left": "107%"
        }
    },
    ".radio:focus-visible": {
        "outline": "2px solid hsl(var(--bc))",
        "outlineOffset": "2px"
    },
    ".radio:checked,\n  .radio[aria-checked=true]": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "animation": "radiomark var(--animation-input, 0.2s) ease-in-out",
        "boxShadow": "0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset"
    },
    ".radio-primary": {
        "-Chkbg": "var(--p)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".radio-primary:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".radio-primary:focus-visible": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".radio-primary:checked,\n    .radio-primary[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".radio-secondary": {
        "-Chkbg": "var(--s)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".radio-secondary:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".radio-secondary:focus-visible": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".radio-secondary:checked,\n    .radio-secondary[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".radio-accent": {
        "-Chkbg": "var(--a)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".radio-accent:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".radio-accent:focus-visible": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".radio-accent:checked,\n    .radio-accent[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".radio-success": {
        "-Chkbg": "var(--su)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".radio-success:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".radio-success:focus-visible": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".radio-success:checked,\n    .radio-success[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".radio-warning": {
        "-Chkbg": "var(--wa)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".radio-warning:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".radio-warning:focus-visible": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".radio-warning:checked,\n    .radio-warning[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".radio-info": {
        "-Chkbg": "var(--in)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".radio-info:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".radio-info:focus-visible": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".radio-info:checked,\n    .radio-info[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".radio-error": {
        "-Chkbg": "var(--er)",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".radio-error:hover": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".radio-error:focus-visible": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".radio-error:checked,\n    .radio-error[aria-checked=true]": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".radio:disabled": {
        "cursor": "not-allowed",
        "opacity": "0.2"
    },
    "@keyframes radiomark": {
        "0%": {
            "boxShadow": "0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset"
        },
        "50%": {
            "boxShadow": "0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset"
        },
        "100%": {
            "boxShadow": "0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset"
        }
    },
    ".radio-mark": {
        "display": "none"
    },
    ".range:focus-visible::-webkit-slider-thumb": {
        "-FocusShadow": "0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset"
    },
    ".range:focus-visible::-moz-range-thumb": {
        "-FocusShadow": "0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset"
    },
    ".range::-webkit-slider-runnable-track": {
        "height": "0.5rem",
        "width": "100%",
        "borderRadius": "var(--rounded-box, 1rem)",
        "backgroundColor": "hsla(var(--bc) / 0.1)"
    },
    ".range::-moz-range-track": {
        "height": "0.5rem",
        "width": "100%",
        "borderRadius": "var(--rounded-box, 1rem)",
        "backgroundColor": "hsla(var(--bc) / 0.1)"
    },
    ".range::-webkit-slider-thumb": {
        "backgroundColor": "hsl(var(--b1))",
        "position": "relative",
        "height": "1.5rem",
        "width": "1.5rem",
        "borderStyle": "none",
        "borderRadius": "var(--rounded-box, 1rem)",
        "appearance": "none",
        "WebkitAppearance": "none",
        "top": "50%",
        "color": "hsl(var(--range-shdw))",
        "transform": "translateY(-50%)",
        "-FillerSize": "100rem",
        "-FillerOffset": "0.6rem",
        "boxShadow": "0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)"
    },
    ".range::-moz-range-thumb": {
        "backgroundColor": "hsl(var(--b1))",
        "position": "relative",
        "height": "1.5rem",
        "width": "1.5rem",
        "borderStyle": "none",
        "borderRadius": "var(--rounded-box, 1rem)",
        "top": "50%",
        "color": "hsl(var(--range-shdw))",
        "-FillerSize": "100rem",
        "-FillerOffset": "0.5rem",
        "boxShadow": "0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)"
    },
    ".range-primary": {
        "-RangeShdw": "var(--p)"
    },
    ".range-secondary": {
        "-RangeShdw": "var(--s)"
    },
    ".range-accent": {
        "-RangeShdw": "var(--a)"
    },
    ".range-success": {
        "-RangeShdw": "var(--su)"
    },
    ".range-warning": {
        "-RangeShdw": "var(--wa)"
    },
    ".range-info": {
        "-RangeShdw": "var(--in)"
    },
    ".range-error": {
        "-RangeShdw": "var(--er)"
    },
    ".rating input": {
        "appearance": "none",
        "WebkitAppearance": "none"
    },
    ".rating .rating-hidden": {
        "width": "0.5rem",
        "backgroundColor": "transparent"
    },
    ".rating input:checked ~ input,\n  .rating input[aria-checked=true] ~ input": {
        "-TwBgOpacity": "0.2"
    },
    ".rating input:focus-visible": {
        "transitionProperty": "transform",
        "transitionDuration": "300ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transform": "translateY(-0.125em)"
    },
    ".rating input:active:focus": {
        "animation": "none",
        "transform": "translateY(-0.125em)"
    },
    ".rating-half :where(input:not(.rating-hidden))": {
        "width": "0.75rem"
    },
    "@keyframes rating-pop": {
        "0%": {
            "transform": "translateY(-0.125em)"
        },
        "40%": {
            "transform": "translateY(-0.125em)"
        },
        "100%": {
            "transform": "translateY(0)"
        }
    },
    ".select-bordered": {
        "-TwBorderOpacity": "0.2"
    },
    ".select:focus": {
        "outline": "2px solid hsla(var(--bc) / 0.2)",
        "outlineOffset": "2px"
    },
    ".select-ghost": {
        "-TwBgOpacity": "0.05"
    },
    ".select-ghost:focus": {
        "-TwBgOpacity": "1",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".select-primary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".select-primary:focus": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".select-secondary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".select-secondary:focus": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".select-accent": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".select-accent:focus": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".select-info": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".select-info:focus": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".select-success": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".select-success:focus": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".select-warning": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".select-warning:focus": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".select-error": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".select-error:focus": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".select-disabled,\n  .select[disabled]": {
        "cursor": "not-allowed",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".select-disabled::placeholder,\n  .select[disabled]::placeholder": {
        "color": "hsl(var(--bc) / var(--tw-placeholder-opacity))",
        "-TwPlaceholderOpacity": "0.2"
    },
    ".select-multiple,\n  .select[multiple],\n  .select[size].select:not([size=\"1\"])": {
        "backgroundImage": "none",
        "paddingRight": "1rem"
    },
    "[dir=\"rtl\"] .select": {
        "backgroundPosition": "calc(0% + 12px) calc(1px + 50%), calc(0% + 16px) calc(1px + 50%)"
    },
    ":where(.stats) > :not([hidden]) ~ :not([hidden])": {
        "-TwDivideXReverse": "0",
        "borderRightWidth": "calc(1px * var(--tw-divide-x-reverse))",
        "borderLeftWidth": "calc(1px * calc(1 - var(--tw-divide-x-reverse)))",
        "-TwDivideYReverse": "0",
        "borderTopWidth": "calc(0px * calc(1 - var(--tw-divide-y-reverse)))",
        "borderBottomWidth": "calc(0px * var(--tw-divide-y-reverse))"
    },
    ".steps .step:before": {
        "top": "0px",
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "height": "0.5rem",
        "width": "100%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "content": "\"\"",
        "marginLeft": "-100%"
    },
    ".steps .step:after": {
        "content": "counter(step)",
        "counterIncrement": "step",
        "zIndex": "1",
        "position": "relative",
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "display": "grid",
        "height": "2rem",
        "width": "2rem",
        "placeItems": "center",
        "placeSelf": "center",
        "borderRadius": "9999px",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))"
    },
    ".steps .step:first-child:before": {
        "content": "none"
    },
    ".steps .step[data-content]:after": {
        "content": "attr(data-content)"
    },
    ".steps .step-neutral + .step-neutral:before,\n  .steps .step-neutral:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--n) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--nc) / var(--tw-text-opacity))"
    },
    ".steps .step-primary + .step-primary:before,\n  .steps .step-primary:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".steps .step-secondary + .step-secondary:before,\n  .steps .step-secondary:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".steps .step-accent + .step-accent:before,\n  .steps .step-accent:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".steps .step-info + .step-info:before": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))"
    },
    ".steps .step-info:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".steps .step-success + .step-success:before": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))"
    },
    ".steps .step-success:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".steps .step-warning + .step-warning:before": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))"
    },
    ".steps .step-warning:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".steps .step-error + .step-error:before": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))"
    },
    ".steps .step-error:after": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".swap-rotate .swap-on,\n.swap-rotate .swap-indeterminate,\n.swap-rotate input:indeterminate ~ .swap-on": {
        "-TwRotate": "45deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".swap-rotate input:checked ~ .swap-off,\n.swap-rotate.swap-active .swap-off,\n.swap-rotate input:indeterminate ~ .swap-off": {
        "-TwRotate": "-45deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".swap-rotate input:checked ~ .swap-on,\n.swap-rotate.swap-active .swap-on,\n.swap-rotate input:indeterminate ~ .swap-indeterminate": {
        "-TwRotate": "0deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".swap-flip": {
        "transformStyle": "preserve-3d",
        "perspective": "16em"
    },
    ".swap-flip .swap-on,\n.swap-flip .swap-indeterminate,\n.swap-flip input:indeterminate ~ .swap-on": {
        "transform": "rotateY(180deg)",
        "backfaceVisibility": "hidden",
        "opacity": "1"
    },
    ".swap-flip input:checked ~ .swap-off,\n.swap-flip.swap-active .swap-off,\n.swap-flip input:indeterminate ~ .swap-off": {
        "transform": "rotateY(-180deg)",
        "backfaceVisibility": "hidden",
        "opacity": "1"
    },
    ".swap-flip input:checked ~ .swap-on,\n.swap-flip.swap-active .swap-on,\n.swap-flip input:indeterminate ~ .swap-indeterminate": {
        "transform": "rotateY(0deg)"
    },
    ".tab:hover": {
        "-TwTextOpacity": "1"
    },
    ".tab.tab-active": {
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "1",
        "-TwTextOpacity": "1"
    },
    ".tab:focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".tab:focus-visible": {
        "outline": "2px solid currentColor",
        "outlineOffset": "-3px"
    },
    ".tab:focus-visible.tab-lifted": {
        "borderBottomRightRadius": "var(--tab-radius, 0.5rem)",
        "borderBottomLeftRadius": "var(--tab-radius, 0.5rem)"
    },
    ".tab-bordered": {
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.2",
        "borderStyle": "solid",
        "borderBottomWidth": "calc(var(--tab-border, 1px) + 1px)"
    },
    ".tab-lifted": {
        "border": "var(--tab-border, 1px) solid transparent",
        "borderWidth": "0 0 var(--tab-border, 1px) 0",
        "borderTopLeftRadius": "var(--tab-radius, 0.5rem)",
        "borderTopRightRadius": "var(--tab-radius, 0.5rem)",
        "borderBottomColor": "var(--tab-border-color)",
        "paddingLeft": "var(--tab-padding, 1rem)",
        "paddingRight": "var(--tab-padding, 1rem)",
        "paddingTop": "var(--tab-border, 1px)"
    },
    ".tab-lifted.tab-active": {
        "backgroundColor": "var(--tab-bg)",
        "borderWidth": "var(--tab-border, 1px) var(--tab-border, 1px) 0 var(--tab-border, 1px)",
        "borderLeftColor": "var(--tab-border-color)",
        "borderRightColor": "var(--tab-border-color)",
        "borderTopColor": "var(--tab-border-color)",
        "paddingLeft": "calc(var(--tab-padding, 1rem) - var(--tab-border, 1px))",
        "paddingRight": "calc(var(--tab-padding, 1rem) - var(--tab-border, 1px))",
        "paddingBottom": "var(--tab-border, 1px)",
        "paddingTop": "0"
    },
    ".tab-lifted.tab-active:before,\n    .tab-lifted.tab-active:after": {
        "zIndex": "1",
        "content": "\"\"",
        "display": "block",
        "position": "absolute",
        "width": "var(--tab-radius, 0.5rem)",
        "height": "var(--tab-radius, 0.5rem)",
        "bottom": "0",
        "-TabGrad": "calc(68% - var(--tab-border, 1px))",
        "-TabCornerBg": "radial-gradient(circle at var(--circle-pos), transparent var(--tab-grad), var(--tab-border-color) calc(var(--tab-grad) + 0.3px), var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)), var(--tab-bg) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px))"
    },
    ".tab-lifted.tab-active:before": {
        "left": "calc(var(--tab-radius, 0.5rem) * -1)",
        "-CirclePos": "top left",
        "backgroundImage": "var(--tab-corner-bg)"
    },
    "[dir=\"rtl\"] .tab-lifted.tab-active:before": {
        "-CirclePos": "top right"
    },
    ".tab-lifted.tab-active:after": {
        "right": "calc(var(--tab-radius, 0.5rem) * -1)",
        "-CirclePos": "top right",
        "backgroundImage": "var(--tab-corner-bg)"
    },
    "[dir=\"rtl\"] .tab-lifted.tab-active:after": {
        "-CirclePos": "top left"
    },
    ".tab-lifted.tab-active:first-child:before": {
        "background": "none"
    },
    ".tab-lifted.tab-active:last-child:after": {
        "background": "none"
    },
    ".tab-lifted.tab-active + .tab-lifted.tab-active:before": {
        "background": "none"
    },
    ".tabs-boxed": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "padding": "0.25rem",
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".tabs-boxed .tab-active": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))",
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".tabs-boxed .tab-active:hover": {
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".table :where(th, td)": {
        "whiteSpace": "nowrap",
        "padding": "1rem",
        "verticalAlign": "middle"
    },
    ".table tr.active th,\n    .table tr.active td,\n    .table tr.active:nth-child(even) th,\n    .table tr.active:nth-child(even) td": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))"
    },
    ".table tr.hover:hover th,\n    .table tr.hover:hover td,\n    .table tr.hover:nth-child(even):hover th,\n    .table tr.hover:nth-child(even):hover td": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))"
    },
    ".table:where(:not(.table-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td))": {
        "borderBottomWidth": "1px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))"
    },
    ".table :where(thead, tfoot) :where(th, td)": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "fontSize": "0.75rem",
        "lineHeight": "1rem",
        "fontWeight": "700",
        "textTransform": "uppercase"
    },
    ".table :where(tbody th, tbody td)": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b1) / var(--tw-bg-opacity))"
    },
    ".table-zebra tbody tr:nth-child(even) th,\n      .table-zebra tbody tr:nth-child(even) td": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))"
    },
    ":where(.table *:first-child) :where(*:first-child) :where(th, td):first-child": {
        "borderTopLeftRadius": "0.5rem"
    },
    ":where(.table *:first-child) :where(*:first-child) :where(th, td):last-child": {
        "borderTopRightRadius": "0.5rem"
    },
    ":where(.table *:last-child) :where(*:last-child) :where(th, td):first-child": {
        "borderBottomLeftRadius": "0.5rem"
    },
    ":where(.table *:last-child) :where(*:last-child) :where(th, td):last-child": {
        "borderBottomRightRadius": "0.5rem"
    },
    ".textarea-bordered": {
        "-TwBorderOpacity": "0.2"
    },
    ".textarea:focus": {
        "outline": "2px solid hsla(var(--bc) / 0.2)",
        "outlineOffset": "2px"
    },
    ".textarea-ghost": {
        "-TwBgOpacity": "0.05"
    },
    ".textarea-ghost:focus": {
        "-TwBgOpacity": "1",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--bc) / var(--tw-text-opacity))",
        "boxShadow": "none"
    },
    ".textarea-primary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".textarea-primary:focus": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".textarea-secondary": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))"
    },
    ".textarea-secondary:focus": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".textarea-accent": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))"
    },
    ".textarea-accent:focus": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".textarea-info": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))"
    },
    ".textarea-info:focus": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".textarea-success": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))"
    },
    ".textarea-success:focus": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".textarea-warning": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))"
    },
    ".textarea-warning:focus": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".textarea-error": {
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))"
    },
    ".textarea-error:focus": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".textarea-disabled,\n  .textarea[disabled]": {
        "cursor": "not-allowed",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "0.2"
    },
    ".textarea-disabled::placeholder,\n  .textarea[disabled]::placeholder": {
        "color": "hsl(var(--bc) / var(--tw-placeholder-opacity))",
        "-TwPlaceholderOpacity": "0.2"
    },
    ".toast>*": {
        "animation": "toast-pop 0.25s ease-out"
    },
    "@keyframes toast-pop": {
        "0%": {
            "transform": "scale(0.9)",
            "opacity": "0"
        },
        "100%": {
            "transform": "scale(1)",
            "opacity": "1"
        }
    },
    "[dir=\"rtl\"] .toggle": {
        "-Handleoffsetcalculator": "calc(var(--handleoffset) * 1)"
    },
    ".toggle:focus-visible": {
        "outline": "2px solid hsl(var(--bc))",
        "outlineOffset": "2px"
    },
    ".toggle:checked,\n  .toggle[checked=\"true\"],\n  .toggle[aria-checked=true]": {
        "-Handleoffsetcalculator": "var(--handleoffset)",
        "-TwBorderOpacity": "1",
        "-TwBgOpacity": "1"
    },
    "[dir=\"rtl\"] .toggle:checked, [dir=\"rtl\"] .toggle[checked=\"true\"], [dir=\"rtl\"] .toggle[aria-checked=true]": {
        "-Handleoffsetcalculator": "calc(var(--handleoffset) * -1)"
    },
    ".toggle:indeterminate": {
        "-TwBorderOpacity": "1",
        "-TwBgOpacity": "1",
        "boxShadow": "calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset, calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset"
    },
    "[dir=\"rtl\"] .toggle:indeterminate": {
        "boxShadow": "calc(var(--handleoffset) / 2) 0 0 2px var(--tglbg) inset, calc(var(--handleoffset) / -2) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset"
    },
    ".toggle-primary:focus-visible": {
        "outline": "2px solid hsl(var(--p))"
    },
    ".toggle-primary:checked,\n    .toggle-primary[checked=\"true\"],\n    .toggle-primary[aria-checked=true]": {
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--pc) / var(--tw-text-opacity))"
    },
    ".toggle-secondary:focus-visible": {
        "outline": "2px solid hsl(var(--s))"
    },
    ".toggle-secondary:checked,\n    .toggle-secondary[checked=\"true\"],\n    .toggle-secondary[aria-checked=true]": {
        "borderColor": "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--sc) / var(--tw-text-opacity))"
    },
    ".toggle-accent:focus-visible": {
        "outline": "2px solid hsl(var(--a))"
    },
    ".toggle-accent:checked,\n    .toggle-accent[checked=\"true\"],\n    .toggle-accent[aria-checked=true]": {
        "borderColor": "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--ac) / var(--tw-text-opacity))"
    },
    ".toggle-success:focus-visible": {
        "outline": "2px solid hsl(var(--su))"
    },
    ".toggle-success:checked,\n    .toggle-success[checked=\"true\"],\n    .toggle-success[aria-checked=true]": {
        "borderColor": "hsl(var(--su) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".toggle-warning:focus-visible": {
        "outline": "2px solid hsl(var(--wa))"
    },
    ".toggle-warning:checked,\n    .toggle-warning[checked=\"true\"],\n    .toggle-warning[aria-checked=true]": {
        "borderColor": "hsl(var(--wa) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))"
    },
    ".toggle-info:focus-visible": {
        "outline": "2px solid hsl(var(--in))"
    },
    ".toggle-info:checked,\n    .toggle-info[checked=\"true\"],\n    .toggle-info[aria-checked=true]": {
        "borderColor": "hsl(var(--in) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".toggle-error:focus-visible": {
        "outline": "2px solid hsl(var(--er))"
    },
    ".toggle-error:checked,\n    .toggle-error[checked=\"true\"],\n    .toggle-error[aria-checked=true]": {
        "borderColor": "hsl(var(--er) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.1",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        "color": "hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))"
    },
    ".toggle:disabled": {
        "cursor": "not-allowed",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "backgroundColor": "transparent",
        "opacity": "0.3",
        "-Togglehandleborder": "0 0 0 3px hsl(var(--bc)) inset, var(--handleoffsetcalculator) 0 0 3px hsl(var(--bc)) inset"
    },
    ".toggle-mark": {
        "display": "none"
    },
    ".tooltip:before,\n.tooltip:after": {
        "opacity": "0",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDelay": "100ms",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".tooltip:after": {
        "position": [
            "absolute",
            "absolute"
        ],
        "content": "\"\"",
        "borderStyle": "solid",
        "borderWidth": "var(--tooltip-tail, 0)",
        "width": "0",
        "height": "0",
        "display": "block"
    },
    ".tooltip.tooltip-open:before,\n.tooltip.tooltip-open:after,\n.tooltip:hover:before,\n.tooltip:hover:after": {
        "opacity": "1",
        "transitionDelay": "75ms"
    },
    ".tooltip:not([data-tip]):hover:before,\n.tooltip:not([data-tip]):hover:after": {
        "visibility": "hidden",
        "opacity": "0"
    },
    ".tooltip:after, .tooltip-top:after": {
        "transform": "translateX(-50%)",
        "borderColor": "var(--tooltip-color) transparent transparent transparent",
        "top": "auto",
        "left": "50%",
        "right": "auto",
        "bottom": "var(--tooltip-tail-offset)"
    },
    ".tooltip-bottom:after": {
        "transform": "translateX(-50%)",
        "borderColor": "transparent transparent var(--tooltip-color) transparent",
        "top": "var(--tooltip-tail-offset)",
        "left": "50%",
        "right": "auto",
        "bottom": "auto"
    },
    ".tooltip-left:after": {
        "transform": "translateY(-50%)",
        "borderColor": "transparent transparent transparent var(--tooltip-color)",
        "top": "50%",
        "left": "auto",
        "right": "calc(var(--tooltip-tail-offset) + 1px)",
        "bottom": "auto"
    },
    ".tooltip-right:after": {
        "transform": "translateY(-50%)",
        "borderColor": "transparent var(--tooltip-color) transparent transparent",
        "top": "50%",
        "left": "calc(var(--tooltip-tail-offset) + 1px)",
        "right": "auto",
        "bottom": "auto"
    },
    ".tooltip-primary": {
        "-TooltipColor": "hsl(var(--p))",
        "-TooltipTextColor": "hsl(var(--pc))"
    },
    ".tooltip-secondary": {
        "-TooltipColor": "hsl(var(--s))",
        "-TooltipTextColor": "hsl(var(--sc))"
    },
    ".tooltip-accent": {
        "-TooltipColor": "hsl(var(--a))",
        "-TooltipTextColor": "hsl(var(--ac))"
    },
    ".tooltip-info": {
        "-TooltipColor": "hsla(var(--in))",
        "-TooltipTextColor": "hsl(var(--inc))"
    },
    ".tooltip-success": {
        "-TooltipColor": "hsla(var(--su))",
        "-TooltipTextColor": "hsl(var(--suc))"
    },
    ".tooltip-warning": {
        "-TooltipColor": "hsla(var(--wa))",
        "-TooltipTextColor": "hsl(var(--wac))"
    },
    ".tooltip-error": {
        "-TooltipColor": "hsla(var(--er))",
        "-TooltipTextColor": "hsl(var(--erc))"
    },
    ":root .prose": {
        "-TwProseBody": "hsla(var(--bc)/.8)",
        "-TwProseHeadings": "hsl(var(--bc))",
        "-TwProseLead": "hsl(var(--bc))",
        "-TwProseLinks": "hsl(var(--bc))",
        "-TwProseBold": "hsl(var(--bc))",
        "-TwProseCounters": "hsl(var(--bc))",
        "-TwProseBullets": "hsla(var(--bc)/.5)",
        "-TwProseHr": "hsla(var(--bc)/.2)",
        "-TwProseQuotes": "hsl(var(--bc))",
        "-TwProseQuoteBorders": "hsla(var(--bc)/.2)",
        "-TwProseCaptions": "hsla(var(--bc)/.5)",
        "-TwProseCode": "hsl(var(--bc))",
        "-TwProsePreCode": "hsl(var(--nc))",
        "-TwProsePreBg": "hsl(var(--n))",
        "-TwProseThBorders": "hsla(var(--bc)/.5)",
        "-TwProseTdBorders": "hsla(var(--bc)/.2)"
    },
    ".prose :where(code):not(:where([class~=\"not-prose\"] *))": {
        "padding": "2px 8px",
        "borderRadius": "var(--rounded-badge)"
    },
    ".prose code:after, \n  .prose code:before": {
        "content": "none"
    },
    ".prose pre code": {
        "borderRadius": "0",
        "padding": "0"
    },
    ".prose :where(tbody tr, thead):not(:where([class~=\"not-prose\"] *))": {
        "borderBottomColor": "hsl(var(--bc) / 20%)"
    }
};

}.call(this) }),
}]);


//# sourceMappingURL=a8858_daisyui_dist_styled.js.map