const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const graph = new Array(N + 1).fill(0).map(() => []);

const data = input.slice(1);

let visited = new Array(N + 1).fill(false);

const answer = new Array(N + 1).fill(0);

data.forEach((val) => {
  const [from, to] = val.split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  const queue = [];
  queue.push([start, 0]);
  visited[start] = true;

  while (queue.length) {
    const [vertex, count] = queue.shift();
    answer[start] = answer[start] + count;
    for (let i = 0; i < graph[vertex].length; i++) {
      if (!visited[graph[vertex][i]]) {
        queue.push([graph[vertex][i], count + 1]);
        visited[graph[vertex][i]] = true;
      }
    }
  }
};

for (let i = 1; i <= N; i++) {
  bfs(i);
  visited = new Array(N + 1).fill(false);
}

const ans = answer.slice(1);

const min = Math.min.apply(null, ans);

console.log(answer.indexOf(min));