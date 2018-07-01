const Docile = require('docile');
const autoConfig = require('./autoConfig');
const Affiliate = require('./Affiliate');
const log = require('./log');

global.instanceList = global.instanceList || [];

let Initialize = function (config) {
    let Instance = new Affiliate(config);
    global.instanceList.push(Instance);
    return Instance;
};

Initialize.instances = () => {
    return [].concat(global.instanceList);
};

Initialize.detachAll = () => {
    for (let i in global.instanceList) {
        global.instanceList[i].detach();
    }
};

Initialize.revert = () => {
    Initialize.detachAll();
    let nodes = [].slice.call(document.body.getElementsByTagName('a'));
    for (let i in nodes) {
        let linkData = Docile.get(nodes[i]);
        if (linkData && linkData.href) {
            nodes[i].setAttribute('href', linkData.href);
            Docile.set(nodes[i], {});
        }
    }
};

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