function sortNumber(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "a hoặc b hoặc c không hợp lệ";
  }

  let unSort = true;

  while (unSort) {
    if (a < b && b < c) {
      unSort = false;
    }
    if (a > b) {
      a = a + b;
      b = a - b;
      a = a - b;
    }

    if (b > c) {
      b = b + c;
      c = b - c;
      b = b - c;
    }
  }

  return `3 số sắp xếp: ${a}, ${b}, ${c}`;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;
  let b = +document.getElementById("numB").value;
  let c = +document.getElementById("numC").value;

  document.getElementById("output").textContent = sortNumber(a, b, c);
});