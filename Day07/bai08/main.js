function isSameSign(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "a hoặc b không hợp lệ";
  }

  if (a * b > 0) {
    return "a và b cùng dấu";
  }

  return "a và b khác dấu";
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;
  let b = +document.getElementById("numB").value;

  document.getElementById("output").textContent = isSameSign(a, b);
});