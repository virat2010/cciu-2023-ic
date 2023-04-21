(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/[project-with-next]__5a3793.js", {

"[project-with-next]/postcss.config.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
};

}.call(this) }),
"[project-with-next]/postcss.config.js/transform.js (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>transform
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__ = __turbopack_import__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/postcss.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$postcss$2e$config$2e$js__ = __turbopack_import__("[project-with-next]/postcss.config.js (ecmascript)");
var __TURBOPACK__external__path__ = __turbopack_external_require__("path", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const contextDir = process.cwd();
const toPath = (file)=>{
    const relPath = __TURBOPACK__external__path__["relative"](contextDir, file);
    if (__TURBOPACK__external__path__["isAbsolute"](relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__external__path__["sep"] !== "/" ? relPath.replaceAll(__TURBOPACK__external__path__["sep"], "/") : relPath;
};
const transform = async (ipc, cssContent, name)=>{
    let config = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$postcss$2e$config$2e$js__["default"];
    if (typeof config === "function") {
        config = await config({
            env: "development"
        });
    }
    let plugins;
    if (Array.isArray(config.plugins)) {
        plugins = config.plugins.map((plugin)=>{
            if (Array.isArray(plugin)) {
                return plugin;
            } else if (typeof plugin === "string") {
                return [
                    plugin,
                    {}
                ];
            } else {
                return plugin;
            }
        });
    } else if (typeof config.plugins === "object") {
        plugins = Object.entries(config.plugins).filter(([, options])=>options);
    } else {
        plugins = [];
    }
    const loadedPlugins = plugins.map((plugin)=>{
        if (Array.isArray(plugin)) {
            const [arg, options] = plugin;
            let pluginFactory = arg;
            if (typeof pluginFactory === "string") {
                pluginFactory = __turbopack_external_require__(pluginFactory);
            }
            if (pluginFactory.default) {
                pluginFactory = pluginFactory.default;
            }
            return pluginFactory(options);
        }
        return plugin;
    });
    const processor = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__["default"](loadedPlugins);
    const { css , map , messages  } = await processor.process(cssContent, {
        from: name,
        to: name,
        map: {
            inline: false
        }
    });
    const assets = [];
    for (const msg of messages){
        switch(msg.type){
            case "asset":
                assets.push({
                    file: msg.file,
                    content: msg.content,
                    sourceMap: typeof msg.sourceMap === "string" ? msg.sourceMap : JSON.stringify(msg.sourceMap)
                });
                break;
            case "file-dependency":
            case "missing-dependency":
                ipc.send({
                    type: "fileDependency",
                    path: toPath(msg.file)
                });
                break;
            case "build-dependency":
                ipc.send({
                    type: "buildDependency",
                    path: toPath(msg.file)
                });
                break;
            case "dir-dependency":
                ipc.send({
                    type: "dirDependency",
                    path: toPath(msg.dir),
                    glob: msg.glob
                });
                break;
            case "context-dependency":
                ipc.send({
                    type: "dirDependency",
                    path: toPath(msg.file),
                    glob: "**"
                });
                break;
        }
    }
    return {
        css,
        map: JSON.stringify(map),
        assets
    };
};
;

})()),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/postcss.mjs (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "AtRule": ()=>AtRule,
    "Comment": ()=>Comment,
    "Container": ()=>Container,
    "CssSyntaxError": ()=>CssSyntaxError,
    "Declaration": ()=>Declaration,
    "Document": ()=>Document,
    "Input": ()=>Input,
    "Node": ()=>Node,
    "Processor": ()=>Processor,
    "Result": ()=>Result,
    "Root": ()=>Root,
    "Rule": ()=>Rule,
    "Warning": ()=>Warning,
    "atRule": ()=>atRule,
    "comment": ()=>comment,
    "decl": ()=>decl,
    "default": ()=>__TURBOPACK__default__export__,
    "document": ()=>document,
    "fromJSON": ()=>fromJSON,
    "list": ()=>list,
    "parse": ()=>parse,
    "plugin": ()=>plugin,
    "root": ()=>root,
    "rule": ()=>rule,
    "stringify": ()=>stringify
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/postcss.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"];
const stringify = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].stringify;
const fromJSON = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].fromJSON;
const plugin = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].plugin;
const parse = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].parse;
const list = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].list;
const document = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].document;
const comment = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].comment;
const atRule = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].atRule;
const rule = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].rule;
const decl = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].decl;
const root = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].root;
const CssSyntaxError = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].CssSyntaxError;
const Declaration = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Declaration;
const Container = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Container;
const Processor = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Processor;
const Document = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Document;
const Comment = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Comment;
const Warning = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Warning;
const AtRule = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].AtRule;
const Result = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Result;
const Input = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Input;
const Rule = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Rule;
const Root = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Root;
const Node = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f2e$pnpm$2f$postcss$40$8$2e$4$2e$21$2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__["default"].Node;

})()),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/postcss.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let CssSyntaxError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/css-syntax-error.js (ecmascript)");
let Declaration = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/declaration.js (ecmascript)");
let LazyResult = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/lazy-result.js (ecmascript)");
let Container = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)");
let Processor = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/processor.js (ecmascript)");
let stringify = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringify.js (ecmascript)");
let fromJSON = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/fromJSON.js (ecmascript)");
let Document = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/document.js (ecmascript)");
let Warning = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/warning.js (ecmascript)");
let Comment = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/comment.js (ecmascript)");
let AtRule = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/at-rule.js (ecmascript)");
let Result = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/result.js (ecmascript)");
let Input = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/input.js (ecmascript)");
let parse = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/parse.js (ecmascript)");
let list = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/list.js (ecmascript)");
let Rule = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/rule.js (ecmascript)");
let Root = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/root.js (ecmascript)");
let Node = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/node.js (ecmascript)");
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
    }
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            console.warn(name + ': postcss.plugin was deprecated. Migration guide:\n' + 'https://evilmartians.com/chronicles/postcss-8-plugin-migration');
            if (process.env.LANG && process.env.LANG.startsWith('cn')) {
                console.warn(name + ': 里面 postcss.plugin 被弃用. 迁移指南:\n' + 'https://www.w3ctech.com/topic/2226');
            }
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, 'postcss', {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults);
postcss.atRule = (defaults)=>new AtRule(defaults);
postcss.decl = (defaults)=>new Declaration(defaults);
postcss.rule = (defaults)=>new Rule(defaults);
postcss.root = (defaults)=>new Root(defaults);
postcss.document = (defaults)=>new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/css-syntax-error.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let pico = __turbopack_require__("[project-with-next]/node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js (ecmascript)");
let terminalHighlight = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/terminal-highlight.js (ecmascript)");
class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin){
        super(message);
        this.name = 'CssSyntaxError';
        this.reason = message;
        if (file) {
            this.file = file;
        }
        if (source) {
            this.source = source;
        }
        if (plugin) {
            this.plugin = plugin;
        }
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            if (typeof line === 'number') {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ': ' : '';
        this.message += this.file ? this.file : '<css input>';
        if (typeof this.line !== 'undefined') {
            this.message += ':' + this.line + ':' + this.column;
        }
        this.message += ': ' + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return '';
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        if (terminalHighlight) {
            if (color) css = terminalHighlight(css);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        let mark, aside;
        if (color) {
            let { bold , red , gray  } = pico.createColors(true);
            mark = (text)=>bold(red(text));
            aside = (text)=>gray(text);
        } else {
            mark = aside = (str)=>str;
        }
        return lines.slice(start, end).map((line, index)=>{
            let number = start + 1 + index;
            let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
            if (number === this.line) {
                let spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
                return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
            }
            return ' ' + aside(gutter) + line;
        }).join('\n');
    }
    toString() {
        let code = this.showSourceCode();
        if (code) {
            code = '\n\n' + code + '\n';
        }
        return this.name + ': ' + this.message + code;
    }
}
module.exports = CssSyntaxError;
CssSyntaxError.default = CssSyntaxError;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/declaration.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Node = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/node.js (ecmascript)");
class Declaration extends Node {
    constructor(defaults){
        if (defaults && typeof defaults.value !== 'undefined' && typeof defaults.value !== 'string') {
            defaults = {
                ...defaults,
                value: String(defaults.value)
            };
        }
        super(defaults);
        this.type = 'decl';
    }
    get variable() {
        return this.prop.startsWith('--') || this.prop[0] === '$';
    }
}
module.exports = Declaration;
Declaration.default = Declaration;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/lazy-result.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let { isClean , my  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/symbols.js (ecmascript)");
let MapGenerator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/map-generator.js (ecmascript)");
let stringify = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringify.js (ecmascript)");
let Container = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)");
let Document = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/document.js (ecmascript)");
let warnOnce = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/warn-once.js (ecmascript)");
let Result = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/result.js (ecmascript)");
let parse = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/parse.js (ecmascript)");
let Root = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/root.js (ecmascript)");
const TYPE_TO_CLASS_NAME = {
    document: 'Document',
    root: 'Root',
    atrule: 'AtRule',
    rule: 'Rule',
    decl: 'Declaration',
    comment: 'Comment'
};
const PLUGIN_PROPS = {
    postcssPlugin: true,
    prepare: true,
    Once: true,
    Document: true,
    Root: true,
    Declaration: true,
    Rule: true,
    AtRule: true,
    Comment: true,
    DeclarationExit: true,
    RuleExit: true,
    AtRuleExit: true,
    CommentExit: true,
    RootExit: true,
    DocumentExit: true,
    OnceExit: true
};
const NOT_VISITORS = {
    postcssPlugin: true,
    prepare: true,
    Once: true
};
const CHILDREN = 0;
function isPromise(obj) {
    return typeof obj === 'object' && typeof obj.then === 'function';
}
function getEvents(node) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node.type];
    if (node.type === 'decl') {
        key = node.prop.toLowerCase();
    } else if (node.type === 'atrule') {
        key = node.name.toLowerCase();
    }
    if (key && node.append) {
        return [
            type,
            type + '-' + key,
            CHILDREN,
            type + 'Exit',
            type + 'Exit-' + key
        ];
    } else if (key) {
        return [
            type,
            type + '-' + key,
            type + 'Exit',
            type + 'Exit-' + key
        ];
    } else if (node.append) {
        return [
            type,
            CHILDREN,
            type + 'Exit'
        ];
    } else {
        return [
            type,
            type + 'Exit'
        ];
    }
}
function toStack(node) {
    let events;
    if (node.type === 'document') {
        events = [
            'Document',
            CHILDREN,
            'DocumentExit'
        ];
    } else if (node.type === 'root') {
        events = [
            'Root',
            CHILDREN,
            'RootExit'
        ];
    } else {
        events = getEvents(node);
    }
    return {
        node,
        events,
        eventIndex: 0,
        visitors: [],
        visitorIndex: 0,
        iterator: 0
    };
}
function cleanMarks(node) {
    node[isClean] = false;
    if (node.nodes) node.nodes.forEach((i)=>cleanMarks(i));
    return node;
}
let postcss = {};
class LazyResult {
    constructor(processor, css, opts){
        this.stringified = false;
        this.processed = false;
        let root;
        if (typeof css === 'object' && css !== null && (css.type === 'root' || css.type === 'document')) {
            root = cleanMarks(css);
        } else if (css instanceof LazyResult || css instanceof Result) {
            root = cleanMarks(css.root);
            if (css.map) {
                if (typeof opts.map === 'undefined') opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser = parse;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;
            try {
                root = parser(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root && !root[my]) {
                Container.rebuild(root);
            }
        }
        this.result = new Result(processor, root, opts);
        this.helpers = {
            ...postcss,
            result: this.result,
            postcss
        };
        this.plugins = this.processor.plugins.map((plugin)=>{
            if (typeof plugin === 'object' && plugin.prepare) {
                return {
                    ...plugin,
                    ...plugin.prepare(this.result)
                };
            } else {
                return plugin;
            }
        });
    }
    get [Symbol.toStringTag]() {
        return 'LazyResult';
    }
    get processor() {
        return this.result.processor;
    }
    get opts() {
        return this.result.opts;
    }
    get css() {
        return this.stringify().css;
    }
    get content() {
        return this.stringify().content;
    }
    get map() {
        return this.stringify().map;
    }
    get root() {
        return this.sync().root;
    }
    get messages() {
        return this.sync().messages;
    }
    warnings() {
        return this.sync().warnings();
    }
    toString() {
        return this.css;
    }
    then(onFulfilled, onRejected) {
        if (process.env.NODE_ENV !== 'production') {
            if (!('from' in this.opts)) {
                warnOnce('Without `from` option PostCSS could generate wrong source map ' + 'and will not find Browserslist config. Set it to CSS file path ' + 'or to `undefined` to prevent this warning.');
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) {
            this.processing = this.runAsync();
        }
        return this.processing;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) {
            throw this.getAsyncError();
        }
        for (let plugin of this.plugins){
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) {
                throw this.getAsyncError();
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                this.walkSync(root);
            }
            if (this.listeners.OnceExit) {
                if (root.type === 'document') {
                    for (let subRoot of root.nodes){
                        this.visitSync(this.listeners.OnceExit, subRoot);
                    }
                } else {
                    this.visitSync(this.listeners.OnceExit, root);
                }
            }
        }
        return this.result;
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    walkSync(node) {
        node[isClean] = true;
        let events = getEvents(node);
        for (let event of events){
            if (event === CHILDREN) {
                if (node.nodes) {
                    node.each((child)=>{
                        if (!child[isClean]) this.walkSync(child);
                    });
                }
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node.toProxy())) return;
                }
            }
        }
    }
    visitSync(visitors, node) {
        for (let [plugin, visitor] of visitors){
            this.result.lastPlugin = plugin;
            let promise;
            try {
                promise = visitor(node, this.helpers);
            } catch (e) {
                throw this.handleError(e, node.proxyOf);
            }
            if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
                return true;
            }
            if (isPromise(promise)) {
                throw this.getAsyncError();
            }
        }
    }
    runOnRoot(plugin) {
        this.result.lastPlugin = plugin;
        try {
            if (typeof plugin === 'object' && plugin.Once) {
                if (this.result.root.type === 'document') {
                    let roots = this.result.root.nodes.map((root)=>plugin.Once(root, this.helpers));
                    if (isPromise(roots[0])) {
                        return Promise.all(roots);
                    }
                    return roots;
                }
                return plugin.Once(this.result.root, this.helpers);
            } else if (typeof plugin === 'function') {
                return plugin(this.result.root, this.result);
            }
        } catch (error) {
            throw this.handleError(error);
        }
    }
    getAsyncError() {
        throw new Error('Use process(css).then(cb) to work with async plugins');
    }
    handleError(error, node) {
        let plugin = this.result.lastPlugin;
        try {
            if (node) node.addToError(error);
            this.error = error;
            if (error.name === 'CssSyntaxError' && !error.plugin) {
                error.plugin = plugin.postcssPlugin;
                error.setMessage();
            } else if (plugin.postcssVersion) {
                if (process.env.NODE_ENV !== 'production') {
                    let pluginName = plugin.postcssPlugin;
                    let pluginVer = plugin.postcssVersion;
                    let runtimeVer = this.result.processor.version;
                    let a = pluginVer.split('.');
                    let b = runtimeVer.split('.');
                    if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
                        console.error('Unknown error from PostCSS plugin. Your current PostCSS ' + 'version is ' + runtimeVer + ', but ' + pluginName + ' uses ' + pluginVer + '. Perhaps this is the source of the error below.');
                    }
                }
            }
        } catch (err) {
            if (console && console.error) console.error(err);
        }
        return error;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i = 0; i < this.plugins.length; i++){
            let plugin = this.plugins[i];
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) {
                try {
                    await promise;
                } catch (error) {
                    throw this.handleError(error);
                }
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                let stack = [
                    toStack(root)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise(promise)) {
                        try {
                            await promise;
                        } catch (e) {
                            let node = stack[stack.length - 1].node;
                            throw this.handleError(e, node);
                        }
                    }
                }
            }
            if (this.listeners.OnceExit) {
                for (let [plugin, visitor] of this.listeners.OnceExit){
                    this.result.lastPlugin = plugin;
                    try {
                        if (root.type === 'document') {
                            let roots = root.nodes.map((subRoot)=>visitor(subRoot, this.helpers));
                            await Promise.all(roots);
                        } else {
                            await visitor(root, this.helpers);
                        }
                    } catch (e) {
                        throw this.handleError(e);
                    }
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin,
                cb
            ]);
        };
        for (let plugin of this.plugins){
            if (typeof plugin === 'object') {
                for(let event in plugin){
                    if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                        throw new Error(`Unknown event ${event} in ${plugin.postcssPlugin}. ` + `Try to update PostCSS (${this.processor.version} now).`);
                    }
                    if (!NOT_VISITORS[event]) {
                        if (typeof plugin[event] === 'object') {
                            for(let filter in plugin[event]){
                                if (filter === '*') {
                                    add(plugin, event, plugin[event][filter]);
                                } else {
                                    add(plugin, event + '-' + filter.toLowerCase(), plugin[event][filter]);
                                }
                            }
                        } else if (typeof plugin[event] === 'function') {
                            add(plugin, event, plugin[event]);
                        }
                    }
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node , visitors  } = visit;
        if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
                visit.visitors = [];
                visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin;
            try {
                return visitor(node.toProxy(), this.helpers);
            } catch (e) {
                throw this.handleError(e, node);
            }
        }
        if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while(child = node.nodes[node.indexes[iterator]]){
                node.indexes[iterator] += 1;
                if (!child[isClean]) {
                    child[isClean] = true;
                    stack.push(toStack(child));
                    return;
                }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
        }
        let events = visit.events;
        while(visit.eventIndex < events.length){
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
                if (node.nodes && node.nodes.length) {
                    node[isClean] = true;
                    visit.iterator = node.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
}
LazyResult.registerPostcss = (dependant)=>{
    postcss = dependant;
};
module.exports = LazyResult;
LazyResult.default = LazyResult;
Root.registerLazyResult(LazyResult);
Document.registerLazyResult(LazyResult);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let { isClean , my  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/symbols.js (ecmascript)");
let Declaration = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/declaration.js (ecmascript)");
let Comment = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/comment.js (ecmascript)");
let Node = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/node.js (ecmascript)");
let parse, Rule, AtRule, Root;
function cleanSource(nodes) {
    return nodes.map((i)=>{
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}
function markDirtyUp(node) {
    node[isClean] = false;
    if (node.proxyOf.nodes) {
        for (let i of node.proxyOf.nodes){
            markDirtyUp(i);
        }
    }
}
class Container extends Node {
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    each(callback) {
        if (!this.proxyOf.nodes) return undefined;
        let iterator = this.getIterator();
        let index, result;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index], index);
            if (result === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result;
    }
    walk(callback) {
        return this.each((child, i)=>{
            let result;
            try {
                result = callback(child, i);
            } catch (e) {
                throw child.addToError(e);
            }
            if (result !== false && child.walk) {
                result = child.walk(callback);
            }
            return result;
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i)=>{
                if (child.type === 'decl') {
                    return callback(child, i);
                }
            });
        }
        if (prop instanceof RegExp) {
            return this.walk((child, i)=>{
                if (child.type === 'decl' && prop.test(child.prop)) {
                    return callback(child, i);
                }
            });
        }
        return this.walk((child, i)=>{
            if (child.type === 'decl' && child.prop === prop) {
                return callback(child, i);
            }
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i)=>{
                if (child.type === 'rule') {
                    return callback(child, i);
                }
            });
        }
        if (selector instanceof RegExp) {
            return this.walk((child, i)=>{
                if (child.type === 'rule' && selector.test(child.selector)) {
                    return callback(child, i);
                }
            });
        }
        return this.walk((child, i)=>{
            if (child.type === 'rule' && child.selector === selector) {
                return callback(child, i);
            }
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i)=>{
                if (child.type === 'atrule') {
                    return callback(child, i);
                }
            });
        }
        if (name instanceof RegExp) {
            return this.walk((child, i)=>{
                if (child.type === 'atrule' && name.test(child.name)) {
                    return callback(child, i);
                }
            });
        }
        return this.walk((child, i)=>{
            if (child.type === 'atrule' && child.name === name) {
                return callback(child, i);
            }
        });
    }
    walkComments(callback) {
        return this.walk((child, i)=>{
            if (child.type === 'comment') {
                return callback(child, i);
            }
        });
    }
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node of nodes)this.proxyOf.nodes.push(node);
        }
        this.markDirty();
        return this;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, 'prepend').reverse();
            for (let node of nodes)this.proxyOf.nodes.unshift(node);
            for(let id in this.indexes){
                this.indexes[id] = this.indexes[id] + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) {
            for (let node of this.nodes)node.cleanRaws(keepBetween);
        }
    }
    insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type = existIndex === 0 ? 'prepend' : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex <= index) {
                this.indexes[id] = index + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node of nodes)this.proxyOf.nodes.splice(existIndex + 1, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (existIndex < index) {
                this.indexes[id] = index + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = undefined;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (index >= child) {
                this.indexes[id] = index - 1;
            }
        }
        this.markDirty();
        return this;
    }
    removeAll() {
        for (let node of this.proxyOf.nodes)node.parent = undefined;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    index(child) {
        if (typeof child === 'number') return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    get first() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    normalize(nodes, sample) {
        if (typeof nodes === 'string') {
            nodes = cleanSource(parse(nodes).nodes);
        } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i of nodes){
                if (i.parent) i.parent.removeChild(i, 'ignore');
            }
        } else if (nodes.type === 'root' && this.type !== 'document') {
            nodes = nodes.nodes.slice(0);
            for (let i of nodes){
                if (i.parent) i.parent.removeChild(i, 'ignore');
            }
        } else if (nodes.type) {
            nodes = [
                nodes
            ];
        } else if (nodes.prop) {
            if (typeof nodes.value === 'undefined') {
                throw new Error('Value field is missed in node creation');
            } else if (typeof nodes.value !== 'string') {
                nodes.value = String(nodes.value);
            }
            nodes = [
                new Declaration(nodes)
            ];
        } else if (nodes.selector) {
            nodes = [
                new Rule(nodes)
            ];
        } else if (nodes.name) {
            nodes = [
                new AtRule(nodes)
            ];
        } else if (nodes.text) {
            nodes = [
                new Comment(nodes)
            ];
        } else {
            throw new Error('Unknown node type in node creation');
        }
        let processed = nodes.map((i)=>{
            if (!i[my]) Container.rebuild(i);
            i = i.proxyOf;
            if (i.parent) i.parent.removeChild(i);
            if (i[isClean]) markDirtyUp(i);
            if (typeof i.raws.before === 'undefined') {
                if (sample && typeof sample.raws.before !== 'undefined') {
                    i.raws.before = sample.raws.before.replace(/\S/g, '');
                }
            }
            i.parent = this.proxyOf;
            return i;
        });
        return processed;
    }
    getProxyProcessor() {
        return {
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'name' || prop === 'params' || prop === 'selector') {
                    node.markDirty();
                }
                return true;
            },
            get (node, prop) {
                if (prop === 'proxyOf') {
                    return node;
                } else if (!node[prop]) {
                    return node[prop];
                } else if (prop === 'each' || typeof prop === 'string' && prop.startsWith('walk')) {
                    return (...args)=>{
                        return node[prop](...args.map((i)=>{
                            if (typeof i === 'function') {
                                return (child, index)=>i(child.toProxy(), index);
                            } else {
                                return i;
                            }
                        }));
                    };
                } else if (prop === 'every' || prop === 'some') {
                    return (cb)=>{
                        return node[prop]((child, ...other)=>cb(child.toProxy(), ...other));
                    };
                } else if (prop === 'root') {
                    return ()=>node.root().toProxy();
                } else if (prop === 'nodes') {
                    return node.nodes.map((i)=>i.toProxy());
                } else if (prop === 'first' || prop === 'last') {
                    return node[prop].toProxy();
                } else {
                    return node[prop];
                }
            }
        };
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
}
Container.registerParse = (dependant)=>{
    parse = dependant;
};
Container.registerRule = (dependant)=>{
    Rule = dependant;
};
Container.registerAtRule = (dependant)=>{
    AtRule = dependant;
};
Container.registerRoot = (dependant)=>{
    Root = dependant;
};
module.exports = Container;
Container.default = Container;
Container.rebuild = (node)=>{
    if (node.type === 'atrule') {
        Object.setPrototypeOf(node, AtRule.prototype);
    } else if (node.type === 'rule') {
        Object.setPrototypeOf(node, Rule.prototype);
    } else if (node.type === 'decl') {
        Object.setPrototypeOf(node, Declaration.prototype);
    } else if (node.type === 'comment') {
        Object.setPrototypeOf(node, Comment.prototype);
    } else if (node.type === 'root') {
        Object.setPrototypeOf(node, Root.prototype);
    }
    node[my] = true;
    if (node.nodes) {
        node.nodes.forEach((child)=>{
            Container.rebuild(child);
        });
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/processor.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let NoWorkResult = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/no-work-result.js (ecmascript)");
let LazyResult = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/lazy-result.js (ecmascript)");
let Document = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/document.js (ecmascript)");
let Root = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/root.js (ecmascript)");
class Processor {
    constructor(plugins = []){
        this.version = '8.4.21';
        this.plugins = this.normalize(plugins);
    }
    use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin
        ]));
        return this;
    }
    process(css, opts = {}) {
        if (this.plugins.length === 0 && typeof opts.parser === 'undefined' && typeof opts.stringifier === 'undefined' && typeof opts.syntax === 'undefined') {
            return new NoWorkResult(this, css, opts);
        } else {
            return new LazyResult(this, css, opts);
        }
    }
    normalize(plugins) {
        let normalized = [];
        for (let i of plugins){
            if (i.postcss === true) {
                i = i();
            } else if (i.postcss) {
                i = i.postcss;
            }
            if (typeof i === 'object' && Array.isArray(i.plugins)) {
                normalized = normalized.concat(i.plugins);
            } else if (typeof i === 'object' && i.postcssPlugin) {
                normalized.push(i);
            } else if (typeof i === 'function') {
                normalized.push(i);
            } else if (typeof i === 'object' && (i.parse || i.stringify)) {
                if (process.env.NODE_ENV !== 'production') {
                    throw new Error('PostCSS syntaxes cannot be used as plugins. Instead, please use ' + 'one of the syntax/parser/stringifier options as outlined ' + 'in your PostCSS runner documentation.');
                }
            } else {
                throw new Error(i + ' is not a PostCSS plugin');
            }
        }
        return normalized;
    }
}
module.exports = Processor;
Processor.default = Processor;
Root.registerProcessor(Processor);
Document.registerProcessor(Processor);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringify.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Stringifier = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringifier.js (ecmascript)");
function stringify(node, builder) {
    let str = new Stringifier(builder);
    str.stringify(node);
}
module.exports = stringify;
stringify.default = stringify;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/fromJSON.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Declaration = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/declaration.js (ecmascript)");
let PreviousMap = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/previous-map.js (ecmascript)");
let Comment = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/comment.js (ecmascript)");
let AtRule = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/at-rule.js (ecmascript)");
let Input = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/input.js (ecmascript)");
let Root = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/root.js (ecmascript)");
let Rule = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/rule.js (ecmascript)");
function fromJSON(json, inputs) {
    if (Array.isArray(json)) return json.map((n)=>fromJSON(n));
    let { inputs: ownInputs , ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input of ownInputs){
            let inputHydrated = {
                ...input,
                __proto__: Input.prototype
            };
            if (inputHydrated.map) {
                inputHydrated.map = {
                    ...inputHydrated.map,
                    __proto__: PreviousMap.prototype
                };
            }
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) {
        defaults.nodes = json.nodes.map((n)=>fromJSON(n, inputs));
    }
    if (defaults.source) {
        let { inputId , ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) {
            defaults.source.input = inputs[inputId];
        }
    }
    if (defaults.type === 'root') {
        return new Root(defaults);
    } else if (defaults.type === 'decl') {
        return new Declaration(defaults);
    } else if (defaults.type === 'rule') {
        return new Rule(defaults);
    } else if (defaults.type === 'comment') {
        return new Comment(defaults);
    } else if (defaults.type === 'atrule') {
        return new AtRule(defaults);
    } else {
        throw new Error('Unknown node type: ' + json.type);
    }
}
module.exports = fromJSON;
fromJSON.default = fromJSON;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/document.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Container = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)");
let LazyResult, Processor;
class Document extends Container {
    constructor(defaults){
        super({
            type: 'document',
            ...defaults
        });
        if (!this.nodes) {
            this.nodes = [];
        }
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Document.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Document.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Document;
Document.default = Document;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/warning.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
class Warning {
    constructor(text, opts = {}){
        this.type = 'warning';
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) {
            return this.node.error(this.text, {
                plugin: this.plugin,
                index: this.index,
                word: this.word
            }).message;
        }
        if (this.plugin) {
            return this.plugin + ': ' + this.text;
        }
        return this.text;
    }
}
module.exports = Warning;
Warning.default = Warning;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/comment.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Node = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/node.js (ecmascript)");
class Comment extends Node {
    constructor(defaults){
        super(defaults);
        this.type = 'comment';
    }
}
module.exports = Comment;
Comment.default = Comment;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/at-rule.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Container = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)");
class AtRule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'atrule';
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
}
module.exports = AtRule;
AtRule.default = AtRule;
Container.registerAtRule(AtRule);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/result.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Warning = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/warning.js (ecmascript)");
class Result {
    constructor(processor, root, opts){
        this.processor = processor;
        this.messages = [];
        this.root = root;
        this.opts = opts;
        this.css = undefined;
        this.map = undefined;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
                opts.plugin = this.lastPlugin.postcssPlugin;
            }
        }
        let warning = new Warning(text, opts);
        this.messages.push(warning);
        return warning;
    }
    warnings() {
        return this.messages.filter((i)=>i.type === 'warning');
    }
    get content() {
        return this.css;
    }
}
module.exports = Result;
Result.default = Result;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/input.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let { SourceMapConsumer , SourceMapGenerator  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js (ecmascript)");
let { fileURLToPath , pathToFileURL  } = __turbopack_external_require__('url');
let { resolve , isAbsolute  } = __turbopack_external_require__('path');
let { nanoid  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/nanoid@3.3.4/node_modules/nanoid/non-secure/index.cjs (ecmascript)");
let terminalHighlight = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/terminal-highlight.js (ecmascript)");
let CssSyntaxError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/css-syntax-error.js (ecmascript)");
let PreviousMap = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/previous-map.js (ecmascript)");
let fromOffsetCache = Symbol('fromOffsetCache');
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(resolve && isAbsolute);
class Input {
    constructor(css, opts = {}){
        if (css === null || typeof css === 'undefined' || typeof css === 'object' && !css.toString) {
            throw new Error(`PostCSS received ${css} instead of CSS string`);
        }
        this.css = css.toString();
        if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else {
            this.hasBOM = false;
        }
        if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
                this.file = opts.from;
            } else {
                this.file = resolve(opts.from);
            }
        }
        if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) {
            this.id = '<input css ' + nanoid(6) + '>';
        }
        if (this.map) this.map.file = this.from;
    }
    fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
            let lines = this.css.split('\n');
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for(let i = 0, l = lines.length; i < l; i++){
                lineToIndex[i] = prevIndex;
                prevIndex += lines[i].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
        } else {
            lineToIndex = this[fromOffsetCache];
        }
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) {
            min = lineToIndex.length - 1;
        } else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) {
                    max = mid - 1;
                } else if (offset >= lineToIndex[mid + 1]) {
                    min = mid + 1;
                } else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            line: min + 1,
            col: offset - lineToIndex[min] + 1
        };
    }
    error(message, line, column, opts = {}) {
        let result, endLine, endColumn;
        if (line && typeof line === 'object') {
            let start = line;
            let end = column;
            if (typeof start.offset === 'number') {
                let pos = this.fromOffset(start.offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
            }
            if (typeof end.offset === 'number') {
                let pos = this.fromOffset(end.offset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
            }
        } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) {
            result = new CssSyntaxError(message, origin.endLine === undefined ? origin.line : {
                line: origin.line,
                column: origin.column
            }, origin.endLine === undefined ? origin.column : {
                line: origin.endLine,
                column: origin.endColumn
            }, origin.source, origin.file, opts.plugin);
        } else {
            result = new CssSyntaxError(message, endLine === undefined ? line : {
                line,
                column
            }, endLine === undefined ? column : {
                line: endLine,
                column: endColumn
            }, this.css, this.file, opts.plugin);
        }
        result.input = {
            line,
            column,
            endLine,
            endColumn,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL) {
                result.input.url = pathToFileURL(this.file).toString();
            }
            result.input.file = this.file;
        }
        return result;
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            line,
            column
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === 'number') {
            to = consumer.originalPositionFor({
                line: endLine,
                column: endColumn
            });
        }
        let fromUrl;
        if (isAbsolute(from.source)) {
            fromUrl = pathToFileURL(from.source);
        } else {
            fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        }
        let result = {
            url: fromUrl.toString(),
            line: from.line,
            column: from.column,
            endLine: to && to.line,
            endColumn: to && to.column
        };
        if (fromUrl.protocol === 'file:') {
            if (fileURLToPath) {
                result.file = fileURLToPath(fromUrl);
            } else {
                throw new Error(`file: protocol is not available in this PostCSS build`);
            }
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result.source = source;
        return result;
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) {
            return file;
        }
        return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file);
    }
    get from() {
        return this.file || this.id;
    }
    toJSON() {
        let json = {};
        for (let name of [
            'hasBOM',
            'css',
            'file',
            'id'
        ]){
            if (this[name] != null) {
                json[name] = this[name];
            }
        }
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) {
                json.map.consumerCache = undefined;
            }
        }
        return json;
    }
}
module.exports = Input;
Input.default = Input;
if (terminalHighlight && terminalHighlight.registerInput) {
    terminalHighlight.registerInput(Input);
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/parse.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Container = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)");
let Parser = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/parser.js (ecmascript)");
let Input = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/input.js (ecmascript)");
function parse(css, opts) {
    let input = new Input(css, opts);
    let parser = new Parser(input);
    try {
        parser.parse();
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            if (e.name === 'CssSyntaxError' && opts && opts.from) {
                if (/\.scss$/i.test(opts.from)) {
                    e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
                } else if (/\.sass/i.test(opts.from)) {
                    e.message += '\nYou tried to parse Sass with ' + 'the standard CSS parser; ' + 'try again with the postcss-sass parser';
                } else if (/\.less$/i.test(opts.from)) {
                    e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
                }
            }
        }
        throw e;
    }
    return parser.root;
}
module.exports = parse;
parse.default = parse;
Container.registerParse(parse);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/list.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let list = {
    split (string, separators, last) {
        let array = [];
        let current = '';
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = '';
        let escape = false;
        for (let letter of string){
            if (escape) {
                escape = false;
            } else if (letter === '\\') {
                escape = true;
            } else if (inQuote) {
                if (letter === prevQuote) {
                    inQuote = false;
                }
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === '(') {
                func += 1;
            } else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else {
                current += letter;
            }
        }
        if (last || current !== '') array.push(current.trim());
        return array;
    },
    space (string) {
        let spaces = [
            ' ',
            '\n',
            '\t'
        ];
        return list.split(string, spaces);
    },
    comma (string) {
        return list.split(string, [
            ','
        ], true);
    }
};
module.exports = list;
list.default = list;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/rule.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Container = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)");
let list = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/list.js (ecmascript)");
class Rule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'rule';
        if (!this.nodes) this.nodes = [];
    }
    get selectors() {
        return list.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
        this.selector = values.join(sep);
    }
}
module.exports = Rule;
Rule.default = Rule;
Container.registerRule(Rule);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/root.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Container = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/container.js (ecmascript)");
let LazyResult, Processor;
class Root extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'root';
        if (!this.nodes) this.nodes = [];
    }
    removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[index].raws.before;
        }
        return super.removeChild(child);
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === 'prepend') {
                if (this.nodes.length > 1) {
                    sample.raws.before = this.nodes[1].raws.before;
                } else {
                    delete sample.raws.before;
                }
            } else if (this.first !== sample) {
                for (let node of nodes){
                    node.raws.before = sample.raws.before;
                }
            }
        }
        return nodes;
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Root.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Root.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Root;
Root.default = Root;
Container.registerRoot(Root);

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/node.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let { isClean , my  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/symbols.js (ecmascript)");
let CssSyntaxError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/css-syntax-error.js (ecmascript)");
let Stringifier = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringifier.js (ecmascript)");
let stringify = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringify.js (ecmascript)");
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i)) {
            continue;
        }
        if (i === 'proxyCache') continue;
        let value = obj[i];
        let type = typeof value;
        if (i === 'parent' && type === 'object') {
            if (parent) cloned[i] = parent;
        } else if (i === 'source') {
            cloned[i] = value;
        } else if (Array.isArray(value)) {
            cloned[i] = value.map((j)=>cloneNode(j, cloned));
        } else {
            if (type === 'object' && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }
    return cloned;
}
class Node {
    constructor(defaults = {}){
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for(let name in defaults){
            if (name === 'nodes') {
                this.nodes = [];
                for (let node of defaults[name]){
                    if (typeof node.clone === 'function') {
                        this.append(node.clone());
                    } else {
                        this.append(node);
                    }
                }
            } else {
                this[name] = defaults[name];
            }
        }
    }
    error(message, opts = {}) {
        if (this.source) {
            let { start , end  } = this.rangeBy(opts);
            return this.source.input.error(message, {
                line: start.line,
                column: start.column
            }, {
                line: end.line,
                column: end.column
            }, opts);
        }
        return new CssSyntaxError(message);
    }
    warn(result, text, opts) {
        let data = {
            node: this
        };
        for(let i in opts)data[i] = opts[i];
        return result.warn(text, data);
    }
    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.parent = undefined;
        return this;
    }
    toString(stringifier = stringify) {
        if (stringifier.stringify) stringifier = stringifier.stringify;
        let result = '';
        stringifier(this, (i)=>{
            result += i;
        });
        return result;
    }
    assign(overrides = {}) {
        for(let name in overrides){
            this[name] = overrides[name];
        }
        return this;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides){
            cloned[name] = overrides[name];
        }
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes){
                if (node === this) {
                    foundSelf = true;
                } else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node);
                    bookmark = node;
                } else {
                    this.parent.insertBefore(bookmark, node);
                }
            }
            if (!foundSelf) {
                this.remove();
            }
        }
        return this;
    }
    next() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
    }
    prev() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    root() {
        let result = this;
        while(result.parent && result.parent.type !== 'document'){
            result = result.parent;
        }
        return result;
    }
    raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) {
                continue;
            }
            if (name === 'parent' || name === 'proxyCache') continue;
            let value = this[name];
            if (Array.isArray(value)) {
                fixed[name] = value.map((i)=>{
                    if (typeof i === 'object' && i.toJSON) {
                        return i.toJSON(null, inputs);
                    } else {
                        return i;
                    }
                });
            } else if (typeof value === 'object' && value.toJSON) {
                fixed[name] = value.toJSON(null, inputs);
            } else if (name === 'source') {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    inputId,
                    start: value.start,
                    end: value.end
                };
            } else {
                fixed[name] = value;
            }
        }
        if (emitInputs) {
            fixed.inputs = [
                ...inputs.keys()
            ].map((input)=>input.toJSON());
        }
        return fixed;
    }
    positionInside(index) {
        let string = this.toString();
        let column = this.source.start.column;
        let line = this.source.start.line;
        for(let i = 0; i < index; i++){
            if (string[i] === '\n') {
                column = 1;
                line += 1;
            } else {
                column += 1;
            }
        }
        return {
            line,
            column
        };
    }
    positionBy(opts) {
        let pos = this.source.start;
        if (opts.index) {
            pos = this.positionInside(opts.index);
        } else if (opts.word) {
            let index = this.toString().indexOf(opts.word);
            if (index !== -1) pos = this.positionInside(index);
        }
        return pos;
    }
    rangeBy(opts) {
        let start = {
            line: this.source.start.line,
            column: this.source.start.column
        };
        let end = this.source.end ? {
            line: this.source.end.line,
            column: this.source.end.column + 1
        } : {
            line: start.line,
            column: start.column + 1
        };
        if (opts.word) {
            let index = this.toString().indexOf(opts.word);
            if (index !== -1) {
                start = this.positionInside(index);
                end = this.positionInside(index + opts.word.length);
            }
        } else {
            if (opts.start) {
                start = {
                    line: opts.start.line,
                    column: opts.start.column
                };
            } else if (opts.index) {
                start = this.positionInside(opts.index);
            }
            if (opts.end) {
                end = {
                    line: opts.end.line,
                    column: opts.end.column
                };
            } else if (opts.endIndex) {
                end = this.positionInside(opts.endIndex);
            } else if (opts.index) {
                end = this.positionInside(opts.index + 1);
            }
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) {
            end = {
                line: start.line,
                column: start.column + 1
            };
        }
        return {
            start,
            end
        };
    }
    getProxyProcessor() {
        return {
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'prop' || prop === 'value' || prop === 'name' || prop === 'params' || prop === 'important' || prop === 'text') {
                    node.markDirty();
                }
                return true;
            },
            get (node, prop) {
                if (prop === 'proxyOf') {
                    return node;
                } else if (prop === 'root') {
                    return ()=>node.root().toProxy();
                } else {
                    return node[prop];
                }
            }
        };
    }
    toProxy() {
        if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
        }
        return this.proxyCache;
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
    }
    markDirty() {
        if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while(next = next.parent){
                next[isClean] = false;
            }
        }
    }
    get proxyOf() {
        return this;
    }
}
module.exports = Node;
Node.default = Node;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/terminal-highlight.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let pico = __turbopack_require__("[project-with-next]/node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js (ecmascript)");
let tokenizer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/tokenize.js (ecmascript)");
let Input;
function registerInput(dependant) {
    Input = dependant;
}
const HIGHLIGHT_THEME = {
    'brackets': pico.cyan,
    'at-word': pico.cyan,
    'comment': pico.gray,
    'string': pico.green,
    'class': pico.yellow,
    'hash': pico.magenta,
    'call': pico.cyan,
    '(': pico.cyan,
    ')': pico.cyan,
    '{': pico.yellow,
    '}': pico.yellow,
    '[': pico.yellow,
    ']': pico.yellow,
    ':': pico.yellow,
    ';': pico.yellow
};
function getTokenType([type, value], processor) {
    if (type === 'word') {
        if (value[0] === '.') {
            return 'class';
        }
        if (value[0] === '#') {
            return 'hash';
        }
    }
    if (!processor.endOfFile()) {
        let next = processor.nextToken();
        processor.back(next);
        if (next[0] === 'brackets' || next[0] === '(') return 'call';
    }
    return type;
}
function terminalHighlight(css) {
    let processor = tokenizer(new Input(css), {
        ignoreErrors: true
    });
    let result = '';
    while(!processor.endOfFile()){
        let token = processor.nextToken();
        let color = HIGHLIGHT_THEME[getTokenType(token, processor)];
        if (color) {
            result += token[1].split(/\r?\n/).map((i)=>color(i)).join('\n');
        } else {
            result += token[1];
        }
    }
    return result;
}
terminalHighlight.registerInput = registerInput;
module.exports = terminalHighlight;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/symbols.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
module.exports.isClean = Symbol('isClean');
module.exports.my = Symbol('my');

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/map-generator.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let { SourceMapConsumer , SourceMapGenerator  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js (ecmascript)");
let { dirname , resolve , relative , sep  } = __turbopack_external_require__('path');
let { pathToFileURL  } = __turbopack_external_require__('url');
let Input = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/input.js (ecmascript)");
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator {
    constructor(stringify, root, opts, cssString){
        this.stringify = stringify;
        this.mapOpts = opts.map || {};
        this.root = root;
        this.opts = opts;
        this.css = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
    }
    isMap() {
        if (typeof this.opts.map !== 'undefined') {
            return !!this.opts.map;
        }
        return this.previous().length > 0;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) {
                this.root.walk((node)=>{
                    if (node.source && node.source.input.map) {
                        let map = node.source.input.map;
                        if (!this.previousMaps.includes(map)) {
                            this.previousMaps.push(map);
                        }
                    }
                });
            } else {
                let input = new Input(this.css, this.opts);
                if (input.map) this.previousMaps.push(input.map);
            }
        }
        return this.previousMaps;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== 'undefined') {
            return this.mapOpts.inline;
        }
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== 'undefined' && annotation !== true) {
            return false;
        }
        if (this.previous().length) {
            return this.previous().some((i)=>i.inline);
        }
        return true;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== 'undefined') {
            return this.mapOpts.sourcesContent;
        }
        if (this.previous().length) {
            return this.previous().some((i)=>i.withContent());
        }
        return true;
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node;
            for(let i = this.root.nodes.length - 1; i >= 0; i--){
                node = this.root.nodes[i];
                if (node.type !== 'comment') continue;
                if (node.text.indexOf('# sourceMappingURL=') === 0) {
                    this.root.removeChild(i);
                }
            }
        } else if (this.css) {
            this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, '');
        }
    }
    setSourcesContent() {
        let already = {};
        if (this.root) {
            this.root.walk((node)=>{
                if (node.source) {
                    let from = node.source.input.from;
                    if (from && !already[from]) {
                        already[from] = true;
                        let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                        this.map.setSourceContent(fromUrl, node.source.input.css);
                    }
                }
            });
        } else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>';
            this.map.setSourceContent(from, this.css);
        }
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer(prev.text);
                if (map.sourcesContent) {
                    map.sourcesContent = map.sourcesContent.map(()=>null);
                }
            } else {
                map = prev.consumer();
            }
            this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
        }
    }
    isAnnotation() {
        if (this.isInline()) {
            return true;
        }
        if (typeof this.mapOpts.annotation !== 'undefined') {
            return this.mapOpts.annotation;
        }
        if (this.previous().length) {
            return this.previous().some((i)=>i.annotation);
        }
        return true;
    }
    toBase64(str) {
        if (Buffer) {
            return Buffer.from(str).toString('base64');
        } else {
            return window.btoa(unescape(encodeURIComponent(str)));
        }
    }
    addAnnotation() {
        let content;
        if (this.isInline()) {
            content = 'data:application/json;base64,' + this.toBase64(this.map.toString());
        } else if (typeof this.mapOpts.annotation === 'string') {
            content = this.mapOpts.annotation;
        } else if (typeof this.mapOpts.annotation === 'function') {
            content = this.mapOpts.annotation(this.opts.to, this.root);
        } else {
            content = this.outputFile() + '.map';
        }
        let eol = '\n';
        if (this.css.includes('\r\n')) eol = '\r\n';
        this.css += eol + '/*# sourceMappingURL=' + content + ' */';
    }
    outputFile() {
        if (this.opts.to) {
            return this.path(this.opts.to);
        } else if (this.opts.from) {
            return this.path(this.opts.from);
        } else {
            return 'to.css';
        }
    }
    generateMap() {
        if (this.root) {
            this.generateString();
        } else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev);
        } else {
            this.map = new SourceMapGenerator({
                file: this.outputFile()
            });
            this.map.addMapping({
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>',
                generated: {
                    line: 1,
                    column: 0
                },
                original: {
                    line: 1,
                    column: 0
                }
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) {
            return [
                this.css
            ];
        } else {
            return [
                this.css,
                this.map
            ];
        }
    }
    path(file) {
        if (file.indexOf('<') === 0) return file;
        if (/^\w+:\/\//.test(file)) return file;
        if (this.mapOpts.absolute) return file;
        let from = this.opts.to ? dirname(this.opts.to) : '.';
        if (typeof this.mapOpts.annotation === 'string') {
            from = dirname(resolve(from, this.mapOpts.annotation));
        }
        file = relative(from, file);
        return file;
    }
    toUrl(path) {
        if (sep === '\\') {
            path = path.replace(/\\/g, '/');
        }
        return encodeURI(path).replace(/[#?]/g, encodeURIComponent);
    }
    toFileUrl(path) {
        if (pathToFileURL) {
            return pathToFileURL(path).toString();
        } else {
            throw new Error('`map.absolute` option is not available in this PostCSS build');
        }
    }
    sourcePath(node) {
        if (this.mapOpts.from) {
            return this.toUrl(this.mapOpts.from);
        } else if (this.usesFileUrls) {
            return this.toFileUrl(node.source.input.from);
        } else {
            return this.toUrl(this.path(node.source.input.from));
        }
    }
    generateString() {
        this.css = '';
        this.map = new SourceMapGenerator({
            file: this.outputFile()
        });
        let line = 1;
        let column = 1;
        let noSource = '<no source>';
        let mapping = {
            source: '',
            generated: {
                line: 0,
                column: 0
            },
            original: {
                line: 0,
                column: 0
            }
        };
        let lines, last;
        this.stringify(this.root, (str, node, type)=>{
            this.css += str;
            if (node && type !== 'end') {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node.source && node.source.start) {
                    mapping.source = this.sourcePath(node);
                    mapping.original.line = node.source.start.line;
                    mapping.original.column = node.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf('\n');
                column = str.length - last;
            } else {
                column += str.length;
            }
            if (node && type !== 'start') {
                let p = node.parent || {
                    raws: {}
                };
                let childless = node.type === 'decl' || node.type === 'atrule' && !node.nodes;
                if (!childless || node !== p.last || p.raws.semicolon) {
                    if (node.source && node.source.end) {
                        mapping.source = this.sourcePath(node);
                        mapping.original.line = node.source.end.line;
                        mapping.original.column = node.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) {
            return this.generateMap();
        } else {
            let result = '';
            this.stringify(this.root, (i)=>{
                result += i;
            });
            return [
                result
            ];
        }
    }
}
module.exports = MapGenerator;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/warn-once.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let printed = {};
module.exports = function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== 'undefined' && console.warn) {
        console.warn(message);
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/no-work-result.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let MapGenerator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/map-generator.js (ecmascript)");
let stringify = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringify.js (ecmascript)");
let warnOnce = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/warn-once.js (ecmascript)");
let parse = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/parse.js (ecmascript)");
const Result = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/result.js (ecmascript)");
class NoWorkResult {
    constructor(processor, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor;
        this._css = css;
        this._opts = opts;
        this._map = undefined;
        let root;
        let str = stringify;
        this.result = new Result(this._processor, root, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, 'root', {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator(str, root, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) {
                this.result.css = generatedCSS;
            }
            if (generatedMap) {
                this.result.map = generatedMap;
            }
        }
    }
    get [Symbol.toStringTag]() {
        return 'NoWorkResult';
    }
    get processor() {
        return this.result.processor;
    }
    get opts() {
        return this.result.opts;
    }
    get css() {
        return this.result.css;
    }
    get content() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get root() {
        if (this._root) {
            return this._root;
        }
        let root;
        let parser = parse;
        try {
            root = parser(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) {
            throw this.error;
        } else {
            this._root = root;
            return root;
        }
    }
    get messages() {
        return [];
    }
    warnings() {
        return [];
    }
    toString() {
        return this._css;
    }
    then(onFulfilled, onRejected) {
        if (process.env.NODE_ENV !== 'production') {
            if (!('from' in this._opts)) {
                warnOnce('Without `from` option PostCSS could generate wrong source map ' + 'and will not find Browserslist config. Set it to CSS file path ' + 'or to `undefined` to prevent this warning.');
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
}
module.exports = NoWorkResult;
NoWorkResult.default = NoWorkResult;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/stringifier.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
const DEFAULT_RAW = {
    colon: ': ',
    indent: '    ',
    beforeDecl: '\n',
    beforeRule: '\n',
    beforeOpen: ' ',
    beforeClose: '\n',
    beforeComment: '\n',
    after: '\n',
    emptyBody: '',
    commentLeft: ' ',
    commentRight: ' ',
    semicolon: false
};
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
class Stringifier {
    constructor(builder){
        this.builder = builder;
    }
    stringify(node, semicolon) {
        if (!this[node.type]) {
            throw new Error('Unknown AST node type ' + node.type + '. ' + 'Maybe you need to change PostCSS stringifier.');
        }
        this[node.type](node, semicolon);
    }
    document(node) {
        this.body(node);
    }
    root(node) {
        this.body(node);
        if (node.raws.after) this.builder(node.raws.after);
    }
    comment(node) {
        let left = this.raw(node, 'left', 'commentLeft');
        let right = this.raw(node, 'right', 'commentRight');
        this.builder('/*' + left + node.text + right + '*/', node);
    }
    decl(node, semicolon) {
        let between = this.raw(node, 'between', 'colon');
        let string = node.prop + between + this.rawValue(node, 'value');
        if (node.important) {
            string += node.raws.important || ' !important';
        }
        if (semicolon) string += ';';
        this.builder(string, node);
    }
    rule(node) {
        this.block(node, this.rawValue(node, 'selector'));
        if (node.raws.ownSemicolon) {
            this.builder(node.raws.ownSemicolon, node, 'end');
        }
    }
    atrule(node, semicolon) {
        let name = '@' + node.name;
        let params = node.params ? this.rawValue(node, 'params') : '';
        if (typeof node.raws.afterName !== 'undefined') {
            name += node.raws.afterName;
        } else if (params) {
            name += ' ';
        }
        if (node.nodes) {
            this.block(node, name + params);
        } else {
            let end = (node.raws.between || '') + (semicolon ? ';' : '');
            this.builder(name + params + end, node);
        }
    }
    body(node) {
        let last = node.nodes.length - 1;
        while(last > 0){
            if (node.nodes[last].type !== 'comment') break;
            last -= 1;
        }
        let semicolon = this.raw(node, 'semicolon');
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            let before = this.raw(child, 'before');
            if (before) this.builder(before);
            this.stringify(child, last !== i || semicolon);
        }
    }
    block(node, start) {
        let between = this.raw(node, 'between', 'beforeOpen');
        this.builder(start + between + '{', node, 'start');
        let after;
        if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, 'after');
        } else {
            after = this.raw(node, 'after', 'emptyBody');
        }
        if (after) this.builder(after);
        this.builder('}', node, 'end');
    }
    raw(node, own, detect) {
        let value;
        if (!detect) detect = own;
        if (own) {
            value = node.raws[own];
            if (typeof value !== 'undefined') return value;
        }
        let parent = node.parent;
        if (detect === 'before') {
            if (!parent || parent.type === 'root' && parent.first === node) {
                return '';
            }
            if (parent && parent.type === 'document') {
                return '';
            }
        }
        if (!parent) return DEFAULT_RAW[detect];
        let root = node.root();
        if (!root.rawCache) root.rawCache = {};
        if (typeof root.rawCache[detect] !== 'undefined') {
            return root.rawCache[detect];
        }
        if (detect === 'before' || detect === 'after') {
            return this.beforeAfter(node, detect);
        } else {
            let method = 'raw' + capitalize(detect);
            if (this[method]) {
                value = this[method](root, node);
            } else {
                root.walk((i)=>{
                    value = i.raws[own];
                    if (typeof value !== 'undefined') return false;
                });
            }
        }
        if (typeof value === 'undefined') value = DEFAULT_RAW[detect];
        root.rawCache[detect] = value;
        return value;
    }
    rawSemicolon(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length && i.last.type === 'decl') {
                value = i.raws.semicolon;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawEmptyBody(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length === 0) {
                value = i.raws.after;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawIndent(root) {
        if (root.raws.indent) return root.raws.indent;
        let value;
        root.walk((i)=>{
            let p = i.parent;
            if (p && p !== root && p.parent && p.parent === root) {
                if (typeof i.raws.before !== 'undefined') {
                    let parts = i.raws.before.split('\n');
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, '');
                    return false;
                }
            }
        });
        return value;
    }
    rawBeforeComment(root, node) {
        let value;
        root.walkComments((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) {
                    value = value.replace(/[^\n]+$/, '');
                }
                return false;
            }
        });
        if (typeof value === 'undefined') {
            value = this.raw(node, null, 'beforeDecl');
        } else if (value) {
            value = value.replace(/\S/g, '');
        }
        return value;
    }
    rawBeforeDecl(root, node) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) {
                    value = value.replace(/[^\n]+$/, '');
                }
                return false;
            }
        });
        if (typeof value === 'undefined') {
            value = this.raw(node, null, 'beforeRule');
        } else if (value) {
            value = value.replace(/\S/g, '');
        }
        return value;
    }
    rawBeforeRule(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && (i.parent !== root || root.first !== i)) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.includes('\n')) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeClose(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length > 0) {
                if (typeof i.raws.after !== 'undefined') {
                    value = i.raws.after;
                    if (value.includes('\n')) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeOpen(root) {
        let value;
        root.walk((i)=>{
            if (i.type !== 'decl') {
                value = i.raws.between;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawColon(root) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.between !== 'undefined') {
                value = i.raws.between.replace(/[^\s:]/g, '');
                return false;
            }
        });
        return value;
    }
    beforeAfter(node, detect) {
        let value;
        if (node.type === 'decl') {
            value = this.raw(node, null, 'beforeDecl');
        } else if (node.type === 'comment') {
            value = this.raw(node, null, 'beforeComment');
        } else if (detect === 'before') {
            value = this.raw(node, null, 'beforeRule');
        } else {
            value = this.raw(node, null, 'beforeClose');
        }
        let buf = node.parent;
        let depth = 0;
        while(buf && buf.type !== 'root'){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes('\n')) {
            let indent = this.raw(node, null, 'indent');
            if (indent.length) {
                for(let step = 0; step < depth; step++)value += indent;
            }
        }
        return value;
    }
    rawValue(node, prop) {
        let value = node[prop];
        let raw = node.raws[prop];
        if (raw && raw.value === value) {
            return raw.raw;
        }
        return value;
    }
}
module.exports = Stringifier;
Stringifier.default = Stringifier;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/previous-map.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let { SourceMapConsumer , SourceMapGenerator  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js (ecmascript)");
let { existsSync , readFileSync  } = __turbopack_external_require__('fs');
let { dirname , join  } = __turbopack_external_require__('path');
function fromBase64(str) {
    if (Buffer) {
        return Buffer.from(str, 'base64').toString();
    } else {
        return window.atob(str);
    }
}
class PreviousMap {
    constructor(css, opts){
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, 'data:');
        let prev = opts.map ? opts.map.prev : undefined;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) {
            this.mapFile = opts.from;
        }
        if (this.mapFile) this.root = dirname(this.mapFile);
        if (text) this.text = text;
    }
    consumer() {
        if (!this.consumerCache) {
            this.consumerCache = new SourceMapConsumer(this.text);
        }
        return this.consumerCache;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
    startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
    }
    getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim();
    }
    loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!comments) return;
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf('*/', start);
        if (start > -1 && end > -1) {
            this.annotation = this.getAnnotationURL(css.substring(start, end));
        }
    }
    decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        if (charsetUri.test(text) || uri.test(text)) {
            return decodeURIComponent(text.substr(RegExp.lastMatch.length));
        }
        if (baseCharsetUri.test(text) || baseUri.test(text)) {
            return fromBase64(text.substr(RegExp.lastMatch.length));
        }
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error('Unsupported source map encoding ' + encoding);
    }
    loadFile(path) {
        this.root = dirname(path);
        if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, 'utf-8').toString().trim();
        }
    }
    loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
            if (typeof prev === 'string') {
                return prev;
            } else if (typeof prev === 'function') {
                let prevPath = prev(file);
                if (prevPath) {
                    let map = this.loadFile(prevPath);
                    if (!map) {
                        throw new Error('Unable to load previous source map: ' + prevPath.toString());
                    }
                    return map;
                }
            } else if (prev instanceof SourceMapConsumer) {
                return SourceMapGenerator.fromSourceMap(prev).toString();
            } else if (prev instanceof SourceMapGenerator) {
                return prev.toString();
            } else if (this.isMap(prev)) {
                return JSON.stringify(prev);
            } else {
                throw new Error('Unsupported previous source map format: ' + prev.toString());
            }
        } else if (this.inline) {
            return this.decodeInline(this.annotation);
        } else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join(dirname(file), map);
            return this.loadFile(map);
        }
    }
    isMap(map) {
        if (typeof map !== 'object') return false;
        return typeof map.mappings === 'string' || typeof map._mappings === 'string' || Array.isArray(map.sections);
    }
}
module.exports = PreviousMap;
PreviousMap.default = PreviousMap;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/parser.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
let Declaration = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/declaration.js (ecmascript)");
let tokenizer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/tokenize.js (ecmascript)");
let Comment = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/comment.js (ecmascript)");
let AtRule = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/at-rule.js (ecmascript)");
let Root = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/root.js (ecmascript)");
let Rule = __turbopack_require__("[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/rule.js (ecmascript)");
const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
};
function findLastWithPosition(tokens) {
    for(let i = tokens.length - 1; i >= 0; i--){
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
class Parser {
    constructor(input){
        this.input = input;
        this.root = new Root();
        this.current = this.root;
        this.spaces = '';
        this.semicolon = false;
        this.customProperty = false;
        this.createTokenizer();
        this.root.source = {
            input,
            start: {
                offset: 0,
                line: 1,
                column: 1
            }
        };
    }
    createTokenizer() {
        this.tokenizer = tokenizer(this.input);
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case 'space':
                    this.spaces += token[1];
                    break;
                case ';':
                    this.freeSemicolon(token);
                    break;
                case '}':
                    this.end(token);
                    break;
                case 'comment':
                    this.comment(token);
                    break;
                case 'at-word':
                    this.atrule(token);
                    break;
                case '{':
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    comment(token) {
        let node = new Comment();
        this.init(node, token[2]);
        node.source.end = this.getPosition(token[3] || token[2]);
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node.text = '';
            node.raws.left = text;
            node.raws.right = '';
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
        }
    }
    emptyRule(token) {
        let node = new Rule();
        this.init(node, token[2]);
        node.selector = '';
        node.raws.between = '';
        this.current = node;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith('--');
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === '(' || type === '[') {
                if (!bracket) bracket = token;
                brackets.push(type === '(' ? ')' : ']');
            } else if (customProperty && colon && type === '{') {
                if (!bracket) bracket = token;
                brackets.push('}');
            } else if (brackets.length === 0) {
                if (type === ';') {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else {
                        break;
                    }
                } else if (type === '{') {
                    this.rule(tokens);
                    return;
                } else if (type === '}') {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ':') {
                    colon = true;
                }
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) {
                while(tokens.length){
                    token = tokens[tokens.length - 1][0];
                    if (token !== 'space' && token !== 'comment') break;
                    this.tokenizer.back(tokens.pop());
                }
            }
            this.decl(tokens, customProperty);
        } else {
            this.unknownWord(tokens);
        }
    }
    rule(tokens) {
        tokens.pop();
        let node = new Rule();
        this.init(node, tokens[0][2]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, 'selector', tokens);
        this.current = node;
    }
    decl(tokens, customProperty) {
        let node = new Declaration();
        this.init(node, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ';') {
            this.semicolon = true;
            tokens.pop();
        }
        node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        while(tokens[0][0] !== 'word'){
            if (tokens.length === 1) this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
        }
        node.source.start = this.getPosition(tokens[0][2]);
        node.prop = '';
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ':' || type === 'space' || type === 'comment') {
                break;
            }
            node.prop += tokens.shift()[1];
        }
        node.raws.between = '';
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ':') {
                node.raws.between += token[1];
                break;
            } else {
                if (token[0] === 'word' && /\w/.test(token[1])) {
                    this.unknownWord([
                        token
                    ]);
                }
                node.raws.between += token[1];
            }
        }
        if (node.prop[0] === '_' || node.prop[0] === '*') {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i = tokens.length - 1; i >= 0; i--){
            token = tokens[i];
            if (token[1].toLowerCase() === '!important') {
                node.important = true;
                let string = this.stringFrom(tokens, i);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== ' !important') node.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === 'important') {
                let cache = tokens.slice(0);
                let str = '';
                for(let j = i; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().indexOf('!') === 0 && type !== 'space') {
                        break;
                    }
                    str = cache.pop()[1] + str;
                }
                if (str.trim().indexOf('!') === 0) {
                    node.important = true;
                    node.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== 'space' && token[0] !== 'comment') {
                break;
            }
        }
        let hasWord = tokens.some((i)=>i[0] !== 'space' && i[0] !== 'comment');
        if (hasWord) {
            node.raws.between += firstSpaces.map((i)=>i[1]).join('');
            firstSpaces = [];
        }
        this.raw(node, 'value', firstSpaces.concat(tokens), customProperty);
        if (node.value.includes(':') && !customProperty) {
            this.checkMissedSemicolon(tokens);
        }
    }
    atrule(token) {
        let node = new AtRule();
        node.name = token[1].slice(1);
        if (node.name === '') {
            this.unnamedAtrule(node, token);
        }
        this.init(node, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === '(' || type === '[') {
                brackets.push(type === '(' ? ')' : ']');
            } else if (type === '{' && brackets.length > 0) {
                brackets.push('}');
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
            }
            if (brackets.length === 0) {
                if (type === ';') {
                    node.source.end = this.getPosition(token[2]);
                    this.semicolon = true;
                    break;
                } else if (type === '{') {
                    open = true;
                    break;
                } else if (type === '}') {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === 'space'){
                            prev = params[--shift];
                        }
                        if (prev) {
                            node.source.end = this.getPosition(prev[3] || prev[2]);
                        }
                    }
                    this.end(token);
                    break;
                } else {
                    params.push(token);
                }
            } else {
                params.push(token);
            }
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, 'params', params);
            if (last) {
                token = params[params.length - 1];
                node.source.end = this.getPosition(token[3] || token[2]);
                this.spaces = node.raws.between;
                node.raws.between = '';
            }
        } else {
            node.raws.afterName = '';
            node.params = '';
        }
        if (open) {
            node.nodes = [];
            this.current = node;
        }
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        this.spaces = '';
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current = this.current.parent;
        } else {
            this.unexpectedClose(token);
        }
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = '';
            }
        }
    }
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            offset,
            line: pos.line,
            column: pos.col
        };
    }
    init(node, offset) {
        this.current.push(node);
        node.source = {
            start: this.getPosition(offset),
            input: this.input
        };
        node.raws.before = this.spaces;
        this.spaces = '';
        if (node.type !== 'comment') this.semicolon = false;
    }
    raw(node, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = '';
        let clean = true;
        let next, prev;
        for(let i = 0; i < length; i += 1){
            token = tokens[i];
            type = token[0];
            if (type === 'space' && i === length - 1 && !customProperty) {
                clean = false;
            } else if (type === 'comment') {
                prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty';
                next = tokens[i + 1] ? tokens[i + 1][0] : 'empty';
                if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                    if (value.slice(-1) === ',') {
                        clean = false;
                    } else {
                        value += token[1];
                    }
                } else {
                    clean = false;
                }
            } else {
                value += token[1];
            }
        }
        if (!clean) {
            let raw = tokens.reduce((all, i)=>all + i[1], '');
            node.raws[prop] = {
                value,
                raw
            };
        }
        node[prop] = value;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = '';
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result = '';
        for(let i = from; i < tokens.length; i++){
            result += tokens[i][1];
        }
        tokens.splice(from, tokens.length - from);
        return result;
    }
    colon(tokens) {
        let brackets = 0;
        let token, type, prev;
        for (let [i, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === '(') {
                brackets += 1;
            }
            if (type === ')') {
                brackets -= 1;
            }
            if (brackets === 0 && type === ':') {
                if (!prev) {
                    this.doubleColon(token);
                } else if (prev[0] === 'word' && prev[1] === 'progid') {
                    continue;
                } else {
                    return i;
                }
            }
            prev = token;
        }
        return false;
    }
    unclosedBracket(bracket) {
        throw this.input.error('Unclosed bracket', {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error('Unknown word', {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unexpectedClose(token) {
        throw this.input.error('Unexpected }', {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error('Unclosed block', pos.line, pos.column);
    }
    doubleColon(token) {
        throw this.input.error('Double colon', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    unnamedAtrule(node, token) {
        throw this.input.error('At-rule without name', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    precheckMissedSemicolon() {}
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== 'space') {
                founded += 1;
                if (founded === 2) break;
            }
        }
        throw this.input.error('Missed semicolon', token[0] === 'word' ? token[3] + 1 : token[2]);
    }
}
module.exports = Parser;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/postcss@8.4.21/node_modules/postcss/lib/tokenize.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = '\\'.charCodeAt(0);
const SLASH = '/'.charCodeAt(0);
const NEWLINE = '\n'.charCodeAt(0);
const SPACE = ' '.charCodeAt(0);
const FEED = '\f'.charCodeAt(0);
const TAB = '\t'.charCodeAt(0);
const CR = '\r'.charCodeAt(0);
const OPEN_SQUARE = '['.charCodeAt(0);
const CLOSE_SQUARE = ']'.charCodeAt(0);
const OPEN_PARENTHESES = '('.charCodeAt(0);
const CLOSE_PARENTHESES = ')'.charCodeAt(0);
const OPEN_CURLY = '{'.charCodeAt(0);
const CLOSE_CURLY = '}'.charCodeAt(0);
const SEMICOLON = ';'.charCodeAt(0);
const ASTERISK = '*'.charCodeAt(0);
const COLON = ':'.charCodeAt(0);
const AT = '@'.charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
module.exports = function tokenizer(input, options = {}) {
    let css = input.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input.error('Unclosed ' + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                {
                    next = pos;
                    do {
                        next += 1;
                        code = css.charCodeAt(next);
                    }while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED)
                    currentToken = [
                        'space',
                        css.slice(pos, next)
                    ];
                    pos = next - 1;
                    break;
                }
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES:
                {
                    prev = buffer.length ? buffer.pop()[1] : '';
                    n = css.charCodeAt(pos + 1);
                    if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                        next = pos;
                        do {
                            escaped = false;
                            next = css.indexOf(')', next + 1);
                            if (next === -1) {
                                if (ignore || ignoreUnclosed) {
                                    next = pos;
                                    break;
                                } else {
                                    unclosed('bracket');
                                }
                            }
                            escapePos = next;
                            while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                                escapePos -= 1;
                                escaped = !escaped;
                            }
                        }while (escaped)
                        currentToken = [
                            'brackets',
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        next = css.indexOf(')', pos + 1);
                        content = css.slice(pos, next + 1);
                        if (next === -1 || RE_BAD_BRACKET.test(content)) {
                            currentToken = [
                                '(',
                                '(',
                                pos
                            ];
                        } else {
                            currentToken = [
                                'brackets',
                                content,
                                pos,
                                next
                            ];
                            pos = next;
                        }
                    }
                    break;
                }
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                {
                    quote = code === SINGLE_QUOTE ? "'" : '"';
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(quote, next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos + 1;
                                break;
                            } else {
                                unclosed('string');
                            }
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped)
                    currentToken = [
                        'string',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case AT:
                {
                    RE_AT_END.lastIndex = pos + 1;
                    RE_AT_END.test(css);
                    if (RE_AT_END.lastIndex === 0) {
                        next = css.length - 1;
                    } else {
                        next = RE_AT_END.lastIndex - 2;
                    }
                    currentToken = [
                        'at-word',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case BACKSLASH:
                {
                    next = pos;
                    escape = true;
                    while(css.charCodeAt(next + 1) === BACKSLASH){
                        next += 1;
                        escape = !escape;
                    }
                    code = css.charCodeAt(next + 1);
                    if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                        next += 1;
                        if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                            while(RE_HEX_ESCAPE.test(css.charAt(next + 1))){
                                next += 1;
                            }
                            if (css.charCodeAt(next + 1) === SPACE) {
                                next += 1;
                            }
                        }
                    }
                    currentToken = [
                        'word',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            default:
                {
                    if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                        next = css.indexOf('*/', pos + 2) + 1;
                        if (next === 0) {
                            if (ignore || ignoreUnclosed) {
                                next = css.length;
                            } else {
                                unclosed('comment');
                            }
                        }
                        currentToken = [
                            'comment',
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        RE_WORD_END.lastIndex = pos + 1;
                        RE_WORD_END.test(css);
                        if (RE_WORD_END.lastIndex === 0) {
                            next = css.length - 1;
                        } else {
                            next = RE_WORD_END.lastIndex - 2;
                        }
                        currentToken = [
                            'word',
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        buffer.push(currentToken);
                        pos = next;
                    }
                    break;
                }
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        nextToken,
        endOfFile,
        position
    };
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/nanoid@3.3.4/node_modules/nanoid/non-secure/index.cjs (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        let i = size;
        while(i--){
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    let i = size;
    while(i--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
module.exports = {
    nanoid,
    customAlphabet
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

exports.SourceMapGenerator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-generator.js (ecmascript)").SourceMapGenerator;
exports.SourceMapConsumer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-consumer.js (ecmascript)").SourceMapConsumer;
exports.SourceNode = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-node.js (ecmascript)").SourceNode;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-generator.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var base64VLQ = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64-vlq.js (ecmascript)");
var util = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js (ecmascript)");
var ArraySet = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/array-set.js (ecmascript)").ArraySet;
var MappingList = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/mapping-list.js (ecmascript)").MappingList;
function SourceMapGenerator(aArgs) {
    if (!aArgs) {
        aArgs = {};
    }
    this._file = util.getArg(aArgs, 'file', null);
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) {
                newMapping.source = util.relative(sourceRoot, newMapping.source);
            }
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) {
                newMapping.name = mapping.name;
            }
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
            sourceRelative = util.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
            generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            generator.setSourceContent(sourceFile, content);
        }
    });
    return generator;
};
SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);
    if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
    }
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
            this._sources.add(source);
        }
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
            this._names.add(name);
        }
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
    }
    if (aSourceContent != null) {
        if (!this._sourcesContents) {
            this._sourcesContents = Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
            this._sourcesContents = null;
        }
    }
};
SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
            throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
        }
        sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
    }
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                mapping.source = original.source;
                if (aSourceMapPath != null) {
                    mapping.source = util.join(aSourceMapPath, mapping.source);
                }
                if (sourceRoot != null) {
                    mapping.source = util.relative(sourceRoot, mapping.source);
                }
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) {
                    mapping.name = original.name;
                }
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
            newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
            newNames.add(name);
        }
    }, this);
    this._sources = newSources;
    this._names = newNames;
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aSourceMapPath != null) {
                sourceFile = util.join(aSourceMapPath, sourceFile);
            }
            if (sourceRoot != null) {
                sourceFile = util.relative(sourceRoot, sourceFile);
            }
            this.setSourceContent(sourceFile, content);
        }
    }, this);
};
SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error('original.line and original.column are not numbers -- you probably meant to omit ' + 'the original mapping entirely and only map the generated position. If so, pass ' + 'null for the original mapping instead of an object with empty or null values.');
    }
    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
    } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
    } else {
        throw new Error('Invalid mapping: ' + JSON.stringify({
            generated: aGenerated,
            source: aSource,
            original: aOriginal,
            name: aName
        }));
    }
};
SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = '';
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ';';
                previousGeneratedLine++;
            }
        } else {
            if (i > 0) {
                if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                    continue;
                }
                next += ',';
            }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) {
            return null;
        }
        if (aSourceRoot != null) {
            source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) {
        map.file = this._file;
    }
    if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }
    return map;
};
SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = SourceMapGenerator;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-consumer.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var util = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js (ecmascript)");
var binarySearch = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/binary-search.js (ecmascript)");
var ArraySet = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/array-set.js (ecmascript)").ArraySet;
var base64VLQ = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64-vlq.js (ecmascript)");
var quickSort = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/quick-sort.js (ecmascript)").quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
        sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
SourceMapConsumer.prototype._version = 3;
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    var boundCallback = aCallback.bind(context);
    var names = this._names;
    var sources = this._sources;
    var sourceMapURL = this._sourceMapURL;
    for(var i = 0, n = mappings.length; i < n; i++){
        var mapping = mappings[i];
        var source = mapping.source === null ? null : sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, sourceMapURL);
        boundCallback({
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : names.at(mapping.name)
        });
    }
};
SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');
    var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: line,
        originalColumn: util.getArg(aArgs, 'column', 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
        return [];
    }
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
exports.SourceMapConsumer = SourceMapConsumer;
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
        sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);
    if (version != this._version) {
        throw new Error('Unsupported version: ' + version);
    }
    if (sourceRoot) {
        sourceRoot = util.normalize(sourceRoot);
    }
    sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
    }
    if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
    }
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) {
            return i;
        }
    }
    return -1;
};
BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) {
                destMapping.name = names.indexOf(srcMapping.name);
            }
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
BasicSourceMapConsumer.prototype._version = 3;
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
    get: function() {
        return this._absoluteSources.slice();
    }
});
function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
const compareGenerated = util.compareByGeneratedPositionsDeflatedNoLine;
function sortGenerated(array, start) {
    let l = array.length;
    let n = array.length - start;
    if (n <= 1) {
        return;
    } else if (n == 2) {
        let a = array[start];
        let b = array[start + 1];
        if (compareGenerated(a, b) > 0) {
            array[start] = b;
            array[start + 1] = a;
        }
    } else if (n < 20) {
        for(let i = start; i < l; i++){
            for(let j = i; j > start; j--){
                let a = array[j - 1];
                let b = array[j];
                if (compareGenerated(a, b) <= 0) {
                    break;
                }
                array[j - 1] = b;
                array[j] = a;
            }
        }
    } else {
        quickSort(array, compareGenerated, start);
    }
}
BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    let subarrayStart = 0;
    while(index < length){
        if (aStr.charAt(index) === ';') {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
            sortGenerated(generatedMappings, subarrayStart);
            subarrayStart = generatedMappings.length;
        } else if (aStr.charAt(index) === ',') {
            index++;
        } else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) {
                    break;
                }
            }
            str = aStr.slice(index, end);
            segment = [];
            while(index < end){
                base64VLQ.decode(aStr, index, temp);
                value = temp.value;
                index = temp.rest;
                segment.push(value);
            }
            if (segment.length === 2) {
                throw new Error('Found a source, but no line and column');
            }
            if (segment.length === 3) {
                throw new Error('Found a source and line, but no column');
            }
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                mapping.originalLine += 1;
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === 'number') {
                let currentSource = mapping.source;
                while(originalMappings.length <= currentSource){
                    originalMappings.push(null);
                }
                if (originalMappings[currentSource] === null) {
                    originalMappings[currentSource] = [];
                }
                originalMappings[currentSource].push(mapping);
            }
        }
    }
    sortGenerated(generatedMappings, subarrayStart);
    this.__generatedMappings = generatedMappings;
    for(var i = 0; i < originalMappings.length; i++){
        if (originalMappings[i] != null) {
            quickSort(originalMappings[i], util.compareByOriginalPositionsNoSource);
        }
    }
    this.__originalMappings = [].concat(...originalMappings);
};
BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    if (aNeedle[aLineName] <= 0) {
        throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
        throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
    }
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        mapping.lastGeneratedColumn = Infinity;
    }
};
BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, 'source', null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, 'name', null);
            if (name !== null) {
                name = this._names.at(name);
            }
            return {
                source: source,
                line: util.getArg(mapping, 'originalLine', null),
                column: util.getArg(mapping, 'originalColumn', null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
        return false;
    }
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
        return null;
    }
    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
        return this.sourcesContent[index];
    }
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
    }
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
            return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
    }
    if (nullOnMissing) {
        return null;
    } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
};
BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
        return {
            line: null,
            column: null,
            lastColumn: null
        };
    }
    var needle = {
        source: source,
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
            return {
                line: util.getArg(mapping, 'generatedLine', null),
                column: util.getArg(mapping, 'generatedColumn', null),
                lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
            };
        }
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
        sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    var version = util.getArg(sourceMap, 'version');
    var sections = util.getArg(sourceMap, 'sections');
    if (version != this._version) {
        throw new Error('Unsupported version: ' + version);
    }
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) {
            throw new Error('Support for url field in sections not implemented.');
        }
        var offset = util.getArg(s, 'offset');
        var offsetLine = util.getArg(offset, 'line');
        var offsetColumn = util.getArg(offset, 'column');
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
            throw new Error('Section offsets must be ordered and non-overlapping.');
        }
        lastOffset = offset;
        return {
            generatedOffset: {
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
IndexedSourceMapConsumer.prototype._version = 3;
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++){
            for(var j = 0; j < this._sections[i].consumer.sources.length; j++){
                sources.push(this._sections[i].consumer.sources[j]);
            }
        }
        return sources;
    }
});
IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    var sectionIndex = binarySearch.search(needle, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
            return cmp;
        }
        return needle.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) {
        return {
            source: null,
            line: null,
            column: null,
            name: null
        };
    }
    return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
            return content;
        }
    }
    if (nullOnMissing) {
        return null;
    } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
};
IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
            continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === 'number') {
                this.__originalMappings.push(adjustedMapping);
            }
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-node.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var SourceMapGenerator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-generator.js (ecmascript)").SourceMapGenerator;
var util = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js (ecmascript)");
var REGEX_NEWLINE = /(\r?\n)/;
var NEWLINE_CODE = 10;
var isSourceNode = "$$$isSourceNode$$$";
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    var node = new SourceNode();
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
    };
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            if (lastGeneratedLine < mapping.generatedLine) {
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            } else {
                var nextLine = remainingLines[remainingLinesIndex] || '';
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                lastMapping = mapping;
                return;
            }
        }
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || '';
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
            addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) {
                sourceFile = util.join(aRelativePath, sourceFile);
            }
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
            node.add(code);
        } else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
            this.add(chunk);
        }, this);
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
            this.children.push(aChunk);
        }
    } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    }
    return this;
};
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
        for(var i = aChunk.length - 1; i >= 0; i--){
            this.prepend(aChunk[i]);
        }
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
    } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    }
    return this;
};
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
            chunk.walk(aFn);
        } else {
            if (chunk !== '') {
                aFn(chunk, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                });
            }
        }
    }
};
SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
    } else if (typeof lastChild === 'string') {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    } else {
        this.children.push(''.replace(aPattern, aReplacement));
    }
    return this;
};
SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++){
        if (this.children[i][isSourceNode]) {
            this.children[i].walkSourceContents(aFn);
        }
    }
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++){
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
};
SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
                map.addMapping({
                    source: original.source,
                    original: {
                        line: original.line,
                        column: original.column
                    },
                    generated: {
                        line: generated.line,
                        column: generated.column
                    },
                    name: original.name
                });
            }
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++){
            if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
                generated.line++;
                generated.column = 0;
                if (idx + 1 === length) {
                    lastOriginalSource = null;
                    sourceMappingActive = false;
                } else if (sourceMappingActive) {
                    map.addMapping({
                        source: original.source,
                        original: {
                            line: original.line,
                            column: original.column
                        },
                        generated: {
                            line: generated.line,
                            column: generated.column
                        },
                        name: original.name
                    });
                }
            } else {
                generated.column++;
            }
        }
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
exports.SourceNode = SourceNode;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64-vlq.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var base64 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64.js (ecmascript)");
var VLQ_BASE_SHIFT = 5;
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
var VLQ_BASE_MASK = VLQ_BASE - 1;
var VLQ_CONTINUATION_BIT = VLQ_BASE;
function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
            digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
    }while (vlq > 0)
    return encoded;
};
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation)
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
        return aArgs[aName];
    } else if (arguments.length === 3) {
        return aDefaultValue;
    } else {
        throw new Error('"' + aName + '" is a required argument.');
    }
}
exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;
function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
        return null;
    }
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
exports.urlParse = urlParse;
function urlGenerate(aParsedUrl) {
    var url = '';
    if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ':';
    }
    url += '//';
    if (aParsedUrl.auth) {
        url += aParsedUrl.auth + '@';
    }
    if (aParsedUrl.host) {
        url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
    }
    if (aParsedUrl.path) {
        url += aParsedUrl.path;
    }
    return url;
}
exports.urlGenerate = urlGenerate;
var MAX_CACHED_INPUTS = 32;
function lruMemoize(f) {
    var cache = [];
    return function(input) {
        for(var i = 0; i < cache.length; i++){
            if (cache[i].input === input) {
                var temp = cache[0];
                cache[0] = cache[i];
                cache[i] = temp;
                return cache[0].result;
            }
        }
        var result = f(input);
        cache.unshift({
            input,
            result
        });
        if (cache.length > MAX_CACHED_INPUTS) {
            cache.pop();
        }
        return result;
    };
}
var normalize = lruMemoize(function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
        if (!url.path) {
            return aPath;
        }
        path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = [];
    var start = 0;
    var i = 0;
    while(true){
        start = i;
        i = path.indexOf("/", start);
        if (i === -1) {
            parts.push(path.slice(start));
            break;
        } else {
            parts.push(path.slice(start, i));
            while(i < path.length && path[i] === "/"){
                i++;
            }
        }
    }
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === '.') {
            parts.splice(i, 1);
        } else if (part === '..') {
            up++;
        } else if (up > 0) {
            if (part === '') {
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join('/');
    if (path === '') {
        path = isAbsolute ? '/' : '.';
    }
    if (url) {
        url.path = path;
        return urlGenerate(url);
    }
    return path;
});
exports.normalize = normalize;
function join(aRoot, aPath) {
    if (aRoot === "") {
        aRoot = ".";
    }
    if (aPath === "") {
        aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
        aRoot = aRootUrl.path || '/';
    }
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
            aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
    }
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
    }
    return joined;
}
exports.join = join;
exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};
function relative(aRoot, aPath) {
    if (aRoot === "") {
        aRoot = ".";
    }
    aRoot = aRoot.replace(/\/$/, '');
    var level = 0;
    while(aPath.indexOf(aRoot + '/') !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
            return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
            return aPath;
        }
        ++level;
    }
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;
var supportsNullProto = function() {
    var obj = Object.create(null);
    return !('__proto__' in obj);
}();
function identity(s) {
    return s;
}
function toSetString(aStr) {
    if (isProtoString(aStr)) {
        return '$' + aStr;
    }
    return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;
function fromSetString(aStr) {
    if (isProtoString(aStr)) {
        return aStr.slice(1);
    }
    return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;
function isProtoString(s) {
    if (!s) {
        return false;
    }
    var length = s.length;
    if (length < 9) {
        return false;
    }
    if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
    }
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36) {
            return false;
        }
    }
    return true;
}
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
        return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;
function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
    var cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
        return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
        return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
        return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;
function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
        return 0;
    }
    if (aStr1 === null) {
        return 1;
    }
    if (aStr2 === null) {
        return -1;
    }
    if (aStr1 > aStr2) {
        return 1;
    }
    return -1;
}
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
        return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
        return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || '';
    if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
            sourceRoot += '/';
        }
        sourceURL = sourceRoot + sourceURL;
    }
    if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
            throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
            var index = parsed.path.lastIndexOf('/');
            if (index >= 0) {
                parsed.path = parsed.path.substring(0, index + 1);
            }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/array-set.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var util = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
}
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++){
        set.add(aArray[i], aAllowDuplicates);
    }
    return set;
};
ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
    }
    if (!isDuplicate) {
        if (hasNativeMap) {
            this._set.set(aStr, idx);
        } else {
            this._set[sStr] = idx;
        }
    }
};
ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) {
        return this._set.has(aStr);
    } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
            return idx;
        }
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
            return this._set[sStr];
        }
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
    }
    throw new Error('No element indexed by ' + aIdx);
};
ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
exports.ArraySet = ArraySet;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/mapping-list.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var util = __turbopack_require__("[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js (ecmascript)");
function generatedPositionAfter(mappingA, mappingB) {
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
function MappingList() {
    this._array = [];
    this._sorted = true;
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
exports.MappingList = MappingList;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/binary-search.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
        return mid;
    } else if (cmp > 0) {
        if (aHigh - mid > 1) {
            return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
            return aHigh < aHaystack.length ? aHigh : -1;
        } else {
            return mid;
        }
    } else {
        if (mid - aLow > 1) {
            return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
            return mid;
        } else {
            return aLow < 0 ? -1 : aLow;
        }
    }
}
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
        return -1;
    }
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) {
        return -1;
    }
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
            break;
        }
        --index;
    }
    return index;
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/quick-sort.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

function SortTemplate(comparator) {
    function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
    }
    function randomIntInRange(low, high) {
        return Math.round(low + Math.random() * (high - low));
    }
    function doQuickSort(ary, comparator, p, r) {
        if (p < r) {
            var pivotIndex = randomIntInRange(p, r);
            var i = p - 1;
            swap(ary, pivotIndex, r);
            var pivot = ary[r];
            for(var j = p; j < r; j++){
                if (comparator(ary[j], pivot, false) <= 0) {
                    i += 1;
                    swap(ary, i, j);
                }
            }
            swap(ary, i + 1, j);
            var q = i + 1;
            doQuickSort(ary, comparator, p, q - 1);
            doQuickSort(ary, comparator, q + 1, r);
        }
    }
    return doQuickSort;
}
function cloneSort(comparator) {
    let template = SortTemplate.toString();
    let templateFn = new Function(`return ${template}`)();
    return templateFn(comparator);
}
let sortCache = new WeakMap();
exports.quickSort = function(ary, comparator, start = 0) {
    let doQuickSort = sortCache.get(comparator);
    if (doQuickSort === void 0) {
        doQuickSort = cloneSort(comparator);
        sortCache.set(comparator, doQuickSort);
    }
    doQuickSort(ary, comparator, start, ary.length - 1);
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
    }
    throw new TypeError("Must be between 0 and 63: " + number);
};
exports.decode = function(charCode) {
    var bigA = 65;
    var bigZ = 90;
    var littleA = 97;
    var littleZ = 122;
    var zero = 48;
    var nine = 57;
    var plus = 43;
    var slash = 47;
    var littleOffset = 26;
    var numberOffset = 52;
    if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
    }
    if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
    }
    if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
    }
    if (charCode == plus) {
        return 62;
    }
    if (charCode == slash) {
        return 63;
    }
    return -1;
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let tty = __turbopack_external_require__("tty");
let isColorSupported = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
let formatter = (open, close, replace = open)=>(input)=>{
        let string = "" + input;
        let index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
let replaceClose = (string, close, replace, index)=>{
    let start = string.substring(0, index) + replace;
    let end = string.substring(index + close.length);
    let nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
let createColors = (enabled = isColorSupported)=>({
        isColorSupported: enabled,
        reset: enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String,
        bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
        dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
        italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
        underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
        inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
        hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
        strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
        black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
        red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
        green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
        yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
        blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
        magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
        cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
        white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
        gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
        bgBlack: enabled ? formatter("\x1b[40m", "\x1b[49m") : String,
        bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
        bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
        bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
        bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
        bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
        bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
        bgWhite: enabled ? formatter("\x1b[47m", "\x1b[49m") : String
    });
module.exports = createColors();
module.exports.createColors = createColors;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/color@4.2.3/node_modules/color/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const colorString = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js (ecmascript)");
const convert = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js (ecmascript)");
const skippedModels = [
    'keyword',
    'gray',
    'hex'
];
const hashedModelKeys = {};
for (const model of Object.keys(convert)){
    hashedModelKeys[[
        ...convert[model].labels
    ].sort().join('')] = model;
}
const limiters = {};
function Color(object, model) {
    if (!(this instanceof Color)) {
        return new Color(object, model);
    }
    if (model && model in skippedModels) {
        model = null;
    }
    if (model && !(model in convert)) {
        throw new Error('Unknown model: ' + model);
    }
    let i;
    let channels;
    if (object == null) {
        this.model = 'rgb';
        this.color = [
            0,
            0,
            0
        ];
        this.valpha = 1;
    } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [
            ...object.color
        ];
        this.valpha = object.valpha;
    } else if (typeof object === 'string') {
        const result = colorString.get(object);
        if (result === null) {
            throw new Error('Unable to parse color from string: ' + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
    } else if (object.length > 0) {
        this.model = model || 'rgb';
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
    } else if (typeof object === 'number') {
        this.model = 'rgb';
        this.color = [
            object >> 16 & 0xFF,
            object >> 8 & 0xFF,
            object & 0xFF
        ];
        this.valpha = 1;
    } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ('alpha' in object) {
            keys.splice(keys.indexOf('alpha'), 1);
            this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join('');
        if (!(hashedKeys in hashedModelKeys)) {
            throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels  } = convert[this.model];
        const color = [];
        for(i = 0; i < labels.length; i++){
            color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
    }
    if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for(i = 0; i < channels; i++){
            const limit = limiters[this.model][i];
            if (limit) {
                this.color[i] = limit(this.color[i]);
            }
        }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
        Object.freeze(this);
    }
}
Color.prototype = {
    toString () {
        return this.string();
    },
    toJSON () {
        return this[this.model]();
    },
    string (places) {
        let self = this.model in colorString.to ? this : this.rgb();
        self = self.round(typeof places === 'number' ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to[self.model](args);
    },
    percentString (places) {
        const self = this.rgb().round(typeof places === 'number' ? places : 1);
        const args = self.valpha === 1 ? self.color : [
            ...self.color,
            this.valpha
        ];
        return colorString.to.rgb.percent(args);
    },
    array () {
        return this.valpha === 1 ? [
            ...this.color
        ] : [
            ...this.color,
            this.valpha
        ];
    },
    object () {
        const result = {};
        const { channels  } = convert[this.model];
        const { labels  } = convert[this.model];
        for(let i = 0; i < channels; i++){
            result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
            result.alpha = this.valpha;
        }
        return result;
    },
    unitArray () {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
            rgb.push(this.valpha);
        }
        return rgb;
    },
    unitObject () {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
            rgb.alpha = this.valpha;
        }
        return rgb;
    },
    round (places) {
        places = Math.max(places || 0, 0);
        return new Color([
            ...this.color.map(roundToPlace(places)),
            this.valpha
        ], this.model);
    },
    alpha (value) {
        if (value !== undefined) {
            return new Color([
                ...this.color,
                Math.max(0, Math.min(1, value))
            ], this.model);
        }
        return this.valpha;
    },
    red: getset('rgb', 0, maxfn(255)),
    green: getset('rgb', 1, maxfn(255)),
    blue: getset('rgb', 2, maxfn(255)),
    hue: getset([
        'hsl',
        'hsv',
        'hsl',
        'hwb',
        'hcg'
    ], 0, (value)=>(value % 360 + 360) % 360),
    saturationl: getset('hsl', 1, maxfn(100)),
    lightness: getset('hsl', 2, maxfn(100)),
    saturationv: getset('hsv', 1, maxfn(100)),
    value: getset('hsv', 2, maxfn(100)),
    chroma: getset('hcg', 1, maxfn(100)),
    gray: getset('hcg', 2, maxfn(100)),
    white: getset('hwb', 1, maxfn(100)),
    wblack: getset('hwb', 2, maxfn(100)),
    cyan: getset('cmyk', 0, maxfn(100)),
    magenta: getset('cmyk', 1, maxfn(100)),
    yellow: getset('cmyk', 2, maxfn(100)),
    black: getset('cmyk', 3, maxfn(100)),
    x: getset('xyz', 0, maxfn(95.047)),
    y: getset('xyz', 1, maxfn(100)),
    z: getset('xyz', 2, maxfn(108.833)),
    l: getset('lab', 0, maxfn(100)),
    a: getset('lab', 1),
    b: getset('lab', 2),
    keyword (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        return convert[this.model].keyword(this.color);
    },
    hex (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        return colorString.to.hex(this.rgb().round().color);
    },
    hexa (value) {
        if (value !== undefined) {
            return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
            alphaHex = '0' + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
    },
    rgbNumber () {
        const rgb = this.rgb().color;
        return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
    },
    luminosity () {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i, element] of rgb.entries()){
            const chan = element / 255;
            lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast (color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level (color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
            return 'AAA';
        }
        return contrastRatio >= 4.5 ? 'AA' : '';
    },
    isDark () {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
        return yiq < 128;
    },
    isLight () {
        return !this.isDark();
    },
    negate () {
        const rgb = this.rgb();
        for(let i = 0; i < 3; i++){
            rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
    },
    lighten (ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
    },
    darken (ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
    },
    saturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
    },
    desaturate (ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
    },
    whiten (ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
    },
    blacken (ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
    },
    grayscale () {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
    },
    fade (ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer (ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate (degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
    },
    mix (mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
            throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === undefined ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = color1.alpha() - color2.alpha();
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
    }
};
for (const model of Object.keys(convert)){
    if (skippedModels.includes(model)) {
        continue;
    }
    const { channels  } = convert[model];
    Color.prototype[model] = function(...args) {
        if (this.model === model) {
            return new Color(this);
        }
        if (args.length > 0) {
            return new Color(args, model);
        }
        return new Color([
            ...assertArray(convert[this.model][model].raw(this.color)),
            this.valpha
        ], model);
    };
    Color[model] = function(...args) {
        let color = args[0];
        if (typeof color === 'number') {
            color = zeroArray(args, channels);
        }
        return new Color(color, model);
    };
}
function roundTo(number, places) {
    return Number(number.toFixed(places));
}
function roundToPlace(places) {
    return function(number) {
        return roundTo(number, places);
    };
}
function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [
        model
    ];
    for (const m of model){
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
    }
    model = model[0];
    return function(value) {
        let result;
        if (value !== undefined) {
            if (modifier) {
                value = modifier(value);
            }
            result = this[model]();
            result.color[channel] = value;
            return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
            result = modifier(result);
        }
        return result;
    };
}
function maxfn(max) {
    return function(v) {
        return Math.max(0, Math.min(max, v));
    };
}
function assertArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function zeroArray(array, length) {
    for(let i = 0; i < length; i++){
        if (typeof array[i] !== 'number') {
            array[i] = 0;
        }
    }
    return array;
}
module.exports = Color;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const conversions = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js (ecmascript)");
const route = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js (ecmascript)");
const convert = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        return fn(args);
    };
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
function wrapRounded(fn) {
    const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === undefined || arg0 === null) {
            return arg0;
        }
        if (arg0.length > 1) {
            args = arg0;
        }
        const result = fn(args);
        if (typeof result === 'object') {
            for(let len = result.length, i = 0; i < len; i++){
                result[i] = Math.round(result[i]);
            }
        }
        return result;
    };
    if ('conversion' in fn) {
        wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
}
models.forEach((fromModel)=>{
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], 'channels', {
        value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], 'labels', {
        value: conversions[fromModel].labels
    });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach((toModel)=>{
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
    });
});
module.exports = convert;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const cssKeywords = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js (ecmascript)");
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)){
    reverseKeywords[cssKeywords[key]] = key;
}
const convert = {
    rgb: {
        channels: 3,
        labels: 'rgb'
    },
    hsl: {
        channels: 3,
        labels: 'hsl'
    },
    hsv: {
        channels: 3,
        labels: 'hsv'
    },
    hwb: {
        channels: 3,
        labels: 'hwb'
    },
    cmyk: {
        channels: 4,
        labels: 'cmyk'
    },
    xyz: {
        channels: 3,
        labels: 'xyz'
    },
    lab: {
        channels: 3,
        labels: 'lab'
    },
    lch: {
        channels: 3,
        labels: 'lch'
    },
    hex: {
        channels: 1,
        labels: [
            'hex'
        ]
    },
    keyword: {
        channels: 1,
        labels: [
            'keyword'
        ]
    },
    ansi16: {
        channels: 1,
        labels: [
            'ansi16'
        ]
    },
    ansi256: {
        channels: 1,
        labels: [
            'ansi256'
        ]
    },
    hcg: {
        channels: 3,
        labels: [
            'h',
            'c',
            'g'
        ]
    },
    apple: {
        channels: 3,
        labels: [
            'r16',
            'g16',
            'b16'
        ]
    },
    gray: {
        channels: 1,
        labels: [
            'gray'
        ]
    }
};
module.exports = convert;
for (const model of Object.keys(convert)){
    if (!('channels' in convert[model])) {
        throw new Error('missing channels property: ' + model);
    }
    if (!('labels' in convert[model])) {
        throw new Error('missing channel labels property: ' + model);
    }
    if (convert[model].labels.length !== convert[model].channels) {
        throw new Error('channel and label counts mismatch: ' + model);
    }
    const { channels , labels  } = convert[model];
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], 'channels', {
        value: channels
    });
    Object.defineProperty(convert[model], 'labels', {
        value: labels
    });
}
convert.rgb.hsl = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
        h = 0;
    } else if (r === max) {
        h = (g - b) / delta;
    } else if (g === max) {
        h = 2 + (b - r) / delta;
    } else if (b === max) {
        h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
        h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
        s = 0;
    } else if (l <= 0.5) {
        s = delta / (max + min);
    } else {
        s = delta / (2 - max - min);
    }
    return [
        h,
        s * 100,
        l * 100
    ];
};
convert.rgb.hsv = function(rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
            h = bdif - gdif;
        } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return [
        h * 360,
        s * 100,
        v * 100
    ];
};
convert.rgb.hwb = function(rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [
        h,
        w * 100,
        b * 100
    ];
};
convert.rgb.cmyk = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [
        c * 100,
        m * 100,
        y * 100,
        k * 100
    ];
};
function comparativeDistance(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert.rgb.keyword = function(rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
        return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(cssKeywords)){
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
        }
    }
    return currentClosestKeyword;
};
convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
};
convert.rgb.xyz = function(rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [
        x * 100,
        y * 100,
        z * 100
    ];
};
convert.rgb.lab = function(rgb) {
    const xyz = convert.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
        val = l * 255;
        return [
            val,
            val,
            val
        ];
    }
    if (l < 0.5) {
        t2 = l * (1 + s);
    } else {
        t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [
        0,
        0,
        0
    ];
    for(let i = 0; i < 3; i++){
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
            t3++;
        }
        if (t3 > 1) {
            t3--;
        }
        if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
            val = t2;
        } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
            val = t1;
        }
        rgb[i] = val * 255;
    }
    return rgb;
};
convert.hsl.hsv = function(hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [
        h,
        sv * 100,
        v * 100
    ];
};
convert.hsv.rgb = function(hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch(hi){
        case 0:
            return [
                v,
                t,
                p
            ];
        case 1:
            return [
                q,
                v,
                p
            ];
        case 2:
            return [
                p,
                v,
                t
            ];
        case 3:
            return [
                p,
                q,
                v
            ];
        case 4:
            return [
                t,
                p,
                v
            ];
        case 5:
            return [
                v,
                p,
                q
            ];
    }
};
convert.hsv.hsl = function(hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [
        h,
        sl * 100,
        l * 100
    ];
};
convert.hwb.rgb = function(hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) {
        f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch(i){
        default:
        case 6:
        case 0:
            r = v;
            g = n;
            b = wh;
            break;
        case 1:
            r = n;
            g = v;
            b = wh;
            break;
        case 2:
            r = wh;
            g = v;
            b = n;
            break;
        case 3:
            r = wh;
            g = n;
            b = v;
            break;
        case 4:
            r = n;
            g = wh;
            b = v;
            break;
        case 5:
            r = v;
            g = wh;
            b = n;
            break;
    }
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.cmyk.rgb = function(cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.rgb = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570;
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [
        r * 255,
        g * 255,
        b * 255
    ];
};
convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [
        l,
        a,
        b
    ];
};
convert.lab.xyz = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [
        x,
        y,
        z
    ];
};
convert.lab.lch = function(lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
        h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [
        l,
        c,
        h
    ];
};
convert.lch.lab = function(lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [
        l,
        a,
        b
    ];
};
convert.rgb.ansi16 = function(args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
        return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
        ansi += 60;
    }
    return ansi;
};
convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function(args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
        if (r < 8) {
            return 16;
        }
        if (r > 248) {
            return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
};
convert.ansi16.rgb = function(args) {
    let color = args % 10;
    if (color === 0 || color === 7) {
        if (args > 50) {
            color += 3.5;
        }
        color = color / 10.5 * 255;
        return [
            color,
            color,
            color
        ];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [
        r,
        g,
        b
    ];
};
convert.ansi256.rgb = function(args) {
    if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [
            c,
            c,
            c
        ];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hex = function(args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
        return [
            0,
            0,
            0
        ];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
        colorString = colorString.split('').map((char)=>{
            return char + char;
        }).join('');
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [
        r,
        g,
        b
    ];
};
convert.rgb.hcg = function(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
        grayscale = min / (1 - chroma);
    } else {
        grayscale = 0;
    }
    if (chroma <= 0) {
        hue = 0;
    } else if (max === r) {
        hue = (g - b) / chroma % 6;
    } else if (max === g) {
        hue = 2 + (b - r) / chroma;
    } else {
        hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [
        hue * 360,
        chroma * 100,
        grayscale * 100
    ];
};
convert.hsl.hcg = function(hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;
    if (c < 1.0) {
        f = (l - 0.5 * c) / (1.0 - c);
    }
    return [
        hsl[0],
        c * 100,
        f * 100
    ];
};
convert.hsv.hcg = function(hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1.0) {
        f = (v - c) / (1 - c);
    }
    return [
        hsv[0],
        c * 100,
        f * 100
    ];
};
convert.hcg.rgb = function(hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0.0) {
        return [
            g * 255,
            g * 255,
            g * 255
        ];
    }
    const pure = [
        0,
        0,
        0
    ];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch(Math.floor(hi)){
        case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
        case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
        case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
        case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
        case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
        default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
    }
    mg = (1.0 - c) * g;
    return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
    ];
};
convert.hcg.hsv = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;
    if (v > 0.0) {
        f = c / v;
    }
    return [
        hcg[0],
        f * 100,
        v * 100
    ];
};
convert.hcg.hsl = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;
    if (l > 0.0 && l < 0.5) {
        s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
        s = c / (2 * (1 - l));
    }
    return [
        hcg[0],
        s * 100,
        l * 100
    ];
};
convert.hcg.hwb = function(hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [
        hcg[0],
        (v - c) * 100,
        (1 - v) * 100
    ];
};
convert.hwb.hcg = function(hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
        g = (v - c) / (1 - c);
    }
    return [
        hwb[0],
        c * 100,
        g * 100
    ];
};
convert.apple.rgb = function(apple) {
    return [
        apple[0] / 65535 * 255,
        apple[1] / 65535 * 255,
        apple[2] / 65535 * 255
    ];
};
convert.rgb.apple = function(rgb) {
    return [
        rgb[0] / 255 * 65535,
        rgb[1] / 255 * 65535,
        rgb[2] / 255 * 65535
    ];
};
convert.gray.rgb = function(args) {
    return [
        args[0] / 100 * 255,
        args[0] / 100 * 255,
        args[0] / 100 * 255
    ];
};
convert.gray.hsl = function(args) {
    return [
        0,
        0,
        args[0]
    ];
};
convert.gray.hsv = convert.gray.hsl;
convert.gray.hwb = function(gray) {
    return [
        0,
        100,
        gray[0]
    ];
};
convert.gray.cmyk = function(gray) {
    return [
        0,
        0,
        0,
        gray[0]
    ];
};
convert.gray.lab = function(gray) {
    return [
        gray[0],
        0,
        0
    ];
};
convert.gray.hex = function(gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function(rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [
        val / 255 * 100
    ];
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

const conversions = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js (ecmascript)");
function buildGraph() {
    const graph = {};
    const models = Object.keys(conversions);
    for(let len = models.length, i = 0; i < len; i++){
        graph[models[i]] = {
            distance: -1,
            parent: null
        };
    }
    return graph;
}
function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [
        fromModel
    ];
    graph[fromModel].distance = 0;
    while(queue.length){
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for(let len = adjacents.length, i = 0; i < len; i++){
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
            }
        }
    }
    return graph;
}
function link(from, to) {
    return function(args) {
        return to(from(args));
    };
}
function wrapConversion(toModel, graph) {
    const path = [
        graph[toModel].parent,
        toModel
    ];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while(graph[cur].parent){
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
}
module.exports = function(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for(let len = models.length, i = 0; i < len; i++){
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
            continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
module.exports = {
    "aliceblue": [
        240,
        248,
        255
    ],
    "antiquewhite": [
        250,
        235,
        215
    ],
    "aqua": [
        0,
        255,
        255
    ],
    "aquamarine": [
        127,
        255,
        212
    ],
    "azure": [
        240,
        255,
        255
    ],
    "beige": [
        245,
        245,
        220
    ],
    "bisque": [
        255,
        228,
        196
    ],
    "black": [
        0,
        0,
        0
    ],
    "blanchedalmond": [
        255,
        235,
        205
    ],
    "blue": [
        0,
        0,
        255
    ],
    "blueviolet": [
        138,
        43,
        226
    ],
    "brown": [
        165,
        42,
        42
    ],
    "burlywood": [
        222,
        184,
        135
    ],
    "cadetblue": [
        95,
        158,
        160
    ],
    "chartreuse": [
        127,
        255,
        0
    ],
    "chocolate": [
        210,
        105,
        30
    ],
    "coral": [
        255,
        127,
        80
    ],
    "cornflowerblue": [
        100,
        149,
        237
    ],
    "cornsilk": [
        255,
        248,
        220
    ],
    "crimson": [
        220,
        20,
        60
    ],
    "cyan": [
        0,
        255,
        255
    ],
    "darkblue": [
        0,
        0,
        139
    ],
    "darkcyan": [
        0,
        139,
        139
    ],
    "darkgoldenrod": [
        184,
        134,
        11
    ],
    "darkgray": [
        169,
        169,
        169
    ],
    "darkgreen": [
        0,
        100,
        0
    ],
    "darkgrey": [
        169,
        169,
        169
    ],
    "darkkhaki": [
        189,
        183,
        107
    ],
    "darkmagenta": [
        139,
        0,
        139
    ],
    "darkolivegreen": [
        85,
        107,
        47
    ],
    "darkorange": [
        255,
        140,
        0
    ],
    "darkorchid": [
        153,
        50,
        204
    ],
    "darkred": [
        139,
        0,
        0
    ],
    "darksalmon": [
        233,
        150,
        122
    ],
    "darkseagreen": [
        143,
        188,
        143
    ],
    "darkslateblue": [
        72,
        61,
        139
    ],
    "darkslategray": [
        47,
        79,
        79
    ],
    "darkslategrey": [
        47,
        79,
        79
    ],
    "darkturquoise": [
        0,
        206,
        209
    ],
    "darkviolet": [
        148,
        0,
        211
    ],
    "deeppink": [
        255,
        20,
        147
    ],
    "deepskyblue": [
        0,
        191,
        255
    ],
    "dimgray": [
        105,
        105,
        105
    ],
    "dimgrey": [
        105,
        105,
        105
    ],
    "dodgerblue": [
        30,
        144,
        255
    ],
    "firebrick": [
        178,
        34,
        34
    ],
    "floralwhite": [
        255,
        250,
        240
    ],
    "forestgreen": [
        34,
        139,
        34
    ],
    "fuchsia": [
        255,
        0,
        255
    ],
    "gainsboro": [
        220,
        220,
        220
    ],
    "ghostwhite": [
        248,
        248,
        255
    ],
    "gold": [
        255,
        215,
        0
    ],
    "goldenrod": [
        218,
        165,
        32
    ],
    "gray": [
        128,
        128,
        128
    ],
    "green": [
        0,
        128,
        0
    ],
    "greenyellow": [
        173,
        255,
        47
    ],
    "grey": [
        128,
        128,
        128
    ],
    "honeydew": [
        240,
        255,
        240
    ],
    "hotpink": [
        255,
        105,
        180
    ],
    "indianred": [
        205,
        92,
        92
    ],
    "indigo": [
        75,
        0,
        130
    ],
    "ivory": [
        255,
        255,
        240
    ],
    "khaki": [
        240,
        230,
        140
    ],
    "lavender": [
        230,
        230,
        250
    ],
    "lavenderblush": [
        255,
        240,
        245
    ],
    "lawngreen": [
        124,
        252,
        0
    ],
    "lemonchiffon": [
        255,
        250,
        205
    ],
    "lightblue": [
        173,
        216,
        230
    ],
    "lightcoral": [
        240,
        128,
        128
    ],
    "lightcyan": [
        224,
        255,
        255
    ],
    "lightgoldenrodyellow": [
        250,
        250,
        210
    ],
    "lightgray": [
        211,
        211,
        211
    ],
    "lightgreen": [
        144,
        238,
        144
    ],
    "lightgrey": [
        211,
        211,
        211
    ],
    "lightpink": [
        255,
        182,
        193
    ],
    "lightsalmon": [
        255,
        160,
        122
    ],
    "lightseagreen": [
        32,
        178,
        170
    ],
    "lightskyblue": [
        135,
        206,
        250
    ],
    "lightslategray": [
        119,
        136,
        153
    ],
    "lightslategrey": [
        119,
        136,
        153
    ],
    "lightsteelblue": [
        176,
        196,
        222
    ],
    "lightyellow": [
        255,
        255,
        224
    ],
    "lime": [
        0,
        255,
        0
    ],
    "limegreen": [
        50,
        205,
        50
    ],
    "linen": [
        250,
        240,
        230
    ],
    "magenta": [
        255,
        0,
        255
    ],
    "maroon": [
        128,
        0,
        0
    ],
    "mediumaquamarine": [
        102,
        205,
        170
    ],
    "mediumblue": [
        0,
        0,
        205
    ],
    "mediumorchid": [
        186,
        85,
        211
    ],
    "mediumpurple": [
        147,
        112,
        219
    ],
    "mediumseagreen": [
        60,
        179,
        113
    ],
    "mediumslateblue": [
        123,
        104,
        238
    ],
    "mediumspringgreen": [
        0,
        250,
        154
    ],
    "mediumturquoise": [
        72,
        209,
        204
    ],
    "mediumvioletred": [
        199,
        21,
        133
    ],
    "midnightblue": [
        25,
        25,
        112
    ],
    "mintcream": [
        245,
        255,
        250
    ],
    "mistyrose": [
        255,
        228,
        225
    ],
    "moccasin": [
        255,
        228,
        181
    ],
    "navajowhite": [
        255,
        222,
        173
    ],
    "navy": [
        0,
        0,
        128
    ],
    "oldlace": [
        253,
        245,
        230
    ],
    "olive": [
        128,
        128,
        0
    ],
    "olivedrab": [
        107,
        142,
        35
    ],
    "orange": [
        255,
        165,
        0
    ],
    "orangered": [
        255,
        69,
        0
    ],
    "orchid": [
        218,
        112,
        214
    ],
    "palegoldenrod": [
        238,
        232,
        170
    ],
    "palegreen": [
        152,
        251,
        152
    ],
    "paleturquoise": [
        175,
        238,
        238
    ],
    "palevioletred": [
        219,
        112,
        147
    ],
    "papayawhip": [
        255,
        239,
        213
    ],
    "peachpuff": [
        255,
        218,
        185
    ],
    "peru": [
        205,
        133,
        63
    ],
    "pink": [
        255,
        192,
        203
    ],
    "plum": [
        221,
        160,
        221
    ],
    "powderblue": [
        176,
        224,
        230
    ],
    "purple": [
        128,
        0,
        128
    ],
    "rebeccapurple": [
        102,
        51,
        153
    ],
    "red": [
        255,
        0,
        0
    ],
    "rosybrown": [
        188,
        143,
        143
    ],
    "royalblue": [
        65,
        105,
        225
    ],
    "saddlebrown": [
        139,
        69,
        19
    ],
    "salmon": [
        250,
        128,
        114
    ],
    "sandybrown": [
        244,
        164,
        96
    ],
    "seagreen": [
        46,
        139,
        87
    ],
    "seashell": [
        255,
        245,
        238
    ],
    "sienna": [
        160,
        82,
        45
    ],
    "silver": [
        192,
        192,
        192
    ],
    "skyblue": [
        135,
        206,
        235
    ],
    "slateblue": [
        106,
        90,
        205
    ],
    "slategray": [
        112,
        128,
        144
    ],
    "slategrey": [
        112,
        128,
        144
    ],
    "snow": [
        255,
        250,
        250
    ],
    "springgreen": [
        0,
        255,
        127
    ],
    "steelblue": [
        70,
        130,
        180
    ],
    "tan": [
        210,
        180,
        140
    ],
    "teal": [
        0,
        128,
        128
    ],
    "thistle": [
        216,
        191,
        216
    ],
    "tomato": [
        255,
        99,
        71
    ],
    "turquoise": [
        64,
        224,
        208
    ],
    "violet": [
        238,
        130,
        238
    ],
    "wheat": [
        245,
        222,
        179
    ],
    "white": [
        255,
        255,
        255
    ],
    "whitesmoke": [
        245,
        245,
        245
    ],
    "yellow": [
        255,
        255,
        0
    ],
    "yellowgreen": [
        154,
        205,
        50
    ]
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

var colorNames = __turbopack_require__("[project-with-next]/node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js (ecmascript)");
var swizzle = __turbopack_require__("[project-with-next]/node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js (ecmascript)");
var hasOwnProperty = Object.hasOwnProperty;
var reverseNames = Object.create(null);
for(var name in colorNames){
    if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
    }
}
var cs = module.exports = {
    to: {},
    get: {}
};
cs.get = function(string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;
    switch(prefix){
        case 'hsl':
            val = cs.get.hsl(string);
            model = 'hsl';
            break;
        case 'hwb':
            val = cs.get.hwb(string);
            model = 'hwb';
            break;
        default:
            val = cs.get.rgb(string);
            model = 'rgb';
            break;
    }
    if (!val) {
        return null;
    }
    return {
        model: model,
        value: val
    };
};
cs.get.rgb = function(string) {
    if (!string) {
        return null;
    }
    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [
        0,
        0,
        0,
        1
    ];
    var match;
    var i;
    var hexAlpha;
    if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for(i = 0; i < 3; i++){
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
    } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for(i = 0; i < 3; i++){
            rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
    } else if (match = string.match(rgba)) {
        for(i = 0; i < 3; i++){
            rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
            if (match[5]) {
                rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
                rgb[3] = parseFloat(match[4]);
            }
        }
    } else if (match = string.match(per)) {
        for(i = 0; i < 3; i++){
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
            if (match[5]) {
                rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
                rgb[3] = parseFloat(match[4]);
            }
        }
    } else if (match = string.match(keyword)) {
        if (match[1] === 'transparent') {
            return [
                0,
                0,
                0,
                0
            ];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
            return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
    } else {
        return null;
    }
    for(i = 0; i < 3; i++){
        rgb[i] = clamp(rgb[i], 0, 255);
    }
    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
};
cs.get.hsl = function(string) {
    if (!string) {
        return null;
    }
    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            s,
            l,
            a
        ];
    }
    return null;
};
cs.get.hwb = function(string) {
    if (!string) {
        return null;
    }
    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);
    if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [
            h,
            w,
            b,
            a
        ];
    }
    return null;
};
cs.to.hex = function() {
    var rgba = swizzle(arguments);
    return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
};
cs.to.rgb = function() {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function() {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function() {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
cs.to.hwb = function() {
    var hwba = swizzle(arguments);
    var a = '';
    if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ', ' + hwba[3];
    }
    return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};
cs.to.keyword = function(rgb) {
    return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? '0' + str : str;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
var isArrayish = __turbopack_require__("[project-with-next]/node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js (ecmascript)");
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
    var results = [];
    for(var i = 0, len = args.length; i < len; i++){
        var arg = args[i];
        if (isArrayish(arg)) {
            results = concat.call(results, slice.call(arg));
        } else {
            results.push(arg);
        }
    }
    return results;
};
swizzle.wrap = function(fn) {
    return function() {
        return fn(swizzle(arguments));
    };
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = function isArrayish(obj) {
    if (!obj || typeof obj === 'string') {
        return false;
    }
    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

exports.parse = __turbopack_require__("[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/parse.js (ecmascript)");
exports.stringify = __turbopack_require__("[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/stringify.js (ecmascript)");
exports.parseValues = __turbopack_require__("[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/parseValues.js (ecmascript)");
exports.stringifyValues = __turbopack_require__("[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/stringifyValues.js (ecmascript)");

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/parse.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var Parser = __turbopack_require__("[project-with-next]/node_modules/.pnpm/fastparse@1.1.2/node_modules/fastparse/lib/Parser.js (ecmascript)");
var uniRegexp = __turbopack_require__("[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/uni-regexp.js (ecmascript)");
function unescape(str) {
    return str.replace(/\\(.)/g, "$1");
}
function commentMatch(match, content) {
    this.selector.nodes.push({
        type: "comment",
        content: content
    });
}
function typeMatch(type) {
    return function(match, name) {
        this.selector.nodes.push({
            type: type,
            name: unescape(name)
        });
    };
}
function pseudoClassStartMatch(match, name) {
    var newToken = {
        type: "pseudo-class",
        name: unescape(name),
        content: ""
    };
    this.selector.nodes.push(newToken);
    this.token = newToken;
    this.brackets = 1;
    return "inBrackets";
}
function nestedPseudoClassStartMatch(match, name, after) {
    var newSelector = {
        type: "selector",
        nodes: []
    };
    var newToken = {
        type: "nested-pseudo-class",
        name: unescape(name),
        nodes: [
            newSelector
        ]
    };
    if (after) {
        newSelector.before = after;
    }
    this.selector.nodes.push(newToken);
    this.stack.push(this.root);
    this.root = newToken;
    this.selector = newSelector;
}
function nestedEnd(match, before) {
    if (this.stack.length > 0) {
        if (before) {
            this.selector.after = before;
        }
        this.root = this.stack.pop();
        this.selector = this.root.nodes[this.root.nodes.length - 1];
    } else {
        this.selector.nodes.push({
            type: "invalid",
            value: match
        });
    }
}
function operatorMatch(match, before, operator, after) {
    var token = {
        type: "operator",
        operator: operator
    };
    if (before) {
        token.before = before;
    }
    if (after) {
        token.after = after;
    }
    this.selector.nodes.push(token);
}
function spacingMatch(match) {
    this.selector.nodes.push({
        type: "spacing",
        value: match
    });
}
function elementMatch(match, namespace, name) {
    var newToken = {
        type: "element",
        name: unescape(name)
    };
    if (namespace) {
        newToken.namespace = unescape(namespace.substr(0, namespace.length - 1));
    }
    this.selector.nodes.push(newToken);
}
function universalMatch(match, namespace) {
    var newToken = {
        type: "universal"
    };
    if (namespace) {
        newToken.namespace = unescape(namespace.substr(0, namespace.length - 1));
    }
    this.selector.nodes.push(newToken);
}
function attributeMatch(match, content) {
    this.selector.nodes.push({
        type: "attribute",
        content: content
    });
}
function invalidMatch(match) {
    this.selector.nodes.push({
        type: "invalid",
        value: match
    });
}
function irrelevantSpacingStartMatch(match) {
    this.selector.before = match;
}
function irrelevantSpacingEndMatch(match) {
    this.selector.after = match;
}
function nextSelectorMatch(match, before, after) {
    var newSelector = {
        type: "selector",
        nodes: []
    };
    if (before) {
        this.selector.after = before;
    }
    if (after) {
        newSelector.before = after;
    }
    this.root.nodes.push(newSelector);
    this.selector = newSelector;
}
function addToCurrent(match) {
    this.token.content += match;
}
function bracketStart(match) {
    this.token.content += match;
    this.brackets++;
}
function bracketEnd(match) {
    if (--this.brackets === 0) {
        return "selector";
    }
    this.token.content += match;
}
function getSelectors() {
    var selectors = {
        "/\\*([\\s\\S]*?)\\*/": commentMatch
    };
    selectors[uniRegexp.typeMatchClass] = typeMatch("class");
    selectors[uniRegexp.typeMatchId] = typeMatch("id");
    var selectorsSecondHalf = {
        ":(not|any|-\\w+?-any|matches|is|where|has|local|global)\\((\\s*)": nestedPseudoClassStartMatch,
        ":((?:\\\\.|[A-Za-z_\\-0-9])+)\\(": pseudoClassStartMatch,
        ":((?:\\\\.|[A-Za-z_\\-0-9])+)": typeMatch("pseudo-class"),
        "::((?:\\\\.|[A-Za-z_\\-0-9])+)": typeMatch("pseudo-element"),
        "(\\*\\|)((?:\\\\.|[A-Za-z_\\-0-9])+)": elementMatch,
        "(\\*\\|)\\*": universalMatch,
        "((?:\\\\.|[A-Za-z_\\-0-9])*\\|)?\\*": universalMatch,
        "((?:\\\\.|[A-Za-z_\\-0-9])*\\|)?((?:\\\\.|[A-Za-z_\\-])(?:\\\\.|[A-Za-z_\\-0-9])*)": elementMatch,
        "\\[([^\\]]+)\\]": attributeMatch,
        "(\\s*)\\)": nestedEnd,
        "(\\s*)((?:\\|\\|)|(?:>>)|[>+~])(\\s*)": operatorMatch,
        "(\\s*),(\\s*)": nextSelectorMatch,
        "\\s+$": irrelevantSpacingEndMatch,
        "^\\s+": irrelevantSpacingStartMatch,
        "\\s+": spacingMatch,
        ".": invalidMatch
    };
    var selector;
    for(selector in selectorsSecondHalf){
        if (Object.prototype.hasOwnProperty.call(selectorsSecondHalf, selector)) {
            selectors[selector] = selectorsSecondHalf[selector];
        }
    }
    return selectors;
}
var parser = new Parser({
    selector: getSelectors(),
    inBrackets: {
        "/\\*[\\s\\S]*?\\*/": addToCurrent,
        "\"([^\\\\\"]|\\\\.)*\"": addToCurrent,
        "'([^\\\\']|\\\\.)*'": addToCurrent,
        "[^()'\"/]+": addToCurrent,
        "\\(": bracketStart,
        "\\)": bracketEnd,
        ".": addToCurrent
    }
});
function parse(str) {
    var selectorNode = {
        type: "selector",
        nodes: []
    };
    var rootNode = {
        type: "selectors",
        nodes: [
            selectorNode
        ]
    };
    parser.parse("selector", str, {
        stack: [],
        root: rootNode,
        selector: selectorNode
    });
    return rootNode;
}
module.exports = parse;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/stringify.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var uniRegexp = __turbopack_require__("[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/uni-regexp.js (ecmascript)");
var identifierEscapeRegexp = new RegExp(uniRegexp.identifierEscapeRegexp, "g");
function escape(str, identifier) {
    if (str === "*") {
        return "*";
    }
    if (identifier) {
        return str.replace(identifierEscapeRegexp, "\\$1");
    } else {
        return str.replace(/(^[^A-Za-z_\\-]|^--|[^A-Za-z_0-9\\-])/g, "\\$1");
    }
}
function stringifyWithoutBeforeAfter(tree) {
    switch(tree.type){
        case "selectors":
            return tree.nodes.map(stringify).join(",");
        case "selector":
            return tree.nodes.map(stringify).join("");
        case "element":
            return (typeof tree.namespace === "string" ? escape(tree.namespace) + "|" : "") + escape(tree.name);
        case "class":
            return "." + escape(tree.name, true);
        case "id":
            return "#" + escape(tree.name, true);
        case "attribute":
            return "[" + tree.content + "]";
        case "spacing":
            return tree.value;
        case "pseudo-class":
            return ":" + escape(tree.name) + (typeof tree.content === "string" ? "(" + tree.content + ")" : "");
        case "nested-pseudo-class":
            return ":" + escape(tree.name) + "(" + tree.nodes.map(stringify).join(",") + ")";
        case "pseudo-element":
            return "::" + escape(tree.name);
        case "universal":
            return (typeof tree.namespace === "string" ? escape(tree.namespace) + "|" : "") + "*";
        case "operator":
            return tree.operator;
        case "comment":
            return "/*" + tree.content + "*/";
        case "invalid":
            return tree.value;
    }
}
function stringify(tree) {
    var str = stringifyWithoutBeforeAfter(tree);
    if (tree.before) {
        str = tree.before + str;
    }
    if (tree.after) {
        str = str + tree.after;
    }
    return str;
}
module.exports = stringify;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/parseValues.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var Parser = __turbopack_require__("[project-with-next]/node_modules/.pnpm/fastparse@1.1.2/node_modules/fastparse/lib/Parser.js (ecmascript)");
function commentMatch(match, content) {
    this.value.nodes.push({
        type: "comment",
        content: content
    });
}
function spacingMatch(match) {
    var item = this.value.nodes[this.value.nodes.length - 1];
    item.after = (item.after || "") + match;
}
function initialSpacingMatch(match) {
    this.value.before = match;
}
function endSpacingMatch(match) {
    this.value.after = match;
}
function unescapeString(content) {
    return content.replace(/\\(?:([a-fA-F0-9]{1,6})|(.))/g, function(all, unicode, otherCharacter) {
        if (otherCharacter) {
            return otherCharacter;
        }
        var C = parseInt(unicode, 16);
        if (C < 0x10000) {
            return String.fromCharCode(C);
        } else {
            return String.fromCharCode(Math.floor((C - 0x10000) / 0x400) + 0xD800) + String.fromCharCode((C - 0x10000) % 0x400 + 0xDC00);
        }
    });
}
function stringMatch(match, content) {
    var value = unescapeString(content);
    this.value.nodes.push({
        type: "string",
        value: value,
        stringType: match[0]
    });
}
function commaMatch(match, spacing) {
    var newValue = {
        type: "value",
        nodes: []
    };
    if (spacing) {
        newValue.before = spacing;
    }
    this.root.nodes.push(newValue);
    this.value = newValue;
}
function itemMatch(match) {
    this.value.nodes.push({
        type: "item",
        name: match
    });
}
function nestedItemMatch(match, name, spacing) {
    this.stack.push(this.root);
    this.root = {
        type: "nested-item",
        name: name,
        nodes: [
            {
                type: "value",
                nodes: []
            }
        ]
    };
    if (spacing) {
        this.root.nodes[0].before = spacing;
    }
    this.value.nodes.push(this.root);
    this.value = this.root.nodes[0];
}
function nestedItemEndMatch(match, spacing, remaining) {
    if (this.stack.length === 0) {
        if (spacing) {
            var item = this.value.nodes[this.value.nodes.length - 1];
            item.after = (item.after || "") + spacing;
        }
        this.value.nodes.push({
            type: "invalid",
            value: remaining
        });
    } else {
        if (spacing) {
            this.value.after = spacing;
        }
        this.root = this.stack.pop();
        this.value = this.root.nodes[this.root.nodes.length - 1];
    }
}
function urlMatch(match, innerSpacingBefore, content, innerSpacingAfter) {
    var item = {
        type: "url"
    };
    if (innerSpacingBefore) {
        item.innerSpacingBefore = innerSpacingBefore;
    }
    if (innerSpacingAfter) {
        item.innerSpacingAfter = innerSpacingAfter;
    }
    switch(content[0]){
        case "\"":
            item.stringType = "\"";
            item.url = unescapeString(content.substr(1, content.length - 2));
            break;
        case "'":
            item.stringType = "'";
            item.url = unescapeString(content.substr(1, content.length - 2));
            break;
        default:
            item.url = unescapeString(content);
            break;
    }
    this.value.nodes.push(item);
}
var parser = new Parser({
    decl: {
        "^\\s+": initialSpacingMatch,
        "/\\*([\\s\\S]*?)\\*/": commentMatch,
        "\"((?:[^\\\\\"]|\\\\.)*)\"": stringMatch,
        "'((?:[^\\\\']|\\\\.)*)'": stringMatch,
        "url\\((\\s*)(\"(?:[^\\\\\"]|\\\\.)*\")(\\s*)\\)": urlMatch,
        "url\\((\\s*)('(?:[^\\\\']|\\\\.)*')(\\s*)\\)": urlMatch,
        "url\\((\\s*)((?:[^\\\\)'\"]|\\\\.)*)(\\s*)\\)": urlMatch,
        "([\\w-]+)\\((\\s*)": nestedItemMatch,
        "(\\s*)(\\))": nestedItemEndMatch,
        ",(\\s*)": commaMatch,
        "\\s+$": endSpacingMatch,
        "\\s+": spacingMatch,
        "[^\\s,)]+": itemMatch
    }
});
function parseValues(str) {
    var valueNode = {
        type: "value",
        nodes: []
    };
    var rootNode = {
        type: "values",
        nodes: [
            valueNode
        ]
    };
    parser.parse("decl", str, {
        stack: [],
        root: rootNode,
        value: valueNode
    });
    return rootNode;
}
module.exports = parseValues;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/stringifyValues.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
var cssesc = __turbopack_require__("[project-with-next]/node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js (ecmascript)");
var stringify;
function escape(str, stringType) {
    return cssesc(str, {
        quotes: stringType === "\"" ? "double" : "single"
    });
}
function stringifyWithoutBeforeAfter(tree) {
    switch(tree.type){
        case "values":
            return tree.nodes.map(stringify).join(",");
        case "value":
            return tree.nodes.map(stringify).join("");
        case "item":
            return tree.name;
        case "nested-item":
            return tree.name + "(" + tree.nodes.map(stringify).join(",") + ")";
        case "invalid":
            return tree.value;
        case "comment":
            return "/*" + tree.content + "*/";
        case "string":
            switch(tree.stringType){
                case "'":
                    return "'" + escape(tree.value, "'") + "'";
                case "\"":
                    return "\"" + escape(tree.value, "\"") + "\"";
            }
            throw new Error("Invalid stringType");
        case "url":
            var start = "url(" + (tree.innerSpacingBefore || "");
            var end = (tree.innerSpacingAfter || "") + ")";
            switch(tree.stringType){
                case "'":
                    return start + "'" + tree.url.replace(/(\\)/g, "\\$1").replace(/'/g, "\\'") + "'" + end;
                case "\"":
                    return start + "\"" + tree.url.replace(/(\\)/g, "\\$1").replace(/"/g, "\\\"") + "\"" + end;
                default:
                    return start + tree.url.replace(/("|'|\)|\\)/g, "\\$1") + end;
            }
    }
}
stringify = function stringify(tree) {
    var str = stringifyWithoutBeforeAfter(tree);
    if (tree.before) {
        str = tree.before + str;
    }
    if (tree.after) {
        str = str + tree.after;
    }
    return str;
};
module.exports = stringify;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/css-selector-tokenizer@0.8.0/node_modules/css-selector-tokenizer/lib/uni-regexp.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    "typeMatchClass": "\\.((?:\\\\(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])|(?:[\\x2DA-Z_a-z\\xA0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]))(?:\\\\(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])|(?:[\\x2D0-9A-Z_a-z\\xA0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]))*)",
    "typeMatchId": "#((?:\\\\(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])|(?:[\\x2DA-Z_a-z\\xA0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]))(?:\\\\(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])|(?:[\\x2D0-9A-Z_a-z\\xA0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]))*)",
    "identifierEscapeRegexp": "(^[\\0-,\\.-@\\[-\\^`\\{-\\x9F]|^\\x2D\\x2D|[\\0-,\\.\\/:-@\\[-\\^`\\{-\\x9F])"
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
var object = {};
var hasOwnProperty = object.hasOwnProperty;
var merge = function merge(options, defaults) {
    if (!options) {
        return defaults;
    }
    var result = {};
    for(var key in defaults){
        result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
    }
    return result;
};
var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
var regexAlwaysEscape = /['"\\]/;
var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
var cssesc = function cssesc(string, options) {
    options = merge(options, cssesc.options);
    if (options.quotes != 'single' && options.quotes != 'double') {
        options.quotes = 'single';
    }
    var quote = options.quotes == 'double' ? '"' : '\'';
    var isIdentifier = options.isIdentifier;
    var firstChar = string.charAt(0);
    var output = '';
    var counter = 0;
    var length = string.length;
    while(counter < length){
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        if (codePoint < 0x20 || codePoint > 0x7E) {
            if (codePoint >= 0xD800 && codePoint <= 0xDBFF && counter < length) {
                var extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                    codePoint = ((codePoint & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000;
                } else {
                    counter--;
                }
            }
            value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
        } else {
            if (options.escapeEverything) {
                if (regexAnySingleEscape.test(character)) {
                    value = '\\' + character;
                } else {
                    value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
                }
            } else if (/[\t\n\f\r\x0B]/.test(character)) {
                value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
            } else if (character == '\\' || !isIdentifier && (character == '"' && quote == character || character == '\'' && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
                value = '\\' + character;
            } else {
                value = character;
            }
        }
        output += value;
    }
    if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
            output = '\\-' + output.slice(1);
        } else if (/\d/.test(firstChar)) {
            output = '\\3' + firstChar + ' ' + output.slice(1);
        }
    }
    output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
            return $0;
        }
        return ($1 || '') + $2;
    });
    if (!isIdentifier && options.wrap) {
        return quote + output + quote;
    }
    return output;
};
cssesc.options = {
    'escapeEverything': false,
    'isIdentifier': false,
    'quotes': 'single',
    'wrap': false
};
cssesc.version = '3.0.0';
module.exports = cssesc;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/fastparse@1.1.2/node_modules/fastparse/lib/Parser.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

function ignoreFunction() {}
function createReturningFunction(value) {
    return function() {
        return value;
    };
}
function Parser(states) {
    this.states = this.compileStates(states);
}
Parser.prototype.compileStates = function(states) {
    var result = {};
    Object.keys(states).forEach(function(name) {
        result[name] = this.compileState(states[name], states);
    }, this);
    return result;
};
Parser.prototype.compileState = function(state, states) {
    var regExps = [];
    function iterator(str, value) {
        regExps.push({
            groups: Parser.getGroupCount(str),
            regExp: str,
            value: value
        });
    }
    function processState(statePart) {
        if (Array.isArray(statePart)) {
            statePart.forEach(processState);
        } else if (typeof statePart === "object") {
            Object.keys(statePart).forEach(function(key) {
                iterator(key, statePart[key]);
            });
        } else if (typeof statePart === "string") {
            processState(states[statePart]);
        } else {
            throw new Error("Unexpected 'state' format");
        }
    }
    processState(state);
    var total = regExps.map(function(r) {
        return "(" + r.regExp + ")";
    }).join("|");
    var actions = [];
    var pos = 1;
    regExps.forEach(function(r) {
        var fn;
        if (typeof r.value === "function") {
            fn = r.value;
        } else if (typeof r.value === "string") {
            fn = createReturningFunction(r.value);
        } else {
            fn = ignoreFunction;
        }
        actions.push({
            name: r.regExp,
            fn: fn,
            pos: pos,
            pos2: pos + r.groups + 1
        });
        pos += r.groups + 1;
    });
    return {
        regExp: new RegExp(total, "g"),
        actions: actions
    };
};
Parser.getGroupCount = function(regExpStr) {
    return new RegExp("(" + regExpStr + ")|^$").exec("").length - 2;
};
Parser.prototype.parse = function(initialState, string, context) {
    context = context || {};
    var currentState = initialState;
    var currentIndex = 0;
    for(;;){
        var state = this.states[currentState];
        var regExp = state.regExp;
        regExp.lastIndex = currentIndex;
        var match = regExp.exec(string);
        if (!match) return context;
        var actions = state.actions;
        currentIndex = state.regExp.lastIndex;
        for(var i = 0; i < actions.length; i++){
            var action = actions[i];
            if (match[action.pos]) {
                var ret = action.fn.apply(context, Array.prototype.slice.call(match, action.pos, action.pos2).concat([
                    state.regExp.lastIndex - match[0].length,
                    match[0].length
                ]));
                if (ret) {
                    if (!(ret in this.states)) throw new Error("State '" + ret + "' doesn't exist");
                    currentState = ret;
                }
                break;
            }
        }
    }
};
module.exports = Parser;

}.call(this) }),
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
"[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/colors.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

let colors = __turbopack_require__("[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/public/colors.js (ecmascript)");
module.exports = (colors.__esModule ? colors : {
    default: colors
}).default;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/public/colors.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _log = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/util/log.js (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function warn({ version , from , to  }) {
    _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        "Update your configuration file to silence this warning."
    ]);
}
const _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
    },
    zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b"
    },
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717"
    },
    stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917"
    },
    red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12"
    },
    amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12"
    },
    lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314"
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d"
    },
    emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
    },
    teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a"
    },
    cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63"
    },
    sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e"
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
    },
    indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
    },
    violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87"
    },
    fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75"
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
    },
    rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337"
    },
    get lightBlue () {
        warn({
            version: "v2.2",
            from: "lightBlue",
            to: "sky"
        });
        return this.sky;
    },
    get warmGray () {
        warn({
            version: "v3.0",
            from: "warmGray",
            to: "stone"
        });
        return this.stone;
    },
    get trueGray () {
        warn({
            version: "v3.0",
            from: "trueGray",
            to: "neutral"
        });
        return this.neutral;
    },
    get coolGray () {
        warn({
            version: "v3.0",
            from: "coolGray",
            to: "gray"
        });
        return this.gray;
    },
    get blueGray () {
        warn({
            version: "v3.0",
            from: "blueGray",
            to: "slate"
        });
        return this.slate;
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/tailwindcss@3.2.4/node_modules/tailwindcss/lib/util/log.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dim: ()=>dim,
    default: ()=>_default
});
const _picocolors = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let alreadyShown = new Set();
function log(type, messages, key) {
    if (typeof process !== "undefined" && process.env.JEST_WORKER_ID) return;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn("");
    messages.forEach((message)=>console.warn(type, "-", message));
}
function dim(input) {
    return _picocolors.default.dim(input);
}
const _default = {
    info (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    warn (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    risk (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/package.json (json)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"name\":\"daisyui\",\"version\":\"2.49.0\",\"description\":\"daisyUI - Tailwind CSS Components\",\"author\":\"Pouya Saadeghi\",\"license\":\"MIT\",\"homepage\":\"https://daisyui.com\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/saadeghi/daisyui.git\"},\"funding\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/daisyui\"},\"bugs\":{\"url\":\"https://github.com/saadeghi/daisyui/issues\"},\"keywords\":[\"design-system\",\"tailwindcss\",\"components\",\"ui-library\",\"component\",\"framework\",\"tailwind\",\"theming\",\"postcss\",\"design\",\"css\",\"ui\"],\"main\":\"src/index.js\",\"typings\":\"src/index.js\",\"files\":[\"src/lib/**/*.js\",\"dist/*.js\",\"dist/{themes,styled,unstyled,full}.css\",\"!dist/*.rtl.css\",\"src/index.js\",\"src/colors/*.js\"],\"browserslist\":[\"> 7%\"],\"publishConfig\":{\"access\":\"public\",\"branches\":[\"master\"]},\"prettier\":\"./src/prettier.config.js\",\"scripts\":{\"prettier\":\"prettier --write . --ignore-path ./src/.prettierignore\",\"prebase\":\"postcss --config src/base src/base/*.css --base src --dir dist\",\"base\":\"cat dist/base/*.css > dist/base.css\",\"postbase\":\"prejss-cli dist/base.css --format commonjs\",\"preutilities:global\":\"postcss --config src/utilities/global src/utilities/global/*.css --base src --dir dist\",\"utilities:global\":\"cat dist/utilities/global/*.css > dist/utilities.css\",\"postutilities:global\":\"prejss-cli dist/utilities.css --format commonjs\",\"preutilities:unstyled\":\"postcss --config src/utilities/unstyled src/utilities/unstyled/*.css --base src --dir dist\",\"utilities:unstyled\":\"cat dist/utilities/unstyled/*.css > dist/utilities-unstyled.css\",\"postutilities:unstyled\":\"prejss-cli dist/utilities-unstyled.css --format commonjs\",\"preutilities:styled\":\"postcss --config src/utilities/styled src/utilities/styled/*.css --base src --dir dist\",\"utilities:styled\":\"cat dist/utilities/styled/*.css > dist/utilities-styled.css\",\"postutilities:styled\":\"prejss-cli dist/utilities-styled.css --format commonjs\",\"components\":\"postcss --config src/components src/components/**/*.css --base src --dir dist\",\"merge:unstyled\":\"cat dist/components/unstyled/*.css > dist/unstyled.css\",\"merge:styled\":\"cat dist/components/unstyled/*.css dist/components/styled/*.css > dist/styled.css\",\"rtl\":\"rtlcss dist/unstyled.css -s && rtlcss dist/styled.css -s\",\"prejss\":\"prejss-cli dist/{unstyled,styled}{,.rtl}.css --format commonjs\",\"themes\":\"postcss src/themes/index.css -o dist/themes.css --config src/themes\",\"full\":\"postcss src/full/index.css -o dist/full.css --config src/full\",\"postfull\":\"parcel-css --minify --targets '> 7%' dist/full.css -o dist/full.css\",\"build\":\"npm run base && npm run utilities:global && npm run utilities:unstyled && npm run utilities:styled && npm run components && npm run merge:unstyled && npm run merge:styled && npm run rtl && npm run prejss && npm run themes && npm run full\",\"install:docs\":\"cd src/docs && npm install\",\"dev\":\"cd src/docs && npm run dev\",\"add\":\"touch src/components/unstyled/$npm_config_name.css && touch src/components/styled/$npm_config_name.css\",\"postadd\":\"open src/components/unstyled/$npm_config_name.css && open src/components/styled/$npm_config_name.css\",\"test\":\"vitest\",\"test:coverage\":\"vitest --coverage\",\"test:ui\":\"vitest --ui\",\"test:run\":\"vitest run\",\"playground\":\"cd src/experiments/playground && npm run dev\",\"release\":\"rm -f package-lock.json && standard-version\",\"release:patch\":\"rm -f package-lock.json && standard-version --release-as patch\",\"release:minor\":\"rm -f package-lock.json && standard-version --release-as minor\",\"release:major\":\"rm -f package-lock.json && standard-version --release-as major\"},\"devDependencies\":{\"@parcel/css-cli\":\"1.5.0\",\"@types/css-selector-tokenizer\":\"^0.7.1\",\"@vitest/ui\":\"^0.7.10\",\"autoprefixer\":\"10.0.4\",\"c8\":\"^7.11.0\",\"color-contrast-checker\":\"^2.1.0\",\"postcss-cli\":\"8.3.0\",\"postcss-import\":\"13.0.0\",\"postcss-nested\":\"5.0.1\",\"prejss-cli\":\"0.3.3\",\"prettier\":\"^2.7.1\",\"rtlcss\":\"3.0.0\",\"standard-version\":\"^9.5.0\",\"vitest\":\"^0.7.10\"},\"dependencies\":{\"color\":\"^4.2\",\"css-selector-tokenizer\":\"^0.8.0\",\"postcss-js\":\"^4.0.0\",\"tailwindcss\":\"^3\"},\"peerDependencies\":{\"autoprefixer\":\"^10.0.2\",\"postcss\":\"^8.1.6\"}}"));
})()),
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
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/utilities-unstyled.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    ".artboard-demo": {
        "display": "flex",
        "flex": "none",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center"
    },
    ".artboard.phone": {
        "width": "320px"
    },
    ".artboard.phone-1": {
        "width": "320px",
        "height": "568px"
    },
    ".artboard.phone-1.horizontal,\n      .artboard.phone-1.artboard-horizontal": {
        "width": "568px",
        "height": "320px"
    },
    ".artboard.phone-2": {
        "width": "375px",
        "height": "667px"
    },
    ".artboard.phone-2.horizontal,\n      .artboard.phone-2.artboard-horizontal": {
        "width": "667px",
        "height": "375px"
    },
    ".artboard.phone-3": {
        "width": "414px",
        "height": "736px"
    },
    ".artboard.phone-3.horizontal,\n      .artboard.phone-3.artboard-horizontal": {
        "width": "736px",
        "height": "414px"
    },
    ".artboard.phone-4": {
        "width": "375px",
        "height": "812px"
    },
    ".artboard.phone-4.horizontal,\n      .artboard.phone-4.artboard-horizontal": {
        "width": "812px",
        "height": "375px"
    },
    ".artboard.phone-5": {
        "width": "414px",
        "height": "896px"
    },
    ".artboard.phone-5.horizontal,\n      .artboard.phone-5.artboard-horizontal": {
        "width": "896px",
        "height": "414px"
    },
    ".artboard.phone-6": {
        "width": "320px",
        "height": "1024px"
    },
    ".artboard.phone-6.horizontal,\n      .artboard.phone-6.artboard-horizontal": {
        "width": "1024px",
        "height": "320px"
    },
    ".badge-xs": {
        "height": "0.75rem",
        "fontSize": "0.75rem",
        "lineHeight": ".75rem",
        "paddingLeft": "0.313rem",
        "paddingRight": "0.313rem"
    },
    ".badge-sm": {
        "height": "1rem",
        "fontSize": "0.75rem",
        "lineHeight": "1rem",
        "paddingLeft": "0.438rem",
        "paddingRight": "0.438rem"
    },
    ".badge-md": {
        "height": "1.25rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem",
        "paddingLeft": "0.563rem",
        "paddingRight": "0.563rem"
    },
    ".badge-lg": {
        "height": "1.5rem",
        "fontSize": "1rem",
        "lineHeight": "1.5rem",
        "paddingLeft": "0.688rem",
        "paddingRight": "0.688rem"
    },
    ".btm-nav-xs": {
        "height": "2.5rem"
    },
    ".btm-nav-xs>*:where(.active)": {
        "borderTopWidth": "1px"
    },
    ".btm-nav-xs .btm-nav-label": {
        "fontSize": "0.75rem",
        "lineHeight": "1rem"
    },
    ".btm-nav-sm": {
        "height": "3rem"
    },
    ".btm-nav-sm>*:where(.active)": {
        "borderTopWidth": "2px"
    },
    ".btm-nav-sm .btm-nav-label": {
        "fontSize": "0.75rem",
        "lineHeight": "1rem"
    },
    ".btm-nav-md": {
        "height": "4rem"
    },
    ".btm-nav-md>*:where(.active)": {
        "borderTopWidth": "2px"
    },
    ".btm-nav-md .btm-nav-label": {
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
    },
    ".btm-nav-lg": {
        "height": "5rem"
    },
    ".btm-nav-lg>*:where(.active)": {
        "borderTopWidth": "4px"
    },
    ".btm-nav-lg .btm-nav-label": {
        "fontSize": "1rem",
        "lineHeight": "1.5rem"
    },
    ".btn-xs": {
        "height": "1.5rem",
        "paddingLeft": "0.5rem",
        "paddingRight": "0.5rem",
        "minHeight": "1.5rem",
        "fontSize": "0.75rem"
    },
    ".btn-sm": {
        "height": "2rem",
        "paddingLeft": "0.75rem",
        "paddingRight": "0.75rem",
        "minHeight": "2rem",
        "fontSize": "0.875rem"
    },
    ".btn-md": {
        "height": "3rem",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "minHeight": "3rem",
        "fontSize": "0.875rem"
    },
    ".btn-lg": {
        "height": "4rem",
        "paddingLeft": "1.5rem",
        "paddingRight": "1.5rem",
        "minHeight": "4rem",
        "fontSize": "1.125rem"
    },
    ".btn-wide": {
        "width": "16rem"
    },
    ".btn-block": {
        "width": "100%"
    },
    ".btn-square:where(.btn-xs)": {
        "height": "1.5rem",
        "width": "1.5rem",
        "padding": "0px"
    },
    ".btn-square:where(.btn-sm)": {
        "height": "2rem",
        "width": "2rem",
        "padding": "0px"
    },
    ".btn-square:where(.btn-md)": {
        "height": "3rem",
        "width": "3rem",
        "padding": "0px"
    },
    ".btn-square:where(.btn-lg)": {
        "height": "4rem",
        "width": "4rem",
        "padding": "0px"
    },
    ".btn-circle:where(.btn-xs)": {
        "height": "1.5rem",
        "width": "1.5rem",
        "borderRadius": "9999px",
        "padding": "0px"
    },
    ".btn-circle:where(.btn-sm)": {
        "height": "2rem",
        "width": "2rem",
        "borderRadius": "9999px",
        "padding": "0px"
    },
    ".btn-circle:where(.btn-md)": {
        "height": "3rem",
        "width": "3rem",
        "borderRadius": "9999px",
        "padding": "0px"
    },
    ".btn-circle:where(.btn-lg)": {
        "height": "4rem",
        "width": "4rem",
        "borderRadius": "9999px",
        "padding": "0px"
    },
    ".btn-group-horizontal": {
        "flexDirection": "row"
    },
    ".btn-group-vertical": {
        "flexDirection": "column"
    },
    ".card-side": {
        "alignItems": "stretch",
        "flexDirection": "row"
    },
    ".card-side :where(figure:first-child)": {
        "overflow": "hidden",
        "borderStartStartRadius": "inherit",
        "borderStartEndRadius": "unset",
        "borderEndStartRadius": "inherit",
        "borderEndEndRadius": "unset"
    },
    ".card-side :where(figure:last-child)": {
        "overflow": "hidden",
        "borderStartStartRadius": "unset",
        "borderStartEndRadius": "inherit",
        "borderEndStartRadius": "unset",
        "borderEndEndRadius": "inherit"
    },
    ".card-side figure > *": {
        "maxWidth": "unset"
    },
    ":where(.card-side figure > *)": {
        "width": "100%",
        "height": "100%",
        "objectFit": "cover"
    },
    ".checkbox-xs": {
        "height": "1rem",
        "width": "1rem"
    },
    ".checkbox-sm": {
        "height": "1.25rem",
        "width": "1.25rem"
    },
    ".checkbox-md": {
        "height": "1.5rem",
        "width": "1.5rem"
    },
    ".checkbox-lg": {
        "height": "2rem",
        "width": "2rem"
    },
    ".divider-horizontal": {
        "flexDirection": "column"
    },
    ".divider-horizontal:before": {
        "height": "100%",
        "width": "0.125rem"
    },
    ".divider-horizontal:after": {
        "height": "100%",
        "width": "0.125rem"
    },
    ".divider-vertical": {
        "flexDirection": "row"
    },
    ".divider-vertical:before": {
        "height": "0.125rem",
        "width": "100%"
    },
    ".divider-vertical:after": {
        "height": "0.125rem",
        "width": "100%"
    },
    ".file-input-xs": {
        "height": "1.5rem",
        "paddingRight": "0.5rem",
        "fontSize": "0.75rem",
        "lineHeight": [
            "1rem",
            "1.625"
        ]
    },
    ".file-input-xs::file-selector-button": {
        "marginRight": "0.5rem",
        "height": "1.375rem",
        "minHeight": "1.375rem",
        "fontSize": "0.75rem"
    },
    ".file-input-sm": {
        "height": "2rem",
        "paddingRight": "0.75rem",
        "fontSize": "0.875rem",
        "lineHeight": "2rem"
    },
    ".file-input-sm::file-selector-button": {
        "marginRight": "0.75rem",
        "height": "1.875rem",
        "minHeight": "1.875rem",
        "fontSize": "0.875rem"
    },
    ".file-input-md": {
        "height": "3rem",
        "paddingRight": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ]
    },
    ".file-input-md::file-selector-button": {
        "marginRight": "1rem",
        "height": "2.875rem",
        "minHeight": "2.875rem",
        "fontSize": "0.875rem"
    },
    ".file-input-lg": {
        "height": "4rem",
        "paddingRight": "1.5rem",
        "fontSize": "1.125rem",
        "lineHeight": [
            "1.75rem",
            "2"
        ]
    },
    ".file-input-lg::file-selector-button": {
        "marginRight": "1.5rem",
        "height": "3.875rem",
        "minHeight": "3.875rem",
        "fontSize": "1.125rem"
    },
    ".indicator :where(.indicator-item)": {
        "right": "0px",
        "left": "auto",
        "top": "0px",
        "bottom": "auto",
        "-TwTranslateX": "50%",
        "-TwTranslateY": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".indicator :where(.indicator-item.indicator-start)": {
        "right": "auto",
        "left": "0px",
        "-TwTranslateX": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".indicator :where(.indicator-item.indicator-center)": {
        "right": "50%",
        "left": "50%",
        "-TwTranslateX": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".indicator :where(.indicator-item.indicator-end)": {
        "right": "0px",
        "left": "auto",
        "-TwTranslateX": "50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".indicator :where(.indicator-item.indicator-bottom)": {
        "top": "auto",
        "bottom": "0px",
        "-TwTranslateY": "50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".indicator :where(.indicator-item.indicator-middle)": {
        "top": "50%",
        "bottom": "50%",
        "-TwTranslateY": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".indicator :where(.indicator-item.indicator-top)": {
        "top": "0px",
        "bottom": "auto",
        "-TwTranslateY": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".input-xs": {
        "height": "1.5rem",
        "paddingLeft": "0.5rem",
        "paddingRight": "0.5rem",
        "fontSize": "0.75rem",
        "lineHeight": [
            "1rem",
            "1.625"
        ]
    },
    ".input-md": {
        "height": "3rem",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ]
    },
    ".input-lg": {
        "height": "4rem",
        "paddingLeft": "1.5rem",
        "paddingRight": "1.5rem",
        "fontSize": "1.125rem",
        "lineHeight": [
            "1.75rem",
            "2"
        ]
    },
    ".input-sm": {
        "height": "2rem",
        "paddingLeft": "0.75rem",
        "paddingRight": "0.75rem",
        "fontSize": "0.875rem",
        "lineHeight": "2rem"
    },
    ".kbd-xs": {
        "paddingLeft": "0.25rem",
        "paddingRight": "0.25rem",
        "fontSize": "0.75rem",
        "lineHeight": "1rem",
        "minHeight": "1.2em",
        "minWidth": "1.2em"
    },
    ".kbd-sm": {
        "paddingLeft": "0.25rem",
        "paddingRight": "0.25rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem",
        "minHeight": "1.6em",
        "minWidth": "1.6em"
    },
    ".kbd-md": {
        "paddingLeft": "0.5rem",
        "paddingRight": "0.5rem",
        "fontSize": "1rem",
        "lineHeight": "1.5rem",
        "minHeight": "2.2em",
        "minWidth": "2.2em"
    },
    ".kbd-lg": {
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "fontSize": "1.125rem",
        "lineHeight": "1.75rem",
        "minHeight": "2.5em",
        "minWidth": "2.5em"
    },
    ".menu-vertical": {
        "flexDirection": "column"
    },
    ".menu-vertical :where(li)": {
        "flexDirection": "column"
    },
    ".menu-vertical > :where(li) > :where(ul)": {
        "top": "initial",
        "left": "100%"
    },
    ".menu-horizontal": {
        "display": "inline-flex",
        "width": "max-content",
        "flexDirection": "row"
    },
    ".menu-horizontal :where(li)": {
        "flexDirection": "row"
    },
    ".menu-horizontal > :where(li) > :where(ul)": {
        "top": "100%",
        "left": "initial"
    },
    ".modal-bottom": {
        "alignItems": "flex-end"
    },
    ".modal-middle": {
        "alignItems": "center"
    },
    ".radio-xs": {
        "height": "1rem",
        "width": "1rem"
    },
    ".radio-sm": {
        "height": "1.25rem",
        "width": "1.25rem"
    },
    ".radio-md": {
        "height": "1.5rem",
        "width": "1.5rem"
    },
    ".radio-lg": {
        "height": "2rem",
        "width": "2rem"
    },
    ".range-xs": {
        "height": "1rem"
    },
    ".range-xs::-webkit-slider-runnable-track": {
        "height": "0.25rem"
    },
    ".range-xs::-moz-range-track": {
        "height": "0.25rem"
    },
    ".range-xs::-webkit-slider-thumb": {
        "height": "1rem",
        "width": "1rem",
        "-FillerOffset": "0.4rem"
    },
    ".range-xs::-moz-range-thumb": {
        "height": "1rem",
        "width": "1rem",
        "-FillerOffset": "0.4rem"
    },
    ".range-sm": {
        "height": "1.25rem"
    },
    ".range-sm::-webkit-slider-runnable-track": {
        "height": "0.25rem"
    },
    ".range-sm::-moz-range-track": {
        "height": "0.25rem"
    },
    ".range-sm::-webkit-slider-thumb": {
        "height": "1.25rem",
        "width": "1.25rem",
        "-FillerOffset": "0.5rem"
    },
    ".range-sm::-moz-range-thumb": {
        "height": "1.25rem",
        "width": "1.25rem",
        "-FillerOffset": "0.5rem"
    },
    ".range-md": {
        "height": "1.5rem"
    },
    ".range-md::-webkit-slider-runnable-track": {
        "height": "0.5rem"
    },
    ".range-md::-moz-range-track": {
        "height": "0.5rem"
    },
    ".range-md::-webkit-slider-thumb": {
        "height": "1.5rem",
        "width": "1.5rem",
        "-FillerOffset": "0.6rem"
    },
    ".range-md::-moz-range-thumb": {
        "height": "1.5rem",
        "width": "1.5rem",
        "-FillerOffset": "0.6rem"
    },
    ".range-lg": {
        "height": "2rem"
    },
    ".range-lg::-webkit-slider-runnable-track": {
        "height": "1rem"
    },
    ".range-lg::-moz-range-track": {
        "height": "1rem"
    },
    ".range-lg::-webkit-slider-thumb": {
        "height": "2rem",
        "width": "2rem",
        "-FillerOffset": "1rem"
    },
    ".range-lg::-moz-range-thumb": {
        "height": "2rem",
        "width": "2rem",
        "-FillerOffset": "1rem"
    },
    ".rating-xs input": {
        "height": "0.75rem",
        "width": "0.75rem"
    },
    ".rating-sm input": {
        "height": "1rem",
        "width": "1rem"
    },
    ".rating-md input": {
        "height": "1.5rem",
        "width": "1.5rem"
    },
    ".rating-lg input": {
        "height": "2.5rem",
        "width": "2.5rem"
    },
    ".rating-half.rating-xs input:not(.rating-hidden)": {
        "width": "0.375rem"
    },
    ".rating-half.rating-sm input:not(.rating-hidden)": {
        "width": "0.5rem"
    },
    ".rating-half.rating-md input:not(.rating-hidden)": {
        "width": "0.75rem"
    },
    ".rating-half.rating-lg input:not(.rating-hidden)": {
        "width": "1.25rem"
    },
    ".select-md": {
        "height": "3rem",
        "paddingLeft": "1rem",
        "paddingRight": "2.5rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ],
        "minHeight": "3rem"
    },
    "[dir=\"rtl\"] .select-md": {
        "paddingRight": "1rem",
        "paddingLeft": "2.5rem"
    },
    ".select-lg": {
        "height": "4rem",
        "paddingLeft": "1.5rem",
        "paddingRight": "2rem",
        "fontSize": "1.125rem",
        "lineHeight": [
            "1.75rem",
            "2"
        ],
        "minHeight": "4rem"
    },
    "[dir=\"rtl\"] .select-lg": {
        "paddingRight": "1.5rem",
        "paddingLeft": "2rem"
    },
    ".select-sm": {
        "height": "2rem",
        "paddingLeft": "0.75rem",
        "paddingRight": "2rem",
        "fontSize": "0.875rem",
        "lineHeight": "2rem",
        "minHeight": "2rem"
    },
    "[dir=\"rtl\"] .select-sm": {
        "paddingRight": "0.75rem",
        "paddingLeft": "2rem"
    },
    ".select-xs": {
        "height": "1.5rem",
        "paddingLeft": "0.5rem",
        "paddingRight": "2rem",
        "fontSize": "0.75rem",
        "lineHeight": [
            "1rem",
            "1.625"
        ],
        "minHeight": "1.5rem"
    },
    "[dir=\"rtl\"] .select-xs": {
        "paddingRight": "0.5rem",
        "paddingLeft": "2rem"
    },
    ".stats-horizontal": {
        "gridAutoFlow": "column"
    },
    ".stats-vertical": {
        "gridAutoFlow": "row"
    },
    ".steps-horizontal": {
        "gridAutoColumns": "1fr",
        "display": "inline-grid",
        "gridAutoFlow": "column",
        "overflow": "hidden",
        "overflowX": "auto"
    },
    ".steps-horizontal .step": {
        "display": "grid",
        "gridTemplateColumns": "repeat(1, minmax(0, 1fr))",
        "gridTemplateRows": "repeat(2, minmax(0, 1fr))",
        "placeItems": "center",
        "textAlign": "center"
    },
    ".steps-vertical": {
        "gridAutoRows": "1fr",
        "gridAutoFlow": "row"
    },
    ".steps-vertical .step": {
        "display": "grid",
        "gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
        "gridTemplateRows": "repeat(1, minmax(0, 1fr))"
    },
    ".tab-md": {
        "height": "2rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ],
        "-TabPadding": "1rem"
    },
    ".tab-lg": {
        "height": "3rem",
        "fontSize": "1.125rem",
        "lineHeight": [
            "1.75rem",
            "2"
        ],
        "-TabPadding": "1.25rem"
    },
    ".tab-sm": {
        "height": "1.5rem",
        "fontSize": "0.875rem",
        "lineHeight": ".75rem",
        "-TabPadding": "0.75rem"
    },
    ".tab-xs": {
        "height": "1.25rem",
        "fontSize": "0.75rem",
        "lineHeight": ".75rem",
        "-TabPadding": "0.5rem"
    },
    ".textarea-xs": {
        "paddingTop": "0.25rem",
        "paddingBottom": "0.25rem",
        "paddingLeft": "0.5rem",
        "paddingRight": "0.5rem",
        "fontSize": "0.75rem",
        "lineHeight": [
            "1rem",
            "1.625"
        ]
    },
    ".textarea-sm": {
        "paddingTop": "0.25rem",
        "paddingBottom": "0.25rem",
        "paddingLeft": "0.75rem",
        "paddingRight": "0.75rem",
        "fontSize": "0.875rem",
        "lineHeight": "2rem"
    },
    ".textarea-md": {
        "paddingTop": "0.75rem",
        "paddingBottom": "0.75rem",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "fontSize": "0.875rem",
        "lineHeight": [
            "1.25rem",
            "2"
        ]
    },
    ".textarea-lg": {
        "paddingTop": "1rem",
        "paddingBottom": "1rem",
        "paddingLeft": "1.5rem",
        "paddingRight": "1.5rem",
        "fontSize": "1.125rem",
        "lineHeight": [
            "1.75rem",
            "2"
        ]
    },
    ":where(.toast)": {
        "right": "0px",
        "left": "auto",
        "top": "auto",
        "bottom": "0px",
        "-TwTranslateX": "0px",
        "-TwTranslateY": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".toast:where(.toast-start)": {
        "right": "auto",
        "left": "0px",
        "-TwTranslateX": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".toast:where(.toast-center)": {
        "right": "50%",
        "left": "50%",
        "-TwTranslateX": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".toast:where(.toast-end)": {
        "right": "0px",
        "left": "auto",
        "-TwTranslateX": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".toast:where(.toast-bottom)": {
        "top": "auto",
        "bottom": "0px",
        "-TwTranslateY": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".toast:where(.toast-middle)": {
        "top": "50%",
        "bottom": "auto",
        "-TwTranslateY": "-50%",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".toast:where(.toast-top)": {
        "top": "0px",
        "bottom": "auto",
        "-TwTranslateY": "0px",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    },
    ".toggle-xs": {
        "-Handleoffset": "0.5rem",
        "height": "1rem",
        "width": "1.5rem"
    },
    ".toggle-sm": {
        "-Handleoffset": "0.75rem",
        "height": "1.25rem",
        "width": "2rem"
    },
    ".toggle-md": {
        "-Handleoffset": "1.5rem",
        "height": "1.5rem",
        "width": "3rem"
    },
    ".toggle-lg": {
        "-Handleoffset": "2rem",
        "height": "2rem",
        "width": "4rem"
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/styled.rtl.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

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
        "paddingRight": "0.563rem",
        "paddingLeft": "0.563rem",
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
        "right": "0px",
        "left": "0px",
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
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
        "borderBottomRightRadius": "0px"
    },
    ".chat-start .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3'/%3e%3c/svg%3e\")",
        "right": "-0.75rem"
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
        "borderBottomLeftRadius": "0px"
    },
    ".chat-end .chat-bubble:before": {
        "WebkitMaskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")",
        "maskImage": "url(\"data:image/svg+xml,%3csvg width='3' height='3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0'/%3e%3c/svg%3e\")",
        "right": "100%"
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
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
                "direction": "rtl"
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
        "left": "0px"
    },
    ".dropdown-left .dropdown-content": {
        "top": "0px",
        "left": "100%",
        "bottom": "auto",
        "transformOrigin": "left"
    },
    ".dropdown-right .dropdown-content": {
        "right": "100%",
        "top": "0px",
        "bottom": "auto",
        "transformOrigin": "right"
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
        "paddingLeft": "1rem",
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
        "borderColor": [
            "transparent",
            "hsl(var(--n) / var(--tw-border-opacity))"
        ],
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
        "paddingRight": "0.25rem",
        "paddingLeft": "0.25rem",
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
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
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
        "justifyContent": "center",
        "borderWidth": "1px",
        "borderColor": "hsl(var(--bc) / var(--tw-border-opacity))",
        "-TwBorderOpacity": "0.2",
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))",
        "paddingRight": "0.5rem",
        "paddingLeft": "0.5rem",
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
        "right": "100%",
        "borderTopRightRadius": "inherit",
        "borderTopLeftRadius": "inherit",
        "borderBottomLeftRadius": "inherit",
        "borderBottomRightRadius": "inherit"
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
        "textAlign": "left",
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
        "borderTopRightRadius": "var(--rounded-box, 1rem)",
        "borderTopLeftRadius": "var(--rounded-box, 1rem)",
        "borderBottomRightRadius": "var(--rounded-box, 1rem)",
        "borderBottomLeftRadius": "var(--rounded-box, 1rem)",
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
        "left": "0px",
        "bottom": "0px",
        "right": "0px",
        "background": "radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0)",
        "WebkitMask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))",
        "mask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))"
    },
    ".radial-progress:after": {
        "inset": "calc(50% - var(--thickness) / 2)",
        "transform": "rotate(calc(-1*(var(--value) * 3.6deg - 90deg))) translate(calc(-1*(var(--size) / 2 - 50%)))",
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
        "paddingRight": "1rem",
        "paddingLeft": [
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
        "backgroundImage": "linear-gradient(-45deg, transparent 50%, currentColor 50%), linear-gradient(-135deg, currentColor 50%, transparent 50%)",
        "backgroundPosition": "calc(100% - (100% - 20px)) calc(1px + 50%), calc(100% - (100% - 16px)) calc(1px + 50%)",
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
        "paddingRight": "1.5rem",
        "paddingLeft": "1.5rem",
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
        "paddingRight": "var(--tab-padding, 1rem)",
        "paddingLeft": "var(--tab-padding, 1rem)"
    },
    ".table": {
        "position": "relative",
        "textAlign": "right"
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
        "paddingRight": "0.5rem",
        "paddingLeft": "0.5rem",
        "paddingTop": "0.25rem",
        "paddingBottom": "0.25rem",
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem",
        "backgroundColor": "var(--tooltip-color)",
        "color": "var(--tooltip-text-color)",
        "width": "max-content"
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
        "marginRight": "0.5rem",
        "marginLeft": "0.75rem",
        "display": "block",
        "height": "0.375rem",
        "width": "0.375rem",
        "-TwRotate": "45deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        "opacity": "0.4",
        "borderTop": "1px solid",
        "borderLeft": "1px solid",
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
        "marginLeft": "0px"
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
        "backgroundImage": "linear-gradient(45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(-45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%)"
    },
    ".checkbox:indeterminate": {
        "-TwBgOpacity": "1",
        "backgroundColor": "hsl(var(--bc) / var(--tw-bg-opacity))",
        "backgroundRepeat": "no-repeat",
        "animation": "checkmark var(--animation-input, 0.2s) ease-in-out",
        "backgroundImage": "linear-gradient(-90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(90deg, transparent 80%, hsl(var(--chkbg)) 80%), linear-gradient(0deg, hsl(var(--chkbg)) 43%, hsl(var(--chkfg)) 43%, hsl(var(--chkfg)) 57%, hsl(var(--chkbg)) 57%)"
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
        "backgroundImage": "linear-gradient(-45deg, transparent 65%, hsl(var(--chkbg)) 65.99%), linear-gradient(45deg, transparent 75%, hsl(var(--chkbg)) 75.99%), linear-gradient(-45deg, hsl(var(--chkbg)) 40%, transparent 40.99%), linear-gradient(45deg, hsl(var(--chkbg)) 30%, hsl(var(--chkfg)) 30.99%, hsl(var(--chkfg)) 40%, transparent 40.99%), linear-gradient(-45deg, hsl(var(--chkfg)) 50%, hsl(var(--chkbg)) 50.99%)"
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
        "left": "1.4rem",
        "content": "\"\"",
        "transformOrigin": "25% 75%",
        "boxShadow": "-2px 2px",
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
        "left": "1.4rem",
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
        "paddingLeft": "3rem",
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
        "borderRightWidth": "0px",
        "borderBottomWidth": "4px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".menu[class*=\" px-\"]:not(.menu[class*=\" px-0\"]) li > *,\n  .menu[class^=\"px-\"]:not(.menu[class^=\"px-0\"]) li > *,\n  .menu[class*=\" p-\"]:not(.menu[class*=\" p-0\"]) li > *,\n  .menu[class^=\"p-\"]:not(.menu[class^=\"p-0\"]) li > *": {
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".menu :where(li.bordered > *)": {
        "borderRightWidth": "4px",
        "-TwBorderOpacity": "1",
        "borderColor": "hsl(var(--p) / var(--tw-border-opacity))"
    },
    ".menu :where(li) > :where(*:not(ul))": {
        "gap": "0.75rem",
        "paddingRight": "1rem",
        "paddingLeft": "1rem",
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
        "marginRight": "1rem",
        "marginLeft": "1rem",
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
        "borderRightWidth": "4px",
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
        "borderTopRightRadius": "inherit",
        "borderTopLeftRadius": "inherit",
        "borderBottomLeftRadius": "unset",
        "borderBottomRightRadius": "unset"
    },
    ".menu > :where(li:first-child) > :where(:not(ul))": {
        "borderTopRightRadius": "inherit",
        "borderTopLeftRadius": "inherit",
        "borderBottomLeftRadius": "unset",
        "borderBottomRightRadius": "unset"
    },
    ".menu > :where(li:last-child)": {
        "borderTopRightRadius": "unset",
        "borderTopLeftRadius": "unset",
        "borderBottomLeftRadius": "inherit",
        "borderBottomRightRadius": "inherit"
    },
    ".menu > :where(li:last-child) > :where(:not(ul))": {
        "borderTopRightRadius": "unset",
        "borderTopLeftRadius": "unset",
        "borderBottomLeftRadius": "inherit",
        "borderBottomRightRadius": "inherit"
    },
    ".menu > :where(li) > :where(ul) :where(li)": {
        "width": "100%",
        "whiteSpace": "nowrap"
    },
    ".menu > :where(li) > :where(ul) :where(li) :where(ul)": {
        "paddingRight": "1rem"
    },
    ".menu > :where(li) > :where(ul) :where(li) > :where(:not(ul))": {
        "width": "100%",
        "whiteSpace": "nowrap"
    },
    ".menu > :where(li) > :where(ul) > :where(li:first-child)": {
        "borderTopRightRadius": "inherit",
        "borderTopLeftRadius": "inherit",
        "borderBottomLeftRadius": "unset",
        "borderBottomRightRadius": "unset"
    },
    ".menu > :where(li) > :where(ul) > :where(li:first-child) > :where(:not(ul))": {
        "borderTopRightRadius": "inherit",
        "borderTopLeftRadius": "inherit",
        "borderBottomLeftRadius": "unset",
        "borderBottomRightRadius": "unset"
    },
    ".menu > :where(li) > :where(ul) > :where(li:last-child)": {
        "borderTopRightRadius": "unset",
        "borderTopLeftRadius": "unset",
        "borderBottomLeftRadius": "inherit",
        "borderBottomRightRadius": "inherit"
    },
    ".menu > :where(li) > :where(ul) > :where(li:last-child) > :where(:not(ul))": {
        "borderTopRightRadius": "unset",
        "borderTopLeftRadius": "unset",
        "borderBottomLeftRadius": "inherit",
        "borderBottomRightRadius": "inherit"
    },
    ".mockup-code:before": {
        "content": "\"\"",
        "marginBottom": "1rem",
        "display": "block",
        "height": "0.75rem",
        "width": "0.75rem",
        "borderRadius": "9999px",
        "opacity": "0.3",
        "boxShadow": "-1.4em 0, -2.8em 0, -4.2em 0"
    },
    ".mockup-code pre": {
        "paddingLeft": "1.25rem"
    },
    ".mockup-code pre:before": {
        "content": "\"\"",
        "marginLeft": "2ch"
    },
    ".mockup-window:before": {
        "content": "\"\"",
        "marginBottom": "1rem",
        "display": "block",
        "height": "0.75rem",
        "width": "0.75rem",
        "borderRadius": "9999px",
        "opacity": "0.3",
        "boxShadow": "-1.4em 0, -2.8em 0, -4.2em 0"
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
        "right": "0px",
        "background": "#000",
        "height": "25px",
        "width": "150px",
        "margin": "0 auto",
        "borderBottomRightRadius": "17px",
        "borderBottomLeftRadius": "17px",
        "zIndex": "11"
    },
    ".mockup-phone .camera:before": {
        "content": "\"\"",
        "position": "absolute",
        "top": "35%",
        "right": "50%",
        "width": "50px",
        "height": "4px",
        "borderRadius": "5px",
        "backgroundColor": "#0c0b0e",
        "transform": "translate(50%, -50%)"
    },
    ".mockup-phone .camera:after": {
        "content": "\"\"",
        "position": "absolute",
        "top": "20%",
        "right": "70%",
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
        "marginLeft": "calc(0.5rem * var(--tw-space-x-reverse))",
        "marginRight": "calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"
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
        "right": "-40%",
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
            "right": "107%"
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
        "boxShadow": "0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(-1*(var(--filler-size) * -1 - var(--filler-offset))) 0 0 var(--filler-size)"
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
        "boxShadow": "0 0 0 3px hsl(var(--range-shdw)) inset, var(--focus-shadow, 0 0), calc(-1*(var(--filler-size) * -1 - var(--filler-offset))) 0 0 var(--filler-size)"
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
        "paddingLeft": "1rem"
    },
    "[dir=\"rtl\"] .select": {
        "backgroundPosition": "calc(100% - (0% + 12px)) calc(1px + 50%), calc(100% - (0% + 16px)) calc(1px + 50%)"
    },
    ":where(.stats) > :not([hidden]) ~ :not([hidden])": {
        "-TwDivideXReverse": "0",
        "borderLeftWidth": "calc(1px * var(--tw-divide-x-reverse))",
        "borderRightWidth": "calc(1px * calc(1 - var(--tw-divide-x-reverse)))",
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
        "marginRight": "-100%"
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
        "transform": "rotateY(-180deg)",
        "backfaceVisibility": "hidden",
        "opacity": "1"
    },
    ".swap-flip input:checked ~ .swap-off,\n.swap-flip.swap-active .swap-off,\n.swap-flip input:indeterminate ~ .swap-off": {
        "transform": "rotateY(180deg)",
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
        "borderBottomLeftRadius": "var(--tab-radius, 0.5rem)",
        "borderBottomRightRadius": "var(--tab-radius, 0.5rem)"
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
        "borderTopRightRadius": "var(--tab-radius, 0.5rem)",
        "borderTopLeftRadius": "var(--tab-radius, 0.5rem)",
        "borderBottomColor": "var(--tab-border-color)",
        "paddingRight": "var(--tab-padding, 1rem)",
        "paddingLeft": "var(--tab-padding, 1rem)",
        "paddingTop": "var(--tab-border, 1px)"
    },
    ".tab-lifted.tab-active": {
        "backgroundColor": "var(--tab-bg)",
        "borderWidth": "var(--tab-border, 1px) var(--tab-border, 1px) 0 var(--tab-border, 1px)",
        "borderRightColor": "var(--tab-border-color)",
        "borderLeftColor": "var(--tab-border-color)",
        "borderTopColor": "var(--tab-border-color)",
        "paddingRight": "calc(var(--tab-padding, 1rem) - var(--tab-border, 1px))",
        "paddingLeft": "calc(var(--tab-padding, 1rem) - var(--tab-border, 1px))",
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
        "right": "calc(var(--tab-radius, 0.5rem) * -1)",
        "-CirclePos": "top left",
        "backgroundImage": "var(--tab-corner-bg)"
    },
    "[dir=\"rtl\"] .tab-lifted.tab-active:before": {
        "-CirclePos": "top right"
    },
    ".tab-lifted.tab-active:after": {
        "left": "calc(var(--tab-radius, 0.5rem) * -1)",
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
        "borderTopRightRadius": "0.5rem"
    },
    ":where(.table *:first-child) :where(*:first-child) :where(th, td):last-child": {
        "borderTopLeftRadius": "0.5rem"
    },
    ":where(.table *:last-child) :where(*:last-child) :where(th, td):first-child": {
        "borderBottomRightRadius": "0.5rem"
    },
    ":where(.table *:last-child) :where(*:last-child) :where(th, td):last-child": {
        "borderBottomLeftRadius": "0.5rem"
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
        "boxShadow": "calc(-1*(var(--handleoffset) / 2)) 0 0 2px var(--tglbg) inset, calc(-1*(var(--handleoffset) / -2)) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset"
    },
    "[dir=\"rtl\"] .toggle:indeterminate": {
        "boxShadow": "calc(-1*(var(--handleoffset) / 2)) 0 0 2px var(--tglbg) inset, calc(-1*(var(--handleoffset) / -2)) 0 0 2px var(--tglbg) inset, 0 0 0 2px var(--tglbg) inset"
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
        "transform": "translateX(50%)",
        "borderColor": "var(--tooltip-color) transparent transparent transparent",
        "top": "auto",
        "right": "50%",
        "left": "auto",
        "bottom": "var(--tooltip-tail-offset)"
    },
    ".tooltip-bottom:after": {
        "transform": "translateX(50%)",
        "borderColor": "transparent transparent var(--tooltip-color) transparent",
        "top": "var(--tooltip-tail-offset)",
        "right": "50%",
        "left": "auto",
        "bottom": "auto"
    },
    ".tooltip-left:after": {
        "transform": "translateY(-50%)",
        "borderColor": "transparent var(--tooltip-color) transparent transparent",
        "top": "50%",
        "right": "auto",
        "left": "calc(var(--tooltip-tail-offset) + 1px)",
        "bottom": "auto"
    },
    ".tooltip-right:after": {
        "transform": "translateY(-50%)",
        "borderColor": "transparent transparent transparent var(--tooltip-color)",
        "top": "50%",
        "right": "calc(var(--tooltip-tail-offset) + 1px)",
        "left": "auto",
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
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/unstyled.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

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
        "paddingLeft": "0.563rem",
        "paddingRight": "0.563rem"
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
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
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
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
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
            "direction": "ltr"
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
        "right": "0px"
    },
    ".dropdown-left .dropdown-content": {
        "top": "0px",
        "right": "100%",
        "bottom": "auto"
    },
    ".dropdown-right .dropdown-content": {
        "left": "100%",
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
        "paddingRight": "1rem",
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
        "borderColor": "transparent",
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
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
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
        "left": "100%"
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
        "textAlign": "right"
    },
    ".mockup-window": {
        "position": "relative",
        "overflow": "hidden",
        "overflowX": "auto"
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
        "right": "0px",
        "bottom": "0px",
        "left": "0px",
        "background": "radial-gradient(farthest-side, currentColor 98%, #0000) top/var(--thickness) var(--thickness) no-repeat, conic-gradient(currentColor calc(var(--value) * 1%), #0000 0)",
        "WebkitMask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))",
        "mask": "radial-gradient(farthest-side, #0000 calc(99% - var(--thickness)), #000 calc(100% - var(--thickness)))"
    },
    ".radial-progress:after": {
        "inset": "calc(50% - var(--thickness) / 2)",
        "transform": "rotate(calc(var(--value) * 3.6deg - 90deg)) translate(calc(var(--size) / 2 - 50%))"
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
        "paddingLeft": "1rem",
        "paddingRight": "2.5rem",
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
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/base.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    ":root,\n[data-theme]": {
        "backgroundColor": "hsla(var(--b1) / var(--tw-bg-opacity, 1))",
        "color": "hsla(var(--bc) / var(--tw-text-opacity, 1))"
    },
    "html": {
        "WebkitTapHighlightColor": "transparent"
    }
};

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/daisyui@2.49.0_30673f4a5b98519e6133a8e3e28629e7/node_modules/daisyui/dist/utilities.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

module.exports = {
    ".rounded-box": {
        "borderRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-t-box": {
        "borderTopLeftRadius": "var(--rounded-box, 1rem)",
        "borderTopRightRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-b-box": {
        "borderBottomLeftRadius": "var(--rounded-box, 1rem)",
        "borderBottomRightRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-l-box": {
        "borderTopLeftRadius": "var(--rounded-box, 1rem)",
        "borderBottomLeftRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-r-box": {
        "borderTopRightRadius": "var(--rounded-box, 1rem)",
        "borderBottomRightRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-br-box": {
        "borderBottomRightRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-tr-box": {
        "borderTopRightRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-bl-box": {
        "borderBottomLeftRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-tl-box": {
        "borderTopLeftRadius": "var(--rounded-box, 1rem)"
    },
    ".rounded-btn": {
        "borderRadius": "var(--rounded-btn, 0.5rem)"
    },
    ".rounded-badge": {
        "borderRadius": "var(--rounded-badge, 1.9rem)"
    },
    ".glass,\n  .glass:hover,\n  .glass.btn-active": {
        "border": "none",
        "backdropFilter": "blur(var(--glass-blur, 40px))",
        "backgroundColor": "transparent",
        "backgroundImage": "linear-gradient(\n        135deg,\n        rgb(255 255 255 / var(--glass-opacity, 30%)) 0%,\n        rgb(0 0 0 / 0%) 100%\n      ),\n      linear-gradient(\n        var(--glass-reflex-degree, 100deg),\n        rgb(255 255 255 / var(--glass-reflex-opacity, 10%)) 25%,\n        rgb(0 0 0 / 0%) 25%\n      )",
        "boxShadow": "0 0 0 1px rgb(255 255 255 / var(--glass-border-opacity, 10%))\n        inset,\n      0 0 0 2px rgb(0 0 0 / 5%)",
        "textShadow": "0 1px rgb(0 0 0 / var(--glass-text-shadow-opacity, 5%))"
    },
    ".min-h-6": {
        "minHeight": "1.5rem"
    },
    ".min-h-8": {
        "minHeight": "2rem"
    },
    ".min-h-12": {
        "minHeight": "3rem"
    },
    ".min-h-16": {
        "minHeight": "4rem"
    },
    ".no-animation": {
        "-BtnFocusScale": "1",
        "-AnimationBtn": "0",
        "-AnimationInput": "0"
    },
    ".tab-border-none": {
        "-TabBorder": "0px"
    },
    ".tab-border": {
        "-TabBorder": "1px"
    },
    ".tab-border-2": {
        "-TabBorder": "2px"
    },
    ".tab-border-3": {
        "-TabBorder": "3px"
    },
    ".tab-rounded-none": {
        "-TabRadius": "0"
    },
    ".tab-rounded-lg": {
        "-TabRadius": "0.5rem"
    }
};

}.call(this) }),
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
"[project-with-next]/node_modules/.pnpm/camelcase-css@2.0.1/node_modules/camelcase-css/index.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
const pattern = /-(\w|$)/g;
const callback = (dashChar, char)=>char.toUpperCase();
const camelCaseCSS = (property)=>{
    property = property.toLowerCase();
    if (property === "float") {
        return "cssFloat";
    } else if (property.startsWith("-ms-")) {
        return property.substr(1).replace(pattern, callback);
    } else {
        return property.replace(pattern, callback);
    }
};
module.exports = camelCaseCSS;

}.call(this) }),
}]);


//# sourceMappingURL=[project-with-next]__5a3793.js.map