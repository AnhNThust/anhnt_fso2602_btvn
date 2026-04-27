function isTriangle(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)
    || a <= 0 || b <= 0 || c <= 0) {
    return "a hoặc b hoặc c không hợp lệ";
  }

  return a + b <= c || b + c <= a || a + c <= b ? "a,b,c không phải 3 cạnh của 1 tam giác" : "a,b,c là 3 cạnh của 1 tam giác";
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;
  let b = +document.getElementById("numB").value;
  let c = +document.getElementById("numC").value;

  document.getElementById("output").textContent = isTriangle(a, b, c);
});