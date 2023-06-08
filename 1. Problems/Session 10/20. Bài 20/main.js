// a
console.log('Show on the console log number from -20 to 0:');
for (let i = 0; i >= -20; i--) {
    console.log(i);
}
// b
console.log('Show on the console log odd number from -29 to 3:');
for (let a = 3; a >= -29; a--) {
    if (a % 2 !== 0) {
        console.log(a);
    }
}

// c
console.log('Show in the console log even number from -14 to 12:');
for (let b = 12; b >= -14; b--) {
    if (b % 2 == 0) {
        console.log(b);
    }
}

// d
console.log('Show in the console log number divisible by 3 from 20 to 50:');
for (let c=50; c>= 20; c--) {
    if (c%3==0) {
        console.log(c)
    }
}