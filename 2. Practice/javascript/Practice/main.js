// let i;

// for (i=1; i <= 100; i++) {
//     if (i%3==0 && i%2==1) {
//         console.log(i);
//     }
// }

// let i;

// for (i=3; i<=100; i+=3) {
//     console.log(i)
// }

// let i=100;

// for (i=100; i>=1; i--) {
//     if (i%2==0) {
//         console.log(i)
//     }
// }

// while(true) {
//     let number = Number(prompt('Please input character'));
//     if (!isNaN(number)) {
//         if (number>= 0 && number <= 10) {
//             break;
//         }else {
//             alert('So vua nhap nam ngoai khoang 0-10');
//         }
//     }else {
//         alert('This is not a number')
//     }
// }

// while (true) {
//   let age = Number(prompt("Please input your age"));
//   if (!isNaN(age)) {
//     if (age >= 18) {
//       console.log("age");
//       break;
//     } else {
//       console.log("This age is invalid. Your age should be greater than 18");
//     }
//   } else {
//     console.log("This is not a number");
//     break;
//   }
// }

let studentID = prompt("Please input your student ID");

do {
  if (studentID.length>5 && studentID.startsWith("S")){
    document.write(studentID);
    break;
  }
} while (true)