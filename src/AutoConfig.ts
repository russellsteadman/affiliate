type BreakUpData = string | Array<BreakUpData>;

/* Utility function for parsing data-aff syntax */
const breakUp: (data: BreakUpData, delimiter: string) => BreakUpData = (data: BreakUpData | string, delimiter: string) => {
    if (typeof data === 'object') {
        for (let i in data) {
            data[i] = breakUp(data[i], delimiter);
        }
    } else if (typeof data === 'string') {
        data = data.split(delimiter);
        for (let o in data) {
            data[o] = (<string>data[o]).trim();
        }
    }
    return data;
};

/* Setup automatic configuration */
const AutoConfig = () => {
    let scriptNode = document.getElementById('aff-js');

    if (typeof scriptNode === 'object' && scriptNode !== null) {
        let nodeData = scriptNode.dataset.aff;

        if (typeof nodeData === 'string') {
            let parsedData = <string[][][][]>breakUp(breakUp(breakUp(breakUp(nodeData, '!'), ':'), ','), '=');
            let tags = [];

            for (let i in parsedData) {
                let tag: {
                    hosts: string[],
                    query: { [key: string]: string }
                } = {
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

export default AutoConfig;