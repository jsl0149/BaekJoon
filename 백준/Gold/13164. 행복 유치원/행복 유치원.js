const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const kids = _input[1].split(' ').map(Number);

  const dist = [];

  for (let i = 0; i < kids.length - 1; i++) dist.push(kids[i + 1] - kids[i]);

  dist.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < dist.length - (M - 1); i++) answer += dist[i];

  return answer;
};

console.log(solution(input));
