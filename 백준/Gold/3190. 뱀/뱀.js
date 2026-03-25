const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

const solution = (input) => {
  let idx = 0;
  const N = Number(input[idx++]);
  const K = Number(input[idx++]);

  const board = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < K; i++) {
    const [r, c] = input[idx++].split(' ').map(Number);
    board[r - 1][c - 1] = 1;
  }

  const L = Number(input[idx++]);
  const command = [];

  for (let i = 0; i < L; i++) {
    const [X, C] = input[idx++].trim().split(' ');
    command.push([Number(X), C]);
  }

  const snake = [[0, 0]];
  board[0][0] = 2;
  let time = 0;
  let direction = 1;
  let cmdIdx = 0;

  while (true) {
    time++;

    const curR = snake[snake.length - 1][0];
    const curC = snake[snake.length - 1][1];

    const nr = curR + dr[direction];
    const nc = curC + dc[direction];

    if (nr < 0 || nr >= N || nc < 0 || nc >= N || board[nr][nc] === 2) break;

    // 일반 : 일단 머리를 한 칸 늘림
    // 사과 : 꼬리칸이 사라지지 않음
    // 사과가 아님 : 꼬리가 사라짐

    snake.push([nr, nc]);

    if (board[nr][nc] === 0) {
      const [tailR, tailC] = snake[0];
      board[tailR][tailC] = 0;
      snake.shift();
    }

    board[nr][nc] = 2;

    if (cmdIdx < L && time === command[cmdIdx][0]) {
      const nextDirection = command[cmdIdx][1];

      if (nextDirection === 'L') direction = (direction + 3) % 4;
      if (nextDirection === 'D') direction = (direction + 1) % 4;

      cmdIdx++;
    }
  }

  console.log(time);
};

solution(_input);
