const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const map = _input
    .slice(1)
    .map((row) => row.split('').filter((val) => val !== '\r'));

  let flag = false;

  let sheep = [];

  const check = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 'S') {
          sheep.push([i, j]);
          for (let k = 0; k < 4; k++) {
            const nr = i + dc[k];
            const nc = j + dr[k];

            if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

            if (map[nr][nc] === 'W') flag = true;
          }
        }

        if (flag) break;
      }
      if (flag) break;
    }
  };

  check();

  if (flag) return 0;
  else {
    let answer = '1\n';
    sheep.forEach((val) => {
      const [r, c] = val;

      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

        if (map[nr][nc] === '.') map[nr][nc] = 'D';
      }
    });

    map.forEach((row) => {
      answer += `${row.join('')}\n`;
    });

    return answer;
  }
};

console.log(solution(input));
