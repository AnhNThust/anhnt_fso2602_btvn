function findMaxNumber(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "a hoặc b hoặc c không hợp lệ";
  }

  let max = a;
  if (max < b) {
    max = b;
  }

  if (max < c) {
    max = c;
  }

  return max;
}

function findMaxNumberBySort(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("a hoặc b hoặc c không hợp lệ");
    return;
  }

  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }

  if (b > c) {
    // a < b > c
    console.log(b);
  } else {
    // a < b < c
    console.log(c);
  }
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;
  let b = +document.getElementById("numB").value;
  let c = +document.getElementById("numC").value;

  document.getElementById("output").textContent = findMaxNumber(a, b, c);
});