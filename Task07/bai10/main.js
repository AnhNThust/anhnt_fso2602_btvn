function electricBill(electric) {
  if (isNaN(electric) || electric < 0) {
    return "Số điện không hợp lệ";
  }
  let money = 0;

  if (electric > 350) {
    money = money + (electric - 350) * 5_000;
    electric = 350;
  }

  if (electric > 200) {
    money = money + (electric - 200) * 4_000;
    electric = 200;
  }

  if (electric > 100) {
    money = money + (electric - 100) * 3_000;
    electric = 100;
  }

  if (electric > 50) {
    money = money + (electric - 50) * 2_000;
    electric = 50;
  }

  money = money + electric * 1_500;
  return `Số tiền cần trả: ${money}đ`;
}

const btnCalc = document.getElementById("btn-calc");
btnCalc.addEventListener("click", () => {
  let a = +document.getElementById("numA").value;

  document.getElementById("output").textContent = electricBill(a);
});

// let electricBill = (electric) => {
//   if (isNaN(electric) || electric < 0) {
//     console.log("Số điện không hợp lệ");
//     return;
//   }
//   let orginalElectric = electric;
//   const electricPrices = [
//     { step: 50, price: 1500 },
//     { step: 50, price: 2000 },
//     { step: 100, price: 3000 },
//     { step: 150, price: 4000 },
//     { step: Infinity, price: 5000 },
//   ];

//   let money = 0;

//   for (let i = 0; i < electricPrices.length; i++) {
//     const { price, step } = electricPrices[i];
//     if (electric <= step) {
//       money = money + electric * price;
//       break;
//     } else {
//       money = money + price * step;
//       electric = electric - step;
//     }
//   }

//   console.log(
//     `Số tiền cần trả cho ${orginalElectric} la : ${money.toLocaleString()}đ`,
//   );
// };

// electricBill(30); // Output: Số tiền cần trả: 45000đ
// electricBill(75); // Output: Số tiền cần trả: 125000đ
// electricBill(-10); // Output: Số điện không hợp lệ
// electricBill("abc"); // Output: Số điện không hợp lệ
// electricBill(350);
// electricBill(450);