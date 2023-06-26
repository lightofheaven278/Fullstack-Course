// let data = prompt("Please input a string data");
// let reverseData = "";

// for (let i = data.length - 1; i >= 0; i--) {
//   reverseData += data[i];
//   if ((i+1) % 2 != 0) {
//     console.log(data[i]);
//   }
// }

// console.log(reverseData);

// // let reverseData = String(data).split("").reverse().join("");

// // console.log(reverseData);

///////////////Bai 2//////////////////////////

// let arrNumber = [1, -2, 3, 4, -9, 6];
// let max = arrNumber[0];

// for (let i = 0; i < arrNumber.length; i++) {
//   if (max < arrNumber[i]) {
//     max = arrNumber[i];
//   }
// }
// console.log(max);

/////---------------------------------------------/////

let arrNumber1 = [1, -2, 3, 4, -9, 6];
let max = -1;
let cacheArr = [];


for (let i = 0; i < arrNumber1.length; i++) {
  let newArrNumber = [];


  for (let j = i; j < arrNumber1.length; j++) {
    newArrNumber.push(arrNumber1[j]);
    let sum = 0;
    let cacheArr2 = [];
    for (let k = 0; k < newArrNumber.length; k++) {
      sum += newArrNumber[k];
      cacheArr2.push(newArrNumber[k]);
      if (max < sum) {
        max = sum;
        cacheArr = cacheArr2;
      }
    }
    console.log("Sum of elements of " + newArrNumber + " is " + sum);
  }
  console.log(newArrNumber);
}

console.log("Max value is " + max);
console.log("Array has maximal sum is " + cacheArr);
