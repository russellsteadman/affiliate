const NODE_DATA_KEY = '_aff';

type DataNode = Node & { [NODE_DATA_KEY]?: Record<string, string> };

export const getNodeData = (node: DataNode): Record<string, string> => {
  return node[NODE_DATA_KEY] ?? {};
};

export const setNodeData = (
  node: DataNode,
  data: Record<string, string>,
): void => {
  Object.assign(node, { [NODE_DATA_KEY]: data });
};
