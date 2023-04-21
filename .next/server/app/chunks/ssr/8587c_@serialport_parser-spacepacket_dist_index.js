(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/8587c_@serialport_parser-spacepacket_dist_index.js", {

"[project-with-next]/node_modules/.pnpm/@serialport+parser-spacepacket@10.5.0/node_modules/@serialport/parser-spacepacket/dist/index.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpacePacketParser = void 0;
const stream_1 = __turbopack_external_require__("stream");
const utils_1 = __turbopack_require__("[project-with-next]/node_modules/.pnpm/@serialport+parser-spacepacket@10.5.0/node_modules/@serialport/parser-spacepacket/dist/utils.js (ecmascript, ssr)");
class SpacePacketParser extends stream_1.Transform {
    constructor(options = {}){
        super({
            ...options,
            objectMode: true
        });
        this.timeCodeFieldLength = options.timeCodeFieldLength || 0;
        this.ancillaryDataFieldLength = options.ancillaryDataFieldLength || 0;
        this.dataSlice = this.timeCodeFieldLength + this.ancillaryDataFieldLength;
        this.dataBuffer = Buffer.alloc(0);
        this.headerBuffer = Buffer.alloc(0);
        this.dataLength = 0;
        this.expectingHeader = true;
    }
    pushCompletedPacket() {
        if (!this.header) {
            throw new Error('Missing header');
        }
        const timeCode = Buffer.from(this.dataBuffer.slice(0, this.timeCodeFieldLength));
        const ancillaryData = Buffer.from(this.dataBuffer.slice(this.timeCodeFieldLength, this.timeCodeFieldLength + this.ancillaryDataFieldLength));
        const data = Buffer.from(this.dataBuffer.slice(this.dataSlice, this.dataLength));
        const completedPacket = {
            header: {
                ...this.header
            },
            data: data.toString()
        };
        if (timeCode.length > 0 || ancillaryData.length > 0) {
            completedPacket.secondaryHeader = {};
            if (timeCode.length) {
                completedPacket.secondaryHeader.timeCode = timeCode.toString();
            }
            if (ancillaryData.length) {
                completedPacket.secondaryHeader.ancillaryData = ancillaryData.toString();
            }
        }
        this.push(completedPacket);
        const nextChunk = Buffer.from(this.dataBuffer.slice(this.dataLength));
        if (nextChunk.length >= utils_1.HEADER_LENGTH) {
            this.extractHeader(nextChunk);
        } else {
            this.headerBuffer = nextChunk;
            this.dataBuffer = Buffer.alloc(0);
            this.expectingHeader = true;
            this.dataLength = 0;
            this.header = undefined;
        }
    }
    extractHeader(chunk) {
        const headerAsBuffer = Buffer.concat([
            this.headerBuffer,
            chunk
        ]);
        const startOfDataBuffer = headerAsBuffer.slice(utils_1.HEADER_LENGTH);
        if (headerAsBuffer.length >= utils_1.HEADER_LENGTH) {
            this.header = (0, utils_1.convertHeaderBufferToObj)(headerAsBuffer);
            this.dataLength = this.header.dataLength;
            this.headerBuffer = Buffer.alloc(0);
            this.expectingHeader = false;
        } else {
            this.headerBuffer = headerAsBuffer;
        }
        if (startOfDataBuffer.length > 0) {
            this.dataBuffer = Buffer.from(startOfDataBuffer);
            if (this.dataBuffer.length >= this.dataLength) {
                this.pushCompletedPacket();
            }
        }
    }
    _transform(chunk, encoding, cb) {
        if (this.expectingHeader) {
            this.extractHeader(chunk);
        } else {
            this.dataBuffer = Buffer.concat([
                this.dataBuffer,
                chunk
            ]);
            if (this.dataBuffer.length >= this.dataLength) {
                this.pushCompletedPacket();
            }
        }
        cb();
    }
    _flush(cb) {
        const remaining = Buffer.concat([
            this.headerBuffer,
            this.dataBuffer
        ]);
        const remainingArray = Array.from(remaining);
        this.push(remainingArray);
        cb();
    }
}
exports.SpacePacketParser = SpacePacketParser;

}.call(this) }),
"[project-with-next]/node_modules/.pnpm/@serialport+parser-spacepacket@10.5.0/node_modules/@serialport/parser-spacepacket/dist/utils.js (ecmascript, ssr)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname, m: module, e: exports }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertHeaderBufferToObj = exports.HEADER_LENGTH = void 0;
exports.HEADER_LENGTH = 6;
const toOctetStr = (num)=>{
    let str = Number(num).toString(2);
    while(str.length < 8){
        str = `0${str}`;
    }
    return str;
};
const convertHeaderBufferToObj = (buf)=>{
    const headerStr = Array.from(buf.slice(0, exports.HEADER_LENGTH)).reduce((accum, curr)=>`${accum}${toOctetStr(curr)}`, '');
    const isVersion1 = headerStr.slice(0, 3) === '000';
    const versionNumber = isVersion1 ? 1 : 'UNKNOWN_VERSION';
    const type = Number(headerStr[3]);
    const secondaryHeader = Number(headerStr[4]);
    const apid = parseInt(headerStr.slice(5, 16), 2);
    const sequenceFlags = parseInt(headerStr.slice(16, 18), 2);
    const packetName = parseInt(headerStr.slice(18, 32), 2);
    const dataLength = parseInt(headerStr.slice(-16), 2) + 1;
    return {
        versionNumber,
        identification: {
            apid,
            secondaryHeader,
            type
        },
        sequenceControl: {
            packetName,
            sequenceFlags
        },
        dataLength
    };
};
exports.convertHeaderBufferToObj = convertHeaderBufferToObj;

}.call(this) }),
}]);


//# sourceMappingURL=8587c_@serialport_parser-spacepacket_dist_index.js.map