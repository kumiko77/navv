export function findAncestorsPathDFS(tree, targetValue, collect = {}) {
  if (!tree || tree.length === 0) {
      return null;
  }

  for (let node of tree) {
      // 将当前节点加入路径中
      const updatedPath = {...collect, [node.path]: node.path};
      if (node.path === targetValue) {
          return Object.values(collect); // 返回祖先节点的路径数组
      }

      if (node.children && node.children.length > 0) {
          let result = findAncestorsPathDFS(node.children, targetValue, updatedPath);
          if (result) {
              return result;
          }
      }
  }
  return null; // 如果未找到目标节点，返回 null
}
