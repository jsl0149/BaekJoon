const { FORMERR } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const data = input.slice(1).map(Number);

let zero = 0;
let one = 0;

const dpOne = new Array(41);
const dpZero = new Array(41);

let answer = ``;

dpZero[0] = 1;
dpOne[0] = 0;
dpZero[1] = 0;
dpOne[1] = 1;
dpZero[2] = 1;
dpOne[2] = 1;

for(let i = 3;i <=40;i++){
    dpZero[i] = dpZero[i-1] + dpZero[i-2];
    dpOne[i] = dpOne[i-1] + dpOne[i-2];
}

data.forEach((val)=>{
    answer += `${dpZero[val]} ${dpOne[val]}\n`;
})

console.log(answer);
