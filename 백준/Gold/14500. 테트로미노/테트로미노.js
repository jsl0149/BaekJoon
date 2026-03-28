const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = _input[0].split(' ').map(Number);

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const BLOCK_NUM = 4;
const T_SHAPES = [
  [
    [0, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ],
  [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, -1],
  ],
  [
    [0, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ],
  [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, 1],
  ],
];

function check(r, c, b) {
  let area = 0;

  T_SHAPES.forEach((shape) => {
    let count = 0;

    for (const [dr, dc] of shape) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr < 0 || nr >= R || nc < 0 || nc >= C) {
        count = 0;
        break;
      }

      count += b[nr][nc];
    }

    area = Math.max(area, count);
  });

  return area;
}

const solution = (input) => {
  const board = input.slice(1).map((row) => row.trim().split(' ').map(Number));
  const visited = Array.from({ length: R }, () => Array(C).fill(false));

  let ans = 0;

  const dfs = (r, c, depth, total) => {
    if (depth === BLOCK_NUM - 1) {
      ans = Math.max(ans, total);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      if (visited[nr][nc]) continue;

      visited[nr][nc] = true;
      dfs(nr, nc, depth + 1, total + board[nr][nc]);
      visited[nr][nc] = false;
    }
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      // T자형 체크
      ans = Math.max(check(r, c, board), ans);

      // 이외 타입 체크
      visited[r][c] = true;
      dfs(r, c, 0, board[r][c]);
      visited[r][c] = false;
    }
  }

  console.log(ans);
};

solution(_input);
