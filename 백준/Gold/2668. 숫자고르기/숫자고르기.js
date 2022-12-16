const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, ...data] = _input.map(Number);

  const graph = new Array(N + 1).fill(0).map(() => []);

  let visited = new Array(N + 1).fill(false);
  const check = new Array(N + 1).fill(false);
  data.forEach((to, from) => {
    graph[from + 1].push(to);
  });

  let cycle = [];
  let flag = false;
  const dfs = (node, start) => {
    if (visited[node] && node === start) {
      flag = true;
      return;
    }

    if (visited[node]) return;

    visited[node] = true;

    cycle.push(node);

    for (let i = 0; i < graph[node].length; i++) {
      dfs(graph[node][i], start);
    }
  };

  let answer = [];

  for (let i = 1; i <= N; i++) {
    cycle = [];
    flag = false;
    visited = new Array(N + 1).fill(false);
    if (!check[i]) dfs(i, i);
    if (flag) {
      answer = [...answer, ...cycle];
      cycle.forEach((val) => {
        check[val] = true;
      });
    }
  }

  answer.sort((a, b) => a - b);

  let ans = `${answer.length}\n`;

  ans += answer.join('\n');

  return ans;
};

console.log(solution(input));
