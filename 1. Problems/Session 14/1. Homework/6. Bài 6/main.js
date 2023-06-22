function findArrMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [1, 2, 3, 4, 8, 3, 6, 8, 4];
console.log("The element has maximal value is: " + findArrMax(arr));