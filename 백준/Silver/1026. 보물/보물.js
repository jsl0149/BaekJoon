const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr_1 = input[1].split(' ').map(Number);
  const arr_2 = input[2].split(' ').map(Number);

  arr_1.sort((a, b) => b - a);
  arr_2.sort((a, b) => a - b);

  let ans = 0;

  for (let i = 0; i < N; i++) {
    ans += arr_1[i] * arr_2[i];
  }

  console.log(ans);
};

solution(_input);
