console.log('--------------- Bài 5 ----------------');
// Input:
function insertNumber(arr, num) {
  // Xử lý và in ra kết quả
  let newArr = [];
  // ! 1. Loại bỏ các giá trị không phải số hoặc là NaN
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) continue;
    newArr.push(arr[i]);
  }
  if (Number.isInteger(num)) {
    newArr.push(num);
  }
  // ! 2. Sắp xếp mảng tăng dần
  let len = newArr.length;
  while (len > 2) {
    for (let i = 0; i < len - 1; i++) {
      if (newArr[i] <= newArr[i + 1]) continue;

      newArr[i] = newArr[i] + newArr[i + 1];
      newArr[i + 1] = newArr[i] - newArr[i + 1];
      newArr[i] = newArr[i] - newArr[i + 1];
    }

    len--;
  }

  console.log(newArr);
}

// Output:
insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]
console.log('\n');