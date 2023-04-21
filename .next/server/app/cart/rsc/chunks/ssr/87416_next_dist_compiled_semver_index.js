(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/87416_next_dist_compiled_semver_index.js", {

"[project-with-next]/node_modules/.pnpm/next@13.1.5_react-dom@18.2.0+react@18.2.0/node_modules/next/dist/compiled/semver/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

(()=>{
    var e = {
        842: (e, r, t)=>{
            const s = Symbol("SemVer ANY");
            class Comparator {
                static get ANY() {
                    return s;
                }
                constructor(e, r){
                    if (!r || typeof r !== "object") {
                        r = {
                            loose: !!r,
                            includePrerelease: false
                        };
                    }
                    if (e instanceof Comparator) {
                        if (e.loose === !!r.loose) {
                            return e;
                        } else {
                            e = e.value;
                        }
                    }
                    a("comparator", e, r);
                    this.options = r;
                    this.loose = !!r.loose;
                    this.parse(e);
                    if (this.semver === s) {
                        this.value = "";
                    } else {
                        this.value = this.operator + this.semver.version;
                    }
                    a("comp", this);
                }
                parse(e) {
                    const r = this.options.loose ? o[n.COMPARATORLOOSE] : o[n.COMPARATOR];
                    const t = e.match(r);
                    if (!t) {
                        throw new TypeError(`Invalid comparator: ${e}`);
                    }
                    this.operator = t[1] !== undefined ? t[1] : "";
                    if (this.operator === "=") {
                        this.operator = "";
                    }
                    if (!t[2]) {
                        this.semver = s;
                    } else {
                        this.semver = new l(t[2], this.options.loose);
                    }
                }
                toString() {
                    return this.value;
                }
                test(e) {
                    a("Comparator.test", e, this.options.loose);
                    if (this.semver === s || e === s) {
                        return true;
                    }
                    if (typeof e === "string") {
                        try {
                            e = new l(e, this.options);
                        } catch (e) {
                            return false;
                        }
                    }
                    return i(e, this.operator, this.semver, this.options);
                }
                intersects(e, r) {
                    if (!(e instanceof Comparator)) {
                        throw new TypeError("a Comparator is required");
                    }
                    if (!r || typeof r !== "object") {
                        r = {
                            loose: !!r,
                            includePrerelease: false
                        };
                    }
                    if (this.operator === "") {
                        if (this.value === "") {
                            return true;
                        }
                        return new c(e.value, r).test(this.value);
                    } else if (e.operator === "") {
                        if (e.value === "") {
                            return true;
                        }
                        return new c(this.value, r).test(e.semver);
                    }
                    const t = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">");
                    const s = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<");
                    const o = this.semver.version === e.semver.version;
                    const n = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<=");
                    const a = i(this.semver, "<", e.semver, r) && (this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<");
                    const l = i(this.semver, ">", e.semver, r) && (this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">");
                    return t || s || o && n || a || l;
                }
            }
            e.exports = Comparator;
            const { re: o , t: n  } = t(608);
            const i = t(96);
            const a = t(435);
            const l = t(834);
            const c = t(798);
        },
        798: (e, r, t)=>{
            class Range {
                constructor(e, r){
                    if (!r || typeof r !== "object") {
                        r = {
                            loose: !!r,
                            includePrerelease: false
                        };
                    }
                    if (e instanceof Range) {
                        if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease) {
                            return e;
                        } else {
                            return new Range(e.raw, r);
                        }
                    }
                    if (e instanceof s) {
                        this.raw = e.value;
                        this.set = [
                            [
                                e
                            ]
                        ];
                        this.format();
                        return this;
                    }
                    this.options = r;
                    this.loose = !!r.loose;
                    this.includePrerelease = !!r.includePrerelease;
                    this.raw = e;
                    this.set = e.split(/\s*\|\|\s*/).map((e)=>this.parseRange(e.trim())).filter((e)=>e.length);
                    if (!this.set.length) {
                        throw new TypeError(`Invalid SemVer Range: ${e}`);
                    }
                    this.format();
                }
                format() {
                    this.range = this.set.map((e)=>e.join(" ").trim()).join("||").trim();
                    return this.range;
                }
                toString() {
                    return this.range;
                }
                parseRange(e) {
                    const r = this.options.loose;
                    e = e.trim();
                    const t = r ? i[a.HYPHENRANGELOOSE] : i[a.HYPHENRANGE];
                    e = e.replace(t, hyphenReplace(this.options.includePrerelease));
                    o("hyphen replace", e);
                    e = e.replace(i[a.COMPARATORTRIM], l);
                    o("comparator trim", e, i[a.COMPARATORTRIM]);
                    e = e.replace(i[a.TILDETRIM], c);
                    e = e.replace(i[a.CARETTRIM], p);
                    e = e.split(/\s+/).join(" ");
                    const n = r ? i[a.COMPARATORLOOSE] : i[a.COMPARATOR];
                    return e.split(" ").map((e)=>parseComparator(e, this.options)).join(" ").split(/\s+/).map((e)=>replaceGTE0(e, this.options)).filter(this.options.loose ? (e)=>!!e.match(n) : ()=>true).map((e)=>new s(e, this.options));
                }
                intersects(e, r) {
                    if (!(e instanceof Range)) {
                        throw new TypeError("a Range is required");
                    }
                    return this.set.some((t)=>isSatisfiable(t, r) && e.set.some((e)=>isSatisfiable(e, r) && t.every((t)=>e.every((e)=>t.intersects(e, r)))));
                }
                test(e) {
                    if (!e) {
                        return false;
                    }
                    if (typeof e === "string") {
                        try {
                            e = new n(e, this.options);
                        } catch (e) {
                            return false;
                        }
                    }
                    for(let r = 0; r < this.set.length; r++){
                        if (testSet(this.set[r], e, this.options)) {
                            return true;
                        }
                    }
                    return false;
                }
            }
            e.exports = Range;
            const s = t(842);
            const o = t(435);
            const n = t(834);
            const { re: i , t: a , comparatorTrimReplace: l , tildeTrimReplace: c , caretTrimReplace: p  } = t(608);
            const isSatisfiable = (e, r)=>{
                let t = true;
                const s = e.slice();
                let o = s.pop();
                while(t && s.length){
                    t = s.every((e)=>o.intersects(e, r));
                    o = s.pop();
                }
                return t;
            };
            const parseComparator = (e, r)=>{
                o("comp", e, r);
                e = replaceCarets(e, r);
                o("caret", e);
                e = replaceTildes(e, r);
                o("tildes", e);
                e = replaceXRanges(e, r);
                o("xrange", e);
                e = replaceStars(e, r);
                o("stars", e);
                return e;
            };
            const isX = (e)=>!e || e.toLowerCase() === "x" || e === "*";
            const replaceTildes = (e, r)=>e.trim().split(/\s+/).map((e)=>replaceTilde(e, r)).join(" ");
            const replaceTilde = (e, r)=>{
                const t = r.loose ? i[a.TILDELOOSE] : i[a.TILDE];
                return e.replace(t, (r, t, s, n, i)=>{
                    o("tilde", e, r, t, s, n, i);
                    let a;
                    if (isX(t)) {
                        a = "";
                    } else if (isX(s)) {
                        a = `>=${t}.0.0 <${+t + 1}.0.0-0`;
                    } else if (isX(n)) {
                        a = `>=${t}.${s}.0 <${t}.${+s + 1}.0-0`;
                    } else if (i) {
                        o("replaceTilde pr", i);
                        a = `>=${t}.${s}.${n}-${i} <${t}.${+s + 1}.0-0`;
                    } else {
                        a = `>=${t}.${s}.${n} <${t}.${+s + 1}.0-0`;
                    }
                    o("tilde return", a);
                    return a;
                });
            };
            const replaceCarets = (e, r)=>e.trim().split(/\s+/).map((e)=>replaceCaret(e, r)).join(" ");
            const replaceCaret = (e, r)=>{
                o("caret", e, r);
                const t = r.loose ? i[a.CARETLOOSE] : i[a.CARET];
                const s = r.includePrerelease ? "-0" : "";
                return e.replace(t, (r, t, n, i, a)=>{
                    o("caret", e, r, t, n, i, a);
                    let l;
                    if (isX(t)) {
                        l = "";
                    } else if (isX(n)) {
                        l = `>=${t}.0.0${s} <${+t + 1}.0.0-0`;
                    } else if (isX(i)) {
                        if (t === "0") {
                            l = `>=${t}.${n}.0${s} <${t}.${+n + 1}.0-0`;
                        } else {
                            l = `>=${t}.${n}.0${s} <${+t + 1}.0.0-0`;
                        }
                    } else if (a) {
                        o("replaceCaret pr", a);
                        if (t === "0") {
                            if (n === "0") {
                                l = `>=${t}.${n}.${i}-${a} <${t}.${n}.${+i + 1}-0`;
                            } else {
                                l = `>=${t}.${n}.${i}-${a} <${t}.${+n + 1}.0-0`;
                            }
                        } else {
                            l = `>=${t}.${n}.${i}-${a} <${+t + 1}.0.0-0`;
                        }
                    } else {
                        o("no pr");
                        if (t === "0") {
                            if (n === "0") {
                                l = `>=${t}.${n}.${i}${s} <${t}.${n}.${+i + 1}-0`;
                            } else {
                                l = `>=${t}.${n}.${i}${s} <${t}.${+n + 1}.0-0`;
                            }
                        } else {
                            l = `>=${t}.${n}.${i} <${+t + 1}.0.0-0`;
                        }
                    }
                    o("caret return", l);
                    return l;
                });
            };
            const replaceXRanges = (e, r)=>{
                o("replaceXRanges", e, r);
                return e.split(/\s+/).map((e)=>replaceXRange(e, r)).join(" ");
            };
            const replaceXRange = (e, r)=>{
                e = e.trim();
                const t = r.loose ? i[a.XRANGELOOSE] : i[a.XRANGE];
                return e.replace(t, (t, s, n, i, a, l)=>{
                    o("xRange", e, t, s, n, i, a, l);
                    const c = isX(n);
                    const p = c || isX(i);
                    const E = p || isX(a);
                    const f = E;
                    if (s === "=" && f) {
                        s = "";
                    }
                    l = r.includePrerelease ? "-0" : "";
                    if (c) {
                        if (s === ">" || s === "<") {
                            t = "<0.0.0-0";
                        } else {
                            t = "*";
                        }
                    } else if (s && f) {
                        if (p) {
                            i = 0;
                        }
                        a = 0;
                        if (s === ">") {
                            s = ">=";
                            if (p) {
                                n = +n + 1;
                                i = 0;
                                a = 0;
                            } else {
                                i = +i + 1;
                                a = 0;
                            }
                        } else if (s === "<=") {
                            s = "<";
                            if (p) {
                                n = +n + 1;
                            } else {
                                i = +i + 1;
                            }
                        }
                        if (s === "<") l = "-0";
                        t = `${s + n}.${i}.${a}${l}`;
                    } else if (p) {
                        t = `>=${n}.0.0${l} <${+n + 1}.0.0-0`;
                    } else if (E) {
                        t = `>=${n}.${i}.0${l} <${n}.${+i + 1}.0-0`;
                    }
                    o("xRange return", t);
                    return t;
                });
            };
            const replaceStars = (e, r)=>{
                o("replaceStars", e, r);
                return e.trim().replace(i[a.STAR], "");
            };
            const replaceGTE0 = (e, r)=>{
                o("replaceGTE0", e, r);
                return e.trim().replace(i[r.includePrerelease ? a.GTE0PRE : a.GTE0], "");
            };
            const hyphenReplace = (e)=>(r, t, s, o, n, i, a, l, c, p, E, f, h)=>{
                    if (isX(s)) {
                        t = "";
                    } else if (isX(o)) {
                        t = `>=${s}.0.0${e ? "-0" : ""}`;
                    } else if (isX(n)) {
                        t = `>=${s}.${o}.0${e ? "-0" : ""}`;
                    } else if (i) {
                        t = `>=${t}`;
                    } else {
                        t = `>=${t}${e ? "-0" : ""}`;
                    }
                    if (isX(c)) {
                        l = "";
                    } else if (isX(p)) {
                        l = `<${+c + 1}.0.0-0`;
                    } else if (isX(E)) {
                        l = `<${c}.${+p + 1}.0-0`;
                    } else if (f) {
                        l = `<=${c}.${p}.${E}-${f}`;
                    } else if (e) {
                        l = `<${c}.${p}.${+E + 1}-0`;
                    } else {
                        l = `<=${l}`;
                    }
                    return `${t} ${l}`.trim();
                };
            const testSet = (e, r, t)=>{
                for(let t = 0; t < e.length; t++){
                    if (!e[t].test(r)) {
                        return false;
                    }
                }
                if (r.prerelease.length && !t.includePrerelease) {
                    for(let t = 0; t < e.length; t++){
                        o(e[t].semver);
                        if (e[t].semver === s.ANY) {
                            continue;
                        }
                        if (e[t].semver.prerelease.length > 0) {
                            const s = e[t].semver;
                            if (s.major === r.major && s.minor === r.minor && s.patch === r.patch) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                return true;
            };
        },
        834: (e, r, t)=>{
            const s = t(435);
            const { MAX_LENGTH: o , MAX_SAFE_INTEGER: n  } = t(370);
            const { re: i , t: a  } = t(608);
            const { compareIdentifiers: l  } = t(154);
            class SemVer {
                constructor(e, r){
                    if (!r || typeof r !== "object") {
                        r = {
                            loose: !!r,
                            includePrerelease: false
                        };
                    }
                    if (e instanceof SemVer) {
                        if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease) {
                            return e;
                        } else {
                            e = e.version;
                        }
                    } else if (typeof e !== "string") {
                        throw new TypeError(`Invalid Version: ${e}`);
                    }
                    if (e.length > o) {
                        throw new TypeError(`version is longer than ${o} characters`);
                    }
                    s("SemVer", e, r);
                    this.options = r;
                    this.loose = !!r.loose;
                    this.includePrerelease = !!r.includePrerelease;
                    const t = e.trim().match(r.loose ? i[a.LOOSE] : i[a.FULL]);
                    if (!t) {
                        throw new TypeError(`Invalid Version: ${e}`);
                    }
                    this.raw = e;
                    this.major = +t[1];
                    this.minor = +t[2];
                    this.patch = +t[3];
                    if (this.major > n || this.major < 0) {
                        throw new TypeError("Invalid major version");
                    }
                    if (this.minor > n || this.minor < 0) {
                        throw new TypeError("Invalid minor version");
                    }
                    if (this.patch > n || this.patch < 0) {
                        throw new TypeError("Invalid patch version");
                    }
                    if (!t[4]) {
                        this.prerelease = [];
                    } else {
                        this.prerelease = t[4].split(".").map((e)=>{
                            if (/^[0-9]+$/.test(e)) {
                                const r = +e;
                                if (r >= 0 && r < n) {
                                    return r;
                                }
                            }
                            return e;
                        });
                    }
                    this.build = t[5] ? t[5].split(".") : [];
                    this.format();
                }
                format() {
                    this.version = `${this.major}.${this.minor}.${this.patch}`;
                    if (this.prerelease.length) {
                        this.version += `-${this.prerelease.join(".")}`;
                    }
                    return this.version;
                }
                toString() {
                    return this.version;
                }
                compare(e) {
                    s("SemVer.compare", this.version, this.options, e);
                    if (!(e instanceof SemVer)) {
                        if (typeof e === "string" && e === this.version) {
                            return 0;
                        }
                        e = new SemVer(e, this.options);
                    }
                    if (e.version === this.version) {
                        return 0;
                    }
                    return this.compareMain(e) || this.comparePre(e);
                }
                compareMain(e) {
                    if (!(e instanceof SemVer)) {
                        e = new SemVer(e, this.options);
                    }
                    return l(this.major, e.major) || l(this.minor, e.minor) || l(this.patch, e.patch);
                }
                comparePre(e) {
                    if (!(e instanceof SemVer)) {
                        e = new SemVer(e, this.options);
                    }
                    if (this.prerelease.length && !e.prerelease.length) {
                        return -1;
                    } else if (!this.prerelease.length && e.prerelease.length) {
                        return 1;
                    } else if (!this.prerelease.length && !e.prerelease.length) {
                        return 0;
                    }
                    let r = 0;
                    do {
                        const t = this.prerelease[r];
                        const o = e.prerelease[r];
                        s("prerelease compare", r, t, o);
                        if (t === undefined && o === undefined) {
                            return 0;
                        } else if (o === undefined) {
                            return 1;
                        } else if (t === undefined) {
                            return -1;
                        } else if (t === o) {
                            continue;
                        } else {
                            return l(t, o);
                        }
                    }while (++r)
                }
                compareBuild(e) {
                    if (!(e instanceof SemVer)) {
                        e = new SemVer(e, this.options);
                    }
                    let r = 0;
                    do {
                        const t = this.build[r];
                        const o = e.build[r];
                        s("prerelease compare", r, t, o);
                        if (t === undefined && o === undefined) {
                            return 0;
                        } else if (o === undefined) {
                            return 1;
                        } else if (t === undefined) {
                            return -1;
                        } else if (t === o) {
                            continue;
                        } else {
                            return l(t, o);
                        }
                    }while (++r)
                }
                inc(e, r) {
                    switch(e){
                        case "premajor":
                            this.prerelease.length = 0;
                            this.patch = 0;
                            this.minor = 0;
                            this.major++;
                            this.inc("pre", r);
                            break;
                        case "preminor":
                            this.prerelease.length = 0;
                            this.patch = 0;
                            this.minor++;
                            this.inc("pre", r);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0;
                            this.inc("patch", r);
                            this.inc("pre", r);
                            break;
                        case "prerelease":
                            if (this.prerelease.length === 0) {
                                this.inc("patch", r);
                            }
                            this.inc("pre", r);
                            break;
                        case "major":
                            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                                this.major++;
                            }
                            this.minor = 0;
                            this.patch = 0;
                            this.prerelease = [];
                            break;
                        case "minor":
                            if (this.patch !== 0 || this.prerelease.length === 0) {
                                this.minor++;
                            }
                            this.patch = 0;
                            this.prerelease = [];
                            break;
                        case "patch":
                            if (this.prerelease.length === 0) {
                                this.patch++;
                            }
                            this.prerelease = [];
                            break;
                        case "pre":
                            if (this.prerelease.length === 0) {
                                this.prerelease = [
                                    0
                                ];
                            } else {
                                let e = this.prerelease.length;
                                while(--e >= 0){
                                    if (typeof this.prerelease[e] === "number") {
                                        this.prerelease[e]++;
                                        e = -2;
                                    }
                                }
                                if (e === -1) {
                                    this.prerelease.push(0);
                                }
                            }
                            if (r) {
                                if (this.prerelease[0] === r) {
                                    if (isNaN(this.prerelease[1])) {
                                        this.prerelease = [
                                            r,
                                            0
                                        ];
                                    }
                                } else {
                                    this.prerelease = [
                                        r,
                                        0
                                    ];
                                }
                            }
                            break;
                        default:
                            throw new Error(`invalid increment argument: ${e}`);
                    }
                    this.format();
                    this.raw = this.version;
                    return this;
                }
            }
            e.exports = SemVer;
        },
        909: (e, r, t)=>{
            const s = t(815);
            const clean = (e, r)=>{
                const t = s(e.trim().replace(/^[=v]+/, ""), r);
                return t ? t.version : null;
            };
            e.exports = clean;
        },
        96: (e, r, t)=>{
            const s = t(83);
            const o = t(818);
            const n = t(850);
            const i = t(488);
            const a = t(957);
            const l = t(551);
            const cmp = (e, r, t, c)=>{
                switch(r){
                    case "===":
                        if (typeof e === "object") e = e.version;
                        if (typeof t === "object") t = t.version;
                        return e === t;
                    case "!==":
                        if (typeof e === "object") e = e.version;
                        if (typeof t === "object") t = t.version;
                        return e !== t;
                    case "":
                    case "=":
                    case "==":
                        return s(e, t, c);
                    case "!=":
                        return o(e, t, c);
                    case ">":
                        return n(e, t, c);
                    case ">=":
                        return i(e, t, c);
                    case "<":
                        return a(e, t, c);
                    case "<=":
                        return l(e, t, c);
                    default:
                        throw new TypeError(`Invalid operator: ${r}`);
                }
            };
            e.exports = cmp;
        },
        778: (e, r, t)=>{
            const s = t(834);
            const o = t(815);
            const { re: n , t: i  } = t(608);
            const coerce = (e, r)=>{
                if (e instanceof s) {
                    return e;
                }
                if (typeof e === "number") {
                    e = String(e);
                }
                if (typeof e !== "string") {
                    return null;
                }
                r = r || {};
                let t = null;
                if (!r.rtl) {
                    t = e.match(n[i.COERCE]);
                } else {
                    let r;
                    while((r = n[i.COERCERTL].exec(e)) && (!t || t.index + t[0].length !== e.length)){
                        if (!t || r.index + r[0].length !== t.index + t[0].length) {
                            t = r;
                        }
                        n[i.COERCERTL].lastIndex = r.index + r[1].length + r[2].length;
                    }
                    n[i.COERCERTL].lastIndex = -1;
                }
                if (t === null) return null;
                return o(`${t[2]}.${t[3] || "0"}.${t[4] || "0"}`, r);
            };
            e.exports = coerce;
        },
        406: (e, r, t)=>{
            const s = t(834);
            const compareBuild = (e, r, t)=>{
                const o = new s(e, t);
                const n = new s(r, t);
                return o.compare(n) || o.compareBuild(n);
            };
            e.exports = compareBuild;
        },
        473: (e, r, t)=>{
            const s = t(756);
            const compareLoose = (e, r)=>s(e, r, true);
            e.exports = compareLoose;
        },
        756: (e, r, t)=>{
            const s = t(834);
            const compare = (e, r, t)=>new s(e, t).compare(new s(r, t));
            e.exports = compare;
        },
        843: (e, r, t)=>{
            const s = t(815);
            const o = t(83);
            const diff = (e, r)=>{
                if (o(e, r)) {
                    return null;
                } else {
                    const t = s(e);
                    const o = s(r);
                    const n = t.prerelease.length || o.prerelease.length;
                    const i = n ? "pre" : "";
                    const a = n ? "prerelease" : "";
                    for(const e in t){
                        if (e === "major" || e === "minor" || e === "patch") {
                            if (t[e] !== o[e]) {
                                return i + e;
                            }
                        }
                    }
                    return a;
                }
            };
            e.exports = diff;
        },
        83: (e, r, t)=>{
            const s = t(756);
            const eq = (e, r, t)=>s(e, r, t) === 0;
            e.exports = eq;
        },
        850: (e, r, t)=>{
            const s = t(756);
            const gt = (e, r, t)=>s(e, r, t) > 0;
            e.exports = gt;
        },
        488: (e, r, t)=>{
            const s = t(756);
            const gte = (e, r, t)=>s(e, r, t) >= 0;
            e.exports = gte;
        },
        77: (e, r, t)=>{
            const s = t(834);
            const inc = (e, r, t, o)=>{
                if (typeof t === "string") {
                    o = t;
                    t = undefined;
                }
                try {
                    return new s(e, t).inc(r, o).version;
                } catch (e) {
                    return null;
                }
            };
            e.exports = inc;
        },
        957: (e, r, t)=>{
            const s = t(756);
            const lt = (e, r, t)=>s(e, r, t) < 0;
            e.exports = lt;
        },
        551: (e, r, t)=>{
            const s = t(756);
            const lte = (e, r, t)=>s(e, r, t) <= 0;
            e.exports = lte;
        },
        973: (e, r, t)=>{
            const s = t(834);
            const major = (e, r)=>new s(e, r).major;
            e.exports = major;
        },
        70: (e, r, t)=>{
            const s = t(834);
            const minor = (e, r)=>new s(e, r).minor;
            e.exports = minor;
        },
        818: (e, r, t)=>{
            const s = t(756);
            const neq = (e, r, t)=>s(e, r, t) !== 0;
            e.exports = neq;
        },
        815: (e, r, t)=>{
            const { MAX_LENGTH: s  } = t(370);
            const { re: o , t: n  } = t(608);
            const i = t(834);
            const parse = (e, r)=>{
                if (!r || typeof r !== "object") {
                    r = {
                        loose: !!r,
                        includePrerelease: false
                    };
                }
                if (e instanceof i) {
                    return e;
                }
                if (typeof e !== "string") {
                    return null;
                }
                if (e.length > s) {
                    return null;
                }
                const t = r.loose ? o[n.LOOSE] : o[n.FULL];
                if (!t.test(e)) {
                    return null;
                }
                try {
                    return new i(e, r);
                } catch (e) {
                    return null;
                }
            };
            e.exports = parse;
        },
        944: (e, r, t)=>{
            const s = t(834);
            const patch = (e, r)=>new s(e, r).patch;
            e.exports = patch;
        },
        304: (e, r, t)=>{
            const s = t(815);
            const prerelease = (e, r)=>{
                const t = s(e, r);
                return t && t.prerelease.length ? t.prerelease : null;
            };
            e.exports = prerelease;
        },
        503: (e, r, t)=>{
            const s = t(756);
            const rcompare = (e, r, t)=>s(r, e, t);
            e.exports = rcompare;
        },
        548: (e, r, t)=>{
            const s = t(406);
            const rsort = (e, r)=>e.sort((e, t)=>s(t, e, r));
            e.exports = rsort;
        },
        177: (e, r, t)=>{
            const s = t(798);
            const satisfies = (e, r, t)=>{
                try {
                    r = new s(r, t);
                } catch (e) {
                    return false;
                }
                return r.test(e);
            };
            e.exports = satisfies;
        },
        892: (e, r, t)=>{
            const s = t(406);
            const sort = (e, r)=>e.sort((e, t)=>s(e, t, r));
            e.exports = sort;
        },
        49: (e, r, t)=>{
            const s = t(815);
            const valid = (e, r)=>{
                const t = s(e, r);
                return t ? t.version : null;
            };
            e.exports = valid;
        },
        553: (e, r, t)=>{
            const s = t(608);
            e.exports = {
                re: s.re,
                src: s.src,
                tokens: s.t,
                SEMVER_SPEC_VERSION: t(370).SEMVER_SPEC_VERSION,
                SemVer: t(834),
                compareIdentifiers: t(154).compareIdentifiers,
                rcompareIdentifiers: t(154).rcompareIdentifiers,
                parse: t(815),
                valid: t(49),
                clean: t(909),
                inc: t(77),
                diff: t(843),
                major: t(973),
                minor: t(70),
                patch: t(944),
                prerelease: t(304),
                compare: t(756),
                rcompare: t(503),
                compareLoose: t(473),
                compareBuild: t(406),
                sort: t(892),
                rsort: t(548),
                gt: t(850),
                lt: t(957),
                eq: t(83),
                neq: t(818),
                gte: t(488),
                lte: t(551),
                cmp: t(96),
                coerce: t(778),
                Comparator: t(842),
                Range: t(798),
                satisfies: t(177),
                toComparators: t(504),
                maxSatisfying: t(795),
                minSatisfying: t(530),
                minVersion: t(226),
                validRange: t(802),
                outside: t(878),
                gtr: t(114),
                ltr: t(848),
                intersects: t(134),
                simplifyRange: t(799),
                subset: t(654)
            };
        },
        370: (e)=>{
            const r = "2.0.0";
            const t = 256;
            const s = Number.MAX_SAFE_INTEGER || 9007199254740991;
            const o = 16;
            e.exports = {
                SEMVER_SPEC_VERSION: r,
                MAX_LENGTH: t,
                MAX_SAFE_INTEGER: s,
                MAX_SAFE_COMPONENT_LENGTH: o
            };
        },
        435: (e)=>{
            const r = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e)=>console.error("SEMVER", ...e) : ()=>{};
            e.exports = r;
        },
        154: (e)=>{
            const r = /^[0-9]+$/;
            const compareIdentifiers = (e, t)=>{
                const s = r.test(e);
                const o = r.test(t);
                if (s && o) {
                    e = +e;
                    t = +t;
                }
                return e === t ? 0 : s && !o ? -1 : o && !s ? 1 : e < t ? -1 : 1;
            };
            const rcompareIdentifiers = (e, r)=>compareIdentifiers(r, e);
            e.exports = {
                compareIdentifiers: compareIdentifiers,
                rcompareIdentifiers: rcompareIdentifiers
            };
        },
        608: (e, r, t)=>{
            const { MAX_SAFE_COMPONENT_LENGTH: s  } = t(370);
            const o = t(435);
            r = e.exports = {};
            const n = r.re = [];
            const i = r.src = [];
            const a = r.t = {};
            let l = 0;
            const createToken = (e, r, t)=>{
                const s = l++;
                o(s, r);
                a[e] = s;
                i[s] = r;
                n[s] = new RegExp(r, t ? "g" : undefined);
            };
            createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
            createToken("NUMERICIDENTIFIERLOOSE", "[0-9]+");
            createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
            createToken("MAINVERSION", `(${i[a.NUMERICIDENTIFIER]})\\.` + `(${i[a.NUMERICIDENTIFIER]})\\.` + `(${i[a.NUMERICIDENTIFIER]})`);
            createToken("MAINVERSIONLOOSE", `(${i[a.NUMERICIDENTIFIERLOOSE]})\\.` + `(${i[a.NUMERICIDENTIFIERLOOSE]})\\.` + `(${i[a.NUMERICIDENTIFIERLOOSE]})`);
            createToken("PRERELEASEIDENTIFIER", `(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`);
            createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`);
            createToken("PRERELEASE", `(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`);
            createToken("PRERELEASELOOSE", `(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`);
            createToken("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
            createToken("BUILD", `(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`);
            createToken("FULLPLAIN", `v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`);
            createToken("FULL", `^${i[a.FULLPLAIN]}$`);
            createToken("LOOSEPLAIN", `[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`);
            createToken("LOOSE", `^${i[a.LOOSEPLAIN]}$`);
            createToken("GTLT", "((?:<|>)?=?)");
            createToken("XRANGEIDENTIFIERLOOSE", `${i[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
            createToken("XRANGEIDENTIFIER", `${i[a.NUMERICIDENTIFIER]}|x|X|\\*`);
            createToken("XRANGEPLAIN", `[v=\\s]*(${i[a.XRANGEIDENTIFIER]})` + `(?:\\.(${i[a.XRANGEIDENTIFIER]})` + `(?:\\.(${i[a.XRANGEIDENTIFIER]})` + `(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?` + `)?)?`);
            createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})` + `(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?` + `)?)?`);
            createToken("XRANGE", `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`);
            createToken("XRANGELOOSE", `^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`);
            createToken("COERCE", `${"(^|[^\\d])" + "(\\d{1,"}${s}})` + `(?:\\.(\\d{1,${s}}))?` + `(?:\\.(\\d{1,${s}}))?` + `(?:$|[^\\d])`);
            createToken("COERCERTL", i[a.COERCE], true);
            createToken("LONETILDE", "(?:~>?)");
            createToken("TILDETRIM", `(\\s*)${i[a.LONETILDE]}\\s+`, true);
            r.tildeTrimReplace = "$1~";
            createToken("TILDE", `^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`);
            createToken("TILDELOOSE", `^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`);
            createToken("LONECARET", "(?:\\^)");
            createToken("CARETTRIM", `(\\s*)${i[a.LONECARET]}\\s+`, true);
            r.caretTrimReplace = "$1^";
            createToken("CARET", `^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`);
            createToken("CARETLOOSE", `^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`);
            createToken("COMPARATORLOOSE", `^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`);
            createToken("COMPARATOR", `^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`);
            createToken("COMPARATORTRIM", `(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`, true);
            r.comparatorTrimReplace = "$1$2$3";
            createToken("HYPHENRANGE", `^\\s*(${i[a.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${i[a.XRANGEPLAIN]})` + `\\s*$`);
            createToken("HYPHENRANGELOOSE", `^\\s*(${i[a.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${i[a.XRANGEPLAINLOOSE]})` + `\\s*$`);
            createToken("STAR", "(<|>)?=?\\s*\\*");
            createToken("GTE0", "^\\s*>=\\s*0.0.0\\s*$");
            createToken("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
        },
        114: (e, r, t)=>{
            const s = t(878);
            const gtr = (e, r, t)=>s(e, r, ">", t);
            e.exports = gtr;
        },
        134: (e, r, t)=>{
            const s = t(798);
            const intersects = (e, r, t)=>{
                e = new s(e, t);
                r = new s(r, t);
                return e.intersects(r);
            };
            e.exports = intersects;
        },
        848: (e, r, t)=>{
            const s = t(878);
            const ltr = (e, r, t)=>s(e, r, "<", t);
            e.exports = ltr;
        },
        795: (e, r, t)=>{
            const s = t(834);
            const o = t(798);
            const maxSatisfying = (e, r, t)=>{
                let n = null;
                let i = null;
                let a = null;
                try {
                    a = new o(r, t);
                } catch (e) {
                    return null;
                }
                e.forEach((e)=>{
                    if (a.test(e)) {
                        if (!n || i.compare(e) === -1) {
                            n = e;
                            i = new s(n, t);
                        }
                    }
                });
                return n;
            };
            e.exports = maxSatisfying;
        },
        530: (e, r, t)=>{
            const s = t(834);
            const o = t(798);
            const minSatisfying = (e, r, t)=>{
                let n = null;
                let i = null;
                let a = null;
                try {
                    a = new o(r, t);
                } catch (e) {
                    return null;
                }
                e.forEach((e)=>{
                    if (a.test(e)) {
                        if (!n || i.compare(e) === 1) {
                            n = e;
                            i = new s(n, t);
                        }
                    }
                });
                return n;
            };
            e.exports = minSatisfying;
        },
        226: (e, r, t)=>{
            const s = t(834);
            const o = t(798);
            const n = t(850);
            const minVersion = (e, r)=>{
                e = new o(e, r);
                let t = new s("0.0.0");
                if (e.test(t)) {
                    return t;
                }
                t = new s("0.0.0-0");
                if (e.test(t)) {
                    return t;
                }
                t = null;
                for(let r = 0; r < e.set.length; ++r){
                    const o = e.set[r];
                    o.forEach((e)=>{
                        const r = new s(e.semver.version);
                        switch(e.operator){
                            case ">":
                                if (r.prerelease.length === 0) {
                                    r.patch++;
                                } else {
                                    r.prerelease.push(0);
                                }
                                r.raw = r.format();
                            case "":
                            case ">=":
                                if (!t || n(t, r)) {
                                    t = r;
                                }
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw new Error(`Unexpected operation: ${e.operator}`);
                        }
                    });
                }
                if (t && e.test(t)) {
                    return t;
                }
                return null;
            };
            e.exports = minVersion;
        },
        878: (e, r, t)=>{
            const s = t(834);
            const o = t(842);
            const { ANY: n  } = o;
            const i = t(798);
            const a = t(177);
            const l = t(850);
            const c = t(957);
            const p = t(551);
            const E = t(488);
            const outside = (e, r, t, f)=>{
                e = new s(e, f);
                r = new i(r, f);
                let h, u, $, I, R;
                switch(t){
                    case ">":
                        h = l;
                        u = p;
                        $ = c;
                        I = ">";
                        R = ">=";
                        break;
                    case "<":
                        h = c;
                        u = E;
                        $ = l;
                        I = "<";
                        R = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"');
                }
                if (a(e, r, f)) {
                    return false;
                }
                for(let t = 0; t < r.set.length; ++t){
                    const s = r.set[t];
                    let i = null;
                    let a = null;
                    s.forEach((e)=>{
                        if (e.semver === n) {
                            e = new o(">=0.0.0");
                        }
                        i = i || e;
                        a = a || e;
                        if (h(e.semver, i.semver, f)) {
                            i = e;
                        } else if ($(e.semver, a.semver, f)) {
                            a = e;
                        }
                    });
                    if (i.operator === I || i.operator === R) {
                        return false;
                    }
                    if ((!a.operator || a.operator === I) && u(e, a.semver)) {
                        return false;
                    } else if (a.operator === R && $(e, a.semver)) {
                        return false;
                    }
                }
                return true;
            };
            e.exports = outside;
        },
        799: (e, r, t)=>{
            const s = t(177);
            const o = t(756);
            e.exports = (e, r, t)=>{
                const n = [];
                let i = null;
                let a = null;
                const l = e.sort((e, r)=>o(e, r, t));
                for (const e of l){
                    const o = s(e, r, t);
                    if (o) {
                        a = e;
                        if (!i) i = e;
                    } else {
                        if (a) {
                            n.push([
                                i,
                                a
                            ]);
                        }
                        a = null;
                        i = null;
                    }
                }
                if (i) n.push([
                    i,
                    null
                ]);
                const c = [];
                for (const [e, r] of n){
                    if (e === r) c.push(e);
                    else if (!r && e === l[0]) c.push("*");
                    else if (!r) c.push(`>=${e}`);
                    else if (e === l[0]) c.push(`<=${r}`);
                    else c.push(`${e} - ${r}`);
                }
                const p = c.join(" || ");
                const E = typeof r.raw === "string" ? r.raw : String(r);
                return p.length < E.length ? p : r;
            };
        },
        654: (e, r, t)=>{
            const s = t(798);
            const { ANY: o  } = t(842);
            const n = t(177);
            const i = t(756);
            const subset = (e, r, t)=>{
                e = new s(e, t);
                r = new s(r, t);
                let o = false;
                e: for (const s of e.set){
                    for (const e of r.set){
                        const r = simpleSubset(s, e, t);
                        o = o || r !== null;
                        if (r) continue e;
                    }
                    if (o) return false;
                }
                return true;
            };
            const simpleSubset = (e, r, t)=>{
                if (e.length === 1 && e[0].semver === o) return r.length === 1 && r[0].semver === o;
                const s = new Set;
                let a, l;
                for (const r of e){
                    if (r.operator === ">" || r.operator === ">=") a = higherGT(a, r, t);
                    else if (r.operator === "<" || r.operator === "<=") l = lowerLT(l, r, t);
                    else s.add(r.semver);
                }
                if (s.size > 1) return null;
                let c;
                if (a && l) {
                    c = i(a.semver, l.semver, t);
                    if (c > 0) return null;
                    else if (c === 0 && (a.operator !== ">=" || l.operator !== "<=")) return null;
                }
                for (const e of s){
                    if (a && !n(e, String(a), t)) return null;
                    if (l && !n(e, String(l), t)) return null;
                    for (const s of r){
                        if (!n(e, String(s), t)) return false;
                    }
                    return true;
                }
                let p, E;
                let f, h;
                for (const e of r){
                    h = h || e.operator === ">" || e.operator === ">=";
                    f = f || e.operator === "<" || e.operator === "<=";
                    if (a) {
                        if (e.operator === ">" || e.operator === ">=") {
                            p = higherGT(a, e, t);
                            if (p === e) return false;
                        } else if (a.operator === ">=" && !n(a.semver, String(e), t)) return false;
                    }
                    if (l) {
                        if (e.operator === "<" || e.operator === "<=") {
                            E = lowerLT(l, e, t);
                            if (E === e) return false;
                        } else if (l.operator === "<=" && !n(l.semver, String(e), t)) return false;
                    }
                    if (!e.operator && (l || a) && c !== 0) return false;
                }
                if (a && f && !l && c !== 0) return false;
                if (l && h && !a && c !== 0) return false;
                return true;
            };
            const higherGT = (e, r, t)=>{
                if (!e) return r;
                const s = i(e.semver, r.semver, t);
                return s > 0 ? e : s < 0 ? r : r.operator === ">" && e.operator === ">=" ? r : e;
            };
            const lowerLT = (e, r, t)=>{
                if (!e) return r;
                const s = i(e.semver, r.semver, t);
                return s < 0 ? e : s > 0 ? r : r.operator === "<" && e.operator === "<=" ? r : e;
            };
            e.exports = subset;
        },
        504: (e, r, t)=>{
            const s = t(798);
            const toComparators = (e, r)=>new s(e, r).set.map((e)=>e.map((e)=>e.value).join(" ").trim().split(" "));
            e.exports = toComparators;
        },
        802: (e, r, t)=>{
            const s = t(798);
            const validRange = (e, r)=>{
                try {
                    return new s(e, r).range || "*";
                } catch (e) {
                    return null;
                }
            };
            e.exports = validRange;
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var s = r[t];
        if (s !== undefined) {
            return s.exports;
        }
        var o = r[t] = {
            exports: {}
        };
        var n = true;
        try {
            e[t](o, o.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete r[t];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(553);
    module.exports = t;
})();

}.call(this) }),
}]);


//# sourceMappingURL=87416_next_dist_compiled_semver_index.js.map