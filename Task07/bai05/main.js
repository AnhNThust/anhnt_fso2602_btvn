function printSquareNumber(n) {
  if (isNaN(n) || n <= 2) {
    return "n không hợp lệ";
  }

  let str = "";
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (j * j != i) continue;
      str += `${i} `;
      break;
    }
  }

  return str;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;

  document.getElementById("output").textContent = printSquareNumber(a);
});