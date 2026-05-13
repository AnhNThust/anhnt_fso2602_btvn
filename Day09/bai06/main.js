Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === "undefined") continue;
    this[i] = callback(this[i], i, this);
  }

  return this;
};

// Sample usage
const arr = [1, 2, 3, 4, 5];

arr.forEach2((value, index) => {
  console.log(`Value at index ${index}: ${value}`);
});

// Output:
// Value at index 0: 1
// Value at index 1: 2
// Value at index 2: 3
// Value at index 3: 4
// Value at index 4: 5

const arr2 = [1, , , , 5];
arr2.forEach2((value, index) => {
  console.log(`index: ${index}, value: ${value}`);
});
// arr2.forEach((value, index) => {
//   console.log(`value at index ${index}: ${value}`);
// });