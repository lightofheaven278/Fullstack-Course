// let number = parseInt(prompt('Please input an integer'));

// for (let i = 2; i < number; i++) {
//     for (let j = 0; j < i; j++) {
//         if (i % j == 0) {
//             document.write(i + ' is not a prime' + '</br>');
//         } else {
//             // console.log('Prime which we are looking for are below:');
//             document.write(i + '</br>')
//         }
//     }
// }

// function isPrime(number) {
//   if (number < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printPrimeNumbers(n) {
//   console.log(`Các số nguyên tố từ 1 đến ${n} là:`);
//   for (let number = 1; number <= n; number++) {
//     if (isPrime(number)) {
//       console.log(number);
//     }
//   }
// }

// const n = parseInt(prompt("Nhập vào số nguyên n:"));
// printPrimeNumbers(n);

let n = Number(prompt("Nhap mot so n"));

console.log("Cac so nguyen to trong ");
if (n > 1) {
  for (let index = 2; index < n; index++) {
    let checkPrime = true;
    for (let i = 2; i <= Math.sqrt(index); i++) {
      if (index % i == 0) {
        checkPrime = false;
        break;
      }
    }
    if (checkPrime) {
      console.log(index);
    }
  }
}
