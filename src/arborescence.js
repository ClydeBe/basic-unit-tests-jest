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
  if (ancestor === elt1.name)
    return path2.substring(path2.indexOf(ancestor) + ancestor.length);
  if (ancestor === elt2.name)
    return path1.substring(path1.indexOf(ancestor) + ancestor.length);
  let pathArray = path1.split("/");
  let path = "/..";
  for (let i = 0; i < pathArray.length; i++) {
    if (pathArray[i] === ancestor)
      break;
    path += "/..";
  }
  path += path2.substring(path2.indexOf(ancestor) + ancestor.length);
  return path;
}

// const treeAsArray = [
//   { id: 0, parent: -1, name: "root" },
//   { id: 1, parent: 0, name: "etc" },
//   { id: 2, parent: 0, name: "bin" },
//   { id: 3, parent: 0, name: "var" },
//   { id: 4, parent: 1, name: "One" },
//   { id: 5, parent: 1, name: "Lone" },
//   { id: 6, parent: 2, name: "Coder" },
//   { id: 7, parent: 2, name: "NoName" },
//   { id: 8, parent: 2, name: "Child of 2" },
//   { id: 9, parent: 3, name: "NoName" },
//   { id: 10, parent: 4, name: "Child of 4" },
//   { id: 11, parent: 5, name: "Child of 5" },
//   { id: 12, parent: 6, name: "Child of 6" },
// ];

// let tree = createTree(treeAsArray);
// // console.log(tree);
// console.log(getRelativePath(tree, 7, 1));



module.exports = { createTree, getAbsolutePath, getLowerCommonAncestor, getRelativePath };