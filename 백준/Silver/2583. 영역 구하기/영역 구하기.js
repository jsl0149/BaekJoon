const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

// 1. N x M 배열을 생성한다.
// 2. k개의 입력에 대해서 배열을 순회하며 1을 채운다.
// 3. 왼쪽 아래 꼭짓점과 오른쪽 위 꼭짓점이 차례로 들어온다.
// 4. BFS or DFS 탐색으로 영역의 갯수와 너비를 구한다.

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = (input) => {
  const [R, C, k] = input[0].split(' ').map(Number);
  const coordinate = input.slice(1);
  const board = Array.from({ length: R }, () => Array(C).fill(0));
  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  const arr = [];
  let count = 0;
  let ans = '';

  coordinate.forEach((row) => {
    const [startC, startR, endC, endR] = row.trim().split(' ').map(Number);

    for (let r = startR; r < endR; r++) {
      for (let c = startC; c < endC; c++) {
        board[r][c] = 1;
      }
    }
  });

  const bfs = (r, c) => {
    const queue = [[r, c]];
    visited[r][c] = true;
    let area = 0;
    let head = 0;

    while (head < queue.length) {
      const [curR, curC] = queue[head++];

      area++;

      for (let i = 0; i < 4; i++) {
        const nr = curR + dr[i];
        const nc = curC + dc[i];

        if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
        if (visited[nr][nc]) continue;
        if (board[nr][nc] === 1) continue;

        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }

    return area;
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (!visited[r][c] && board[r][c] === 0) {
        const result = bfs(r, c);
        arr.push(result);
        count++;
      }
    }
  }

  ans += `${count}\n`;
  ans += `${arr.sort((a, b) => a - b).join(' ')}`;

  console.log(ans);
};

solution(_input);
