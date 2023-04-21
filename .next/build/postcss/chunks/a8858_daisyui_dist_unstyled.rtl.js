(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/a8858_daisyui_dist_unstyled.rtl.js", {

"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/unstyled.rtl.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    ".alert": {
        "display": "flex",
        "width": "100%",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "space-between",
        "gap": "1rem"
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
        "paddingRight": "0.563rem",
        "paddingLeft": "0.563rem"
    },
    ".btm-nav": {
        "position": "fixed",
        "bottom": "0px",
        "right": "0px",
        "left": "0px",
        "display": "flex",
        "width": "100%",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "space-around",
        "paddingBottom": "env(safe-area-inset-bottom)"
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
        "gap": "0.25rem"
    },
    ".breadcrumbs": {
        "maxWidth": "100%",
        "overflowX": "auto"
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
        "borderColor": "transparent",
        "textAlign": "center",
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
        "borderRadius": "var(--rounded-btn, 0.5rem)",
        "height": "3rem",
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "1em"
        ],
        "minHeight": "3rem"
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
        "marginLeft": "0.5rem",
        "height": "1rem",
        "width": "1rem",
        "borderRadius": "9999px",
        "borderWidth": "2px",
        "animation": "spin 2s linear infinite",
        "content": "\"\"",
        "borderTopColor": "transparent",
        "borderRightColor": "transparent",
        "borderBottomColor": "currentColor",
        "borderLeftColor": "currentColor"
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
            "transform": "rotate(-360deg)"
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
        "flexDirection": "column"
    },
    ".card:focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
    },
    ".card-body": {
        "display": "flex",
        "flex": "1 1 auto",
        "flexDirection": "column"
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
        "content": "\"\""
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
        "position": "relative"
    },
    ".carousel": {
        "display": "flex",
        "overflowX": "scroll",
        "scrollSnapType": "x mandatory",
        "scrollBehavior": "smooth"
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
        "paddingTop": "0.5rem",
        "paddingBottom": "0.5rem",
        "maxWidth": "90%"
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
        "gridColumnStart": "2"
    },
    ".chat-start .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")"
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
        "gridColumnStart": "1"
    },
    ".chat-end .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")"
    },
    "[dir=\"rtl\"] .chat-end .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")"
    },
    ".checkbox": {
        "flexShrink": "0"
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
        "maxHeight": "0px"
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
        "top": "calc(var(--value) * -1em)"
    },
    ".divider": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "alignSelf": "stretch"
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
        "direction": "ltr"
    },
    ".drawer.drawer-end > *": {
        "direction": "rtl"
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
        "overflowY": "auto"
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
        "opacity": "0"
    },
    ".drawer-toggle ~ .drawer-side > .drawer-overlay + *": {
        "zIndex": "10",
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "-TwTranslateX": "-100%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".drawer-toggle:checked ~ .drawer-side": {
        "isolation": "isolate",
        "overflowY": "auto",
        "overflowX": "hidden"
    },
    ".drawer-toggle:checked ~ .drawer-side > .drawer-overlay": {
        "visibility": "visible"
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
    "@media (min-width: 1024px)": {
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
            "direction": "rtl"
        },
        ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-content": {
            "height": "auto"
        },
        ".drawer-mobile.drawer-end > .drawer-toggle ~ .drawer-side": {
            "overflowY": "auto"
        }
    },
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
        "opacity": "0"
    },
    ".dropdown-end .dropdown-content": {
        "left": "0px"
    },
    ".dropdown-left .dropdown-content": {
        "top": "0px",
        "left": "100%",
        "bottom": "auto"
    },
    ".dropdown-right .dropdown-content": {
        "right": "100%",
        "top": "0px",
        "bottom": "auto"
    },
    ".dropdown-bottom .dropdown-content": {
        "bottom": "auto",
        "top": "100%"
    },
    ".dropdown-top .dropdown-content": {
        "bottom": "100%",
        "top": "auto"
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
        "paddingLeft": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ],
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".file-input::file-selector-button": {
        "marginLeft": "1rem",
        "display": "inline-flex",
        "height": "2.875rem",
        "minHeight": "2.875rem",
        "flexShrink": "0",
        "cursor": "pointer",
        "userSelect": "none",
        "flexWrap": "wrap",
        "alignItems": "center",
        "justifyContent": "center",
        "borderColor": "transparent",
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
        "textAlign": "center",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "1em"
        ],
        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        "transitionDuration": "200ms",
        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    ".footer": {
        "display": "grid",
        "width": "100%",
        "gridAutoFlow": "row",
        "placeItems": "start"
    },
    ".footer > *": {
        "display": "grid",
        "placeItems": "start"
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
        "justifyContent": "space-between"
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
        "width": "100%"
    },
    ".hero-content": {
        "zIndex": "0",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ]
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem"
    },
    ".input-group > :first-child": {
        "borderTopRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderTopLeftRadius": "0",
        "borderBottomRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomLeftRadius": "0"
    },
    ".input-group > :last-child": {
        "borderTopRightRadius": "0",
        "borderTopLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomRightRadius": "0",
        "borderBottomLeftRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".input-group-vertical": {
        "flexDirection": "column"
    },
    ".input-group-vertical :first-child": {
        "borderTopRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderTopLeftRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomRightRadius": "0",
        "borderBottomLeftRadius": "0"
    },
    ".input-group-vertical :last-child": {
        "borderTopRightRadius": "0",
        "borderTopLeftRadius": "0",
        "borderBottomRightRadius": "var(--rounded-btn, 0.5rem)",
        "borderBottomLeftRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".kbd": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center"
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
        "right": "100%"
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
        "overflowX": "auto"
    },
    ".mockup-code pre[data-prefix]:before": {
        "content": "attr(data-prefix)",
        "display": "inline-block",
        "textAlign": "left"
    },
    ".mockup-window": {
        "position": "relative",
        "overflow": "hidden",
        "overflowX": "auto"
    },
    ".mockup-window pre[data-prefix]:before": {
        "content": "attr(data-prefix)",
        "display": "inline-block",
        "textAlign": "left"
    },
    ".modal": {
        "pointerEvents": "none",
        "visibility": "hidden",
        "position": "fixed",
        "top": "0px",
        "left": "0px",
        "bottom": "0px",
        "right": "0px",
        "display": "flex",
        "justifyContent": "center",
        "opacity": "0",
        "zIndex": "999"
    },
    ":where(.modal)": {
        "alignItems": "center"
    },
    ".modal-box": {
        "maxHeight": "calc(100vh - 5em)"
    },
    ".modal-open,\n.modal:target,\n.modal-toggle:checked + .modal": {
        "pointerEvents": "auto",
        "visibility": "visible",
        "opacity": "1"
    },
    ".modal-action": {
        "display": "flex"
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
        "alignItems": "center"
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
        "overflow": "hidden"
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
        "boxSizing": "content-box"
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
        "left": "0px",
        "bottom": "0px",
        "right": "0px",
        "background": "radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0)",
        "WebkitMask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))",
        "mask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))"
    },
    ".radial-progress:after": {
        "inset": "calc(50% - var(--thickness) / 2)",
        "transform": "rotate(calc(-1*(var(--value) * 3.6deg - 90deg))) translate(calc(-1*(var(--size) / 2 - 50%)))"
    },
    ".radio": {
        "flexShrink": "0"
    },
    ".range": {
        "height": "1.5rem",
        "width": "100%",
        "cursor": "pointer"
    },
    ".range:focus": {
        "outline": "none"
    },
    ".rating": {
        "position": "relative",
        "display": "inline-flex"
    },
    ".rating :where(input)": {
        "cursor": "pointer"
    },
    ".select": {
        "display": "inline-flex",
        "flexShrink": "0",
        "cursor": "pointer",
        "userSelect": "none",
        "appearance": "none",
        "height": "3rem",
        "paddingRight": "1rem",
        "paddingLeft": "2.5rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ],
        "minHeight": "3rem"
    },
    ".select[multiple]": {
        "height": "auto"
    },
    ".stack": {
        "display": "inline-grid"
    },
    ".stack > *": {
        "gridColumnStart": "1",
        "gridRowStart": "1",
        "transform": "translateY(10%) scale(0.9)",
        "zIndex": "1"
    },
    ".stack > *:nth-child(2)": {
        "transform": "translateY(5%) scale(0.95)",
        "zIndex": "2"
    },
    ".stack > *:nth-child(1)": {
        "transform": "translateY(0) scale(1)",
        "zIndex": "3"
    },
    ".stats": {
        "display": "inline-grid"
    },
    ":where(.stats)": {
        "gridAutoFlow": "column"
    },
    ".stat": {
        "display": "inline-grid",
        "width": "100%",
        "gridTemplateColumns": "repeat(1, 1fr)"
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
        "whiteSpace": "nowrap"
    },
    ".stat-value": {
        "gridColumnStart": "1",
        "whiteSpace": "nowrap"
    },
    ".stat-desc": {
        "gridColumnStart": "1",
        "whiteSpace": "nowrap"
    },
    ".stat-actions": {
        "gridColumnStart": "1",
        "whiteSpace": "nowrap"
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
        "gridTemplateColumns": "repeat(1, minmax(0, 1fr))",
        "gridTemplateRows": "repeat(2, minmax(0, 1fr))",
        "placeItems": "center",
        "textAlign": "center"
    },
    ".swap": {
        "position": "relative",
        "display": "inline-grid",
        "userSelect": "none",
        "placeContent": "center"
    },
    ".swap > *": {
        "gridColumnStart": "1",
        "gridRowStart": "1"
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
        "-TabPadding": "1rem"
    },
    ".table": {
        "position": "relative"
    },
    ".table th:first-child": {
        "position": [
            "sticky",
            "-webkit-sticky"
        ],
        "right": "0px",
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ]
    },
    ".toast": {
        "position": "fixed",
        "display": "flex",
        "minWidth": "fit-content",
        "flexDirection": "column"
    },
    ".toggle": {
        "flexShrink": "0"
    },
    ".tooltip": {
        "position": "relative",
        "display": "inline-block",
        "-TooltipOffset": "calc(100% + 1px + var(--tooltip-tail, 0px))"
    },
    ".tooltip:before": {
        "position": "absolute",
        "pointerEvents": "none",
        "zIndex": "1",
        "content": "var(--tw-content)",
        "-TwContent": "attr(data-tip)"
    },
    ".tooltip:before, .tooltip-top:before": {
        "transform": "translateX(50%)",
        "top": "auto",
        "right": "50%",
        "left": "auto",
        "bottom": "var(--tooltip-offset)"
    },
    ".tooltip-bottom:before": {
        "transform": "translateX(50%)",
        "top": "var(--tooltip-offset)",
        "right": "50%",
        "left": "auto",
        "bottom": "auto"
    },
    ".tooltip-left:before": {
        "transform": "translateY(-50%)",
        "top": "50%",
        "right": "auto",
        "left": "var(--tooltip-offset)",
        "bottom": "auto"
    },
    ".tooltip-right:before": {
        "transform": "translateY(-50%)",
        "top": "50%",
        "right": "var(--tooltip-offset)",
        "left": "auto",
        "bottom": "auto"
    }
};

}.call(this) }),
}]);


//# sourceMappingURL=a8858_daisyui_dist_unstyled.rtl.js.map