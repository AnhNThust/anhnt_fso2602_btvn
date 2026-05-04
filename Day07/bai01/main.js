function calcBMI(weight, height) {
  let res = (10000 * weight / (height * height)).toFixed(2);
  // console.log(res);
  let resStr = "";
  if (res < 18.5) {
    // console.log(`BMI = %f Thiếu cân`, res);
    resStr = `BMI = ${res} Thiếu cân`;
  } else if (res < 23) {
    // console.log(`BMI = %f Bình thường`, res);
    resStr = `BMI = ${res} Bình thường`;
  } else if (res < 25) {
    // console.log(`BMI = %f Thừa cân`, res);
    resStr = `BMI = ${res} Thừa cân`;
  } else {
    // console.log(`BMI = %f Béo phì`, res);
    resStr = `BMI = ${res} Béo phì`;
  }

  return resStr;
}

function calcBMI1() {
  let wei = +document.getElementById("weight").value;
  let hei = +document.getElementById("height").value;
  let res = (10000 * wei / (hei * hei)).toFixed(2);

  let resStr = "";
  if (res < 18.5) {
    resStr = `BMI = ${res} Thiếu cân`;
  } else if (res < 23) {
    resStr = `BMI = ${res} Bình thường`;
  } else if (res < 25) {
    resStr = `BMI = ${res} Thừa cân`;
  } else {
    resStr = `BMI = ${res} Béo phì`;
  }

  document.getElementById("output").textContent = resStr;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", calcBMI1);


// let weight = window.prompt("xin mời nhập cân nặng (kg):");
// let height = window.prompt("xin mời nhập chiều cao (cm):");

// let weight = +document.getElementById('weight');
// let height = +document.getElementById('height');
// let result = calcBMI(weight, height);
// let output = document.getElementById('output');
// output.textContent = result;