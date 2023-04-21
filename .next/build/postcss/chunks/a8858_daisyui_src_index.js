(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/a8858_daisyui_src_index.js", {

"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const tailwindColors = __turbopack_require__("[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/colors.js (ecmascript)");
const postcssJs = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/index.js (ecmascript)");
const postcssPrefix = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/lib/postcss-prefixer/index.js (ecmascript)");
const daisyuiInfo = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/package.json (json)");
const colors = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/index.js (ecmascript)");
const utilities = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/utilities.js (ecmascript)");
const base = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/base.js (ecmascript)");
const unstyled = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/unstyled.js (ecmascript)");
const unstyledRtl = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/unstyled.rtl.js (ecmascript)");
const styled = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/styled.js (ecmascript)");
const styledRtl = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/styled.rtl.js (ecmascript)");
const utilitiesUnstyled = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/utilities-unstyled.js (ecmascript)");
const utilitiesStyled = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/utilities-styled.js (ecmascript)");
const themes = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/themes.js (ecmascript)");
const colorFunctions = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/functions.js (ecmascript)");
const mainFunction = ({ addBase , addComponents , addUtilities , config , postcss  })=>{
    let daisyuiIncludedItems = [];
    let logs = false;
    if (config("daisyui.logs") != false) {
        logs = true;
    }
    if (logs) {
        console.log();
        console.log("\x1b[35m%s\x1b[0m", "🌼 daisyUI components " + daisyuiInfo.version, "\x1b[0m", daisyuiInfo.homepage);
        console.group();
    }
    if (config("daisyui.base") != false) {
        addBase(base);
        daisyuiIncludedItems.push("base");
    }
    let file = styled;
    if (config("daisyui.styled") == false && config("daisyui.rtl") != true) {
        daisyuiIncludedItems.push("unstyled components");
        file = unstyled;
    } else if (config("daisyui.styled") == false && config("daisyui.rtl") == true) {
        daisyuiIncludedItems.push("unstyled components");
        console.log("\x1b[36m%s\x1b[0m", " Direction:", "\x1b[0m", "RTL");
        file = unstyledRtl;
    } else if (config("daisyui.styled") != false && config("daisyui.rtl") != true) {
        daisyuiIncludedItems.push("components");
        file = styled;
    } else if (config("daisyui.styled") !== false && config("daisyui.rtl") == true) {
        daisyuiIncludedItems.push("components");
        console.log("\x1b[36m%s\x1b[0m", " Direction:", "\x1b[0m", "RTL");
        file = styledRtl;
    }
    const prefix = config("daisyui.prefix");
    let postcssJsProcess;
    if (prefix) {
        try {
            postcssJsProcess = postcssJs.sync(postcssPrefix({
                prefix,
                ignore: []
            }));
        } catch (error) {
            logs && console.error(`Error occurred and prevent applying the "prefix" option:`, error);
        }
    }
    const shouldApplyPrefix = prefix && postcssJsProcess;
    if (shouldApplyPrefix) {
        file = postcssJsProcess(file);
    }
    addComponents(file);
    const themeInjector = colorFunctions.injectThemes(addBase, config, themes);
    themeInjector;
    daisyuiIncludedItems.push(themeInjector.themeOrder.length + " themes");
    if (config("daisyui.utils") != false) {
        addComponents(utilities, {
            variants: [
                "responsive"
            ]
        });
        let toAdd = utilitiesUnstyled;
        if (shouldApplyPrefix) {
            toAdd = postcssJsProcess(toAdd);
        }
        addComponents(toAdd, {
            variants: [
                "responsive"
            ]
        });
        toAdd = utilitiesStyled;
        if (shouldApplyPrefix) {
            toAdd = postcssJsProcess(toAdd);
        }
        addComponents(toAdd, {
            variants: [
                "responsive"
            ]
        });
        daisyuiIncludedItems.push("utilities");
    }
    if (logs) {
        console.log("\x1b[32m%s\x1b[0m", "✔︎ Including:", "\x1b[0m", "" + daisyuiIncludedItems.join(", "));
        console.log("\x1b[32m%s\x1b[0m", "❤︎ Support daisyUI: ", daisyuiInfo.funding.url, "\x1b[0m");
        console.log();
        console.groupEnd();
    }
};
module.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/plugin.js (ecmascript)")(mainFunction, {
    theme: {
        extend: {
            colors: {
                ...colors,
                "neutral-50": tailwindColors.neutral[50],
                "neutral-100": tailwindColors.neutral[100],
                "neutral-200": tailwindColors.neutral[200],
                "neutral-300": tailwindColors.neutral[300],
                "neutral-400": tailwindColors.neutral[400],
                "neutral-500": tailwindColors.neutral[500],
                "neutral-600": tailwindColors.neutral[600],
                "neutral-700": tailwindColors.neutral[700],
                "neutral-800": tailwindColors.neutral[800],
                "neutral-900": tailwindColors.neutral[900]
            }
        }
    }
});

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/lib/postcss-prefixer/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const Tokenizer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/index.js (ecmascript)");
const { parseAttrSelector , attrStringify , itMatchesOne  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/lib/postcss-prefixer/utils.js (ecmascript)");
function prefixNode(node, prefix) {
    if ([
        'class',
        'id'
    ].includes(node.type)) {
        return {
            ...node,
            name: `${prefix}${node.name}`
        };
    }
    if ([
        'attribute'
    ].includes(node.type) && node.content) {
        const { type , operator , head , classes , foot  } = parseAttrSelector(node);
        if (![
            'class',
            'id'
        ].includes(type)) return node;
        return {
            ...node,
            content: attrStringify({
                type,
                operator,
                head,
                classes: classes.map((cls)=>`${prefix}${cls}`),
                foot
            })
        };
    }
    return node;
}
function iterateSelectorNodes(selector, options) {
    const { prefix , ignore  } = options;
    return {
        ...selector,
        nodes: selector.nodes.map((node)=>{
            if ([
                'selector',
                'nested-pseudo-class'
            ].includes(node.type)) {
                return iterateSelectorNodes(node, options);
            }
            if (itMatchesOne(ignore, Tokenizer.stringify(node))) return node;
            return prefixNode(node, prefix);
        })
    };
}
module.exports = (opts = {})=>{
    const { prefix , ignore  } = {
        prefix: '',
        ignore: [],
        ...opts
    };
    if (typeof prefix !== 'string') {
        throw new Error('@postcss-prefix: prefix option should be of type string.');
    }
    if (!Array.isArray(ignore)) {
        throw new Error('@postcss-prefix: ignore options should be an Array.');
    }
    if (!prefix.length) return;
    return {
        postcssPlugin: 'postcss-prefixer',
        Root (root, postcss) {
            root.walkRules((rule)=>{
                const parsed = Tokenizer.parse(rule.selector);
                const selector = iterateSelectorNodes(parsed, {
                    prefix,
                    ignore
                });
                rule.selector = Tokenizer.stringify(selector);
            });
        }
    };
};
module.exports.postcss = true;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

function withOpacityValue(variable, fallbackColor) {
    return ({ opacityValue  })=>{
        let fallbackColorValue = "";
        if (fallbackColor) {
            fallbackColorValue = `, var(${fallbackColor})`;
        }
        if (opacityValue === undefined) {
            return `hsl(var(${variable}${fallbackColorValue}))`;
        }
        return `hsl(var(${variable}${fallbackColorValue}) / ${opacityValue})`;
    };
}
let colorObject = {
    transparent: "transparent",
    current: "currentColor",
    primary: withOpacityValue("--p"),
    "primary-focus": withOpacityValue("--pf", "--p"),
    "primary-content": withOpacityValue("--pc"),
    secondary: withOpacityValue("--s"),
    "secondary-focus": withOpacityValue("--sf", "--s"),
    "secondary-content": withOpacityValue("--sc"),
    accent: withOpacityValue("--a"),
    "accent-focus": withOpacityValue("--af", "--a"),
    "accent-content": withOpacityValue("--ac"),
    neutral: withOpacityValue("--n"),
    "neutral-focus": withOpacityValue("--nf", "--n"),
    "neutral-content": withOpacityValue("--nc"),
    "base-100": withOpacityValue("--b1"),
    "base-200": withOpacityValue("--b2", "--b1"),
    "base-300": withOpacityValue("--b3", "--b2"),
    "base-content": withOpacityValue("--bc"),
    info: withOpacityValue("--in"),
    "info-content": withOpacityValue("--inc", "--nc"),
    success: withOpacityValue("--su"),
    "success-content": withOpacityValue("--suc", "--nc"),
    warning: withOpacityValue("--wa"),
    "warning-content": withOpacityValue("--wac", "--nc"),
    error: withOpacityValue("--er"),
    "error-content": withOpacityValue("--erc", "--nc")
};
module.exports = colorObject;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/themes.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    "[data-theme=aqua]": {
        "color-scheme": "dark",
        primary: "#09ecf3",
        "primary-content": "#005355",
        secondary: "#966fb3",
        accent: "#ffe999",
        neutral: "#3b8ac4",
        "base-100": "#345da7",
        "info": "#2563eb",
        "success": "#16a34a",
        "warning": "#d97706",
        "error": "#dc2626"
    },
    "[data-theme=black]": {
        "color-scheme": "dark",
        primary: "#343232",
        secondary: "#343232",
        accent: "#343232",
        "base-100": "#000000",
        "base-200": "#0D0D0D",
        "base-300": "#1A1919",
        neutral: "#272626",
        "neutral-focus": "#343232",
        info: "#0000ff",
        success: "#008000",
        warning: "#ffff00",
        error: "#ff0000",
        "--rounded-box": "0",
        "--rounded-btn": "0",
        "--rounded-badge": "0",
        "--animation-btn": "0",
        "--animation-input": "0",
        "--btn-text-case": "lowercase",
        "--btn-focus-scale": "1",
        "--tab-radius": "0"
    },
    "[data-theme=bumblebee]": {
        "color-scheme": "light",
        primary: "#e0a82e",
        "primary-content": "#181830",
        secondary: "#f9d72f",
        "secondary-content": "#181830",
        accent: "#181830",
        neutral: "#181830",
        "base-100": "#ffffff"
    },
    "[data-theme=cmyk]": {
        "color-scheme": "light",
        primary: "#45AEEE",
        secondary: "#E8488A",
        accent: "#FFF232",
        neutral: "#1a1a1a",
        "base-100": "#ffffff",
        info: "#4AA8C0",
        success: "#823290",
        warning: "#EE8133",
        error: "#E93F33"
    },
    "[data-theme=corporate]": {
        "color-scheme": "light",
        primary: "#4b6bfb",
        secondary: "#7b92b2",
        accent: "#67cba0",
        neutral: "#181a2a",
        "neutral-content": "#edf2f7",
        "base-100": "#ffffff",
        "base-content": "#181a2a",
        "--rounded-box": "0.25rem",
        "--rounded-btn": ".125rem",
        "--rounded-badge": ".125rem",
        "--animation-btn": "0",
        "--animation-input": "0",
        "--btn-focus-scale": "1"
    },
    "[data-theme=cupcake]": {
        "color-scheme": "light",
        primary: "#65c3c8",
        secondary: "#ef9fbc",
        accent: "#eeaf3a",
        neutral: "#291334",
        "base-100": "#faf7f5",
        "base-200": "#efeae6",
        "base-300": "#e7e2df",
        "base-content": "#291334",
        "--rounded-btn": "1.9rem",
        "--tab-border": "2px",
        "--tab-radius": ".5rem"
    },
    "[data-theme=cyberpunk]": {
        "color-scheme": "light",
        fontFamily: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
        primary: "#ff7598",
        secondary: "#75d1f0",
        accent: "#c07eec",
        neutral: "#423f00",
        "neutral-content": "#ffee00",
        "base-100": "#ffee00",
        "--rounded-box": "0",
        "--rounded-btn": "0",
        "--rounded-badge": "0",
        "--tab-radius": "0"
    },
    "[data-theme=dark]": {
        "color-scheme": "dark",
        primary: "#661AE6",
        "primary-content": "#ffffff",
        secondary: "#D926AA",
        "secondary-content": "#ffffff",
        accent: "#1FB2A5",
        "accent-content": "#ffffff",
        neutral: "#191D24",
        "neutral-focus": "#111318",
        "neutral-content": "#A6ADBB",
        "base-100": "#2A303C",
        "base-200": "#242933",
        "base-300": "#20252E",
        "base-content": "#A6ADBB"
    },
    "[data-theme=dracula]": {
        "color-scheme": "dark",
        primary: "#ff79c6",
        secondary: "#bd93f9",
        accent: "#ffb86c",
        neutral: "#414558",
        "base-100": "#282a36",
        "base-content": "#f8f8f2",
        info: "#8be9fd",
        success: "#50fa7b",
        warning: "#f1fa8c",
        error: "#ff5555"
    },
    "[data-theme=emerald]": {
        "color-scheme": "light",
        primary: "#66cc8a",
        "primary-content": "#223D30",
        secondary: "#377cfb",
        "secondary-content": "#f9fafb",
        accent: "#ea5234",
        "accent-content": "#f9fafb",
        neutral: "#333c4d",
        "neutral-content": "#f9fafb",
        "base-100": "#ffffff",
        "base-content": "#333c4d",
        "--animation-btn": "0",
        "--animation-input": "0",
        "--btn-focus-scale": "1"
    },
    "[data-theme=fantasy]": {
        "color-scheme": "light",
        primary: "#6e0b75",
        secondary: "#007ebd",
        accent: "#f8860d",
        neutral: "#1f2937",
        "base-100": "#ffffff",
        "base-content": "#1f2937"
    },
    "[data-theme=forest]": {
        "color-scheme": "dark",
        primary: "#1eb854",
        "primary-content": "#c2ffd7",
        secondary: "#1fd65f",
        accent: "#d99330",
        neutral: "#110e0e",
        "base-100": "#171212",
        "--rounded-btn": "1.9rem"
    },
    "[data-theme=garden]": {
        "color-scheme": "light",
        primary: "#5c7f67",
        secondary: "#ecf4e7",
        "secondary-content": "#24331a",
        accent: "#fae5e5",
        "accent-content": "#322020",
        neutral: "#5d5656",
        "neutral-content": "#e9e7e7",
        "base-100": "#e9e7e7",
        "base-content": "#100f0f"
    },
    "[data-theme=halloween]": {
        "color-scheme": "dark",
        primary: "#f28c18",
        "primary-content": "#131616",
        secondary: "#6d3a9c",
        accent: "#51a800",
        neutral: "#1b1d1d",
        "base-100": "#212121",
        info: "#2563eb",
        success: "#16a34a",
        warning: "#d97706",
        error: "#dc2626"
    },
    "[data-theme=light]": {
        "color-scheme": "light",
        primary: "#570df8",
        "primary-content": "#ffffff",
        secondary: "#f000b8",
        "secondary-content": "#ffffff",
        accent: "#37cdbe",
        "accent-content": "#163835",
        neutral: "#3d4451",
        "neutral-content": "#ffffff",
        "base-100": "#ffffff",
        "base-200": "#F2F2F2",
        "base-300": "#E5E6E6",
        "base-content": "#1f2937"
    },
    "[data-theme=lofi]": {
        "color-scheme": "light",
        "primary": "#0D0D0D",
        "primary-content": "#ffffff",
        "secondary": "#1A1919",
        "secondary-content": "#ffffff",
        "accent": "#262626",
        "accent-content": "#ffffff",
        "neutral": "#000000",
        "neutral-content": "#ffffff",
        "base-100": "#ffffff",
        "base-200": "#F2F2F2",
        "base-300": "#E6E5E5",
        "base-content": "#000000",
        "info": "#0070F3",
        "info-content": "#ffffff",
        "success": "#21CC51",
        "success-content": "#ffffff",
        "warning": "#FF6154",
        "warning-content": "#ffffff",
        "error": "#DE1C8D",
        "error-content": "#ffffff",
        "--rounded-box": "0.25rem",
        "--rounded-btn": "0.125rem",
        "--rounded-badge": "0.125rem",
        "--animation-btn": "0",
        "--animation-input": "0",
        "--btn-focus-scale": "1",
        "--tab-radius": "0"
    },
    "[data-theme=luxury]": {
        "color-scheme": "dark",
        primary: "#ffffff",
        secondary: "#152747",
        accent: "#513448",
        neutral: "#171618",
        "neutral-content": "#dca54c",
        "base-100": "#09090b",
        "base-200": "#171618",
        "base-300": "#2e2d2f",
        "base-content": "#dca54c",
        info: "#66c6ff",
        success: "#87d039",
        warning: "#e2d562",
        error: "#ff6f6f"
    },
    "[data-theme=pastel]": {
        "color-scheme": "light",
        primary: "#d1c1d7",
        secondary: "#f6cbd1",
        accent: "#b4e9d6",
        neutral: "#70acc7",
        "base-100": "#ffffff",
        "base-200": "#f9fafb",
        "base-300": "#d1d5db",
        "--rounded-btn": "1.9rem"
    },
    "[data-theme=retro]": {
        "color-scheme": "light",
        primary: "#ef9995",
        "primary-content": "#282425",
        secondary: "#a4cbb4",
        "secondary-content": "#282425",
        accent: "#ebdc99",
        "accent-content": "#282425",
        neutral: "#7d7259",
        "neutral-content": "#e4d8b4",
        "base-100": "#e4d8b4",
        "base-200": "#d2c59d",
        "base-300": "#c6b386",
        "base-content": "#282425",
        "info": "#2563eb",
        "success": "#16a34a",
        "warning": "#d97706",
        "error": "#dc2626",
        "--rounded-box": "0.4rem",
        "--rounded-btn": "0.4rem",
        "--rounded-badge": "0.4rem"
    },
    "[data-theme=synthwave]": {
        "color-scheme": "dark",
        primary: "#e779c1",
        secondary: "#58c7f3",
        accent: "#f3cc30",
        neutral: "#20134e",
        "neutral-content": "#f9f7fd",
        "base-100": "#2d1b69",
        "base-content": "#f9f7fd",
        info: "#53c0f3",
        "info-content": "#201047",
        success: "#71ead2",
        "success-content": "#201047",
        warning: "#f3cc30",
        "warning-content": "#201047",
        error: "#e24056",
        "error-content": "#f9f7fd"
    },
    "[data-theme=valentine]": {
        "color-scheme": "light",
        primary: "#e96d7b",
        secondary: "#a991f7",
        accent: "#88dbdd",
        neutral: "#af4670",
        "neutral-content": "#f0d6e8",
        "base-100": "#f0d6e8",
        "base-content": "#632c3b",
        "info": "#2563eb",
        "success": "#16a34a",
        "warning": "#d97706",
        "error": "#dc2626",
        "--rounded-btn": "1.9rem"
    },
    "[data-theme=wireframe]": {
        "color-scheme": "light",
        fontFamily: 'Chalkboard,comic sans ms,"sanssecondaryerif"',
        primary: "#b8b8b8",
        secondary: "#b8b8b8",
        accent: "#b8b8b8",
        neutral: "#ebebeb",
        "base-100": "#ffffff",
        "base-200": "#eeeeee",
        "base-300": "#dddddd",
        info: "#0000ff",
        success: "#008000",
        warning: "#a6a659",
        error: "#ff0000",
        "--rounded-box": "0.2rem",
        "--rounded-btn": "0.2rem",
        "--rounded-badge": "0.2rem",
        "--tab-radius": "0.2rem"
    },
    "[data-theme=autumn]": {
        "color-scheme": "light",
        primary: "#8C0327",
        secondary: "#D85251",
        accent: "#D59B6A",
        neutral: "#826A5C",
        "base-100": "#f1f1f1",
        info: "#42ADBB",
        success: "#499380",
        warning: "#E97F14",
        error: "#DF1A2F"
    },
    "[data-theme=business]": {
        "color-scheme": "dark",
        primary: "#1C4E80",
        secondary: "#7C909A",
        accent: "#EA6947",
        neutral: "#23282E",
        "base-100": "#202020",
        info: "#0091D5",
        success: "#6BB187",
        warning: "#DBAE59",
        error: "#AC3E31",
        "--rounded-box": "0.25rem",
        "--rounded-btn": ".125rem",
        "--rounded-badge": ".125rem"
    },
    "[data-theme=acid]": {
        "color-scheme": "light",
        primary: "#FF00F4",
        secondary: "#FF7400",
        accent: "#CBFD03",
        neutral: "#191A3F",
        "base-100": "#fafafa",
        info: "#3194F6",
        success: "#5FC992",
        warning: "#F7DE2D",
        error: "#E60300",
        "--rounded-box": "1.25rem",
        "--rounded-btn": "1rem",
        "--rounded-badge": "1rem"
    },
    "[data-theme=lemonade]": {
        "color-scheme": "light",
        primary: "#519903",
        secondary: "#E9E92E",
        accent: "#F7F9CA",
        neutral: "#191A3F",
        "base-100": "#ffffff",
        info: "#C8E1E7",
        success: "#DEF29F",
        warning: "#F7E589",
        error: "#F2B6B5"
    },
    "[data-theme=night]": {
        "color-scheme": "dark",
        "primary": "#38bdf8",
        "secondary": "#818CF8",
        "accent": "#F471B5",
        "neutral": "#1E293B",
        "neutral-focus": "#273449",
        "base-100": "#0F172A",
        "info": "#0CA5E9",
        "success": "#2DD4BF",
        "warning": "#F4BF50",
        "error": "#FB7085"
    },
    "[data-theme=coffee]": {
        "color-scheme": "dark",
        "primary": "#DB924B",
        "secondary": "#263E3F",
        "accent": "#10576D",
        "neutral": "#120C12",
        "base-100": "#20161F",
        "base-content": "#756E63",
        "info": "#8DCAC1",
        "success": "#9DB787",
        "warning": "#FFD25F",
        "error": "#FC9581"
    },
    "[data-theme=winter]": {
        "color-scheme": "light",
        "primary": "#047AFF",
        "secondary": "#463AA2",
        "accent": "#C148AC",
        "neutral": "#021431",
        "base-100": "#ffffff",
        "base-200": "#F2F7FF",
        "base-300": "#E3E9F4",
        "base-content": "#394E6A",
        "info": "#93E7FB",
        "success": "#81CFD1",
        "warning": "#EFD7BB",
        "error": "#E58B8B"
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/functions.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const Color = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color@4.2.3/node_modules/color/index.js (ecmascript)");
const colorNames = __turbopack_require__("[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/colorNames.js (ecmascript)");
module.exports = {
    generateForegroundColorFrom: function(input, percentage = 0.8) {
        if (Color(input).isDark()) {
            let arr = Color(input).mix(Color("white"), percentage).saturate(10).hsl().array();
            return arr[0].toPrecision(5).replace(/\.?0+$/, "") + " " + arr[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + arr[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
        } else {
            let arr = Color(input).mix(Color("black"), percentage).saturate(10).hsl().array();
            return arr[0].toPrecision(5).replace(/\.?0+$/, "") + " " + arr[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + arr[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
        }
    },
    convertToHsl: function(input) {
        let resultObj = {};
        if (typeof input === "object" && input !== null) {
            Object.entries(input).forEach(([rule, value])=>{
                if (colorNames.hasOwnProperty(rule)) {
                    const hslArray = Color(value).hsl().array();
                    resultObj[colorNames[rule]] = hslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + hslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + hslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                } else {
                    resultObj[rule] = value;
                }
                if (!input.hasOwnProperty("primary-focus")) {
                    const darkerHslArray = Color(input["primary"]).darken(0.2).hsl().array();
                    resultObj["--pf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                }
                if (!input.hasOwnProperty("secondary-focus")) {
                    const darkerHslArray = Color(input["secondary"]).darken(0.2).hsl().array();
                    resultObj["--sf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                }
                if (!input.hasOwnProperty("accent-focus")) {
                    const darkerHslArray = Color(input["accent"]).darken(0.2).hsl().array();
                    resultObj["--af"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                }
                if (!input.hasOwnProperty("neutral-focus")) {
                    const darkerHslArray = Color(input["neutral"]).darken(0.2).hsl().array();
                    resultObj["--nf"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                }
                if (!input.hasOwnProperty("base-100")) {
                    resultObj["--b1"] = 0 + " " + 0 + "%" + " " + 100 + "%";
                }
                if (!input.hasOwnProperty("base-200")) {
                    const darkerHslArray = Color(input["base-100"]).darken(0.1).hsl().array();
                    resultObj["--b2"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                }
                if (!input.hasOwnProperty("base-300")) {
                    if (input.hasOwnProperty("base-200")) {
                        const darkerHslArray = Color(input["base-200"]).darken(0.1).hsl().array();
                        resultObj["--b3"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                    } else {
                        const darkerHslArray = Color(input["base-100"]).darken(0.1).darken(0.1).hsl().array();
                        resultObj["--b3"] = darkerHslArray[0].toPrecision(5).replace(/\.?0+$/, "") + " " + darkerHslArray[1].toPrecision(5).replace(/\.?0+$/, "") + "%" + " " + darkerHslArray[2].toPrecision(5).replace(/\.?0+$/, "") + "%";
                    }
                }
                if (!input.hasOwnProperty("info")) {
                    resultObj["--in"] = 198 + " " + 93 + "%" + " " + 60 + "%";
                }
                if (!input.hasOwnProperty("success")) {
                    resultObj["--su"] = 158 + " " + 64 + "%" + " " + 52 + "%";
                }
                if (!input.hasOwnProperty("warning")) {
                    resultObj["--wa"] = 43 + " " + 96 + "%" + " " + 56 + "%";
                }
                if (!input.hasOwnProperty("error")) {
                    resultObj["--er"] = 0 + " " + 91 + "%" + " " + 71 + "%";
                }
                if (!input.hasOwnProperty("base-content")) {
                    resultObj["--bc"] = this.generateForegroundColorFrom(input["base-100"]);
                }
                if (!input.hasOwnProperty("primary-content")) {
                    resultObj["--pc"] = this.generateForegroundColorFrom(input["primary"]);
                }
                if (!input.hasOwnProperty("secondary-content")) {
                    resultObj["--sc"] = this.generateForegroundColorFrom(input["secondary"]);
                }
                if (!input.hasOwnProperty("accent-content")) {
                    resultObj["--ac"] = this.generateForegroundColorFrom(input["accent"]);
                }
                if (!input.hasOwnProperty("neutral-content")) {
                    resultObj["--nc"] = this.generateForegroundColorFrom(input["neutral"]);
                }
                if (!input.hasOwnProperty("info-content")) {
                    if (input.hasOwnProperty("info")) {
                        resultObj["--inc"] = this.generateForegroundColorFrom(input["info"]);
                    } else {
                        resultObj["--inc"] = 198 + " " + 100 + "%" + " " + 12 + "%";
                    }
                }
                if (!input.hasOwnProperty("success-content")) {
                    if (input.hasOwnProperty("success")) {
                        resultObj["--suc"] = this.generateForegroundColorFrom(input["success"]);
                    } else {
                        resultObj["--suc"] = 158 + " " + 100 + "%" + " " + 10 + "%";
                    }
                }
                if (!input.hasOwnProperty("warning-content")) {
                    if (input.hasOwnProperty("warning")) {
                        resultObj["--wac"] = this.generateForegroundColorFrom(input["warning"]);
                    } else {
                        resultObj["--wac"] = 43 + " " + 100 + "%" + " " + 11 + "%";
                    }
                }
                if (!input.hasOwnProperty("error-content")) {
                    if (input.hasOwnProperty("error")) {
                        resultObj["--erc"] = this.generateForegroundColorFrom(input["error"]);
                    } else {
                        resultObj["--erc"] = 0 + " " + 100 + "%" + " " + 14 + "%";
                    }
                }
                if (!input.hasOwnProperty("--rounded-box")) {
                    resultObj["--rounded-box"] = "1rem";
                }
                if (!input.hasOwnProperty("--rounded-btn")) {
                    resultObj["--rounded-btn"] = "0.5rem";
                }
                if (!input.hasOwnProperty("--rounded-badge")) {
                    resultObj["--rounded-badge"] = "1.9rem";
                }
                if (!input.hasOwnProperty("--animation-btn")) {
                    resultObj["--animation-btn"] = "0.25s";
                }
                if (!input.hasOwnProperty("--animation-input")) {
                    resultObj["--animation-input"] = ".2s";
                }
                if (!input.hasOwnProperty("--btn-text-case")) {
                    resultObj["--btn-text-case"] = "uppercase";
                }
                if (!input.hasOwnProperty("--btn-focus-scale")) {
                    resultObj["--btn-focus-scale"] = "0.95";
                }
                if (!input.hasOwnProperty("--border-btn")) {
                    resultObj["--border-btn"] = "1px";
                }
                if (!input.hasOwnProperty("--tab-border")) {
                    resultObj["--tab-border"] = "1px";
                }
                if (!input.hasOwnProperty("--tab-radius")) {
                    resultObj["--tab-radius"] = "0.5rem";
                }
            });
            return resultObj;
        }
        return input;
    },
    injectThemes: function(addBase, config, themes) {
        let includedThemesObj = new Object();
        if (config("daisyui.themes") == false) {
            Object.entries(themes).forEach(([theme, index])=>{
                includedThemesObj[theme] = this.convertToHsl(themes[theme]);
            });
        }
        if (config("daisyui.themes") != false) {
            Object.entries(themes).forEach(([theme, index])=>{
                includedThemesObj[theme] = this.convertToHsl(themes[theme]);
            });
        }
        if (Array.isArray(config("daisyui.themes"))) {
            config("daisyui.themes").forEach((item, index)=>{
                if (typeof item === "object" && item !== null) {
                    Object.entries(item).forEach(([customThemeName, customThemevalue])=>{
                        includedThemesObj["[data-theme=" + customThemeName + "]"] = this.convertToHsl(customThemevalue);
                    });
                }
            });
        }
        let themeOrder = [];
        if (Array.isArray(config("daisyui.themes"))) {
            config("daisyui.themes").forEach((theme, index)=>{
                if (typeof theme === "object" && theme !== null) {
                    Object.entries(theme).forEach(([customThemeName, customThemevalue])=>{
                        themeOrder.push(customThemeName);
                    });
                } else if (includedThemesObj.hasOwnProperty("[data-theme=" + theme + "]")) {
                    themeOrder.push(theme);
                }
            });
        } else if (config("daisyui.themes") != false) {
            themeOrder = [
                "light",
                "dark",
                "cupcake",
                "bumblebee",
                "emerald",
                "corporate",
                "synthwave",
                "retro",
                "cyberpunk",
                "valentine",
                "halloween",
                "garden",
                "forest",
                "aqua",
                "lofi",
                "pastel",
                "fantasy",
                "wireframe",
                "black",
                "luxury",
                "dracula",
                "cmyk",
                "autumn",
                "business",
                "acid",
                "lemonade",
                "night",
                "coffee",
                "winter"
            ];
        } else if (config("daisyui.themes") == false) {
            themeOrder.push("light");
        }
        themeOrder.forEach((themeName, index)=>{
            if (index === 0) {
                addBase({
                    [":root"]: includedThemesObj["[data-theme=" + themeName + "]"]
                });
            } else if (index === 1) {
                if (config("daisyui.darkTheme")) {
                    if (themeOrder[0] != config("daisyui.darkTheme") && themeOrder.includes(config("daisyui.darkTheme"))) {
                        addBase({
                            ["@media (prefers-color-scheme: dark)"]: {
                                [":root"]: includedThemesObj[`[data-theme=${config("daisyui.darkTheme")}]`]
                            }
                        });
                    }
                } else if (config("daisyui.darkTheme") === false) {} else {
                    if (themeOrder[0] != "dark" && themeOrder.includes("dark")) {
                        addBase({
                            ["@media (prefers-color-scheme: dark)"]: {
                                [":root"]: includedThemesObj["[data-theme=dark]"]
                            }
                        });
                    }
                }
                addBase({
                    ["[data-theme=" + themeOrder[0] + "]"]: includedThemesObj["[data-theme=" + themeOrder[0] + "]"]
                });
                addBase({
                    ["[data-theme=" + themeOrder[1] + "]"]: includedThemesObj["[data-theme=" + themeOrder[1] + "]"]
                });
            } else {
                addBase({
                    ["[data-theme=" + themeName + "]"]: includedThemesObj["[data-theme=" + themeName + "]"]
                });
            }
        });
        return {
            includedThemesObj: includedThemesObj,
            themeOrder: themeOrder
        };
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/lib/postcss-prefixer/utils.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    itMatchesOne (arr, term) {
        return arr.some((i)=>term.search(i) >= 0);
    },
    parseAttrSelector (node) {
        const { content  } = node;
        const regex = /(^class|^id)([*^?~|$=]*)+(?:("\s*)([^"\\]*?(?:\\.[^"\\]*)*?)(\s*")|('\s*)([^'\\]*?(?:\\.[^'\\]*)*?)(\s*'))/i;
        const [type, operator, head, classes, foot] = content.split(regex).filter((part)=>part);
        return {
            type,
            operator,
            head,
            classes: classes ? classes.split(' ').map((c)=>c.replace(/"|'/g, '')) : [],
            foot
        };
    },
    attrStringify ({ type , operator , head , classes , foot  }) {
        return `${type}${operator || ''}${head || ''}${classes.join(' ')}${foot || ''}`;
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/src/colors/colorNames.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    primary: "--p",
    "primary-focus": "--pf",
    "primary-content": "--pc",
    secondary: "--s",
    "secondary-focus": "--sf",
    "secondary-content": "--sc",
    accent: "--a",
    "accent-focus": "--af",
    "accent-content": "--ac",
    neutral: "--n",
    "neutral-focus": "--nf",
    "neutral-content": "--nc",
    "base-100": "--b1",
    "base-200": "--b2",
    "base-300": "--b3",
    "base-content": "--bc",
    info: "--in",
    "info-content": "--inc",
    success: "--su",
    "success-content": "--suc",
    warning: "--wa",
    "warning-content": "--wac",
    error: "--er",
    "error-content": "--erc"
};

}.call(this) }),
}]);


//# sourceMappingURL=a8858_daisyui_src_index.js.map