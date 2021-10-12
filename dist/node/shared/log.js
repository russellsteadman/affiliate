"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * log handles formatting and doesn't throw errors is console is undefined
 *
 * @module affiliate/src/Log
 */
function default_1(isError, ...args) {
    const textId = '[Affiliate] ';
    if (typeof console === 'object') {
        if (isError) {
            console.error(textId, ...args);
        }
        else {
            console.log(textId, ...args);
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=log.js.map