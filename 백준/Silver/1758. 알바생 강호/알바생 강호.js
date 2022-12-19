const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, ...data] = _input.map(Number);

  data.sort((a, b) => b - a);

  let total = 0;

  data.forEach((val, idx) => {
    const money = val - idx;
    if (money > 0) total += money;
  });

  return total;
};

console.log(solution(input));
