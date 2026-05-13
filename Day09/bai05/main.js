Array.prototype.map2 = function (callback) {
  // for..in sẽ duyệt qua cả các prototype có enumerable là true
  // -> sẽ có trường hợp là i = "map2" (chính là tên của prototype đang định nghĩa)
  // for (let i in this) { 
  //   if (this[i] === '') continue;
  //   this[i] = callback(this[i], i, this);
  // }
  let array = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (!Number.isInteger(this[i])) continue;
    array[i] = callback(this[i], i, this);
  }

  return array;
};

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1); // [2, 4, 6, 8, 10]
console.log(result1.length); // 5

// Sample 2
const arr2 = [1, , , , 5]; // Có phần tử trống
const result2 = arr2.map2((value) => value * 2);

console.log(result2); // [2, , , , 10]
console.log(result2.length); // 5

// Sample 3
const arr3 = [1, 2, 3, 4, 5];
const result3 = arr3.map((value) => value + 1);

console.log(result3);
console.log(result3.length);