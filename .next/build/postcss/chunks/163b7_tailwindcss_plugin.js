(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/163b7_tailwindcss_plugin.js", {

"[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/plugin.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let createPlugin = __turbopack_require__("[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/public/create-plugin.js (ecmascript)");
module.exports = (createPlugin.__esModule ? createPlugin : {
    default: createPlugin
}).default;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/public/create-plugin.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _createPlugin = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/util/createPlugin.js (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = _createPlugin.default;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/util/createPlugin.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
function createPlugin(plugin, config) {
    return {
        handler: plugin,
        config
    };
}
createPlugin.withOptions = function(pluginFunction, configFunction = ()=>({})) {
    const optionsFunction = function(options) {
        return {
            __options: options,
            handler: pluginFunction(options),
            config: configFunction(options)
        };
    };
    optionsFunction.__isOptionsFunction = true;
    optionsFunction.__pluginFunction = pluginFunction;
    optionsFunction.__configFunction = configFunction;
    return optionsFunction;
};
const _default = createPlugin;

}.call(this) }),
}]);


//# sourceMappingURL=163b7_tailwindcss_plugin.js.map