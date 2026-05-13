// Input:
function checkSymmetricalStr(str) {
  // Xử lý logic
  if (typeof str !== "string") {
    return "Dữ liệu không hợp lệ";
  }

  if (str.length <= 1) {
    return "chuỗi có 1 ký tự, không kiểm tra được";
  }

  // return str == [...(str.split(''))].reverse().join('');

  let strRev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return str == strRev;
}

// Output:
console.log(checkSymmetricalStr("abba")); // true
console.log(checkSymmetricalStr("abcd")); // false