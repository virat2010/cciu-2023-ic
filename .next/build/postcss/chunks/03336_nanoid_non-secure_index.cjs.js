(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/03336_nanoid_non-secure_index.cjs.js", {

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
}]);


//# sourceMappingURL=03336_nanoid_non-secure_index.cjs.js.map