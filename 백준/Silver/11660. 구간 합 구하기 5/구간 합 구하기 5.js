const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);
  const data = _input.slice(1, 1 + N);
  const pos = _input.slice(1 + N);

  const map = [];

  data.forEach((val) => {
    const row = val.split(' ').map(Number);
    map.push(row);
  });

  const sum = new Array(1025).fill(0).map(() => new Array(1025).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] + map[i][j] - sum[i][j];
    }
  }

  let answer = '';
  pos.forEach((val) => {
    const [r1, c1, r2, c2] = val.split(' ').map(Number);

    const temp =
      sum[r2][c2] - (sum[r1 - 1][c2] + sum[r2][c1 - 1]) + sum[r1 - 1][c1 - 1];

    answer += `${temp}\n`;
  });

  return answer;
};

console.log(solution(input));
