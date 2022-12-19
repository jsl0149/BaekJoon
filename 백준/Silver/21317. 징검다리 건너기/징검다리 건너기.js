const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);

  const data = _input.slice(1, _input.length - 1);

  const K = parseInt(_input[_input.length - 1]);

  const small = [0];

  const big = [0];

  data.forEach((val) => {
    const [a, b] = val.split(' ').map(Number);
    small.push(a);
    big.push(b);
  });

  const DP = new Array(N + 1).fill(0);

  DP[2] = small[1];

  for (let i = 3; i <= N; i++) {
    DP[i] = Math.min(DP[i - 1] + small[i - 1], DP[i - 2] + big[i - 2]);
  }

  let answer = DP[N];

  for (let i = 1; i <= N - 3; i++) {
    const DP2 = new Array(N + 1).fill(0);
    DP2[i + 3] = DP[i] + K;
    DP2[i + 4] = DP2[i + 3] + small[i + 3];
    for (let j = i + 5; j <= N; j++) {
      DP2[j] = Math.min(DP2[j - 1] + small[j - 1], DP2[j - 2] + big[j - 2]);
    }
    answer = Math.min(answer, DP2[N]);
  }

  return answer;
};

console.log(solution(input));
