let weight = parseFloat(prompt('please input your weight in kg'));
let height = parseFloat(prompt('please input your height in meter'));
let bmi = weight / (height * height);

if (bmi < 18.5) {
    document.write('Low weight!');
} else if (18.5 < bmi < 24.9) {
    document.write('Normal');
} else if (bmi >= 25 && bmi < 29) {
    document.write('Overweight-nearly obesity');
} else if (30 < bmi < 34.9) {
    document.write('Obesity I');
} else if (35 < bmi < 39.5) {
    document.write('Obesity II');
} else {
    document.write('Obesity III');
} 