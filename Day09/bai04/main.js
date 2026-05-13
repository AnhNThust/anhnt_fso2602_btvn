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

function countElement(arr) {
  // Xử lý và in ra kết quả
  const newArr = arr.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 0;
    }
    acc[cur]++;
    return acc
  }, {});

  return newArr;
}

// Output:
const result = countElement(fruits);
console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }