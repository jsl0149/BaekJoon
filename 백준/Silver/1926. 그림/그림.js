const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [1, -1, 0, 0];

const solution = (input) => {
  const [R, C] = input[0].split(' ').map(Number);

  const inputs = input.slice(1);

  const visited = Array.from({ length: R }, () => Array(C).fill(false));

  const board = [];

  let count = 0;

  let ans_count = 0;
  let ans_max = 0;

  inputs.forEach((r) => {
    const row = r.split(' ').map(Number);
    board.push(row);
  });

  const dfs = (r, c) => {
    for (let i = 0; i < 4; i++) {
      const nextR = r + dr[i];
      const nextC = c + dc[i];

      if (nextR < 0 || nextR >= R || nextC < 0 || nextC >= C) continue;

      if (visited[nextR][nextC]) continue;

      visited[nextR][nextC] = true;

      if (board[nextR][nextC] === 1) {
        count++;
        dfs(nextR, nextC);
      }
    }
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (visited[r][c] || board[r][c] === 0) continue;
      count = 1;
      visited[r][c] = true;
      dfs(r, c);
      ans_count++;
      ans_max = Math.max(count, ans_max);
    }
  }

  console.log(`${ans_count}\n${ans_max}`);
};

solution(input);
