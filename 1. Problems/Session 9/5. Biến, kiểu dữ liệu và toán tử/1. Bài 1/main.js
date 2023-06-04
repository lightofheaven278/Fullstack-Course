a = prompt('Nhập điểm toán');
b = prompt('Nhập điểm lý');
c = prompt('Nhập điểm hoá');
let diemtoan = parseInt (a);
let diemly = parseInt (b);
let diemhoa = parseInt (c);
let tongdiem = diemtoan + diemly + diemhoa;
let tb = (diemtoan + diemly + diemhoa)/3;
// var d = a + b + c;
// var e = (a + b +c)/3;
var lineBreak = '<br/>';

document.write('Tổng điểm 3 môn toán, lý, hoá: ' + tongdiem);
document.write(lineBreak);
document.write('Điểm trung bình 3 môn toán, lý, hoá: ' + tb);
