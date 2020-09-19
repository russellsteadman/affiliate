import URLParse from "url-parse";
import Docile from "docile/src/docile";
import Log from "./Log";

// Check for MutationObserver
const canObserve = !(typeof window.MutationObserver === "undefined");

export interface AffiliateConfigTag {
  hosts: string | string[];
  query?: { [key: string]: string };
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
      if (typeof tag.hosts === "string") tag.hosts = [tag.hosts];

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
    this.log = config.log ? Log : () => {};

    this.log(false, "New Instance", config);

    // Check is MutationObserver is supported
    if (canObserve) {
      // Initialize MutationObserver
      this.observer = new window.MutationObserver((mutations) => {
        // This function is called for every DOM mutation

        // Has a mutation been logged
        let emitted = false;

        for (let i in mutations) {
          // If the attributes of the link have been modified
          if (mutations[i].type === "attributes") {
            // Skip links without an href
            if (mutations[i].attributeName !== "href") continue;

            let href = (<HTMLAnchorElement>mutations[i].target).href;
            let linkData = Docile.get(<HTMLElement>mutations[i].target) || {};

            // Skip links without a modified href
            if (linkData.is && linkData.is === href) continue;
          }

          // Only calls on first mutation
          if (!emitted) {
            this.log(false, "DOM Mutation", mutations[i]);
            emitted = true;
          }

          // Scan the node and subnodes if there are any
          this.traverse(<HTMLElement>mutations[i].target);
        }
      });
    }

    // Set internal state
    this.state.config = <AffiliateConfig>config;
  }

  /**
   * Manual function to search the DOM for unaffiliated links
   *
   * @function
   * @param {object=} nodeSet The node to traverse for links (default: document.body)
   */
  traverse(nodeSet: HTMLElement = document.body) {
    if (
      typeof nodeSet !== "object" ||
      typeof nodeSet.getElementsByTagName !== "function"
    )
      return;

    this.log(false, "Traversing DOM...");

    // Reduce link collection to array
    let collection = nodeSet.getElementsByTagName("a");
    let nodes = <HTMLElement[]>Object.values(collection);

    // If the nodeSet is a single link, turn to array
    if (nodeSet.nodeName.toLowerCase() === "a") nodes = [nodeSet];

    // Go through each link
    for (let o in nodes) {
      // Check if it is actually linking
      if (!nodes[o] || "href" in nodes[o]) continue;

      // Parse the URL via url-parse
      let url = URLParse((<HTMLAnchorElement>nodes[o]).href ?? "", true);

      // Only modify hosts provided.
      if (this.state.hosts.indexOf(url.host) === -1) continue;
      for (let i in this.state.config.tags) {
        if (this.state.config.tags[i].hosts.indexOf(url.host) !== -1) {
          this.modifyURL(
            url,
            <HTMLAnchorElement>nodes[o],
            this.state.config.tags[i]
          );
        }
      }
    }
  }

  /**
   * Modify the URL of a matching link while preserving the original link state
   *
   * @private
   * @function
   * @param {string} url Original url string
   * @param {object} node Anchor link node
   * @param {object} tag Matching configuration tag
   */
  modifyURL = (
    url: URLParse,
    node: HTMLAnchorElement,
    tag: AffiliateConfigTag
  ) => {
    // Check if URL is already modified
    let linkData = Docile.get(node) || {};
    if (linkData.is && linkData.is === url.href) return;

    // Preserve the original URL
    let originalURL = url.href;

    this.log(false, "Discovered URL: " + url.href);

    // Change query variables
    url.set("query", { ...url.query, ...tag.query });

    // Run the modification function
    if (typeof tag.modify === "function") {
      try {
        let returnedURL = tag.modify(url);
        if (typeof returnedURL === "object") returnedURL = returnedURL.href;
        url = URLParse(returnedURL, true);
      } catch (e) {
        Log(true, e);
      }
    }

    // Replace certain parts of the url
    let modifiedUrl = url.href;
    tag.replace?.forEach((replacement) => {
      modifiedUrl = modifiedUrl.replace(replacement.from, replacement.to);
    });

    // Update the href tag and save the url to the DOM node
    node.href = modifiedUrl;
    Docile.set(node, {
      was: originalURL,
      is: url,
    });
  };

  /**
   * Attach the mutation observer
   *
   * @function
   */
  attach: () => void = () => {
    // Cannot attach twice
    if (this.state.attached) return;

    // Get readyState, or the loading state of the DOM
    let { readyState } = document;

    if (readyState === "complete" || readyState === "interactive") {
      // Set attached to true
      this.state.attached = true;

      // Run through the entire body tag
      this.traverse();

      if (canObserve && this.observer) {
        // Attach the observer
        this.observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
          attributeFilter: ["href"],
        });
      } else {
        this.log(false, "Browser does not support MutationObserver.");
      }
    } else {
      // Wait until the DOM loads
      return window.addEventListener("DOMContentLoaded", this.attach);
    }
  };

  /**
   * Detach the mutation observer
   *
   * @function
   */
  detach = () => {
    if (!canObserve || !this.observer) return;
    this.state.attached = false;
    this.observer.disconnect();
    this.log(false, "Observer disconnected.");
  };
}

export default Affiliate;
