function strModify(str) {
    let newStr = str.toLowerCase();
    let result = newStr.replace("r", "R");
    return result;
}

let str = "rIkKEi";
console.log("Here is modified string: " + strModify(str));