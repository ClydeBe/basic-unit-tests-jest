const merge = require("../src/mergeSortedArrays");

test('should throw Error', () => {
  expect(() => merge()).toThrowError("t1 and t2 must be defined");
})

test('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
  expect(merge([1, 2, 3], [4, 5, 6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
