const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);

  arr.sort((a, b) => a - b);

  const dp = Array(N).fill(0);

  dp[0] = arr[0];

  for (let i = 1; i < N; i++) {
    dp[i] = dp[i - 1] + arr[i];
  }

  const ans = dp.reduce((prev, cur) => prev + cur, 0);

  console.log(ans);
};

solution(_input);
