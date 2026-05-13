// Input:
const listUser = [
  { name: "Nguyễn Văn A", age: 18 },
  { name: "Trần Thị B", age: 22 },
  { name: "Tạ Văn Tùng", age: 22 },
  { name: "Lê Văn C", age: 30 },
  { name: "Phạm Thị D", age: 25 },
  { name: "Lê Ngọc Linh", age: 25 },
  { name: "Hoàng Văn E", age: 20 },
  { name: "Đỗ Thị Duyên", age: 20 },
  { name: "Đỗ Thị F", age: 27 },
  { name: "Bùi Văn G", age: 24 },
  { name: "Vũ Thị H", age: 24 },
  { name: "Ngô Văn I", age: 29 },
  { name: "Bùi Việt Hải", age: 29 },
  { name: "Dương Thị K", age: 32 },
];

function sortUsersByAgeDesc(arr) {
  // Xử lý và in ra kết quả
  arr.sort((a, b) => {
    if (a.age < b.age) {
      return 1;
    }

    if (a.age > b.age) {
      return -1;
    }

    return a.name.localeCompare(b.name);
  });

  console.log(arr);
}

// Output:
sortUsersByAgeDesc(listUser);

// [
//   { name: "Dương Thị K", age: 32 },
//   { name: "Lê Văn C", age: 30 },
//   { name: "Ngô Văn I", age: 29 },
//   { name: "Đỗ Thị F", age: 27 },
//   { name: "Phạm Thị D", age: 25 },
//   { name: "Bùi Văn G", age: 24 },
//   { name: "Vũ Thị H", age: 24 },
//   { name: "Trần Thị B", age: 22 },
//   { name: "Hoàng Văn E", age: 20 },
//   { name: "Nguyễn Văn A", age: 18 },
// ]