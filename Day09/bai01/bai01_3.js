console.log('--------------- Bài 3 ----------------');
// Input:
function filterLongStrings(arr) {
  // Xử lý và in ra kết quả
  if (arr.length <= 0) {
    console.log(arr);
    return;
  }

  let newArr = [];
  arr.forEach(element => {
    if (element.length > 5) {
      newArr.push(element);
    }
  });

  console.log(newArr);
}

// Output:
filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
filterLongStrings(["hi", "bye", "yes"]); // Output: []
console.log('\n');