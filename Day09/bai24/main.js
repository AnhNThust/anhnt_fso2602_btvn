// Input:
const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
function countTotalWords(arr) {
  // Logic bài tập và trả về kết quả
  if (arr.length <= 0) {
    console.log("Mảng rỗng, không có từ để đếm!");
    return;
  }

  let result = arr.reduce((acc, cur) => {
    let wordArr = cur.trim().split(" ").filter(e => e !== "");
    acc += wordArr.length;
    // for (let i = 0; i < wordArr.length; i++) {
    //   if (wordArr[i].length <= 0) continue;
    //   acc++;
    // }
    return acc;
  }, 0);

  console.log(result);
}

// Output:
countTotalWords(["Hello world", "JS is fun", "Arrays and strings"]); // 8
countTotalWords(["", "    ", "Arrays strings    "]); // 2
countTotalWords(["  ", "   hello", " strings    "]); // 2
countTotalWords(["  ", "   hello    world", " strings    "]); // 3