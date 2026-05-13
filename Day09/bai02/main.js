// Input:
const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function groupBy(arr, key) {
  // Xử lý và in ra kết quả
  const groupByKey = arr.reduce((accumulator, currentValue) => {
    const k = currentValue[key]; // ! lấy ra giá trị của key hiện tại
    if (!accumulator[k]) { // ! nếu đối tượng mảng có giá trị là k không tồn tại
      accumulator[k] = []; // ! tạo mới 1 đối tượng mảng rỗng
    }
    accumulator[k].push(currentValue); // ! nếu tồn tại thì thêm 1 phần tử vào mảng
    return accumulator;
  }, {});

  return groupByKey;
}

// Output:
const result1 = groupBy(users, "age"); // nhóm theo tuổi

console.log(result1);

/**
  {
    20: [
      { fullname: "Nguyen Van A", age: 20, address: "LangSon" }
    ],
    21: [
      { fullname: "Nguyen Van C", age: 21, address: "HaNoi" }
    ],
    22: [
      { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
      { fullname: "Nguyen Van D", age: 22, address: "HaNoi" }
    ],
    32: [
      { fullname: "Nguyen Van E", age: 32, address: "LangSon" }
    ]
  }
*/

const result2 = groupBy(users, "address"); // nhóm theo địa chỉ

console.log(result2);

/**
  {
    "LangSon": [
      { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
      { fullname: "Nguyen Van E", age: 32, address: "LangSon" }
    ],
    "BacGiang": [
      { fullname: "Nguyen Van B", age: 22, address: "BacGiang" }
    ],
    "HaNoi": [
      { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
      { fullname: "Nguyen Van D", age: 22, address: "HaNoi" }
    ]
  }
 */