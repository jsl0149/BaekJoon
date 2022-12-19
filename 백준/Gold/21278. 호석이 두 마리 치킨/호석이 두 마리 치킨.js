const { captureRejectionSymbol } = require('events');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const MAX = Number.MAX_SAFE_INTEGER;

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const data = _input.slice(1);

  const combi = [];

  const ccc = [];

  for (let i = 1; i <= N; i++) combi.push(i);

  const combination = (arr, k) => {
    if (arr.length === 2) {
      ccc.push(arr);
      return;
    } else {
      for (let i = k; i < combi.length; i++) {
        const temp = arr.slice(0);
        temp.push(combi[i]);
        combination(temp, i + 1);
      }
    }
  };

  combination([], 0);

  const graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(MAX));
  for (let i = 1; i <= N; i++) graph[i][i] = 0;

  data.forEach((val) => {
    const [from, to] = val.split(' ').map(Number);
    graph[from][to] = 1;
    graph[to][from] = 1;
  });

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

  let answer = [101, 101, MAX];

  ccc.forEach((val) => {
    let ans = 0;
    const [A, B] = val;
    for (let i = 1; i <= N; i++) {
      if (i !== A || i !== B) ans += Math.min(graph[A][i], graph[B][i]) * 2;
    }

    if (answer[2] >= ans) {
      answer[2] = ans;

      const originMin = Math.min(answer[0], answer[1]);
      const curMin = Math.min(A, B);

      if (curMin < originMin) {
        answer[0] = A;
        answer[1] = B;
      } else if (curMin === originMin) {
        const originMax = Math.max(answer[0], answer[1]);
        const curMax = Math.max(A, B);
        if (curMax < originMax) {
          answer[0] = A;
          answer[1] = B;
        }
      }
    }
  });

  console.log(answer.join(' '));
};

solution(input);
