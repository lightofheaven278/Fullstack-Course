function centuryCal(year) {
    let century = Math.floor(year / 100) + 1;
    return century;
};

console.log("Now is " + centuryCal(2023) + " th century.")