const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const original = input[1].split(' ').map(Number);
const data = input[1].split(' ').map(Number);

let idx = 0;

data.sort((a, b) => a - b);
const m = new Map();
data.forEach((val) => {
  if (m.get(val) === undefined) m.set(val, idx++);
});

let answer = ``;

original.forEach((val) => {
  answer += `${m.get(val)} `;
});

console.log(answer);