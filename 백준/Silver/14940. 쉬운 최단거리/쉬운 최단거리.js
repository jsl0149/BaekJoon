const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const map = _input.slice(1).map((val) => val.split(' ').map(Number));

  const visited = new Array(N).fill(0).map(() => new Array(M).fill(false));

  const target = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 2) {
        target.push(i);
        target.push(j);
      }
    }
  }

  const answer = new Array(N).fill(0).map(() => new Array(M).fill(-1));

  const bfs = () => {
    const queue = [];
    queue.push([target[0], target[1], 0]);
    answer[target[0]][target[1]] = 0;
    visited[target[0]][target[1]] = true;

    while (queue.length) {
      const [r, c, count] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

        if (!visited[nr][nc] && map[nr][nc] === 1) {
          visited[nr][nc] = true;
          queue.push([nr, nc, count + 1]);
          answer[nr][nc] = count + 1;
        }
      }
    }
  };

  bfs();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) answer[i][j] = 0;
    }
  }

  let ans = ``;

  answer.forEach((val) => {
    ans += `${val.join(' ')}\n`;
  });

  return ans;
};

console.log(solution(input));
