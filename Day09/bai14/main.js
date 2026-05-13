// Input:
function checkSymmetricalNumber(n) {
  // Logic bài toán
  // kiểm tra hợp lệ
  if (typeof n !== "number") {
    console.log('Dữ liệu không hợp lệ');
    return;
  }

  // kiểm tra độ dài
  if (n > -10 && n < 10) {
    console.log('số có 1 chữ số, không kiểm tra được');
    return;
  }

  // phần chính
  // b1: đưa về mảng
  let a = '' + n;

  // b2: gán đảo ngược cho biến mới
  let b = '';
  for (let i = a.length - 1; i >= 0; i--) {
    b += a[i];
  }

  // b3: so sánh
  console.log(a == b);
}

// Output:
checkSymmetricalNumber(121); //true
checkSymmetricalNumber(123454321); //true
checkSymmetricalNumber(1234543212); //false
checkSymmetricalNumber(1);
checkSymmetricalNumber("123454321"); // Dữ liệu không hợp lệ