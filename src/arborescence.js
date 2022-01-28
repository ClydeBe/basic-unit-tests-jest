function isNullOrUndefined(variable) {
  return variable == null || variable == undefined;
}

const createTree = (elts) => {
  const map = new Map();
  for (let i = 0; i < elts.length; i++) {
    if (isNullOrUndefined(elts[i]))
      throw new Error("Tree cannot contains null or undefined elements");
    map.set(elts[i].id, elts[i]);
  }
  return map;
}

const getAbsolutePath = (tree, id) => {
  const path = [];
  if (isNullOrUndefined(tree))
    throw new Error("Tree cannot be null or undefined");
  if (isNullOrUndefined(id) || isNullOrUndefined(tree.get(id)))
    throw new Error("No element associated to id");
  let current = tree.get(id);
  while (current !== undefined) {
    path.unshift(current.name);
    current = tree.get(current.parent);
  }
  return path.join("/");
}

const getLowerCommonAncestor = (tree, id1, id2) => {
  if (isNullOrUndefined(tree))
    throw new Error("Tree cannot be null or undefined");
  if (isNullOrUndefined(id1) || isNullOrUndefined(id2))
    throw new Error("ids cannot be null or undefined");
  let elt1 = tree.get(id1);
  let elt2 = tree.get(id2);
  if (isNullOrUndefined(elt1) || isNullOrUndefined(elt2))
    throw new Error("At least one of the element was not found in the tree");
  let path1 = getAbsolutePath(tree, id1);
  let path2 = getAbsolutePath(tree, id2);
  if (path1.includes[elt2.name])
    return elt2.name;
  if (path2.includes[elt1.name])
    return elt1.name;
  path1 = path1.split("/");
  path2 = path2.split("/");
  let i = 0;
  while (path1[i] === path2[i])
    i++;
  return path1[i - 1];
}

const getRelativePath = (tree, id1, id2) => {
  if (isNullOrUndefined(tree))
    throw new Error("Tree cannot be null or undefined");
  if (isNullOrUndefined(id1) || isNullOrUndefined(id2))
    throw new Error("ids cannot be null or undefined");
  let elt1 = tree.get(id1);
  let elt2 = tree.get(id2);
  if (isNullOrUndefined(elt1) || isNullOrUndefined(elt2))
    throw new Error("At least one of the element was not found in the tree");
  let ancestor = getLowerCommonAncestor(tree, id1, id2);
  let path1 = getAbsolutePath(tree, id1);
  let path2 = getAbsolutePath(tree, id2);
  let pathAncestor = getAbsolutePath(tree, ancestor.id);
  let path1ToAncestor = path1.split("/").slice(path1.split("/").indexOf(pathAncestor));
  let path2ToAncestor = path2.split("/").slice(path2.split("/").indexOf(pathAncestor));
  let relativePath = path1ToAncestor.concat(path2ToAncestor.slice(1));
  return relativePath.join("/");
}


module.exports = { createTree, getAbsolutePath, getLowerCommonAncestor, getRelativePath };