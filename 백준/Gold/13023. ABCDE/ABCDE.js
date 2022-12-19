const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const data = _input.slice(1);

  const graph = new Array(N + 1).fill(0).map(() => []);

  data.forEach((val) => {
    const [from, to] = val.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
  });

  let visited = new Array(N + 1).fill(false);

  let answer = 0;

  let flag = 0;

  const dfs = (node, depth) => {
    if (flag) return;

    if (depth === 5) {
      flag = 1;
      return;
    }

    visited[node] = true;

    for (let i = 0; i < graph[node].length; i++) {
      if (!visited[graph[node][i]]) dfs(graph[node][i], depth + 1);
    }

    visited[node] = false;
  };

  for (let i = 0; i < N; i++) {
    dfs(i, 1);
  }

  return flag;
};

console.log(solution(input));
