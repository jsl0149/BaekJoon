const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);
  const dist = _input[1].split(' ').map(Number);
  const oil = _input[2].split(' ').map(Number);

  let curOilPrice = oil[0];

  let answer = 0;

  for (let i = 1; i < oil.length; i++) {
    answer += dist[i - 1] * curOilPrice;
    if (oil[i] < curOilPrice) curOilPrice = oil[i];
  }

  return answer;
};

console.log(solution(input));
