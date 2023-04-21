(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/0b867_css-selector-tokenizer_lib_index.js", {

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
}]);


//# sourceMappingURL=0b867_css-selector-tokenizer_lib_index.js.map