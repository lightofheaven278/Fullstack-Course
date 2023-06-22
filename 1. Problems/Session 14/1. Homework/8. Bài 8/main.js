function averageCal(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}

let newArr = [1, 5, 4, 7, 8, 9];
console.log("The average value of array elements is " + averageCal(newArr));