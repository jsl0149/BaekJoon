const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [L, C] = input[0].split(' ').map(Number);
const alphabet = input[1].split(' ');
alphabet.sort();

const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); 
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

const answer = getCombinations(alphabet, L).filter((val)=>
    val.includes('a') || val.includes('e') || val.includes('i') || val.includes('o') || val.includes('u') 
).filter((val)=>{
    const temp = new Map();

    val.forEach((val)=>{
        if(temp.get(val)) temp.set(val, temp.get(val)+1);
        else temp.set(val, 1);
    })
    
    const aaa = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    aaa.forEach((val)=>{
        if(temp.get(val)) count += temp.get(val);
    })

    if(count >= 1 && val.length - count >= 2) return true
    
    return false;

}).map((val)=>val.join('')).reduce((acc,cur)=>{
    return `${acc}${cur}\n`
},'');

console.log(answer);

