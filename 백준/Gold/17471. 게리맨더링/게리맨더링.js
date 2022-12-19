const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);

  const weight = _input[1].split(' ').map(Number);

  const data = _input.slice(2).map((val) => val.split(' ').map(Number));

  const graph = new Array(N + 1).fill(0).map(() => []);

  const check = new Array(N + 1).fill(false);

  data.forEach((val, from) => {
    const [N, ...to] = val;
    for (let des of to) {
      graph[from + 1].push(des);
      graph[des].push(from + 1);
    }
  });

  for (let i = 0; i < graph.length; i++)
    graph[i] = graph[i].filter((val, idx) => graph[i].indexOf(val) === idx);

  let answer = Number.MAX_SAFE_INTEGER;

  const isConnected = (team) => {
    if (team.length === 0) return false;
    const queue = [];
    const visited = new Array(N + 1).fill(false);
    queue.push(team[0]);
    visited[team[0]] = true;
    let count = 1;
    while (queue.length) {
      const cur = queue.shift();

      for (let i = 1; i <= N; i++) {
        if (graph[cur].includes(i) && check[cur] === check[i] && !visited[i]) {
          visited[i] = true;
          queue.push(i);
          count++;
        }
      }
    }

    if (team.length === count) return true;

    return false;
  };

  const dfs = (depth) => {
    if (depth > N) {
      const team1 = [];
      const team2 = [];

      for (let i = 1; i <= N; i++) {
        if (check[i]) team1.push(i);
        else team2.push(i);
      }

      if (isConnected(team1) && isConnected(team2)) {
        let sum = 0;

        for (let i = 0; i < team1.length; i++) sum += weight[team1[i] - 1];

        for (let i = 0; i < team2.length; i++) sum -= weight[team2[i] - 1];

        answer = Math.min(answer, Math.abs(sum));
      }

      return;
    }

    check[depth] = true;

    dfs(depth + 1);

    check[depth] = false;

    dfs(depth + 1);
  };

  dfs(1);

  if (answer === Number.MAX_SAFE_INTEGER) return -1;

  return answer;
};

console.log(solution(input));
