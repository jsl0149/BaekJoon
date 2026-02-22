const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const isValid = (color) => {
  if (color === 'R') return true;
  if (color === 'Y') return true;
  if (color === 'G') return true;
  if (color === 'P') return true;
  if (color === 'B') return true;
  return false;
};

const solution = (input) => {
  const board = input.map((row) => row.trim().split(''));
  let ans = 0;

  while (true) {
    const visited = Array.from({ length: 12 }, () => Array(6).fill(false));
    let exploded = false;

    let group = [];

    const dfs = (color, r, c) => {
      visited[r][c] = true;
      group.push([r, c]);

      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr < 0 || nr >= 12 || nc < 0 || nc >= 6) continue;
        if (visited[nr][nc]) continue;
        if (board[nr][nc] !== color) continue;

        dfs(color, nr, nc);
      }
    };

    // 뿌요 터트리기
    for (let r = 0; r < 12; r++) {
      for (let c = 0; c < 6; c++) {
        const color = board[r][c];

        if (!visited[r][c] && isValid(color)) {
          dfs(color, r, c);

          if (group.length >= 4) {
            exploded = true;
            group.forEach((item) => {
              const [r, c] = item;
              board[r][c] = '.';
            });
          }
          group = [];
        }
      }
    }

    if (!exploded) break;

    for (let c = 0; c < 6; c++) {
      let pointer = 11;

      for (let r = 11; r >= 0; r--) {
        if (board[r][c] !== '.') {
          board[pointer--][c] = board[r][c];
        }
      }

      for (let r = pointer; r >= 0; r--) {
        board[r][c] = '.';
      }
    }

    ans++;
  }

  console.log(ans);
};

solution(_input);
