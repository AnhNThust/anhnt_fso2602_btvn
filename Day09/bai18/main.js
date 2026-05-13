const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Input:
function generateId(length, prefix = "") {
  // Xử lý và return về kết quả
  if (length <= 0 || length >= 100) {
    console.log('id phải chứa ít nhất 1 ký tự và phải nhỏ hơn 100 ký tự!');
    return;
  }

  let result = "";
  if (prefix.length >= 10) {
    console.log('prefix phải dưới 10 ký tự!');
    return;
  } else {
    result += prefix;
  }

  for (let i = 0; i < length; i++) {
    let index = Math.ceil(Math.random() * listCharacters.length);
    result += listCharacters[index];
  }

  console.log(result);
}

// Output:
generateId(8, "user"); // Output: "user5a3Fb2DF"
generateId(4, "prod - "); // Output: "product - 3a2f"
generateId(6, "cate - "); // Output: "category - 2Fb3aD"
generateId(10); // Output: "5a3Fb2DFc1"