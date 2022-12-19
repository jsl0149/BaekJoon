const fs = require('fs');
const { toASCII } = require('punycode');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [M, N, H] = input[0].split(' ').map(Number);
const data = input.slice(1);
const tomato = new Array(H).fill(0).map(() => []);
const visited = new Array(H)
  .fill(0)
  .map(() => new Array(N).fill(0).map(() => new Array(M).fill(false)));

const dr = [0, 0, -1, 1];
const dc = [1, -1, 0, 0];
const dh = [1, -1];

for (let i = 0; i < data.length; i++) {
  const height = Math.floor(i / N);
  const row = data[i].split(' ').map(Number);
  tomato[height].push(row);
}

const tomatoCheck = () => {
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (tomato[i][j][k] === 0) {
          return false;
        }
      }
    }
  }
  return true;
};

const bfs = () => {
  const queue = [];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < M; k++) {
        if (tomato[i][j][k] === 1) {
          queue.push([i, j, k, 0]);
          visited[i][j][k] = true;
        }
      }
    }
  }

  if (tomatoCheck()) return 0;

  let idx = 0;

  while (queue.length !== idx) {
    const [h, r, c, count] = queue[idx];

    if (tomatoCheck()) return queue[queue.length - 1][3];

    for (let j = 0; j < 4; j++) {
      const nr = r + dr[j];
      const nc = c + dc[j];
      if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

      if (tomato[h][nr][nc] === 0 && !visited[h][nr][nc]) {
        visited[h][nr][nc] = true;
        tomato[h][nr][nc] = 1;
        queue.push([h, nr, nc, count + 1]);
      }
    }

    for (let i = 0; i < 2; i++) {
      const nh = h + dh[i];
      if (nh < 0 || nh >= H) continue;

      if (tomato[nh][r][c] === 0 && !visited[nh][r][c]) {
        visited[nh][r][c] = true;
        tomato[nh][r][c] = 1;
        queue.push([nh, r, c, count + 1]);
      }
    }
    idx++;
  }

  return -1;
};

console.log(bfs());