"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNodeData = exports.getNodeData = void 0;
const NODE_DATA_KEY = '_aff_data';
const getNodeData = (node) => {
    var _a;
    return (_a = node[NODE_DATA_KEY]) !== null && _a !== void 0 ? _a : {};
};
exports.getNodeData = getNodeData;
const setNodeData = (node, data) => {
    Object.assign(node, { [NODE_DATA_KEY]: data });
};
exports.setNodeData = setNodeData;
//# sourceMappingURL=nodeTools.js.map