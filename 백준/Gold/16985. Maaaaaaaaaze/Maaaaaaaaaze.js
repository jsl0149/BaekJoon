const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];
const dz = [-1, 1];

// 90도 회전
function rotation(b) {
  const newBoard = Array.from({ length: 5 }, () => Array(5));

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      newBoard[j][4 - i] = b[i][j];
    }
  }

  return newBoard;
}

const solution = (input) => {
  const board = [];
  const rotate = Array.from({ length: 5 }, () => Array(4));
  const cube = Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => Array(5)),
  );

  const used = Array(5).fill(false);

  for (let i = 0; i < 25; i += 5) {
    const one = input[i].split(' ').map(Number);
    const two = input[i + 1].split(' ').map(Number);
    const three = input[i + 2].split(' ').map(Number);
    const four = input[i + 3].split(' ').map(Number);
    const five = input[i + 4].split(' ').map(Number);
    board.push([one, two, three, four, five]);
  }

  // 회전 하는 경우 미리 저장
  for (let i = 0; i < 5; i++) {
    rotate[i][0] = board[i];
    for (let j = 1; j < 4; j++) {
      rotate[i][j] = rotation(rotate[i][j - 1]);
    }
  }

  //최단 거리 탐색

  let ans = Infinity;

  const bfs = () => {
    if (cube[0][0][0] === 0 || cube[4][4][4] === 0) return;

    const queue = [[0, 0, 0, 0]];
    const visited = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => Array(5).fill(false)),
    );
    visited[0][0][0] = true;
    let head = 0;

    while (head < queue.length) {
      const [r, c, z, dist] = queue[head++];

      if (r === 4 && c === 4 && z === 4) {
        ans = Math.min(ans, dist);
      }

      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr < 0 || nr >= 5 || nc < 0 || nc >= 5) continue;

        if (visited[nr][nc][z]) continue;
        if (cube[nr][nc][z] === 0) continue;

        visited[nr][nc][z] = true;
        queue.push([nr, nc, z, dist + 1]);
      }

      for (let i = 0; i < 2; i++) {
        const nz = z + dz[i];

        if (nz < 0 || nz >= 5) continue;

        if (visited[r][c][nz]) continue;
        if (cube[r][c][nz] === 0) continue;

        visited[r][c][nz] = true;
        queue.push([r, c, nz, dist + 1]);
      }
    }
  };

  const dfs = (depth) => {
    if (depth === 5) {
      bfs();
      return;
    }

    for (let i = 0; i < 5; i++) {
      if (!used[i]) {
        used[i] = true;
        for (let j = 0; j < 4; j++) {
          cube[depth] = rotate[i][j];
          dfs(depth + 1);
        }

        used[i] = false;
      }
    }
  };

  dfs(0);

  console.log(ans === Infinity ? -1 : ans);
};

solution(_input);
