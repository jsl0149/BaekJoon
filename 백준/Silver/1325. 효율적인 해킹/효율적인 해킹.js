const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const data = _input.slice(1);

  const graph = new Array(N + 1).fill(0).map(() => []);
  let visited = new Array(N + 1).fill(false);

  data.forEach((val) => {
    const [from, to] = val.split(' ').map(Number);
    graph[to].push(from);
  });

  const dfs = (node, depth) => {
    if (visited[node]) {
      return 0;
    }

    visited[node] = true;
    for (let i = 0; i < graph[node].length; i++) {
      if (!visited[graph[node][i]]) {
        depth = Math.max(dfs(graph[node][i], depth + 1), depth);
      }
    }

    return depth;
  };

  let hackable = [];
  let findMax = [];
  for (let i = 1; i <= N; i++) {
    const depth = dfs(i, 0);
    hackable.push([i, depth]);
    findMax.push(depth);
    visited = new Array(N + 1).fill(false);
  }

  const maxHackable = Math.max.apply(null, findMax);

  let answer = [];

  hackable.forEach((val) => {
    if (val[1] === maxHackable) answer.push(val[0]);
  });

  answer.sort((a, b) => a - b);

  const ans = answer.reduce((acc, cur) => {
    return `${acc}${cur} `;
  }, '');

  return ans;
};

console.log(solution(input));
