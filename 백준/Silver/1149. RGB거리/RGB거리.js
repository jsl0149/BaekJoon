const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (data) => {
  const arr = [];
  const N = parseInt(data[0]);

  data.slice(1).forEach((val) => {
    const [first, second, third] = val.split(' ').map(Number);
    arr.push([first, second, third]);
  });

  const dp = new Array(arr.length).fill(0).map(() => new Array(3).fill(0));

  dp[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < 3; j++) {
      const temp = [...dp[i - 1].slice(0, j), ...dp[i - 1].slice(j + 1)];
      dp[i][j] = arr[i][j] + Math.min.apply(null, temp);
    }
  }

  return Math.min.apply(null, dp[N - 1]);
};

console.log(solution(input));