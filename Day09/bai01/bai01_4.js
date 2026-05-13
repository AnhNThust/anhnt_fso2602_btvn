console.log('--------------- Bài 4 ----------------');
// Input:
function findMinMaxAverage(arr) {
  // Xử lý và in ra kết quả
  if (arr.length <= 0) {
    console.log(arr);
    return;
  }

  // ! 1. Tìm max
  let maxInfo = max(arr);

  // ! 2. Tìm min
  let minInfo = min(arr);

  // ! 3. Tính trung bình cộng các số nguyên tố, nếu không có trả về null
  let average = primeAverage(arr);

  let result = {
    maxInfo,
    minInfo,
    primeAverage: average
  }
  console.log(result);
}

function max(arr) {
  let maxInfo = {
    max: arr[0],
    index: 0
  };
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= maxInfo.max) continue;
    maxInfo.max = arr[i];
    maxInfo.index = i;
  }
  return maxInfo;
}

function min(arr) {
  let minInfo = {
    min: arr[0],
    index: 0
  };
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= minInfo.min) continue;
    minInfo.min = arr[i];
    minInfo.index = i;
  }
  return minInfo;
}

function primeAverage(arr) {
  let primeAverage = null;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2) continue;
    if (arr[i] === 2 || arr[i] === 3) {
      primeAverage += arr[i];
      count++;
      continue;
    }

    let isDivide = false;
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j !== 0) continue;
      isDivide = true;
      break;
    }

    if (!isDivide) {
      primeAverage += arr[i];
      count++;
    }
  }

  return count <= 0 ? null : primeAverage / count;
}

// Output:
findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
console.log('\n');