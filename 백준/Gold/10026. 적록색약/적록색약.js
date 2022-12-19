const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [1, -1, 0, 0];

const solution = (_input) => {
  const N = parseInt(_input[0]);
  const map = _input.slice(1).map((row) => row.split(''));

  const map2 = new Array(N).fill(0).map(() => new Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] !== 'B') map2[i][j] = 'R';
      else map2[i][j] = 'B';
    }
  }

  let visited = new Array(N).fill(0).map(() => new Array(N).fill(false));

  const dfs = (r, c, _map) => {
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

      if (!visited[nr][nc] && _map[nr][nc] === _map[r][c]) {
        visited[nr][nc] = true;
        dfs(nr, nc, _map);
      }
    }
  };

  let answer = 0;
  let answer2 = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        dfs(i, j, map);
        answer++;
      }
    }
  }

  visited = new Array(N).fill(0).map(() => new Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        dfs(i, j, map2);
        answer2++;
      }
    }
  }

  return [answer, answer2].join(' ');
};

console.log(solution(input));
