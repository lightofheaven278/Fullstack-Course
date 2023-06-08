let perfectNum = parseInt(prompt("Please input an integer"));
// let i = 0;
// let result = result + i;

if (perfectNum > 0) {
  for (let i = 0, sum = 0; i < perfectNum; i++) {
    if (perfectNum % i == 0) {
        sum += i;
       if (sum == perfectNum ){
        alert('This is a perfect number');
       } else {
        alert('This is not a perfect number');
       }
    }
  }
} else {
  alert("The number you inputted is not a perfect number");
}
