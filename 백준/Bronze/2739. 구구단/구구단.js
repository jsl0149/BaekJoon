const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);

let answer = ``;

for (let i = 1; i <= 9; i++) {
  answer += `${N} * ${i} = ${N * i}\n`;
}

console.log(answer);