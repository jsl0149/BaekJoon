const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);
  const K = parseInt(_input[1]);

  const data = _input[2].split(' ').map(Number);

  data.sort((a, b) => a - b);

  const dist = [];

  for (let i = 0; i < data.length - 1; i++) dist.push(data[i + 1] - data[i]);

  dist.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < dist.length - (K - 1); i++) answer += dist[i];

  return answer;
};

console.log(solution(input));
