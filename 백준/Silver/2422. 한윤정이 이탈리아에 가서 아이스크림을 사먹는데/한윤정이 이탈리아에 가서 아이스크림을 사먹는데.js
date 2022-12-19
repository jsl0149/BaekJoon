const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const data = input.slice(1);

const solution = (N, M, input) => {
  const map = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(false));

  input.forEach((val) => {
    const [a, b] = val.split(' ').map(Number);
    map[a][b] = true;
    map[b][a] = true;
  });

  let answer = 0;

  for (let i = 1; i <= N - 2; i++) {
    for (let j = i + 1; j <= N - 1; j++) {
      if (map[i][j]) continue;
      for (let k = j + 1; k <= N; k++) {
        if (map[j][k] || map[i][k]) continue;
        answer++;
      }
    }
  }

  console.log(answer);
};

solution(N, M, data);
