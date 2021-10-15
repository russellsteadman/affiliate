"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasURL = exports.hasMutationObserver = void 0;
// Check for MutationObserver
exports.hasMutationObserver = typeof window === 'object' &&
    !(typeof window.MutationObserver === 'undefined');
// Check for URL and URLSearchParams
exports.hasURL = typeof URL === 'function' && typeof URLSearchParams === 'function';
//# sourceMappingURL=features.js.map