const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);

let answer = ``;

answer += `${a + b}\n`;
answer += `${a - b}\n`;
answer += `${a * b}\n`;
answer += `${Math.floor(a / b)}\n`;
answer += `${a % b}`;

console.log(answer);