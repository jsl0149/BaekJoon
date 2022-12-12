const fs = require("fs");
const { mainModule } = require("process");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const print = (m) => {
  m.forEach((val) => {
    console.log(val.join(" "));
  });
};

const solution = (_input) => {
  const [N, M] = _input[0].split(" ").map(Number);
  let visited = new Array(N + 1)
    .fill(0)
    .map(() => new Array(M + 1).fill(false));
  const temp = _input.slice(1);

  const map = [];

  temp.forEach((row) => {
    const r = row.split(" ").map(Number);
    map.push(r);
  });

  let tempMap = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));

  const checkMelt = (r, c) => {
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || (nr >= N && nc < 0) || nc >= M) continue;

      if (map[nr][nc] == 0) tempMap[r][c]++;
    }
  };

  const melting = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        map[i][j] = map[i][j] < tempMap[i][j] ? 0 : map[i][j] - tempMap[i][j];
      }
    }
    tempMap = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(0));
  };

  const dfs = (r, c) => {
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
      if (!visited[nr][nc] && map[nr][nc] > 0) {
        visited[nr][nc] = true;
        dfs(nr, nc);
      }
    }
  };

  let answer = 0;
  let splited = 0;

  const allMelted = () => {
    let ice = 0;
    map.forEach((row) => {
      row.forEach((val) => {
        ice += val;
      });
    });
    if (ice === 0) return true;
    else return false;
  };

  while (splited < 2) {
    splited = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] > 0) checkMelt(i, j);
      }
    }
    melting();
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] > 0 && !visited[i][j]) {
          visited[i][j] = true;
          dfs(i, j);
          splited++;
        }
      }
    }

    if (allMelted()) return 0;

    visited = new Array(N + 1).fill(0).map(() => new Array(M + 1).fill(false));

    answer++;
  }
  return answer;
};

console.log(solution(input));
