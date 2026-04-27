function printPrimeNumber(n) {
  if (isNaN(n) || n <= 2) {
    return "n không hợp lệ";
  }

  let str = "";
  let isDivide = false;
  for (let i = 2; i < n; i++) {
    if (i == 2) {
      str += `${i} `;
      continue;
    }

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isDivide = true;
        break;
      }

      isDivide = false;
    }

    // isDivide = false -> !isDivide = true
    if (!isDivide) {
      str += `${i} `;
    }
  }

  return str;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;

  document.getElementById("output").textContent = printPrimeNumber(a);
});