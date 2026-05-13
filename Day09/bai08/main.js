Array.prototype.filter2 = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (!callback(this[i], i, this)) continue;
    newArr.push(this[i]);
  }
  return newArr;
};

// Sample usage
const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => {
  return value % 2 !== 0;
});
console.log(result); // [1, 3, 5]

// Sample 2
const a2 = [1, , , , 5];
const res2 = a2.filter2((value) => {
  return value % 2 !== 0;
});
console.log(res2);