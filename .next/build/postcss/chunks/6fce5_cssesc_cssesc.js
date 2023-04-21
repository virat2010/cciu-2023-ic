(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/6fce5_cssesc_cssesc.js", {

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
}]);


//# sourceMappingURL=6fce5_cssesc_cssesc.js.map