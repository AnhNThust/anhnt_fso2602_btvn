console.log('--------------- Bài 1 ----------------');
function cleanFalsyValues(arr) {
  const falsyArr = [false, 0, -0, 0n, "", null, undefined];
  let isFalsy = false;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < falsyArr.length; j++) {
      // ! isNaN() và Number.isNaN()
      if (arr[i] !== falsyArr[j] && !Number.isNaN(arr[i])) continue;

      isFalsy = true;
      break;
    }

    if (!isFalsy) {
      newArr.push(arr[i]);
    }
    isFalsy = false;
  }

  console.log(newArr);
}

cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]);
console.log('\n');