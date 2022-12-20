const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = () => {
  const [N, M] = input[0].split(' ').map(Number);

  const map = input
    .slice(1)
    .map((row) => row.split('').filter((val) => val !== '\r'));

  const bfs = (r, c) => {
    const queue = [];
    queue.push([r, c, 0]);
    const visited = new Array(N).fill(0).map(() => new Array(N).fill(false));
    visited[r][c] = true;
    let max = 0;
    while (queue.length) {
      const [R, C, count] = queue.shift();
      max = count;
      for (let i = 0; i < 4; i++) {
        const nr = R + dr[i];
        const nc = C + dc[i];

        if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

        if (!visited[nr][nc] && map[nr][nc] === 'L') {
          visited[nr][nc] = true;
          queue.push([nr, nc, count + 1]);
        }
      }
    }

    return max;
  };

  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 'L') {
        answer = Math.max(answer, bfs(i, j));
      }
    }
  }

  return answer;
};

console.log(solution());
