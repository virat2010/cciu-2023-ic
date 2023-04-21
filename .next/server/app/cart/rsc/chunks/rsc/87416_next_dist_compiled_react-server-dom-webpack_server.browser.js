(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/87416_next_dist_compiled_react-server-dom-webpack_server.browser.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-server-dom-webpack/server.browser.js (ecmascript, rsc)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

(()=>{
    "use strict";
    var __webpack_modules__ = {
        531: (__unused_webpack_module, exports, __nccwpck_require__)=>{
            if (process.env.NODE_ENV !== "production") {
                (function() {
                    'use strict';
                    var React = __nccwpck_require__(522);
                    var ReactDOM = __nccwpck_require__(255);
                    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
                    function closeWithError(destination, error) {
                        if (typeof destination.error === 'function') {
                            destination.error(error);
                        } else {
                            destination.close();
                        }
                    }
                    var stringify = JSON.stringify;
                    function serializeRowHeader(tag, id) {
                        return tag + id.toString(16) + ':';
                    }
                    function processErrorChunkProd(request, id, digest) {
                        {
                            throw new Error('processErrorChunkProd should never be called while in development mode. Use processErrorChunkDev instead. This is a bug in React.');
                        }
                        var errorInfo = {
                            digest: digest
                        };
                        var row = serializeRowHeader('E', id) + stringify(errorInfo) + '\n';
                    }
                    function processErrorChunkDev(request, id, digest, message, stack) {
                        var errorInfo = {
                            digest: digest,
                            message: message,
                            stack: stack
                        };
                        var row = serializeRowHeader('E', id) + stringify(errorInfo) + '\n';
                        return stringToChunk(row);
                    }
                    function processModelChunk(request, id, model) {
                        var json = stringify(model, request.toJSON);
                        var row = serializeRowHeader('J', id) + json + '\n';
                        return stringToChunk(row);
                    }
                    function processReferenceChunk(request, id, reference) {
                        var json = stringify(reference);
                        var row = serializeRowHeader('J', id) + json + '\n';
                        return stringToChunk(row);
                    }
                    function processModuleChunk(request, id, moduleMetaData) {
                        var json = stringify(moduleMetaData);
                        var row = serializeRowHeader('M', id) + json + '\n';
                        return stringToChunk(row);
                    }
                    function processProviderChunk(request, id, contextName) {
                        var row = serializeRowHeader('P', id) + contextName + '\n';
                        return stringToChunk(row);
                    }
                    function processSymbolChunk(request, id, name) {
                        var json = stringify(name);
                        var row = serializeRowHeader('S', id) + json + '\n';
                        return stringToChunk(row);
                    }
                    var MODULE_TAG = Symbol.for('react.module.reference');
                    function getModuleKey(reference) {
                        return reference.filepath + '#' + reference.name + (reference.async ? '#async' : '');
                    }
                    function isModuleReference(reference) {
                        return reference.$$typeof === MODULE_TAG;
                    }
                    function resolveModuleMetaData(config, moduleReference) {
                        var resolvedModuleData = config[moduleReference.filepath][moduleReference.name];
                        if (moduleReference.async) {
                            return {
                                id: resolvedModuleData.id,
                                chunks: resolvedModuleData.chunks,
                                name: resolvedModuleData.name,
                                async: true
                            };
                        } else {
                            return resolvedModuleData;
                        }
                    }
                    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
                    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
                    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
                    var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
                    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
                    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
                    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
                    var REACT_MEMO_TYPE = Symbol.for('react.memo');
                    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
                    var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');
                    var REACT_MEMO_CACHE_SENTINEL = Symbol.for('react.memo_cache_sentinel');
                    var RESERVED = 0;
                    var STRING = 1;
                    var BOOLEANISH_STRING = 2;
                    var BOOLEAN = 3;
                    var OVERLOADED_BOOLEAN = 4;
                    var NUMERIC = 5;
                    var POSITIVE_NUMERIC = 6;
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
                    var isArrayImpl = Array.isArray;
                    function isArray(a) {
                        return isArrayImpl(a);
                    }
                    var clientRenderBoundary = '$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};';
                    var completeBoundary = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};';
                    var completeBoundaryWithStyles = '$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};';
                    var completeSegment = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};';
                    var ReactDOMSharedInternals = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                    var ReactDOMCurrentDispatcher = ReactDOMSharedInternals.Dispatcher;
                    var dataElementQuotedEnd = stringToPrecomputedChunk('"></template>');
                    var startInlineScript = stringToPrecomputedChunk('<script>');
                    var endInlineScript = stringToPrecomputedChunk('</script>');
                    var startScriptSrc = stringToPrecomputedChunk('<script src="');
                    var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
                    var scriptIntegirty = stringToPrecomputedChunk('" integrity="');
                    var endAsyncScript = stringToPrecomputedChunk('" async=""></script>');
                    var textSeparator = stringToPrecomputedChunk('<!-- -->');
                    var styleAttributeStart = stringToPrecomputedChunk(' style="');
                    var styleAssign = stringToPrecomputedChunk(':');
                    var styleSeparator = stringToPrecomputedChunk(';');
                    var attributeSeparator = stringToPrecomputedChunk(' ');
                    var attributeAssign = stringToPrecomputedChunk('="');
                    var attributeEnd = stringToPrecomputedChunk('"');
                    var attributeEmptyString = stringToPrecomputedChunk('=""');
                    var endOfStartTag = stringToPrecomputedChunk('>');
                    var endOfStartTagSelfClosing = stringToPrecomputedChunk('/>');
                    var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
                    var leadingNewline = stringToPrecomputedChunk('\n');
                    var DOCTYPE = stringToPrecomputedChunk('<!DOCTYPE html>');
                    var endTag1 = stringToPrecomputedChunk('</');
                    var endTag2 = stringToPrecomputedChunk('>');
                    var placeholder1 = stringToPrecomputedChunk('<template id="');
                    var placeholder2 = stringToPrecomputedChunk('"></template>');
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
                    var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegment + ';$RS("');
                    var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
                    var completeSegmentScript2 = stringToPrecomputedChunk('","');
                    var completeSegmentScriptEnd = stringToPrecomputedChunk('")</script>');
                    var completeSegmentData1 = stringToPrecomputedChunk('<template data-rsi="" data-sid="');
                    var completeSegmentData2 = stringToPrecomputedChunk('" data-pid="');
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
                    var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderBoundary + ';$RX("');
                    var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
                    var clientRenderScript1A = stringToPrecomputedChunk('"');
                    var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(',');
                    var clientRenderScriptEnd = stringToPrecomputedChunk(')</script>');
                    var clientRenderData1 = stringToPrecomputedChunk('<template data-rxi="" data-bid="');
                    var clientRenderData2 = stringToPrecomputedChunk('" data-dgst="');
                    var clientRenderData3 = stringToPrecomputedChunk('" data-msg="');
                    var clientRenderData4 = stringToPrecomputedChunk('" data-stck="');
                    var precedencePlaceholderStart = stringToPrecomputedChunk('<style data-precedence="');
                    var precedencePlaceholderEnd = stringToPrecomputedChunk('"></style>');
                    var arrayFirstOpenBracket = stringToPrecomputedChunk('[');
                    var arraySubsequentOpenBracket = stringToPrecomputedChunk(',[');
                    var arrayInterstitial = stringToPrecomputedChunk(',');
                    var arrayCloseBracket = stringToPrecomputedChunk(']');
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
                                pushNode(next);
                            }
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
                    function popProvider() {
                        var prevSnapshot = currentActiveSnapshot;
                        if (prevSnapshot === null) {
                            throw new Error('Tried to pop a Context at the root of the app. This is a bug in React.');
                        }
                        {
                            var value = prevSnapshot.parentValue;
                            if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
                                prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
                            } else {
                                prevSnapshot.context._currentValue = value;
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
                    var currentRequest = null;
                    var thenableIndexCounter = 0;
                    var thenableState = null;
                    function prepareToUseHooksForRequest(request) {
                        currentRequest = request;
                    }
                    function resetHooksForRequest() {
                        currentRequest = null;
                    }
                    function prepareToUseHooksForComponent(prevThenableState) {
                        thenableIndexCounter = 0;
                        thenableState = prevThenableState;
                    }
                    function getThenableStateAfterSuspending() {
                        var state = thenableState;
                        thenableState = null;
                        return state;
                    }
                    function readContext$1(context) {
                        {
                            if (context.$$typeof !== REACT_SERVER_CONTEXT_TYPE) {
                                error('Only createServerContext is supported in Server Components.');
                            }
                            if (currentRequest === null) {
                                error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
                            }
                        }
                        return readContext(context);
                    }
                    var HooksDispatcher = {
                        useMemo: function(nextCreate) {
                            return nextCreate();
                        },
                        useCallback: function(callback) {
                            return callback;
                        },
                        useDebugValue: function() {},
                        useDeferredValue: unsupportedHook,
                        useTransition: unsupportedHook,
                        readContext: readContext$1,
                        useContext: readContext$1,
                        useReducer: unsupportedHook,
                        useRef: unsupportedHook,
                        useState: unsupportedHook,
                        useInsertionEffect: unsupportedHook,
                        useLayoutEffect: unsupportedHook,
                        useImperativeHandle: unsupportedHook,
                        useEffect: unsupportedHook,
                        useId: useId,
                        useMutableSource: unsupportedHook,
                        useSyncExternalStore: unsupportedHook,
                        useCacheRefresh: function() {
                            return unsupportedRefresh;
                        },
                        useMemoCache: function(size) {
                            var data = new Array(size);
                            for(var i = 0; i < size; i++){
                                data[i] = REACT_MEMO_CACHE_SENTINEL;
                            }
                            return data;
                        },
                        use: use
                    };
                    function unsupportedHook() {
                        throw new Error('This Hook is not supported in Server Components.');
                    }
                    function unsupportedRefresh() {
                        throw new Error('Refreshing the cache is not supported in Server Components.');
                    }
                    function useId() {
                        if (currentRequest === null) {
                            throw new Error('useId can only be used while React is rendering');
                        }
                        var id = currentRequest.identifierCount++;
                        return ':' + currentRequest.identifierPrefix + 'S' + id.toString(32) + ':';
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
                            } else if (usable.$$typeof === REACT_SERVER_CONTEXT_TYPE) {
                                var context = usable;
                                return readContext$1(context);
                            }
                        }
                        throw new Error('An unsupported type was passed to use(): ' + String(usable));
                    }
                    function createSignal() {
                        return new AbortController().signal;
                    }
                    function resolveCache() {
                        if (currentCache) return currentCache;
                        if (supportsRequestStorage) {
                            var cache = requestStorage.getStore();
                            if (cache) return cache;
                        }
                        return new Map();
                    }
                    var DefaultCacheDispatcher = {
                        getCacheSignal: function() {
                            var cache = resolveCache();
                            var entry = cache.get(createSignal);
                            if (entry === undefined) {
                                entry = createSignal();
                                cache.set(createSignal, entry);
                            }
                            return entry;
                        },
                        getCacheForType: function(resourceType) {
                            var cache = resolveCache();
                            var entry = cache.get(resourceType);
                            if (entry === undefined) {
                                entry = resourceType();
                                cache.set(resourceType, entry);
                            }
                            return entry;
                        }
                    };
                    var currentCache = null;
                    function setCurrentCache(cache) {
                        currentCache = cache;
                        return currentCache;
                    }
                    function getCurrentCache() {
                        return currentCache;
                    }
                    var ContextRegistry = ReactSharedInternals.ContextRegistry;
                    function getOrCreateServerContext(globalName) {
                        if (!ContextRegistry[globalName]) {
                            ContextRegistry[globalName] = React.createServerContext(globalName, REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED);
                        }
                        return ContextRegistry[globalName];
                    }
                    var PENDING = 0;
                    var COMPLETED = 1;
                    var ABORTED = 3;
                    var ERRORED = 4;
                    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
                    var ReactCurrentCache = ReactSharedInternals.ReactCurrentCache;
                    function defaultErrorHandler(error) {
                        console['error'](error);
                    }
                    var OPEN = 0;
                    var CLOSING = 1;
                    var CLOSED = 2;
                    function createRequest(model, bundlerConfig, onError, context, identifierPrefix) {
                        if (ReactCurrentCache.current !== null && ReactCurrentCache.current !== DefaultCacheDispatcher) {
                            throw new Error('Currently React only supports one RSC renderer at a time.');
                        }
                        ReactCurrentCache.current = DefaultCacheDispatcher;
                        var abortSet = new Set();
                        var pingedTasks = [];
                        var request = {
                            status: OPEN,
                            fatalError: null,
                            destination: null,
                            bundlerConfig: bundlerConfig,
                            cache: new Map(),
                            nextChunkId: 0,
                            pendingChunks: 0,
                            abortableTasks: abortSet,
                            pingedTasks: pingedTasks,
                            completedModuleChunks: [],
                            completedJSONChunks: [],
                            completedErrorChunks: [],
                            writtenSymbols: new Map(),
                            writtenModules: new Map(),
                            writtenProviders: new Map(),
                            identifierPrefix: identifierPrefix || '',
                            identifierCount: 1,
                            onError: onError === undefined ? defaultErrorHandler : onError,
                            toJSON: function(key, value) {
                                return resolveModelToJSON(request, this, key, value);
                            }
                        };
                        request.pendingChunks++;
                        var rootContext = createRootContext(context);
                        var rootTask = createTask(request, model, rootContext, abortSet);
                        pingedTasks.push(rootTask);
                        return request;
                    }
                    function createRootContext(reqContext) {
                        return importServerContexts(reqContext);
                    }
                    var POP = {};
                    var jsxPropsParents = new WeakMap();
                    var jsxChildrenParents = new WeakMap();
                    function readThenable(thenable) {
                        if (thenable.status === 'fulfilled') {
                            return thenable.value;
                        } else if (thenable.status === 'rejected') {
                            throw thenable.reason;
                        }
                        throw thenable;
                    }
                    function createLazyWrapperAroundWakeable(wakeable) {
                        var thenable = wakeable;
                        switch(thenable.status){
                            case 'fulfilled':
                            case 'rejected':
                                break;
                            default:
                                {
                                    if (typeof thenable.status === 'string') {
                                        break;
                                    }
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
                                    break;
                                }
                        }
                        var lazyType = {
                            $$typeof: REACT_LAZY_TYPE,
                            _payload: thenable,
                            _init: readThenable
                        };
                        return lazyType;
                    }
                    function attemptResolveElement(type, key, ref, props, prevThenableState) {
                        if (ref !== null && ref !== undefined) {
                            throw new Error('Refs cannot be used in Server Components, nor passed to Client Components.');
                        }
                        {
                            jsxPropsParents.set(props, type);
                            if (typeof props.children === 'object' && props.children !== null) {
                                jsxChildrenParents.set(props.children, type);
                            }
                        }
                        if (typeof type === 'function') {
                            if (isModuleReference(type)) {
                                return [
                                    REACT_ELEMENT_TYPE,
                                    type,
                                    key,
                                    props
                                ];
                            }
                            prepareToUseHooksForComponent(prevThenableState);
                            var result = type(props);
                            if (typeof result === 'object' && result !== null && typeof result.then === 'function') {
                                return createLazyWrapperAroundWakeable(result);
                            }
                            return result;
                        } else if (typeof type === 'string') {
                            return [
                                REACT_ELEMENT_TYPE,
                                type,
                                key,
                                props
                            ];
                        } else if (typeof type === 'symbol') {
                            if (type === REACT_FRAGMENT_TYPE) {
                                return props.children;
                            }
                            return [
                                REACT_ELEMENT_TYPE,
                                type,
                                key,
                                props
                            ];
                        } else if (type != null && typeof type === 'object') {
                            if (isModuleReference(type)) {
                                return [
                                    REACT_ELEMENT_TYPE,
                                    type,
                                    key,
                                    props
                                ];
                            }
                            switch(type.$$typeof){
                                case REACT_LAZY_TYPE:
                                    {
                                        var payload = type._payload;
                                        var init = type._init;
                                        var wrappedType = init(payload);
                                        return attemptResolveElement(wrappedType, key, ref, props, prevThenableState);
                                    }
                                case REACT_FORWARD_REF_TYPE:
                                    {
                                        var render = type.render;
                                        prepareToUseHooksForComponent(prevThenableState);
                                        return render(props, undefined);
                                    }
                                case REACT_MEMO_TYPE:
                                    {
                                        return attemptResolveElement(type.type, key, ref, props, prevThenableState);
                                    }
                                case REACT_PROVIDER_TYPE:
                                    {
                                        pushProvider(type._context, props.value);
                                        {
                                            var extraKeys = Object.keys(props).filter(function(value) {
                                                if (value === 'children' || value === 'value') {
                                                    return false;
                                                }
                                                return true;
                                            });
                                            if (extraKeys.length !== 0) {
                                                error('ServerContext can only have a value prop and children. Found: %s', JSON.stringify(extraKeys));
                                            }
                                        }
                                        return [
                                            REACT_ELEMENT_TYPE,
                                            type,
                                            key,
                                            {
                                                value: props.value,
                                                children: props.children,
                                                __pop: POP
                                            }
                                        ];
                                    }
                            }
                        }
                        throw new Error("Unsupported Server Component type: " + describeValueForErrorMessage(type));
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
                    function createTask(request, model, context, abortSet) {
                        var id = request.nextChunkId++;
                        var task = {
                            id: id,
                            status: PENDING,
                            model: model,
                            context: context,
                            ping: function() {
                                return pingTask(request, task);
                            },
                            thenableState: null
                        };
                        abortSet.add(task);
                        return task;
                    }
                    function serializeByValueID(id) {
                        return '$' + id.toString(16);
                    }
                    function serializeByRefID(id) {
                        return '@' + id.toString(16);
                    }
                    function serializeModuleReference(request, parent, key, moduleReference) {
                        var moduleKey = getModuleKey(moduleReference);
                        var writtenModules = request.writtenModules;
                        var existingId = writtenModules.get(moduleKey);
                        if (existingId !== undefined) {
                            if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
                                return serializeByRefID(existingId);
                            }
                            return serializeByValueID(existingId);
                        }
                        try {
                            var moduleMetaData = resolveModuleMetaData(request.bundlerConfig, moduleReference);
                            request.pendingChunks++;
                            var moduleId = request.nextChunkId++;
                            emitModuleChunk(request, moduleId, moduleMetaData);
                            writtenModules.set(moduleKey, moduleId);
                            if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
                                return serializeByRefID(moduleId);
                            }
                            return serializeByValueID(moduleId);
                        } catch (x) {
                            request.pendingChunks++;
                            var errorId = request.nextChunkId++;
                            var digest = logRecoverableError(request, x);
                            {
                                var _getErrorMessageAndSt = getErrorMessageAndStackDev(x), message = _getErrorMessageAndSt.message, stack = _getErrorMessageAndSt.stack;
                                emitErrorChunkDev(request, errorId, digest, message, stack);
                            }
                            return serializeByValueID(errorId);
                        }
                    }
                    function escapeStringValue(value) {
                        if (value[0] === '$' || value[0] === '@') {
                            return '$' + value;
                        } else {
                            return value;
                        }
                    }
                    function isObjectPrototype(object) {
                        if (!object) {
                            return false;
                        }
                        var ObjectPrototype = Object.prototype;
                        if (object === ObjectPrototype) {
                            return true;
                        }
                        if (Object.getPrototypeOf(object)) {
                            return false;
                        }
                        var names = Object.getOwnPropertyNames(object);
                        for(var i = 0; i < names.length; i++){
                            if (!(names[i] in ObjectPrototype)) {
                                return false;
                            }
                        }
                        return true;
                    }
                    function isSimpleObject(object) {
                        if (!isObjectPrototype(Object.getPrototypeOf(object))) {
                            return false;
                        }
                        var names = Object.getOwnPropertyNames(object);
                        for(var i = 0; i < names.length; i++){
                            var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);
                            if (!descriptor) {
                                return false;
                            }
                            if (!descriptor.enumerable) {
                                if ((names[i] === 'key' || names[i] === 'ref') && typeof descriptor.get === 'function') {
                                    continue;
                                }
                                return false;
                            }
                        }
                        return true;
                    }
                    function objectName(object) {
                        var name = Object.prototype.toString.call(object);
                        return name.replace(/^\[object (.*)\]$/, function(m, p0) {
                            return p0;
                        });
                    }
                    function describeKeyForErrorMessage(key) {
                        var encodedKey = JSON.stringify(key);
                        return '"' + key + '"' === encodedKey ? key : encodedKey;
                    }
                    function describeValueForErrorMessage(value) {
                        switch(typeof value){
                            case 'string':
                                {
                                    return JSON.stringify(value.length <= 10 ? value : value.substr(0, 10) + '...');
                                }
                            case 'object':
                                {
                                    if (isArray(value)) {
                                        return '[...]';
                                    }
                                    var name = objectName(value);
                                    if (name === 'Object') {
                                        return '{...}';
                                    }
                                    return name;
                                }
                            case 'function':
                                return 'function';
                            default:
                                return String(value);
                        }
                    }
                    function describeElementType(type) {
                        if (typeof type === 'string') {
                            return type;
                        }
                        switch(type){
                            case REACT_SUSPENSE_TYPE:
                                return 'Suspense';
                            case REACT_SUSPENSE_LIST_TYPE:
                                return 'SuspenseList';
                        }
                        if (typeof type === 'object') {
                            switch(type.$$typeof){
                                case REACT_FORWARD_REF_TYPE:
                                    return describeElementType(type.render);
                                case REACT_MEMO_TYPE:
                                    return describeElementType(type.type);
                                case REACT_LAZY_TYPE:
                                    {
                                        var lazyComponent = type;
                                        var payload = lazyComponent._payload;
                                        var init = lazyComponent._init;
                                        try {
                                            return describeElementType(init(payload));
                                        } catch (x) {}
                                    }
                            }
                        }
                        return '';
                    }
                    function describeObjectForErrorMessage(objectOrArray, expandedName) {
                        var objKind = objectName(objectOrArray);
                        if (objKind !== 'Object' && objKind !== 'Array') {
                            return objKind;
                        }
                        var str = '';
                        var start = -1;
                        var length = 0;
                        if (isArray(objectOrArray)) {
                            if (jsxChildrenParents.has(objectOrArray)) {
                                var type = jsxChildrenParents.get(objectOrArray);
                                str = '<' + describeElementType(type) + '>';
                                var array = objectOrArray;
                                for(var i = 0; i < array.length; i++){
                                    var _value = array[i];
                                    var substr = void 0;
                                    if (typeof _value === 'string') {
                                        substr = _value;
                                    } else if (typeof _value === 'object' && _value !== null) {
                                        substr = '{' + describeObjectForErrorMessage(_value) + '}';
                                    } else {
                                        substr = '{' + describeValueForErrorMessage(_value) + '}';
                                    }
                                    if ('' + i === expandedName) {
                                        start = str.length;
                                        length = substr.length;
                                        str += substr;
                                    } else if (substr.length < 15 && str.length + substr.length < 40) {
                                        str += substr;
                                    } else {
                                        str += '{...}';
                                    }
                                }
                                str += '</' + describeElementType(type) + '>';
                            } else {
                                str = '[';
                                var _array = objectOrArray;
                                for(var _i = 0; _i < _array.length; _i++){
                                    if (_i > 0) {
                                        str += ', ';
                                    }
                                    var _value2 = _array[_i];
                                    var _substr = void 0;
                                    if (typeof _value2 === 'object' && _value2 !== null) {
                                        _substr = describeObjectForErrorMessage(_value2);
                                    } else {
                                        _substr = describeValueForErrorMessage(_value2);
                                    }
                                    if ('' + _i === expandedName) {
                                        start = str.length;
                                        length = _substr.length;
                                        str += _substr;
                                    } else if (_substr.length < 10 && str.length + _substr.length < 40) {
                                        str += _substr;
                                    } else {
                                        str += '...';
                                    }
                                }
                                str += ']';
                            }
                        } else {
                            if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) {
                                str = '<' + describeElementType(objectOrArray.type) + '/>';
                            } else if (jsxPropsParents.has(objectOrArray)) {
                                var _type = jsxPropsParents.get(objectOrArray);
                                str = '<' + (describeElementType(_type) || '...');
                                var object = objectOrArray;
                                var names = Object.keys(object);
                                for(var _i2 = 0; _i2 < names.length; _i2++){
                                    str += ' ';
                                    var name = names[_i2];
                                    str += describeKeyForErrorMessage(name) + '=';
                                    var _value3 = object[name];
                                    var _substr2 = void 0;
                                    if (name === expandedName && typeof _value3 === 'object' && _value3 !== null) {
                                        _substr2 = describeObjectForErrorMessage(_value3);
                                    } else {
                                        _substr2 = describeValueForErrorMessage(_value3);
                                    }
                                    if (typeof _value3 !== 'string') {
                                        _substr2 = '{' + _substr2 + '}';
                                    }
                                    if (name === expandedName) {
                                        start = str.length;
                                        length = _substr2.length;
                                        str += _substr2;
                                    } else if (_substr2.length < 10 && str.length + _substr2.length < 40) {
                                        str += _substr2;
                                    } else {
                                        str += '...';
                                    }
                                }
                                str += '>';
                            } else {
                                str = '{';
                                var _object = objectOrArray;
                                var _names = Object.keys(_object);
                                for(var _i3 = 0; _i3 < _names.length; _i3++){
                                    if (_i3 > 0) {
                                        str += ', ';
                                    }
                                    var _name = _names[_i3];
                                    str += describeKeyForErrorMessage(_name) + ': ';
                                    var _value4 = _object[_name];
                                    var _substr3 = void 0;
                                    if (typeof _value4 === 'object' && _value4 !== null) {
                                        _substr3 = describeObjectForErrorMessage(_value4);
                                    } else {
                                        _substr3 = describeValueForErrorMessage(_value4);
                                    }
                                    if (_name === expandedName) {
                                        start = str.length;
                                        length = _substr3.length;
                                        str += _substr3;
                                    } else if (_substr3.length < 10 && str.length + _substr3.length < 40) {
                                        str += _substr3;
                                    } else {
                                        str += '...';
                                    }
                                }
                                str += '}';
                            }
                        }
                        if (expandedName === undefined) {
                            return str;
                        }
                        if (start > -1 && length > 0) {
                            var highlight = ' '.repeat(start) + '^'.repeat(length);
                            return '\n  ' + str + '\n  ' + highlight;
                        }
                        return '\n  ' + str;
                    }
                    var insideContextProps = null;
                    var isInsideContextValue = false;
                    function resolveModelToJSON(request, parent, key, value) {
                        {
                            var originalValue = parent[key];
                            if (typeof originalValue === 'object' && originalValue !== value) {
                                if (objectName(originalValue) !== 'Object') {
                                    var jsxParentType = jsxChildrenParents.get(parent);
                                    if (typeof jsxParentType === 'string') {
                                        error('%s objects cannot be rendered as text children. Try formatting it using toString().%s', objectName(originalValue), describeObjectForErrorMessage(parent, key));
                                    } else {
                                        error('Only plain objects can be passed to Client Components from Server Components. ' + '%s objects are not supported.%s', objectName(originalValue), describeObjectForErrorMessage(parent, key));
                                    }
                                } else {
                                    error('Only plain objects can be passed to Client Components from Server Components. ' + 'Objects with toJSON methods are not supported. Convert it manually ' + 'to a simple value before passing it to props.%s', describeObjectForErrorMessage(parent, key));
                                }
                            }
                        }
                        switch(value){
                            case REACT_ELEMENT_TYPE:
                                return '$';
                        }
                        {
                            if (parent[0] === REACT_ELEMENT_TYPE && parent[1] && parent[1].$$typeof === REACT_PROVIDER_TYPE && key === '3') {
                                insideContextProps = value;
                            } else if (insideContextProps === parent && key === 'value') {
                                isInsideContextValue = true;
                            } else if (insideContextProps === parent && key === 'children') {
                                isInsideContextValue = false;
                            }
                        }
                        while(typeof value === 'object' && value !== null && (value.$$typeof === REACT_ELEMENT_TYPE || value.$$typeof === REACT_LAZY_TYPE)){
                            {
                                if (isInsideContextValue) {
                                    error('React elements are not allowed in ServerContext');
                                }
                            }
                            try {
                                switch(value.$$typeof){
                                    case REACT_ELEMENT_TYPE:
                                        {
                                            var element = value;
                                            value = attemptResolveElement(element.type, element.key, element.ref, element.props, null);
                                            break;
                                        }
                                    case REACT_LAZY_TYPE:
                                        {
                                            var payload = value._payload;
                                            var init = value._init;
                                            value = init(payload);
                                            break;
                                        }
                                }
                            } catch (thrownValue) {
                                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                                if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                                    request.pendingChunks++;
                                    var newTask = createTask(request, value, getActiveContext(), request.abortableTasks);
                                    var ping = newTask.ping;
                                    x.then(ping, ping);
                                    newTask.thenableState = getThenableStateAfterSuspending();
                                    return serializeByRefID(newTask.id);
                                } else {
                                    request.pendingChunks++;
                                    var errorId = request.nextChunkId++;
                                    var digest = logRecoverableError(request, x);
                                    {
                                        var _getErrorMessageAndSt2 = getErrorMessageAndStackDev(x), message = _getErrorMessageAndSt2.message, stack = _getErrorMessageAndSt2.stack;
                                        emitErrorChunkDev(request, errorId, digest, message, stack);
                                    }
                                    return serializeByRefID(errorId);
                                }
                            }
                        }
                        if (value === null) {
                            return null;
                        }
                        if (typeof value === 'object') {
                            if (isModuleReference(value)) {
                                return serializeModuleReference(request, parent, key, value);
                            } else if (value.$$typeof === REACT_PROVIDER_TYPE) {
                                var providerKey = value._context._globalName;
                                var writtenProviders = request.writtenProviders;
                                var providerId = writtenProviders.get(key);
                                if (providerId === undefined) {
                                    request.pendingChunks++;
                                    providerId = request.nextChunkId++;
                                    writtenProviders.set(providerKey, providerId);
                                    emitProviderChunk(request, providerId, providerKey);
                                }
                                return serializeByValueID(providerId);
                            } else if (value === POP) {
                                popProvider();
                                {
                                    insideContextProps = null;
                                    isInsideContextValue = false;
                                }
                                return undefined;
                            }
                            {
                                if (value !== null && !isArray(value)) {
                                    if (objectName(value) !== 'Object') {
                                        error('Only plain objects can be passed to Client Components from Server Components. ' + '%s objects are not supported.%s', objectName(value), describeObjectForErrorMessage(parent, key));
                                    } else if (!isSimpleObject(value)) {
                                        error('Only plain objects can be passed to Client Components from Server Components. ' + 'Classes or other objects with methods are not supported.%s', describeObjectForErrorMessage(parent, key));
                                    } else if (Object.getOwnPropertySymbols) {
                                        var symbols = Object.getOwnPropertySymbols(value);
                                        if (symbols.length > 0) {
                                            error('Only plain objects can be passed to Client Components from Server Components. ' + 'Objects with symbol properties like %s are not supported.%s', symbols[0].description, describeObjectForErrorMessage(parent, key));
                                        }
                                    }
                                }
                            }
                            return value;
                        }
                        if (typeof value === 'string') {
                            return escapeStringValue(value);
                        }
                        if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'undefined') {
                            return value;
                        }
                        if (typeof value === 'function') {
                            if (isModuleReference(value)) {
                                return serializeModuleReference(request, parent, key, value);
                            }
                            if (/^on[A-Z]/.test(key)) {
                                throw new Error('Event handlers cannot be passed to Client Component props.' + describeObjectForErrorMessage(parent, key) + '\nIf you need interactivity, consider converting part of this to a Client Component.');
                            } else {
                                throw new Error('Functions cannot be passed directly to Client Components ' + "because they're not serializable." + describeObjectForErrorMessage(parent, key));
                            }
                        }
                        if (typeof value === 'symbol') {
                            var writtenSymbols = request.writtenSymbols;
                            var existingId = writtenSymbols.get(value);
                            if (existingId !== undefined) {
                                return serializeByValueID(existingId);
                            }
                            var name = value.description;
                            if (Symbol.for(name) !== value) {
                                throw new Error('Only global symbols received from Symbol.for(...) can be passed to Client Components. ' + ("The symbol Symbol.for(" + value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, key));
                            }
                            request.pendingChunks++;
                            var symbolId = request.nextChunkId++;
                            emitSymbolChunk(request, symbolId, name);
                            writtenSymbols.set(value, symbolId);
                            return serializeByValueID(symbolId);
                        }
                        if (typeof value === 'bigint') {
                            throw new Error("BigInt (" + value + ") is not yet supported in Client Component props." + describeObjectForErrorMessage(parent, key));
                        }
                        throw new Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, key));
                    }
                    function logRecoverableError(request, error) {
                        var onError = request.onError;
                        var errorDigest = onError(error);
                        if (errorDigest != null && typeof errorDigest !== 'string') {
                            throw new Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
                        }
                        return errorDigest || '';
                    }
                    function getErrorMessageAndStackDev(error) {
                        {
                            var message;
                            var stack = '';
                            try {
                                if (error instanceof Error) {
                                    message = String(error.message);
                                    stack = String(error.stack);
                                } else {
                                    message = 'Error: ' + error;
                                }
                            } catch (x) {
                                message = 'An error occurred but serializing the error message failed.';
                            }
                            return {
                                message: message,
                                stack: stack
                            };
                        }
                    }
                    function fatalError(request, error) {
                        if (request.destination !== null) {
                            request.status = CLOSED;
                            closeWithError(request.destination, error);
                        } else {
                            request.status = CLOSING;
                            request.fatalError = error;
                        }
                    }
                    function emitErrorChunkProd(request, id, digest) {
                        var processedChunk = processErrorChunkProd(request, id, digest);
                        request.completedErrorChunks.push(processedChunk);
                    }
                    function emitErrorChunkDev(request, id, digest, message, stack) {
                        var processedChunk = processErrorChunkDev(request, id, digest, message, stack);
                        request.completedErrorChunks.push(processedChunk);
                    }
                    function emitModuleChunk(request, id, moduleMetaData) {
                        var processedChunk = processModuleChunk(request, id, moduleMetaData);
                        request.completedModuleChunks.push(processedChunk);
                    }
                    function emitSymbolChunk(request, id, name) {
                        var processedChunk = processSymbolChunk(request, id, name);
                        request.completedModuleChunks.push(processedChunk);
                    }
                    function emitProviderChunk(request, id, contextName) {
                        var processedChunk = processProviderChunk(request, id, contextName);
                        request.completedJSONChunks.push(processedChunk);
                    }
                    function retryTask(request, task) {
                        if (task.status !== PENDING) {
                            return;
                        }
                        switchContext(task.context);
                        try {
                            var _value5 = task.model;
                            if (typeof _value5 === 'object' && _value5 !== null && _value5.$$typeof === REACT_ELEMENT_TYPE) {
                                var element = _value5;
                                var prevThenableState = task.thenableState;
                                task.model = _value5;
                                _value5 = attemptResolveElement(element.type, element.key, element.ref, element.props, prevThenableState);
                                task.thenableState = null;
                                while(typeof _value5 === 'object' && _value5 !== null && _value5.$$typeof === REACT_ELEMENT_TYPE){
                                    var nextElement = _value5;
                                    task.model = _value5;
                                    _value5 = attemptResolveElement(nextElement.type, nextElement.key, nextElement.ref, nextElement.props, null);
                                }
                            }
                            var processedChunk = processModelChunk(request, task.id, _value5);
                            request.completedJSONChunks.push(processedChunk);
                            request.abortableTasks.delete(task);
                            task.status = COMPLETED;
                        } catch (thrownValue) {
                            var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                            if (typeof x === 'object' && x !== null && typeof x.then === 'function') {
                                var ping = task.ping;
                                x.then(ping, ping);
                                task.thenableState = getThenableStateAfterSuspending();
                                return;
                            } else {
                                request.abortableTasks.delete(task);
                                task.status = ERRORED;
                                var digest = logRecoverableError(request, x);
                                {
                                    var _getErrorMessageAndSt3 = getErrorMessageAndStackDev(x), message = _getErrorMessageAndSt3.message, stack = _getErrorMessageAndSt3.stack;
                                    emitErrorChunkDev(request, task.id, digest, message, stack);
                                }
                            }
                        }
                    }
                    function performWork(request) {
                        var prevDispatcher = ReactCurrentDispatcher.current;
                        var prevCache = getCurrentCache();
                        ReactCurrentDispatcher.current = HooksDispatcher;
                        setCurrentCache(request.cache);
                        prepareToUseHooksForRequest(request);
                        try {
                            var pingedTasks = request.pingedTasks;
                            request.pingedTasks = [];
                            for(var i = 0; i < pingedTasks.length; i++){
                                var task = pingedTasks[i];
                                retryTask(request, task);
                            }
                            if (request.destination !== null) {
                                flushCompletedChunks(request, request.destination);
                            }
                        } catch (error) {
                            logRecoverableError(request, error);
                            fatalError(request, error);
                        } finally{
                            ReactCurrentDispatcher.current = prevDispatcher;
                            setCurrentCache(prevCache);
                            resetHooksForRequest();
                        }
                    }
                    function abortTask(task, request, errorId) {
                        task.status = ABORTED;
                        var ref = serializeByValueID(errorId);
                        var processedChunk = processReferenceChunk(request, task.id, ref);
                        request.completedErrorChunks.push(processedChunk);
                    }
                    function flushCompletedChunks(request, destination) {
                        beginWriting();
                        try {
                            var moduleChunks = request.completedModuleChunks;
                            var i = 0;
                            for(; i < moduleChunks.length; i++){
                                request.pendingChunks--;
                                var chunk = moduleChunks[i];
                                var keepWriting = writeChunkAndReturn(destination, chunk);
                                if (!keepWriting) {
                                    request.destination = null;
                                    i++;
                                    break;
                                }
                            }
                            moduleChunks.splice(0, i);
                            var jsonChunks = request.completedJSONChunks;
                            i = 0;
                            for(; i < jsonChunks.length; i++){
                                request.pendingChunks--;
                                var _chunk = jsonChunks[i];
                                var _keepWriting = writeChunkAndReturn(destination, _chunk);
                                if (!_keepWriting) {
                                    request.destination = null;
                                    i++;
                                    break;
                                }
                            }
                            jsonChunks.splice(0, i);
                            var errorChunks = request.completedErrorChunks;
                            i = 0;
                            for(; i < errorChunks.length; i++){
                                request.pendingChunks--;
                                var _chunk2 = errorChunks[i];
                                var _keepWriting2 = writeChunkAndReturn(destination, _chunk2);
                                if (!_keepWriting2) {
                                    request.destination = null;
                                    i++;
                                    break;
                                }
                            }
                            errorChunks.splice(0, i);
                        } finally{
                            completeWriting(destination);
                        }
                        if (request.pendingChunks === 0) {
                            close(destination);
                        }
                    }
                    function startWork(request) {
                        if (supportsRequestStorage) {
                            scheduleWork(function() {
                                return requestStorage.run(request.cache, performWork, request);
                            });
                        } else {
                            scheduleWork(function() {
                                return performWork(request);
                            });
                        }
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
                            flushCompletedChunks(request, destination);
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
                                var digest = logRecoverableError(request, _error);
                                request.pendingChunks++;
                                var errorId = request.nextChunkId++;
                                if (true) {
                                    var _getErrorMessageAndSt4 = getErrorMessageAndStackDev(_error), message = _getErrorMessageAndSt4.message, stack = _getErrorMessageAndSt4.stack;
                                    emitErrorChunkDev(request, errorId, digest, message, stack);
                                } else {}
                                abortableTasks.forEach(function(task) {
                                    return abortTask(task, request, errorId);
                                });
                                abortableTasks.clear();
                            }
                            if (request.destination !== null) {
                                flushCompletedChunks(request, request.destination);
                            }
                        } catch (error) {
                            logRecoverableError(request, error);
                            fatalError(request, error);
                        }
                    }
                    function importServerContexts(contexts) {
                        if (contexts) {
                            var prevContext = getActiveContext();
                            switchContext(rootContextSnapshot);
                            for(var i = 0; i < contexts.length; i++){
                                var _contexts$i = contexts[i], name = _contexts$i[0], _value6 = _contexts$i[1];
                                var context = getOrCreateServerContext(name);
                                pushProvider(context, _value6);
                            }
                            var importedContext = getActiveContext();
                            switchContext(prevContext);
                            return importedContext;
                        }
                        return rootContextSnapshot;
                    }
                    function renderToReadableStream(model, webpackMap, options) {
                        var request = createRequest(model, webpackMap, options ? options.onError : undefined, options ? options.context : undefined, options ? options.identifierPrefix : undefined);
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
                        var stream = new ReadableStream({
                            type: 'bytes',
                            start: function(controller) {
                                startWork(request);
                            },
                            pull: function(controller) {
                                startFlowing(request, controller);
                            },
                            cancel: function(reason) {}
                        }, {
                            highWaterMark: 0
                        });
                        return stream;
                    }
                    exports.renderToReadableStream = renderToReadableStream;
                })();
            }
        },
        421: (__unused_webpack_module, exports, __nccwpck_require__)=>{
            var ea = __nccwpck_require__(522);
            var e = "function" === typeof AsyncLocalStorage, fa = e ? new AsyncLocalStorage : null, m = null, n = 0;
            function p(a, b) {
                if (0 !== b.length) if (512 < b.length) 0 < n && (a.enqueue(new Uint8Array(m.buffer, 0, n)), m = new Uint8Array(512), n = 0), a.enqueue(b);
                else {
                    var d = m.length - n;
                    d < b.length && (0 === d ? a.enqueue(m) : (m.set(b.subarray(0, d), n), a.enqueue(m), b = b.subarray(d)), m = new Uint8Array(512), n = 0);
                    m.set(b, n);
                    n += b.length;
                }
                return !0;
            }
            var q = new TextEncoder;
            function r(a) {
                return q.encode(a);
            }
            function ha(a, b) {
                "function" === typeof a.error ? a.error(b) : a.close();
            }
            var t = JSON.stringify, u = Symbol.for("react.module.reference"), v = Symbol.for("react.element"), ia = Symbol.for("react.fragment"), ja = Symbol.for("react.provider"), ka = Symbol.for("react.server_context"), la = Symbol.for("react.forward_ref"), ma = Symbol.for("react.suspense"), na = Symbol.for("react.suspense_list"), oa = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), pa = Symbol.for("react.default_value"), qa = Symbol.for("react.memo_cache_sentinel");
            function x(a, b, d, c, f, g, h) {
                this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
                this.attributeName = c;
                this.attributeNamespace = f;
                this.mustUseProperty = d;
                this.propertyName = a;
                this.type = b;
                this.sanitizeURL = g;
                this.removeEmptyString = h;
            }
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
                new x(a, 0, !1, a, null, !1, !1);
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
                new x(a[0], 1, !1, a[1], null, !1, !1);
            });
            [
                "contentEditable",
                "draggable",
                "spellCheck",
                "value"
            ].forEach(function(a) {
                new x(a, 2, !1, a.toLowerCase(), null, !1, !1);
            });
            [
                "autoReverse",
                "externalResourcesRequired",
                "focusable",
                "preserveAlpha"
            ].forEach(function(a) {
                new x(a, 2, !1, a, null, !1, !1);
            });
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
                new x(a, 3, !1, a.toLowerCase(), null, !1, !1);
            });
            [
                "checked",
                "multiple",
                "muted",
                "selected"
            ].forEach(function(a) {
                new x(a, 3, !0, a, null, !1, !1);
            });
            [
                "capture",
                "download"
            ].forEach(function(a) {
                new x(a, 4, !1, a, null, !1, !1);
            });
            [
                "cols",
                "rows",
                "size",
                "span"
            ].forEach(function(a) {
                new x(a, 6, !1, a, null, !1, !1);
            });
            [
                "rowSpan",
                "start"
            ].forEach(function(a) {
                new x(a, 5, !1, a.toLowerCase(), null, !1, !1);
            });
            var z = /[\-:]([a-z])/g;
            function A(a) {
                return a[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
                var b = a.replace(z, A);
                new x(b, 1, !1, a, null, !1, !1);
            });
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
                var b = a.replace(z, A);
                new x(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
            });
            [
                "xml:base",
                "xml:lang",
                "xml:space"
            ].forEach(function(a) {
                var b = a.replace(z, A);
                new x(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
            });
            [
                "tabIndex",
                "crossOrigin"
            ].forEach(function(a) {
                new x(a, 1, !1, a.toLowerCase(), null, !1, !1);
            });
            new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
            [
                "src",
                "href",
                "action",
                "formAction"
            ].forEach(function(a) {
                new x(a, 1, !1, a.toLowerCase(), null, !0, !0);
            });
            var B = {
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
            }, ra = [
                "Webkit",
                "ms",
                "Moz",
                "O"
            ];
            Object.keys(B).forEach(function(a) {
                ra.forEach(function(b) {
                    b = b + a.charAt(0).toUpperCase() + a.substring(1);
                    B[b] = B[a];
                });
            });
            var sa = Array.isArray;
            r('"></template>');
            r("<script>");
            r("\x3c/script>");
            r('<script src="');
            r('<script type="module" src="');
            r('" integrity="');
            r('" async="">\x3c/script>');
            r("\x3c!-- --\x3e");
            r(' style="');
            r(":");
            r(";");
            r(" ");
            r('="');
            r('"');
            r('=""');
            r(">");
            r("/>");
            r(' selected=""');
            r("\n");
            r("<!DOCTYPE html>");
            r("</");
            r(">");
            r('<template id="');
            r('"></template>');
            r("\x3c!--$--\x3e");
            r('\x3c!--$?--\x3e<template id="');
            r('"></template>');
            r("\x3c!--$!--\x3e");
            r("\x3c!--/$--\x3e");
            r("<template");
            r('"');
            r(' data-dgst="');
            r(' data-msg="');
            r(' data-stck="');
            r("></template>");
            r('<div hidden id="');
            r('">');
            r("</div>");
            r('<svg aria-hidden="true" style="display:none" id="');
            r('">');
            r("</svg>");
            r('<math aria-hidden="true" style="display:none" id="');
            r('">');
            r("</math>");
            r('<table hidden id="');
            r('">');
            r("</table>");
            r('<table hidden><tbody id="');
            r('">');
            r("</tbody></table>");
            r('<table hidden><tr id="');
            r('">');
            r("</tr></table>");
            r('<table hidden><colgroup id="');
            r('">');
            r("</colgroup></table>");
            r('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};;$RS("');
            r('$RS("');
            r('","');
            r('")\x3c/script>');
            r('<template data-rsi="" data-sid="');
            r('" data-pid="');
            r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RC("');
            r('$RC("');
            r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("');
            r('$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("');
            r('$RR("');
            r('","');
            r('",');
            r('"');
            r(")\x3c/script>");
            r('<template data-rci="" data-bid="');
            r('<template data-rri="" data-bid="');
            r('" data-sid="');
            r('" data-sty="');
            r('$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("');
            r('$RX("');
            r('"');
            r(",");
            r(")\x3c/script>");
            r('<template data-rxi="" data-bid="');
            r('" data-dgst="');
            r('" data-msg="');
            r('" data-stck="');
            r('<style data-precedence="');
            r('"></style>');
            r("[");
            r(",[");
            r(",");
            r("]");
            var C = null;
            function D(a, b) {
                if (a !== b) {
                    a.context._currentValue = a.parentValue;
                    a = a.parent;
                    var d = b.parent;
                    if (null === a) {
                        if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                    } else {
                        if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                        D(a, d);
                        b.context._currentValue = b.value;
                    }
                }
            }
            function ta(a) {
                a.context._currentValue = a.parentValue;
                a = a.parent;
                null !== a && ta(a);
            }
            function ua(a) {
                var b = a.parent;
                null !== b && ua(b);
                a.context._currentValue = a.value;
            }
            function va(a, b) {
                a.context._currentValue = a.parentValue;
                a = a.parent;
                if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
                a.depth === b.depth ? D(a, b) : va(a, b);
            }
            function wa(a, b) {
                var d = b.parent;
                if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
                a.depth === d.depth ? D(a, d) : wa(a, d);
                b.context._currentValue = b.value;
            }
            function G(a) {
                var b = C;
                b !== a && (null === b ? ua(a) : null === a ? ta(b) : b.depth === a.depth ? D(b, a) : b.depth > a.depth ? va(b, a) : wa(b, a), C = a);
            }
            function xa(a, b) {
                var d = a._currentValue;
                a._currentValue = b;
                var c = C;
                return C = a = {
                    parent: c,
                    depth: null === c ? 0 : c.depth + 1,
                    context: a,
                    parentValue: d,
                    value: b
                };
            }
            var H = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
            function ya() {}
            function za(a, b, d) {
                d = a[d];
                void 0 === d ? a.push(b) : d !== b && (b.then(ya, ya), b = d);
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
                        I = b;
                        throw H;
                }
            }
            var I = null;
            function Aa() {
                if (null === I) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
                var a = I;
                I = null;
                return a;
            }
            var J = null, K = 0, L = null;
            function Ba() {
                var a = L;
                L = null;
                return a;
            }
            function Ca(a) {
                return a._currentValue;
            }
            var Ha = {
                useMemo: function(a) {
                    return a();
                },
                useCallback: function(a) {
                    return a;
                },
                useDebugValue: function() {},
                useDeferredValue: M,
                useTransition: M,
                readContext: Ca,
                useContext: Ca,
                useReducer: M,
                useRef: M,
                useState: M,
                useInsertionEffect: M,
                useLayoutEffect: M,
                useImperativeHandle: M,
                useEffect: M,
                useId: Da,
                useMutableSource: M,
                useSyncExternalStore: M,
                useCacheRefresh: function() {
                    return Fa;
                },
                useMemoCache: function(a) {
                    for(var b = Array(a), d = 0; d < a; d++)b[d] = qa;
                    return b;
                },
                use: Ga
            };
            function M() {
                throw Error("This Hook is not supported in Server Components.");
            }
            function Fa() {
                throw Error("Refreshing the cache is not supported in Server Components.");
            }
            function Da() {
                if (null === J) throw Error("useId can only be used while React is rendering");
                var a = J.identifierCount++;
                return ":" + J.identifierPrefix + "S" + a.toString(32) + ":";
            }
            function Ga(a) {
                if (null !== a && "object" === typeof a) {
                    if ("function" === typeof a.then) {
                        var b = K;
                        K += 1;
                        null === L && (L = []);
                        return za(L, a, b);
                    }
                    if (a.$$typeof === ka) return a._currentValue;
                }
                throw Error("An unsupported type was passed to use(): " + String(a));
            }
            function N() {
                return (new AbortController).signal;
            }
            function Ia() {
                if (O) return O;
                if (e) {
                    var a = fa.getStore();
                    if (a) return a;
                }
                return new Map;
            }
            var Ja = {
                getCacheSignal: function() {
                    var a = Ia(), b = a.get(N);
                    void 0 === b && (b = N(), a.set(N, b));
                    return b;
                },
                getCacheForType: function(a) {
                    var b = Ia(), d = b.get(a);
                    void 0 === d && (d = a(), b.set(a, d));
                    return d;
                }
            }, O = null, P = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = P.ContextRegistry, R = P.ReactCurrentDispatcher, S = P.ReactCurrentCache;
            function Ka(a) {
                console.error(a);
            }
            function La(a, b, d, c, f) {
                if (null !== S.current && S.current !== Ja) throw Error("Currently React only supports one RSC renderer at a time.");
                S.current = Ja;
                var g = new Set, h = [], k = {
                    status: 0,
                    fatalError: null,
                    destination: null,
                    bundlerConfig: b,
                    cache: new Map,
                    nextChunkId: 0,
                    pendingChunks: 0,
                    abortableTasks: g,
                    pingedTasks: h,
                    completedModuleChunks: [],
                    completedJSONChunks: [],
                    completedErrorChunks: [],
                    writtenSymbols: new Map,
                    writtenModules: new Map,
                    writtenProviders: new Map,
                    identifierPrefix: f || "",
                    identifierCount: 1,
                    onError: void 0 === d ? Ka : d,
                    toJSON: function(a, b) {
                        return Ma(k, this, a, b);
                    }
                };
                k.pendingChunks++;
                b = Na(c);
                a = Oa(k, a, b, g);
                h.push(a);
                return k;
            }
            var Pa = {};
            function Qa(a) {
                if ("fulfilled" === a.status) return a.value;
                if ("rejected" === a.status) throw a.reason;
                throw a;
            }
            function Ra(a) {
                switch(a.status){
                    case "fulfilled":
                    case "rejected":
                        break;
                    default:
                        "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                            "pending" === a.status && (a.status = "fulfilled", a.value = b);
                        }, function(b) {
                            "pending" === a.status && (a.status = "rejected", a.reason = b);
                        }));
                }
                return {
                    $$typeof: w,
                    _payload: a,
                    _init: Qa
                };
            }
            function T(a, b, d, c, f) {
                if (null !== d && void 0 !== d) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
                if ("function" === typeof a) {
                    if (a.$$typeof === u) return [
                        v,
                        a,
                        b,
                        c
                    ];
                    K = 0;
                    L = f;
                    c = a(c);
                    return "object" === typeof c && null !== c && "function" === typeof c.then ? Ra(c) : c;
                }
                if ("string" === typeof a) return [
                    v,
                    a,
                    b,
                    c
                ];
                if ("symbol" === typeof a) return a === ia ? c.children : [
                    v,
                    a,
                    b,
                    c
                ];
                if (null != a && "object" === typeof a) {
                    if (a.$$typeof === u) return [
                        v,
                        a,
                        b,
                        c
                    ];
                    switch(a.$$typeof){
                        case w:
                            var g = a._init;
                            a = g(a._payload);
                            return T(a, b, d, c, f);
                        case la:
                            return b = a.render, K = 0, L = f, b(c, void 0);
                        case oa:
                            return T(a.type, b, d, c, f);
                        case ja:
                            return xa(a._context, c.value), [
                                v,
                                a,
                                b,
                                {
                                    value: c.value,
                                    children: c.children,
                                    __pop: Pa
                                }
                            ];
                    }
                }
                throw Error("Unsupported Server Component type: " + U(a));
            }
            function Oa(a, b, d, c) {
                var f = {
                    id: a.nextChunkId++,
                    status: 0,
                    model: b,
                    context: d,
                    ping: function() {
                        var b = a.pingedTasks;
                        b.push(f);
                        1 === b.length && V(a);
                    },
                    thenableState: null
                };
                c.add(f);
                return f;
            }
            function Sa(a, b, d, c) {
                var f = c.filepath + "#" + c.name + (c.async ? "#async" : ""), g = a.writtenModules, h = g.get(f);
                if (void 0 !== h) return b[0] === v && "1" === d ? "@" + h.toString(16) : "$" + h.toString(16);
                try {
                    var k = a.bundlerConfig[c.filepath][c.name];
                    var l = c.async ? {
                        id: k.id,
                        chunks: k.chunks,
                        name: k.name,
                        async: !0
                    } : k;
                    a.pendingChunks++;
                    var y = a.nextChunkId++, aa = t(l), ba = "M" + y.toString(16) + ":" + aa + "\n";
                    var ca = q.encode(ba);
                    a.completedModuleChunks.push(ca);
                    g.set(f, y);
                    return b[0] === v && "1" === d ? "@" + y.toString(16) : "$" + y.toString(16);
                } catch (da) {
                    return a.pendingChunks++, b = a.nextChunkId++, d = W(a, da), X(a, b, d), "$" + b.toString(16);
                }
            }
            function Ta(a) {
                return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(a, d) {
                    return d;
                });
            }
            function U(a) {
                switch(typeof a){
                    case "string":
                        return JSON.stringify(10 >= a.length ? a : a.substr(0, 10) + "...");
                    case "object":
                        if (sa(a)) return "[...]";
                        a = Ta(a);
                        return "Object" === a ? "{...}" : a;
                    case "function":
                        return "function";
                    default:
                        return String(a);
                }
            }
            function Y(a) {
                if ("string" === typeof a) return a;
                switch(a){
                    case ma:
                        return "Suspense";
                    case na:
                        return "SuspenseList";
                }
                if ("object" === typeof a) switch(a.$$typeof){
                    case la:
                        return Y(a.render);
                    case oa:
                        return Y(a.type);
                    case w:
                        var b = a._payload;
                        a = a._init;
                        try {
                            return Y(a(b));
                        } catch (d) {}
                }
                return "";
            }
            function Z(a, b) {
                var d = Ta(a);
                if ("Object" !== d && "Array" !== d) return d;
                d = -1;
                var c = 0;
                if (sa(a)) {
                    var f = "[";
                    for(var g = 0; g < a.length; g++){
                        0 < g && (f += ", ");
                        var h = a[g];
                        h = "object" === typeof h && null !== h ? Z(h) : U(h);
                        "" + g === b ? (d = f.length, c = h.length, f += h) : f = 10 > h.length && 40 > f.length + h.length ? f + h : f + "...";
                    }
                    f += "]";
                } else if (a.$$typeof === v) f = "<" + Y(a.type) + "/>";
                else {
                    f = "{";
                    g = Object.keys(a);
                    for(h = 0; h < g.length; h++){
                        0 < h && (f += ", ");
                        var k = g[h], l = JSON.stringify(k);
                        f += ('"' + k + '"' === l ? k : l) + ": ";
                        l = a[k];
                        l = "object" === typeof l && null !== l ? Z(l) : U(l);
                        k === b ? (d = f.length, c = l.length, f += l) : f = 10 > l.length && 40 > f.length + l.length ? f + l : f + "...";
                    }
                    f += "}";
                }
                return void 0 === b ? f : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + f + "\n  " + a) : "\n  " + f;
            }
            function Ma(a, b, d, c) {
                switch(c){
                    case v:
                        return "$";
                }
                for(; "object" === typeof c && null !== c && (c.$$typeof === v || c.$$typeof === w);)try {
                    switch(c.$$typeof){
                        case v:
                            var f = c;
                            c = T(f.type, f.key, f.ref, f.props, null);
                            break;
                        case w:
                            var g = c._init;
                            c = g(c._payload);
                    }
                } catch (h) {
                    d = h === H ? Aa() : h;
                    if ("object" === typeof d && null !== d && "function" === typeof d.then) return a.pendingChunks++, a = Oa(a, c, C, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Ba(), "@" + a.id.toString(16);
                    a.pendingChunks++;
                    c = a.nextChunkId++;
                    d = W(a, d);
                    X(a, c, d);
                    return "@" + c.toString(16);
                }
                if (null === c) return null;
                if ("object" === typeof c) {
                    if (c.$$typeof === u) return Sa(a, b, d, c);
                    if (c.$$typeof === ja) return f = c._context._globalName, b = a.writtenProviders, c = b.get(d), void 0 === c && (a.pendingChunks++, c = a.nextChunkId++, b.set(f, c), d = "P" + c.toString(16) + ":" + f + "\n", d = q.encode(d), a.completedJSONChunks.push(d)), "$" + c.toString(16);
                    if (c === Pa) {
                        a = C;
                        if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                        c = a.parentValue;
                        a.context._currentValue = c === pa ? a.context._defaultValue : c;
                        C = a.parent;
                        return;
                    }
                    return c;
                }
                if ("string" === typeof c) return a = "$" === c[0] || "@" === c[0] ? "$" + c : c, a;
                if ("boolean" === typeof c || "number" === typeof c || "undefined" === typeof c) return c;
                if ("function" === typeof c) {
                    if (c.$$typeof === u) return Sa(a, b, d, c);
                    if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + Z(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
                    throw Error("Functions cannot be passed directly to Client Components because they're not serializable." + Z(b, d));
                }
                if ("symbol" === typeof c) {
                    f = a.writtenSymbols;
                    g = f.get(c);
                    if (void 0 !== g) return "$" + g.toString(16);
                    g = c.description;
                    if (Symbol.for(g) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + Z(b, d));
                    a.pendingChunks++;
                    d = a.nextChunkId++;
                    b = t(g);
                    b = "S" + d.toString(16) + ":" + b + "\n";
                    b = q.encode(b);
                    a.completedModuleChunks.push(b);
                    f.set(c, d);
                    return "$" + d.toString(16);
                }
                if ("bigint" === typeof c) throw Error("BigInt (" + c + ") is not yet supported in Client Component props." + Z(b, d));
                throw Error("Type " + typeof c + " is not supported in Client Component props." + Z(b, d));
            }
            function W(a, b) {
                a = a.onError;
                b = a(b);
                if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
                return b || "";
            }
            function Ua(a, b) {
                null !== a.destination ? (a.status = 2, ha(a.destination, b)) : (a.status = 1, a.fatalError = b);
            }
            function X(a, b, d) {
                d = {
                    digest: d
                };
                b = "E" + b.toString(16) + ":" + t(d) + "\n";
                b = q.encode(b);
                a.completedErrorChunks.push(b);
            }
            function V(a) {
                var b = R.current, d = O;
                R.current = Ha;
                O = a.cache;
                J = a;
                try {
                    var c = a.pingedTasks;
                    a.pingedTasks = [];
                    for(var f = 0; f < c.length; f++){
                        var g = c[f];
                        var h = a;
                        if (0 === g.status) {
                            G(g.context);
                            try {
                                var k = g.model;
                                if ("object" === typeof k && null !== k && k.$$typeof === v) {
                                    var l = k, y = g.thenableState;
                                    g.model = k;
                                    k = T(l.type, l.key, l.ref, l.props, y);
                                    for(g.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === v;)l = k, g.model = k, k = T(l.type, l.key, l.ref, l.props, null);
                                }
                                var aa = g.id, ba = t(k, h.toJSON), ca = "J" + aa.toString(16) + ":" + ba + "\n";
                                var da = q.encode(ca);
                                h.completedJSONChunks.push(da);
                                h.abortableTasks.delete(g);
                                g.status = 1;
                            } catch (E) {
                                var F = E === H ? Aa() : E;
                                if ("object" === typeof F && null !== F && "function" === typeof F.then) {
                                    var Ea = g.ping;
                                    F.then(Ea, Ea);
                                    g.thenableState = Ba();
                                } else {
                                    h.abortableTasks.delete(g);
                                    g.status = 4;
                                    var Xa = W(h, F);
                                    X(h, g.id, Xa);
                                }
                            }
                        }
                    }
                    null !== a.destination && Va(a, a.destination);
                } catch (E) {
                    W(a, E), Ua(a, E);
                } finally{
                    R.current = b, O = d, J = null;
                }
            }
            function Va(a, b) {
                m = new Uint8Array(512);
                n = 0;
                try {
                    for(var d = a.completedModuleChunks, c = 0; c < d.length; c++)if (a.pendingChunks--, !p(b, d[c])) {
                        a.destination = null;
                        c++;
                        break;
                    }
                    d.splice(0, c);
                    var f = a.completedJSONChunks;
                    for(c = 0; c < f.length; c++)if (a.pendingChunks--, !p(b, f[c])) {
                        a.destination = null;
                        c++;
                        break;
                    }
                    f.splice(0, c);
                    var g = a.completedErrorChunks;
                    for(c = 0; c < g.length; c++)if (a.pendingChunks--, !p(b, g[c])) {
                        a.destination = null;
                        c++;
                        break;
                    }
                    g.splice(0, c);
                } finally{
                    m && 0 < n && (b.enqueue(new Uint8Array(m.buffer, 0, n)), m = null, n = 0);
                }
                0 === a.pendingChunks && b.close();
            }
            function Wa(a, b) {
                try {
                    var d = a.abortableTasks;
                    if (0 < d.size) {
                        var c = W(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
                        a.pendingChunks++;
                        var f = a.nextChunkId++;
                        X(a, f, c);
                        d.forEach(function(b) {
                            b.status = 3;
                            var c = "$" + f.toString(16);
                            b = b.id;
                            c = t(c);
                            c = "J" + b.toString(16) + ":" + c + "\n";
                            c = q.encode(c);
                            a.completedErrorChunks.push(c);
                        });
                        d.clear();
                    }
                    null !== a.destination && Va(a, a.destination);
                } catch (g) {
                    W(a, g), Ua(a, g);
                }
            }
            function Na(a) {
                if (a) {
                    var b = C;
                    G(null);
                    for(var d = 0; d < a.length; d++){
                        var c = a[d], f = c[0];
                        c = c[1];
                        Q[f] || (Q[f] = ea.createServerContext(f, pa));
                        xa(Q[f], c);
                    }
                    a = C;
                    G(b);
                    return a;
                }
                return null;
            }
            exports.renderToReadableStream = function(a, b, d) {
                var c = La(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0);
                if (d && d.signal) {
                    var f = d.signal;
                    if (f.aborted) Wa(c, f.reason);
                    else {
                        var g = function() {
                            Wa(c, f.reason);
                            f.removeEventListener("abort", g);
                        };
                        f.addEventListener("abort", g);
                    }
                }
                return new ReadableStream({
                    type: "bytes",
                    start: function() {
                        e ? fa.run(c.cache, V, c) : V(c);
                    },
                    pull: function(a) {
                        if (1 === c.status) c.status = 2, ha(a, c.fatalError);
                        else if (2 !== c.status && null === c.destination) {
                            c.destination = a;
                            try {
                                Va(c, a);
                            } catch (k) {
                                W(c, k), Ua(c, k);
                            }
                        }
                    },
                    cancel: function() {}
                }, {
                    highWaterMark: 0
                });
            };
        },
        610: (module1, __unused_webpack_exports, __nccwpck_require__)=>{
            if (process.env.NODE_ENV === 'production') {
                module1.exports = __nccwpck_require__(421);
            } else {
                module1.exports = __nccwpck_require__(531);
            }
        },
        522: (module1)=>{
            module1.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/react.shared-subset.js (ecmascript, rsc)");
        },
        255: (module1)=>{
            module1.exports = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, rsc)");
        }
    };
    var __webpack_module_cache__ = {};
    function __nccwpck_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module1 = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        var threw = true;
        try {
            __webpack_modules__[moduleId](module1, module1.exports, __nccwpck_require__);
            threw = false;
        } finally{
            if (threw) delete __webpack_module_cache__[moduleId];
        }
        return module1.exports;
    }
    if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
    var __webpack_exports__ = __nccwpck_require__(610);
    module.exports = __webpack_exports__;
})();

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_compiled_react-server-dom-webpack_server.browser.js.map