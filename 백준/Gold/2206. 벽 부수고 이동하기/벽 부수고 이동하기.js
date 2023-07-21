const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dr = [0, 0, -1, 1];
const dc = [1, -1, 0, 0];

const solution = (data) => {
  const [N, M] = data[0].split(" ").map(Number);
  const map = data.slice(1).map((row) => row.split("").map(Number));

  const bfs = () => {
    const queue = [];
    const visited = new Array(N).fill(0).map(() => new Array(M).fill(false));
    const visited2 = new Array(N).fill(0).map(() => new Array(M).fill(false));
    queue.push([0, 0, 0, 1]);

    let idx = 0;

    while (idx < queue.length) {
      const [r, c, count, dist] = queue[idx++];

      if (r === N - 1 && c === M - 1) return dist;

      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

        if (!count && !visited[nr][nc] && map[nr][nc] === 0) {
          visited[nr][nc] = true;
          queue.push([nr, nc, count, dist + 1]);
        } else if (!visited[nr][nc] && map[nr][nc] && !count) {
          visited[nr][nc] = true;
          queue.push([nr, nc, count + 1, dist + 1]);
        } else if (count && !visited2[nr][nc] && map[nr][nc] === 0) {
          visited2[nr][nc] = true;
          queue.push([nr, nc, count, dist + 1]);
        }
      }
    }

    return -1;
  };

  return bfs();
};

console.log(solution(input));
