// Input:
function findSecondLargestNumber(arr) {
  // Xử lý và in ra kết quả
  if (arr < 2) {
    console.log(-1);
    return;
  }

  let max = arr[0];
  let maxBelow = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < max && arr[i] > maxBelow) {
      maxBelow = arr[i];
    } else if (arr[i] > max) {
      maxBelow = max;
      max = arr[i];
    }
  }

  if (maxBelow == max) {
    console.log(-1);
  } else {
    console.log(maxBelow);
  }
}

// Output:
findSecondLargestNumber([1, 2, 3, 4, 5]); // 4
findSecondLargestNumber([1, 20, 23, 14, 25]); // 23
findSecondLargestNumber([1, 1, 1]); // -1
findSecondLargestNumber([1]); // -1