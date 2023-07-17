const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (data) => {
  const inputs = data.slice(2);

  const arr = data[1].split(' ').map(Number);

  const dp = new Array(arr.length + 1).fill(0);

  dp[1] = arr[0];

  for (let i = 1; i < arr.length; i++) dp[i + 1] = dp[i] + arr[i];

  let answer = '';

  inputs.forEach((val) => {
    const [start, end] = val.split(' ').map(Number);
    const target = dp[end] - dp[start - 1];
    answer += `${target}\n`;
  });

  return answer;
};

console.log(solution(input));
