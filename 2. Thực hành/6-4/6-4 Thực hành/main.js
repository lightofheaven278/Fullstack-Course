// // let name = 'cafedev';

// // alert(`hello ${1}`);

// // alert(`hello ${"name"}`);

// // alert(`hello ${name}`);

// let a = parseInt(prompt("dfasfd", 1));
// let b = parseInt(prompt("dfasfd", 2));

// alert(a+b);

// let browser = prompt("Please input your browser");

// if (
//   browser == "Firefox" ||
//   browser == "Chrome" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okey we support these browsers too");
// } else if (browser == "Edge") {
//   alert("you've got the Edge");
// } else {
//   alert("We hope that this page looks ok!");
// }

// let a = parseInt(prompt("a?", ""));

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
//   default:
//     alert("Khong xu ly");
// }

// let mark = Number(prompt("Please input a number"));

// if (mark < 0 || mark > 100) {
//   alert("The inputted value is not in range");
// } else if (mark <= 60) {
//   alert("F");
// } else if (mark <= 69) {
//   alert("D");
// } else if (mark <= 79) {
//   alert("C");
// } else if (mark <= 89) {
//   alert("B");
// } else if (mark <= 100) {
//   alert("A");
// } else {
//   alert("The value you inputted is invalid");
// }

let number = parseInt(prompt("Please input a number"));
let remainder = number % 2;

switch (remainder) {
  case 0:
    alert("even");
  case 1:
    if (number > 10) {
      alert("A big odd number");
    } else if (number < 10) {
      alert("A small odd number");
    } else {
      alert(number);
    }
  // default:
  //     alert('The inputted number is invalid');
}
