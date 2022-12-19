const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const map = _input.map((row) => row.split(' ').map(Number));

  const dr = [0, 1, 1, -1];
  const dc = [1, 0, 1, 1];
  const dr2 = [0, -1, -1, 1];
  const dc2 = [-1, 0, -1, -1];

  const dfs = (depth, r, c, direction, color) => {
    const nr = r + dr[direction];
    const nc = c + dc[direction];

    if (nr < 0 || nr >= 19 || nc < 0 || nc >= 19) return depth;

    let value = depth;

    if (map[nr][nc] === color) depth = dfs(depth + 1, nr, nc, direction, color);

    return depth;
  };

  const black = [];
  const white = [];

  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      if (map[i][j] === 1) black.push([i, j]);
      else if (map[i][j] === 2) white.push([i, j]);
    }
  }

  let answer = 0;

  for (let i = 0; i < black.length; i++) {
    const [r, c] = black[i];
    for (let i = 0; i < 4; i++) {
      const leng = dfs(1, r, c, i, 1);

      const rPrev = r + dr2[i];
      const cPrev = c + dc2[i];

      if (rPrev < 0 || rPrev >= 19 || cPrev < 0 || cPrev >= 19) {
        if (leng === 5) {
          answer = `${1}\n${r + 1} ${c + 1}`;
          return answer;
        }
      }

      if (leng === 5 && map[rPrev][cPrev] !== 1) {
        answer = `${1}\n${r + 1} ${c + 1}`;
        return answer;
      }
    }
  }

  for (let i = 0; i < white.length; i++) {
    const [r, c] = white[i];
    for (let i = 0; i < 4; i++) {
      const leng = dfs(1, r, c, i, 2);

      const rPrev = r + dr2[i];
      const cPrev = c + dc2[i];

      if (rPrev < 0 || rPrev >= 19 || cPrev < 0 || cPrev >= 19) {
        if (leng === 5) {
          answer = `${2}\n${r + 1} ${c + 1}`;
          return answer;
        }
      }

      if (leng === 5 && map[rPrev][cPrev] !== 2) {
        answer = `${2}\n${r + 1} ${c + 1}`;
        return answer;
      }
    }
  }

  return answer;
};

console.log(solution(input));
