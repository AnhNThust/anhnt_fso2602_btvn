function taxSalary(salary) {
  if (isNaN(salary) || salary < 0) {
    return "Số tiền lương không hợp lệ";
  }
  let tax = 0;

  if (salary > 80_000_000) {
    tax = tax + (salary - 80_000_000) * 0.3;
    salary = 80_000_000;
  }

  if (salary > 50_000_000) {
    tax = tax + (salary - 50_000_000) * 0.2;
    salary = 50_000_000;
  }

  if (salary > 25_000_000) {
    tax = tax + (salary - 25_000_000) * 0.1;
    salary = 25_000_000;
  }

  if (salary > 11_000_000) {
    tax = tax + (salary - 11_000_000) * 0.05;
    salary = 11_000_000;
  }

  return `Số tiền cần trả: ${tax}đ`;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;

  document.getElementById("output").textContent = taxSalary(a);
});