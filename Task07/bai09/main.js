function taxiBill(km) {
  if (typeof km !== "number" || km <= 0) {
    return "Số km không hợp lệ";
  }

  let bill = 10000;
  km = parseInt(km);
  if (km > 30) {
    bill = bill + (km - 30) * 7000;
    km = 30;
  }

  bill = bill + (km - 1) * 8000;

  return `Số tiền cần trả ${bill}`;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;

  document.getElementById("output").textContent = taxiBill(a);
});