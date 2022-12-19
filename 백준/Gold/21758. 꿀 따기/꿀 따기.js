const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);

  const honey = _input[1].split(' ').map(Number);

  const dp = new Array(N).fill(0);

  dp[0] = honey[0];

  let answer = 0;

  for (let i = 1; i < N; i++) {
    dp[i] = dp[i - 1] + honey[i];
  }

  /**
   * 벌 꿀 벌
   */

  for (let i = 1; i < N - 1; i++) {
    let total = dp[i] - dp[0] + dp[N - 2] - dp[i - 1];
    answer = Math.max(total, answer);
  }

  /**
   * 벌 벌 꿀
   */

  for (let i = 1; i < N - 1; i++) {
    let total = dp[N - 1] - dp[0] - honey[i] + dp[N - 1] - dp[i];
    answer = Math.max(total, answer);
  }

  /**
   * 꿀 벌 벌
   */

  for (let i = 1; i < N - 1; i++) {
    let total = dp[N - 2] - honey[i] + dp[i - 1];
    answer = Math.max(total, answer);
  }

  return answer;
};

console.log(solution(input));
