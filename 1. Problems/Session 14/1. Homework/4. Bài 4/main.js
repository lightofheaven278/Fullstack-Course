function stringCut(str) {
    let text = "...";
    let newStr = str.slice(0, 10);
    let result = newStr.concat(text);
    return result;
}

let str = "I am the Ironman and I am inevitable"
console.log("The string after cuting and add '...' is: " + stringCut(str));