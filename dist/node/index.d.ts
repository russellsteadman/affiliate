import Affiliate, { AffiliateConfig } from './Affiliate';
/**
 * @class Set up the global Affiliate export
 */
declare class Generator {
    state: {
        instances: Affiliate[];
        auto?: Affiliate;
    };
    constructor();
    /**
     * Create a new Affiliate instance
     *
     * @function
     * @param {object} config Configuration options for Affiliate
     * @returns {object} Affiliate instance
     */
    create: (config: Partial<AffiliateConfig>) => Affiliate;
    /**
     * Expose the instance list
     *
     * @type {Array.<object>}
     */
    get instances(): Affiliate[];
    /**
     * Detach automatic link traversal
     *
     * @function
     */
    detachAll: () => void;
    /**
     * Revert all traversed links to their non-affiliated state
     *
     * @function
     */
    revert: () => void;
}
declare const _default: Generator;
export default _default;
