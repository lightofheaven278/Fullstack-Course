let a = parseFloat(prompt('Please input a'));
let remainder = a%8;

if (remainder == 0) {
    document.write(a + ' chia het cho 8');
} else if( remainder == 1) {
    document.write(a + ' chia cho 8 du 1');
}else if( remainder == 2) {
    document.write(a + ' chia cho 8 du 2');
}else if( remainder == 3) {
    document.write(a + ' chia cho 8 du 3');
}else if( remainder == 4) {
    document.write(a + ' chia cho 8 du 4');
}else if( remainder == 5) {
    document.write(a + ' chia cho 8 du 5');
}else if( remainder == 6) {
    document.write(a + ' chia cho 8 du 6');
}else {
    document.write(a + ' chia cho 8 du 7');
};