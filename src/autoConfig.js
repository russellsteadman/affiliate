/* Utility function for parsing data-aff syntax */
const BRK = (data, delimiter) => {
    if (typeof data === 'object') {
        for (let i in data) {
            data[i] = BRK(data[i], delimiter);
        }
    } else if (typeof data === 'string') {
        data = data.split(delimiter);
        for (let o in data) {
            data[o] = data[o].trim();
        }
    }
    return data;
};

/* Setup automatic configuration */
const AutoConfig = () => {
    let scriptNode = document.getElementById('aff-js');

    if (typeof scriptNode === 'object' && scriptNode !== null) {
        let nodeData = scriptNode.getAttribute('data-aff');

        if (typeof nodeData === 'string') {
            let parsedData = BRK(BRK(BRK(BRK(nodeData, '!'), ':'), ','), '=');
            let tags = [];

            for (let i in parsedData) {
                let tag = {
                    hosts: [],
                    query: {}
                };
                for (let o in parsedData[i][0]) {
                    tag.hosts.push(parsedData[i][0][o][0]);
                }
                for (let u in parsedData[i][1]) {
                    tag.query[parsedData[i][1][u][0]] = parsedData[i][1][u][1];
                }
                tags.push(tag);
            }

            return { tags };
        }
    }
};

module.exports = AutoConfig;