// Input:
function fibonacci(n) {
  // Xử lý và in ra kết quả
  if (isNaN(n) || n <= 0) {
    console.log('Số phần tử không hợp lệ');
    return;
  }

  if (n <= 2) {
    console.log(n == 1 ? '0' : '0 1');
    return;
  }

  let s = '';
  let f1 = 0;
  let f2 = 1;
  s += `${f1} ${f2} `;
  for (let i = 3; i <= n; i++) {
    // tính số tiếp theo
    let fn = f1 + f2;
    s += `${fn} `;

    // gán số mới cho biến cũ
    f1 = f2;
    f2 = fn;
  }

  // in ra màn hình
  console.log(s);
}

// Output:
fibonacci(5); // 0 1 1 2 3
fibonacci(10); // 0 1 1 2 3 5 8 13 21 34
fibonacci(0); // Số phần tử không hợp lệ
fibonacci(-5); // Số phần tử không hợp lệ
fibonacci("abc"); // Số phần tử không hợp lệ
fibonacci(1); // 0