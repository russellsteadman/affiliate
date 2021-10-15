declare const NODE_DATA_KEY = "_aff";
declare type DataNode = Node & {
    [NODE_DATA_KEY]?: Record<string, string>;
};
export declare const getNodeData: (node: DataNode) => Record<string, string>;
export declare const setNodeData: (node: DataNode, data: Record<string, string>) => void;
export {};
