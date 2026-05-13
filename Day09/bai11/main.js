// Input:
const arrayNumber = [1, 2, 3, 4, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
  // Xử lý logic
  if (!Array.isArray(arr)) {
    return "Dữ liệu không hợp lệ";
  }

  if (arr.length <= 1) {
    return "Mảng có 1 phần tử, không kiểm tra được";
  }

  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i >= (len - 1)) break;
    if (arr[i] !== arr[len - 1]) {
      return false;
    }
    len--;
  }
  return true;
  // return arr.toString() == [...arr].reverse().toString();
}

// Output:
const result = checkSymmetricalArr(arrayNumber);
console.log(result); //true
console.log(checkSymmetricalArr([3]));
console.log(checkSymmetricalArr("hello"));
console.log(checkSymmetricalArr([undefined, null, 'hello']));
console.log(checkSymmetricalArr([undefined, null, undefined]));