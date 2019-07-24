// Docile stores data relative to DOM elements
const Docile = require('docile');
// AutoConfig stores data relative to DOM elements
const AutoConfig = require('./AutoConfig');
// Affiliate is the main class for affiliate instances
const Affiliate = require('./Affiliate');
// Log safely implements console.log for older browsers
const Log = require('./Log');

/**
 * @class Set up the global Affiliate export
 */
class Generator {
    #state = {
        instances: [],
        auto: null,
    };

    constructor() {
        try {
            let config = AutoConfig();
            if (typeof config === 'object') {
                let auto = this.create(config);
                Log(false, auto);
                this.#state.auto = auto;
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
    create = (config) => {
        let Instance = new Affiliate(config);
        this.#state.instances.push(Instance);
        return Instance;
    };

    /**
     * Expose the instance list
     * 
     * @type {Array.<object>}
     */
    get instances() {
        return [].concat(this.#state.instances);
    }

    /**
     * Detach automatic link traversal
     * 
     * @function
     */
    detachAll = () => {
        for (let i in this.#state.instances) {
            this.#state.instances[i].detach();
        }
    };

    /**
     * Revert all traversed links to their non-affiliated state
     * 
     * @function
     */
    revert = () => {
        this.detachAll();
        let nodes = [].slice.call(document.body.getElementsByTagName('a'));
        for (let i in nodes) {
            let linkData = Docile.get(nodes[i]);
            if (linkData && linkData.was) {
                nodes[i].setAttribute('href', linkData.was);
                Docile.set(nodes[i], {});
            }
        }
    };
}

module.exports = new Generator();