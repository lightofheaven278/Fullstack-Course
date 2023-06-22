// let a = parseFloat(prompt('Please input a'));
// let remainder = a%8;

// if (remainder == 0) {
//     document.write(a + ' chia het cho 8');
// } else if( remainder == 1) {
//     document.write(a + ' chia cho 8 du 1');
// }else if( remainder == 2) {
//     document.write(a + ' chia cho 8 du 2');
// }else if( remainder == 3) {
//     document.write(a + ' chia cho 8 du 3');
// }else if( remainder == 4) {
//     document.write(a + ' chia cho 8 du 4');
// }else if( remainder == 5) {
//     document.write(a + ' chia cho 8 du 5');
// }else if( remainder == 6) {
//     document.write(a + ' chia cho 8 du 6');
// }else {
//     document.write(a + ' chia cho 8 du 7');
// };

// var arrNumber = [2,7,4,9,10];

// for(let i=0; i< arrNumber.length; i++) {
//     if(i%2!=0){
//         console.log(arrNumber[i]);
//     }
// }

// let arrStudent = [];
// arrStudent.length = 5;
// for (let i=0; i<arrStudent.length; i++) {
//     arrStudent[i] = prompt("Please input student's info");
//     console.log(arrStudent[i]);
// }

// var arrNumber = [];
// var i = 0;

// do {
//   arrNumber[i] = Number(prompt("Please input a number"));
//   if (arrNumber[i] < 0) {
//     break;
//   }
//   i++;
// } while (true);

// console.log(arrNumber);

// if (arrNumber[i] % 3 == 0 && arrNumber[i] % 5 == 0) {
//   console.log(arrNumber[i]);
// }
// if (arrNumber[i] >= 2) {
//   let checkPrime = true;
//   for (let j = 1; j < Math.sqrt(arrNumber[i]); j++) {
//     if (arrNumber[i] % j == 0) {
//       checkPrime = false;
//       break;
//     }
//     if (checkPrime) {
//       console.log("The prime is" + arrNumber[i]);
//     }
//   }
// }

//////////////bai 1//////////////////

// let arrNumber = [];
// arrNumber.length = 5;
// for (let i = 0; i < arrNumber.length; i++) {
//   arrNumber[i] = Number(prompt("Please input a number"));
//   if (arrNumber[i] % 2 == 0) {
//     console.log("The even element is:" + arrNumber[i]);
//   }
// }
// arrNumber.pop();
// arrNumber.unshift(1, 2);
// arrNumber.shift();
// console.log(arrNumber);

///////////////// bai 2////////////////

// const n = 4,
//   m = 3;
// let i, j;
// let arrNumber = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
// ];

// let max = arrNumber[0][0];
// let min = arrNumber[0][0];

// for (i = 0; i < n; i++) {
//   for (j = 0; j < m; j++) {
//     if (max < arrNumber[i][j]) {
//       max = arrNumber[i][j];
//     }
//     if (arrNumber[i][j]<min){
//         min =arrNumber[i][j];
//     }
//   }
// }
// console.log("This is max number: " + max);
// console.log("This is min number: " + min);

///////////////// bai 3////////////////

// let arrNumbers = [];
// arrNumbers.length = 5;
// let i;

// for (i=0; i < arrNumbers.length; i++) {
//     arrNumbers[i] = prompt('Please input a number');
// }
// let txt = "";
// for (let i in arrNumbers) {
//     txt += arrNumbers[i] + "</br>";
// }
// document.write(txt);

// for (const number of arrNumbers) {
//     console.log(number);
// }

// ////////////Bai 1////////////////////////////////////
// function add(number1, number2, number3) {
//   let sum = number1 + number2 + number3;
//   return sum;
// }

// let result = add(5, 10, 15);
// console.log("result is " + result);

// /////////////////////Bai 2/////////////////////////
// let printElement = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log("the array's elements " + arr[i]);
//   }
//   console.log("Here is array " , arr);
// };

// let arr = [2, 3, 4, 5, 6];
// printElement(arr);

// ///////////////////Bai 3//////////////////////////
// let calculate = (number1, number2) => {
//   let multi = number1 * number2;
//   console.log(multi);
// };

// calculate(5, 10);
// let a = document.getElementsByClassName("err");
// let b = document.getElementById("no1").innerHTML;

// console.log(a);
// console.log(b);

// console.log(document.getElementById("block").innerText);
// // console.log(document.querySelector("block"));

// let div = document.createElement("div");
// div.setAttribute("id", "ra");
// let body = document.getElementsByTagName("body");
// body[0].appendChild(div);
// let h2 = document.createElement("h2");
// div.appendChild(h2);
// h2.innerHTML = "Xin chao cac ban!!!";
// let p = document.createElement("p");
// p.innerHTML = "I love you !!!";
// div.appendChild(p);

// Bài 1
function eventInput() {
  let studentID = document.getElementById("student-id");
  let result = studentID.value;
  console.log("The student ID is: " , result);
}

// Bai 2
let studentName = document.getElementById("full-name");
studentName.addEventListener("change", function(){
  console.log("Student's name is:" , studentName.value);
});

// Bai 3

let buttonSubmit = document.getElementById("button");
buttonSubmit.onclick = function submitEvent(){
  alert("Already submit");
};
