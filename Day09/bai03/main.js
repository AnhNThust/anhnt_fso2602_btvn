// Input:
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function removeDuplicate(arr) {
  // Xử lý và in ra kết quả
  const newArr = arr.reduce((acc, cur) => {
    if (acc.indexOf(cur) === -1) {
      acc.push(cur);
    }

    return acc;
  }, []);

  return newArr;
}

// Output:
const result = removeDuplicate(fruits);
console.log(result); // ["apple", "banana", "kiwi", "orange"]