const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (data) => {
  const [N, M, X] = data[0].split(' ').map(Number);

  const all = new Array(N + 1);

  const graph = new Array(N + 1).fill(0).map(() => []);

  data.slice(1).forEach((val) => {
    const [from, to, cost] = val.split(' ').map(Number);
    graph[from].push([to, cost]);
  });

  const dfs = (N, start, graph) => {
    const distance = new Array(N + 1).fill(Infinity);
    const queue = [];
    distance[start] = 0;
    queue.push([start, 0]);

    while (queue.length) {
      const [cur, curCost] = queue.shift();
      for (const [dest, cost] of graph[cur]) {
        if (distance[dest] > curCost + cost) {
          distance[dest] = curCost + cost;
          queue.push([dest, distance[dest]]);
        }
      }
    }
    all[start] = distance;
  };

  for (let i = 1; i <= N; i++) dfs(N, i, graph);

  const answer = [];

  for (let i = 1; i <= N; i++) answer.push(all[i][X] + all[X][i]);

  return Math.max.apply(null, answer);
};

console.log(solution(input));
