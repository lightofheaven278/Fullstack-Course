// ///// Bai 1
// function createArr(arr) {
//   let arrLength = Number(prompt("Please input array length"));
//   for (let i = 0; i < arrLength; i++) {
//     let number = Number(prompt("Please input a number"));
//     arr.push(number);
//   }
//   console.log(arr);
// }

// function sortArr(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(arr);
// }

// // function sortFunction(arr, callback) {
// //     console.log(callback(arr));
// // }

// // let arr = [3,1,5,2,4];
// let arr =[];
// console.log(createArr(arr, sortArr(arr)));

// let arr = [];
// createArr(arr, sortArr(arr));

///// Bai 2

// function eventFilter (arr) {
//     let newArr = [];
//     for ( i= 0; i< arr.length; i++) {
//         if(arr[i]%2==0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// function printEvenArray (arr, callback) {
//     console.log(callback(arr));
// }

// let arr = [1,2,3,4,5];
// console.log(printEvenArray(arr, eventFilter));

///// Bai 3

// function transformArray (arr) {
//     let newArr = [];
//     for (i=0; i<arr.length; i++) {
//         arr[i]=arr[i]*2;
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// function printTransformedArray (arr, callback) {
//     return callback(arr);
// }

// let arr = [1,2,3,4,5];
// document.getElementById("transform-array").innerHTML = printTransformedArray(arr, transformArray);

///// Bai 4

// function sumStringArray (str) {
//     let sum =0;
//     for (let i=0; i<str.length;i++) {
//         if(!isNaN(str[i])){
//             sum += Number(str[i]);
//         }
//     }
//     return sum;
// }

// let str = "1,a,3,b,5";
// console.log(sumStringArray(str));

///// Bai 5

function checkPrime(i) {
  if (i < 2) {
    return false;
  }
  if (i > 2) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        return false;
      }
    }
  }
  return true;
}
let section = document.createElement("section");
  document.body.appendChild(section);
  section.className = "container";
//   section.style.display = "flex";
//   section.style.flexWrap = "wrap";

for (let i = 1; i <= 100; i++) {

  let div = document.createElement("div");
  section.appendChild(div);
  div.className = "flex-elements";
//   div.style.width = "30px";
//   div.style.height = "30px";
//   div.style.textAlign = "center";
//   div.style.marginBottom = "10px";
//   div.style.marginLeft = "5px";
// //   div.style.borderRadius = "5px";
  div.innerHTML = i;
  if (div.innerHTML % 2 == 0) {
    div.style.backgroundColor = "rgb(118, 239, 189)";
  } else {
    div.style.backgroundColor = "yellow";
  }
  if (checkPrime(i)) {
    div.style.backgroundColor = "red";
  }
}
