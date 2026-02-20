const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input.slice(1).map(Number);

  let max = 0;

  arr.sort((a, b) => b - a);

  arr.forEach((val, idx) => {
    max = Math.max(max, val * (idx + 1));
  });

  console.log(max);
};

solution(_input);
