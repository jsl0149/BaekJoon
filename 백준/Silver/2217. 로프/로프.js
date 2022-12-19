const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const data = input.slice(1).map(Number);

const solution = (rope) => {
  rope.sort((a, b) => a - b);

  let max = 0;

  rope.forEach((val, idx) => {
    const temp = val * (rope.length - idx);
    if (temp > max) max = temp;
  });

  console.log(max);
};

solution(data);
