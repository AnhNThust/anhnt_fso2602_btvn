function sortUsersByName(users) {
  // Xử lý và in ra kết quả
  if (users.length <= 0) {
    console.log("Mảng rỗng!");
  }

  users.sort((a, b) => {
    let firstNameA = a.fullName.trim().split(" ");
    let lastNameA = firstNameA.pop();
    firstNameA = firstNameA.join(" ");

    let firstNameB = b.fullName.trim().split(" ");
    let lastNameB = firstNameB.pop();
    firstNameB = firstNameB.join(" ");

    let test = lastNameA.localeCompare(lastNameB);
    return test != 0 ? test : firstNameA.localeCompare(firstNameB);
  });

  console.log(users);
}

// Input:
const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Hoàng Thị Linh" },
  { fullName: "Lê Ngọc Linh" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
  { fullName: "Trần Ngọc Quang" },
  { fullName: "Trần Văn Quang" },
];
sortUsersByName(users);
// Output:
[
  { fullName: "Nguyễn Đức Hoàng" }, // Tên: Hoàng, Họ và tên đệm: Nguyễn Đức
  { fullName: "Nguyễn Minh Hoàng" }, // Tên: Hoàng, Họ và tên đệm: Nguyễn Minh
  { fullName: "Lê Nin" }, // Tên: Nin
  { fullName: "Lê Văn Tình" }, // Tên: Tình
  { fullName: "Lê Văn" }, // Tên: Văn
];