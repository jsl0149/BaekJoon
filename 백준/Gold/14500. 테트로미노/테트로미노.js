const { captureRejectionSymbol } = require('events');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);
  const data = _input.slice(1);

  const dr = [
    [0, 0, 0],
    [1, 2, 3],
    [0, 1, 1],
    [0, -1, -2],
    [0, -1, -2],
    [-1, 0, 1],
    [-1, 0, 1],
    [0, 0, 1],
  ];
  const dc = [
    [1, 2, 3],
    [0, 0, 0],
    [1, 0, 1],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 1],
    [0, -1, -1],
    [-1, 1, 0],
  ];

  const rotate = (_dr, _dc) => {
    const [r1, r2, r3] = _dr;
    const [c1, c2, c3] = _dc;

    dr.push([-c1, -c2, -c3]);
    dc.push([r1, r2, r3]);

    dr.push([-r1, -r2, -r3]);
    dc.push([-c1, -c2, -c3]);

    dr.push([c1, c2, c3]);
    dc.push([-r1, -r2, -r3]);
  };

  for (let i = 3; i <= 7; i++) {
    rotate(dr[i], dc[i]);
  }

  const map = [];

  data.forEach((val) => {
    const row = val.split(' ').map(Number);
    map.push(row);
  });

  const search = (r, c) => {
    let max = 0;

    for (let i = 0; i < dr.length; i++) {
      let total = map[r][c];

      for (let j = 0; j < dr[i].length; j++) {
        const nr = r + dr[i][j];
        const nc = c + dc[i][j];

        if (nr < 0 || nr >= N || nc < 0 || nc >= M) break;

        total += map[nr][nc];
      }

      max = Math.max(max, total);
    }

    return max;
  };

  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      answer = Math.max(answer, search(i, j));
    }
  }

  return answer;
};

console.log(solution(input));
