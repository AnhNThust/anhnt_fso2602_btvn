// Input:
const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];
function reverseArr(arr) {
  // Xử lý và in ra kết quả
  //#region không cần suy nghĩ
  // let newArr = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   if (arr[i] === null || arr[i] === undefined) continue;
  //   newArr.push(arr[i]);
  // }
  // return newArr;
  //#endregion

  //#region cần suy nghĩ
  // * b1: loại bỏ các phần tử 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== undefined) continue;
    for (let j = i; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr.pop();
    i--;
  }

  // * b2: đảo ngược
  let len = arr.length;
  for (let l = 0; l < len / 2; l++) {
    let r = len - l - 1;
    if (l === r) break;
    arr[l] = arr[l] + arr[r];
    arr[r] = arr[l] - arr[r];
    arr[l] = arr[l] - arr[r];
  }
  return arr;
  //#endregion
}

// Output:
console.log(arrNumber);
const result = reverseArr(arrNumber);
console.log(result); // [6,5,4,3,2,1]