const getTopProducts = (arr, topNumber) => {
  let result = [];

  let len = arr.length;
  while (len > 2) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j].price > arr[j + 1].price) continue;
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
    len--;
  }

  for (let i = 0; i < topNumber; i++) {
    result.push(arr[i]);
  }

  return result;
};

// Input:
const products = [
  { id: 6, name: "Xiaomi Mi 10", price: 500 },
  { id: 2, name: "Samsung Galaxy S21", price: 900 },
  { id: 4, name: "Apple iPhone 11", price: 700 },
  { id: 3, name: "Xiaomi Mi 11", price: 800 },
  { id: 1, name: "Apple iPhone 12", price: 1000 },
  { id: 5, name: "Samsung Galaxy S20", price: 600 },
];

const result = getTopProducts(products, 2); // lấy 3 sản phẩm có giá cao
console.log(result);

// Output:
[
  {
    id: 1,
    name: "Apple iPhone 12",
    price: 1000,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 900,
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 800,
  },
];