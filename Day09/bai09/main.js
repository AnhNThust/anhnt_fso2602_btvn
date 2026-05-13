// Input:
const number = [4, 2, 7, 6, 5, 8, 2, 1];
function sortArrNumber(arr) {
  // Xử lý và in ra kết quả
  // bubble sort
  let len = arr.length;
  while (len > 1) {
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] < arr[i + 1]) continue;
      arr[i] = arr[i] + arr[i + 1];
      arr[i + 1] = arr[i] - arr[i + 1];
      arr[i] = arr[i] - arr[i + 1];
    }
    len--;
  }
  return arr;
}

// Output:
const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]