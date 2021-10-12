const NODE_DATA_KEY = '_aff_data';

type DataNode = Node & { [NODE_DATA_KEY]?: Record<string, any> };

export const getNodeData = (node: DataNode): Record<string, any> => {
  return node[NODE_DATA_KEY] ?? {};
};

export const setNodeData = (
  node: DataNode,
  data: Record<string, any>,
): void => {
  Object.assign(node, { [NODE_DATA_KEY]: data });
};
