import { hasMutationObserver, hasURL } from './shared/features';
import Log from './shared/log';
import { getNodeData, setNodeData } from './shared/nodeTools';

export interface AffiliateConfigTag {
  hosts: string | string[];
  query?: { [key: string]: string };
  replace?: {
    to: string;
    from: string;
  }[];
  modify?: (url: URL) => URL | string;
}

export interface AffiliateConfig {
  tags: AffiliateConfigTag[];
  log?: boolean;
}

/**
 * Manages stateful affiliation
 */
class Affiliate {
  state: {
    attached: boolean;
    config: AffiliateConfig;
    hosts: string[];
  } = {
    attached: false,
    config: {
      tags: [],
    },
    hosts: [],
  };
  observer: MutationObserver | undefined = undefined;
  log: typeof Log;

  constructor(config?: Partial<AffiliateConfig>) {
    // Extend the configuration
    config = config ?? {};
    config.tags = config.tags ?? [];

    config.tags.map((tag, i) => {
      if (!config || !config.tags) return;

      // Convert a single host to an array
      if (typeof tag.hosts === 'string') tag.hosts = [tag.hosts];

      // Extend proper tag configuration
      config.tags[i] = {
        query: {},
        replace: [],
        ...tag,
      };

      // Append hosts to full list
      this.state.hosts = [
        ...this.state.hosts,
        ...(<string[]>config.tags[i].hosts),
      ];
    });

    // Set logging function
    this.log = config.log ? Log : () => undefined;

    this.log(false, 'New Instance', config);

    // Check is MutationObserver is supported
    if (hasMutationObserver) {
      // Initialize MutationObserver
      this.observer = new window.MutationObserver((mutations) => {
        // This function is called for every DOM mutation

        // Has a mutation been logged
        let emitted = false;

        mutations.forEach((mutation) => {
          // If the attributes of the link have been modified
          if (mutation.type === 'attributes') {
            // Skip links without an href
            if (mutation.attributeName !== 'href') return;

            const href = (<HTMLAnchorElement>mutation.target).href;
            const linkData = getNodeData(mutation.target);

            // Skip links without a modified href
            if (linkData.is && linkData.is === href) return;
          }

          // Only calls on first mutation
          if (!emitted) {
            this.log(false, 'DOM Mutation', mutation);
            emitted = true;
          }

          // Scan the node and subnodes if there are any
          this.traverse(<HTMLElement>mutation.target);
        });
      });
    }

    // Set internal state
    this.state.config = <AffiliateConfig>config;
  }

  /**
   * Manual function to search the DOM for unaffiliated links
   */
  traverse(nodeSet: HTMLElement = document.body): Affiliate {
    if (
      typeof nodeSet !== 'object' ||
      typeof nodeSet.getElementsByTagName !== 'function'
    )
      return this;

    if (!hasURL) {
      this.log(true, 'This browser needs a URL polyfill.');
      return this;
    }

    this.log(false, 'Traversing DOM...');

    // Reduce link collection to array
    const collection = nodeSet.getElementsByTagName('a');
    let nodes = <HTMLElement[]>Object.values(collection);

    // If the nodeSet is a single link, turn to array
    if (nodeSet.nodeName.toLowerCase() === 'a') nodes = [nodeSet];

    this.log(false, `Found ${nodes.length + 1} nodes...`);

    // Go through each link
    nodes.forEach((node) => {
      // Check if it is actually linking
      if (!node || !('href' in node)) return;

      // Parse the URL natively
      const url = new URL(
        (<HTMLAnchorElement>node).href ?? '',
        window.location.origin,
      );

      // Only modify hosts provided.
      if (!this.state.hosts.includes(url.host)) return;

      this.modifyURL(url, <HTMLAnchorElement>node);
    });

    return this;
  }

  /**
   * Modify the URL of a matching link while preserving the original link state
   */
  modifyURL = (url: URL, node: HTMLAnchorElement) => {
    // Check if URL is already modified
    const linkData = getNodeData(node);
    if (linkData.is && linkData.is === url.href) return;

    // Preserve the original URL
    const originalURL = url.href;

    this.log(false, 'Discovered URL: ' + url.href);

    const modifiedUrl = this.convert(url);

    // Update the href tag and save the url to the DOM node
    node.href = modifiedUrl;
    setNodeData(node, {
      was: originalURL,
      is: url.href,
    });
  };

  /**
   * Modify a manually provided URL
   */
  convert = (url: string | URL): string => {
    // Convert input URL object to string
    if (typeof url === 'object') url = url.href;

    // Check if URL global exists
    if (!hasURL) {
      this.log(true, 'This browser needs a URL polyfill.');
      return url;
    }

    // Parse the URL natively
    const modURL: URL = new URL(url, window.location.origin);

    // Only modify host provided
    if (!this.state.hosts.includes(modURL.host)) return modURL.href;

    // Go through each tag
    for (const tag of this.state.config.tags) {
      // Check if the host matches
      if (tag.hosts.includes(modURL.host)) {
        // Change query variables
        if (tag.query) {
          Object.keys(tag.query ?? {}).forEach((key) => {
            if (typeof tag.query === 'object')
              modURL.searchParams.set(key, tag.query[key]);
          });
        }

        // Run the modification function
        if (typeof tag.modify === 'function') {
          try {
            let returnedURL = tag.modify(modURL);
            if (typeof returnedURL === 'object') returnedURL = returnedURL.href;
            modURL.href = returnedURL;
          } catch (e) {
            Log(true, e as Error);
          }
        }

        // Replace certain parts of the url
        tag.replace?.forEach((replacement) => {
          modURL.href = modURL.href.replace(replacement.from, replacement.to);
        });

        return modURL.href;
      }
    }

    return modURL.href;
  };

  /**
   * Attach the mutation observer
   */
  attach = (): Affiliate => {
    // Cannot attach twice, cannot attach for node
    if (this.state.attached || typeof document === 'undefined') return this;

    // Get readyState, or the loading state of the DOM
    const { readyState } = document;

    if (readyState === 'complete' || readyState === 'interactive') {
      // Set attached to true
      this.state.attached = true;

      // Run through the entire body tag
      this.traverse();

      if (hasMutationObserver && this.observer) {
        // Attach the observer
        this.observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
          attributeFilter: ['href'],
        });
      } else {
        this.log(false, 'Browser does not support MutationObserver.');
      }
    } else {
      // Wait until the DOM loads
      window.addEventListener('DOMContentLoaded', this.attach);
    }

    return this;
  };

  /**
   * Detach the mutation observer
   */
  detach = (): Affiliate => {
    if (!hasMutationObserver || !this.observer) return this;
    this.state.attached = false;
    this.observer.disconnect();
    this.log(false, 'Observer disconnected.');
    return this;
  };
}

export default Affiliate;
