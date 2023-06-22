const n = 4,
  m = 3;
let i, j;
let arrNumber = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

let max = arrNumber[0][0];
let min = arrNumber[0][0];

for (i = 0; i < n; i++) {
  for (j = 0; j < m; j++) {
    if (max < arrNumber[i][j]) {
      max = arrNumber[i][j];
    }
    if (arrNumber[i][j]<min){
        min =arrNumber[i][j];
    }
  }
}