(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_server_app-render.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/app-render.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderToHTMLOrFlight = renderToHTMLOrFlight;
var _react = _interopRequireWildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _error = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/error.js (ecmascript, ssr)");
var _serverBrowser = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server.browser.js (ecmascript, ssr)"));
var _renderResult = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/render-result.js (ecmascript, ssr)"));
var _nodeWebStreamsHelper = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/node-web-streams-helper.js (ecmascript, ssr)");
var _htmlescape = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/htmlescape.js (ecmascript, ssr)");
var _matchSegments = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
var _serverInsertedHtml = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.js (ecmascript, ssr)");
var _internalUtils = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/internal-utils.js (ecmascript, ssr)");
var _redirect = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
var _cookies = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/index.js (ecmascript, ssr)");
var _hooksServerContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/hooks-server-context.js (ecmascript, ssr)");
var _notFound = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
var _noSsrError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/no-ssr-error.js (ecmascript, ssr)");
var _headManagerContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/head-manager-context.js (ecmascript, ssr)");
var _stream = __turbopack_external_require__("stream");
var _stringHash = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/string-hash/index.js (ecmascript, ssr)"));
var _appRouterHeaders = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
var _head = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/head.js (ecmascript, ssr)");
var _formatServerError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/lib/format-server-error.js (ecmascript, ssr)");
var _runWithRequestAsyncStorage = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/run-with-request-async-storage.js (ecmascript, ssr)");
var _runWithStaticGenerationAsyncStorage = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/run-with-static-generation-async-storage.js (ecmascript, ssr)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";
function preloadComponent(Component, props) {
    const prev = console.error;
    console.error = function(msg) {
        if (msg.startsWith("Warning: Invalid hook call.")) {} else {
            prev.apply(console, arguments);
        }
    };
    try {
        let result = Component(props);
        if (result && typeof result.then === "function") {
            result.then(()=>{}, ()=>{});
        }
        return function() {
            return result;
        };
    } catch (x) {} finally{
        console.error = prev;
    }
    return Component;
}
const CACHE_ONE_YEAR = 31536000;
const INTERNAL_HEADERS_INSTANCE = Symbol("internal for headers readonly");
function readonlyHeadersError() {
    return new Error("ReadonlyHeaders cannot be modified");
}
class ReadonlyHeaders {
    constructor(headers){
        const headersInstance = new Headers(headers);
        this[INTERNAL_HEADERS_INSTANCE] = headersInstance;
        this.entries = headersInstance.entries.bind(headersInstance);
        this.forEach = headersInstance.forEach.bind(headersInstance);
        this.get = headersInstance.get.bind(headersInstance);
        this.has = headersInstance.has.bind(headersInstance);
        this.keys = headersInstance.keys.bind(headersInstance);
        this.values = headersInstance.values.bind(headersInstance);
    }
    [Symbol.iterator]() {
        return this[INTERNAL_HEADERS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyHeadersError();
    }
    delete() {
        throw readonlyHeadersError();
    }
    set() {
        throw readonlyHeadersError();
    }
}
exports.ReadonlyHeaders = ReadonlyHeaders;
const INTERNAL_COOKIES_INSTANCE = Symbol("internal for cookies readonly");
class ReadonlyRequestCookiesError extends Error {
    message = "ReadonlyRequestCookies cannot be modified. Read more: https://nextjs.org/api-reference/cookies";
}
class ReadonlyRequestCookies {
    constructor(request){
        const cookiesInstance = new _cookies.RequestCookies(request.headers);
        this[INTERNAL_COOKIES_INSTANCE] = cookiesInstance;
        this.get = cookiesInstance.get.bind(cookiesInstance);
        this.getAll = cookiesInstance.getAll.bind(cookiesInstance);
        this.has = cookiesInstance.has.bind(cookiesInstance);
    }
    [Symbol.iterator]() {
        return this[INTERNAL_COOKIES_INSTANCE][Symbol.iterator]();
    }
    clear() {
        throw new ReadonlyRequestCookiesError();
    }
    delete() {
        throw new ReadonlyRequestCookiesError();
    }
    set() {
        throw new ReadonlyRequestCookiesError();
    }
}
exports.ReadonlyRequestCookies = ReadonlyRequestCookies;
class FlightRenderResult extends _renderResult.default {
    constructor(response){
        super(response, {
            contentType: "application/octet-stream"
        });
    }
}
function interopDefault(mod) {
    return mod.default || mod;
}
function createErrorHandler(_source, isNextExport, capturedErrors, allCapturedErrors) {
    return (err)=>{
        var ref, ref1;
        if (allCapturedErrors) allCapturedErrors.push(err);
        if (err && (err.digest === _hooksServerContext.DYNAMIC_ERROR_CODE || err.digest === _notFound.NOT_FOUND_ERROR_CODE || err.digest === _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE || ((ref = err.digest) == null ? void 0 : ref.startsWith(_redirect.REDIRECT_ERROR_CODE)))) {
            return err.digest;
        }
        if (process.env.NODE_ENV !== "production") {
            (0, _formatServerError).formatServerError(err);
        }
        if (!(isNextExport && (err == null ? void 0 : (ref1 = err.message) == null ? void 0 : ref1.includes("The specific message is omitted in production builds to avoid leaking sensitive details.")))) {
            console.error(err);
        }
        capturedErrors.push(err);
        return (0, _stringHash).default(err.message + err.stack + (err.digest || "")).toString();
    };
}
let isFetchPatched = false;
function patchFetch(ComponentMod) {
    if (isFetchPatched) return;
    isFetchPatched = true;
    const { DynamicServerError  } = ComponentMod.serverHooks;
    const staticGenerationAsyncStorage = ComponentMod.staticGenerationAsyncStorage;
    const originFetch = globalThis.fetch;
    globalThis.fetch = async (input, init)=>{
        var ref, ref2;
        const staticGenerationStore = staticGenerationAsyncStorage.getStore();
        if (!staticGenerationStore) {
            return originFetch(input, init);
        }
        let revalidate;
        if (typeof (init == null ? void 0 : (ref = init.next) == null ? void 0 : ref.revalidate) === "number") {
            revalidate = init.next.revalidate;
        }
        if ((init == null ? void 0 : (ref2 = init.next) == null ? void 0 : ref2.revalidate) === false) {
            revalidate = CACHE_ONE_YEAR;
        }
        if (!staticGenerationStore.fetchRevalidate || typeof revalidate === "number" && revalidate < staticGenerationStore.fetchRevalidate) {
            staticGenerationStore.fetchRevalidate = revalidate;
        }
        let cacheKey;
        const doOriginalFetch = async ()=>{
            return originFetch(input, init).then(async (res)=>{
                if (staticGenerationStore.incrementalCache && cacheKey && typeof revalidate === "number" && revalidate > 0) {
                    const clonedRes = res.clone();
                    let base64Body = "";
                    if (process.env.NEXT_RUNTIME === "edge") {
                        let string = "";
                        new Uint8Array(await clonedRes.arrayBuffer()).forEach((byte)=>{
                            string += String.fromCharCode(byte);
                        });
                        base64Body = btoa(string);
                    } else {
                        base64Body = Buffer.from(await clonedRes.arrayBuffer()).toString("base64");
                    }
                    await staticGenerationStore.incrementalCache.set(cacheKey, {
                        kind: "FETCH",
                        isStale: false,
                        age: 0,
                        data: {
                            headers: Object.fromEntries(clonedRes.headers.entries()),
                            body: base64Body
                        },
                        revalidate
                    }, revalidate, true);
                }
                return res;
            });
        };
        if (staticGenerationStore.incrementalCache && typeof revalidate === "number" && revalidate > 0) {
            cacheKey = await staticGenerationStore.incrementalCache.fetchCacheKey(input.toString(), init);
            const entry = await staticGenerationStore.incrementalCache.get(cacheKey, true);
            if ((entry == null ? void 0 : entry.value) && entry.value.kind === "FETCH") {
                if (!staticGenerationStore.isRevalidate || !entry.isStale) {
                    if (entry.isStale) {
                        if (!staticGenerationStore.pendingRevalidates) {
                            staticGenerationStore.pendingRevalidates = [];
                        }
                        staticGenerationStore.pendingRevalidates.push(doOriginalFetch().catch(console.error));
                    }
                    const resData = entry.value.data;
                    let decodedBody = "";
                    if (process.env.NEXT_RUNTIME === "edge") {
                        decodedBody = atob(resData.body);
                    } else {
                        decodedBody = Buffer.from(resData.body, "base64").toString();
                    }
                    return new Response(decodedBody, {
                        headers: resData.headers,
                        status: resData.status
                    });
                }
            }
        }
        if (staticGenerationStore.isStaticGeneration) {
            if (init && typeof init === "object") {
                const cache = init.cache;
                if (isEdgeRuntime) {
                    delete init.cache;
                }
                if (cache === "no-store") {
                    staticGenerationStore.fetchRevalidate = 0;
                    throw new DynamicServerError(`no-store fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`);
                }
                const hasNextConfig = "next" in init;
                const next = init.next || {};
                if (typeof next.revalidate === "number" && (typeof staticGenerationStore.fetchRevalidate === "undefined" || next.revalidate < staticGenerationStore.fetchRevalidate)) {
                    const forceDynamic = staticGenerationStore.forceDynamic;
                    if (!forceDynamic || next.revalidate !== 0) {
                        staticGenerationStore.fetchRevalidate = next.revalidate;
                    }
                    if (!forceDynamic && next.revalidate === 0) {
                        throw new DynamicServerError(`revalidate: ${next.revalidate} fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`);
                    }
                }
                if (hasNextConfig) delete init.next;
            }
        }
        return doOriginalFetch();
    };
}
function useFlightResponse(writable, req, serverComponentManifest, rscChunks, flightResponseRef, nonce) {
    if (flightResponseRef.current !== null) {
        return flightResponseRef.current;
    }
    const { createFromReadableStream  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-server-dom-webpack/client.js (ecmascript, ssr)");
    const [renderStream, forwardStream] = (0, _nodeWebStreamsHelper).readableStreamTee(req);
    const res = createFromReadableStream(renderStream, {
        moduleMap: isEdgeRuntime ? serverComponentManifest.__edge_ssr_module_mapping__ : serverComponentManifest.__ssr_module_mapping__
    });
    flightResponseRef.current = res;
    let bootstrapped = false;
    const forwardReader = forwardStream.getReader();
    const writer = writable.getWriter();
    const startScriptTag = nonce ? `<script nonce=${JSON.stringify(nonce)}>` : "<script>";
    function read() {
        forwardReader.read().then(({ done , value  })=>{
            if (value) {
                rscChunks.push(value);
            }
            if (!bootstrapped) {
                bootstrapped = true;
                writer.write((0, _nodeWebStreamsHelper).encodeText(`${startScriptTag}(self.__next_f=self.__next_f||[]).push(${(0, _htmlescape).htmlEscapeJsonString(JSON.stringify([
                    0
                ]))})</script>`));
            }
            if (done) {
                flightResponseRef.current = null;
                writer.close();
            } else {
                const responsePartial = (0, _nodeWebStreamsHelper).decodeText(value);
                const scripts = `${startScriptTag}self.__next_f.push(${(0, _htmlescape).htmlEscapeJsonString(JSON.stringify([
                    1,
                    responsePartial
                ]))})</script>`;
                writer.write((0, _nodeWebStreamsHelper).encodeText(scripts));
                read();
            }
        });
    }
    read();
    return res;
}
function createServerComponentRenderer(ComponentToRender, ComponentMod, { transformStream , serverComponentManifest , serverContexts , rscChunks  }, serverComponentsErrorHandler, nonce) {
    if (ComponentMod.__next_app_webpack_require__) {
        globalThis.__next_require__ = ComponentMod.__next_app_webpack_require__;
        globalThis.__next_chunk_load__ = ()=>Promise.resolve();
    }
    let RSCStream;
    const createRSCStream = ()=>{
        if (!RSCStream) {
            RSCStream = ComponentMod.renderToReadableStream(_react.default.createElement(ComponentToRender, null), serverComponentManifest, {
                context: serverContexts,
                onError: serverComponentsErrorHandler
            });
        }
        return RSCStream;
    };
    const flightResponseRef = {
        current: null
    };
    const writable = transformStream.writable;
    return function ServerComponentWrapper() {
        const reqStream = createRSCStream();
        const response = useFlightResponse(writable, reqStream, serverComponentManifest, rscChunks, flightResponseRef, nonce);
        return (0, _react).use(response);
    };
}
function getShortDynamicParamType(type) {
    switch(type){
        case "catchall":
            return "c";
        case "optional-catchall":
            return "oc";
        case "dynamic":
            return "d";
        default:
            throw new Error("Unknown dynamic param type");
    }
}
function getSegmentParam(segment) {
    if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
            type: "optional-catchall",
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
            type: "catchall",
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
            type: "dynamic",
            param: segment.slice(1, -1)
        };
    }
    return null;
}
function getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, filePath, serverCSSForEntries, injectedCSS, collectNewCSSImports) {
    var ref;
    const layoutOrPageCssModules = serverCSSManifest[filePath];
    const filePathWithoutExt = filePath.replace(/\.[^.]+$/, "");
    const cssFilesForEntry = new Set(((ref = serverComponentManifest.__entry_css_files__) == null ? void 0 : ref[filePathWithoutExt]) || []);
    if (!layoutOrPageCssModules || !cssFilesForEntry.size) {
        return [];
    }
    const chunks = new Set();
    for (const mod of layoutOrPageCssModules){
        if (serverCSSForEntries.includes(mod) || !/\.module\.(css|sass|scss)$/.test(mod)) {
            if (!injectedCSS.has(mod)) {
                const modData = serverComponentManifest[mod];
                if (modData) {
                    for (const chunk of modData.default.chunks){
                        if (cssFilesForEntry.has(chunk)) {
                            chunks.add(chunk);
                            if (collectNewCSSImports) {
                                injectedCSS.add(mod);
                            }
                        }
                    }
                }
            }
        }
    }
    return [
        ...chunks
    ];
}
function getServerCSSForEntries(serverCSSManifest, entries) {
    const css = [];
    for (const entry of entries){
        const entryName = entry.replace(/\.[^.]+$/, "");
        if (serverCSSManifest.__entry_css_mods__ && serverCSSManifest.__entry_css_mods__[entryName]) {
            css.push(...serverCSSManifest.__entry_css_mods__[entryName]);
        }
    }
    return css;
}
function getPreloadedFontFilesInlineLinkTags(serverComponentManifest, serverCSSManifest, fontLoaderManifest, serverCSSForEntries, filePath) {
    var ref;
    if (!fontLoaderManifest || !filePath) {
        return null;
    }
    const layoutOrPageCss = serverCSSManifest[filePath] || ((ref = serverComponentManifest.__client_css_manifest__) == null ? void 0 : ref[filePath]);
    if (!layoutOrPageCss) {
        return null;
    }
    const fontFiles = new Set();
    let foundFontUsage = false;
    for (const css of layoutOrPageCss){
        if (serverCSSForEntries.includes(css)) {
            const preloadedFontFiles = fontLoaderManifest.app[css];
            if (preloadedFontFiles) {
                foundFontUsage = true;
                for (const fontFile of preloadedFontFiles){
                    fontFiles.add(fontFile);
                }
            }
        }
    }
    if (!foundFontUsage) {
        return null;
    }
    return [
        ...fontFiles
    ];
}
function getScriptNonceFromHeader(cspHeaderValue) {
    var ref;
    const directives = cspHeaderValue.split(";").map((directive)=>directive.trim());
    const directive1 = directives.find((dir)=>dir.startsWith("script-src")) || directives.find((dir)=>dir.startsWith("default-src"));
    if (!directive1) {
        return;
    }
    const nonce = (ref = directive1.split(" ").slice(1).map((source)=>source.trim()).find((source)=>source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))) == null ? void 0 : ref.slice(7, -1);
    if (!nonce) {
        return;
    }
    if (_htmlescape.ESCAPE_REGEX.test(nonce)) {
        throw new Error("Nonce value from Content-Security-Policy contained HTML escape characters.\nLearn more: https://nextjs.org/docs/messages/nonce-contained-invalid-characters");
    }
    return nonce;
}
async function renderToString(element) {
    const renderStream = await _serverBrowser.default.renderToReadableStream(element);
    await renderStream.allReady;
    return (0, _nodeWebStreamsHelper).streamToString(renderStream);
}
async function renderToHTMLOrFlight(req, res, pathname, query, renderOpts) {
    const isFlight = req.headers[_appRouterHeaders.RSC.toLowerCase()] !== undefined;
    const capturedErrors = [];
    const allCapturedErrors = [];
    const isNextExport = !!renderOpts.nextExport;
    const serverComponentsErrorHandler = createErrorHandler("serverComponentsRenderer", isNextExport, capturedErrors);
    const flightDataRendererErrorHandler = createErrorHandler("flightDataRenderer", isNextExport, capturedErrors);
    const htmlRendererErrorHandler = createErrorHandler("htmlRenderer", isNextExport, capturedErrors, allCapturedErrors);
    const { buildManifest , subresourceIntegrityManifest , serverComponentManifest , serverCSSManifest ={} , ComponentMod , dev , fontLoaderManifest , supportsDynamicHTML  } = renderOpts;
    patchFetch(ComponentMod);
    const generateStaticHTML = supportsDynamicHTML !== true;
    const staticGenerationAsyncStorage = ComponentMod.staticGenerationAsyncStorage;
    const requestAsyncStorage = ComponentMod.requestAsyncStorage;
    const wrappedRender = async ()=>{
        const staticGenerationStore = staticGenerationAsyncStorage.getStore();
        if (!staticGenerationStore) {
            throw new Error(`Invariant: Render expects to have staticGenerationAsyncStorage, none found`);
        }
        query = Object.assign({}, query);
        const isPrefetch = req.headers[_appRouterHeaders.NEXT_ROUTER_PREFETCH.toLowerCase()] !== undefined;
        let providedFlightRouterState = isFlight ? req.headers[_appRouterHeaders.NEXT_ROUTER_STATE_TREE.toLowerCase()] ? JSON.parse(req.headers[_appRouterHeaders.NEXT_ROUTER_STATE_TREE.toLowerCase()]) : undefined : undefined;
        const loaderTree = ComponentMod.tree;
        (0, _internalUtils).stripInternalQueries(query);
        const LayoutRouter = ComponentMod.LayoutRouter;
        const RenderFromTemplateContext = ComponentMod.RenderFromTemplateContext;
        const serverContexts = [
            [
                "WORKAROUND",
                null
            ]
        ];
        const pathParams = renderOpts.params;
        const getDynamicParamFromSegment = (segment)=>{
            const segmentParam = getSegmentParam(segment);
            if (!segmentParam) {
                return null;
            }
            const key = segmentParam.param;
            let value = pathParams[key];
            if (Array.isArray(value)) {
                value = value.map((i)=>encodeURIComponent(i));
            } else if (typeof value === "string") {
                value = encodeURIComponent(value);
            }
            if (!value) {
                if (segmentParam.type === "optional-catchall") {
                    const type = getShortDynamicParamType(segmentParam.type);
                    return {
                        param: key,
                        value: null,
                        type: type,
                        treeSegment: [
                            key,
                            "",
                            type
                        ]
                    };
                }
                return null;
            }
            const type = getShortDynamicParamType(segmentParam.type);
            return {
                param: key,
                value: value,
                treeSegment: [
                    key,
                    Array.isArray(value) ? value.join("/") : value,
                    type
                ],
                type: type
            };
        };
        async function resolveHead([segment, parallelRoutes, { head  }], parentParams, isRootHead) {
            const segmentParam = getDynamicParamFromSegment(segment);
            const currentParams = segmentParam && segmentParam.value !== null ? {
                ...parentParams,
                [segmentParam.param]: segmentParam.value
            } : parentParams;
            for(const key in parallelRoutes){
                const childTree = parallelRoutes[key];
                const returnedHead = await resolveHead(childTree, currentParams, false);
                if (returnedHead) {
                    return returnedHead;
                }
            }
            if (head) {
                const Head = await interopDefault(await head[0]());
                return _react.default.createElement(Head, {
                    params: currentParams
                });
            } else if (isRootHead) {
                return _react.default.createElement(_head.DefaultHead, null);
            }
            return null;
        }
        const createFlightRouterStateFromLoaderTree = ([segment, parallelRoutes, { layout  }], rootLayoutIncluded = false)=>{
            const dynamicParam = getDynamicParamFromSegment(segment);
            const segmentTree = [
                dynamicParam ? dynamicParam.treeSegment : segment,
                {}
            ];
            if (!rootLayoutIncluded && typeof layout !== "undefined") {
                rootLayoutIncluded = true;
                segmentTree[4] = true;
            }
            segmentTree[1] = Object.keys(parallelRoutes).reduce((existingValue, currentValue)=>{
                existingValue[currentValue] = createFlightRouterStateFromLoaderTree(parallelRoutes[currentValue], rootLayoutIncluded);
                return existingValue;
            }, {});
            return segmentTree;
        };
        let defaultRevalidate = false;
        const serverCSSForEntries = getServerCSSForEntries(serverCSSManifest, ComponentMod.pages);
        const assetPrefix = renderOpts.assetPrefix || "";
        const createComponentAndStyles = async ({ filePath , getComponent , shouldPreload , injectedCSS  })=>{
            const cssHrefs = getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, filePath, serverCSSForEntries, injectedCSS);
            const styles = cssHrefs ? cssHrefs.map((href, index)=>_react.default.createElement("link", {
                    rel: "stylesheet",
                    href: `${assetPrefix}/_next/${href}`,
                    precedence: shouldPreload ? "high" : undefined,
                    key: index
                })) : null;
            const Comp = await interopDefault(await getComponent());
            return [
                Comp,
                styles
            ];
        };
        const createComponentTree = async ({ createSegmentPath , loaderTree: [segment, parallelRoutes, { layout , template , error , loading , page , "not-found": notFound  }] , parentParams , firstItem , rootLayoutIncluded , injectedCSS  })=>{
            const layoutOrPagePath = (layout == null ? void 0 : layout[1]) || (page == null ? void 0 : page[1]);
            const injectedCSSWithCurrentLayout = new Set(injectedCSS);
            const stylesheets = layoutOrPagePath ? getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, layoutOrPagePath, serverCSSForEntries, injectedCSSWithCurrentLayout, true) : [];
            const preloadedFontFiles = layoutOrPagePath ? getPreloadedFontFilesInlineLinkTags(serverComponentManifest, serverCSSManifest, fontLoaderManifest, serverCSSForEntries, layoutOrPagePath) : [];
            const [Template, templateStyles] = template ? await createComponentAndStyles({
                filePath: template[1],
                getComponent: template[0],
                shouldPreload: true,
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [
                _react.default.Fragment
            ];
            const [ErrorComponent, errorStyles] = error ? await createComponentAndStyles({
                filePath: error[1],
                getComponent: error[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const [Loading, loadingStyles] = loading ? await createComponentAndStyles({
                filePath: loading[1],
                getComponent: loading[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const isLayout = typeof layout !== "undefined";
            const isPage = typeof page !== "undefined";
            const layoutOrPageMod = isLayout ? await layout[0]() : isPage ? await page[0]() : undefined;
            const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
            const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
            const [NotFound, notFoundStyles] = notFound ? await createComponentAndStyles({
                filePath: notFound[1],
                getComponent: notFound[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : rootLayoutAtThisLevel ? [
                _error.NotFound
            ] : [];
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.dynamic) === "string") {
                if (layoutOrPageMod.dynamic === "force-static") {
                    staticGenerationStore.forceStatic = true;
                } else if (layoutOrPageMod.dynamic !== "error") {
                    staticGenerationStore.forceStatic = false;
                }
            }
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.revalidate) === "number") {
                defaultRevalidate = layoutOrPageMod.revalidate;
                if (staticGenerationStore.isStaticGeneration && defaultRevalidate === 0) {
                    const { DynamicServerError  } = ComponentMod.serverHooks;
                    throw new DynamicServerError(`revalidate: 0 configured ${segment}`);
                }
            }
            let Component = layoutOrPageMod ? interopDefault(layoutOrPageMod) : undefined;
            if (dev) {
                const { isValidElementType  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-is/index.js (ecmascript, ssr)");
                if ((isPage || typeof Component !== "undefined") && !isValidElementType(Component)) {
                    throw new Error(`The default export is not a React Component in page: "${pathname}"`);
                }
                if (typeof ErrorComponent !== "undefined" && !isValidElementType(ErrorComponent)) {
                    throw new Error(`The default export of error is not a React Component in page: ${segment}`);
                }
                if (typeof Loading !== "undefined" && !isValidElementType(Loading)) {
                    throw new Error(`The default export of loading is not a React Component in ${segment}`);
                }
                if (typeof NotFound !== "undefined" && !isValidElementType(NotFound)) {
                    throw new Error(`The default export of notFound is not a React Component in ${segment}`);
                }
            }
            const segmentParam = getDynamicParamFromSegment(segment);
            const currentParams = segmentParam && segmentParam.value !== null ? {
                ...parentParams,
                [segmentParam.param]: segmentParam.value
            } : parentParams;
            const actualSegment = segmentParam ? segmentParam.treeSegment : segment;
            const parallelRouteMap = await Promise.all(Object.keys(parallelRoutes).map(async (parallelRouteKey)=>{
                const currentSegmentPath = firstItem ? [
                    parallelRouteKey
                ] : [
                    actualSegment,
                    parallelRouteKey
                ];
                const childSegment = parallelRoutes[parallelRouteKey][0];
                const childSegmentParam = getDynamicParamFromSegment(childSegment);
                if (isPrefetch && Loading) {
                    const childProp = {
                        current: null,
                        segment: childSegmentParam ? childSegmentParam.treeSegment : childSegment
                    };
                    return [
                        parallelRouteKey,
                        _react.default.createElement(LayoutRouter, {
                            parallelRouterKey: parallelRouteKey,
                            segmentPath: createSegmentPath(currentSegmentPath),
                            loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                            loadingStyles: loadingStyles,
                            hasLoading: Boolean(Loading),
                            error: ErrorComponent,
                            errorStyles: errorStyles,
                            template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                            templateStyles: templateStyles,
                            notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                            notFoundStyles: notFoundStyles,
                            childProp: childProp
                        })
                    ];
                }
                const { Component: ChildComponent  } = await createComponentTree({
                    createSegmentPath: (child)=>{
                        return createSegmentPath([
                            ...currentSegmentPath,
                            ...child
                        ]);
                    },
                    loaderTree: parallelRoutes[parallelRouteKey],
                    parentParams: currentParams,
                    rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove,
                    injectedCSS: injectedCSSWithCurrentLayout
                });
                const childProp = {
                    current: _react.default.createElement(ChildComponent, null),
                    segment: childSegmentParam ? childSegmentParam.treeSegment : childSegment
                };
                const segmentPath = createSegmentPath(currentSegmentPath);
                return [
                    parallelRouteKey,
                    _react.default.createElement(LayoutRouter, {
                        parallelRouterKey: parallelRouteKey,
                        segmentPath: segmentPath,
                        error: ErrorComponent,
                        errorStyles: errorStyles,
                        loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                        loadingStyles: loadingStyles,
                        hasLoading: Boolean(Loading),
                        template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                        templateStyles: templateStyles,
                        notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                        notFoundStyles: notFoundStyles,
                        childProp: childProp
                    })
                ];
            }));
            const parallelRouteComponents = parallelRouteMap.reduce((list, [parallelRouteKey, Comp])=>{
                list[parallelRouteKey] = Comp;
                return list;
            }, {});
            if (!Component) {
                return {
                    Component: ()=>_react.default.createElement(_react.default.Fragment, null, parallelRouteComponents.children)
                };
            }
            const props = {
                ...parallelRouteComponents,
                params: currentParams,
                ...isPage ? {
                    searchParams: query
                } : {}
            };
            Component = await Promise.resolve().then(()=>{
                return preloadComponent(Component, props);
            });
            return {
                Component: ()=>{
                    return _react.default.createElement(_react.default.Fragment, null, (preloadedFontFiles == null ? void 0 : preloadedFontFiles.length) === 0 ? _react.default.createElement("link", {
                        rel: "preconnect",
                        href: "/",
                        crossOrigin: "anonymous"
                    }) : null, preloadedFontFiles ? preloadedFontFiles.map((fontFile)=>{
                        const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];
                        return _react.default.createElement("link", {
                            key: fontFile,
                            rel: "preload",
                            href: `${assetPrefix}/_next/${fontFile}`,
                            as: "font",
                            type: `font/${ext}`,
                            crossOrigin: "anonymous"
                        });
                    }) : null, stylesheets ? stylesheets.map((href, index)=>_react.default.createElement("link", {
                            rel: "stylesheet",
                            href: `${assetPrefix}/_next/${href}`,
                            precedence: "high",
                            key: index
                        })) : null, _react.default.createElement(Component, Object.assign({}, props)));
                }
            };
        };
        const streamToBufferedResult = async (renderResult)=>{
            const renderChunks = [];
            const writable = new _stream.Writable({
                write (chunk, _encoding, callback) {
                    renderChunks.push(chunk);
                    callback();
                }
            });
            await renderResult.pipe(writable);
            return Buffer.concat(renderChunks).toString();
        };
        const generateFlight = async ()=>{
            const walkTreeWithFlightRouterState = async ({ createSegmentPath , loaderTreeToFilter , parentParams , isFirst , flightRouterState , parentRendered , rscPayloadHead , injectedCSS , rootLayoutIncluded  })=>{
                const [segment, parallelRoutes, { layout  }] = loaderTreeToFilter;
                const isLayout = typeof layout !== "undefined";
                const parallelRoutesKeys = Object.keys(parallelRoutes);
                const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
                const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
                const segmentParam = getDynamicParamFromSegment(segment);
                const currentParams = segmentParam && segmentParam.value !== null ? {
                    ...parentParams,
                    [segmentParam.param]: segmentParam.value
                } : parentParams;
                const actualSegment = segmentParam ? segmentParam.treeSegment : segment;
                const renderComponentsOnThisLevel = !flightRouterState || !(0, _matchSegments).matchSegment(actualSegment, flightRouterState[0]) || parallelRoutesKeys.length === 0 || flightRouterState[3] === "refetch";
                if (!parentRendered && renderComponentsOnThisLevel) {
                    return [
                        actualSegment,
                        createFlightRouterStateFromLoaderTree(loaderTreeToFilter),
                        isPrefetch && !Boolean(loaderTreeToFilter[2].loading) ? null : _react.default.createElement(async ()=>{
                            const { Component  } = await createComponentTree({
                                createSegmentPath: (child)=>{
                                    return createSegmentPath(child);
                                },
                                loaderTree: loaderTreeToFilter,
                                parentParams: currentParams,
                                firstItem: isFirst,
                                injectedCSS,
                                rootLayoutIncluded: rootLayoutIncluded
                            });
                            return _react.default.createElement(Component, null);
                        }),
                        isPrefetch && !Boolean(loaderTreeToFilter[2].loading) ? null : _react.default.createElement(_react.default.Fragment, null, rscPayloadHead)
                    ];
                }
                const layoutPath = layout == null ? void 0 : layout[1];
                const injectedCSSWithCurrentLayout = new Set(injectedCSS);
                if (layoutPath) {
                    getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, layoutPath, serverCSSForEntries, injectedCSSWithCurrentLayout, true);
                }
                for (const parallelRouteKey of parallelRoutesKeys){
                    const parallelRoute = parallelRoutes[parallelRouteKey];
                    const currentSegmentPath = isFirst ? [
                        parallelRouteKey
                    ] : [
                        actualSegment,
                        parallelRouteKey
                    ];
                    const path = await walkTreeWithFlightRouterState({
                        createSegmentPath: (child)=>{
                            return createSegmentPath([
                                ...currentSegmentPath,
                                ...child
                            ]);
                        },
                        loaderTreeToFilter: parallelRoute,
                        parentParams: currentParams,
                        flightRouterState: flightRouterState && flightRouterState[1][parallelRouteKey],
                        parentRendered: parentRendered || renderComponentsOnThisLevel,
                        isFirst: false,
                        rscPayloadHead,
                        injectedCSS: injectedCSSWithCurrentLayout,
                        rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove
                    });
                    if (typeof path[path.length - 1] !== "string") {
                        return [
                            actualSegment,
                            parallelRouteKey,
                            ...path
                        ];
                    }
                }
                return [
                    actualSegment
                ];
            };
            const rscPayloadHead1 = await resolveHead(loaderTree, {}, true);
            const flightData = [
                (await walkTreeWithFlightRouterState({
                    createSegmentPath: (child)=>child,
                    loaderTreeToFilter: loaderTree,
                    parentParams: {},
                    flightRouterState: providedFlightRouterState,
                    isFirst: true,
                    rscPayloadHead: rscPayloadHead1,
                    injectedCSS: new Set(),
                    rootLayoutIncluded: false
                })).slice(1)
            ];
            const readable = ComponentMod.renderToReadableStream(flightData, serverComponentManifest, {
                context: serverContexts,
                onError: flightDataRendererErrorHandler
            }).pipeThrough((0, _nodeWebStreamsHelper).createBufferedTransformStream());
            return new FlightRenderResult(readable);
        };
        if (isFlight && !staticGenerationStore.isStaticGeneration) {
            return generateFlight();
        }
        const AppRouter = ComponentMod.AppRouter;
        const GlobalError = interopDefault(ComponentMod.GlobalError);
        let serverComponentsInlinedTransformStream = new TransformStream();
        const initialCanonicalUrl = req.url;
        const csp = req.headers["content-security-policy"];
        let nonce;
        if (csp && typeof csp === "string") {
            nonce = getScriptNonceFromHeader(csp);
        }
        const serverComponentsRenderOpts = {
            transformStream: serverComponentsInlinedTransformStream,
            serverComponentManifest,
            serverContexts,
            rscChunks: []
        };
        const validateRootLayout = dev ? {
            validateRootLayout: {
                assetPrefix: renderOpts.assetPrefix,
                getTree: ()=>createFlightRouterStateFromLoaderTree(loaderTree)
            }
        } : {};
        const initialHead = await resolveHead(loaderTree, {}, true);
        const ServerComponentsRenderer = createServerComponentRenderer(async ()=>{
            const { Component: ComponentTree  } = await createComponentTree({
                createSegmentPath: (child)=>child,
                loaderTree: loaderTree,
                parentParams: {},
                firstItem: true,
                injectedCSS: new Set(),
                rootLayoutIncluded: false
            });
            const initialTree = createFlightRouterStateFromLoaderTree(loaderTree);
            return _react.default.createElement(AppRouter, {
                assetPrefix: assetPrefix,
                initialCanonicalUrl: initialCanonicalUrl,
                initialTree: initialTree,
                initialHead: initialHead,
                globalErrorComponent: GlobalError
            }, _react.default.createElement(ComponentTree, null));
        }, ComponentMod, serverComponentsRenderOpts, serverComponentsErrorHandler, nonce);
        const serverInsertedHTMLCallbacks = new Set();
        function InsertedHTML({ children  }) {
            serverInsertedHTMLCallbacks.clear();
            const addInsertedHtml = _react.default.useCallback((handler)=>{
                serverInsertedHTMLCallbacks.add(handler);
            }, []);
            return _react.default.createElement(_headManagerContext.HeadManagerContext.Provider, {
                value: {
                    appDir: true,
                    nonce
                }
            }, _react.default.createElement(_serverInsertedHtml.ServerInsertedHTMLContext.Provider, {
                value: addInsertedHtml
            }, children));
        }
        const bodyResult = async ()=>{
            const polyfills = buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>{
                return {
                    src: `${assetPrefix}/_next/${polyfill}`,
                    integrity: subresourceIntegrityManifest == null ? void 0 : subresourceIntegrityManifest[polyfill]
                };
            });
            const content = _react.default.createElement(InsertedHTML, null, _react.default.createElement(ServerComponentsRenderer, null));
            let polyfillsFlushed = false;
            const getServerInsertedHTML = ()=>{
                const flushed = renderToString(_react.default.createElement(_react.default.Fragment, null, Array.from(serverInsertedHTMLCallbacks).map((callback)=>callback()), polyfillsFlushed ? null : polyfills == null ? void 0 : polyfills.map((polyfill)=>{
                    return _react.default.createElement("script", {
                        key: polyfill.src,
                        src: polyfill.src,
                        integrity: polyfill.integrity,
                        noModule: true,
                        nonce: nonce
                    });
                })));
                polyfillsFlushed = true;
                return flushed;
            };
            try {
                const renderStream = await (0, _nodeWebStreamsHelper).renderToInitialStream({
                    ReactDOMServer: _serverBrowser.default,
                    element: content,
                    streamOptions: {
                        onError: htmlRendererErrorHandler,
                        nonce,
                        bootstrapScripts: [
                            ...subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                    src: `${assetPrefix}/_next/` + src,
                                    integrity: subresourceIntegrityManifest[src]
                                })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src)
                        ]
                    }
                });
                const result = await (0, _nodeWebStreamsHelper).continueFromInitialStream(renderStream, {
                    dataStream: serverComponentsInlinedTransformStream == null ? void 0 : serverComponentsInlinedTransformStream.readable,
                    generateStaticHTML: staticGenerationStore.isStaticGeneration || generateStaticHTML,
                    getServerInsertedHTML,
                    serverInsertedHTMLToHead: true,
                    ...validateRootLayout
                });
                return result;
            } catch (err) {
                const shouldNotIndex = err.digest === _notFound.NOT_FOUND_ERROR_CODE;
                if (err.digest === _notFound.NOT_FOUND_ERROR_CODE) {
                    res.statusCode = 404;
                }
                const renderStream = await (0, _nodeWebStreamsHelper).renderToInitialStream({
                    ReactDOMServer: _serverBrowser.default,
                    element: _react.default.createElement("html", {
                        id: "__next_error__"
                    }, _react.default.createElement("head", null, shouldNotIndex ? _react.default.createElement("meta", {
                        name: "robots",
                        content: "noindex"
                    }) : null), _react.default.createElement("body", null)),
                    streamOptions: {
                        nonce,
                        bootstrapScripts: subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                src: `${assetPrefix}/_next/` + src,
                                integrity: subresourceIntegrityManifest[src]
                            })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src)
                    }
                });
                return await (0, _nodeWebStreamsHelper).continueFromInitialStream(renderStream, {
                    dataStream: serverComponentsInlinedTransformStream == null ? void 0 : serverComponentsInlinedTransformStream.readable,
                    generateStaticHTML: staticGenerationStore.isStaticGeneration,
                    getServerInsertedHTML,
                    serverInsertedHTMLToHead: true,
                    ...validateRootLayout
                });
            }
        };
        const renderResult1 = new _renderResult.default(await bodyResult());
        if (staticGenerationStore.pendingRevalidates) {
            await Promise.all(staticGenerationStore.pendingRevalidates);
        }
        if (staticGenerationStore.isStaticGeneration) {
            const htmlResult = await streamToBufferedResult(renderResult1);
            if (capturedErrors.length > 0) {
                throw capturedErrors[0];
            }
            const filteredFlightData = await streamToBufferedResult(await generateFlight());
            if (staticGenerationStore.forceStatic === false) {
                staticGenerationStore.fetchRevalidate = 0;
            }
            renderOpts.pageData = filteredFlightData;
            renderOpts.revalidate = staticGenerationStore.fetchRevalidate ?? defaultRevalidate;
            return new _renderResult.default(htmlResult);
        }
        return renderResult1;
    };
    return (0, _runWithRequestAsyncStorage).runWithRequestAsyncStorage(requestAsyncStorage, {
        req,
        res,
        renderOpts
    }, ()=>(0, _runWithStaticGenerationAsyncStorage).runWithStaticGenerationAsyncStorage(staticGenerationAsyncStorage, {
            pathname,
            renderOpts
        }, ()=>wrappedRender()));
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/render-result.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
class RenderResult {
    constructor(response, { contentType  } = {}){
        this._result = response;
        this._contentType = contentType;
    }
    contentType() {
        return this._contentType;
    }
    toUnchunkedString() {
        if (typeof this._result !== "string") {
            throw new Error("invariant: dynamic responses cannot be unchunked. This is a bug in Next.js");
        }
        return this._result;
    }
    pipe(res) {
        if (typeof this._result === "string") {
            throw new Error("invariant: static responses cannot be piped. This is a bug in Next.js");
        }
        const response = this._result;
        const flush = typeof res.flush === "function" ? ()=>res.flush() : ()=>{};
        return (async ()=>{
            const reader = response.getReader();
            let fatalError = false;
            try {
                while(true){
                    const { done , value  } = await reader.read();
                    if (done) {
                        res.end();
                        return;
                    }
                    fatalError = true;
                    res.write(value);
                    flush();
                }
            } catch (err) {
                if (fatalError) {
                    res.destroy(err);
                }
                throw err;
            }
        })();
    }
    isDynamic() {
        return typeof this._result !== "string";
    }
    static fromStatic(value) {
        return new RenderResult(value);
    }
    static empty = RenderResult.fromStatic("");
}
exports.default = RenderResult;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/node-web-streams-helper.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeText = encodeText;
exports.decodeText = decodeText;
exports.readableStreamTee = readableStreamTee;
exports.chainStreams = chainStreams;
exports.streamFromArray = streamFromArray;
exports.streamToString = streamToString;
exports.createBufferedTransformStream = createBufferedTransformStream;
exports.createInsertedHTMLStream = createInsertedHTMLStream;
exports.renderToInitialStream = renderToInitialStream;
exports.createDeferredSuffixStream = createDeferredSuffixStream;
exports.createInlineDataStream = createInlineDataStream;
exports.createSuffixStream = createSuffixStream;
exports.createRootLayoutValidatorStream = createRootLayoutValidatorStream;
exports.continueFromInitialStream = continueFromInitialStream;
var _nonNullable = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/lib/non-nullable.js (ecmascript, ssr)");
const queueTask = process.env.NEXT_RUNTIME === "edge" ? globalThis.setTimeout : setImmediate;
function encodeText(input) {
    return new TextEncoder().encode(input);
}
function decodeText(input, textDecoder) {
    return textDecoder ? textDecoder.decode(input, {
        stream: true
    }) : new TextDecoder().decode(input);
}
function readableStreamTee(readable) {
    const transformStream = new TransformStream();
    const transformStream2 = new TransformStream();
    const writer = transformStream.writable.getWriter();
    const writer2 = transformStream2.writable.getWriter();
    const reader = readable.getReader();
    function read() {
        reader.read().then(({ done , value  })=>{
            if (done) {
                writer.close();
                writer2.close();
                return;
            }
            writer.write(value);
            writer2.write(value);
            read();
        });
    }
    read();
    return [
        transformStream.readable,
        transformStream2.readable
    ];
}
function chainStreams(streams) {
    const { readable , writable  } = new TransformStream();
    let promise = Promise.resolve();
    for(let i = 0; i < streams.length; ++i){
        promise = promise.then(()=>streams[i].pipeTo(writable, {
                preventClose: i + 1 < streams.length
            }));
    }
    return readable;
}
function streamFromArray(strings) {
    const { readable , writable  } = new TransformStream();
    const writer = writable.getWriter();
    strings.forEach((str)=>writer.write(encodeText(str)));
    writer.close();
    return readable;
}
async function streamToString(stream) {
    const reader = stream.getReader();
    const textDecoder = new TextDecoder();
    let bufferedString = "";
    while(true){
        const { done , value  } = await reader.read();
        if (done) {
            return bufferedString;
        }
        bufferedString += decodeText(value, textDecoder);
    }
}
function createBufferedTransformStream(transform = (v)=>v) {
    let bufferedString = "";
    let pendingFlush = null;
    const flushBuffer = (controller)=>{
        if (!pendingFlush) {
            pendingFlush = new Promise((resolve)=>{
                setTimeout(async ()=>{
                    const buffered = await transform(bufferedString);
                    controller.enqueue(encodeText(buffered));
                    bufferedString = "";
                    pendingFlush = null;
                    resolve();
                }, 0);
            });
        }
        return pendingFlush;
    };
    const textDecoder = new TextDecoder();
    return new TransformStream({
        transform (chunk, controller) {
            bufferedString += decodeText(chunk, textDecoder);
            flushBuffer(controller);
        },
        flush () {
            if (pendingFlush) {
                return pendingFlush;
            }
        }
    });
}
function createInsertedHTMLStream(getServerInsertedHTML) {
    return new TransformStream({
        async transform (chunk, controller) {
            const insertedHTMLChunk = encodeText(await getServerInsertedHTML());
            controller.enqueue(insertedHTMLChunk);
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialStream({ ReactDOMServer , element , streamOptions  }) {
    return ReactDOMServer.renderToReadableStream(element, streamOptions);
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    let freezing = false;
    return new TransformStream({
        async transform (chunk, controller) {
            if (freezing) {
                controller.enqueue(chunk);
                return;
            }
            const insertion = await insert();
            if (inserted) {
                controller.enqueue(encodeText(insertion));
                controller.enqueue(chunk);
                freezing = true;
            } else {
                const content = decodeText(chunk);
                const index = content.indexOf("</head>");
                if (index !== -1) {
                    const insertedHeadContent = content.slice(0, index) + insertion + content.slice(index);
                    controller.enqueue(encodeText(insertedHeadContent));
                    freezing = true;
                    inserted = true;
                }
            }
            if (!inserted) {
                controller.enqueue(chunk);
            } else {
                queueTask(()=>{
                    freezing = false;
                });
            }
        }
    });
}
function createDeferredSuffixStream(suffix) {
    let suffixFlushed = false;
    let suffixFlushTask = null;
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            if (!suffixFlushed && suffix) {
                suffixFlushed = true;
                suffixFlushTask = new Promise((res)=>{
                    setTimeout(()=>{
                        controller.enqueue(encodeText(suffix));
                        res();
                    });
                });
            }
        },
        flush (controller) {
            if (suffixFlushTask) return suffixFlushTask;
            if (!suffixFlushed && suffix) {
                suffixFlushed = true;
                controller.enqueue(encodeText(suffix));
            }
        }
    });
}
function createInlineDataStream(dataStream) {
    let dataStreamFinished = null;
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            if (!dataStreamFinished) {
                const dataStreamReader = dataStream.getReader();
                dataStreamFinished = new Promise((res)=>setTimeout(async ()=>{
                        try {
                            while(true){
                                const { done , value  } = await dataStreamReader.read();
                                if (done) {
                                    return res();
                                }
                                controller.enqueue(value);
                            }
                        } catch (err) {
                            controller.error(err);
                        }
                        res();
                    }, 0));
            }
        },
        flush () {
            if (dataStreamFinished) {
                return dataStreamFinished;
            }
        }
    });
}
function createSuffixStream(suffix) {
    return new TransformStream({
        flush (controller) {
            if (suffix) {
                controller.enqueue(encodeText(suffix));
            }
        }
    });
}
function createRootLayoutValidatorStream(assetPrefix = "", getTree) {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            if (!foundHtml || !foundBody) {
                const content = decodeText(chunk);
                if (!foundHtml && content.includes("<html")) {
                    foundHtml = true;
                }
                if (!foundBody && content.includes("<body")) {
                    foundBody = true;
                }
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [
                foundHtml ? null : "html",
                foundBody ? null : "body"
            ].filter(_nonNullable.nonNullable);
            if (missingTags.length > 0) {
                controller.enqueue(encodeText(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({
                    missingTags,
                    assetPrefix: assetPrefix ?? "",
                    tree: getTree()
                })}</script>`));
            }
        }
    });
}
async function continueFromInitialStream(renderStream, { suffix , dataStream , generateStaticHTML , getServerInsertedHTML , serverInsertedHTMLToHead , validateRootLayout  }) {
    const closeTag = "</body></html>";
    const suffixUnclosed = suffix ? suffix.split(closeTag)[0] : null;
    if (generateStaticHTML) {
        await renderStream.allReady;
    }
    const transforms = [
        createBufferedTransformStream(),
        getServerInsertedHTML && !serverInsertedHTMLToHead ? createInsertedHTMLStream(getServerInsertedHTML) : null,
        suffixUnclosed != null ? createDeferredSuffixStream(suffixUnclosed) : null,
        dataStream ? createInlineDataStream(dataStream) : null,
        suffixUnclosed != null ? createSuffixStream(closeTag) : null,
        createHeadInsertionTransformStream(async ()=>{
            const serverInsertedHTML = getServerInsertedHTML && serverInsertedHTMLToHead ? await getServerInsertedHTML() : "";
            return serverInsertedHTML;
        }),
        validateRootLayout ? createRootLayoutValidatorStream(validateRootLayout.assetPrefix, validateRootLayout.getTree) : null
    ].filter(_nonNullable.nonNullable);
    return transforms.reduce((readable, transform)=>readable.pipeThrough(transform), renderStream);
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/htmlescape.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.htmlEscapeJsonString = htmlEscapeJsonString;
exports.ESCAPE_REGEX = void 0;
const ESCAPE_LOOKUP = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
exports.ESCAPE_REGEX = ESCAPE_REGEX;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/internal-utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stripInternalQueries = stripInternalQueries;
exports.stripInternalSearchParams = stripInternalSearchParams;
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextDefaultLocale",
    "__nextIsNotFound"
];
const EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(searchParams, extended) {
    for (const name of INTERNAL_QUERY_NAMES){
        searchParams.delete(name);
    }
    if (extended) {
        for (const name of EXTENDED_INTERNAL_QUERY_NAMES){
            searchParams.delete(name);
        }
    }
    return searchParams;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RequestCookies", {
    enumerable: true,
    get: function() {
        return _requestCookies.RequestCookies;
    }
});
Object.defineProperty(exports, "ResponseCookies", {
    enumerable: true,
    get: function() {
        return _responseCookies.ResponseCookies;
    }
});
var _requestCookies = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/request-cookies.js (ecmascript, ssr)");
var _responseCookies = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/response-cookies.js (ecmascript, ssr)");

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/run-with-request-async-storage.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runWithRequestAsyncStorage = runWithRequestAsyncStorage;
var _appRouterHeaders = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
var _appRender = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/app-render.js (ecmascript, ssr)");
function headersWithoutFlight(headers) {
    const newHeaders = {
        ...headers
    };
    for (const param of _appRouterHeaders.FLIGHT_PARAMETERS){
        delete newHeaders[param.toString().toLowerCase()];
    }
    return newHeaders;
}
function runWithRequestAsyncStorage(requestAsyncStorage, { req , res , renderOpts  }, callback) {
    const tryGetPreviewData = process.env.NEXT_RUNTIME === "edge" ? ()=>false : __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/api-utils/node.js (ecmascript, ssr)").tryGetPreviewData;
    const previewData = renderOpts ? tryGetPreviewData(req, res, renderOpts.previewProps) : false;
    let cachedHeadersInstance;
    let cachedCookiesInstance;
    const store = {
        get headers () {
            if (!cachedHeadersInstance) {
                cachedHeadersInstance = new _appRender.ReadonlyHeaders(headersWithoutFlight(req.headers));
            }
            return cachedHeadersInstance;
        },
        get cookies () {
            if (!cachedCookiesInstance) {
                cachedCookiesInstance = new _appRender.ReadonlyRequestCookies({
                    headers: {
                        get: (key)=>{
                            if (key !== "cookie") {
                                throw new Error("Only cookie header is supported");
                            }
                            return req.headers.cookie;
                        }
                    }
                });
            }
            return cachedCookiesInstance;
        },
        previewData
    };
    return requestAsyncStorage.run(store, callback);
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/run-with-static-generation-async-storage.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.runWithStaticGenerationAsyncStorage = runWithStaticGenerationAsyncStorage;
function runWithStaticGenerationAsyncStorage(staticGenerationAsyncStorage, { pathname , renderOpts  }, callback) {
    const isStaticGeneration = renderOpts.supportsDynamicHTML !== true && !renderOpts.isBot;
    const store = {
        isStaticGeneration,
        pathname,
        incrementalCache: renderOpts.incrementalCache,
        isRevalidate: renderOpts.isRevalidate
    };
    return staticGenerationAsyncStorage.run(store, callback);
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/request-cookies.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _serialize = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/serialize.js (ecmascript, ssr)");
class RequestCookies {
    _parsed = new Map();
    constructor(requestHeaders){
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = (0, _serialize).parseCookieString(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var ref;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (ref = args[0]) == null ? void 0 : ref.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, v])=>(0, _serialize).serialize(v)).join("; "));
        return this;
    }
    delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>(0, _serialize).serialize(value)).join("; "));
        return result;
    }
    clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
}
exports.RequestCookies = RequestCookies;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/response-cookies.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _serialize = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/serialize.js (ecmascript, ssr)");
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = (0, _serialize).serialize(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1000);
    }
    if (cookie.path === null || cookie.path === undefined) {
        cookie.path = "/";
    }
    return cookie;
}
class ResponseCookies {
    _parsed = new Map();
    constructor(responseHeaders){
        this._headers = responseHeaders;
        const headers = this._headers.getAll("set-cookie");
        for (const header of headers){
            const parsed = (0, _serialize).parseSetCookieString(header);
            if (parsed) {
                this._parsed.set(parsed.name, parsed);
            }
        }
    }
    get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    getAll(...args) {
        var ref;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (ref = args[0]) == null ? void 0 : ref.name;
        return all.filter((c)=>c.name === key);
    }
    set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    delete(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this.set({
            name,
            value: "",
            expires: new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
}
exports.ResponseCookies = ResponseCookies;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/app-render.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderToHTMLOrFlight = renderToHTMLOrFlight;
var _react = _interopRequireWildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _error = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/error.js (ecmascript, ssr)");
var _serverBrowser = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server.browser.js (ecmascript, ssr)"));
var _renderResult = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/render-result.js (ecmascript, ssr)"));
var _nodeWebStreamsHelper = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/node-web-streams-helper.js (ecmascript, ssr)");
var _htmlescape = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/htmlescape.js (ecmascript, ssr)");
var _matchSegments = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
var _serverInsertedHtml = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.js (ecmascript, ssr)");
var _internalUtils = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/internal-utils.js (ecmascript, ssr)");
var _redirect = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
var _cookies = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/index.js (ecmascript, ssr)");
var _hooksServerContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/hooks-server-context.js (ecmascript, ssr)");
var _notFound = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
var _noSsrError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/no-ssr-error.js (ecmascript, ssr)");
var _headManagerContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/head-manager-context.js (ecmascript, ssr)");
var _stream = __turbopack_external_require__("stream");
var _stringHash = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/string-hash/index.js (ecmascript, ssr)"));
var _appRouterHeaders = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
var _head = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/head.js (ecmascript, ssr)");
var _formatServerError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/lib/format-server-error.js (ecmascript, ssr)");
var _runWithRequestAsyncStorage = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/run-with-request-async-storage.js (ecmascript, ssr)");
var _runWithStaticGenerationAsyncStorage = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/run-with-static-generation-async-storage.js (ecmascript, ssr)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const isEdgeRuntime = process.env.NEXT_RUNTIME === "edge";
function preloadComponent(Component, props) {
    const prev = console.error;
    console.error = function(msg) {
        if (msg.startsWith("Warning: Invalid hook call.")) {} else {
            prev.apply(console, arguments);
        }
    };
    try {
        let result = Component(props);
        if (result && typeof result.then === "function") {
            result.then(()=>{}, ()=>{});
        }
        return function() {
            return result;
        };
    } catch (x) {} finally{
        console.error = prev;
    }
    return Component;
}
const CACHE_ONE_YEAR = 31536000;
const INTERNAL_HEADERS_INSTANCE = Symbol("internal for headers readonly");
function readonlyHeadersError() {
    return new Error("ReadonlyHeaders cannot be modified");
}
class ReadonlyHeaders {
    constructor(headers){
        const headersInstance = new Headers(headers);
        this[INTERNAL_HEADERS_INSTANCE] = headersInstance;
        this.entries = headersInstance.entries.bind(headersInstance);
        this.forEach = headersInstance.forEach.bind(headersInstance);
        this.get = headersInstance.get.bind(headersInstance);
        this.has = headersInstance.has.bind(headersInstance);
        this.keys = headersInstance.keys.bind(headersInstance);
        this.values = headersInstance.values.bind(headersInstance);
    }
    [Symbol.iterator]() {
        return this[INTERNAL_HEADERS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyHeadersError();
    }
    delete() {
        throw readonlyHeadersError();
    }
    set() {
        throw readonlyHeadersError();
    }
}
exports.ReadonlyHeaders = ReadonlyHeaders;
const INTERNAL_COOKIES_INSTANCE = Symbol("internal for cookies readonly");
class ReadonlyRequestCookiesError extends Error {
    message = "ReadonlyRequestCookies cannot be modified. Read more: https://nextjs.org/api-reference/cookies";
}
class ReadonlyRequestCookies {
    constructor(request){
        const cookiesInstance = new _cookies.RequestCookies(request.headers);
        this[INTERNAL_COOKIES_INSTANCE] = cookiesInstance;
        this.get = cookiesInstance.get.bind(cookiesInstance);
        this.getAll = cookiesInstance.getAll.bind(cookiesInstance);
        this.has = cookiesInstance.has.bind(cookiesInstance);
    }
    [Symbol.iterator]() {
        return this[INTERNAL_COOKIES_INSTANCE][Symbol.iterator]();
    }
    clear() {
        throw new ReadonlyRequestCookiesError();
    }
    delete() {
        throw new ReadonlyRequestCookiesError();
    }
    set() {
        throw new ReadonlyRequestCookiesError();
    }
}
exports.ReadonlyRequestCookies = ReadonlyRequestCookies;
class FlightRenderResult extends _renderResult.default {
    constructor(response){
        super(response, {
            contentType: "application/octet-stream"
        });
    }
}
function interopDefault(mod) {
    return mod.default || mod;
}
function createErrorHandler(_source, isNextExport, capturedErrors, allCapturedErrors) {
    return (err)=>{
        var ref, ref1;
        if (allCapturedErrors) allCapturedErrors.push(err);
        if (err && (err.digest === _hooksServerContext.DYNAMIC_ERROR_CODE || err.digest === _notFound.NOT_FOUND_ERROR_CODE || err.digest === _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE || ((ref = err.digest) == null ? void 0 : ref.startsWith(_redirect.REDIRECT_ERROR_CODE)))) {
            return err.digest;
        }
        if (process.env.NODE_ENV !== "production") {
            (0, _formatServerError).formatServerError(err);
        }
        if (!(isNextExport && (err == null ? void 0 : (ref1 = err.message) == null ? void 0 : ref1.includes("The specific message is omitted in production builds to avoid leaking sensitive details.")))) {
            console.error(err);
        }
        capturedErrors.push(err);
        return (0, _stringHash).default(err.message + err.stack + (err.digest || "")).toString();
    };
}
let isFetchPatched = false;
function patchFetch(ComponentMod) {
    if (isFetchPatched) return;
    isFetchPatched = true;
    const { DynamicServerError  } = ComponentMod.serverHooks;
    const staticGenerationAsyncStorage = ComponentMod.staticGenerationAsyncStorage;
    const originFetch = globalThis.fetch;
    globalThis.fetch = async (input, init)=>{
        var ref, ref2;
        const staticGenerationStore = staticGenerationAsyncStorage.getStore();
        if (!staticGenerationStore) {
            return originFetch(input, init);
        }
        let revalidate;
        if (typeof (init == null ? void 0 : (ref = init.next) == null ? void 0 : ref.revalidate) === "number") {
            revalidate = init.next.revalidate;
        }
        if ((init == null ? void 0 : (ref2 = init.next) == null ? void 0 : ref2.revalidate) === false) {
            revalidate = CACHE_ONE_YEAR;
        }
        if (!staticGenerationStore.fetchRevalidate || typeof revalidate === "number" && revalidate < staticGenerationStore.fetchRevalidate) {
            staticGenerationStore.fetchRevalidate = revalidate;
        }
        let cacheKey;
        const doOriginalFetch = async ()=>{
            return originFetch(input, init).then(async (res)=>{
                if (staticGenerationStore.incrementalCache && cacheKey && typeof revalidate === "number" && revalidate > 0) {
                    const clonedRes = res.clone();
                    let base64Body = "";
                    if (process.env.NEXT_RUNTIME === "edge") {
                        let string = "";
                        new Uint8Array(await clonedRes.arrayBuffer()).forEach((byte)=>{
                            string += String.fromCharCode(byte);
                        });
                        base64Body = btoa(string);
                    } else {
                        base64Body = Buffer.from(await clonedRes.arrayBuffer()).toString("base64");
                    }
                    await staticGenerationStore.incrementalCache.set(cacheKey, {
                        kind: "FETCH",
                        isStale: false,
                        age: 0,
                        data: {
                            headers: Object.fromEntries(clonedRes.headers.entries()),
                            body: base64Body
                        },
                        revalidate
                    }, revalidate, true);
                }
                return res;
            });
        };
        if (staticGenerationStore.incrementalCache && typeof revalidate === "number" && revalidate > 0) {
            cacheKey = await staticGenerationStore.incrementalCache.fetchCacheKey(input.toString(), init);
            const entry = await staticGenerationStore.incrementalCache.get(cacheKey, true);
            if ((entry == null ? void 0 : entry.value) && entry.value.kind === "FETCH") {
                if (!staticGenerationStore.isRevalidate || !entry.isStale) {
                    if (entry.isStale) {
                        if (!staticGenerationStore.pendingRevalidates) {
                            staticGenerationStore.pendingRevalidates = [];
                        }
                        staticGenerationStore.pendingRevalidates.push(doOriginalFetch().catch(console.error));
                    }
                    const resData = entry.value.data;
                    let decodedBody = "";
                    if (process.env.NEXT_RUNTIME === "edge") {
                        decodedBody = atob(resData.body);
                    } else {
                        decodedBody = Buffer.from(resData.body, "base64").toString();
                    }
                    return new Response(decodedBody, {
                        headers: resData.headers,
                        status: resData.status
                    });
                }
            }
        }
        if (staticGenerationStore.isStaticGeneration) {
            if (init && typeof init === "object") {
                const cache = init.cache;
                if (isEdgeRuntime) {
                    delete init.cache;
                }
                if (cache === "no-store") {
                    staticGenerationStore.fetchRevalidate = 0;
                    throw new DynamicServerError(`no-store fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`);
                }
                const hasNextConfig = "next" in init;
                const next = init.next || {};
                if (typeof next.revalidate === "number" && (typeof staticGenerationStore.fetchRevalidate === "undefined" || next.revalidate < staticGenerationStore.fetchRevalidate)) {
                    const forceDynamic = staticGenerationStore.forceDynamic;
                    if (!forceDynamic || next.revalidate !== 0) {
                        staticGenerationStore.fetchRevalidate = next.revalidate;
                    }
                    if (!forceDynamic && next.revalidate === 0) {
                        throw new DynamicServerError(`revalidate: ${next.revalidate} fetch ${input}${staticGenerationStore.pathname ? ` ${staticGenerationStore.pathname}` : ""}`);
                    }
                }
                if (hasNextConfig) delete init.next;
            }
        }
        return doOriginalFetch();
    };
}
function useFlightResponse(writable, req, serverComponentManifest, rscChunks, flightResponseRef, nonce) {
    if (flightResponseRef.current !== null) {
        return flightResponseRef.current;
    }
    const { createFromReadableStream  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-server-dom-webpack/client.js (ecmascript, ssr)");
    const [renderStream, forwardStream] = (0, _nodeWebStreamsHelper).readableStreamTee(req);
    const res = createFromReadableStream(renderStream, {
        moduleMap: isEdgeRuntime ? serverComponentManifest.__edge_ssr_module_mapping__ : serverComponentManifest.__ssr_module_mapping__
    });
    flightResponseRef.current = res;
    let bootstrapped = false;
    const forwardReader = forwardStream.getReader();
    const writer = writable.getWriter();
    const startScriptTag = nonce ? `<script nonce=${JSON.stringify(nonce)}>` : "<script>";
    function read() {
        forwardReader.read().then(({ done , value  })=>{
            if (value) {
                rscChunks.push(value);
            }
            if (!bootstrapped) {
                bootstrapped = true;
                writer.write((0, _nodeWebStreamsHelper).encodeText(`${startScriptTag}(self.__next_f=self.__next_f||[]).push(${(0, _htmlescape).htmlEscapeJsonString(JSON.stringify([
                    0
                ]))})</script>`));
            }
            if (done) {
                flightResponseRef.current = null;
                writer.close();
            } else {
                const responsePartial = (0, _nodeWebStreamsHelper).decodeText(value);
                const scripts = `${startScriptTag}self.__next_f.push(${(0, _htmlescape).htmlEscapeJsonString(JSON.stringify([
                    1,
                    responsePartial
                ]))})</script>`;
                writer.write((0, _nodeWebStreamsHelper).encodeText(scripts));
                read();
            }
        });
    }
    read();
    return res;
}
function createServerComponentRenderer(ComponentToRender, ComponentMod, { transformStream , serverComponentManifest , serverContexts , rscChunks  }, serverComponentsErrorHandler, nonce) {
    if (ComponentMod.__next_app_webpack_require__) {
        globalThis.__next_require__ = ComponentMod.__next_app_webpack_require__;
        globalThis.__next_chunk_load__ = ()=>Promise.resolve();
    }
    let RSCStream;
    const createRSCStream = ()=>{
        if (!RSCStream) {
            RSCStream = ComponentMod.renderToReadableStream(_react.default.createElement(ComponentToRender, null), serverComponentManifest, {
                context: serverContexts,
                onError: serverComponentsErrorHandler
            });
        }
        return RSCStream;
    };
    const flightResponseRef = {
        current: null
    };
    const writable = transformStream.writable;
    return function ServerComponentWrapper() {
        const reqStream = createRSCStream();
        const response = useFlightResponse(writable, reqStream, serverComponentManifest, rscChunks, flightResponseRef, nonce);
        return (0, _react).use(response);
    };
}
function getShortDynamicParamType(type) {
    switch(type){
        case "catchall":
            return "c";
        case "optional-catchall":
            return "oc";
        case "dynamic":
            return "d";
        default:
            throw new Error("Unknown dynamic param type");
    }
}
function getSegmentParam(segment) {
    if (segment.startsWith("[[...") && segment.endsWith("]]")) {
        return {
            type: "optional-catchall",
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith("[...") && segment.endsWith("]")) {
        return {
            type: "catchall",
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith("[") && segment.endsWith("]")) {
        return {
            type: "dynamic",
            param: segment.slice(1, -1)
        };
    }
    return null;
}
function getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, filePath, serverCSSForEntries, injectedCSS, collectNewCSSImports) {
    var ref;
    const layoutOrPageCssModules = serverCSSManifest[filePath];
    const filePathWithoutExt = filePath.replace(/\.[^.]+$/, "");
    const cssFilesForEntry = new Set(((ref = serverComponentManifest.__entry_css_files__) == null ? void 0 : ref[filePathWithoutExt]) || []);
    if (!layoutOrPageCssModules || !cssFilesForEntry.size) {
        return [];
    }
    const chunks = new Set();
    for (const mod of layoutOrPageCssModules){
        if (serverCSSForEntries.includes(mod) || !/\.module\.(css|sass|scss)$/.test(mod)) {
            if (!injectedCSS.has(mod)) {
                const modData = serverComponentManifest[mod];
                if (modData) {
                    for (const chunk of modData.default.chunks){
                        if (cssFilesForEntry.has(chunk)) {
                            chunks.add(chunk);
                            if (collectNewCSSImports) {
                                injectedCSS.add(mod);
                            }
                        }
                    }
                }
            }
        }
    }
    return [
        ...chunks
    ];
}
function getServerCSSForEntries(serverCSSManifest, entries) {
    const css = [];
    for (const entry of entries){
        const entryName = entry.replace(/\.[^.]+$/, "");
        if (serverCSSManifest.__entry_css_mods__ && serverCSSManifest.__entry_css_mods__[entryName]) {
            css.push(...serverCSSManifest.__entry_css_mods__[entryName]);
        }
    }
    return css;
}
function getPreloadedFontFilesInlineLinkTags(serverComponentManifest, serverCSSManifest, fontLoaderManifest, serverCSSForEntries, filePath) {
    var ref;
    if (!fontLoaderManifest || !filePath) {
        return null;
    }
    const layoutOrPageCss = serverCSSManifest[filePath] || ((ref = serverComponentManifest.__client_css_manifest__) == null ? void 0 : ref[filePath]);
    if (!layoutOrPageCss) {
        return null;
    }
    const fontFiles = new Set();
    let foundFontUsage = false;
    for (const css of layoutOrPageCss){
        if (serverCSSForEntries.includes(css)) {
            const preloadedFontFiles = fontLoaderManifest.app[css];
            if (preloadedFontFiles) {
                foundFontUsage = true;
                for (const fontFile of preloadedFontFiles){
                    fontFiles.add(fontFile);
                }
            }
        }
    }
    if (!foundFontUsage) {
        return null;
    }
    return [
        ...fontFiles
    ];
}
function getScriptNonceFromHeader(cspHeaderValue) {
    var ref;
    const directives = cspHeaderValue.split(";").map((directive)=>directive.trim());
    const directive1 = directives.find((dir)=>dir.startsWith("script-src")) || directives.find((dir)=>dir.startsWith("default-src"));
    if (!directive1) {
        return;
    }
    const nonce = (ref = directive1.split(" ").slice(1).map((source)=>source.trim()).find((source)=>source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))) == null ? void 0 : ref.slice(7, -1);
    if (!nonce) {
        return;
    }
    if (_htmlescape.ESCAPE_REGEX.test(nonce)) {
        throw new Error("Nonce value from Content-Security-Policy contained HTML escape characters.\nLearn more: https://nextjs.org/docs/messages/nonce-contained-invalid-characters");
    }
    return nonce;
}
async function renderToString(element) {
    const renderStream = await _serverBrowser.default.renderToReadableStream(element);
    await renderStream.allReady;
    return (0, _nodeWebStreamsHelper).streamToString(renderStream);
}
async function renderToHTMLOrFlight(req, res, pathname, query, renderOpts) {
    const isFlight = req.headers[_appRouterHeaders.RSC.toLowerCase()] !== undefined;
    const capturedErrors = [];
    const allCapturedErrors = [];
    const isNextExport = !!renderOpts.nextExport;
    const serverComponentsErrorHandler = createErrorHandler("serverComponentsRenderer", isNextExport, capturedErrors);
    const flightDataRendererErrorHandler = createErrorHandler("flightDataRenderer", isNextExport, capturedErrors);
    const htmlRendererErrorHandler = createErrorHandler("htmlRenderer", isNextExport, capturedErrors, allCapturedErrors);
    const { buildManifest , subresourceIntegrityManifest , serverComponentManifest , serverCSSManifest ={} , ComponentMod , dev , fontLoaderManifest , supportsDynamicHTML  } = renderOpts;
    patchFetch(ComponentMod);
    const generateStaticHTML = supportsDynamicHTML !== true;
    const staticGenerationAsyncStorage = ComponentMod.staticGenerationAsyncStorage;
    const requestAsyncStorage = ComponentMod.requestAsyncStorage;
    const wrappedRender = async ()=>{
        const staticGenerationStore = staticGenerationAsyncStorage.getStore();
        if (!staticGenerationStore) {
            throw new Error(`Invariant: Render expects to have staticGenerationAsyncStorage, none found`);
        }
        query = Object.assign({}, query);
        const isPrefetch = req.headers[_appRouterHeaders.NEXT_ROUTER_PREFETCH.toLowerCase()] !== undefined;
        let providedFlightRouterState = isFlight ? req.headers[_appRouterHeaders.NEXT_ROUTER_STATE_TREE.toLowerCase()] ? JSON.parse(req.headers[_appRouterHeaders.NEXT_ROUTER_STATE_TREE.toLowerCase()]) : undefined : undefined;
        const loaderTree = ComponentMod.tree;
        (0, _internalUtils).stripInternalQueries(query);
        const LayoutRouter = ComponentMod.LayoutRouter;
        const RenderFromTemplateContext = ComponentMod.RenderFromTemplateContext;
        const serverContexts = [
            [
                "WORKAROUND",
                null
            ]
        ];
        const pathParams = renderOpts.params;
        const getDynamicParamFromSegment = (segment)=>{
            const segmentParam = getSegmentParam(segment);
            if (!segmentParam) {
                return null;
            }
            const key = segmentParam.param;
            let value = pathParams[key];
            if (Array.isArray(value)) {
                value = value.map((i)=>encodeURIComponent(i));
            } else if (typeof value === "string") {
                value = encodeURIComponent(value);
            }
            if (!value) {
                if (segmentParam.type === "optional-catchall") {
                    const type = getShortDynamicParamType(segmentParam.type);
                    return {
                        param: key,
                        value: null,
                        type: type,
                        treeSegment: [
                            key,
                            "",
                            type
                        ]
                    };
                }
                return null;
            }
            const type = getShortDynamicParamType(segmentParam.type);
            return {
                param: key,
                value: value,
                treeSegment: [
                    key,
                    Array.isArray(value) ? value.join("/") : value,
                    type
                ],
                type: type
            };
        };
        async function resolveHead([segment, parallelRoutes, { head  }], parentParams, isRootHead) {
            const segmentParam = getDynamicParamFromSegment(segment);
            const currentParams = segmentParam && segmentParam.value !== null ? {
                ...parentParams,
                [segmentParam.param]: segmentParam.value
            } : parentParams;
            for(const key in parallelRoutes){
                const childTree = parallelRoutes[key];
                const returnedHead = await resolveHead(childTree, currentParams, false);
                if (returnedHead) {
                    return returnedHead;
                }
            }
            if (head) {
                const Head = await interopDefault(await head[0]());
                return _react.default.createElement(Head, {
                    params: currentParams
                });
            } else if (isRootHead) {
                return _react.default.createElement(_head.DefaultHead, null);
            }
            return null;
        }
        const createFlightRouterStateFromLoaderTree = ([segment, parallelRoutes, { layout  }], rootLayoutIncluded = false)=>{
            const dynamicParam = getDynamicParamFromSegment(segment);
            const segmentTree = [
                dynamicParam ? dynamicParam.treeSegment : segment,
                {}
            ];
            if (!rootLayoutIncluded && typeof layout !== "undefined") {
                rootLayoutIncluded = true;
                segmentTree[4] = true;
            }
            segmentTree[1] = Object.keys(parallelRoutes).reduce((existingValue, currentValue)=>{
                existingValue[currentValue] = createFlightRouterStateFromLoaderTree(parallelRoutes[currentValue], rootLayoutIncluded);
                return existingValue;
            }, {});
            return segmentTree;
        };
        let defaultRevalidate = false;
        const serverCSSForEntries = getServerCSSForEntries(serverCSSManifest, ComponentMod.pages);
        const assetPrefix = renderOpts.assetPrefix || "";
        const createComponentAndStyles = async ({ filePath , getComponent , shouldPreload , injectedCSS  })=>{
            const cssHrefs = getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, filePath, serverCSSForEntries, injectedCSS);
            const styles = cssHrefs ? cssHrefs.map((href, index)=>_react.default.createElement("link", {
                    rel: "stylesheet",
                    href: `${assetPrefix}/_next/${href}`,
                    precedence: shouldPreload ? "high" : undefined,
                    key: index
                })) : null;
            const Comp = await interopDefault(await getComponent());
            return [
                Comp,
                styles
            ];
        };
        const createComponentTree = async ({ createSegmentPath , loaderTree: [segment, parallelRoutes, { layout , template , error , loading , page , "not-found": notFound  }] , parentParams , firstItem , rootLayoutIncluded , injectedCSS  })=>{
            const layoutOrPagePath = (layout == null ? void 0 : layout[1]) || (page == null ? void 0 : page[1]);
            const injectedCSSWithCurrentLayout = new Set(injectedCSS);
            const stylesheets = layoutOrPagePath ? getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, layoutOrPagePath, serverCSSForEntries, injectedCSSWithCurrentLayout, true) : [];
            const preloadedFontFiles = layoutOrPagePath ? getPreloadedFontFilesInlineLinkTags(serverComponentManifest, serverCSSManifest, fontLoaderManifest, serverCSSForEntries, layoutOrPagePath) : [];
            const [Template, templateStyles] = template ? await createComponentAndStyles({
                filePath: template[1],
                getComponent: template[0],
                shouldPreload: true,
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [
                _react.default.Fragment
            ];
            const [ErrorComponent, errorStyles] = error ? await createComponentAndStyles({
                filePath: error[1],
                getComponent: error[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const [Loading, loadingStyles] = loading ? await createComponentAndStyles({
                filePath: loading[1],
                getComponent: loading[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : [];
            const isLayout = typeof layout !== "undefined";
            const isPage = typeof page !== "undefined";
            const layoutOrPageMod = isLayout ? await layout[0]() : isPage ? await page[0]() : undefined;
            const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
            const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
            const [NotFound, notFoundStyles] = notFound ? await createComponentAndStyles({
                filePath: notFound[1],
                getComponent: notFound[0],
                injectedCSS: injectedCSSWithCurrentLayout
            }) : rootLayoutAtThisLevel ? [
                _error.NotFound
            ] : [];
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.dynamic) === "string") {
                if (layoutOrPageMod.dynamic === "force-static") {
                    staticGenerationStore.forceStatic = true;
                } else if (layoutOrPageMod.dynamic !== "error") {
                    staticGenerationStore.forceStatic = false;
                }
            }
            if (typeof (layoutOrPageMod == null ? void 0 : layoutOrPageMod.revalidate) === "number") {
                defaultRevalidate = layoutOrPageMod.revalidate;
                if (staticGenerationStore.isStaticGeneration && defaultRevalidate === 0) {
                    const { DynamicServerError  } = ComponentMod.serverHooks;
                    throw new DynamicServerError(`revalidate: 0 configured ${segment}`);
                }
            }
            let Component = layoutOrPageMod ? interopDefault(layoutOrPageMod) : undefined;
            if (dev) {
                const { isValidElementType  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-is/index.js (ecmascript, ssr)");
                if ((isPage || typeof Component !== "undefined") && !isValidElementType(Component)) {
                    throw new Error(`The default export is not a React Component in page: "${pathname}"`);
                }
                if (typeof ErrorComponent !== "undefined" && !isValidElementType(ErrorComponent)) {
                    throw new Error(`The default export of error is not a React Component in page: ${segment}`);
                }
                if (typeof Loading !== "undefined" && !isValidElementType(Loading)) {
                    throw new Error(`The default export of loading is not a React Component in ${segment}`);
                }
                if (typeof NotFound !== "undefined" && !isValidElementType(NotFound)) {
                    throw new Error(`The default export of notFound is not a React Component in ${segment}`);
                }
            }
            const segmentParam = getDynamicParamFromSegment(segment);
            const currentParams = segmentParam && segmentParam.value !== null ? {
                ...parentParams,
                [segmentParam.param]: segmentParam.value
            } : parentParams;
            const actualSegment = segmentParam ? segmentParam.treeSegment : segment;
            const parallelRouteMap = await Promise.all(Object.keys(parallelRoutes).map(async (parallelRouteKey)=>{
                const currentSegmentPath = firstItem ? [
                    parallelRouteKey
                ] : [
                    actualSegment,
                    parallelRouteKey
                ];
                const childSegment = parallelRoutes[parallelRouteKey][0];
                const childSegmentParam = getDynamicParamFromSegment(childSegment);
                if (isPrefetch && Loading) {
                    const childProp = {
                        current: null,
                        segment: childSegmentParam ? childSegmentParam.treeSegment : childSegment
                    };
                    return [
                        parallelRouteKey,
                        _react.default.createElement(LayoutRouter, {
                            parallelRouterKey: parallelRouteKey,
                            segmentPath: createSegmentPath(currentSegmentPath),
                            loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                            loadingStyles: loadingStyles,
                            hasLoading: Boolean(Loading),
                            error: ErrorComponent,
                            errorStyles: errorStyles,
                            template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                            templateStyles: templateStyles,
                            notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                            notFoundStyles: notFoundStyles,
                            childProp: childProp
                        })
                    ];
                }
                const { Component: ChildComponent  } = await createComponentTree({
                    createSegmentPath: (child)=>{
                        return createSegmentPath([
                            ...currentSegmentPath,
                            ...child
                        ]);
                    },
                    loaderTree: parallelRoutes[parallelRouteKey],
                    parentParams: currentParams,
                    rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove,
                    injectedCSS: injectedCSSWithCurrentLayout
                });
                const childProp = {
                    current: _react.default.createElement(ChildComponent, null),
                    segment: childSegmentParam ? childSegmentParam.treeSegment : childSegment
                };
                const segmentPath = createSegmentPath(currentSegmentPath);
                return [
                    parallelRouteKey,
                    _react.default.createElement(LayoutRouter, {
                        parallelRouterKey: parallelRouteKey,
                        segmentPath: segmentPath,
                        error: ErrorComponent,
                        errorStyles: errorStyles,
                        loading: Loading ? _react.default.createElement(Loading, null) : undefined,
                        loadingStyles: loadingStyles,
                        hasLoading: Boolean(Loading),
                        template: _react.default.createElement(Template, null, _react.default.createElement(RenderFromTemplateContext, null)),
                        templateStyles: templateStyles,
                        notFound: NotFound ? _react.default.createElement(NotFound, null) : undefined,
                        notFoundStyles: notFoundStyles,
                        childProp: childProp
                    })
                ];
            }));
            const parallelRouteComponents = parallelRouteMap.reduce((list, [parallelRouteKey, Comp])=>{
                list[parallelRouteKey] = Comp;
                return list;
            }, {});
            if (!Component) {
                return {
                    Component: ()=>_react.default.createElement(_react.default.Fragment, null, parallelRouteComponents.children)
                };
            }
            const props = {
                ...parallelRouteComponents,
                params: currentParams,
                ...isPage ? {
                    searchParams: query
                } : {}
            };
            Component = await Promise.resolve().then(()=>{
                return preloadComponent(Component, props);
            });
            return {
                Component: ()=>{
                    return _react.default.createElement(_react.default.Fragment, null, (preloadedFontFiles == null ? void 0 : preloadedFontFiles.length) === 0 ? _react.default.createElement("link", {
                        rel: "preconnect",
                        href: "/",
                        crossOrigin: "anonymous"
                    }) : null, preloadedFontFiles ? preloadedFontFiles.map((fontFile)=>{
                        const ext = /\.(woff|woff2|eot|ttf|otf)$/.exec(fontFile)[1];
                        return _react.default.createElement("link", {
                            key: fontFile,
                            rel: "preload",
                            href: `${assetPrefix}/_next/${fontFile}`,
                            as: "font",
                            type: `font/${ext}`,
                            crossOrigin: "anonymous"
                        });
                    }) : null, stylesheets ? stylesheets.map((href, index)=>_react.default.createElement("link", {
                            rel: "stylesheet",
                            href: `${assetPrefix}/_next/${href}`,
                            precedence: "high",
                            key: index
                        })) : null, _react.default.createElement(Component, Object.assign({}, props)));
                }
            };
        };
        const streamToBufferedResult = async (renderResult)=>{
            const renderChunks = [];
            const writable = new _stream.Writable({
                write (chunk, _encoding, callback) {
                    renderChunks.push(chunk);
                    callback();
                }
            });
            await renderResult.pipe(writable);
            return Buffer.concat(renderChunks).toString();
        };
        const generateFlight = async ()=>{
            const walkTreeWithFlightRouterState = async ({ createSegmentPath , loaderTreeToFilter , parentParams , isFirst , flightRouterState , parentRendered , rscPayloadHead , injectedCSS , rootLayoutIncluded  })=>{
                const [segment, parallelRoutes, { layout  }] = loaderTreeToFilter;
                const isLayout = typeof layout !== "undefined";
                const parallelRoutesKeys = Object.keys(parallelRoutes);
                const rootLayoutAtThisLevel = isLayout && !rootLayoutIncluded;
                const rootLayoutIncludedAtThisLevelOrAbove = rootLayoutIncluded || rootLayoutAtThisLevel;
                const segmentParam = getDynamicParamFromSegment(segment);
                const currentParams = segmentParam && segmentParam.value !== null ? {
                    ...parentParams,
                    [segmentParam.param]: segmentParam.value
                } : parentParams;
                const actualSegment = segmentParam ? segmentParam.treeSegment : segment;
                const renderComponentsOnThisLevel = !flightRouterState || !(0, _matchSegments).matchSegment(actualSegment, flightRouterState[0]) || parallelRoutesKeys.length === 0 || flightRouterState[3] === "refetch";
                if (!parentRendered && renderComponentsOnThisLevel) {
                    return [
                        actualSegment,
                        createFlightRouterStateFromLoaderTree(loaderTreeToFilter),
                        isPrefetch && !Boolean(loaderTreeToFilter[2].loading) ? null : _react.default.createElement(async ()=>{
                            const { Component  } = await createComponentTree({
                                createSegmentPath: (child)=>{
                                    return createSegmentPath(child);
                                },
                                loaderTree: loaderTreeToFilter,
                                parentParams: currentParams,
                                firstItem: isFirst,
                                injectedCSS,
                                rootLayoutIncluded: rootLayoutIncluded
                            });
                            return _react.default.createElement(Component, null);
                        }),
                        isPrefetch && !Boolean(loaderTreeToFilter[2].loading) ? null : _react.default.createElement(_react.default.Fragment, null, rscPayloadHead)
                    ];
                }
                const layoutPath = layout == null ? void 0 : layout[1];
                const injectedCSSWithCurrentLayout = new Set(injectedCSS);
                if (layoutPath) {
                    getCssInlinedLinkTags(serverComponentManifest, serverCSSManifest, layoutPath, serverCSSForEntries, injectedCSSWithCurrentLayout, true);
                }
                for (const parallelRouteKey of parallelRoutesKeys){
                    const parallelRoute = parallelRoutes[parallelRouteKey];
                    const currentSegmentPath = isFirst ? [
                        parallelRouteKey
                    ] : [
                        actualSegment,
                        parallelRouteKey
                    ];
                    const path = await walkTreeWithFlightRouterState({
                        createSegmentPath: (child)=>{
                            return createSegmentPath([
                                ...currentSegmentPath,
                                ...child
                            ]);
                        },
                        loaderTreeToFilter: parallelRoute,
                        parentParams: currentParams,
                        flightRouterState: flightRouterState && flightRouterState[1][parallelRouteKey],
                        parentRendered: parentRendered || renderComponentsOnThisLevel,
                        isFirst: false,
                        rscPayloadHead,
                        injectedCSS: injectedCSSWithCurrentLayout,
                        rootLayoutIncluded: rootLayoutIncludedAtThisLevelOrAbove
                    });
                    if (typeof path[path.length - 1] !== "string") {
                        return [
                            actualSegment,
                            parallelRouteKey,
                            ...path
                        ];
                    }
                }
                return [
                    actualSegment
                ];
            };
            const rscPayloadHead1 = await resolveHead(loaderTree, {}, true);
            const flightData = [
                (await walkTreeWithFlightRouterState({
                    createSegmentPath: (child)=>child,
                    loaderTreeToFilter: loaderTree,
                    parentParams: {},
                    flightRouterState: providedFlightRouterState,
                    isFirst: true,
                    rscPayloadHead: rscPayloadHead1,
                    injectedCSS: new Set(),
                    rootLayoutIncluded: false
                })).slice(1)
            ];
            const readable = ComponentMod.renderToReadableStream(flightData, serverComponentManifest, {
                context: serverContexts,
                onError: flightDataRendererErrorHandler
            }).pipeThrough((0, _nodeWebStreamsHelper).createBufferedTransformStream());
            return new FlightRenderResult(readable);
        };
        if (isFlight && !staticGenerationStore.isStaticGeneration) {
            return generateFlight();
        }
        const AppRouter = ComponentMod.AppRouter;
        const GlobalError = interopDefault(ComponentMod.GlobalError);
        let serverComponentsInlinedTransformStream = new TransformStream();
        const initialCanonicalUrl = req.url;
        const csp = req.headers["content-security-policy"];
        let nonce;
        if (csp && typeof csp === "string") {
            nonce = getScriptNonceFromHeader(csp);
        }
        const serverComponentsRenderOpts = {
            transformStream: serverComponentsInlinedTransformStream,
            serverComponentManifest,
            serverContexts,
            rscChunks: []
        };
        const validateRootLayout = dev ? {
            validateRootLayout: {
                assetPrefix: renderOpts.assetPrefix,
                getTree: ()=>createFlightRouterStateFromLoaderTree(loaderTree)
            }
        } : {};
        const initialHead = await resolveHead(loaderTree, {}, true);
        const ServerComponentsRenderer = createServerComponentRenderer(async ()=>{
            const { Component: ComponentTree  } = await createComponentTree({
                createSegmentPath: (child)=>child,
                loaderTree: loaderTree,
                parentParams: {},
                firstItem: true,
                injectedCSS: new Set(),
                rootLayoutIncluded: false
            });
            const initialTree = createFlightRouterStateFromLoaderTree(loaderTree);
            return _react.default.createElement(AppRouter, {
                assetPrefix: assetPrefix,
                initialCanonicalUrl: initialCanonicalUrl,
                initialTree: initialTree,
                initialHead: initialHead,
                globalErrorComponent: GlobalError
            }, _react.default.createElement(ComponentTree, null));
        }, ComponentMod, serverComponentsRenderOpts, serverComponentsErrorHandler, nonce);
        const serverInsertedHTMLCallbacks = new Set();
        function InsertedHTML({ children  }) {
            serverInsertedHTMLCallbacks.clear();
            const addInsertedHtml = _react.default.useCallback((handler)=>{
                serverInsertedHTMLCallbacks.add(handler);
            }, []);
            return _react.default.createElement(_headManagerContext.HeadManagerContext.Provider, {
                value: {
                    appDir: true,
                    nonce
                }
            }, _react.default.createElement(_serverInsertedHtml.ServerInsertedHTMLContext.Provider, {
                value: addInsertedHtml
            }, children));
        }
        const bodyResult = async ()=>{
            const polyfills = buildManifest.polyfillFiles.filter((polyfill)=>polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map((polyfill)=>{
                return {
                    src: `${assetPrefix}/_next/${polyfill}`,
                    integrity: subresourceIntegrityManifest == null ? void 0 : subresourceIntegrityManifest[polyfill]
                };
            });
            const content = _react.default.createElement(InsertedHTML, null, _react.default.createElement(ServerComponentsRenderer, null));
            let polyfillsFlushed = false;
            const getServerInsertedHTML = ()=>{
                const flushed = renderToString(_react.default.createElement(_react.default.Fragment, null, Array.from(serverInsertedHTMLCallbacks).map((callback)=>callback()), polyfillsFlushed ? null : polyfills == null ? void 0 : polyfills.map((polyfill)=>{
                    return _react.default.createElement("script", {
                        key: polyfill.src,
                        src: polyfill.src,
                        integrity: polyfill.integrity,
                        noModule: true,
                        nonce: nonce
                    });
                })));
                polyfillsFlushed = true;
                return flushed;
            };
            try {
                const renderStream = await (0, _nodeWebStreamsHelper).renderToInitialStream({
                    ReactDOMServer: _serverBrowser.default,
                    element: content,
                    streamOptions: {
                        onError: htmlRendererErrorHandler,
                        nonce,
                        bootstrapScripts: [
                            ...subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                    src: `${assetPrefix}/_next/` + src,
                                    integrity: subresourceIntegrityManifest[src]
                                })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src)
                        ]
                    }
                });
                const result = await (0, _nodeWebStreamsHelper).continueFromInitialStream(renderStream, {
                    dataStream: serverComponentsInlinedTransformStream == null ? void 0 : serverComponentsInlinedTransformStream.readable,
                    generateStaticHTML: staticGenerationStore.isStaticGeneration || generateStaticHTML,
                    getServerInsertedHTML,
                    serverInsertedHTMLToHead: true,
                    ...validateRootLayout
                });
                return result;
            } catch (err) {
                const shouldNotIndex = err.digest === _notFound.NOT_FOUND_ERROR_CODE;
                if (err.digest === _notFound.NOT_FOUND_ERROR_CODE) {
                    res.statusCode = 404;
                }
                const renderStream = await (0, _nodeWebStreamsHelper).renderToInitialStream({
                    ReactDOMServer: _serverBrowser.default,
                    element: _react.default.createElement("html", {
                        id: "__next_error__"
                    }, _react.default.createElement("head", null, shouldNotIndex ? _react.default.createElement("meta", {
                        name: "robots",
                        content: "noindex"
                    }) : null), _react.default.createElement("body", null)),
                    streamOptions: {
                        nonce,
                        bootstrapScripts: subresourceIntegrityManifest ? buildManifest.rootMainFiles.map((src)=>({
                                src: `${assetPrefix}/_next/` + src,
                                integrity: subresourceIntegrityManifest[src]
                            })) : buildManifest.rootMainFiles.map((src)=>`${assetPrefix}/_next/` + src)
                    }
                });
                return await (0, _nodeWebStreamsHelper).continueFromInitialStream(renderStream, {
                    dataStream: serverComponentsInlinedTransformStream == null ? void 0 : serverComponentsInlinedTransformStream.readable,
                    generateStaticHTML: staticGenerationStore.isStaticGeneration,
                    getServerInsertedHTML,
                    serverInsertedHTMLToHead: true,
                    ...validateRootLayout
                });
            }
        };
        const renderResult1 = new _renderResult.default(await bodyResult());
        if (staticGenerationStore.pendingRevalidates) {
            await Promise.all(staticGenerationStore.pendingRevalidates);
        }
        if (staticGenerationStore.isStaticGeneration) {
            const htmlResult = await streamToBufferedResult(renderResult1);
            if (capturedErrors.length > 0) {
                throw capturedErrors[0];
            }
            const filteredFlightData = await streamToBufferedResult(await generateFlight());
            if (staticGenerationStore.forceStatic === false) {
                staticGenerationStore.fetchRevalidate = 0;
            }
            renderOpts.pageData = filteredFlightData;
            renderOpts.revalidate = staticGenerationStore.fetchRevalidate ?? defaultRevalidate;
            return new _renderResult.default(htmlResult);
        }
        return renderResult1;
    };
    return (0, _runWithRequestAsyncStorage).runWithRequestAsyncStorage(requestAsyncStorage, {
        req,
        res,
        renderOpts
    }, ()=>(0, _runWithStaticGenerationAsyncStorage).runWithStaticGenerationAsyncStorage(staticGenerationAsyncStorage, {
            pathname,
            renderOpts
        }, ()=>wrappedRender()));
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/api-utils/node.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tryGetPreviewData = tryGetPreviewData;
exports.parseBody = parseBody;
exports.apiResolver = apiResolver;
var _ = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/api-utils/index.js (ecmascript, ssr)");
var _bytes = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/bytes/index.js (ecmascript, ssr)"));
var _etag = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/lib/etag.js (ecmascript, ssr)");
var _sendPayload = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/send-payload/index.js (ecmascript, ssr)");
var _stream = __turbopack_external_require__("stream");
var _contentType = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/content-type/index.js (ecmascript, ssr)");
var _isError = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/lib/is-error.js (ecmascript, ssr)"));
var _utils = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/utils.js (ecmascript, ssr)");
var _interopDefault = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/lib/interop-default.js (ecmascript, ssr)");
var _index = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/api-utils/index.js (ecmascript, ssr)");
var _mockRequest = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/lib/mock-request.js (ecmascript, ssr)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function tryGetPreviewData(req, res, options) {
    if (options && (0, _).checkIsManualRevalidate(req, options).isManualRevalidate) {
        return false;
    }
    if (_index.SYMBOL_PREVIEW_DATA in req) {
        return req[_index.SYMBOL_PREVIEW_DATA];
    }
    const getCookies = (0, _index).getCookieParser(req.headers);
    let cookies;
    try {
        cookies = getCookies();
    } catch  {
        return false;
    }
    const hasBypass = _index.COOKIE_NAME_PRERENDER_BYPASS in cookies;
    const hasData = _index.COOKIE_NAME_PRERENDER_DATA in cookies;
    if (!(hasBypass || hasData)) {
        return false;
    }
    if (hasBypass !== hasData) {
        (0, _index).clearPreviewData(res);
        return false;
    }
    if (cookies[_index.COOKIE_NAME_PRERENDER_BYPASS] !== options.previewModeId) {
        (0, _index).clearPreviewData(res);
        return false;
    }
    const tokenPreviewData = cookies[_index.COOKIE_NAME_PRERENDER_DATA];
    let encryptedPreviewData;
    try {
        const jsonwebtoken = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/jsonwebtoken/index.js (ecmascript, ssr)");
        encryptedPreviewData = jsonwebtoken.verify(tokenPreviewData, options.previewModeSigningKey);
    } catch  {
        (0, _index).clearPreviewData(res);
        return false;
    }
    const { decryptWithSecret  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/crypto-utils.js (ecmascript, ssr)");
    const decryptedPreviewData = decryptWithSecret(Buffer.from(options.previewModeEncryptionKey), encryptedPreviewData.data);
    try {
        const data = JSON.parse(decryptedPreviewData);
        Object.defineProperty(req, _index.SYMBOL_PREVIEW_DATA, {
            value: data,
            enumerable: false
        });
        return data;
    } catch  {
        return false;
    }
}
function parseJson(str) {
    if (str.length === 0) {
        return {};
    }
    try {
        return JSON.parse(str);
    } catch (e) {
        throw new _index.ApiError(400, "Invalid JSON");
    }
}
async function parseBody(req, limit) {
    let contentType;
    try {
        contentType = (0, _contentType).parse(req.headers["content-type"] || "text/plain");
    } catch  {
        contentType = (0, _contentType).parse("text/plain");
    }
    const { type , parameters  } = contentType;
    const encoding = parameters.charset || "utf-8";
    let buffer;
    try {
        const getRawBody = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/raw-body/index.js (ecmascript, ssr)");
        buffer = await getRawBody(req, {
            encoding,
            limit
        });
    } catch (e) {
        if ((0, _isError).default(e) && e.type === "entity.too.large") {
            throw new _index.ApiError(413, `Body exceeded ${limit} limit`);
        } else {
            throw new _index.ApiError(400, "Invalid body");
        }
    }
    const body = buffer.toString();
    if (type === "application/json" || type === "application/ld+json") {
        return parseJson(body);
    } else if (type === "application/x-www-form-urlencoded") {
        const qs = __turbopack_external_require__("querystring");
        return qs.decode(body);
    } else {
        return body;
    }
}
function getMaxContentLength(responseLimit) {
    if (responseLimit && typeof responseLimit !== "boolean") {
        return _bytes.default.parse(responseLimit);
    }
    return _index.RESPONSE_LIMIT_DEFAULT;
}
function sendData(req, res, body) {
    if (body === null || body === undefined) {
        res.end();
        return;
    }
    if (res.statusCode === 204 || res.statusCode === 304) {
        res.removeHeader("Content-Type");
        res.removeHeader("Content-Length");
        res.removeHeader("Transfer-Encoding");
        if (process.env.NODE_ENV === "development" && body) {
            console.warn(`A body was attempted to be set with a 204 statusCode for ${req.url}, this is invalid and the body was ignored.\n` + `See more info here https://nextjs.org/docs/messages/invalid-api-status-body`);
        }
        res.end();
        return;
    }
    const contentType = res.getHeader("Content-Type");
    if (body instanceof _stream.Stream) {
        if (!contentType) {
            res.setHeader("Content-Type", "application/octet-stream");
        }
        body.pipe(res);
        return;
    }
    const isJSONLike = [
        "object",
        "number",
        "boolean"
    ].includes(typeof body);
    const stringifiedBody = isJSONLike ? JSON.stringify(body) : body;
    const etag = (0, _etag).generateETag(stringifiedBody);
    if ((0, _sendPayload).sendEtagResponse(req, res, etag)) {
        return;
    }
    if (Buffer.isBuffer(body)) {
        if (!contentType) {
            res.setHeader("Content-Type", "application/octet-stream");
        }
        res.setHeader("Content-Length", body.length);
        res.end(body);
        return;
    }
    if (isJSONLike) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
    }
    res.setHeader("Content-Length", Buffer.byteLength(stringifiedBody));
    res.end(stringifiedBody);
}
function sendJson(res, jsonBody) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(JSON.stringify(jsonBody));
}
function isNotValidData(str) {
    return typeof str !== "string" || str.length < 16;
}
function setPreviewData(res, data, options) {
    if (isNotValidData(options.previewModeId)) {
        throw new Error("invariant: invalid previewModeId");
    }
    if (isNotValidData(options.previewModeEncryptionKey)) {
        throw new Error("invariant: invalid previewModeEncryptionKey");
    }
    if (isNotValidData(options.previewModeSigningKey)) {
        throw new Error("invariant: invalid previewModeSigningKey");
    }
    const jsonwebtoken = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/jsonwebtoken/index.js (ecmascript, ssr)");
    const { encryptWithSecret  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/crypto-utils.js (ecmascript, ssr)");
    const payload = jsonwebtoken.sign({
        data: encryptWithSecret(Buffer.from(options.previewModeEncryptionKey), JSON.stringify(data))
    }, options.previewModeSigningKey, {
        algorithm: "HS256",
        ...options.maxAge !== undefined ? {
            expiresIn: options.maxAge
        } : undefined
    });
    if (payload.length > 2048) {
        throw new Error(`Preview data is limited to 2KB currently, reduce how much data you are storing as preview data to continue`);
    }
    const { serialize  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/cookie/index.js (ecmascript, ssr)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(_index.COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(_index.COOKIE_NAME_PRERENDER_DATA, payload, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.maxAge !== undefined ? {
                maxAge: options.maxAge
            } : undefined,
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    return res;
}
async function revalidate(urlPath, opts, req, context) {
    if (typeof urlPath !== "string" || !urlPath.startsWith("/")) {
        throw new Error(`Invalid urlPath provided to revalidate(), must be a path e.g. /blog/post-1, received ${urlPath}`);
    }
    const revalidateHeaders = {
        [_index.PRERENDER_REVALIDATE_HEADER]: context.previewModeId,
        ...opts.unstable_onlyGenerated ? {
            [_.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER]: "1"
        } : {}
    };
    const allowedRevalidateHeaderKeys = [
        ...context.allowedRevalidateHeaderKeys || [],
        ...context.trustHostHeader ? [
            "cookie",
            "x-vercel-protection-bypass"
        ] : []
    ];
    for (const key of Object.keys(req.headers)){
        if (allowedRevalidateHeaderKeys.includes(key)) {
            revalidateHeaders[key] = req.headers[key];
        }
    }
    try {
        if (context.trustHostHeader) {
            const res = await fetch(`https://${req.headers.host}${urlPath}`, {
                method: "HEAD",
                headers: revalidateHeaders
            });
            const cacheHeader = res.headers.get("x-vercel-cache") || res.headers.get("x-nextjs-cache");
            if ((cacheHeader == null ? void 0 : cacheHeader.toUpperCase()) !== "REVALIDATED" && !(res.status === 404 && opts.unstable_onlyGenerated)) {
                throw new Error(`Invalid response ${res.status}`);
            }
        } else if (context.revalidate) {
            const { req: mockReq , res: mockRes , streamPromise  } = (0, _mockRequest).mockRequest(urlPath, revalidateHeaders, "GET");
            await context.revalidate(mockReq, mockRes);
            await streamPromise;
            if (mockRes.getHeader("x-nextjs-cache") !== "REVALIDATED" && !(mockRes.statusCode === 404 && opts.unstable_onlyGenerated)) {
                throw new Error(`Invalid response ${mockRes.statusCode}`);
            }
        } else {
            throw new Error(`Invariant: required internal revalidate method not passed to api-utils`);
        }
    } catch (err) {
        throw new Error(`Failed to revalidate ${urlPath}: ${(0, _isError).default(err) ? err.message : err}`);
    }
}
async function apiResolver(req, res, query, resolverModule, apiContext, propagateError, dev, page) {
    const apiReq = req;
    const apiRes = res;
    try {
        var ref, ref1, ref2;
        if (!resolverModule) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
        }
        const config = resolverModule.config || {};
        const bodyParser = ((ref = config.api) == null ? void 0 : ref.bodyParser) !== false;
        const responseLimit = ((ref1 = config.api) == null ? void 0 : ref1.responseLimit) ?? true;
        const externalResolver = ((ref2 = config.api) == null ? void 0 : ref2.externalResolver) || false;
        (0, _index).setLazyProp({
            req: apiReq
        }, "cookies", (0, _index).getCookieParser(req.headers));
        apiReq.query = query;
        (0, _index).setLazyProp({
            req: apiReq
        }, "previewData", ()=>tryGetPreviewData(req, res, apiContext));
        (0, _index).setLazyProp({
            req: apiReq
        }, "preview", ()=>apiReq.previewData !== false ? true : undefined);
        if (bodyParser && !apiReq.body) {
            apiReq.body = await parseBody(apiReq, config.api && config.api.bodyParser && config.api.bodyParser.sizeLimit ? config.api.bodyParser.sizeLimit : "1mb");
        }
        let contentLength = 0;
        const maxContentLength = getMaxContentLength(responseLimit);
        const writeData = apiRes.write;
        const endResponse = apiRes.end;
        apiRes.write = (...args)=>{
            contentLength += Buffer.byteLength(args[0] || "");
            return writeData.apply(apiRes, args);
        };
        apiRes.end = (...args)=>{
            if (args.length && typeof args[0] !== "function") {
                contentLength += Buffer.byteLength(args[0] || "");
            }
            if (responseLimit && contentLength >= maxContentLength) {
                console.warn(`API response for ${req.url} exceeds ${_bytes.default.format(maxContentLength)}. API Routes are meant to respond quickly. https://nextjs.org/docs/messages/api-routes-response-size-limit`);
            }
            endResponse.apply(apiRes, args);
        };
        apiRes.status = (statusCode)=>(0, _index).sendStatusCode(apiRes, statusCode);
        apiRes.send = (data)=>sendData(apiReq, apiRes, data);
        apiRes.json = (data)=>sendJson(apiRes, data);
        apiRes.redirect = (statusOrUrl, url)=>(0, _index).redirect(apiRes, statusOrUrl, url);
        apiRes.setPreviewData = (data, options = {})=>setPreviewData(apiRes, data, Object.assign({}, apiContext, options));
        apiRes.clearPreviewData = (options = {})=>(0, _index).clearPreviewData(apiRes, options);
        apiRes.revalidate = (urlPath, opts)=>revalidate(urlPath, opts || {}, req, apiContext);
        const resolver = (0, _interopDefault).interopDefault(resolverModule);
        let wasPiped = false;
        if (process.env.NODE_ENV !== "production") {
            res.once("pipe", ()=>wasPiped = true);
        }
        await resolver(req, res);
        if (process.env.NODE_ENV !== "production" && !externalResolver && !(0, _utils).isResSent(res) && !wasPiped) {
            console.warn(`API resolved without sending a response for ${req.url}, this may result in stalled requests.`);
        }
    } catch (err) {
        if (err instanceof _index.ApiError) {
            (0, _index).sendError(apiRes, err.statusCode, err.message);
        } else {
            if (dev) {
                if ((0, _isError).default(err)) {
                    err.page = page;
                }
                throw err;
            }
            console.error(err);
            if (propagateError) {
                throw err;
            }
            (0, _index).sendError(apiRes, 500, "Internal Server Error");
        }
    }
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies/serialize.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serialize = serialize;
exports.parseCookieString = parseCookieString;
exports.parseSetCookieString = parseSetCookieString;
const SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : undefined;
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
function serialize(c) {
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && c.expires && `Expires=${c.expires.toUTCString()}`,
        "maxAge" in c && c.maxAge && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent(c.value ?? "")}; ${attrs.join("; ")}`;
}
function parseCookieString(cookie) {
    const map = new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitIndex = pair.indexOf("=");
        const key = pair.slice(0, splitIndex);
        const value = pair.slice(splitIndex + 1);
        map.set(key, decodeURIComponent(value ?? "true"));
    }
    return map;
}
function parseSetCookieString(setCookie) {
    if (!setCookie) {
        return undefined;
    }
    const [[name, value], ...attributes] = parseCookieString(setCookie);
    const { domain , expires , httponly , maxage , path , samesite , secure  } = Object.fromEntries(attributes.map(([key, v])=>[
            key.toLowerCase(),
            v
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/api-utils/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCookieParser = getCookieParser;
exports.sendStatusCode = sendStatusCode;
exports.redirect = redirect;
exports.checkIsManualRevalidate = checkIsManualRevalidate;
exports.clearPreviewData = clearPreviewData;
exports.sendError = sendError;
exports.setLazyProp = setLazyProp;
exports.SYMBOL_CLEARED_COOKIES = exports.SYMBOL_PREVIEW_DATA = exports.RESPONSE_LIMIT_DEFAULT = exports.COOKIE_NAME_PRERENDER_DATA = exports.COOKIE_NAME_PRERENDER_BYPASS = exports.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = exports.PRERENDER_REVALIDATE_HEADER = void 0;
function getCookieParser(headers) {
    return function parseCookie() {
        const header = headers.cookie;
        if (!header) {
            return {};
        }
        const { parse: parseCookieFn  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/cookie/index.js (ecmascript, ssr)");
        return parseCookieFn(Array.isArray(header) ? header.join(";") : header);
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
exports.PRERENDER_REVALIDATE_HEADER = PRERENDER_REVALIDATE_HEADER;
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
exports.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
function checkIsManualRevalidate(req, previewProps) {
    return {
        isManualRevalidate: req.headers[PRERENDER_REVALIDATE_HEADER] === previewProps.previewModeId,
        revalidateOnlyGenerated: !!req.headers[PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER]
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
exports.COOKIE_NAME_PRERENDER_BYPASS = COOKIE_NAME_PRERENDER_BYPASS;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
exports.COOKIE_NAME_PRERENDER_DATA = COOKIE_NAME_PRERENDER_DATA;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
exports.RESPONSE_LIMIT_DEFAULT = RESPONSE_LIMIT_DEFAULT;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
exports.SYMBOL_PREVIEW_DATA = SYMBOL_PREVIEW_DATA;
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
exports.SYMBOL_CLEARED_COOKIES = SYMBOL_CLEARED_COOKIES;
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize  } = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/cookie/index.js (ecmascript, ssr)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            expires: new Date(0),
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            expires: new Date(0),
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ApiError = ApiError;
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req  }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/lib/etag.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateETag = exports.fnv1a52 = void 0;
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
exports.fnv1a52 = fnv1a52;
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
};
exports.generateETag = generateETag;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/send-payload/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setRevalidateHeaders", {
    enumerable: true,
    get: function() {
        return _revalidateHeaders.setRevalidateHeaders;
    }
});
exports.sendEtagResponse = sendEtagResponse;
exports.sendRenderResult = sendRenderResult;
var _utils = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/utils.js (ecmascript, ssr)");
var _etag = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/lib/etag.js (ecmascript, ssr)");
var _fresh = _interopRequireDefault(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/fresh/index.js (ecmascript, ssr)"));
var _revalidateHeaders = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/send-payload/revalidate-headers.js (ecmascript, ssr)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function sendEtagResponse(req, res, etag) {
    if (etag) {
        res.setHeader("ETag", etag);
    }
    if ((0, _fresh).default(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req , res , result , type , generateEtags , poweredByHeader , options  }) {
    if ((0, _utils).isResSent(res)) {
        return;
    }
    if (poweredByHeader && type === "html") {
        res.setHeader("X-Powered-By", "Next.js");
    }
    const payload = result.isDynamic() ? null : await result.toUnchunkedString();
    if (payload) {
        const etag = generateEtags ? (0, _etag).generateETag(payload) : undefined;
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    const resultContentType = result.contentType();
    if (!res.getHeader("Content-Type")) {
        res.setHeader("Content-Type", resultContentType ? resultContentType : type === "rsc" ? "application/octet-stream" : type === "json" ? "application/json" : "text/html; charset=utf-8");
    }
    if (payload) {
        res.setHeader("Content-Length", Buffer.byteLength(payload));
    }
    if (options != null) {
        (0, _revalidateHeaders).setRevalidateHeaders(res, options);
    }
    if (req.method === "HEAD") {
        res.end(null);
    } else if (payload) {
        res.end(payload);
    } else {
        await result.pipe(res);
    }
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/lib/mock-request.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mockRequest = mockRequest;
var _stream = _interopRequireDefault(__turbopack_external_require__("stream"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function mockRequest(requestUrl, requestHeaders, requestMethod, requestConnection) {
    const resBuffers = [];
    const mockRes = new _stream.default.Writable();
    const isStreamFinished = new Promise(function(resolve, reject) {
        mockRes.on("finish", ()=>resolve(true));
        mockRes.on("end", ()=>resolve(true));
        mockRes.on("error", (err)=>reject(err));
    });
    mockRes.write = (chunk)=>{
        resBuffers.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    };
    mockRes._write = (chunk, _encoding, callback)=>{
        mockRes.write(chunk);
        callback();
    };
    const mockHeaders = {};
    mockRes.writeHead = (_status, _headers)=>Object.assign(mockHeaders, _headers);
    mockRes.getHeader = (name)=>mockHeaders[name.toLowerCase()];
    mockRes.getHeaders = ()=>mockHeaders;
    mockRes.getHeaderNames = ()=>Object.keys(mockHeaders);
    mockRes.setHeader = (name, value)=>mockHeaders[name.toLowerCase()] = value;
    mockRes.removeHeader = (name)=>{
        delete mockHeaders[name.toLowerCase()];
    };
    mockRes._implicitHeader = ()=>{};
    mockRes.connection = requestConnection;
    mockRes.finished = false;
    mockRes.statusCode = 200;
    const mockReq = new _stream.default.Readable();
    mockReq._read = ()=>{
        mockReq.emit("end");
        mockReq.emit("close");
        return Buffer.from("");
    };
    mockReq.headers = requestHeaders;
    mockReq.method = requestMethod;
    mockReq.url = requestUrl;
    mockReq.connection = requestConnection;
    return {
        resBuffers,
        req: mockReq,
        res: mockRes,
        streamPromise: isStreamFinished
    };
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/crypto-utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encryptWithSecret = encryptWithSecret;
exports.decryptWithSecret = decryptWithSecret;
var _crypto = _interopRequireDefault(__turbopack_external_require__("crypto"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CIPHER_ALGORITHM = `aes-256-gcm`, CIPHER_KEY_LENGTH = 32, CIPHER_IV_LENGTH = 16, CIPHER_TAG_LENGTH = 16, CIPHER_SALT_LENGTH = 64;
const PBKDF2_ITERATIONS = 100000;
function encryptWithSecret(secret, data) {
    const iv = _crypto.default.randomBytes(CIPHER_IV_LENGTH);
    const salt = _crypto.default.randomBytes(CIPHER_SALT_LENGTH);
    const key = _crypto.default.pbkdf2Sync(secret, salt, PBKDF2_ITERATIONS, CIPHER_KEY_LENGTH, `sha512`);
    const cipher = _crypto.default.createCipheriv(CIPHER_ALGORITHM, key, iv);
    const encrypted = Buffer.concat([
        cipher.update(data, `utf8`),
        cipher.final()
    ]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([
        salt,
        iv,
        tag,
        encrypted
    ]).toString(`hex`);
}
function decryptWithSecret(secret, encryptedData) {
    const buffer = Buffer.from(encryptedData, `hex`);
    const salt = buffer.slice(0, CIPHER_SALT_LENGTH);
    const iv = buffer.slice(CIPHER_SALT_LENGTH, CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH);
    const tag = buffer.slice(CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH, CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH + CIPHER_TAG_LENGTH);
    const encrypted = buffer.slice(CIPHER_SALT_LENGTH + CIPHER_IV_LENGTH + CIPHER_TAG_LENGTH);
    const key = _crypto.default.pbkdf2Sync(secret, salt, PBKDF2_ITERATIONS, CIPHER_KEY_LENGTH, `sha512`);
    const decipher = _crypto.default.createDecipheriv(CIPHER_ALGORITHM, key, iv);
    decipher.setAuthTag(tag);
    return decipher.update(encrypted) + decipher.final(`utf8`);
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/server/send-payload/revalidate-headers.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRevalidateHeaders = setRevalidateHeaders;
function setRevalidateHeaders(res, options) {
    if (options.private || options.stateful) {
        if (options.private || !res.hasHeader("Cache-Control")) {
            res.setHeader("Cache-Control", `private, no-cache, no-store, max-age=0, must-revalidate`);
        }
    } else if (typeof options.revalidate === "number") {
        if (options.revalidate < 1) {
            throw new Error(`invariant: invalid Cache-Control duration provided: ${options.revalidate} < 1`);
        }
        res.setHeader("Cache-Control", `s-maxage=${options.revalidate}, stale-while-revalidate`);
    } else if (options.revalidate === false) {
        res.setHeader("Cache-Control", `s-maxage=31536000, stale-while-revalidate`);
    }
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_server_app-render.js.map