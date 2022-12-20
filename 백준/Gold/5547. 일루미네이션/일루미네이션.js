const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const evenDc = [1, 1, 0, -1, 0, 1];
const evenDr = [0, 1, 1, 0, -1, -1];

const oddDc = [-1, -1, 0, 1, 0, -1];
const oddDr = [0, -1, -1, 0, 1, 1];

const solution = () => {
  const [M, N] = input[0].split(' ').map(Number);
  const map = input.slice(1).map((row) => row.split(' ').map(Number));

  let visited = new Array(N).fill(0).map(() => new Array(M).fill(false));

  let answer = 0;

  const dfs = (r, c) => {
    for (let i = 0; i < 6; i++) {
      let nr, nc;
      if (r % 2 === 0) {
        nr = r + evenDr[i];
        nc = c + evenDc[i];
      } else {
        nr = r + oddDr[i];
        nc = c + oddDc[i];
      }

      if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

      if (!visited[nr][nc] && map[nr][nc] === 0) {
        visited[nr][nc] = true;
        map[nr][nc] = 2;
        dfs(nr, nc);
      }
    }
  };

  const boldCountDfs = (r, c) => {
    for (let i = 0; i < 6; i++) {
      let nr, nc;
      if (r % 2 === 0) {
        nr = r + evenDr[i];
        nc = c + evenDc[i];
      } else {
        nr = r + oddDr[i];
        nc = c + oddDc[i];
      }

      if (nr < 0 || nr >= N || nc < 0 || nc >= M) {
        answer++;
        continue;
      }

      if (map[nr][nc] === 2) answer++;
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (
        (i === 0 || i === N - 1 || j === 0 || j === M - 1) &&
        map[i][j] === 0
      ) {
        visited[i][j] = true;
        map[i][j] = 2;
        dfs(i, j);
      }
    }
  }

  visited = new Array(N).fill(0).map(() => new Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) {
        boldCountDfs(i, j);
      }
    }
  }

  return answer;
};

console.log(solution());
