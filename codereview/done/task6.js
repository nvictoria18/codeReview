// 6

const first = [1,3,3,5];
const second = [3,5,5,6];

const getMatchedNumbers = (firstArr, secondArr) => {
    const matched = [...new Set(firstArr)].filter(num => secondArr.includes(num));
    const different = [...new Set([...firstArr, ...secondArr])].filter(num => !matched.includes(num));
    return { matched, different };
};
  
    
console.log(getMatchedNumbers(first, second));