Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length == 0 && initialValue === undefined) {
    return "Error: Reduce of empty array with no initial value";
  }

  if (this.length == 0 && initialValue !== undefined) {
    return initialValue;
  }

  if (this.length == 1 && initialValue === undefined) {
    return this[0];
  }

  let accumulator;
  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = this[0];
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(result1); // 15

// Sample 2
const arr2 = [];
const result2 = arr2.reduce2((accumulator, value) => {
  return accumulator + value;
});
console.log(result2); // Error: Reduce of empty array with no initial value

// Sample 3
const arr3 = [];
const result3 = arr3.reduce2((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(result3); // 0

// Sample 4
const arr4 = [3];
const result4 = arr4.reduce2((accumulator, value) => {
  return accumulator + value;
});
console.log(result4);

// Sample 5
const arr5 = [3, 4, 5, 6, 7];
const result5 = arr5.reduce2((accumulator, value) => {
  return accumulator * value;
});
console.log(result5);

// sample 6
const arr6 = [1, 5, 3, 9, 2];
const max = arr6.reduce2((acc, cur) => {
  return cur > acc ? cur : acc;
}, arr6[0]);
console.log(max);

// sample 7
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
const count = fruits.reduce2((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(count);

// sample 8
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
const groupByAge = people.reduce2((acc, cur) => {
  const age = cur.age;
  if (!acc[age]) {
    acc[age] = [];
  }
  acc[age].push(cur);
  return acc;
}, {});
console.log(groupByAge);