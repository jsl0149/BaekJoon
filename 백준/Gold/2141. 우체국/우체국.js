const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);

  const data = _input.slice(1);

  const arr = [];

  let sum = 0;

  data.forEach((val) => {
    const [a, b] = val.split(' ').map(Number);
    arr.push([a, b]);
    sum += b;
  });

  arr.sort((a, b) => a[0] - b[0]);

  let total = 0;

  for (let i = 0; i < N; i++) {
    total += arr[i][1];
    if (total >= sum / 2) {
      return arr[i][0];
    }
  }
};

console.log(solution(input));
