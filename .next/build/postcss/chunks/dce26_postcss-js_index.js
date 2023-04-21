(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/dce26_postcss-js_index.js", {

"[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let objectify = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/objectifier.js (ecmascript)");
let parse = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/parser.js (ecmascript)");
let async = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/async.js (ecmascript)");
let sync = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/sync.js (ecmascript)");
module.exports = {
    objectify,
    parse,
    async,
    sync
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/objectifier.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let camelcase = __turbopack_require__("[project-with-next]/node_modules/.pnpm/camelcase-css@2.0.1/node_modules/camelcase-css/index.js (ecmascript)");
let UNITLESS = {
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
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
    strokeDashoffset: true,
    strokeOpacity: true,
    strokeWidth: true
};
function atRule(node) {
    if (typeof node.nodes === 'undefined') {
        return true;
    } else {
        return process(node);
    }
}
function process(node) {
    let name;
    let result = {};
    node.each((child)=>{
        if (child.type === 'atrule') {
            name = '@' + child.name;
            if (child.params) name += ' ' + child.params;
            if (typeof result[name] === 'undefined') {
                result[name] = atRule(child);
            } else if (Array.isArray(result[name])) {
                result[name].push(atRule(child));
            } else {
                result[name] = [
                    result[name],
                    atRule(child)
                ];
            }
        } else if (child.type === 'rule') {
            let body = process(child);
            if (result[child.selector]) {
                for(let i in body){
                    result[child.selector][i] = body[i];
                }
            } else {
                result[child.selector] = body;
            }
        } else if (child.type === 'decl') {
            if (child.prop[0] === '-' && child.prop[1] === '-') {
                name = child.prop;
            } else {
                name = camelcase(child.prop);
            }
            let value = child.value;
            if (!isNaN(child.value) && UNITLESS[name]) {
                value = parseFloat(child.value);
            }
            if (child.important) value += ' !important';
            if (typeof result[name] === 'undefined') {
                result[name] = value;
            } else if (Array.isArray(result[name])) {
                result[name].push(value);
            } else {
                result[name] = [
                    result[name],
                    value
                ];
            }
        }
    });
    return result;
}
module.exports = process;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/parser.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let postcss = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/postcss.js (ecmascript)");
let IMPORTANT = /\s*!important\s*$/i;
let UNITLESS = {
    'box-flex': true,
    'box-flex-group': true,
    'column-count': true,
    'flex': true,
    'flex-grow': true,
    'flex-positive': true,
    'flex-shrink': true,
    'flex-negative': true,
    'font-weight': true,
    'line-clamp': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'tab-size': true,
    'widows': true,
    'z-index': true,
    'zoom': true,
    'fill-opacity': true,
    'stroke-dashoffset': true,
    'stroke-opacity': true,
    'stroke-width': true
};
function dashify(str) {
    return str.replace(/([A-Z])/g, '-$1').replace(/^ms-/, '-ms-').toLowerCase();
}
function decl(parent, name, value) {
    if (value === false || value === null) return;
    if (!name.startsWith('--')) {
        name = dashify(name);
    }
    if (typeof value === 'number') {
        if (value === 0 || UNITLESS[name]) {
            value = value.toString();
        } else {
            value += 'px';
        }
    }
    if (name === 'css-float') name = 'float';
    if (IMPORTANT.test(value)) {
        value = value.replace(IMPORTANT, '');
        parent.push(postcss.decl({
            prop: name,
            value,
            important: true
        }));
    } else {
        parent.push(postcss.decl({
            prop: name,
            value
        }));
    }
}
function atRule(parent, parts, value) {
    let node = postcss.atRule({
        name: parts[1],
        params: parts[3] || ''
    });
    if (typeof value === 'object') {
        node.nodes = [];
        parse(value, node);
    }
    parent.push(node);
}
function parse(obj, parent) {
    let name, value, node;
    for(name in obj){
        value = obj[name];
        if (value === null || typeof value === 'undefined') {
            continue;
        } else if (name[0] === '@') {
            let parts = name.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
            if (Array.isArray(value)) {
                for (let i of value){
                    atRule(parent, parts, i);
                }
            } else {
                atRule(parent, parts, value);
            }
        } else if (Array.isArray(value)) {
            for (let i of value){
                decl(parent, name, i);
            }
        } else if (typeof value === 'object') {
            node = postcss.rule({
                selector: name
            });
            parse(value, node);
            parent.push(node);
        } else {
            decl(parent, name, value);
        }
    }
}
module.exports = function(obj) {
    let root = postcss.root();
    parse(obj, root);
    return root;
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/async.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let postcss = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/postcss.js (ecmascript)");
let processResult = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/process-result.js (ecmascript)");
let parse = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/parser.js (ecmascript)");
module.exports = function async(plugins) {
    let processor = postcss(plugins);
    return async (input)=>{
        let result = await processor.process(input, {
            parser: parse,
            from: undefined
        });
        return processResult(result);
    };
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/sync.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let postcss = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/postcss.js (ecmascript)");
let processResult = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/process-result.js (ecmascript)");
let parse = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/parser.js (ecmascript)");
module.exports = function(plugins) {
    let processor = postcss(plugins);
    return (input)=>{
        let result = processor.process(input, {
            parser: parse,
            from: undefined
        });
        return processResult(result);
    };
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/process-result.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let objectify = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss-js@4.0.0_postcss@8.4.21/node_modules/postcss-js/objectifier.js (ecmascript)");
module.exports = function processResult(result) {
    if (console && console.warn) {
        result.warnings().forEach((warn)=>{
            let source = warn.plugin || 'PostCSS';
            console.warn(source + ': ' + warn.text);
        });
    }
    return objectify(result.root);
};

}.call(this) }),
}]);


//# sourceMappingURL=dce26_postcss-js_index.js.map