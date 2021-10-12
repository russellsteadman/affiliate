import URLParse from 'url-parse';
import Log from './shared/log';
export interface AffiliateConfigTag {
    hosts: string | string[];
    query?: {
        [key: string]: string;
    };
    replace?: {
        to: string;
        from: string;
    }[];
    modify?: (url: URLParse) => URLParse | string;
}
export interface AffiliateConfig {
    tags: AffiliateConfigTag[];
    log?: boolean;
}
/**
 * @class Manages stateful affiliation
 */
declare class Affiliate {
    state: {
        attached: boolean;
        config: AffiliateConfig;
        hosts: string[];
    };
    observer: MutationObserver | undefined;
    log: typeof Log;
    constructor(config?: Partial<AffiliateConfig>);
    /**
     * Manual function to search the DOM for unaffiliated links
     *
     * @function
     * @param {object=} nodeSet The node to traverse for links (default: document.body)
     */
    traverse(nodeSet?: HTMLElement): void;
    /**
     * Modify the URL of a matching link while preserving the original link state
     *
     * @private
     * @function
     * @param {string} url Original url string
     * @param {object} node Anchor link node
     * @param {object} tag Matching configuration tag
     */
    modifyURL: (url: URLParse, node: HTMLAnchorElement, tag: AffiliateConfigTag) => void;
    /**
     * Attach the mutation observer
     *
     * @function
     */
    attach: () => void;
    /**
     * Detach the mutation observer
     *
     * @function
     */
    detach: () => void;
}
export default Affiliate;
