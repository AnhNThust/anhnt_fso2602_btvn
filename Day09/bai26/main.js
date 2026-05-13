function convertArrayToObject(array) {
  // Logic bài toán và trả về kết quả
  if (array.length <= 0) {
    console.log({});
    return;
  }

  let result = array.reduce((acc, cur) => {
    if (!acc) {
      acc = {};
    }

    let prop = cur.trim().split(":");
    if (prop !== "") {
      acc[prop[0].trim()] = prop[1].trim();
    }

    return acc;
  }, {});

  console.log(result);
}

// Input:
convertArrayToObject([]);
const arr1 = ["name:John", "age:30", "city:NY"];
// Output:
convertArrayToObject(arr1); // { name: 'John', age: '30', city: 'NY' }

const arr2 = ["name : John ", "  age  :30 ", "   city : NY"];
// Output:
convertArrayToObject(arr2); // { name: 'John', age: '30', city: 'NY' }