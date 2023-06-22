let arrNumbers = [];
arrNumbers.length = 5;
let i;

for (i=0; i < arrNumbers.length; i++) {
    arrNumbers[i] = prompt('Please input a number');
}
let txt = "";
for (let i in arrNumbers) {
    txt += arrNumbers[i] + "</br>";
}
document.write(txt);

for (const number of arrNumbers) {
    console.log(number);
}
