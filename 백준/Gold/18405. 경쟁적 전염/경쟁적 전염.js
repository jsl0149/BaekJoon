const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [1, -1, 0, 0];

const compare = (a, b) => {
  return a[0] - b[0];
};

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);

  let [S, X, Y] = input[N + 1].split(' ').map(Number);

  const map = input.slice(1, 1 + N).map((row) => row.split(' ').map(Number));

  let seq = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] !== 0) seq.push([map[i][j], [i, j]]);
    }
  }

  seq.sort(compare);

  const infection = (r, c) => {
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

      if (map[nr][nc] == 0) {
        map[nr][nc] = map[r][c];
        seq.push([map[r][c], [nr, nc]]);
      }
    }
  };

  while (S--) {
    let curSeq = seq.length;
    while (curSeq--) {
      const cur = seq.shift();
      const [r, c] = cur[1];
      infection(r, c);
    }
    seq.sort(compare);
  }

  return map[X - 1][Y - 1];
};

console.log(solution(_input));
