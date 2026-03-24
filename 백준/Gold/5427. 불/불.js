const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

// 불이 난 빌딩에서 탈출하는 문제
// 1. 불이 있는 곳으로 상근이는 갈 수 없음
// 2. 불의 진행 정도를 먼저 N * M 배열에 표기
// 3. 그 이후 상근이 BFS를 진행해서 불보다 숫자가 낮으면 이동 가능
// 4. 빌딩 벽에 둘러쌓여 있거나 불에 둘러쌓여 있으면 이동 불가능

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = (input) => {
  const arr = input.slice(1);
  let idx = 0;

  while (idx < arr.length) {
    const [C, R] = arr[idx++].trim().split(' ').map(Number);
    const board = arr.slice(idx, idx + R).map((row) => row.trim().split(''));
    const fire = arr.slice(idx, idx + R).map((row) => row.trim().split(''));

    const fireCoordinate = [];
    let sk;

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (board[r][c] === '*') {
          fireCoordinate.push([r, c, 0]);
        }

        if (board[r][c] === '@') {
          sk = [r, c];
        }
      }
    }

    const bfsFire = (fireCoordinate) => {
      const queue = fireCoordinate;
      const visited = Array.from({ length: R }, () => Array(C).fill(false));
      let head = 0;

      fireCoordinate.forEach(([r, c]) => {
        visited[r][c] = true;
        fire[r][c] = 0;
      });

      while (head < queue.length) {
        const [curR, curC, dist] = queue[head++];

        for (let i = 0; i < 4; i++) {
          const nr = curR + dr[i];
          const nc = curC + dc[i];

          if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
          if (visited[nr][nc]) continue;
          if (fire[nr][nc] === '#') continue;

          visited[nr][nc] = true;
          fire[nr][nc] = dist + 1;
          queue.push([nr, nc, dist + 1]);
        }
      }
    };

    bfsFire(fireCoordinate);

    const exit = (r, c) => {
      const queue = [[r, c, 0]];
      const visited = Array.from({ length: R }, () => Array(C).fill(false));
      let head = 0;
      visited[r][c] = true;

      while (head < queue.length) {
        const [curR, curC, dist] = queue[head++];

        for (let i = 0; i < 4; i++) {
          const nr = curR + dr[i];
          const nc = curC + dc[i];

          if (nr < 0 || nr >= R || nc < 0 || nc >= C)
            return console.log(dist + 1);

          if (visited[nr][nc]) continue;
          if (board[nr][nc] !== '.') continue;
          if (fire[nr][nc] <= dist + 1) continue;

          visited[nr][nc] = true;
          queue.push([nr, nc, dist + 1]);
        }
      }

      return console.log('IMPOSSIBLE');
    };

    exit(sk[0], sk[1]);

    idx += R;
  }
};

solution(_input);
