const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = (input) => {
  const [R, C] = input[0].split(' ').map(Number);

  const board = [];

  input.slice(1).forEach((row) => {
    board.push(row.trim().split(''));
  });

  const fire = [];
  const jihoon = [];
  let head = 0;

  let visited = Array.from({ length: R }, () => Array(C).fill(false));

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] === 'F') {
        fire.push([r, c, 0]);
        visited[r][c] = true;
      }

      if (board[r][c] === 'J') {
        jihoon.push([r, c, 0]);
      }
    }
  }

  while (head < fire.length) {
    const [r, c, time] = fire[head++];

    board[r][c] = time;

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;

      if (visited[nr][nc] || board[nr][nc] === '#') continue;

      visited[nr][nc] = true;
      fire.push([nr, nc, time + 1]);
      board[nr][nc] = time + 1;
    }
  }

  head = 0;

  visited = Array.from({ length: R }, () => Array(C).fill(false));

  visited[jihoon[0][0]][jihoon[0][1]] = true;

  while (head < jihoon.length) {
    const [r, c, time] = jihoon[head++];

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= R || nc < 0 || nc >= C) {
        console.log(time + 1);
        return;
      }

      if (visited[nr][nc] || board[nr][nc] === '#' || time + 1 >= board[nr][nc])
        continue;

      visited[nr][nc] = true;
      jihoon.push([nr, nc, time + 1]);
    }
  }

  console.log('IMPOSSIBLE');
};

solution(_input);
