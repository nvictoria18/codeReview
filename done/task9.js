// 9

let string = "aaabbcaff"

function getNumberCharacters(str) {
    let result = {}
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]] !== undefined) ++result[str[i]];
        else result[str[i]] = 1;
    }
    for (let key in result) {
        newStr = newStr + key + result[key];
    }
    console.log(newStr)
}
getNumberCharacters(string)