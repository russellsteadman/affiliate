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
      const config = AutoConfig();
      if (typeof config === 'object') {
        const auto = this.create(config);
        Log(false, auto);
        this.state.auto = auto;
        auto.attach();
      }
    } catch (e) {
      Log(true, e as Error);
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
    const Instance = new Affiliate(config);
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
    this.state.instances.forEach((instance) => instance.detach());
  };

  /**
   * Revert all traversed links to their non-affiliated state
   *
   * @function
   */
  revert = () => {
    this.detachAll();
    const nodes = Object.values(document.body.getElementsByTagName('a'));
    nodes.forEach((node) => {
      const linkData = getNodeData(node);
      if (linkData && typeof linkData.was === 'string') {
        node.href = linkData.was;
        setNodeData(node, {});
      }
    });
  };
}

export default new Generator();
