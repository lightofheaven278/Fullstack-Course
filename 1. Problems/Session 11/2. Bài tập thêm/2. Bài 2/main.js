let numberOfRow = Number(prompt("Please input number of row"));
let numberOfColumn = Number(prompt("Please input number of column"));
// Create multi-direction array
// let arrayInt = new Array(numberOfRow);
// for (let i = 0; i < numberOfRow; i++) {
//   arrayInt[i] = new Array(numberOfColumn);
// }

let arrayInt = [];

for (let j = 0; j < numberOfColumn; j++) {
  arrayInt[j] = [];
}

// Input elements of array from keyboard
for (let i = 0; i < numberOfRow; i++) {
  for (let j = 0; j < numberOfColumn; j++) {
    arrayInt[i][j] = parseInt(
      prompt(
        "Please input elements of " +
          (i + 1) +
          "row " +
          (j + 1) +
          " and column " +
          " :"
      )
    );
    // Print out array's elements in console log
    console.log(
      "Here is elements of " +
        (i + 1) +
        " row and " +
        (j + 1) +
        "column: " +
        arrayInt[i][j]
    );
    // console.log("Here is elements of row number 1 and column number 1" + arrayInt[i][0]);
  }
}
// Print out multi-direction array
console.log("Here is array arrInt:", arrayInt);

// Print elements on the edge of arrInt
for (let i = 0; i < numberOfRow; i++) {
  for (let j = 0; j < numberOfColumn; j++) {
    console.log(
      "Here is elements of row number 1 and column number 1: " + arrayInt[i][0]
    );
  }
}

// Print elements on diagonal of arrInt
for (let i = 0; i < numberOfRow; i++) {
  for (let j = 0; j < numberOfColumn; j++) {
    if (i == j) {
      console.log("Here is elements the diagonal of arrInt: " + arrayInt[i][j]);
    }
  }
}

// Print elements on secondary diagonal of arrInt
for (let i = 0; i < numberOfRow; i++) {
  console.log(
    "Here is elements the secondary diagonal of arrInt: " +
      arrayInt[i][numberOfRow - 1 - i]
  );
}

// Arrange elements in a row of arrInt in increasing order
for (let i = 0; i < numberOfColumn; i++) {
  arrayInt[i].sort((a, b) => (a > b ? -1 : 1));
}
console.log("Here is array which is sorted: ", arrayInt);

// Arrange elements in a row of arrInt in increasing order without using sort function
for (let i = 0; i < numberOfRow; i++) {
  for (let j = 0; j < numberOfColumn - 1; j++) {
    for (let k = j + 1; k < numberOfColumn; k++) {
      if (arrayInt[i][j] > arrayInt[i][k]) {
        let temp = arrayInt[i][j];
        arrayInt[i][j] = arrayInt[i][k];
        arrayInt[i][k] = temp;
      }
    }
  }
}
console.log(arrayInt);
