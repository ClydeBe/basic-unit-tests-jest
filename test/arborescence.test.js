const { createTree, getAbsolutePath, getLowerCommonAncestor, getRelativePath } = require('../src/arborescence');

// Given all
const treeAsArray = [
  { id: 0, parent: -1, name: "root" },
  { id: 1, parent: 0, name: "etc" },
  { id: 2, parent: 0, name: "bin" },
  { id: 3, parent: 0, name: "var" },
  { id: 4, parent: 1, name: "One" },
  { id: 5, parent: 1, name: "Lone" },
  { id: 6, parent: 2, name: "Coder" },
  { id: 7, parent: 2, name: "NoName" },
  { id: 8, parent: 2, name: "Child of 2" },
  { id: 9, parent: 3, name: "NoName" },
  { id: 10, parent: 4, name: "Child of 4" },
  { id: 11, parent: 5, name: "Child of 5" },
  { id: 12, parent: 6, name: "Child of 6" },
];
const tree = new Map();
tree.set(0, { id: 0, parent: -1, name: "root" });
tree.set(1, { id: 1, parent: 0, name: "etc" });
tree.set(2, { id: 2, parent: 0, name: "bin" });
tree.set(3, { id: 3, parent: 0, name: "var" });
tree.set(4, { id: 4, parent: 1, name: "One" });
tree.set(5, { id: 5, parent: 1, name: "Lone" });
tree.set(6, { id: 6, parent: 2, name: "Coder" });
tree.set(7, { id: 7, parent: 2, name: "NoName" });
tree.set(8, { id: 8, parent: 2, name: "Child of 2" });
tree.set(9, { id: 9, parent: 3, name: "NoName" });
tree.set(10, { id: 10, parent: 4, name: "Child of 4" });
tree.set(11, { id: 11, parent: 5, name: "Child of 5" });
tree.set(12, { id: 12, parent: 6, name: "Child of 6" });

test('createTree should throw Tree cannot contains null or undefined elements', () => {
  expect(() => createTree([undefined, null, { id: 0, parent: -1, name : "root" }])).toThrowError("Tree cannot contains null or undefined elements");
})

test('createTree should return a Map', () => {
  expect(createTree(treeAsArray)).toBeInstanceOf(Map);
});

test('createTree should return a Map with the same elements', () => {
  expect(createTree(treeAsArray)).toEqual(tree);
});

test('getAbsolutePath should throw Tree cannot be null or undefined', () => {
  expect(() => getAbsolutePath(null, 1)).toThrowError("Tree cannot be null or undefined");
});

test('getAbsolutePath should throw No element associated to id', () => {
  expect(() => getAbsolutePath(createTree(treeAsArray), -1)).toThrowError("No element associated to id");
});

test('getAbsolutePath should return', () => {
  expect(getAbsolutePath(tree, 1)).toBe("root/etc");
});

test('getLowerCommonAncestor should throw Tree cannot be null or undefined', () => {
  expect(() => getLowerCommonAncestor(null, 1, 2)).toThrowError("Tree cannot be null or undefined");
});

test('getLowerCommonAncestor should throw ids cannot be null or undefined', () => {
  expect(() => getLowerCommonAncestor(tree, undefined, 2)).toThrowError("ids cannot be null or undefined");
});

test('getLowerCommonAncestor should throw ids cannot be null or undefined', () => {
  expect(() => getLowerCommonAncestor(tree, 1, undefined)).toThrowError("ids cannot be null or undefined");
});

test('getLowerCommonAncestor should throw ids cannot be null or undefined', () => {
  expect(() => getLowerCommonAncestor(tree, undefined, undefined)).toThrowError("ids cannot be null or undefined");
});

test('getLowerCommonAncestor should return root', () => {
  expect(getLowerCommonAncestor(tree, 1, 2)).toBe("root");
});

test('getLowerCommonAncestor should return etc', () => {
  expect(getLowerCommonAncestor(tree, 1, 4)).toBe("etc");
});

test('getLowerCommonAncestor should return root', () => {
  expect(getLowerCommonAncestor(tree, 2, 10)).toBe("root");
});

test('getLowerCommonAncestor should return root', () => {
  expect(getLowerCommonAncestor(tree, 2, 9)).toBe("root");
});

test('getRelativePath should throw Tree cannot be null or undefined', () => {
  expect(() => getRelativePath(null, 1, 2)).toThrowError("Tree cannot be null or undefined");
});

test('getRelativePath should throw ids cannot be null or undefined', () => {
  expect(() => getRelativePath(tree, undefined, 2)).toThrowError("ids cannot be null or undefined");
});

test('getRelativePath should throw ids cannot be null or undefined', () => {
  expect(() => getRelativePath(tree, 1, undefined)).toThrowError("ids cannot be null or undefined");
});

test('getRelativePath should throw ids cannot be null or undefined', () => {
  expect(() => getRelativePath(tree, undefined, undefined)).toThrowError("ids cannot be null or undefined");
});

test('getRelativePath should return /../etc', () => {
  expect(getRelativePath(tree, 7, 1)).toBe("/../etc");
});
