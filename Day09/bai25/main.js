const filterStringsByKeyword = (arr, keyword) => {
  if (arr.length <= 0) {
    return "Mảng truyền vào rỗng!";
  }

  keyword = keyword.trim();
  if (keyword == "") {
    return arr;
  }

  return arr.filter(e => e.includes(keyword));
}

const arr = ["apple", "banana", "cherry", "date", "watermelon", "peanut", "strawberry", "mango"];
const keyword = "an";
const result = filterStringsByKeyword(arr, keyword);
console.log(result);

const result1 = filterStringsByKeyword(arr, "at");
console.log(result1);