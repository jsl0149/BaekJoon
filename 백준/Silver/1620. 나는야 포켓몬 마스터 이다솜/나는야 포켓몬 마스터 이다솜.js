const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const data = input.slice(1, N + 1).map((v) => v.trim());
const question = input.slice(N + 1).map((v) => v.trim());

const dict = [];
const dict2 = new Map();

data.forEach((val, idx) => {
  dict.push(val);
  dict2.set(val, idx + 1);
});

let answer = ``;

question.forEach((val) => {
  if (parseInt(val)) answer += `${dict[val - 1]}\n`;
  else answer += `${dict2.get(val)}\n`;
});

console.log(answer);
