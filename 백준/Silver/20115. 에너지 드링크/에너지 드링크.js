const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);

  const data = _input[1].split(' ').map(Number);

  data.sort((a, b) => a - b);

  let sum = data.pop();

  for (let i = 0; i < data.length; i++) {
    sum += data[i] / 2;
  }

  return sum;
};

console.log(solution(input));
