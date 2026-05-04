function swapNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "a hoặc b không hợp lệ";
  }

  a = a + b;
  b = a - b;
  a = a - b;

  return `a = ${a}, b = ${b}`;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;
  let b = +document.getElementById("numB").value;

  document.getElementById("output").textContent = swapNumber(a, b);
});