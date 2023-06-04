// Method 1:↓

// let input = prompt('Please input a number with 3 characters');
// let reverseInput = parseFloat(String(parseFloat(input)).split('').reverse().join('')) * Math.sign(parseFloat(input));

// document.write('Reversed number is: ' + reverseInput);

//----------------------------------------------------
// Method 2: ↓

let number = parseFloat(prompt('Please input a number with 3 characters'));
let result = 0;

while(number>0){
    rightmost = number%10;
    
    result = result*10 + rightmost;
    

    number = Math.floor(number/10);
}
document.write("Reversed number is : " + result * Math.sign(parseFloat(number)))
