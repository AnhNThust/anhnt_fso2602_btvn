// Input:
function findCommonElement(arr1, arr2) {
  // Xử lý và in ra kết quả
  if (arr1.length <= 0 || arr2.length <= 0) {
    console.log(false);
    return;
  }

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] != arr2[j] || result.includes(arr1[i])) {
        continue;
      }
      result.push(arr1[i]);
      break;
    }
  }
  if (result.length > 0) {
    console.log(result.join(" "))
  } else {
    console.log(false);
  }
}

// Output:
findCommonElement([1, 2, 3], [2, 3, 4]); // 2 3
findCommonElement([1, 2, 3], [4, 5, 6]); // false
findCommonElement([1, 2, 2, 3, 4], [2, 3, 4, 5]); // 2 3 4
findCommonElement([1, 2, 2, 3, 4], []); // 2 3 4
findCommonElement([1, 2, 2, 3, 4], [5, 6, 7, 8]); // 2 3 4
findCommonElement([5, 6, 7, 8], [5, 6, 7, 8]); // 2 3 4