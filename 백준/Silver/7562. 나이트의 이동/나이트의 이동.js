const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [-2, -1, 1, 2, 2, 1, -1, -2];
const dc = [1, 2, 2, 1, -1, -2, -2, -1];

const solution = (input) => {
  for (let i = 1; i < input.length; i += 3) {
    const N = Number(input[i]);
    const [startR, startC] = input[i + 1].split(' ').map(Number);
    const [targetR, targetC] = input[i + 2].split(' ').map(Number);

    const queue = [[startR, startC, 0]];
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let head = 0;

    while (head < queue.length) {
      const [curR, curC, depth] = queue[head++];

      if (curR === targetR && curC === targetC) {
        console.log(depth);
        break;
      }

      for (let i = 0; i < 8; i++) {
        const nr = curR + dr[i];
        const nc = curC + dc[i];

        if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

        if (visited[nr][nc]) continue;

        visited[nr][nc] = true;
        queue.push([nr, nc, depth + 1]);
      }
    }
  }
};

solution(_input);
