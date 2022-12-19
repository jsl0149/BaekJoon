const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);

  const dp = new Array(N + 1).fill(0);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= N; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }

  console.log(dp[N].toString());
};

solution(input);
