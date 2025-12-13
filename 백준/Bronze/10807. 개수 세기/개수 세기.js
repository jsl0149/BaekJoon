const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = parseInt(input[0]);
  const arr = input[1].split(' ').map(Number);
  const v = parseInt(input[2]);

  let ans = 0;

  arr.forEach((val) => {
    if (val === v) ans++;
  });

  console.log(ans);
};

solution(input);
