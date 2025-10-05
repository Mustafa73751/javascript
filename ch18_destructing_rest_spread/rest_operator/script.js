// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum(5, 10)); // 15

function printNames(name1, name2, ...rest) {
  console.log(name1);
  console.log(name2);
  console.log(rest);
}
printNames("Mustafa", "Mohamed", "Ibrahim", "Yusuf", "Aisha")
