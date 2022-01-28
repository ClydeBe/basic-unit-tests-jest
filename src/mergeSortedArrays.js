function mergeSortedArrays(t1, t2) {
  if (t1 == null || t1 == undefined || t2 == null || t2 == undefined)
    throw new Error("t1 and t2 must be defined");
  let array = [];
  while (t1.length > 0 || t2.length > 0) {
    if (t1[0] != undefined && t2[0] == undefined) {
      array.push(t1.shift());
    } else if (t1[0] == undefined && t2[0] != undefined) {
      array.push(t2.shift());
    } else if (t1[0] < t2[0]) {
      array.push(t1.shift());
    } else {
      array.push(t2.shift());
    }
  }
  return array;
}

module.exports = mergeSortedArrays;
