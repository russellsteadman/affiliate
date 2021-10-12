import AutoConfig from './shared/autoConfig';
import Affiliate, { AffiliateConfig } from './Affiliate';
import Log from './shared/log';
import { getNodeData, setNodeData } from './shared/nodeTools';

/**
 * @class Set up the global Affiliate export
 */
class Generator {
  state: {
    instances: Affiliate[];
    auto?: Affiliate;
  } = {
    instances: [],
  };

  constructor() {
    try {
      let config = AutoConfig();
      if (typeof config === 'object') {
        let auto = this.create(config);
        Log(false, auto);
        this.state.auto = auto;
        auto.attach();
      }
    } catch (e) {
      Log(true, e);
    }
  }

  /**
   * Create a new Affiliate instance
   *
   * @function
   * @param {object} config Configuration options for Affiliate
   * @returns {object} Affiliate instance
   */
  create = (config: Partial<AffiliateConfig>) => {
    let Instance = new Affiliate(config);
    this.state.instances.push(Instance);
    return Instance;
  };

  /**
   * Expose the instance list
   *
   * @type {Array.<object>}
   */
  get instances() {
    return [...this.state.instances];
  }

  /**
   * Detach automatic link traversal
   *
   * @function
   */
  detachAll = () => {
    for (let i in this.state.instances) {
      this.state.instances[i].detach();
    }
  };

  /**
   * Revert all traversed links to their non-affiliated state
   *
   * @function
   */
  revert = () => {
    this.detachAll();
    let nodes = <HTMLAnchorElement[]>(
      [].slice.call(document.body.getElementsByTagName('a'))
    );
    for (let i in nodes) {
      let linkData = getNodeData(nodes[i]);
      if (linkData && linkData.was) {
        nodes[i].href = linkData.was;
        setNodeData(nodes[i], {});
      }
    }
  };
}

export default new Generator();
