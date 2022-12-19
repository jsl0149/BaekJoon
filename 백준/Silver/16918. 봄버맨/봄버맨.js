const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];

const solution = (_input) => {
  const [N, M, K] = _input[0].split(' ').map(Number);

  const map = _input
    .slice(1)
    .map((row) => row.split('').filter((val) => val !== '\r'));

  if (K === 1) {
    let answer = '';
    map.forEach((val) => {
      answer += `${val.join('')}\n`;
    });
    return answer;
  } else if (K % 2 === 0) {
    let answer = '';
    for (let i = 0; i < N; i++) {
      map[i].fill('O');
    }
    map.forEach((val) => {
      answer += `${val.join('')}\n`;
    });
    return answer;
  } else {
    const queue = [];
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < M; c++) {
        if (map[r][c] === 'O') {
          queue.push([r, c]);
        }
      }
    }

    for (let i = 0; i < N; i++) {
      map[i].fill('O');
    }

    for (let i = 3; i <= K; i++) {
      if (i % 2 === 1) {
        while (queue.length) {
          const [r, c] = queue.shift();

          map[r][c] = '.';

          for (let j = 0; j < 4; j++) {
            const nr = r + dr[j];
            const nc = c + dc[j];

            if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

            map[nr][nc] = '.';
          }
        }

        for (let r = 0; r < N; r++) {
          for (let c = 0; c < M; c++) {
            if (map[r][c] === 'O') {
              queue.push([r, c]);
            }
          }
        }
      } else {
        for (let k = 0; k < N; k++) {
          map[k].fill('O');
        }
      }
    }
    let answer = '';
    map.forEach((val) => {
      answer += `${val.join('')}\n`;
    });
    return answer;
  }
};
console.log(solution(input));
