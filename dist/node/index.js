"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autoConfig_1 = __importDefault(require("./shared/autoConfig"));
const Affiliate_1 = __importDefault(require("./Affiliate"));
const log_1 = __importDefault(require("./shared/log"));
const nodeTools_1 = require("./shared/nodeTools");
/**
 * @class Set up the global Affiliate export
 */
class Generator {
    constructor() {
        this.state = {
            instances: [],
        };
        /**
         * Create a new Affiliate instance
         *
         * @function
         * @param {object} config Configuration options for Affiliate
         * @returns {object} Affiliate instance
         */
        this.create = (config) => {
            const Instance = new Affiliate_1.default(config);
            this.state.instances.push(Instance);
            return Instance;
        };
        /**
         * Detach automatic link traversal
         *
         * @function
         */
        this.detachAll = () => {
            this.state.instances.forEach((instance) => instance.detach());
        };
        /**
         * Revert all traversed links to their non-affiliated state
         *
         * @function
         */
        this.revert = () => {
            this.detachAll();
            const nodes = Object.values(document.body.getElementsByTagName('a'));
            nodes.forEach((node) => {
                const linkData = (0, nodeTools_1.getNodeData)(node);
                if (linkData && typeof linkData.was === 'string') {
                    node.href = linkData.was;
                    (0, nodeTools_1.setNodeData)(node, {});
                }
            });
        };
        try {
            const config = (0, autoConfig_1.default)();
            if (typeof config === 'object') {
                const auto = this.create(config);
                (0, log_1.default)(false, auto);
                this.state.auto = auto;
                auto.attach();
            }
        }
        catch (e) {
            (0, log_1.default)(true, e);
        }
    }
    /**
     * Expose the instance list
     *
     * @type {Array.<object>}
     */
    get instances() {
        return [...this.state.instances];
    }
}
exports.default = new Generator();
//# sourceMappingURL=index.js.map