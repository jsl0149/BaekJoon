const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const map = _input.slice(1).map((row) => row.split(' ').map(Number));
  let mapCopy = map.slice(0);
  const combi = [];
  const num = [];
  const virus = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] == 0) num.push(i * M + j);
      else if (map[i][j] == 2) virus.push([i, j]);
    }
  }

  const coordinateTrans = (num) => {
    const row = Math.floor(num / M);
    const col = num - row * M;
    return [row, col];
  };

  const combination = (arr, k) => {
    if (arr.length === 3) {
      const temp = [];
      arr.forEach((coordinate) => {
        temp.push(coordinateTrans(coordinate));
      });
      combi.push(temp);
      return;
    } else {
      for (let i = k; i < num.length; i++) {
        const temp = arr.slice(0);
        temp.push(num[i]);
        combination(temp, i + 1);
      }
    }
  };

  const dfs = (row, col) => {
    for (let i = 0; i < 4; i++) {
      const nr = row + dr[i];
      const nc = col + dc[i];

      if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

      if (mapCopy[nr][nc] == 0) {
        mapCopy[nr][nc] = 2;
        dfs(nr, nc);
      }
    }
  };

  const check = () => {
    let cleanSection = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (mapCopy[i][j] == 0) cleanSection++;
      }
    }
    return cleanSection;
  };

  combination([], 0);

  let answer = 0;

  combi.forEach((threeBlocks) => {
    mapCopy = map.map((v) => [...v]);
    threeBlocks.forEach((block) => {
      const [r, c] = block;
      mapCopy[r][c] = 1;
    });
    virus.forEach((coordinate) => {
      const [r, c] = coordinate;
      dfs(r, c);
    });
    answer = Math.max(answer, check());
  });
  return answer;
};

console.log(solution(input));
