(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_client_components_layout-router.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/layout-router.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = OuterLayoutRouter;
exports.InnerLayoutRouter = InnerLayoutRouter;
var _extends = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_extends.js (ecmascript, ssr)").default;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _react = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _reactDom = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)"));
var _appRouterContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
var _appRouter = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router.js (ecmascript, ssr)");
var _infinitePromise = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/infinite-promise.js (ecmascript, ssr)");
var _errorBoundary = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/error-boundary.js (ecmascript, ssr)");
var _matchSegments = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
var _navigation = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)");
function OuterLayoutRouter({ parallelRouterKey , segmentPath , childProp , error , errorStyles , templateStyles , loading , loadingStyles , hasLoading , template , notFound , notFoundStyles  }) {
    const context = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    if (!context) {
        throw new Error('invariant expected layout router to be mounted');
    }
    const { childNodes , tree , url  } = context;
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    if (!childNodesForParallelRouter) {
        childNodes.set(parallelRouterKey, new Map());
        childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    }
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = Array.isArray(childProp.segment) ? childProp.segment[1] : childProp.segment;
    const currentChildSegment = Array.isArray(treeSegment) ? treeSegment[1] : treeSegment;
    const preservedSegments = [
        currentChildSegment
    ];
    return _react.default.createElement(_react.default.Fragment, null, preservedSegments.map((preservedSegment)=>{
        return _react.default.createElement(_appRouterContext.TemplateContext.Provider, {
            key: preservedSegment,
            value: _react.default.createElement(_errorBoundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, _react.default.createElement(NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, _react.default.createElement(RedirectBoundary, null, _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: childPropSegment === preservedSegment ? childProp : null,
                segmentPath: segmentPath,
                path: preservedSegment,
                isActive: currentChildSegment === preservedSegment
            })))))
        }, _react.default.createElement(_react.default.Fragment, null, templateStyles, template));
    }));
}
function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchSegments).matchSegment(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        _extends({}, treeToRecreate[1], {
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                'refetch'
                            ]
                        })
                    ];
                }
                return [
                    treeToRecreate[0],
                    _extends({}, treeToRecreate[1], {
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    })
                ];
            }
        }
    }
    return treeToRecreate;
}
function findDOMNode(instance) {
    if (typeof window === undefined) return null;
    if (process.env.NODE_ENV !== 'production') {
        const originalConsoleError = console.error;
        try {
            console.error = (...messages)=>{
                if (!messages[0].includes('Warning: %s is deprecated in StrictMode.')) {
                    originalConsoleError(...messages);
                }
            };
            return _reactDom.default.findDOMNode(instance);
        } finally{
            console.error = originalConsoleError;
        }
    }
    return _reactDom.default.findDOMNode(instance);
}
function topOfElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0;
}
class ScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        const { focusAndScrollRef  } = this.props;
        const domNode = findDOMNode(this);
        if (focusAndScrollRef.apply && domNode instanceof HTMLElement) {
            focusAndScrollRef.apply = false;
            domNode.focus();
            if (!topOfElementInViewport(domNode)) {
                const htmlElement = document.documentElement;
                const existing = htmlElement.style.scrollBehavior;
                htmlElement.style.scrollBehavior = 'auto';
                htmlElement.getClientRects();
                domNode.scrollIntoView();
                htmlElement.style.scrollBehavior = existing;
            }
        }
    }
    render() {
        return this.props.children;
    }
}
function InnerLayoutRouter({ parallelRouterKey , url , childNodes , childProp , segmentPath , tree , path  }) {
    const context = (0, _react).useContext(_appRouterContext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error('invariant global layout router not mounted');
    }
    const { changeByServerResponse , tree: fullTree , focusAndScrollRef  } = context;
    let childNode = childNodes.get(path);
    if (childProp && childProp.current !== null) {
        if (childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
            childNode.status = _appRouterContext.CacheStates.READY;
            childNode.subTreeData = childProp.current;
            childProp.current = null;
        } else {
            childNodes.set(path, {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            });
            childProp.current = null;
            childNode = childNodes.get(path);
        }
    }
    if (!childNode || childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
        const refetchTree = walkAddRefetch([
            '',
            ...segmentPath
        ], fullTree);
        childNodes.set(path, {
            status: _appRouterContext.CacheStates.DATA_FETCH,
            data: (0, _appRouter).fetchServerResponse(new URL(url, location.origin), refetchTree),
            subTreeData: null,
            head: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        });
        childNode = childNodes.get(path);
    }
    if (!childNode) {
        throw new Error('Child node should always exist');
    }
    if (childNode.subTreeData && childNode.data) {
        throw new Error('Child node should not have both subTreeData and data');
    }
    if (childNode.data) {
        const [flightData, overrideCanonicalUrl] = (0, _react).use(childNode.data);
        if (typeof flightData === 'string') {
            window.location.href = url;
            return null;
        }
        childNode.data = null;
        setTimeout(()=>{
            _react.default.startTransition(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    if (!childNode.subTreeData) {
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    const subtree = _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            url: url
        }
    }, childNode.subTreeData);
    return _react.default.createElement(ScrollAndFocusHandler, {
        focusAndScrollRef: focusAndScrollRef
    }, subtree);
}
function LoadingBoundary({ children , loading , loadingStyles , hasLoading  }) {
    if (hasLoading) {
        return _react.default.createElement(_react.default.Suspense, {
            fallback: _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return _react.default.createElement(_react.default.Fragment, null, children);
}
function HandleRedirect({ redirect  }) {
    const router = (0, _navigation).useRouter();
    (0, _react).useEffect(()=>{
        router.replace(redirect, {});
    }, [
        redirect,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        var ref;
        if (error == null ? void 0 : (ref = error.digest) == null ? void 0 : ref.startsWith('NEXT_REDIRECT')) {
            const url = error.digest.split(';')[1];
            return {
                redirect: url
            };
        }
        throw error;
    }
    render() {
        const redirect = this.state.redirect;
        if (redirect !== null) {
            return _react.default.createElement(HandleRedirect, {
                redirect: redirect
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        };
    }
}
function RedirectBoundary({ children  }) {
    const router = (0, _navigation).useRouter();
    return _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === 'NEXT_NOT_FOUND') {
            return {
                notFoundTriggered: true
            };
        }
        throw error;
    }
    render() {
        if (this.state.notFoundTriggered) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: false
        };
    }
}
function NotFoundBoundary({ notFound , notFoundStyles , children  }) {
    return notFound ? _react.default.createElement(NotFoundErrorBoundary, {
        notFound: notFound,
        notFoundStyles: notFoundStyles
    }, children) : _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AppRouter;
exports.fetchServerResponse = fetchServerResponse;
var _async_to_generator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_async_to_generator.js (ecmascript, ssr)").default;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _object_without_properties_loose = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_object_without_properties_loose.js (ecmascript, ssr)").default;
var _react = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _client = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-server-dom-webpack/client.js (ecmascript, ssr)");
var _appRouterContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
var _reducer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/reducer.js (ecmascript, ssr)");
var _hooksClientContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.js (ecmascript, ssr)");
var _useReducerWithDevtools = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/use-reducer-with-devtools.js (ecmascript, ssr)");
var _errorBoundary = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/error-boundary.js (ecmascript, ssr)");
var _appRouterHeaders = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)");
function AppRouter(props) {
    const { globalErrorComponent  } = props, rest = _object_without_properties_loose(props, [
        "globalErrorComponent"
    ]);
    return _react.default.createElement(_errorBoundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, _react.default.createElement(Router, Object.assign({}, rest)));
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    return urlWithoutFlightParameters;
}
const HotReloader = process.env.NODE_ENV === 'production' ? null : __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js (ecmascript, ssr)").default;
function fetchServerResponse(url, flightRouterState, prefetch) {
    return _fetchServerResponse.apply(this, arguments);
}
function _fetchServerResponse() {
    _fetchServerResponse = _async_to_generator(function*(url, flightRouterState, prefetch) {
        const headers = {
            [_appRouterHeaders.RSC]: '1',
            [_appRouterHeaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(flightRouterState)
        };
        if (prefetch) {
            headers[_appRouterHeaders.NEXT_ROUTER_PREFETCH] = '1';
        }
        const res = yield fetch(url.toString(), {
            headers
        });
        const canonicalUrl = res.redirected ? urlToUrlWithoutFlightMarker(res.url) : undefined;
        const isFlightResponse = res.headers.get('content-type') === 'application/octet-stream';
        if (!isFlightResponse) {
            return [
                res.url,
                undefined
            ];
        }
        const flightData = yield (0, _client).createFromFetch(Promise.resolve(res));
        return [
            flightData,
            canonicalUrl
        ];
    });
    return _fetchServerResponse.apply(this, arguments);
}
let initialParallelRoutes = typeof window === 'undefined' ? null : new Map();
const prefetched = new Set();
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = Array.isArray(segment) ? segment[1] : segment;
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
function Router({ initialHead , initialTree , initialCanonicalUrl , children , assetPrefix  }) {
    const initialState = (0, _react).useMemo(()=>{
        return {
            tree: initialTree,
            cache: {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: children,
                parallelRoutes: typeof window === 'undefined' ? new Map() : initialParallelRoutes
            },
            prefetchCache: new Map(),
            pushRef: {
                pendingPush: false,
                mpaNavigation: false
            },
            focusAndScrollRef: {
                apply: false
            },
            canonicalUrl: typeof window !== 'undefined' ? (0, _reducer).createHrefFromUrl(window.location) : initialCanonicalUrl
        };
    }, [
        children,
        initialCanonicalUrl,
        initialTree
    ]);
    const [{ tree , cache , prefetchCache , pushRef , focusAndScrollRef , canonicalUrl  }, dispatch, sync] = (0, _useReducerWithDevtools).useReducerWithReduxDevtools(_reducer.reducer, initialState);
    const head = (0, _react).useMemo(()=>{
        return findHeadInCache(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    (0, _react).useEffect(()=>{
        initialParallelRoutes = null;
    }, []);
    const { searchParams , pathname  } = (0, _react).useMemo(()=>{
        const url = new URL(canonicalUrl, typeof window === 'undefined' ? 'http://n' : window.location.href);
        return {
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = (0, _react).useCallback((previousTree, flightData, overrideCanonicalUrl)=>{
        dispatch({
            type: _reducer.ACTION_SERVER_PATCH,
            flightData,
            previousTree,
            overrideCanonicalUrl,
            cache: {
                status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                data: null,
                subTreeData: null,
                parallelRoutes: new Map()
            },
            mutable: {}
        });
    }, [
        dispatch
    ]);
    const appRouter = (0, _react).useMemo(()=>{
        const navigate = (href, navigateType, forceOptimisticNavigation)=>{
            return dispatch({
                type: _reducer.ACTION_NAVIGATE,
                url: new URL(href, location.origin),
                forceOptimisticNavigation,
                navigateType,
                cache: {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                },
                mutable: {}
            });
        };
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: _async_to_generator(function*(href) {
                if (prefetched.has(href)) {
                    return;
                }
                prefetched.add(href);
                const url = new URL(href, location.origin);
                try {
                    var ref;
                    const routerTree = ((ref = window.history.state) == null ? void 0 : ref.tree) || initialTree;
                    const serverResponse = yield fetchServerResponse(url, routerTree, true);
                    _react.default.startTransition(()=>{
                        dispatch({
                            type: _reducer.ACTION_PREFETCH,
                            url,
                            tree: routerTree,
                            serverResponse
                        });
                    });
                } catch (err) {
                    console.error('PREFETCH ERROR', err);
                }
            }),
            replace: (href, options = {})=>{
                _react.default.startTransition(()=>{
                    navigate(href, 'replace', Boolean(options.forceOptimisticNavigation));
                });
            },
            push: (href, options = {})=>{
                _react.default.startTransition(()=>{
                    navigate(href, 'push', Boolean(options.forceOptimisticNavigation));
                });
            },
            refresh: ()=>{
                _react.default.startTransition(()=>{
                    dispatch({
                        type: _reducer.ACTION_REFRESH,
                        cache: {
                            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                            data: null,
                            subTreeData: null,
                            parallelRoutes: new Map()
                        },
                        mutable: {}
                    });
                });
            }
        };
        return routerInstance;
    }, [
        dispatch,
        initialTree
    ]);
    (0, _react).useEffect(()=>{
        if (pushRef.mpaNavigation) {
            window.location.href = canonicalUrl;
            return;
        }
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _reducer).createHrefFromUrl(new URL(window.location.href)) !== canonicalUrl) {
            pushRef.pendingPush = false;
            window.history.pushState(historyState, '', canonicalUrl);
        } else {
            window.history.replaceState(historyState, '', canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    if (typeof window !== 'undefined') {
        window.nd = {
            router: appRouter,
            cache,
            prefetchCache,
            tree
        };
    }
    const onPopState = (0, _react).useCallback(({ state  })=>{
        if (!state) {
            return;
        }
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        _react.default.startTransition(()=>{
            dispatch({
                type: _reducer.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    (0, _react).useEffect(()=>{
        window.addEventListener('popstate', onPopState);
        return ()=>{
            window.removeEventListener('popstate', onPopState);
        };
    }, [
        onPopState
    ]);
    const content = _react.default.createElement(_react.default.Fragment, null, head || initialHead, cache.subTreeData);
    return _react.default.createElement(_hooksClientContext.PathnameContext.Provider, {
        value: pathname
    }, _react.default.createElement(_hooksClientContext.SearchParamsContext.Provider, {
        value: searchParams
    }, _react.default.createElement(_appRouterContext.GlobalLayoutRouterContext.Provider, {
        value: {
            changeByServerResponse,
            tree,
            focusAndScrollRef
        }
    }, _react.default.createElement(_appRouterContext.AppRouterContext.Provider, {
        value: appRouter
    }, _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            url: canonicalUrl
        }
    }, HotReloader ? _react.default.createElement(HotReloader, {
        assetPrefix: assetPrefix
    }, content) : content)))));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/infinite-promise.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createInfinitePromise = createInfinitePromise;
let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        infinitePromise = new Promise(()=>{});
    }
    return infinitePromise;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/error-boundary.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GlobalError;
exports.ErrorBoundary = ErrorBoundary;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _react = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function GlobalError({ error  }) {
    return _react.default.createElement("html", null, _react.default.createElement("head", null), _react.default.createElement("body", null, _react.default.createElement("div", {
        style: styles.error
    }, _react.default.createElement("div", {
        style: styles.desc
    }, _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a client-side exception has occurred (see the browser console for more information)."), (error == null ? void 0 : error.digest) && _react.default.createElement("p", {
        style: styles.text
    }, `Digest: ${error.digest}`)))));
}
const styles = {
    error: {
        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        display: 'inline-block',
        textAlign: 'left',
        lineHeight: '49px',
        height: '49px',
        verticalAlign: 'middle'
    },
    text: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '49px',
        margin: 0,
        padding: 0
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null
        };
    }
}
exports.ErrorBoundaryHandler = ErrorBoundaryHandler;
function ErrorBoundary({ errorComponent , errorStyles , children  }) {
    if (errorComponent) {
        return _react.default.createElement(ErrorBoundaryHandler, {
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchSegment = void 0;
const matchSegment = (existingSegment, segment)=>{
    if (typeof existingSegment === 'string' && typeof segment === 'string') {
        return existingSegment === segment;
    }
    if (Array.isArray(existingSegment) && Array.isArray(segment)) {
        return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
    }
    return false;
};
exports.matchSegment = matchSegment;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", {
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
});
Object.defineProperty(exports, "useServerInsertedHTML", {
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
});
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", {
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
});
var _react = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var _appRouterContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
var _hooksClientContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.js (ecmascript, ssr)");
var _bailoutToClientRendering = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js (ecmascript, ssr)");
var _clientHookInServerComponentError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/client-hook-in-server-component-error.js (ecmascript, ssr)");
var _serverInsertedHtml = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.js (ecmascript, ssr)");
var _redirect = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)");
var _notFound = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)");
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol('internal for urlsearchparams readonly');
function readonlyURLSearchParamsError() {
    return new Error('ReadonlyURLSearchParams cannot be modified');
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError('useSearchParams');
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    const readonlySearchParams = (0, _react).useMemo(()=>{
        return new ReadonlyURLSearchParams(searchParams || new URLSearchParams());
    }, [
        searchParams
    ]);
    if ((0, _bailoutToClientRendering).bailoutToClientRendering()) {
        return readonlySearchParams;
    }
    if (!searchParams) {
        throw new Error('invariant expected search params to be mounted');
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError('usePathname');
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError('useRouter');
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error('invariant expected app router to be mounted');
    }
    return router;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        node = tree[1][parallelRouteKey];
    } else {
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = 'children') {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError('useSelectedLayoutSegments');
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = 'children') {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError('useSelectedLayoutSegment');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createHrefFromUrl = createHrefFromUrl;
exports.reducer = exports.ACTION_PREFETCH = exports.ACTION_SERVER_PATCH = exports.ACTION_RESTORE = exports.ACTION_NAVIGATE = exports.ACTION_REFRESH = void 0;
var _extends = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_extends.js (ecmascript, ssr)").default;
var _appRouterContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
var _matchSegments = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/match-segments.js (ecmascript, ssr)");
var _appRouter = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router.js (ecmascript, ssr)");
function createRecordFromThenable(thenable) {
    thenable.status = 'pending';
    thenable.then((value)=>{
        if (thenable.status === 'pending') {
            thenable.status = 'fulfilled';
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === 'pending') {
            thenable.status = 'rejected';
            thenable.value = err;
        }
    });
    return thenable;
}
function readRecordValue(thenable) {
    if (thenable.status === 'fulfilled') {
        return thenable.value;
    } else {
        throw thenable;
    }
}
function createHrefFromUrl(url) {
    return url.pathname + url.search + url.hash;
}
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                parallelRouteCacheNode.delete(cacheKey);
                const newCacheNode = {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                };
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        newCache.parallelRoutes.set(key, new Map([
            [
                cacheKey,
                newCacheNode
            ]
        ]));
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
    }
}
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                invalidateCacheByRouterState(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            fillLazyItemsTillLeafWithHead(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4]);
            childSegmentMap.set(segmentForCache, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2));
}
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    if (isLastEntry) {
        childSegmentMap.delete(segmentForCache);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (!childCacheNode || !existingChildCacheNode) {
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
function fillCacheWithDataProperty(newCache, existingCache, segments, fetchResponse) {
    const isLastEntry = segments.length === 1;
    const parallelRouteKey = 'children';
    const [segment] = segments;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segment);
    let childCacheNode = childSegmentMap.get(segment);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        if (!childCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segment, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, segments.slice(1), fetchResponse);
}
function createOptimisticTree(segments, flightRouterState, _isFirstSegment, parentRefetch, _href) {
    const [existingSegment, existingParallelRoutes] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchSegments).matchSegment(existingSegment, segment);
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    if (!isLastSegment) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, false, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        _extends({}, parallelRoutes, childTree ? {
            children: childTree
        } : {})
    ];
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = 'refetch';
    }
    return result;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    if (flightSegmentPath.length === 1) {
        const tree = [
            ...treePatch
        ];
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = treePatch;
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        _extends({}, parallelRoutes, {
            [parallelRouteKey]: parallelRoutePatch
        })
    ];
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
function shouldHardNavigate(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes] = flightRouterState;
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        if (Array.isArray(currentSegment)) {
            return true;
        }
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
}
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    if (currentTree[4]) {
        return !nextTree[4];
    }
    if (nextTree[4]) {
        return true;
    }
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
const ACTION_REFRESH = 'refresh';
exports.ACTION_REFRESH = ACTION_REFRESH;
const ACTION_NAVIGATE = 'navigate';
exports.ACTION_NAVIGATE = ACTION_NAVIGATE;
const ACTION_RESTORE = 'restore';
exports.ACTION_RESTORE = ACTION_RESTORE;
const ACTION_SERVER_PATCH = 'server-patch';
exports.ACTION_SERVER_PATCH = ACTION_SERVER_PATCH;
const ACTION_PREFETCH = 'prefetch';
exports.ACTION_PREFETCH = ACTION_PREFETCH;
function clientReducer(state, action) {
    switch(action.type){
        case ACTION_NAVIGATE:
            {
                const { url , navigateType , cache , mutable , forceOptimisticNavigation  } = action;
                const { pathname , search  } = url;
                const href = createHrefFromUrl(url);
                const pendingPush = navigateType === 'push';
                const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
                if (mutable.mpaNavigation && isForCurrentTree) {
                    return {
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : href,
                        pushRef: {
                            pendingPush,
                            mpaNavigation: mutable.mpaNavigation
                        },
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                if (mutable.patchedTree && isForCurrentTree) {
                    return {
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : href,
                        pushRef: {
                            pendingPush,
                            mpaNavigation: false
                        },
                        focusAndScrollRef: {
                            apply: true
                        },
                        cache: mutable.useExistingCache ? state.cache : cache,
                        prefetchCache: state.prefetchCache,
                        tree: mutable.patchedTree
                    };
                }
                const prefetchValues = state.prefetchCache.get(href);
                if (prefetchValues) {
                    const { flightData , tree: newTree , canonicalUrlOverride  } = prefetchValues;
                    if (typeof flightData === 'string') {
                        return {
                            canonicalUrl: flightData,
                            pushRef: {
                                pendingPush: true,
                                mpaNavigation: true
                            },
                            focusAndScrollRef: {
                                apply: false
                            },
                            cache: state.cache,
                            prefetchCache: state.prefetchCache,
                            tree: state.tree
                        };
                    }
                    if (newTree !== null) {
                        mutable.previousTree = state.tree;
                        mutable.patchedTree = newTree;
                        mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree);
                        if (newTree === null) {
                            throw new Error('SEGMENT MISMATCH');
                        }
                        const canonicalUrlOverrideHrefVal = canonicalUrlOverride ? createHrefFromUrl(canonicalUrlOverride) : undefined;
                        if (canonicalUrlOverrideHrefVal) {
                            mutable.canonicalUrlOverride = canonicalUrlOverrideHrefVal;
                        }
                        mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree);
                        const flightDataPath = flightData[0];
                        const flightSegmentPath = flightDataPath.slice(0, -3);
                        const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
                        if (subTreeData !== null) {
                            if (flightDataPath.length === 3) {
                                cache.status = _appRouterContext.CacheStates.READY;
                                cache.subTreeData = subTreeData;
                                cache.parallelRoutes = new Map();
                                fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
                            } else {
                                cache.status = _appRouterContext.CacheStates.READY;
                                cache.subTreeData = state.cache.subTreeData;
                                fillCacheWithNewSubTreeData(cache, state.cache, flightDataPath);
                            }
                        }
                        const hardNavigate = search !== location.search || shouldHardNavigate([
                            '',
                            ...flightSegmentPath
                        ], state.tree, newTree);
                        if (hardNavigate) {
                            cache.status = _appRouterContext.CacheStates.READY;
                            cache.subTreeData = state.cache.subTreeData;
                            invalidateCacheBelowFlightSegmentPath(cache, state.cache, flightSegmentPath);
                        } else if (subTreeData === null) {
                            mutable.useExistingCache = true;
                        }
                        const canonicalUrlOverrideHref = canonicalUrlOverride ? createHrefFromUrl(canonicalUrlOverride) : undefined;
                        if (canonicalUrlOverrideHref) {
                            mutable.canonicalUrlOverride = canonicalUrlOverrideHref;
                        }
                        return {
                            canonicalUrl: canonicalUrlOverrideHref ? canonicalUrlOverrideHref : href,
                            pushRef: {
                                pendingPush,
                                mpaNavigation: false
                            },
                            focusAndScrollRef: {
                                apply: true
                            },
                            cache: mutable.useExistingCache ? state.cache : cache,
                            prefetchCache: state.prefetchCache,
                            tree: newTree
                        };
                    }
                }
                if (forceOptimisticNavigation) {
                    const segments = pathname.split('/');
                    segments.push('');
                    const optimisticTree = createOptimisticTree(segments, state.tree, true, false, href);
                    cache.status = _appRouterContext.CacheStates.READY;
                    cache.subTreeData = state.cache.subTreeData;
                    const res = fillCacheWithDataProperty(cache, state.cache, segments.slice(1), ()=>(0, _appRouter).fetchServerResponse(url, optimisticTree));
                    if (!(res == null ? void 0 : res.bailOptimistic)) {
                        mutable.previousTree = state.tree;
                        mutable.patchedTree = optimisticTree;
                        mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, optimisticTree);
                        return {
                            canonicalUrl: href,
                            pushRef: {
                                pendingPush,
                                mpaNavigation: false
                            },
                            focusAndScrollRef: {
                                apply: true
                            },
                            cache: cache,
                            prefetchCache: state.prefetchCache,
                            tree: optimisticTree
                        };
                    }
                }
                if (!cache.data) {
                    cache.data = createRecordFromThenable((0, _appRouter).fetchServerResponse(url, state.tree));
                }
                const [flightData, canonicalUrlOverride] = readRecordValue(cache.data);
                if (typeof flightData === 'string') {
                    return {
                        canonicalUrl: flightData,
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: true
                        },
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                cache.data = null;
                const flightDataPath = flightData[0];
                const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
                const flightSegmentPath = flightDataPath.slice(0, -4);
                const newTree = applyRouterStatePatchToTree([
                    '',
                    ...flightSegmentPath
                ], state.tree, treePatch);
                if (newTree === null) {
                    throw new Error('SEGMENT MISMATCH');
                }
                const canonicalUrlOverrideHref = canonicalUrlOverride ? createHrefFromUrl(canonicalUrlOverride) : undefined;
                if (canonicalUrlOverrideHref) {
                    mutable.canonicalUrlOverride = canonicalUrlOverrideHref;
                }
                mutable.previousTree = state.tree;
                mutable.patchedTree = newTree;
                mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree);
                if (flightDataPath.length === 3) {
                    cache.status = _appRouterContext.CacheStates.READY;
                    cache.subTreeData = subTreeData;
                    fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
                } else {
                    cache.status = _appRouterContext.CacheStates.READY;
                    cache.subTreeData = state.cache.subTreeData;
                    fillCacheWithNewSubTreeData(cache, state.cache, flightDataPath);
                }
                return {
                    canonicalUrl: canonicalUrlOverrideHref ? canonicalUrlOverrideHref : href,
                    pushRef: {
                        pendingPush,
                        mpaNavigation: false
                    },
                    focusAndScrollRef: {
                        apply: true
                    },
                    cache: cache,
                    prefetchCache: state.prefetchCache,
                    tree: newTree
                };
            }
        case ACTION_SERVER_PATCH:
            {
                const { flightData , previousTree , overrideCanonicalUrl , cache , mutable  } = action;
                if (JSON.stringify(previousTree) !== JSON.stringify(state.tree)) {
                    console.log('TREE MISMATCH');
                    return state;
                }
                if (mutable.mpaNavigation) {
                    return {
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : state.canonicalUrl,
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: mutable.mpaNavigation
                        },
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                if (mutable.patchedTree) {
                    return {
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : state.canonicalUrl,
                        pushRef: state.pushRef,
                        focusAndScrollRef: state.focusAndScrollRef,
                        tree: mutable.patchedTree,
                        prefetchCache: state.prefetchCache,
                        cache: cache
                    };
                }
                if (typeof flightData === 'string') {
                    return {
                        canonicalUrl: flightData,
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: true
                        },
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                const flightDataPath = flightData[0];
                const flightSegmentPath = flightDataPath.slice(0, -4);
                const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
                const newTree = applyRouterStatePatchToTree([
                    '',
                    ...flightSegmentPath
                ], state.tree, treePatch);
                if (newTree === null) {
                    throw new Error('SEGMENT MISMATCH');
                }
                const canonicalUrlOverrideHref = overrideCanonicalUrl ? createHrefFromUrl(overrideCanonicalUrl) : undefined;
                if (canonicalUrlOverrideHref) {
                    mutable.canonicalUrlOverride = canonicalUrlOverrideHref;
                }
                mutable.patchedTree = newTree;
                mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree);
                if (flightDataPath.length === 3) {
                    cache.status = _appRouterContext.CacheStates.READY;
                    cache.subTreeData = subTreeData;
                    fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
                } else {
                    cache.status = _appRouterContext.CacheStates.READY;
                    cache.subTreeData = state.cache.subTreeData;
                    fillCacheWithNewSubTreeData(cache, state.cache, flightDataPath);
                }
                return {
                    canonicalUrl: canonicalUrlOverrideHref ? canonicalUrlOverrideHref : state.canonicalUrl,
                    pushRef: state.pushRef,
                    focusAndScrollRef: state.focusAndScrollRef,
                    tree: newTree,
                    prefetchCache: state.prefetchCache,
                    cache: cache
                };
            }
        case ACTION_RESTORE:
            {
                const { url , tree  } = action;
                const href = createHrefFromUrl(url);
                return {
                    canonicalUrl: href,
                    pushRef: state.pushRef,
                    focusAndScrollRef: state.focusAndScrollRef,
                    cache: state.cache,
                    prefetchCache: state.prefetchCache,
                    tree: tree
                };
            }
        case ACTION_REFRESH:
            {
                const { cache , mutable  } = action;
                const href = state.canonicalUrl;
                const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
                if (mutable.mpaNavigation && isForCurrentTree) {
                    return {
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : state.canonicalUrl,
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: mutable.mpaNavigation
                        },
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                if (mutable.patchedTree && isForCurrentTree) {
                    return {
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : href,
                        pushRef: state.pushRef,
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: cache,
                        prefetchCache: state.prefetchCache,
                        tree: mutable.patchedTree
                    };
                }
                if (!cache.data) {
                    cache.data = createRecordFromThenable((0, _appRouter).fetchServerResponse(new URL(href, location.origin), [
                        state.tree[0],
                        state.tree[1],
                        state.tree[2],
                        'refetch'
                    ]));
                }
                const [flightData, canonicalUrlOverride] = readRecordValue(cache.data);
                if (typeof flightData === 'string') {
                    return {
                        canonicalUrl: flightData,
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: true
                        },
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                cache.data = null;
                const flightDataPath = flightData[0];
                if (flightDataPath.length !== 3) {
                    console.log('REFRESH FAILED');
                    return state;
                }
                const [treePatch, subTreeData, head] = flightDataPath;
                const newTree = applyRouterStatePatchToTree([
                    ''
                ], state.tree, treePatch);
                if (newTree === null) {
                    throw new Error('SEGMENT MISMATCH');
                }
                const canonicalUrlOverrideHref = canonicalUrlOverride ? createHrefFromUrl(canonicalUrlOverride) : undefined;
                if (canonicalUrlOverride) {
                    mutable.canonicalUrlOverride = canonicalUrlOverrideHref;
                }
                mutable.previousTree = state.tree;
                mutable.patchedTree = newTree;
                mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree);
                cache.status = _appRouterContext.CacheStates.READY;
                cache.subTreeData = subTreeData;
                fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
                return {
                    canonicalUrl: canonicalUrlOverrideHref ? canonicalUrlOverrideHref : href,
                    pushRef: state.pushRef,
                    focusAndScrollRef: {
                        apply: false
                    },
                    cache: cache,
                    prefetchCache: state.prefetchCache,
                    tree: newTree
                };
            }
        case ACTION_PREFETCH:
            {
                const { url , serverResponse  } = action;
                const [flightData, canonicalUrlOverride] = serverResponse;
                if (typeof flightData === 'string') {
                    return state;
                }
                const href = createHrefFromUrl(url);
                const flightDataPath = flightData[0];
                const [treePatch] = flightDataPath.slice(-3);
                const flightSegmentPath = flightDataPath.slice(0, -3);
                const newTree = applyRouterStatePatchToTree([
                    '',
                    ...flightSegmentPath
                ], state.tree, treePatch);
                if (newTree === null) {
                    return state;
                }
                state.prefetchCache.set(href, {
                    flightData,
                    tree: newTree,
                    canonicalUrlOverride
                });
                return state;
            }
        default:
            throw new Error('Unknown action');
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer = typeof window === 'undefined' ? serverReducer : clientReducer;
exports.reducer = reducer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/use-reducer-with-devtools.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useReducerWithReduxDevtools = void 0;
var _react = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === 'function') {
                obj[key] = 'fn()';
                continue;
            }
            if (typeof value === 'object' && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = 'FlightData';
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === 'object' && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === 'function') {
                obj[key] = 'fn()';
                continue;
            }
            if (typeof value === 'object' && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty('_bundlerConfig')) {
                    obj[key] = 'FlightData';
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react).useReducer(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react).useRef();
    const enabledRef = (0, _react).useRef();
    (0, _react).useEffect(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined') {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 1,
            name: 'next-router'
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react).useReducer(devToolReducer(fn, devtoolsConnectionRef), initialState);
    const sync = (0, _react).useCallback(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: 'RENDER_SYNC'
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools = typeof window !== 'undefined' ? useReducerWithReduxDevtoolsImpl : useReducerWithReduxDevtoolsNoop;
exports.useReducerWithReduxDevtools = useReducerWithReduxDevtools;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FLIGHT_PARAMETERS = exports.RSC_VARY_HEADER = exports.FETCH_CACHE_HEADER = exports.NEXT_ROUTER_PREFETCH = exports.NEXT_ROUTER_STATE_TREE = exports.RSC = void 0;
const RSC = 'RSC';
exports.RSC = RSC;
const NEXT_ROUTER_STATE_TREE = 'Next-Router-State-Tree';
exports.NEXT_ROUTER_STATE_TREE = NEXT_ROUTER_STATE_TREE;
const NEXT_ROUTER_PREFETCH = 'Next-Router-Prefetch';
exports.NEXT_ROUTER_PREFETCH = NEXT_ROUTER_PREFETCH;
const FETCH_CACHE_HEADER = 'x-vercel-sc-headers';
exports.FETCH_CACHE_HEADER = FETCH_CACHE_HEADER;
const RSC_VARY_HEADER = `${RSC}, ${NEXT_ROUTER_STATE_TREE}, ${NEXT_ROUTER_PREFETCH}`;
exports.RSC_VARY_HEADER = RSC_VARY_HEADER;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
exports.FLIGHT_PARAMETERS = FLIGHT_PARAMETERS;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HotReload;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _react = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _stripAnsi = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/strip-ansi/index.js (ecmascript, ssr)"));
var _formatWebpackMessages = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js (ecmascript, ssr)"));
var _navigation = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/navigation.js (ecmascript, ssr)");
var _errorOverlayReducer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
var _parseStack = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js (ecmascript, ssr)");
var _reactDevOverlay = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js (ecmascript, ssr)"));
var _useErrorHandler = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js (ecmascript, ssr)");
var _useWebsocket = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-websocket.js (ecmascript, ssr)");
function HotReload({ assetPrefix , children  }) {
    const [state, dispatch] = (0, _react).useReducer(_errorOverlayReducer.errorOverlayReducer, {
        nextId: 1,
        buildError: null,
        errors: [],
        refreshState: {
            type: 'idle'
        }
    });
    const dispatcher = (0, _react).useMemo(()=>{
        return {
            onBuildOk () {
                dispatch({
                    type: _errorOverlayReducer.ACTION_BUILD_OK
                });
            },
            onBuildError (message) {
                dispatch({
                    type: _errorOverlayReducer.ACTION_BUILD_ERROR,
                    message
                });
            },
            onBeforeRefresh () {
                dispatch({
                    type: _errorOverlayReducer.ACTION_BEFORE_REFRESH
                });
            },
            onRefresh () {
                dispatch({
                    type: _errorOverlayReducer.ACTION_REFRESH
                });
            }
        };
    }, [
        dispatch
    ]);
    const handleOnUnhandledError = (0, _react).useCallback((error)=>{
        dispatch({
            type: _errorOverlayReducer.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parseStack).parseStack(error.stack)
        });
    }, []);
    const handleOnUnhandledRejection = (0, _react).useCallback((reason)=>{
        dispatch({
            type: _errorOverlayReducer.ACTION_UNHANDLED_REJECTION,
            reason: reason,
            frames: (0, _parseStack).parseStack(reason.stack)
        });
    }, []);
    const handleOnReactError = (0, _react).useCallback(()=>{
        _useErrorHandler.RuntimeErrorHandler.hadRuntimeError = true;
    }, []);
    (0, _useErrorHandler).useErrorHandler(handleOnUnhandledError, handleOnUnhandledRejection);
    const webSocketRef = (0, _useWebsocket).useWebsocket(assetPrefix);
    (0, _useWebsocket).useWebsocketPing(webSocketRef);
    const sendMessage = (0, _useWebsocket).useSendMessage(webSocketRef);
    const router = (0, _navigation).useRouter();
    (0, _react).useEffect(()=>{
        const handler = (event)=>{
            if (event.data.indexOf('action') === -1 && event.data.indexOf('pong') === -1) {
                return;
            }
            try {
                processMessage(event, sendMessage, router, dispatcher);
            } catch (ex) {
                console.warn('Invalid HMR message: ' + event.data + '\n', ex);
            }
        };
        const websocket = webSocketRef.current;
        if (websocket) {
            websocket.addEventListener('message', handler);
        }
        return ()=>websocket && websocket.removeEventListener('message', handler);
    }, [
        sendMessage,
        router,
        webSocketRef,
        dispatcher
    ]);
    return _react.default.createElement(_reactDevOverlay.default, {
        onReactError: handleOnReactError,
        state: state
    }, children);
}
let mostRecentCompilationHash = null;
let __nextDevClientId = Math.round(Math.random() * 100 + Date.now());
function onBeforeFastRefresh(dispatcher, hasUpdates) {
    if (hasUpdates) {
        dispatcher.onBeforeRefresh();
    }
}
function onFastRefresh(dispatcher, hasUpdates) {
    dispatcher.onBuildOk();
    if (hasUpdates) {
        dispatcher.onRefresh();
    }
}
function handleAvailableHash(hash) {
    mostRecentCompilationHash = hash;
}
function isUpdateAvailable() {
    return mostRecentCompilationHash !== __webpack_hash__;
}
function canApplyUpdates() {
    return module.hot.status() === 'idle';
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === 'idle') {
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        module.hot.addStatusHandler(handler);
    }
}
function performFullReload(err, sendMessage) {
    const stackTrace = err && (err.stack && err.stack.split('\n').slice(0, 5).join('\n') || err.message || err + '');
    sendMessage(JSON.stringify({
        event: 'client-full-reload',
        stackTrace,
        hadRuntimeError: !!_useErrorHandler.RuntimeErrorHandler.hadRuntimeError
    }));
    window.location.reload();
}
function tryApplyUpdates(onBeforeUpdate, onHotUpdateSuccess, sendMessage, dispatcher) {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        dispatcher.onBuildOk();
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _useErrorHandler.RuntimeErrorHandler.hadRuntimeError || !updatedModules) {
            if (err) {
                console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
            } else if (_useErrorHandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn('[Fast Refresh] performing full reload because your application had an unrecoverable error');
            }
            performFullReload(err, sendMessage);
            return;
        }
        const hasUpdates = Boolean(updatedModules.length);
        if (typeof onHotUpdateSuccess === 'function') {
            onHotUpdateSuccess(hasUpdates);
        }
        if (isUpdateAvailable()) {
            tryApplyUpdates(hasUpdates ? ()=>{} : onBeforeUpdate, hasUpdates ? ()=>dispatcher.onBuildOk() : onHotUpdateSuccess, sendMessage, dispatcher);
        } else {
            dispatcher.onBuildOk();
            if (process.env.__NEXT_TEST_MODE) {
                afterApplyUpdates(()=>{
                    if (self.__NEXT_HMR_CB) {
                        self.__NEXT_HMR_CB();
                        self.__NEXT_HMR_CB = null;
                    }
                });
            }
        }
    }
    module.hot.check(false).then((updatedModules)=>{
        if (!updatedModules) {
            return null;
        }
        if (typeof onBeforeUpdate === 'function') {
            const hasUpdates = Boolean(updatedModules.length);
            onBeforeUpdate(hasUpdates);
        }
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
function processMessage(e, sendMessage, router, dispatcher) {
    const obj = JSON.parse(e.data);
    switch(obj.action){
        case 'building':
            {
                console.log('[Fast Refresh] rebuilding');
                break;
            }
        case 'built':
        case 'sync':
            {
                if (obj.hash) {
                    handleAvailableHash(obj.hash);
                }
                const { errors , warnings  } = obj;
                const hasErrors = Boolean(errors && errors.length);
                if (hasErrors) {
                    sendMessage(JSON.stringify({
                        event: 'client-error',
                        errorCount: errors.length,
                        clientId: __nextDevClientId
                    }));
                    var formatted = (0, _formatWebpackMessages).default({
                        errors: errors,
                        warnings: []
                    });
                    dispatcher.onBuildError(formatted.errors[0]);
                    for(let i = 0; i < formatted.errors.length; i++){
                        console.error((0, _stripAnsi).default(formatted.errors[i]));
                    }
                    if (process.env.__NEXT_TEST_MODE) {
                        if (self.__NEXT_HMR_CB) {
                            self.__NEXT_HMR_CB(formatted.errors[0]);
                            self.__NEXT_HMR_CB = null;
                        }
                    }
                    return;
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    sendMessage(JSON.stringify({
                        event: 'client-warning',
                        warningCount: warnings.length,
                        clientId: __nextDevClientId
                    }));
                    const isHotUpdate = obj.action !== 'sync';
                    const formattedMessages = (0, _formatWebpackMessages).default({
                        warnings: warnings,
                        errors: []
                    });
                    for(let i = 0; i < formattedMessages.warnings.length; i++){
                        if (i === 5) {
                            console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
                            break;
                        }
                        console.warn((0, _stripAnsi).default(formattedMessages.warnings[i]));
                    }
                    if (isHotUpdate) {
                        tryApplyUpdates(function onBeforeHotUpdate(hasUpdates) {
                            onBeforeFastRefresh(dispatcher, hasUpdates);
                        }, function onSuccessfulHotUpdate(hasUpdates) {
                            onFastRefresh(dispatcher, hasUpdates);
                        }, sendMessage, dispatcher);
                    }
                    return;
                }
                sendMessage(JSON.stringify({
                    event: 'client-success',
                    clientId: __nextDevClientId
                }));
                const isHotUpdate = obj.action !== 'sync' || (!window.__NEXT_DATA__ || window.__NEXT_DATA__.page !== '/_error') && isUpdateAvailable();
                if (isHotUpdate) {
                    tryApplyUpdates(function onBeforeHotUpdate(hasUpdates) {
                        onBeforeFastRefresh(dispatcher, hasUpdates);
                    }, function onSuccessfulHotUpdate(hasUpdates) {
                        onFastRefresh(dispatcher, hasUpdates);
                    }, sendMessage, dispatcher);
                }
                return;
            }
        case 'serverComponentChanges':
            {
                sendMessage(JSON.stringify({
                    event: 'server-component-reload-page',
                    clientId: __nextDevClientId
                }));
                if (_useErrorHandler.RuntimeErrorHandler.hadRuntimeError) {
                    return window.location.reload();
                }
                (0, _react).startTransition(()=>{
                    router.refresh();
                    dispatcher.onRefresh();
                });
                if (process.env.__NEXT_TEST_MODE) {
                    if (self.__NEXT_HMR_CB) {
                        self.__NEXT_HMR_CB();
                        self.__NEXT_HMR_CB = null;
                    }
                }
                return;
            }
        case 'reloadPage':
            {
                sendMessage(JSON.stringify({
                    event: 'client-reload-page',
                    clientId: __nextDevClientId
                }));
                return window.location.reload();
            }
        case 'removedPage':
            {
                router.refresh();
                return;
            }
        case 'addedPage':
            {
                router.refresh();
                return;
            }
        case 'pong':
            {
                const { invalid  } = obj;
                if (invalid) {
                    router.refresh();
                }
                return;
            }
        default:
            {
                throw new Error('Unexpected action ' + obj.action);
            }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/dynamic-no-ssr.js (ecmascript, ssr)");
var _staticGenerationAsyncStorage = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/static-generation-async-storage.js (ecmascript, ssr)");
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/client-hook-in-server-component-error.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clientHookInServerComponentError = clientHookInServerComponentError;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _react = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function clientHookInServerComponentError(hookName) {
    if (process.env.NODE_ENV !== 'production') {
        if (!_react.default.useState) {
            throw new Error(`${hookName} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/redirect.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redirect = redirect;
exports.REDIRECT_ERROR_CODE = void 0;
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
exports.REDIRECT_ERROR_CODE = REDIRECT_ERROR_CODE;
function redirect(url) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ';' + url;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/not-found.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notFound = notFound;
exports.NOT_FOUND_ERROR_CODE = void 0;
const NOT_FOUND_ERROR_CODE = 'NEXT_NOT_FOUND';
exports.NOT_FOUND_ERROR_CODE = NOT_FOUND_ERROR_CODE;
function notFound() {
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.errorOverlayReducer = errorOverlayReducer;
exports.ACTION_UNHANDLED_REJECTION = exports.ACTION_UNHANDLED_ERROR = exports.ACTION_REFRESH = exports.ACTION_BEFORE_REFRESH = exports.ACTION_BUILD_ERROR = exports.ACTION_BUILD_OK = void 0;
var _extends = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_extends.js (ecmascript, ssr)").default;
const ACTION_BUILD_OK = 'build-ok';
exports.ACTION_BUILD_OK = ACTION_BUILD_OK;
const ACTION_BUILD_ERROR = 'build-error';
exports.ACTION_BUILD_ERROR = ACTION_BUILD_ERROR;
const ACTION_BEFORE_REFRESH = 'before-fast-refresh';
exports.ACTION_BEFORE_REFRESH = ACTION_BEFORE_REFRESH;
const ACTION_REFRESH = 'fast-refresh';
exports.ACTION_REFRESH = ACTION_REFRESH;
const ACTION_UNHANDLED_ERROR = 'unhandled-error';
exports.ACTION_UNHANDLED_ERROR = ACTION_UNHANDLED_ERROR;
const ACTION_UNHANDLED_REJECTION = 'unhandled-rejection';
exports.ACTION_UNHANDLED_REJECTION = ACTION_UNHANDLED_REJECTION;
function pushErrorFilterDuplicates(errors, err) {
    return [
        ...errors.filter((e)=>{
            return e.event.reason !== err.event.reason;
        }),
        err
    ];
}
function errorOverlayReducer(state, action) {
    switch(action.type){
        case ACTION_BUILD_OK:
            {
                return _extends({}, state, {
                    buildError: null
                });
            }
        case ACTION_BUILD_ERROR:
            {
                return _extends({}, state, {
                    buildError: action.message
                });
            }
        case ACTION_BEFORE_REFRESH:
            {
                return _extends({}, state, {
                    refreshState: {
                        type: 'pending',
                        errors: []
                    }
                });
            }
        case ACTION_REFRESH:
            {
                return _extends({}, state, {
                    buildError: null,
                    errors: state.refreshState.type === 'pending' ? state.refreshState.errors : [],
                    refreshState: {
                        type: 'idle'
                    }
                });
            }
        case ACTION_UNHANDLED_ERROR:
        case ACTION_UNHANDLED_REJECTION:
            {
                switch(state.refreshState.type){
                    case 'idle':
                        {
                            return _extends({}, state, {
                                nextId: state.nextId + 1,
                                errors: pushErrorFilterDuplicates(state.errors, {
                                    id: state.nextId,
                                    event: action
                                })
                            });
                        }
                    case 'pending':
                        {
                            return _extends({}, state, {
                                nextId: state.nextId + 1,
                                refreshState: _extends({}, state.refreshState, {
                                    errors: pushErrorFilterDuplicates(state.refreshState.errors, {
                                        id: state.nextId,
                                        event: action
                                    })
                                })
                            });
                        }
                    default:
                        const _ = state.refreshState;
                        return state;
                }
            }
        default:
            {
                return state;
            }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseStack = parseStack;
var _stacktraceParser = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js (ecmascript, ssr)");
const regexNextStatic = /\/_next(\/static\/.+)/g;
function parseStack(stack) {
    const frames = (0, _stacktraceParser).parse(stack);
    return frames.map((frame)=>{
        try {
            const url = new URL(frame.file);
            const res = regexNextStatic.exec(url.pathname);
            if (res) {
                var ref, ref1;
                const distDir = (ref1 = (ref = process.env.__NEXT_DIST_DIR) == null ? void 0 : ref.replace(/\\/g, '/')) == null ? void 0 : ref1.replace(/\/$/, '');
                if (distDir) {
                    frame.file = 'file://' + distDir.concat(res.pop());
                }
            }
        } catch (e) {}
        return frame;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _errorOverlayReducer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
var _shadowPortal = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js (ecmascript, ssr)");
var _buildError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js (ecmascript, ssr)");
var _errors = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js (ecmascript, ssr)");
var _base = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js (ecmascript, ssr)");
var _componentStyles = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js (ecmascript, ssr)");
var _cssReset = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js (ecmascript, ssr)");
var _parseStack = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js (ecmascript, ssr)");
var _rootLayoutError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js (ecmascript, ssr)");
class ReactDevOverlay extends React.PureComponent {
    static getDerivedStateFromError(error) {
        const e = error;
        const event = {
            type: _errorOverlayReducer.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parseStack).parseStack(e.stack)
        };
        const errorEvent = {
            id: 0,
            event
        };
        return {
            reactError: errorEvent
        };
    }
    componentDidCatch(componentErr) {
        this.props.onReactError(componentErr);
    }
    render() {
        const { state , children  } = this.props;
        const { reactError  } = this.state;
        const hasBuildError = state.buildError != null;
        const hasRuntimeErrors = Boolean(state.errors.length);
        const rootLayoutMissingTagsError = state.rootLayoutMissingTagsError;
        const isMounted = hasBuildError || hasRuntimeErrors || reactError || rootLayoutMissingTagsError;
        return React.createElement(React.Fragment, null, reactError ? React.createElement("html", null, React.createElement("head", null), React.createElement("body", null)) : children, isMounted ? React.createElement(_shadowPortal.ShadowPortal, null, React.createElement(_cssReset.CssReset, null), React.createElement(_base.Base, null), React.createElement(_componentStyles.ComponentStyles, null), rootLayoutMissingTagsError ? React.createElement(_rootLayoutError.RootLayoutError, {
            missingTags: rootLayoutMissingTagsError.missingTags
        }) : hasBuildError ? React.createElement(_buildError.BuildError, {
            message: state.buildError
        }) : reactError ? React.createElement(_errors.Errors, {
            initialDisplayState: "fullscreen",
            errors: [
                reactError
            ]
        }) : hasRuntimeErrors ? React.createElement(_errors.Errors, {
            initialDisplayState: "minimized",
            errors: state.errors
        }) : undefined) : undefined);
    }
    constructor(...args){
        super(...args);
        this.state = {
            reactError: null
        };
    }
}
var _default = ReactDevOverlay;
exports.default = _default;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useErrorHandler = useErrorHandler;
exports.RuntimeErrorHandler = void 0;
var _react = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var _hydrationErrorInfo = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js (ecmascript, ssr)");
const RuntimeErrorHandler = {
    hadRuntimeError: false
};
exports.RuntimeErrorHandler = RuntimeErrorHandler;
function isNextRouterError(error) {
    return error && error.digest && (error.digest.startsWith('NEXT_REDIRECT') || error.digest === 'NEXT_NOT_FOUND');
}
function isHydrationError(error) {
    return error.message.match(/(hydration|content does not match|did not match)/i) != null;
}
if (typeof window !== 'undefined') {
    try {
        Error.stackTraceLimit = 50;
    } catch (e) {}
}
const errorQueue = [];
const rejectionQueue = [];
const errorHandlers = [];
const rejectionHandlers = [];
if (typeof window !== 'undefined') {
    window.addEventListener('error', (ev)=>{
        if (isNextRouterError(ev.error)) {
            ev.preventDefault();
            return;
        }
        const error = ev == null ? void 0 : ev.error;
        if (!error || !(error instanceof Error) || typeof error.stack !== 'string') {
            return;
        }
        if (isHydrationError(error) && !error.message.includes('https://nextjs.org/docs/messages/react-hydration-error')) {
            if (_hydrationErrorInfo.hydrationErrorInfo) {
                error.message += '\n\n' + _hydrationErrorInfo.hydrationErrorInfo;
            }
            error.message += '\n\nSee more info here: https://nextjs.org/docs/messages/react-hydration-error';
        }
        const e = error;
        errorQueue.push(e);
        for (const handler of errorHandlers){
            handler(e);
        }
    });
    window.addEventListener('unhandledrejection', (ev)=>{
        const reason = ev == null ? void 0 : ev.reason;
        if (!reason || !(reason instanceof Error) || typeof reason.stack !== 'string') {
            return;
        }
        const e = reason;
        rejectionQueue.push(e);
        for (const handler of rejectionHandlers){
            handler(e);
        }
    });
}
function useErrorHandler(handleOnUnhandledError, handleOnUnhandledRejection) {
    (0, _react).useEffect(()=>{
        errorQueue.forEach(handleOnUnhandledError);
        rejectionQueue.forEach(handleOnUnhandledRejection);
        errorHandlers.push(handleOnUnhandledError);
        rejectionHandlers.push(handleOnUnhandledRejection);
        return ()=>{
            errorHandlers.splice(errorHandlers.indexOf(handleOnUnhandledError), 1);
            rejectionHandlers.splice(rejectionHandlers.indexOf(handleOnUnhandledRejection), 1);
        };
    }, [
        handleOnUnhandledError,
        handleOnUnhandledRejection
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-websocket.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useWebsocket = useWebsocket;
exports.useSendMessage = useSendMessage;
exports.useWebsocketPing = useWebsocketPing;
var _react = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var _appRouterContext = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.js (ecmascript, ssr)");
var _getSocketProtocol = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-protocol.js (ecmascript, ssr)");
function useWebsocket(assetPrefix) {
    const webSocketRef = (0, _react).useRef();
    (0, _react).useEffect(()=>{
        if (webSocketRef.current) {
            return;
        }
        const { hostname , port  } = window.location;
        const protocol = (0, _getSocketProtocol).getSocketProtocol(assetPrefix);
        const normalizedAssetPrefix = assetPrefix.replace(/^\/+/, '');
        let url = `${protocol}://${hostname}:${port}${normalizedAssetPrefix ? `/${normalizedAssetPrefix}` : ''}`;
        if (normalizedAssetPrefix.startsWith('http')) {
            url = `${protocol}://${normalizedAssetPrefix.split('://')[1]}`;
        }
        webSocketRef.current = new window.WebSocket(`${url}/_next/webpack-hmr`);
    }, [
        assetPrefix
    ]);
    return webSocketRef;
}
function useSendMessage(webSocketRef) {
    const sendMessage = (0, _react).useCallback((data)=>{
        const socket = webSocketRef.current;
        if (!socket || socket.readyState !== socket.OPEN) {
            return;
        }
        return socket.send(data);
    }, [
        webSocketRef
    ]);
    return sendMessage;
}
function useWebsocketPing(websocketRef) {
    const sendMessage = useSendMessage(websocketRef);
    const { tree  } = (0, _react).useContext(_appRouterContext.GlobalLayoutRouterContext);
    (0, _react).useEffect(()=>{
        const interval = setInterval(()=>{
            sendMessage(JSON.stringify({
                event: 'ping',
                tree,
                appDirRoute: true
            }));
        }, 2500);
        return ()=>clearInterval(interval);
    }, [
        tree,
        sendMessage
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/static-generation-async-storage.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.staticGenerationAsyncStorage = void 0;
var _asyncLocalStorage = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/async-local-storage.js (ecmascript, ssr)");
const staticGenerationAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShadowPortal = ShadowPortal;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _reactDom = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js (ecmascript, ssr)");
function ShadowPortal({ children  }) {
    let portalNode = React.useRef(null);
    let shadowNode = React.useRef(null);
    let [, forceUpdate] = React.useState();
    React.useLayoutEffect(()=>{
        const ownerDocument = document;
        portalNode.current = ownerDocument.createElement('nextjs-portal');
        shadowNode.current = portalNode.current.attachShadow({
            mode: 'open'
        });
        ownerDocument.body.appendChild(portalNode.current);
        forceUpdate({});
        return ()=>{
            if (portalNode.current && portalNode.current.ownerDocument) {
                portalNode.current.ownerDocument.body.removeChild(portalNode.current);
            }
        };
    }, []);
    return shadowNode.current ? (0, _reactDom).createPortal(children, shadowNode.current) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = exports.BuildError = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _dialog = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
var _overlay = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)");
var _terminal = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js (ecmascript, ssr)");
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const BuildError = function BuildError({ message  }) {
    const noop = React.useCallback(()=>{}, []);
    return React.createElement(_overlay.Overlay, {
        fixed: true
    }, React.createElement(_dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_build_error_label",
        "aria-describedby": "nextjs__container_build_error_desc",
        onClose: noop
    }, React.createElement(_dialog.DialogContent, null, React.createElement(_dialog.DialogHeader, {
        className: "nextjs-container-build-error-header"
    }, React.createElement("h4", {
        id: "nextjs__container_build_error_label"
    }, "Failed to compile")), React.createElement(_dialog.DialogBody, {
        className: "nextjs-container-build-error-body"
    }, React.createElement(_terminal.Terminal, {
        content: message
    }), React.createElement("footer", null, React.createElement("p", {
        id: "nextjs__container_build_error_desc"
    }, React.createElement("small", null, "This error occurred during the build process and can only be dismissed by fixing the error.")))))));
};
exports.BuildError = BuildError;
const styles = _noopTemplate.noop`
  .nextjs-container-build-error-header > h4 {
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  .nextjs-container-build-error-body footer {
    margin-top: var(--size-gap);
  }
  .nextjs-container-build-error-body footer p {
    margin: 0;
  }

  .nextjs-container-build-error-body small {
    color: #757575;
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = exports.Errors = void 0;
var _extends = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_extends.js (ecmascript, ssr)").default;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _errorOverlayReducer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
var _dialog = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
var _leftRightDialogHeader = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js (ecmascript, ssr)");
var _overlay = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)");
var _toast = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js (ecmascript, ssr)");
var _getErrorByType = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js (ecmascript, ssr)");
var _nodeStackFrames = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js (ecmascript, ssr)");
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
var _closeIcon = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js (ecmascript, ssr)");
var _runtimeError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js (ecmascript, ssr)");
function getErrorSignature(ev) {
    const { event  } = ev;
    switch(event.type){
        case _errorOverlayReducer.ACTION_UNHANDLED_ERROR:
        case _errorOverlayReducer.ACTION_UNHANDLED_REJECTION:
            {
                return `${event.reason.name}::${event.reason.message}::${event.reason.stack}`;
            }
        default:
            {}
    }
    const _ = event;
    return '';
}
const HotlinkedText = function HotlinkedText(props) {
    const { text  } = props;
    const linkRegex = /https?:\/\/[^\s/$.?#].[^\s"]*/i;
    return React.createElement(React.Fragment, null, linkRegex.test(text) ? text.split(' ').map((word, index, array)=>{
        if (linkRegex.test(word)) {
            return React.createElement(React.Fragment, {
                key: `link-${index}`
            }, React.createElement("a", {
                href: word
            }, word), index === array.length - 1 ? '' : ' ');
        }
        return index === array.length - 1 ? React.createElement(React.Fragment, {
            key: `text-${index}`
        }, word) : React.createElement(React.Fragment, {
            key: `text-${index}`
        }, word, " ");
    }) : text);
};
const Errors = function Errors({ errors , initialDisplayState  }) {
    const [lookups, setLookups] = React.useState({});
    const [readyErrors, nextError] = React.useMemo(()=>{
        let ready = [];
        let next = null;
        for(let idx = 0; idx < errors.length; ++idx){
            const e = errors[idx];
            const { id  } = e;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            if (idx > 0) {
                const prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [
            ready,
            next
        ];
    }, [
        errors,
        lookups
    ]);
    const isLoading = React.useMemo(()=>{
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [
        errors.length,
        readyErrors.length
    ]);
    React.useEffect(()=>{
        if (nextError == null) {
            return;
        }
        let mounted = true;
        (0, _getErrorByType).getErrorByType(nextError).then((resolved)=>{
            if (mounted) {
                setLookups((m)=>_extends({}, m, {
                        [resolved.id]: resolved
                    }));
            }
        }, ()=>{});
        return ()=>{
            mounted = false;
        };
    }, [
        nextError
    ]);
    const [displayState, setDisplayState] = React.useState(initialDisplayState);
    const [activeIdx, setActiveIndex] = React.useState(0);
    const previous = React.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setActiveIndex((v)=>Math.max(0, v - 1));
    }, []);
    const next1 = React.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setActiveIndex((v)=>Math.max(0, Math.min(readyErrors.length - 1, v + 1)));
    }, [
        readyErrors.length
    ]);
    var _activeIdx;
    const activeError = React.useMemo(()=>(_activeIdx = readyErrors[activeIdx]) != null ? _activeIdx : null, [
        activeIdx,
        readyErrors
    ]);
    React.useEffect(()=>{
        if (errors.length < 1) {
            setLookups({});
            setDisplayState('hidden');
            setActiveIndex(0);
        }
    }, [
        errors.length
    ]);
    const minimize = React.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState('minimized');
    }, []);
    const hide = React.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState('hidden');
    }, []);
    const fullscreen = React.useCallback((e)=>{
        e == null ? void 0 : e.preventDefault();
        setDisplayState('fullscreen');
    }, []);
    if (errors.length < 1 || activeError == null) {
        return null;
    }
    if (isLoading) {
        return React.createElement(_overlay.Overlay, null);
    }
    if (displayState === 'hidden') {
        return null;
    }
    if (displayState === 'minimized') {
        return React.createElement(_toast.Toast, {
            className: "nextjs-toast-errors-parent",
            onClick: fullscreen
        }, React.createElement("div", {
            className: "nextjs-toast-errors"
        }, React.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, React.createElement("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        }), React.createElement("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
        }), React.createElement("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
        })), React.createElement("span", null, readyErrors.length, " error", readyErrors.length > 1 ? 's' : ''), React.createElement("button", {
            "data-nextjs-toast-errors-hide-button": true,
            className: "nextjs-toast-errors-hide-button",
            type: "button",
            onClick: (e)=>{
                e.stopPropagation();
                hide();
            },
            "aria-label": "Hide Errors"
        }, React.createElement(_closeIcon.CloseIcon, null))));
    }
    const isServerError = [
        'server',
        'edge-server'
    ].includes((0, _nodeStackFrames).getErrorSource(activeError.error) || '');
    return React.createElement(_overlay.Overlay, null, React.createElement(_dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_errors_label",
        "aria-describedby": "nextjs__container_errors_desc",
        onClose: isServerError ? undefined : minimize
    }, React.createElement(_dialog.DialogContent, null, React.createElement(_dialog.DialogHeader, {
        className: "nextjs-container-errors-header"
    }, React.createElement(_leftRightDialogHeader.LeftRightDialogHeader, {
        previous: activeIdx > 0 ? previous : null,
        next: activeIdx < readyErrors.length - 1 ? next1 : null,
        close: isServerError ? undefined : minimize
    }, React.createElement("small", null, React.createElement("span", null, activeIdx + 1), " of", ' ', React.createElement("span", null, readyErrors.length), " unhandled error", readyErrors.length < 2 ? '' : 's')), React.createElement("h1", {
        id: "nextjs__container_errors_label"
    }, isServerError ? 'Server Error' : 'Unhandled Runtime Error'), React.createElement("p", {
        id: "nextjs__container_errors_desc"
    }, activeError.error.name, ":", ' ', React.createElement(HotlinkedText, {
        text: activeError.error.message
    })), isServerError ? React.createElement("div", null, React.createElement("small", null, "This error happened while generating the page. Any console logs will be displayed in the terminal window.")) : undefined), React.createElement(_dialog.DialogBody, {
        className: "nextjs-container-errors-body"
    }, React.createElement(_runtimeError.RuntimeError, {
        key: activeError.id.toString(),
        error: activeError
    })))));
};
exports.Errors = Errors;
const styles = _noopTemplate.noop`
  .nextjs-container-errors-header > h1 {
    font-size: var(--size-font-big);
    line-height: var(--size-font-bigger);
    font-weight: bold;
    margin: 0;
    margin-top: calc(var(--size-gap-double) + var(--size-gap-half));
  }
  .nextjs-container-errors-header small {
    font-size: var(--size-font-small);
    color: var(--color-accents-1);
    margin-left: var(--size-gap-double);
  }
  .nextjs-container-errors-header small > span {
    font-family: var(--font-stack-monospace);
  }
  .nextjs-container-errors-header > p {
    font-family: var(--font-stack-monospace);
    font-size: var(--size-font-small);
    line-height: var(--size-font-big);
    font-weight: bold;
    margin: 0;
    margin-top: var(--size-gap-half);
    color: var(--color-ansi-red);
    white-space: pre-wrap;
  }
  .nextjs-container-errors-header > div > small {
    margin: 0;
    margin-top: var(--size-gap-half);
  }
  .nextjs-container-errors-header > p > a {
    color: var(--color-ansi-red);
  }

  .nextjs-container-errors-body > h5:not(:first-child) {
    margin-top: calc(var(--size-gap-double) + var(--size-gap));
  }
  .nextjs-container-errors-body > h5 {
    margin-bottom: var(--size-gap);
  }

  .nextjs-toast-errors-parent {
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  .nextjs-toast-errors-parent:hover {
    transform: scale(1.1);
  }
  .nextjs-toast-errors {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .nextjs-toast-errors > svg {
    margin-right: var(--size-gap);
  }
  .nextjs-toast-errors-hide-button {
    margin-left: var(--size-gap-triple);
    border: none;
    background: none;
    color: var(--color-ansi-bright-white);
    padding: 0;
    transition: opacity 0.25s ease;
    opacity: 0.7;
  }
  .nextjs-toast-errors-hide-button:hover {
    opacity: 1;
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Base = Base;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function Base() {
    return React.createElement("style", null, _noopTemplate.noop`
        :host {
          --size-gap-half: 4px;
          --size-gap: 8px;
          --size-gap-double: 16px;
          --size-gap-triple: 24px;
          --size-gap-quad: 32px;

          --size-font-small: 14px;
          --size-font: 16px;
          --size-font-big: 20px;
          --size-font-bigger: 24px;

          --color-accents-1: #808080;
          --color-accents-2: #222222;
          --color-accents-3: #404040;

          --font-stack-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono',
            Menlo, Courier, monospace;

          --color-ansi-selection: rgba(95, 126, 151, 0.48);
          --color-ansi-bg: #111111;
          --color-ansi-fg: #cccccc;

          --color-ansi-white: #777777;
          --color-ansi-black: #141414;
          --color-ansi-blue: #00aaff;
          --color-ansi-cyan: #88ddff;
          --color-ansi-green: #98ec65;
          --color-ansi-magenta: #aa88ff;
          --color-ansi-red: #ff5555;
          --color-ansi-yellow: #ffcc33;
          --color-ansi-bright-white: #ffffff;
          --color-ansi-bright-black: #777777;
          --color-ansi-bright-blue: #33bbff;
          --color-ansi-bright-cyan: #bbecff;
          --color-ansi-bright-green: #b6f292;
          --color-ansi-bright-magenta: #cebbff;
          --color-ansi-bright-red: #ff8888;
          --color-ansi-bright-yellow: #ffd966;
        }

        .mono {
          font-family: var(--font-stack-monospace);
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-bottom: var(--size-gap);
          font-weight: 500;
          line-height: 1.5;
        }

        h1 {
          font-size: 40px;
        }
        h2 {
          font-size: 32px;
        }
        h3 {
          font-size: 28px;
        }
        h4 {
          font-size: 24px;
        }
        h5 {
          font-size: 20px;
        }
        h6 {
          font-size: 16px;
        }
      `);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComponentStyles = ComponentStyles;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _styles = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js (ecmascript, ssr)");
var _dialog = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
var _styles1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js (ecmascript, ssr)");
var _styles2 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js (ecmascript, ssr)");
var _styles3 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js (ecmascript, ssr)");
var _toast = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js (ecmascript, ssr)");
var _buildError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js (ecmascript, ssr)");
var _rootLayoutError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js (ecmascript, ssr)");
var _errors = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js (ecmascript, ssr)");
var _runtimeError = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js (ecmascript, ssr)");
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function ComponentStyles() {
    return React.createElement("style", null, _noopTemplate.noop`
        ${_styles2.styles}
        ${_toast.styles}
        ${_dialog.styles}
        ${_styles1.styles}
        ${_styles.styles}
        ${_styles3.styles}
        
        ${_buildError.styles}
        ${_rootLayoutError.styles}
        ${_errors.styles}
        ${_runtimeError.styles}
      `);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CssReset = CssReset;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
function CssReset() {
    return React.createElement("style", null, _noopTemplate.noop`
        :host {
          all: initial;

          /* the direction property is not reset by 'all' */
          direction: ltr;
        }

        /*!
         * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)
         * Copyright 2011-2019 The Bootstrap Authors
         * Copyright 2011-2019 Twitter, Inc.
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
         * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
         */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :host {
          font-family: sans-serif;
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        article,
        aside,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section {
          display: block;
        }

        :host {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          text-align: left;
          background-color: #fff;
        }

        [tabindex='-1']:focus:not(:focus-visible) {
          outline: 0 !important;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 0;
          margin-bottom: 8px;
        }

        p {
          margin-top: 0;
          margin-bottom: 16px;
        }

        abbr[title],
        abbr[data-original-title] {
          text-decoration: underline;
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
          cursor: help;
          border-bottom: 0;
          -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
        }

        address {
          margin-bottom: 16px;
          font-style: normal;
          line-height: inherit;
        }

        ol,
        ul,
        dl {
          margin-top: 0;
          margin-bottom: 16px;
        }

        ol ol,
        ul ul,
        ol ul,
        ul ol {
          margin-bottom: 0;
        }

        dt {
          font-weight: 700;
        }

        dd {
          margin-bottom: 8px;
          margin-left: 0;
        }

        blockquote {
          margin: 0 0 16px;
        }

        b,
        strong {
          font-weight: bolder;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          position: relative;
          font-size: 75%;
          line-height: 0;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;
        }

        a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        a:not([href]) {
          color: inherit;
          text-decoration: none;
        }

        a:not([href]):hover {
          color: inherit;
          text-decoration: none;
        }

        pre,
        code,
        kbd,
        samp {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-size: 1em;
        }

        pre {
          margin-top: 0;
          margin-bottom: 16px;
          overflow: auto;
        }

        figure {
          margin: 0 0 16px;
        }

        img {
          vertical-align: middle;
          border-style: none;
        }

        svg {
          overflow: hidden;
          vertical-align: middle;
        }

        table {
          border-collapse: collapse;
        }

        caption {
          padding-top: 12px;
          padding-bottom: 12px;
          color: #6c757d;
          text-align: left;
          caption-side: bottom;
        }

        th {
          text-align: inherit;
        }

        label {
          display: inline-block;
          margin-bottom: 8px;
        }

        button {
          border-radius: 0;
        }

        button:focus {
          outline: 1px dotted;
          outline: 5px auto -webkit-focus-ring-color;
        }

        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        button,
        input {
          overflow: visible;
        }

        button,
        select {
          text-transform: none;
        }

        select {
          word-wrap: normal;
        }

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
        }

        button:not(:disabled),
        [type='button']:not(:disabled),
        [type='reset']:not(:disabled),
        [type='submit']:not(:disabled) {
          cursor: pointer;
        }

        button::-moz-focus-inner,
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner {
          padding: 0;
          border-style: none;
        }

        input[type='radio'],
        input[type='checkbox'] {
          box-sizing: border-box;
          padding: 0;
        }

        input[type='date'],
        input[type='time'],
        input[type='datetime-local'],
        input[type='month'] {
          -webkit-appearance: listbox;
        }

        textarea {
          overflow: auto;
          resize: vertical;
        }

        fieldset {
          min-width: 0;
          padding: 0;
          margin: 0;
          border: 0;
        }

        legend {
          display: block;
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin-bottom: 8px;
          font-size: 24px;
          line-height: inherit;
          color: inherit;
          white-space: normal;
        }

        progress {
          vertical-align: baseline;
        }

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        [type='search'] {
          outline-offset: -2px;
          -webkit-appearance: none;
        }

        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          font: inherit;
          -webkit-appearance: button;
        }

        output {
          display: inline-block;
        }

        summary {
          display: list-item;
          cursor: pointer;
        }

        template {
          display: none;
        }

        [hidden] {
          display: none !important;
        }
      `);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RootLayoutError.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = exports.RootLayoutError = void 0;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _react = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _dialog = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)");
var _overlay = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)");
var _terminal = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js (ecmascript, ssr)");
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const RootLayoutError = function BuildError({ missingTags  }) {
    const message = 'Please make sure to include the following tags in your root layout: <html>, <body>.\n\n' + `Missing required root layout tag${missingTags.length === 1 ? '' : 's'}: ` + missingTags.join(', ');
    const noop = _react.default.useCallback(()=>{}, []);
    return _react.default.createElement(_overlay.Overlay, {
        fixed: true
    }, _react.default.createElement(_dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_root_layout_error_label",
        "aria-describedby": "nextjs__container_root_layout_error_desc",
        onClose: noop
    }, _react.default.createElement(_dialog.DialogContent, null, _react.default.createElement(_dialog.DialogHeader, {
        className: "nextjs-container-root-layout-error-header"
    }, _react.default.createElement("h4", {
        id: "nextjs__container_root_layout_error_label"
    }, "Missing required tags")), _react.default.createElement(_dialog.DialogBody, {
        className: "nextjs-container-root-layout-error-body"
    }, _react.default.createElement(_terminal.Terminal, {
        content: message
    }), _react.default.createElement("footer", null, _react.default.createElement("p", {
        id: "nextjs__container_root_layout_error_desc"
    }, _react.default.createElement("small", null, "This error and can only be dismissed by providing all required tags.")))))));
};
exports.RootLayoutError = RootLayoutError;
const styles = _noopTemplate.noop`
  .nextjs-container-root-layout-error-header > h4 {
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  .nextjs-container-root-layout-error-body footer {
    margin-top: var(--size-gap);
  }
  .nextjs-container-root-layout-error-body footer p {
    margin: 0;
  }

  .nextjs-container-root-layout-error-body small {
    color: #757575;
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.patchConsoleError = patchConsoleError;
exports.hydrationErrorInfo = void 0;
let hydrationErrorInfo;
exports.hydrationErrorInfo = hydrationErrorInfo;
const knownHydrationWarnings = new Set([
    'Warning: Text content did not match. Server: "%s" Client: "%s"%s',
    'Warning: Expected server HTML to contain a matching <%s> in <%s>.%s',
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    'Warning: Did not expect server HTML to contain a <%s> in <%s>.%s',
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
function patchConsoleError() {
    const prev = console.error;
    console.error = function(msg, serverContent, clientContent, _componentStack) {
        if (knownHydrationWarnings.has(msg)) {
            exports.hydrationErrorInfo = hydrationErrorInfo = msg.replace('%s', serverContent).replace('%s', clientContent).replace('%s', '');
        }
        prev.apply(console, arguments);
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-protocol.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSocketProtocol = getSocketProtocol;
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === 'http:' ? 'ws' : 'wss';
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/async-local-storage.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
    getStore() {
        return undefined;
    }
    run() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
    exit() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
    enterWith() {
        throw new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available');
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Dialog", {
    enumerable: true,
    get: function() {
        return _dialog.Dialog;
    }
});
Object.defineProperty(exports, "DialogBody", {
    enumerable: true,
    get: function() {
        return _dialogBody.DialogBody;
    }
});
Object.defineProperty(exports, "DialogContent", {
    enumerable: true,
    get: function() {
        return _dialogContent.DialogContent;
    }
});
Object.defineProperty(exports, "DialogHeader", {
    enumerable: true,
    get: function() {
        return _dialogHeader.DialogHeader;
    }
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return _styles.styles;
    }
});
var _dialog = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js (ecmascript, ssr)");
var _dialogBody = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js (ecmascript, ssr)");
var _dialogContent = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js (ecmascript, ssr)");
var _dialogHeader = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js (ecmascript, ssr)");
var _styles = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return _overlay.Overlay;
    }
});
var _overlay = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return _terminal.Terminal;
    }
});
var _terminal = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noop = noop;
function noop(strings, ...keys) {
    const lastIndex = strings.length - 1;
    return strings.slice(0, lastIndex).reduce((p, s, i)=>p + s + keys[i], '') + strings[lastIndex];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeftRightDialogHeader", {
    enumerable: true,
    get: function() {
        return _leftRightDialogHeader.LeftRightDialogHeader;
    }
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return _styles.styles;
    }
});
var _leftRightDialogHeader = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js (ecmascript, ssr)");
var _styles = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return _styles.styles;
    }
});
Object.defineProperty(exports, "Toast", {
    enumerable: true,
    get: function() {
        return _toast.Toast;
    }
});
var _styles = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js (ecmascript, ssr)");
var _toast = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getErrorByType = getErrorByType;
var _async_to_generator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_async_to_generator.js (ecmascript, ssr)").default;
var _errorOverlayReducer = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/error-overlay-reducer.js (ecmascript, ssr)");
var _nodeStackFrames = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js (ecmascript, ssr)");
var _stackFrame = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)");
function getErrorByType(ev) {
    return _getErrorByType.apply(this, arguments);
}
function _getErrorByType() {
    _getErrorByType = _async_to_generator(function*(ev) {
        const { id , event  } = ev;
        switch(event.type){
            case _errorOverlayReducer.ACTION_UNHANDLED_ERROR:
            case _errorOverlayReducer.ACTION_UNHANDLED_REJECTION:
                {
                    return {
                        id,
                        runtime: true,
                        error: event.reason,
                        frames: yield (0, _stackFrame).getOriginalStackFrames(event.frames, (0, _nodeStackFrames).getErrorSource(event.reason), event.reason.toString())
                    };
                }
            default:
                {
                    break;
                }
        }
        const _ = event;
        throw new Error('type system invariant violation');
    });
    return _getErrorByType.apply(this, arguments);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilesystemFrame = getFilesystemFrame;
exports.getErrorSource = getErrorSource;
exports.decorateServerError = decorateServerError;
exports.getServerError = getServerError;
var _extends = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_extends.js (ecmascript, ssr)").default;
var _stacktraceParser = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js (ecmascript, ssr)");
function getFilesystemFrame(frame) {
    const f = _extends({}, frame);
    if (typeof f.file === 'string') {
        if (f.file.startsWith('/') || /^[a-z]:\\/i.test(f.file) || f.file.startsWith('\\\\')) {
            f.file = `file://${f.file}`;
        }
    }
    return f;
}
const symbolError = Symbol('NextjsError');
function getErrorSource(error) {
    return error[symbolError] || null;
}
function decorateServerError(error, type) {
    Object.defineProperty(error, symbolError, {
        writable: false,
        enumerable: false,
        configurable: false,
        value: type
    });
}
function getServerError(error, type) {
    let n;
    try {
        throw new Error(error.message);
    } catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = `${n.toString()}\n${(0, _stacktraceParser).parse(error.stack).map(getFilesystemFrame).map((f)=>{
            let str = `    at ${f.methodName}`;
            if (f.file) {
                let loc = f.file;
                if (f.lineNumber) {
                    loc += `:${f.lineNumber}`;
                    if (f.column) {
                        loc += `:${f.column}`;
                    }
                }
                str += ` (${loc})`;
            }
            return str;
        }).join('\n')}`;
    } catch (e1) {
        n.stack = error.stack;
    }
    decorateServerError(n, type);
    return n;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CloseIcon = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const CloseIcon = ()=>{
    return React.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), React.createElement("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }));
};
exports.CloseIcon = CloseIcon;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = exports.RuntimeError = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _codeFrame = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js (ecmascript, ssr)");
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
var _groupStackFramesByFramework = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js (ecmascript, ssr)");
var _callStackFrame = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js (ecmascript, ssr)");
var _groupedStackFrames = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js (ecmascript, ssr)");
const RuntimeError = function RuntimeError({ error  }) {
    const firstFirstPartyFrameIndex = React.useMemo(()=>{
        return error.frames.findIndex((entry)=>entry.expanded && Boolean(entry.originalCodeFrame) && Boolean(entry.originalStackFrame));
    }, [
        error.frames
    ]);
    const firstFrame = React.useMemo(()=>{
        var _firstFirstPartyFrameIndex;
        return (_firstFirstPartyFrameIndex = error.frames[firstFirstPartyFrameIndex]) != null ? _firstFirstPartyFrameIndex : null;
    }, [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const allLeadingFrames = React.useMemo(()=>firstFirstPartyFrameIndex < 0 ? [] : error.frames.slice(0, firstFirstPartyFrameIndex), [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const [all, setAll] = React.useState(firstFrame == null);
    const toggleAll = React.useCallback(()=>{
        setAll((v)=>!v);
    }, []);
    const leadingFrames = React.useMemo(()=>allLeadingFrames.filter((f)=>f.expanded || all), [
        all,
        allLeadingFrames
    ]);
    const allCallStackFrames = React.useMemo(()=>error.frames.slice(firstFirstPartyFrameIndex + 1), [
        error.frames,
        firstFirstPartyFrameIndex
    ]);
    const visibleCallStackFrames = React.useMemo(()=>allCallStackFrames.filter((f)=>f.expanded || all), [
        all,
        allCallStackFrames
    ]);
    const canShowMore = React.useMemo(()=>{
        return allCallStackFrames.length !== visibleCallStackFrames.length || all && firstFrame != null;
    }, [
        all,
        allCallStackFrames.length,
        firstFrame,
        visibleCallStackFrames.length
    ]);
    const stackFramesGroupedByFramework = React.useMemo(()=>(0, _groupStackFramesByFramework).groupStackFramesByFramework(visibleCallStackFrames), [
        visibleCallStackFrames
    ]);
    return React.createElement(React.Fragment, null, firstFrame ? React.createElement(React.Fragment, null, React.createElement("h5", null, "Source"), leadingFrames.map((frame, index)=>React.createElement(_callStackFrame.CallStackFrame, {
            key: `leading-frame-${index}-${all}`,
            frame: frame
        })), React.createElement(_codeFrame.CodeFrame, {
        stackFrame: firstFrame.originalStackFrame,
        codeFrame: firstFrame.originalCodeFrame
    })) : undefined, stackFramesGroupedByFramework.length ? React.createElement(React.Fragment, null, React.createElement("h5", null, "Call Stack"), React.createElement(_groupedStackFrames.GroupedStackFrames, {
        groupedStackFrames: stackFramesGroupedByFramework,
        all: all
    })) : undefined, canShowMore ? React.createElement(React.Fragment, null, React.createElement("button", {
        tabIndex: 10,
        "data-nextjs-data-runtime-error-collapsed-action": true,
        type: "button",
        onClick: toggleAll
    }, all ? 'Hide' : 'Show', " collapsed frames")) : undefined);
};
const styles = _noopTemplate.noop`
  button[data-nextjs-data-runtime-error-collapsed-action] {
    background: none;
    border: none;
    padding: 0;
    font-size: var(--size-font-small);
    line-height: var(--size-font-bigger);
    color: var(--color-accents-3);
  }

  [data-nextjs-call-stack-frame]:not(:last-child) {
    margin-bottom: var(--size-gap-double);
  }

  [data-nextjs-call-stack-frame] > h6 {
    margin-top: 0;
    margin-bottom: var(--size-gap);
    font-family: var(--font-stack-monospace);
    color: #222;
  }
  [data-nextjs-call-stack-frame] > h6[data-nextjs-frame-expanded='false'] {
    color: #666;
  }
  [data-nextjs-call-stack-frame] > div {
    display: flex;
    align-items: center;
    padding-left: calc(var(--size-gap) + var(--size-gap-half));
    font-size: var(--size-font-small);
    color: #999;
  }
  [data-nextjs-call-stack-frame] > div > svg {
    width: auto;
    height: var(--size-font-small);
    margin-left: var(--size-gap);

    display: none;
  }

  [data-nextjs-call-stack-frame] > div[data-has-source] {
    cursor: pointer;
  }
  [data-nextjs-call-stack-frame] > div[data-has-source]:hover {
    text-decoration: underline dotted;
  }
  [data-nextjs-call-stack-frame] > div[data-has-source] > svg {
    display: unset;
  }

  [data-nextjs-call-stack-framework-button] {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: var(--size-gap-double) 0;
  }
  [data-nextjs-call-stack-framework-icon] {
    margin-right: var(--size-gap);
  }
  [data-nextjs-call-stack-framework-icon='next'] > mask {
    mask-type: alpha;
  }
  [data-nextjs-call-stack-framework-icon='react'] {
    color: rgb(20, 158, 202);
  }
  [data-nextjs-call-stack-framework-button][data-state='open']
    > [data-nextjs-call-stack-chevron-icon] {
    transform: rotate(90deg);
  }
`;
exports.styles = styles;
exports.RuntimeError = RuntimeError;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = void 0;
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const styles = _noopTemplate.noop`
  [data-nextjs-codeframe] {
    overflow: auto;
    border-radius: var(--size-gap-half);
    background-color: var(--color-ansi-bg);
    color: var(--color-ansi-fg);
  }
  [data-nextjs-codeframe]::selection,
  [data-nextjs-codeframe] *::selection {
    background-color: var(--color-ansi-selection);
  }
  [data-nextjs-codeframe] * {
    color: inherit;
    background-color: transparent;
    font-family: var(--font-stack-monospace);
  }

  [data-nextjs-codeframe] > * {
    margin: 0;
    padding: calc(var(--size-gap) + var(--size-gap-half))
      calc(var(--size-gap-double) + var(--size-gap-half));
  }
  [data-nextjs-codeframe] > div {
    display: inline-block;
    width: auto;
    min-width: 100%;
    border-bottom: 1px solid var(--color-ansi-bright-black);
  }
  [data-nextjs-codeframe] > div > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin: 0;
  }
  [data-nextjs-codeframe] > div > p:hover {
    text-decoration: underline dotted;
  }
  [data-nextjs-codeframe] div > p > svg {
    width: auto;
    height: 1em;
    margin-left: 8px;
  }
  [data-nextjs-codeframe] div > pre {
    overflow: hidden;
    display: inline-block;
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = void 0;
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const styles = _noopTemplate.noop`
  [data-nextjs-dialog-left-right] {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
  [data-nextjs-dialog-left-right] > nav > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: calc(var(--size-gap-double) + var(--size-gap));
    height: calc(var(--size-gap-double) + var(--size-gap));
    font-size: 0;
    border: none;
    background-color: rgba(255, 85, 85, 0.1);
    color: var(--color-ansi-red);
    cursor: pointer;
    transition: background-color 0.25s ease;
  }
  [data-nextjs-dialog-left-right] > nav > button > svg {
    width: auto;
    height: calc(var(--size-gap) + var(--size-gap-half));
  }
  [data-nextjs-dialog-left-right] > nav > button:hover {
    background-color: rgba(255, 85, 85, 0.2);
  }
  [data-nextjs-dialog-left-right] > nav > button:disabled {
    background-color: rgba(255, 85, 85, 0.1);
    color: rgba(255, 85, 85, 0.4);
    cursor: not-allowed;
  }

  [data-nextjs-dialog-left-right] > nav > button:first-of-type {
    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);
    margin-right: 1px;
  }
  [data-nextjs-dialog-left-right] > nav > button:last-of-type {
    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;
  }

  [data-nextjs-dialog-left-right] > button:last-of-type {
    border: 0;
    padding: 0;

    background-color: transparent;
    appearance: none;

    opacity: 0.4;
    transition: opacity 0.25s ease;
  }
  [data-nextjs-dialog-left-right] > button:last-of-type:hover {
    opacity: 0.7;
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = void 0;
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const styles = _noopTemplate.noop`
  [data-nextjs-dialog-overlay] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 9000;

    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10vh 15px 0;
  }

  @media (max-height: 812px) {
    [data-nextjs-dialog-overlay] {
      padding: 15px 15px 0;
    }
  }

  [data-nextjs-dialog-backdrop] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(17, 17, 17, 0.2);
    pointer-events: all;
    z-index: -1;
  }

  [data-nextjs-dialog-backdrop-fixed] {
    cursor: not-allowed;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = void 0;
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const styles = _noopTemplate.noop`
  [data-nextjs-terminal] {
    border-radius: var(--size-gap-half);
    background-color: var(--color-ansi-bg);
    color: var(--color-ansi-fg);
  }
  [data-nextjs-terminal]::selection,
  [data-nextjs-terminal] *::selection {
    background-color: var(--color-ansi-selection);
  }
  [data-nextjs-terminal] * {
    color: inherit;
    background-color: transparent;
    font-family: var(--font-stack-monospace);
  }
  [data-nextjs-terminal] > * {
    margin: 0;
    padding: calc(var(--size-gap) + var(--size-gap-half))
      calc(var(--size-gap-double) + var(--size-gap-half));
  }

  [data-nextjs-terminal] pre {
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dialog = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _object_without_properties_loose = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_object_without_properties_loose.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _useOnClickOutside = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js (ecmascript, ssr)");
const Dialog = function Dialog(_param) {
    var { children , type , onClose  } = _param, props = _object_without_properties_loose(_param, [
        "children",
        "type",
        "onClose"
    ]);
    const [dialog, setDialog] = React.useState(null);
    const onDialog = React.useCallback((node)=>{
        setDialog(node);
    }, []);
    (0, _useOnClickOutside).useOnClickOutside(dialog, onClose);
    React.useEffect(()=>{
        if (dialog == null) {
            return;
        }
        const root = dialog.getRootNode();
        if (!(root instanceof ShadowRoot)) {
            return;
        }
        const shadowRoot = root;
        function handler(e) {
            const el = shadowRoot.activeElement;
            if (e.key === 'Enter' && el instanceof HTMLElement && el.getAttribute('role') === 'link') {
                e.preventDefault();
                e.stopPropagation();
                el.click();
            }
        }
        shadowRoot.addEventListener('keydown', handler);
        return ()=>shadowRoot.removeEventListener('keydown', handler);
    }, [
        dialog
    ]);
    return React.createElement("div", {
        ref: onDialog,
        "data-nextjs-dialog": true,
        tabIndex: -1,
        role: "dialog",
        "aria-labelledby": props['aria-labelledby'],
        "aria-describedby": props['aria-describedby'],
        "aria-modal": "true"
    }, React.createElement("div", {
        "data-nextjs-dialog-banner": true,
        className: `banner-${type}`
    }), children);
};
exports.Dialog = Dialog;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogBody = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const DialogBody = function DialogBody({ children , className  }) {
    return React.createElement("div", {
        "data-nextjs-dialog-body": true,
        className: className
    }, children);
};
exports.DialogBody = DialogBody;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogContent = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const DialogContent = function DialogContent({ children , className  }) {
    return React.createElement("div", {
        "data-nextjs-dialog-content": true,
        className: className
    }, children);
};
exports.DialogContent = DialogContent;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DialogHeader = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const DialogHeader = function DialogHeader({ children , className  }) {
    return React.createElement("div", {
        "data-nextjs-dialog-header": true,
        className: className
    }, children);
};
exports.DialogHeader = DialogHeader;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = void 0;
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const styles = _noopTemplate.noop`
  [data-nextjs-dialog] {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    outline: none;
    background: white;
    border-radius: var(--size-gap);
    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)
      rgba(0, 0, 0, 0.25);
    max-height: calc(100% - 56px);
    overflow-y: hidden;
  }

  @media (max-height: 812px) {
    [data-nextjs-dialog-overlay] {
      max-height: calc(100% - 15px);
    }
  }

  @media (min-width: 576px) {
    [data-nextjs-dialog] {
      max-width: 540px;
      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);
    }
  }

  @media (min-width: 768px) {
    [data-nextjs-dialog] {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    [data-nextjs-dialog] {
      max-width: 960px;
    }
  }

  [data-nextjs-dialog-banner] {
    position: relative;
  }
  [data-nextjs-dialog-banner].banner-warning {
    border-color: var(--color-ansi-yellow);
  }
  [data-nextjs-dialog-banner].banner-error {
    border-color: var(--color-ansi-red);
  }

  [data-nextjs-dialog-banner]::after {
    z-index: 2;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    /* banner width: */
    border-top-width: var(--size-gap-half);
    border-bottom-width: 0;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: inherit;
    border-bottom-color: transparent;
  }

  [data-nextjs-dialog-content] {
    overflow-y: auto;
    border: none;
    margin: 0;
    /* calc(padding + banner width offset) */
    padding: calc(var(--size-gap-double) + var(--size-gap-half))
      var(--size-gap-double);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {
    flex-shrink: 0;
    margin-bottom: var(--size-gap-double);
  }
  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {
    position: relative;
    flex: 1 1 auto;
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Overlay = void 0;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _maintainTabFocus = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js (ecmascript, ssr)"));
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _bodyLocker = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js (ecmascript, ssr)");
const Overlay = function Overlay({ className , children , fixed  }) {
    React.useEffect(()=>{
        (0, _bodyLocker).lock();
        return ()=>{
            (0, _bodyLocker).unlock();
        };
    }, []);
    const [overlay, setOverlay] = React.useState(null);
    const onOverlay = React.useCallback((el)=>{
        setOverlay(el);
    }, []);
    React.useEffect(()=>{
        if (overlay == null) {
            return;
        }
        const handle2 = (0, _maintainTabFocus).default({
            context: overlay
        });
        return ()=>{
            handle2.disengage();
        };
    }, [
        overlay
    ]);
    return React.createElement("div", {
        "data-nextjs-dialog-overlay": true,
        className: className,
        ref: onOverlay
    }, React.createElement("div", {
        "data-nextjs-dialog-backdrop": true,
        "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined
    }), children);
};
exports.Overlay = Overlay;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Terminal = void 0;
var _extends = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_extends.js (ecmascript, ssr)").default;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _anser = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/anser/index.js (ecmascript, ssr)"));
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const Terminal = function Terminal({ content  }) {
    const decoded = React.useMemo(()=>{
        return _anser.default.ansiToJson(content, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        content
    ]);
    return React.createElement("div", {
        "data-nextjs-terminal": true
    }, React.createElement("pre", null, decoded.map((entry, index)=>React.createElement("span", {
            key: `terminal-entry-${index}`,
            style: _extends({
                color: entry.fg ? `var(--color-${entry.fg})` : undefined
            }, entry.decoration === 'bold' ? {
                fontWeight: 800
            } : entry.decoration === 'italic' ? {
                fontStyle: 'italic'
            } : undefined)
        }, entry.content))));
};
exports.Terminal = Terminal;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LeftRightDialogHeader = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _closeIcon = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js (ecmascript, ssr)");
const LeftRightDialogHeader = function LeftRightDialogHeader({ children , className , previous , next , close  }) {
    const buttonLeft = React.useRef(null);
    const buttonRight = React.useRef(null);
    const buttonClose = React.useRef(null);
    const [nav, setNav] = React.useState(null);
    const onNav = React.useCallback((el)=>{
        setNav(el);
    }, []);
    React.useEffect(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        const d = self.document;
        function handler(e) {
            if (e.key === 'ArrowLeft') {
                e.stopPropagation();
                if (buttonLeft.current) {
                    buttonLeft.current.focus();
                }
                previous && previous();
            } else if (e.key === 'ArrowRight') {
                e.stopPropagation();
                if (buttonRight.current) {
                    buttonRight.current.focus();
                }
                next && next();
            } else if (e.key === 'Escape') {
                e.stopPropagation();
                if (root instanceof ShadowRoot) {
                    const a = root.activeElement;
                    if (a && a !== buttonClose.current && a instanceof HTMLElement) {
                        a.blur();
                        return;
                    }
                }
                if (close) {
                    close();
                }
            }
        }
        root.addEventListener('keydown', handler);
        if (root !== d) {
            d.addEventListener('keydown', handler);
        }
        return function() {
            root.removeEventListener('keydown', handler);
            if (root !== d) {
                d.removeEventListener('keydown', handler);
            }
        };
    }, [
        close,
        nav,
        next,
        previous
    ]);
    React.useEffect(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        if (root instanceof ShadowRoot) {
            const a = root.activeElement;
            if (previous == null) {
                if (buttonLeft.current && a === buttonLeft.current) {
                    buttonLeft.current.blur();
                }
            } else if (next == null) {
                if (buttonRight.current && a === buttonRight.current) {
                    buttonRight.current.blur();
                }
            }
        }
    }, [
        nav,
        next,
        previous
    ]);
    return React.createElement("div", {
        "data-nextjs-dialog-left-right": true,
        className: className
    }, React.createElement("nav", {
        ref: onNav
    }, React.createElement("button", {
        ref: buttonLeft,
        type: "button",
        disabled: previous == null ? true : undefined,
        "aria-disabled": previous == null ? true : undefined,
        onClick: previous != null ? previous : undefined
    }, React.createElement("svg", {
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
        d: "M6.99996 1.16666L1.16663 6.99999L6.99996 12.8333M12.8333 6.99999H1.99996H12.8333Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), React.createElement("button", {
        ref: buttonRight,
        type: "button",
        disabled: next == null ? true : undefined,
        "aria-disabled": next == null ? true : undefined,
        onClick: next != null ? next : undefined
    }, React.createElement("svg", {
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
        d: "M6.99996 1.16666L12.8333 6.99999L6.99996 12.8333M1.16663 6.99999H12H1.16663Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))), "\xa0", children), close ? React.createElement("button", {
        "data-nextjs-errors-dialog-left-right-close-button": true,
        ref: buttonClose,
        type: "button",
        onClick: close,
        "aria-label": "Close"
    }, React.createElement("span", {
        "aria-hidden": "true"
    }, React.createElement(_closeIcon.CloseIcon, null))) : null);
};
exports.LeftRightDialogHeader = LeftRightDialogHeader;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.styles = void 0;
var _noopTemplate = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js (ecmascript, ssr)");
const styles = _noopTemplate.noop`
  [data-nextjs-toast] {
    position: fixed;
    bottom: var(--size-gap-double);
    left: var(--size-gap-double);
    max-width: 420px;
    z-index: 9000;
  }

  @media (max-width: 440px) {
    [data-nextjs-toast] {
      max-width: 90vw;
      left: 5vw;
    }
  }

  [data-nextjs-toast-wrapper] {
    padding: 16px;
    border-radius: var(--size-gap-half);
    font-weight: 500;
    color: var(--color-ansi-bright-white);
    background-color: var(--color-ansi-red);
    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)
      rgba(0, 0, 0, 0.25);
  }
`;
exports.styles = styles;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Toast = void 0;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
const Toast = function Toast({ onClick , children , className  }) {
    return React.createElement("div", {
        "data-nextjs-toast": true,
        onClick: onClick,
        className: className
    }, React.createElement("div", {
        "data-nextjs-toast-wrapper": true
    }, children));
};
exports.Toast = Toast;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOriginalStackFrame = getOriginalStackFrame;
exports.getOriginalStackFrames = getOriginalStackFrames;
exports.getFrameSource = getFrameSource;
var _async_to_generator = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_async_to_generator.js (ecmascript, ssr)").default;
function getOriginalStackFrame(source, type, errorMessage) {
    var ref7, ref1;
    function _getOriginalStackFrame() {
        return __getOriginalStackFrame.apply(this, arguments);
    }
    function __getOriginalStackFrame() {
        __getOriginalStackFrame = _async_to_generator(function*() {
            var ref, ref4, ref5;
            const params = new URLSearchParams();
            params.append('isServer', String(type === 'server'));
            params.append('isEdgeServer', String(type === 'edge-server'));
            params.append('isAppDirectory', 'true');
            params.append('errorMessage', errorMessage);
            for(const key in source){
                var _key;
                params.append(key, ((_key = source[key]) != null ? _key : '').toString());
            }
            const controller = new AbortController();
            const tm = setTimeout(()=>controller.abort(), 3000);
            const res = yield self.fetch(`${process.env.__NEXT_ROUTER_BASEPATH || ''}/__nextjs_original-stack-frame?${params.toString()}`, {
                signal: controller.signal
            }).finally(()=>{
                clearTimeout(tm);
            });
            if (!res.ok || res.status === 204) {
                return Promise.reject(new Error((yield res.text())));
            }
            const body = yield res.json();
            var ref6;
            return {
                error: false,
                reason: null,
                external: false,
                expanded: !Boolean((ref6 = ((ref = source.file) == null ? void 0 : ref.includes('node_modules')) || ((ref4 = body.originalStackFrame) == null ? void 0 : (ref5 = ref4.file) == null ? void 0 : ref5.includes('node_modules'))) != null ? ref6 : true),
                sourceStackFrame: source,
                originalStackFrame: body.originalStackFrame,
                originalCodeFrame: body.originalCodeFrame || null,
                sourcePackage: body.sourcePackage
            };
        });
        return __getOriginalStackFrame.apply(this, arguments);
    }
    if (!(((ref7 = source.file) == null ? void 0 : ref7.startsWith('webpack-internal:')) || ((ref1 = source.file) == null ? void 0 : ref1.startsWith('file:')))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        });
    }
    var ref2, ref3;
    return _getOriginalStackFrame().catch((err)=>{
        return {
            error: true,
            reason: (ref3 = (ref2 = err == null ? void 0 : err.message) != null ? ref2 : err == null ? void 0 : err.toString()) != null ? ref3 : 'Unknown Error',
            external: false,
            expanded: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null
        };
    });
}
function getOriginalStackFrames(frames, type, errorMessage) {
    return Promise.all(frames.map((frame)=>getOriginalStackFrame(frame, type, errorMessage)));
}
function getFrameSource(frame) {
    let str = '';
    try {
        var ref;
        const u = new URL(frame.file);
        if (typeof globalThis !== 'undefined' && ((ref = globalThis.location) == null ? void 0 : ref.origin) !== u.origin) {
            if (u.origin === 'null') {
                str += u.protocol;
            } else {
                str += u.origin;
            }
        }
        str += u.pathname;
        str += ' ';
    } catch (e) {
        str += (frame.file || '(unknown)') + ' ';
    }
    if (frame.lineNumber != null) {
        if (frame.column != null) {
            str += `(${frame.lineNumber}:${frame.column}) `;
        } else {
            str += `(${frame.lineNumber}) `;
        }
    }
    return str.slice(0, -1);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return _codeFrame.CodeFrame;
    }
});
var _codeFrame = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js (ecmascript, ssr)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.groupStackFramesByFramework = groupStackFramesByFramework;
function getFramework(sourcePackage) {
    if (!sourcePackage) return undefined;
    if (/^(react|react-dom|react-is|react-refresh|react-server-dom-webpack|scheduler)$/.test(sourcePackage)) {
        return 'react';
    } else if (sourcePackage === 'next') {
        return 'next';
    }
    return undefined;
}
function groupStackFramesByFramework(stackFrames) {
    const stackFramesGroupedByFramework = [];
    for (const stackFrame of stackFrames){
        const currentGroup = stackFramesGroupedByFramework[stackFramesGroupedByFramework.length - 1];
        const framework = getFramework(stackFrame.sourcePackage);
        if (currentGroup && currentGroup.framework === framework) {
            currentGroup.stackFrames.push(stackFrame);
        } else {
            stackFramesGroupedByFramework.push({
                framework: framework,
                stackFrames: [
                    stackFrame
                ]
            });
        }
    }
    return stackFramesGroupedByFramework;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CallStackFrame = void 0;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _react = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _stackFrame = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)");
const CallStackFrame = function CallStackFrame({ frame  }) {
    var _originalStackFrame;
    const f = (_originalStackFrame = frame.originalStackFrame) != null ? _originalStackFrame : frame.sourceStackFrame;
    const hasSource = Boolean(frame.originalCodeFrame);
    const open = _react.default.useCallback(()=>{
        if (!hasSource) return;
        const params = new URLSearchParams();
        for(const key in f){
            var _key;
            params.append(key, ((_key = f[key]) != null ? _key : '').toString());
        }
        self.fetch(`${process.env.__NEXT_ROUTER_BASEPATH || ''}/__nextjs_launch-editor?${params.toString()}`).then(()=>{}, ()=>{
            console.error('There was an issue opening this code in your editor.');
        });
    }, [
        hasSource,
        f
    ]);
    return _react.default.createElement("div", {
        "data-nextjs-call-stack-frame": true
    }, _react.default.createElement("h6", {
        "data-nextjs-frame-expanded": Boolean(frame.expanded)
    }, f.methodName), _react.default.createElement("div", {
        "data-has-source": hasSource ? 'true' : undefined,
        tabIndex: hasSource ? 10 : undefined,
        role: hasSource ? 'link' : undefined,
        onClick: open,
        title: hasSource ? 'Click to open in your editor' : undefined
    }, _react.default.createElement("span", null, (0, _stackFrame).getFrameSource(f)), _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, _react.default.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), _react.default.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), _react.default.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    }))));
};
exports.CallStackFrame = CallStackFrame;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupedStackFrames = GroupedStackFrames;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _react = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _callStackFrame = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js (ecmascript, ssr)");
var _frameworkIcon = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/FrameworkIcon.js (ecmascript, ssr)");
function FrameworkGroup({ framework , stackFrames , all  }) {
    const [open, setOpen] = _react.default.useState(false);
    const toggleOpen = _react.default.useCallback(()=>setOpen((v)=>!v), []);
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
        "data-nextjs-call-stack-framework-button": true,
        "data-state": open ? 'open' : 'closed',
        onClick: toggleOpen,
        tabIndex: 10
    }, _react.default.createElement("svg", {
        "data-nextjs-call-stack-chevron-icon": true,
        fill: "none",
        height: "20",
        width: "20",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24"
    }, _react.default.createElement("path", {
        d: "M9 18l6-6-6-6"
    })), _react.default.createElement(_frameworkIcon.FrameworkIcon, {
        framework: framework
    }), framework === 'react' ? 'React' : 'Next.js'), open ? stackFrames.map((frame, index)=>_react.default.createElement(_callStackFrame.CallStackFrame, {
            key: `call-stack-${index}-${all}`,
            frame: frame
        })) : null);
}
function GroupedStackFrames({ groupedStackFrames , all  }) {
    return _react.default.createElement(_react.default.Fragment, null, groupedStackFrames.map((stackFramesGroup, groupIndex)=>{
        if (stackFramesGroup.framework) {
            return _react.default.createElement(FrameworkGroup, {
                key: `call-stack-framework-group-${groupIndex}-${all}`,
                framework: stackFramesGroup.framework,
                stackFrames: stackFramesGroup.stackFrames,
                all: all
            });
        }
        return stackFramesGroup.stackFrames.map((frame, frameIndex)=>_react.default.createElement(_callStackFrame.CallStackFrame, {
                key: `call-stack-${groupIndex}-${frameIndex}-${all}`,
                frame: frame
            }));
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.useOnClickOutside = useOnClickOutside;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function useOnClickOutside(el, handler) {
    React.useEffect(()=>{
        if (el == null || handler == null) {
            return;
        }
        const listener = (e)=>{
            if (!el || el.contains(e.target)) {
                return;
            }
            handler(e);
        };
        const root = el.getRootNode();
        root.addEventListener('mousedown', listener);
        root.addEventListener('touchstart', listener);
        return function() {
            root.removeEventListener('mousedown', listener);
            root.removeEventListener('touchstart', listener);
        };
    }, [
        handler,
        el
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _default;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _platform = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/platform/platform.js (ecmascript, ssr)"));
var _cssEscape = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/css.escape/css.escape.js (ecmascript, ssr)"));
function nodeArray(input) {
    if (!input) {
        return [];
    }
    if (Array.isArray(input)) {
        return input;
    }
    if (input.nodeType !== undefined) {
        return [
            input
        ];
    }
    if (typeof input === 'string') {
        input = document.querySelectorAll(input);
    }
    if (input.length !== undefined) {
        return [].slice.call(input, 0);
    }
    throw new TypeError('unexpected input ' + String(input));
}
function contextToElement(_ref) {
    var context = _ref.context, _ref$label = _ref.label, label = _ref$label === undefined ? 'context-to-element' : _ref$label, resolveDocument = _ref.resolveDocument, defaultToDocument = _ref.defaultToDocument;
    var element = nodeArray(context)[0];
    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
        element = element.documentElement;
    }
    if (!element && defaultToDocument) {
        return document.documentElement;
    }
    if (!element) {
        throw new TypeError(label + ' requires valid options.context');
    }
    if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        throw new TypeError(label + ' requires options.context to be an Element');
    }
    return element;
}
function getShadowHost() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var element = contextToElement({
        label: 'get/shadow-host',
        context: context
    });
    var container = null;
    while(element){
        container = element;
        element = element.parentNode;
    }
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
        return container.host;
    }
    return null;
}
function getDocument(node) {
    if (!node) {
        return document;
    }
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    return node.ownerDocument || document;
}
function isActiveElement(context) {
    var element = contextToElement({
        label: 'is/active-element',
        resolveDocument: true,
        context: context
    });
    var _document = getDocument(element);
    if (_document.activeElement === element) {
        return true;
    }
    var shadowHost = getShadowHost({
        context: element
    });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
        return true;
    }
    return false;
}
function getParents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var list = [];
    var element = contextToElement({
        label: 'get/parents',
        context: context
    });
    while(element){
        list.push(element);
        element = element.parentNode;
        if (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = null;
        }
    }
    return list;
}
var names = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector'
];
var name = null;
function findMethodName(element) {
    names.some(function(_name) {
        if (!element[_name]) {
            return false;
        }
        name = _name;
        return true;
    });
}
function elementMatches(element, selector1) {
    if (!name) {
        findMethodName(element);
    }
    return element[name](selector1);
}
var platform = JSON.parse(JSON.stringify(_platform.default));
var os = platform.os.family || '';
var ANDROID = os === 'Android';
var WINDOWS = os.slice(0, 7) === 'Windows';
var OSX = os === 'OS X';
var IOS = os === 'iOS';
var BLINK = platform.layout === 'Blink';
var GECKO = platform.layout === 'Gecko';
var TRIDENT = platform.layout === 'Trident';
var EDGE = platform.layout === 'EdgeHTML';
var WEBKIT = platform.layout === 'WebKit';
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    BLINK: BLINK,
    GECKO: GECKO,
    TRIDENT: TRIDENT,
    EDGE: EDGE,
    WEBKIT: WEBKIT,
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
};
function before() {
    var data = {
        activeElement: document.activeElement,
        windowScrollTop: window.scrollTop,
        windowScrollLeft: window.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft
    };
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
    iframe.setAttribute('aria-live', 'off');
    iframe.setAttribute('aria-busy', 'true');
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);
    var _window = iframe.contentWindow;
    var _document = _window.document;
    _document.open();
    _document.close();
    var wrapper = _document.createElement('div');
    _document.body.appendChild(wrapper);
    data.iframe = iframe;
    data.wrapper = wrapper;
    data.window = _window;
    data.document = _document;
    return data;
}
function test(data, options) {
    data.wrapper.innerHTML = '';
    var element = typeof options.element === 'string' ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
    var focus1 = options.mutate && options.mutate(element, data.wrapper, data.document);
    if (!focus1 && focus1 !== false) {
        focus1 = element;
    }
    !element.parentNode && data.wrapper.appendChild(element);
    focus1 && focus1.focus && focus1.focus();
    return options.validate ? options.validate(element, focus1, data.document) : data.document.activeElement === focus1;
}
function after(data) {
    if (data.activeElement === document.body) {
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        if (platform.is.IE10) {
            document.body.focus();
        }
    } else {
        data.activeElement && data.activeElement.focus && data.activeElement.focus();
    }
    document.body.removeChild(data.iframe);
    window.scrollTop = data.windowScrollTop;
    window.scrollLeft = data.windowScrollLeft;
    document.body.scrollTop = data.bodyScrollTop;
    document.body.scrollLeft = data.bodyScrollLeft;
}
function detectFocus(tests) {
    var data = before();
    var results = {};
    Object.keys(tests).map(function(key) {
        results[key] = test(data, tests[key]);
    });
    after(data);
    return results;
}
var version$1 = '1.4.1';
function readLocalStorage(key) {
    var data = void 0;
    try {
        data = window.localStorage && window.localStorage.getItem(key);
        data = data ? JSON.parse(data) : {};
    } catch (e) {
        data = {};
    }
    return data;
}
function writeLocalStorage(key, value) {
    if (!document.hasFocus()) {
        try {
            window.localStorage && window.localStorage.removeItem(key);
        } catch (e) {}
        return;
    }
    try {
        window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
}
var userAgent = typeof window !== 'undefined' && window.navigator.userAgent || '';
var cacheKey = 'ally-supports-cache';
var cache = readLocalStorage(cacheKey);
if (cache.userAgent !== userAgent || cache.version !== version$1) {
    cache = {};
}
cache.userAgent = userAgent;
cache.version = version$1;
var cache$1 = {
    get: function get() {
        return cache;
    },
    set: function set(values) {
        Object.keys(values).forEach(function(key) {
            cache[key] = values[key];
        });
        cache.time = new Date().toISOString();
        writeLocalStorage(cacheKey, cache);
    }
};
function cssShadowPiercingDeepCombinator() {
    var combinator = void 0;
    try {
        document.querySelector('html >>> :first-child');
        combinator = '>>>';
    } catch (noArrowArrowArrow) {
        try {
            document.querySelector('html /deep/ :first-child');
            combinator = '/deep/';
        } catch (noDeep) {
            combinator = '';
        }
    }
    return combinator;
}
var gif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var focusAreaImgTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + gif + '">';
        return element.querySelector('area');
    }
};
var focusAreaTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + gif + '">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            return true;
        }
        var focus2 = element.querySelector('area');
        focus2.focus();
        return _document.activeElement === focus2;
    }
};
var focusAreaWithoutHref = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + gif + '">';
        return element.querySelector('area');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            return true;
        }
        return _document.activeElement === focusTarget;
    }
};
var focusAudioWithoutControls = {
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
        try {
            element.setAttribute('src', gif);
        } catch (e) {}
    }
};
var invalidGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
var focusBrokenImageMap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + invalidGif + '">';
        return element.querySelector('area');
    }
};
var focusChildrenOfFocusableFlexbox = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
        return element.querySelector('span');
    }
};
var focusFieldsetDisabled = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
var focusFieldset = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
};
var focusFlexboxContainer = {
    element: 'span',
    mutate: function mutate(element) {
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
    }
};
var focusFormDisabled = {
    element: 'form',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
var focusImgIsmap = {
    element: 'a',
    mutate: function mutate(element) {
        element.href = '#void';
        element.innerHTML = '<img ismap src="' + gif + '" alt="">';
        return element.querySelector('img');
    }
};
var focusImgUsemapTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + gif + '">';
        return element.querySelector('img');
    }
};
var focusInHiddenIframe = {
    element: function element(wrapper, _document) {
        var iframe = _document.createElement('iframe');
        wrapper.appendChild(iframe);
        var iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.close();
        return iframe;
    },
    mutate: function mutate(iframe) {
        iframe.style.visibility = 'hidden';
        var iframeDocument = iframe.contentWindow.document;
        var input = iframeDocument.createElement('input');
        iframeDocument.body.appendChild(input);
        return input;
    },
    validate: function validate(iframe) {
        var iframeDocument = iframe.contentWindow.document;
        var focus3 = iframeDocument.querySelector('input');
        return iframeDocument.activeElement === focus3;
    }
};
var result = !platform.is.WEBKIT;
function focusInZeroDimensionObject() {
    return result;
}
var focusInvalidTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 'invalid-value');
    }
};
var focusLabelTabindex = {
    element: 'label',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
    },
    validate: function validate(element, focusTarget, _document) {
        var variableToPreventDeadCodeElimination = element.offsetHeight;
        element.focus();
        return _document.activeElement === element;
    }
};
var svg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' + 'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' + 'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==';
var focusObjectSvgHidden = {
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
        element.style.visibility = 'hidden';
    }
};
var focusObjectSvg = {
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            return true;
        }
        return _document.activeElement === element;
    }
};
var result$1 = !platform.is.IE9;
function focusObjectSwf() {
    return result$1;
}
var focusRedirectImgUsemap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + gif + '">';
        return element.querySelector('img');
    },
    validate: function validate(element, focusTarget, _document) {
        var target = element.querySelector('area');
        return _document.activeElement === target;
    }
};
var focusRedirectLegend = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');
        element.focus();
        element.querySelector('legend').focus();
        return _document.activeElement === focusable && 'focusable' || _document.activeElement === tabbable && 'tabbable' || '';
    }
};
var focusScrollBody = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
        return element.querySelector('div');
    }
};
var focusScrollContainerWithoutOverflow = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusScrollContainer = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusSummary = {
    element: 'details',
    mutate: function mutate(element) {
        element.innerHTML = '<summary>foo</summary><p>content</p>';
        return element.firstElementChild;
    }
};
function makeFocusableForeignObject() {
    var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignObject.width.baseVal.value = 30;
    foreignObject.height.baseVal.value = 30;
    foreignObject.appendChild(document.createElement('input'));
    foreignObject.lastChild.type = 'text';
    return foreignObject;
}
function focusSvgForeignObjectHack(element) {
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (!isSvgElement) {
        return false;
    }
    var foreignObject = makeFocusableForeignObject();
    element.appendChild(foreignObject);
    var input = foreignObject.querySelector('input');
    input.focus();
    input.disabled = true;
    element.removeChild(foreignObject);
    return true;
}
function generate(element) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + '</svg>';
}
function focus(element) {
    if (element.focus) {
        return;
    }
    try {
        HTMLElement.prototype.focus.call(element);
    } catch (e) {
        focusSvgForeignObjectHack(element);
    }
}
function validate(element, focusTarget, _document) {
    focus(focusTarget);
    return _document.activeElement === focusTarget;
}
var focusSvgFocusableAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text focusable="true">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="0">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgNegativeTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="-1">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgUseTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate([
            '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
            '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'
        ].join(''));
        return element.querySelector('use');
    },
    validate: validate
};
var focusSvgForeignobjectTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
        return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
    },
    validate: validate
};
var result$2 = Boolean(platform.is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);
function focusSvgInIframe() {
    return result$2;
}
var focusSvg = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('');
        return element.firstChild;
    },
    validate: validate
};
var focusTabindexTrailingCharacters = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '3x');
    }
};
var focusTable = {
    element: 'table',
    mutate: function mutate(element, wrapper, _document) {
        var fragment = _document.createDocumentFragment();
        fragment.innerHTML = '<tr><td>cell</td></tr>';
        element.appendChild(fragment);
    }
};
var focusVideoWithoutControls = {
    element: 'video',
    mutate: function mutate(element) {
        try {
            element.setAttribute('src', gif);
        } catch (e) {}
    }
};
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE;
function tabsequenceAreaAtImgPosition() {
    return result$3;
}
var testCallbacks = {
    cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
    focusInZeroDimensionObject: focusInZeroDimensionObject,
    focusObjectSwf: focusObjectSwf,
    focusSvgInIframe: focusSvgInIframe,
    tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition
};
var testDescriptions = {
    focusAreaImgTabindex: focusAreaImgTabindex,
    focusAreaTabindex: focusAreaTabindex,
    focusAreaWithoutHref: focusAreaWithoutHref,
    focusAudioWithoutControls: focusAudioWithoutControls,
    focusBrokenImageMap: focusBrokenImageMap,
    focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
    focusFieldsetDisabled: focusFieldsetDisabled,
    focusFieldset: focusFieldset,
    focusFlexboxContainer: focusFlexboxContainer,
    focusFormDisabled: focusFormDisabled,
    focusImgIsmap: focusImgIsmap,
    focusImgUsemapTabindex: focusImgUsemapTabindex,
    focusInHiddenIframe: focusInHiddenIframe,
    focusInvalidTabindex: focusInvalidTabindex,
    focusLabelTabindex: focusLabelTabindex,
    focusObjectSvg: focusObjectSvg,
    focusObjectSvgHidden: focusObjectSvgHidden,
    focusRedirectImgUsemap: focusRedirectImgUsemap,
    focusRedirectLegend: focusRedirectLegend,
    focusScrollBody: focusScrollBody,
    focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
    focusScrollContainer: focusScrollContainer,
    focusSummary: focusSummary,
    focusSvgFocusableAttribute: focusSvgFocusableAttribute,
    focusSvgTabindexAttribute: focusSvgTabindexAttribute,
    focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
    focusSvgUseTabindex: focusSvgUseTabindex,
    focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
    focusSvg: focusSvg,
    focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
    focusTable: focusTable,
    focusVideoWithoutControls: focusVideoWithoutControls
};
function executeTests() {
    var results = detectFocus(testDescriptions);
    Object.keys(testCallbacks).forEach(function(key) {
        results[key] = testCallbacks[key]();
    });
    return results;
}
var supportsCache = null;
function _supports() {
    if (supportsCache) {
        return supportsCache;
    }
    supportsCache = cache$1.get();
    if (!supportsCache.time) {
        cache$1.set(executeTests());
        supportsCache = cache$1.get();
    }
    return supportsCache;
}
var supports = void 0;
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
function isValidTabindex(context) {
    if (!supports) {
        supports = _supports();
    }
    var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;
    var element = contextToElement({
        label: 'is/valid-tabindex',
        resolveDocument: true,
        context: context
    });
    var hasTabindex = element.hasAttribute('tabindex');
    var hasTabIndex = element.hasAttribute('tabIndex');
    if (!hasTabindex && !hasTabIndex) {
        return false;
    }
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (isSvgElement && !supports.focusSvgTabindexAttribute) {
        return false;
    }
    if (supports.focusInvalidTabindex) {
        return true;
    }
    var tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
    if (tabindex === '-32768') {
        return false;
    }
    return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
function tabindexValue(element) {
    if (!isValidTabindex(element)) {
        return null;
    }
    var hasTabindex = element.hasAttribute('tabindex');
    var attributeName = hasTabindex ? 'tabindex' : 'tabIndex';
    var tabindex = parseInt(element.getAttribute(attributeName), 10);
    return isNaN(tabindex) ? -1 : tabindex;
}
function isUserModifyWritable(style) {
    var userModify = style.webkitUserModify || '';
    return Boolean(userModify && userModify.indexOf('write') !== -1);
}
function hasCssOverflowScroll(style) {
    return [
        style.getPropertyValue('overflow'),
        style.getPropertyValue('overflow-x'),
        style.getPropertyValue('overflow-y')
    ].some(function(overflow) {
        return overflow === 'auto' || overflow === 'scroll';
    });
}
function hasCssDisplayFlex(style) {
    return style.display.indexOf('flex') > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
    if (nodeName !== 'div' && nodeName !== 'span') {
        return false;
    }
    if (parentNodeName && parentNodeName !== 'div' && parentNodeName !== 'span' && !hasCssOverflowScroll(parentStyle)) {
        return false;
    }
    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}
var supports$1 = void 0;
function isFocusRelevantRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false
    } : _ref$except;
    if (!supports$1) {
        supports$1 = _supports();
    }
    var element = contextToElement({
        label: 'is/focus-relevant',
        resolveDocument: true,
        context: context
    });
    if (!except.shadow && element.shadowRoot) {
        return true;
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'input' && element.type === 'hidden') {
        return false;
    }
    if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
        return true;
    }
    if (nodeName === 'legend' && supports$1.focusRedirectLegend) {
        return true;
    }
    if (nodeName === 'label') {
        return true;
    }
    if (nodeName === 'area') {
        return true;
    }
    if (nodeName === 'a' && element.hasAttribute('href')) {
        return true;
    }
    if (nodeName === 'object' && element.hasAttribute('usemap')) {
        return false;
    }
    if (nodeName === 'object') {
        var svgType = element.getAttribute('type');
        if (!supports$1.focusObjectSvg && svgType === 'image/svg+xml') {
            return false;
        } else if (!supports$1.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
            return false;
        }
    }
    if (nodeName === 'iframe' || nodeName === 'object') {
        return true;
    }
    if (nodeName === 'embed' || nodeName === 'keygen') {
        return true;
    }
    if (element.hasAttribute('contenteditable')) {
        return true;
    }
    if (nodeName === 'audio' && (supports$1.focusAudioWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (nodeName === 'video' && (supports$1.focusVideoWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (supports$1.focusSummary && nodeName === 'summary') {
        return true;
    }
    var validTabindex = isValidTabindex(element);
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        return validTabindex && supports$1.focusImgUsemapTabindex || supports$1.focusRedirectImgUsemap;
    }
    if (supports$1.focusTable && (nodeName === 'table' || nodeName === 'td')) {
        return true;
    }
    if (supports$1.focusFieldset && nodeName === 'fieldset') {
        return true;
    }
    var isSvgElement = nodeName === 'svg';
    var isSvgContent = element.ownerSVGElement;
    var focusableAttribute = element.getAttribute('focusable');
    var tabindex = tabindexValue(element);
    if (nodeName === 'use' && tabindex !== null && !supports$1.focusSvgUseTabindex) {
        return false;
    }
    if (nodeName === 'foreignobject') {
        return tabindex !== null && supports$1.focusSvgForeignobjectTabindex;
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        return true;
    }
    if ((isSvgElement || isSvgContent) && element.focus && !supports$1.focusSvgNegativeTabindexAttribute && tabindex < 0) {
        return false;
    }
    if (isSvgElement) {
        return validTabindex || supports$1.focusSvg || supports$1.focusSvgInIframe || Boolean(supports$1.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
    }
    if (isSvgContent) {
        if (supports$1.focusSvgTabindexAttribute && validTabindex) {
            return true;
        }
        if (supports$1.focusSvgFocusableAttribute) {
            return focusableAttribute === 'true';
        }
    }
    if (validTabindex) {
        return true;
    }
    var style = window.getComputedStyle(element, null);
    if (isUserModifyWritable(style)) {
        return true;
    }
    if (supports$1.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
        var hasLinkParent = getParents({
            context: element
        }).some(function(parent) {
            return parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href');
        });
        if (hasLinkParent) {
            return true;
        }
    }
    if (!except.scrollable && supports$1.focusScrollContainer) {
        if (supports$1.focusScrollContainerWithoutOverflow) {
            if (isScrollableContainer(element, nodeName)) {
                return true;
            }
        } else if (hasCssOverflowScroll(style)) {
            return true;
        }
    }
    if (!except.flexbox && supports$1.focusFlexboxContainer && hasCssDisplayFlex(style)) {
        return true;
    }
    var parent1 = element.parentElement;
    if (!except.scrollable && parent1) {
        var parentNodeName = parent1.nodeName.toLowerCase();
        var parentStyle = window.getComputedStyle(parent1, null);
        if (supports$1.focusScrollBody && isScrollableContainer(parent1, nodeName, parentNodeName, parentStyle)) {
            return true;
        }
        if (supports$1.focusChildrenOfFocusableFlexbox) {
            if (hasCssDisplayFlex(parentStyle)) {
                return true;
            }
        }
    }
    return false;
}
isFocusRelevantRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusRelevant1 = function isFocusRelevant(context) {
        return isFocusRelevantRules({
            context: context,
            except: except
        });
    };
    isFocusRelevant1.rules = isFocusRelevantRules;
    return isFocusRelevant1;
};
var isFocusRelevant = isFocusRelevantRules.except({});
function findIndex(array, callback) {
    if (array.findIndex) {
        return array.findIndex(callback);
    }
    var length = array.length;
    if (length === 0) {
        return -1;
    }
    for(var i = 0; i < length; i++){
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
function getContentDocument(node) {
    try {
        return node.contentDocument || node.contentWindow && node.contentWindow.document || node.getSVGDocument && node.getSVGDocument() || null;
    } catch (e) {
        return null;
    }
}
function getWindow(node) {
    var _document = getDocument(node);
    return _document.defaultView || window;
}
var shadowPrefix = void 0;
function selectInShadows(selector2) {
    if (typeof shadowPrefix !== 'string') {
        var operator = cssShadowPiercingDeepCombinator();
        if (operator) {
            shadowPrefix = ', html ' + operator + ' ';
        }
    }
    if (!shadowPrefix) {
        return selector2;
    }
    return selector2 + shadowPrefix + selector2.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
}
var selector = void 0;
function findDocumentHostElement(_window) {
    if (!selector) {
        selector = selectInShadows('object, iframe');
    }
    if (_window._frameElement !== undefined) {
        return _window._frameElement;
    }
    _window._frameElement = null;
    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function(element) {
        var _document = getContentDocument(element);
        if (_document !== _window.document) {
            return false;
        }
        _window._frameElement = element;
        return true;
    });
    return _window._frameElement;
}
function getFrameElement(element) {
    var _window = getWindow(element);
    if (!_window.parent || _window.parent === _window) {
        return null;
    }
    try {
        return _window.frameElement || findDocumentHostElement(_window);
    } catch (e) {
        return null;
    }
}
var notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
    return _path.some(function(element) {
        return computedStyle(element, 'display') === 'none';
    });
}
function notVisible(_path) {
    var hidden = findIndex(_path, function(element) {
        var visibility = computedStyle(element, 'visibility');
        return visibility === 'hidden' || visibility === 'collapse';
    });
    if (hidden === -1) {
        return false;
    }
    var visible = findIndex(_path, function(element) {
        return computedStyle(element, 'visibility') === 'visible';
    });
    if (visible === -1) {
        return true;
    }
    if (hidden < visible) {
        return true;
    }
    return false;
}
function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === 'summary') {
        offset = 2;
    }
    return _path.slice(offset).some(function(element) {
        return element.nodeName.toLowerCase() === 'details' && element.open === false;
    });
}
function isVisibleRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        notRendered: false,
        cssDisplay: false,
        cssVisibility: false,
        detailsElement: false,
        browsingContext: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/visible',
        resolveDocument: true,
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
        return true;
    }
    var _path = getParents({
        context: element
    });
    var isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
    if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
        return false;
    }
    if (!except.cssVisibility && notVisible(_path)) {
        return false;
    }
    if (!except.detailsElement && collapsedParent(_path)) {
        return false;
    }
    if (!except.browsingContext) {
        var frameElement = getFrameElement(element);
        var _isVisible = isVisibleRules.except(except);
        if (frameElement && !_isVisible(frameElement)) {
            return false;
        }
    }
    return true;
}
isVisibleRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isVisible1 = function isVisible(context) {
        return isVisibleRules({
            context: context,
            except: except
        });
    };
    isVisible1.rules = isVisibleRules;
    return isVisible1;
};
var isVisible = isVisibleRules.except({});
function getMapByName(name1, _document) {
    var map = _document.querySelector('map[name="' + (0, _cssEscape).default(name1) + '"]');
    return map || null;
}
function getImageOfArea(element) {
    var map = element.parentElement;
    if (!map.name || map.nodeName.toLowerCase() !== 'map') {
        return null;
    }
    var _document = getDocument(element);
    return _document.querySelector('img[usemap="#' + (0, _cssEscape).default(map.name) + '"]') || null;
}
var supports$2 = void 0;
function isValidArea(context) {
    if (!supports$2) {
        supports$2 = _supports();
    }
    var element = contextToElement({
        label: 'is/valid-area',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'area') {
        return false;
    }
    var hasTabindex = element.hasAttribute('tabindex');
    if (!supports$2.focusAreaTabindex && hasTabindex) {
        return false;
    }
    var img = getImageOfArea(element);
    if (!img || !isVisible(img)) {
        return false;
    }
    if (!supports$2.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
        return false;
    }
    if (!supports$2.focusAreaWithoutHref && !element.href) {
        return supports$2.focusAreaTabindex && hasTabindex || supports$2.focusAreaImgTabindex && img.hasAttribute('tabindex');
    }
    var childOfInteractive = getParents({
        context: img
    }).slice(1).some(function(_element) {
        var name2 = _element.nodeName.toLowerCase();
        return name2 === 'button' || name2 === 'a';
    });
    if (childOfInteractive) {
        return false;
    }
    return true;
}
var supports$3 = void 0;
var disabledElementsPattern = void 0;
var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
};
function isNativeDisabledSupported(context) {
    if (!supports$3) {
        supports$3 = _supports();
        if (supports$3.focusFieldsetDisabled) {
            delete disabledElements.fieldset;
        }
        if (supports$3.focusFormDisabled) {
            delete disabledElements.form;
        }
        disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
    }
    var element = contextToElement({
        label: 'is/native-disabled-supported',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
}
var supports$4 = void 0;
function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'fieldset' && element.disabled;
}
function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'form' && element.disabled;
}
function isDisabled(context) {
    if (!supports$4) {
        supports$4 = _supports();
    }
    var element = contextToElement({
        label: 'is/disabled',
        context: context
    });
    if (element.hasAttribute('data-ally-disabled')) {
        return true;
    }
    if (!isNativeDisabledSupported(element)) {
        return false;
    }
    if (element.disabled) {
        return true;
    }
    var parents = getParents({
        context: element
    });
    if (parents.some(isDisabledFieldset)) {
        return true;
    }
    if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
        return true;
    }
    return false;
}
function isOnlyTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        onlyFocusableBrowsingContext: false,
        visible: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/only-tabbable',
        resolveDocument: true,
        context: context
    });
    if (!except.visible && !isVisible(element)) {
        return false;
    }
    if (!except.onlyFocusableBrowsingContext && (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)) {
        var frameElement = getFrameElement(element);
        if (frameElement) {
            if (tabindexValue(frameElement) < 0) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var tabindex = tabindexValue(element);
    if (nodeName === 'label' && platform.is.GECKO) {
        return tabindex !== null && tabindex >= 0;
    }
    if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
        if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
            if (platform.is.GECKO) {
                return true;
            }
        }
    }
    return false;
}
isOnlyTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOnlyTabbable1 = function isOnlyTabbable(context) {
        return isOnlyTabbableRules({
            context: context,
            except: except
        });
    };
    isOnlyTabbable1.rules = isOnlyTabbableRules;
    return isOnlyTabbable1;
};
var isOnlyTabbable = isOnlyTabbableRules.except({});
var supports$5 = void 0;
function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'embed' || nodeName === 'keygen') {
        return true;
    }
    var _tabindex = tabindexValue(element);
    if (element.shadowRoot && _tabindex === null) {
        return true;
    }
    if (nodeName === 'label') {
        return !supports$5.focusLabelTabindex || _tabindex === null;
    }
    if (nodeName === 'legend') {
        return _tabindex === null;
    }
    if (supports$5.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
        var focusableAttribute = element.getAttribute('focusable');
        return focusableAttribute && focusableAttribute === 'false';
    }
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        return _tabindex === null || !supports$5.focusImgUsemapTabindex;
    }
    if (nodeName === 'area') {
        return !isValidArea(element);
    }
    return false;
}
function isFocusableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        disabled: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$5) {
        supports$5 = _supports();
    }
    var _isOnlyTabbable = isOnlyTabbable.rules.except({
        onlyFocusableBrowsingContext: true,
        visible: except.visible
    });
    var element = contextToElement({
        label: 'is/focusable',
        resolveDocument: true,
        context: context
    });
    var focusRelevant = isFocusRelevant.rules({
        context: element,
        except: except
    });
    if (!focusRelevant || isOnlyFocusRelevant(element)) {
        return false;
    }
    if (!except.disabled && isDisabled(element)) {
        return false;
    }
    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
        return false;
    }
    if (!except.visible) {
        var visibilityOptions = {
            context: element,
            except: {}
        };
        if (supports$5.focusInHiddenIframe) {
            visibilityOptions.except.browsingContext = true;
        }
        if (supports$5.focusObjectSvgHidden) {
            var _nodeName2 = element.nodeName.toLowerCase();
            if (_nodeName2 === 'object') {
                visibilityOptions.except.cssVisibility = true;
            }
        }
        if (!isVisible.rules(visibilityOptions)) {
            return false;
        }
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        var _nodeName = frameElement.nodeName.toLowerCase();
        if (_nodeName === 'object' && !supports$5.focusInZeroDimensionObject) {
            if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'svg' && supports$5.focusSvgInIframe && !frameElement && element.getAttribute('tabindex') === null) {
        return false;
    }
    return true;
}
isFocusableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusable1 = function isFocusable(context) {
        return isFocusableRules({
            context: context,
            except: except
        });
    };
    isFocusable1.rules = isFocusableRules;
    return isFocusable1;
};
var isFocusable = isFocusableRules.except({});
function createFilter(condition) {
    var filter = function filter(node) {
        if (node.shadowRoot) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (condition(node)) {
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
    };
    filter.acceptNode = filter;
    return filter;
}
var PossiblyFocusableFilter = createFilter(isFocusRelevant);
function queryFocusableStrict() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!context) {
        context = document.documentElement;
    }
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var _document = getDocument(context);
    var walker = _document.createTreeWalker(context, NodeFilter.SHOW_ELEMENT, strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable), false);
    var list = [];
    while(walker.nextNode()){
        if (walker.currentNode.shadowRoot) {
            if (_isFocusable(walker.currentNode)) {
                list.push(walker.currentNode);
            }
            list = list.concat(queryFocusableStrict({
                context: walker.currentNode.shadowRoot,
                includeOnlyTabbable: includeOnlyTabbable,
                strategy: strategy
            }));
        } else {
            list.push(walker.currentNode);
        }
    }
    if (includeContext) {
        if (strategy === 'all') {
            if (isFocusRelevant(context)) {
                list.unshift(context);
            }
        } else if (_isFocusable(context)) {
            list.unshift(context);
        }
    }
    return list;
}
var supports$6 = void 0;
var selector$1 = void 0;
function selector$2() {
    if (!supports$6) {
        supports$6 = _supports();
    }
    if (typeof selector$1 === 'string') {
        return selector$1;
    }
    selector$1 = '' + (supports$6.focusTable ? 'table, td,' : '') + (supports$6.focusFieldset ? 'fieldset,' : '') + 'svg a,' + 'a[href],' + 'area[href],' + 'input, select, textarea, button,' + 'iframe, object, embed,' + 'keygen,' + (supports$6.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports$6.focusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports$6.focusSummary ? 'summary,' : '') + '[tabindex],' + '[contenteditable]';
    selector$1 = selectInShadows(selector$1);
    return selector$1;
}
function queryFocusableQuick() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _selector = selector$2();
    var elements = context.querySelectorAll(_selector);
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var result1 = [].filter.call(elements, _isFocusable);
    if (includeContext && _isFocusable(context)) {
        result1.unshift(context);
    }
    return result1;
}
function queryFocusable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, _ref$strategy = _ref.strategy, strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;
    var element = contextToElement({
        label: 'query/focusable',
        resolveDocument: true,
        defaultToDocument: true,
        context: context
    });
    var options = {
        context: element,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    };
    if (strategy === 'quick') {
        return queryFocusableQuick(options);
    } else if (strategy === 'strict' || strategy === 'all') {
        return queryFocusableStrict(options);
    }
    throw new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]');
}
var supports$7 = void 0;
var focusableElementsPattern = /^(fieldset|table|td|body)$/;
function isTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$7) {
        supports$7 = _supports();
    }
    var element = contextToElement({
        label: 'is/tabbable',
        resolveDocument: true,
        context: context
    });
    if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
        return false;
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        if (platform.is.WEBKIT && platform.is.IOS) {
            return false;
        }
        if (tabindexValue(frameElement) < 0) {
            return false;
        }
        if (!except.visible && (platform.is.BLINK || platform.is.WEBKIT) && !isVisible(frameElement)) {
            return false;
        }
        var frameNodeName = frameElement.nodeName.toLowerCase();
        if (frameNodeName === 'object') {
            var isFixedBlink = platform.name === 'Chrome' && platform.majorVersion >= 54 || platform.name === 'Opera' && platform.majorVersion >= 41;
            if (platform.is.WEBKIT || platform.is.BLINK && !isFixedBlink) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = tabindexValue(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;
    if (platform.is.EDGE && platform.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
        return true;
    }
    var hasTabbableTabindexOrNone = tabindex !== false;
    var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;
    if (element.hasAttribute('contenteditable')) {
        return hasTabbableTabindexOrNone;
    }
    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
        return false;
    }
    if (platform.is.WEBKIT && platform.is.IOS) {
        var potentiallyTabbable = nodeName === 'input' && element.type === 'text' || element.type === 'password' || nodeName === 'select' || nodeName === 'textarea' || element.hasAttribute('contenteditable');
        if (!potentiallyTabbable) {
            var style = window.getComputedStyle(element, null);
            potentiallyTabbable = isUserModifyWritable(style);
        }
        if (!potentiallyTabbable) {
            return false;
        }
    }
    if (nodeName === 'use' && _tabindex !== null) {
        if (platform.is.BLINK || platform.is.WEBKIT && platform.majorVersion === 9) {
            return true;
        }
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        if (hasTabbableTabindexOrNone) {
            return true;
        }
        if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
            return true;
        }
    }
    if (nodeName === 'svg' && supports$7.focusSvgInIframe && hasTabbableTabindexOrNone) {
        return true;
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === 'svg') {
            if (supports$7.focusSvg) {
                return true;
            }
            return element.hasAttribute('focusable') || hasTabbableTabindex;
        }
        if (element.ownerSVGElement) {
            if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
                return true;
            }
            return element.hasAttribute('focusable');
        }
    }
    if (element.tabIndex === undefined) {
        return Boolean(except.onlyTabbable);
    }
    if (nodeName === 'audio') {
        if (!element.hasAttribute('controls')) {
            return false;
        } else if (platform.is.BLINK) {
            return true;
        }
    }
    if (nodeName === 'video') {
        if (!element.hasAttribute('controls')) {
            if (platform.is.TRIDENT || platform.is.EDGE) {
                return false;
            }
        } else if (platform.is.BLINK || platform.is.GECKO) {
            return true;
        }
    }
    if (nodeName === 'object') {
        if (platform.is.BLINK || platform.is.WEBKIT) {
            return false;
        }
    }
    if (nodeName === 'iframe') {
        return false;
    }
    if (!except.scrollable && platform.is.GECKO) {
        var _style = window.getComputedStyle(element, null);
        if (hasCssOverflowScroll(_style)) {
            return hasTabbableTabindexOrNone;
        }
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === 'area') {
            var img = getImageOfArea(element);
            if (img && tabindexValue(img) < 0) {
                return false;
            }
        }
        var _style2 = window.getComputedStyle(element, null);
        if (isUserModifyWritable(_style2)) {
            return element.tabIndex >= 0;
        }
        if (!except.flexbox && hasCssDisplayFlex(_style2)) {
            if (_tabindex !== null) {
                return hasTabbableTabindex;
            }
            return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
        }
        if (isScrollableContainer(element, nodeName)) {
            return false;
        }
        var parent = element.parentElement;
        if (parent) {
            var parentNodeName = parent.nodeName.toLowerCase();
            var parentStyle = window.getComputedStyle(parent, null);
            if (isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
                return false;
            }
            if (hasCssDisplayFlex(parentStyle)) {
                return hasTabbableTabindex;
            }
        }
    }
    return element.tabIndex >= 0;
}
isTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isTabbable1 = function isTabbable(context) {
        return isTabbableRules({
            context: context,
            except: except
        });
    };
    isTabbable1.rules = isTabbableRules;
    return isTabbable1;
};
var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
    flexbox: true
});
var isTabbableWithoutFlexbox = isTabbableRules.except({
    flexbox: true
});
var isTabbable = isTabbableRules.except({});
function queryTabbable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    var _isTabbable = isTabbable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    return queryFocusable({
        context: context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    }).filter(_isTabbable);
}
function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function sortDomOrder(elements) {
    return elements.sort(compareDomPosition);
}
function getFirstSuccessorOffset(list, target) {
    return findIndex(list, function(element) {
        return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
}
function findInsertionOffsets(list, elements, resolveElement) {
    var insertions = [];
    elements.forEach(function(element) {
        var replace = true;
        var offset = list.indexOf(element);
        if (offset === -1) {
            offset = getFirstSuccessorOffset(list, element);
            replace = false;
        }
        if (offset === -1) {
            offset = list.length;
        }
        var injections = nodeArray(resolveElement ? resolveElement(element) : element);
        if (!injections.length) {
            return;
        }
        insertions.push({
            offset: offset,
            replace: replace,
            elements: injections
        });
    });
    return insertions;
}
function insertElementsAtOffsets(list, insertions) {
    var inserted = 0;
    insertions.sort(function(a, b) {
        return a.offset - b.offset;
    });
    insertions.forEach(function(insertion) {
        var remove = insertion.replace ? 1 : 0;
        var args = [
            insertion.offset + inserted,
            remove
        ].concat(insertion.elements);
        list.splice.apply(list, args);
        inserted += insertion.elements.length - remove;
    });
}
function mergeInDomOrder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, list = _ref.list, elements = _ref.elements, resolveElement = _ref.resolveElement;
    var _list = list.slice(0);
    var _elements = nodeArray(elements).slice(0);
    sortDomOrder(_elements);
    var insertions = findInsertionOffsets(_list, _elements, resolveElement);
    insertElementsAtOffsets(_list, insertions);
    return _list;
}
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var Maps = function() {
    function Maps1(context) {
        _classCallCheck(this, Maps1);
        this._document = getDocument(context);
        this.maps = {};
    }
    _createClass(Maps1, [
        {
            key: 'getAreasFor',
            value: function getAreasFor(name3) {
                if (!this.maps[name3]) {
                    this.addMapByName(name3);
                }
                return this.maps[name3];
            }
        },
        {
            key: 'addMapByName',
            value: function addMapByName(name4) {
                var map = getMapByName(name4, this._document);
                if (!map) {
                    return;
                }
                this.maps[map.name] = queryTabbable({
                    context: map
                });
            }
        },
        {
            key: 'extractAreasFromList',
            value: function extractAreasFromList(elements) {
                return elements.filter(function(element) {
                    var nodeName = element.nodeName.toLowerCase();
                    if (nodeName !== 'area') {
                        return true;
                    }
                    var map = element.parentNode;
                    if (!this.maps[map.name]) {
                        this.maps[map.name] = [];
                    }
                    this.maps[map.name].push(element);
                    return false;
                }, this);
            }
        }
    ]);
    return Maps1;
}();
function sortArea(elements, context) {
    var usemaps = context.querySelectorAll('img[usemap]');
    var maps = new Maps(context);
    var _elements = maps.extractAreasFromList(elements);
    if (!usemaps.length) {
        return _elements;
    }
    return mergeInDomOrder({
        list: _elements,
        elements: usemaps,
        resolveElement: function resolveElement(image) {
            var name5 = image.getAttribute('usemap').slice(1);
            return maps.getAreasFor(name5);
        }
    });
}
var _createClass$1 = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var Shadows = function() {
    function Shadows1(context, sortElements1) {
        _classCallCheck$1(this, Shadows1);
        this.context = context;
        this.sortElements = sortElements1;
        this.hostCounter = 1;
        this.inHost = {};
        this.inDocument = [];
        this.hosts = {};
        this.elements = {};
    }
    _createClass$1(Shadows1, [
        {
            key: '_registerHost',
            value: function _registerHost(host) {
                if (host._sortingId) {
                    return;
                }
                host._sortingId = 'shadow-' + this.hostCounter++;
                this.hosts[host._sortingId] = host;
                var parentHost = getShadowHost({
                    context: host
                });
                if (parentHost) {
                    this._registerHost(parentHost);
                    this._registerHostParent(host, parentHost);
                } else {
                    this.inDocument.push(host);
                }
            }
        },
        {
            key: '_registerHostParent',
            value: function _registerHostParent(host, parent) {
                if (!this.inHost[parent._sortingId]) {
                    this.inHost[parent._sortingId] = [];
                }
                this.inHost[parent._sortingId].push(host);
            }
        },
        {
            key: '_registerElement',
            value: function _registerElement(element, host) {
                if (!this.elements[host._sortingId]) {
                    this.elements[host._sortingId] = [];
                }
                this.elements[host._sortingId].push(element);
            }
        },
        {
            key: 'extractElements',
            value: function extractElements(elements) {
                return elements.filter(function(element) {
                    var host = getShadowHost({
                        context: element
                    });
                    if (!host) {
                        return true;
                    }
                    this._registerHost(host);
                    this._registerElement(element, host);
                    return false;
                }, this);
            }
        },
        {
            key: 'sort',
            value: function sort(elements) {
                var _elements = this._injectHosts(elements);
                _elements = this._replaceHosts(_elements);
                this._cleanup();
                return _elements;
            }
        },
        {
            key: '_injectHosts',
            value: function _injectHosts(elements) {
                Object.keys(this.hosts).forEach(function(_sortingId) {
                    var _list = this.elements[_sortingId];
                    var _elements = this.inHost[_sortingId];
                    var _context = this.hosts[_sortingId].shadowRoot;
                    this.elements[_sortingId] = this._merge(_list, _elements, _context);
                }, this);
                return this._merge(elements, this.inDocument, this.context);
            }
        },
        {
            key: '_merge',
            value: function _merge(list, elements, context) {
                var merged = mergeInDomOrder({
                    list: list,
                    elements: elements
                });
                return this.sortElements(merged, context);
            }
        },
        {
            key: '_replaceHosts',
            value: function _replaceHosts(elements) {
                return mergeInDomOrder({
                    list: elements,
                    elements: this.inDocument,
                    resolveElement: this._resolveHostElement.bind(this)
                });
            }
        },
        {
            key: '_resolveHostElement',
            value: function _resolveHostElement(host) {
                var merged = mergeInDomOrder({
                    list: this.elements[host._sortingId],
                    elements: this.inHost[host._sortingId],
                    resolveElement: this._resolveHostElement.bind(this)
                });
                var _tabindex = tabindexValue(host);
                if (_tabindex !== null && _tabindex > -1) {
                    return [
                        host
                    ].concat(merged);
                }
                return merged;
            }
        },
        {
            key: '_cleanup',
            value: function _cleanup() {
                Object.keys(this.hosts).forEach(function(key) {
                    delete this.hosts[key]._sortingId;
                }, this);
            }
        }
    ]);
    return Shadows1;
}();
function sortShadowed(elements, context, sortElements2) {
    var shadows = new Shadows(context, sortElements2);
    var _elements = shadows.extractElements(elements);
    if (_elements.length === elements.length) {
        return sortElements2(elements);
    }
    return shadows.sort(_elements);
}
function sortTabindex(elements) {
    var map = {};
    var indexes = [];
    var normal = elements.filter(function(element) {
        var tabIndex = element.tabIndex;
        if (tabIndex === undefined) {
            tabIndex = tabindexValue(element);
        }
        if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
            return true;
        }
        if (!map[tabIndex]) {
            map[tabIndex] = [];
            indexes.push(tabIndex);
        }
        map[tabIndex].push(element);
        return false;
    });
    var _elements = indexes.sort().map(function(tabIndex) {
        return map[tabIndex];
    }).reduceRight(function(previous, current) {
        return current.concat(previous);
    }, normal);
    return _elements;
}
var supports$8 = void 0;
function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
        var tmp = elements.splice(pos, 1);
        return tmp.concat(elements);
    }
    return elements;
}
function sortElements(elements, _context) {
    if (supports$8.tabsequenceAreaAtImgPosition) {
        elements = sortArea(elements, _context);
    }
    elements = sortTabindex(elements);
    return elements;
}
function queryTabsequence() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!supports$8) {
        supports$8 = _supports();
    }
    var _context = nodeArray(context)[0] || document.documentElement;
    var elements = queryTabbable({
        context: _context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    });
    if (document.body.createShadowRoot && platform.is.BLINK) {
        elements = sortShadowed(elements, _context, sortElements);
    } else {
        elements = sortElements(elements, _context);
    }
    if (includeContext) {
        elements = moveContextToBeginning(elements, _context);
    }
    return elements;
}
var keycode = {
    tab: 9,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    'page-up': 33,
    pageDown: 34,
    'page-down': 34,
    end: 35,
    home: 36,
    enter: 13,
    escape: 27,
    space: 32,
    shift: 16,
    capsLock: 20,
    'caps-lock': 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    pause: 19,
    insert: 45,
    delete: 46,
    backspace: 8,
    _alias: {
        91: [
            92,
            93,
            224
        ]
    }
};
for(var n = 1; n < 26; n++){
    keycode['f' + n] = n + 111;
}
for(var _n = 0; _n < 10; _n++){
    var code = _n + 48;
    var numCode = _n + 96;
    keycode[_n] = code;
    keycode['num-' + _n] = numCode;
    keycode._alias[code] = [
        numCode
    ];
}
for(var _n2 = 0; _n2 < 26; _n2++){
    var _code = _n2 + 65;
    var name$1 = String.fromCharCode(_code).toLowerCase();
    keycode[name$1] = _code;
}
var modifier = {
    alt: 'altKey',
    ctrl: 'ctrlKey',
    meta: 'metaKey',
    shift: 'shiftKey'
};
var modifierSequence = Object.keys(modifier).map(function(name6) {
    return modifier[name6];
});
function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
        altKey: value,
        ctrlKey: value,
        metaKey: value,
        shiftKey: value
    };
}
function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf('*') !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);
    modifiers.forEach(function(token) {
        if (token === '*') {
            return;
        }
        var value = true;
        var operator = token.slice(0, 1);
        if (operator === '?') {
            value = null;
        } else if (operator === '!') {
            value = false;
        }
        if (value !== true) {
            token = token.slice(1);
        }
        var propertyName = modifier[token];
        if (!propertyName) {
            throw new TypeError('Unknown modifier "' + token + '"');
        }
        expected[propertyName] = value;
    });
    return expected;
}
function resolveKey(key) {
    var code = keycode[key] || parseInt(key, 10);
    if (!code || typeof code !== 'number' || isNaN(code)) {
        throw new TypeError('Unknown key "' + key + '"');
    }
    return [
        code
    ].concat(keycode._alias[code] || []);
}
function matchModifiers(expected, event) {
    return !modifierSequence.some(function(prop) {
        return typeof expected[prop] === 'boolean' && Boolean(event[prop]) !== expected[prop];
    });
}
function keyBinding(text) {
    return text.split(/\s+/).map(function(_text) {
        var tokens = _text.split('+');
        var _modifiers = resolveModifiers(tokens.slice(0, -1));
        var _keyCodes = resolveKey(tokens.slice(-1));
        return {
            keyCodes: _keyCodes,
            modifiers: _modifiers,
            matchModifiers: matchModifiers.bind(null, _modifiers)
        };
    });
}
function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, parent = _ref.parent, element = _ref.element, includeSelf = _ref.includeSelf;
    if (parent) {
        return function isChildOf(node) {
            return Boolean(includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    } else if (element) {
        return function isParentOf(node) {
            return Boolean(includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    throw new TypeError('util/compare-position#getParentComparator required either options.parent or options.element');
}
function whenKey() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bindings = {};
    var context = nodeArray(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = nodeArray(map.filter);
    delete map.filter;
    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
        throw new TypeError('when/key requires at least one option key');
    }
    var registerBinding = function registerBinding(event) {
        event.keyCodes.forEach(function(code) {
            if (!bindings[code]) {
                bindings[code] = [];
            }
            bindings[code].push(event);
        });
    };
    mapKeys.forEach(function(text) {
        if (typeof map[text] !== 'function') {
            throw new TypeError('when/key requires option["' + text + '"] to be a function');
        }
        var addCallback = function addCallback(event) {
            event.callback = map[text];
            return event;
        };
        keyBinding(text).map(addCallback).forEach(registerBinding);
    });
    var handleKeyDown = function handleKeyDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        if (filter.length) {
            var isParentOfElement = getParentComparator({
                element: event.target,
                includeSelf: true
            });
            if (filter.some(isParentOfElement)) {
                return;
            }
        }
        var key = event.keyCode || event.which;
        if (!bindings[key]) {
            return;
        }
        bindings[key].forEach(function(_event) {
            if (!_event.matchModifiers(event)) {
                return;
            }
            _event.callback.call(context, event, disengage);
        });
    };
    context.addEventListener('keydown', handleKeyDown, false);
    var disengage = function disengage() {
        context.removeEventListener('keydown', handleKeyDown, false);
    };
    return {
        disengage: disengage
    };
}
function _default({ context  } = {}) {
    if (!context) {
        context = document.documentElement;
    }
    queryTabsequence();
    return whenKey({
        '?alt+?shift+tab': function altShiftTab(event) {
            event.preventDefault();
            var sequence = queryTabsequence({
                context: context
            });
            var backward = event.shiftKey;
            var first = sequence[0];
            var last = sequence[sequence.length - 1];
            var source = backward ? first : last;
            var target = backward ? last : first;
            if (isActiveElement(source)) {
                target.focus();
                return;
            }
            var currentIndex = void 0;
            var found = sequence.some(function(element, index) {
                if (!isActiveElement(element)) {
                    return false;
                }
                currentIndex = index;
                return true;
            });
            if (!found) {
                first.focus();
                return;
            }
            var offset = backward ? -1 : 1;
            sequence[currentIndex + offset].focus();
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lock = lock;
exports.unlock = unlock;
let previousBodyPaddingRight;
let previousBodyOverflowSetting;
let activeLocks = 0;
function lock() {
    setTimeout(()=>{
        if (activeLocks++ > 0) {
            return;
        }
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = `${scrollBarGap}px`;
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    });
}
function unlock() {
    setTimeout(()=>{
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodeFrame = void 0;
var _extends = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_extends.js (ecmascript, ssr)").default;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _interop_require_wildcard = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_wildcard.js (ecmascript, ssr)").default;
var _anser = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/anser/index.js (ecmascript, ssr)"));
var React = _interop_require_wildcard(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
var _stripAnsi = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/strip-ansi/index.js (ecmascript, ssr)"));
var _stackFrame = __turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js (ecmascript, ssr)");
const CodeFrame = function CodeFrame({ stackFrame , codeFrame  }) {
    const formattedFrame = React.useMemo(()=>{
        const lines = codeFrame.split(/\r?\n/g);
        const prefixLength = lines.map((line)=>/^>? +\d+ +\| [ ]+/.exec((0, _stripAnsi).default(line)) === null ? null : /^>? +\d+ +\| ( *)/.exec((0, _stripAnsi).default(line))).filter(Boolean).map((v)=>v.pop()).reduce((c, n)=>isNaN(c) ? n.length : Math.min(c, n.length), NaN);
        if (prefixLength > 1) {
            const p = ' '.repeat(prefixLength);
            return lines.map((line, a)=>~(a = line.indexOf('|')) ? line.substring(0, a) + line.substring(a).replace(p, '') : line).join('\n');
        }
        return lines.join('\n');
    }, [
        codeFrame
    ]);
    const decoded = React.useMemo(()=>{
        return _anser.default.ansiToJson(formattedFrame, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        formattedFrame
    ]);
    const open = React.useCallback(()=>{
        const params = new URLSearchParams();
        for(const key in stackFrame){
            var _key;
            params.append(key, ((_key = stackFrame[key]) != null ? _key : '').toString());
        }
        self.fetch(`${process.env.__NEXT_ROUTER_BASEPATH || ''}/__nextjs_launch-editor?${params.toString()}`).then(()=>{}, ()=>{
            console.error('There was an issue opening this code in your editor.');
        });
    }, [
        stackFrame
    ]);
    return React.createElement("div", {
        "data-nextjs-codeframe": true
    }, React.createElement("div", null, React.createElement("p", {
        role: "link",
        onClick: open,
        tabIndex: 1,
        title: "Click to open in your editor"
    }, React.createElement("span", null, (0, _stackFrame).getFrameSource(stackFrame), " @ ", stackFrame.methodName), React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, React.createElement("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), React.createElement("polyline", {
        points: "15 3 21 3 21 9"
    }), React.createElement("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
    })))), React.createElement("pre", null, decoded.map((entry, index)=>React.createElement("span", {
            key: `frame-${index}`,
            style: _extends({
                color: entry.fg ? `var(--color-${entry.fg})` : undefined
            }, entry.decoration === 'bold' ? {
                fontWeight: 800
            } : entry.decoration === 'italic' ? {
                fontStyle: 'italic'
            } : undefined)
        }, entry.content))));
};
exports.CodeFrame = CodeFrame;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/FrameworkIcon.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FrameworkIcon = FrameworkIcon;
var _interop_require_default = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@swc+helpers@0.4.14/node_modules/@swc/helpers/lib/_interop_require_default.js (ecmascript, ssr)").default;
var _react = _interop_require_default(__turbopack_require__("[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)"));
function FrameworkIcon({ framework  }) {
    if (framework === 'react') {
        return _react.default.createElement("svg", {
            "data-nextjs-call-stack-framework-icon": "react",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 410 369",
            fill: "none",
            shapeRendering: "geometricPrecision",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "5"
        }, _react.default.createElement("path", {
            d: "M204.995 224.552C226.56 224.552 244.042 207.07 244.042 185.506C244.042 163.941 226.56 146.459 204.995 146.459C183.43 146.459 165.948 163.941 165.948 185.506C165.948 207.07 183.43 224.552 204.995 224.552Z",
            fill: "currentColor"
        }), _react.default.createElement("path", {
            d: "M409.99 184.505C409.99 153.707 381.437 126.667 335.996 108.925C343.342 60.6535 334.19 22.3878 307.492 6.98883C283.649 -6.77511 250.631 -0.0395641 214.512 25.9753C211.316 28.2692 208.143 30.7097 204.97 33.2477C201.822 30.7097 198.65 28.2692 195.477 25.9753C159.359 -0.0395641 126.34 -6.79951 102.497 6.98883C75.8237 22.3878 66.6721 60.6291 74.0422 108.852C28.5529 126.618 0 153.682 0 184.505C0 215.303 28.5528 242.342 73.9934 260.084C66.6477 308.356 75.7993 346.621 102.497 362.02C110.575 366.682 119.727 369 129.684 369C149.085 369 171.61 360.215 195.477 343.034C198.674 340.74 201.847 338.3 205.019 335.762C208.167 338.3 211.34 340.74 214.512 343.034C238.38 360.239 260.905 369 280.306 369C290.263 369 299.415 366.682 307.492 362.02C331.335 348.256 342 316.287 337.534 271.993C337.143 268.089 336.631 264.135 335.996 260.109C381.461 242.367 409.99 215.327 409.99 184.505ZM225.934 41.8136C246.238 27.1955 265.127 19.5814 280.306 19.5814C286.871 19.5814 292.728 20.9968 297.731 23.8765C315.204 33.9798 322.672 62.9475 317.327 102.433C299.756 97.0401 280.306 92.9158 259.392 90.2802C246.872 73.8074 233.597 58.9453 220.003 46.2551C221.98 44.7421 223.957 43.229 225.934 41.8136ZM112.259 23.8765C117.262 20.9968 123.119 19.5814 129.684 19.5814C144.863 19.5814 163.752 27.1711 184.056 41.8136C186.033 43.229 188.01 44.7176 189.986 46.2551C176.393 58.9453 163.142 73.783 150.622 90.2558C129.732 92.8914 110.258 97.0401 92.687 102.409C87.3424 62.9475 94.7857 33.9798 112.259 23.8765ZM19.5233 184.505C19.5233 164.322 40.9014 143.359 77.776 128.253C81.9003 146.141 88.0502 165.054 96.1768 184.456C88.0014 203.881 81.8515 222.819 77.7272 240.732C40.9014 225.626 19.5233 204.687 19.5233 184.505ZM184.056 327.196C154.966 348.134 128.805 354.675 112.259 345.133C94.7857 335.029 87.3181 306.062 92.6626 266.576C110.234 271.969 129.684 276.093 150.598 278.729C163.117 295.202 176.393 310.064 189.986 322.754C188.01 324.292 186.033 325.78 184.056 327.196ZM204.995 310.04C180.591 287.685 157.138 257.815 137.347 223.551C132.051 214.4 121.344 191.396 117 182.489C113.535 190.786 110.112 198.398 107.427 206.5C109.623 210.575 118.092 229.213 120.434 233.288C125.071 241.317 129.928 249.127 134.931 256.692C120.898 254.227 107.915 251.055 96.1035 247.321C102.815 217.011 116.213 182.064 137.347 145.458C142.545 136.453 153.838 116.346 159.5 108C150.568 109.147 143.395 108.767 135 110.5C132.56 114.453 122.777 131.645 120.434 135.721C115.749 143.823 111.454 151.925 107.427 159.978C102.546 146.581 98.8124 133.744 96.1524 121.64C125.755 112.293 162.727 106.411 204.995 106.411C215.562 106.411 237.63 106.197 247.49 106.905C242.048 99.7544 237.38 93.2819 231.694 86.888C227.082 86.7416 209.705 86.888 204.995 86.888C195.672 86.888 186.545 87.2053 177.589 87.7422C186.472 77.1752 195.672 67.5111 204.995 58.9697C229.375 81.3239 252.851 111.195 272.643 145.458C277.841 154.463 289.073 175.426 293.49 184.505C296.98 176.207 300.281 168.64 302.99 160.489C300.793 156.389 291.898 139.747 289.555 135.696C284.918 127.667 280.062 119.858 275.059 112.317C289.092 114.782 302.075 117.954 313.886 121.688C307.175 151.998 293.777 186.945 272.643 223.551C267.445 232.556 252.651 253.178 246.99 261.524C255.922 260.377 265.595 258.663 273.99 256.93C276.43 252.976 287.212 237.364 289.555 233.288C294.216 225.235 298.512 217.182 302.489 209.153C307.224 222.185 310.982 234.997 313.715 247.394C284.138 256.741 247.214 262.598 204.995 262.598C194.428 262.598 169.859 261.208 160 260.5C165.442 267.65 171.304 275.095 176.99 281.489C181.602 281.635 200.285 282.121 204.995 282.121C214.317 282.121 223.444 281.804 232.401 281.267C223.493 291.834 214.317 301.498 204.995 310.04ZM297.731 345.133C281.185 354.699 254.999 348.159 225.934 327.196C223.957 325.78 221.98 324.292 220.003 322.754C233.597 310.064 246.848 295.226 259.367 278.753C280.233 276.118 299.659 271.993 317.205 266.625C317.547 269.089 317.888 271.554 318.132 273.97C321.72 309.649 314.277 335.566 297.731 345.133ZM332.262 240.756C328.065 222.599 321.842 203.686 313.813 184.578C321.988 165.152 328.138 146.215 332.262 128.302C369.088 143.408 390.466 164.322 390.466 184.505C390.466 204.687 369.113 225.626 332.262 240.756Z",
            fill: "currentColor"
        }));
    }
    return _react.default.createElement("svg", {
        "data-nextjs-call-stack-framework-icon": "next",
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 180 180",
        fill: "none"
    }, _react.default.createElement("mask", {
        id: "mask0_408_139",
        maskUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "180",
        height: "180"
    }, _react.default.createElement("circle", {
        cx: "90",
        cy: "90",
        r: "90",
        fill: "black"
    })), _react.default.createElement("g", {
        mask: "url(#mask0_408_139)"
    }, _react.default.createElement("circle", {
        cx: "90",
        cy: "90",
        r: "87",
        fill: "black",
        stroke: "white",
        strokeWidth: "6"
    }), _react.default.createElement("path", {
        d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
        fill: "url(#paint0_linear_408_139)"
    }), _react.default.createElement("rect", {
        x: "115",
        y: "54",
        width: "12",
        height: "72",
        fill: "url(#paint1_linear_408_139)"
    })), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
        id: "paint0_linear_408_139",
        x1: "109",
        y1: "116.5",
        x2: "144.5",
        y2: "160.5",
        gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
        stopColor: "white"
    }), _react.default.createElement("stop", {
        offset: "1",
        stopColor: "white",
        stopOpacity: "0"
    })), _react.default.createElement("linearGradient", {
        id: "paint1_linear_408_139",
        x1: "121",
        y1: "54",
        x2: "120.799",
        y2: "106.875",
        gradientUnits: "userSpaceOnUse"
    }, _react.default.createElement("stop", {
        stopColor: "white"
    }), _react.default.createElement("stop", {
        offset: "1",
        stopColor: "white",
        stopOpacity: "0"
    }))));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_client_components_layout-router.js.map