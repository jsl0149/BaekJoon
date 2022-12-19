const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  let N = parseInt(_input[0]);

  const data = _input[1].split(' ').map((i) => BigInt(i));

  data.sort((a, b) => (a < b ? -1 : 1));

  let answer = 0;

  if (data.length % 2 === 1) {
    answer = data.pop();
    N -= 1;
  }

  for (let i = 0; i < N / 2; i++) {
    const sum = data[i] + data[data.length - i - 1];
    answer = sum > answer ? sum : answer;
  }

  return String(answer);
};
console.log(solution(input));
