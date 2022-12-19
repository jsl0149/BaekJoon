const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const MAX = Number.MAX_SAFE_INTEGER;

const solution = (_input) => {
  const N = parseInt(_input[0]);
  const M = parseInt(_input[1]);

  const data = _input.slice(2);

  const graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(MAX));

  data.forEach((val) => {
    const [from, to, cost] = val.split(' ').map(Number);
    graph[from][to] = Math.min(graph[from][to], cost);
  });

  for (let i = 1; i <= N; i++) {
    graph[i][i] = 0;
  }

  const floyd = () => {
    for (let k = 1; k <= N; k++) {
      for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
          graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
      }
    }
  };

  floyd();

  let answer = '';

  for (let i = 1; i <= N; i++) {
    let temp = '';
    for (let j = 1; j <= N; j++) {
      if (graph[i][j] === MAX) temp += `0 `;
      else temp += `${graph[i][j]} `;
    }
    answer += `${temp}\n`;
  }

  console.log(answer);
};

solution(input);
