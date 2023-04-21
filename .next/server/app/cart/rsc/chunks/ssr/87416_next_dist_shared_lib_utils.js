(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_shared_lib_utils.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
exports.loadGetInitialProps = loadGetInitialProps;
exports.ST = exports.SP = exports.isAbsoluteUrl = exports.WEB_VITALS = void 0;
var _async_to_generator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_async_to_generator.js (ecmascript, ssr)").default;
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
exports.WEB_VITALS = WEB_VITALS;
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
exports.isAbsoluteUrl = isAbsoluteUrl;
function getLocationOrigin() {
    const { protocol , hostname , port  } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href  } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery.replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
function loadGetInitialProps(App, ctx) {
    return _loadGetInitialProps.apply(this, arguments);
}
function _loadGetInitialProps() {
    _loadGetInitialProps = _async_to_generator(function*(App, ctx) {
        if (process.env.NODE_ENV !== 'production') {
            var ref;
            if ((ref = App.prototype) == null ? void 0 : ref.getInitialProps) {
                const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
                throw new Error(message);
            }
        }
        const res = ctx.res || ctx.ctx && ctx.ctx.res;
        if (!App.getInitialProps) {
            if (ctx.ctx && ctx.Component) {
                return {
                    pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
                };
            }
            return {};
        }
        const props = yield App.getInitialProps(ctx);
        if (res && isResSent(res)) {
            return props;
        }
        if (!props) {
            const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
            throw new Error(message);
        }
        if (process.env.NODE_ENV !== 'production') {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
            }
        }
        return props;
    });
    return _loadGetInitialProps.apply(this, arguments);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
exports.ST = ST;
class DecodeError extends Error {
}
exports.DecodeError = DecodeError;
class NormalizeError extends Error {
}
exports.NormalizeError = NormalizeError;
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find module for page: ${page}`;
    }
}
exports.PageNotFoundError = PageNotFoundError;
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
exports.MissingStaticPage = MissingStaticPage;
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
exports.MiddlewareNotFoundError = MiddlewareNotFoundError;

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_shared_lib_utils.js.map