let a = Number(prompt('Please input first number'));
let b = Number(prompt('Please input second number'));
let c = Number(prompt('Please input third number'));
var numberArr = [a, b, c];

// if (a < b) {
//     if (b < c) {
//         alert(numberArr);
//     } else {
//         if (a < c) {
//             let temp = numberArr[1];
//             numberArr[1] = numberArr[2];
//             numberArr[2] = temp;
//             alert(numberArr);
//         }else {
//             let temp1 = numberArr[1];
//             numberArr[1] = numberArr[2];
//             numberArr[2] = temp1;
//             let temp2 = numberArr[0];
//             numberArr[0] = numberArr[1];
//             numberArr[1] = temp2;
//             alert(numberArr);
//         }
//     }
// }

// numberArr.sort (function(a, b){return b-a});
// alert(numberArr);

let max = a;
let min = c;

if(max < b) {
    max = b;
}
if(max<c) {
 max = c;   
}
if (min> b) {
    min = b;
}
if (min>a) {
    min = a
}
