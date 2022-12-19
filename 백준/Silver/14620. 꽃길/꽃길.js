const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [_N, ...map] = _input.map((val) => val.split(' ').map(Number));
  const N = _N[0];

  const dr = [0, 0, -1, 1];
  const dc = [-1, 1, 0, 0];

  const pos = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      pos.push([i, j]);
    }
  }

  const num = [];

  const combi = [];

  for (let i = 0; i < N * N; i++) num.push(i);

  const combination = (arr, k) => {
    if (arr.length === 3) {
      combi.push(arr);
      return;
    } else {
      for (let i = k; i < num.length; i++) {
        const temp = arr.slice(0);
        temp.push(num[i]);
        combination(temp, i + 1);
      }
    }
  };

  let answer = Number.MAX_SAFE_INTEGER;

  combination([], 0);

  for (let i = 0; i < combi.length; i++) {
    const visited = new Array(N).fill(0).map(() => new Array(N).fill(false));
    let total = 0;
    const randomPos = combi[i];
    let temp = 0;
    for (let j = 0; j < randomPos.length; j++) {
      const [r, c] = pos[randomPos[j]];
      if (!visited[r][c]) {
        visited[r][c] = true;
        total += map[r][c];
        temp++;
        for (let k = 0; k < 4; k++) {
          const nr = r + dr[k];
          const nc = c + dc[k];

          if (nr < 0 || nr >= N || nc < 0 || nc >= N) {
            break;
          }

          if (!visited[nr][nc]) {
            visited[nr][nc] = true;
            total += map[nr][nc];
            temp++;
          } else {
            break;
          }
        }
      } else break;
    }

    if (temp === 15) answer = Math.min(total, answer);
  }

  return answer;
};

console.log(solution(input));
