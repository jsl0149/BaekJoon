const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const data = input.slice(0, input.length - 1);

let answer = '';

data.forEach((val) => {
  const [a, b] = val.split(' ').map(Number);
  answer += `${a + b}\n`;
});

console.log(answer);