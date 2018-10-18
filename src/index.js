// docile stores data relative to DOM elements
const Docile = require('docile');
// autoConfig stores data relative to DOM elements
const autoConfig = require('./autoConfig');
// Affiliate is the main class for affiliate instances
const Affiliate = require('./Affiliate');
// log safely implements console.log for older browsers
const log = require('./log');

// Global list of instances
global.instanceList = global.instanceList || [];

// Initialize is the exported instance generator
let Initialize = function (config) {
    let Instance = new Affiliate(config);
    global.instanceList.push(Instance);
    return Instance;
};

// Expose the instance list
Initialize.instances = () => {
    return [].concat(global.instanceList);
};

// Stops all instances from detecting DOM mutations
Initialize.detachAll = () => {
    for (let i in global.instanceList) {
        global.instanceList[i].detach();
    }
};

// Stops all instances and reverts them to the original links
Initialize.revert = () => {
    Initialize.detachAll();
    let nodes = [].slice.call(document.body.getElementsByTagName('a'));
    for (let i in nodes) {
        let linkData = Docile.get(nodes[i]);
        if (linkData && linkData.was) {
            nodes[i].setAttribute('href', linkData.was);
            Docile.set(nodes[i], {});
        }
    }
};

// Runs automatic configuration
try {
    let config = autoConfig();
    if (typeof config === 'object') {
        let auto = Initialize(config);
        log(false, auto);
        Initialize.automatic = auto;
        auto.attach();
    }
} catch (e) {
    log(true, e);
}

module.exports = Initialize;