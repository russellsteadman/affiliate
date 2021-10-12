declare const NODE_DATA_KEY = "_aff_data";
declare type DataNode = Node & {
    [NODE_DATA_KEY]?: Record<string, any>;
};
export declare const getNodeData: (node: DataNode) => Record<string, any>;
export declare const setNodeData: (node: DataNode, data: Record<string, any>) => void;
export {};
