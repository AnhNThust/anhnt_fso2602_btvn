console.log('--------------- Bài 2 ----------------');
// Input:
function filterEvenNumbers(arr) {
  // Xử lý và in ra kết quả
  let newArr = [];
  if (arr.length <= 0) {
    console.log(arr);
    return;
  }

  arr.forEach(element => {
    if (element % 2 === 0) {
      newArr.push(element);
    }
  });

  console.log(newArr);
}

// Output:
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]); // Output: []
filterEvenNumbers([]); // Output: []
filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]
console.log('\n');