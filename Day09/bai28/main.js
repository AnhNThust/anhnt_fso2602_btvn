//#region Common variables and functions
const milisecondOfOneDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày
//#endregion

//#region Bai 1
function formatDate(date, separator = '/') {
  let dateOfMonth = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${dateOfMonth}${separator}${month}${separator}${date.getFullYear()}`;
}
// Ví dụ sử dụng:
console.log("Bài 1");
const date = new Date(2023, 0, 15) // 15 January 2023
console.log(formatDate(date)) // "15/01/2023"
//#endregion

//#region Bai 2
function addDays(date, days) {
  let afterDate = new Date(date.setDate(date.getDate() + days))
  return `${formatDate(afterDate)}`;
}
console.log("Bài 2");
// Ví dụ sử dụng:
const date2 = new Date(2023, 0, 15) // 15 January 2023
const newDate = addDays(date2, 10)
console.log(newDate) // 25 January 2023
//#endregion

//#region Bai 3
function daysBetween(date1, date2) {
  return Math.floor((date2 - date1) / milisecondOfOneDay);
}
console.log("Bài 3");
// Ví dụ sử dụng:
const d1 = new Date(2022, 8, 15) // 15 January 2023
const d2 = new Date(2023, 0, 25) // 25 January 2023
console.log(daysBetween(d1, d2)) // 10
//#endregion

//#region Bai 4
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("Bài 4");
// Ví dụ sử dụng:
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2024)); // true
//#endregion

//#region Bai 5
function calculateDaysLived(birthDate) {
  return Math.floor((Date.now() - birthDate) / milisecondOfOneDay);
}
console.log("Bài 5");
const birthDate = new Date(1990, 0, 1) // 1 January 1990
console.log(calculateDaysLived(birthDate)) // Số ngày từ 1 January 1990 đến ngày hiện tại
//#endregion

//#region Bai 6
function getDayOfWeek(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = date.getDay();
  return daysOfWeek[day];
}
console.log("Bài 6");
// Ví dụ sử dụng:
const d6 = new Date(2023, 0, 15); // 15 January 2023
console.log(getDayOfWeek(d6)); // "Sunday"
const d7 = new Date(Date.now());
console.log(getDayOfWeek(d7));
//#endregion

//#region Bai 7
function getDayOfYear(date) {
  let year = date.getFullYear();
  let firstDate = new Date(year, 0, 0); // Ngày đầu tiên của năm (0 tháng, 0 ngày sẽ trả về ngày 31 tháng 12 của năm trước)
  return Math.floor((date - firstDate) / milisecondOfOneDay);
}
console.log("Bài 7");
// Ví dụ sử dụng:
const date7 = new Date(2023, 0, 15); // 15 January 2023
console.log(getDayOfYear(date7)); // 15
const date8 = new Date(2023, 6, 20);
console.log(getDayOfYear(date8));
//#endregion

//#region Bai 8
function getWeekNumber(date) {
  let year = date.getFullYear();
  let firstDate = new Date(year, 0, 0); // Ngày đầu tiên của năm (0 tháng, 0 ngày sẽ trả về ngày 31 tháng 12 của năm trước)
  return Math.ceil((date - firstDate) / (7 * milisecondOfOneDay));
}
console.log("Bài 8");
// Ví dụ sử dụng:
const d88 = new Date(2023, 0, 15); // 15 January 2023
console.log(getWeekNumber(d88)); // 3
//#endregion

//#region Bai 9
function getNextFriday13(year) {
  let result = [];

  for (let i = 0; i < 12; i++) {
    let testDate = new Date(year, i, 13);

    if (testDate.getDay() === 5) {
      result.push(formatDate(testDate, '-'));
    }
  }

  return result;
}
console.log("Bài 9");
// Ví dụ sử dụng:
console.log(getNextFriday13(2023)) // ["2023-01-13", "2023-10-13"]
console.log(getNextFriday13(2026)) // ["2026-02-13", "2026-03-13", "2026-11-13"]
//#endregion
