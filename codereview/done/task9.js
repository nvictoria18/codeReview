// 9

let string = "aaabbcaff"

function getNumberCharacters(str) {
    const result = {}
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        result[str[i]] !== undefined ? ++result[str[i]] : result[str[i]] = 1;
    }
    for (let key in result) {
        newStr += key + result[key];
    }
    return(newStr)
}

console.log(getNumberCharacters(string));