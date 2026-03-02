const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

function check(board, row) {
  for (let i = 0; i < row; i++) {
    if (board[i] === board[row]) return false;
    if (Math.abs(i - row) === Math.abs(board[i] - board[row])) return false;
  }

  return true;
}

function dfs(board, row, N) {
  let result = 0;

  if (row === N - 1) return 1;

  for (let c = 0; c < N; c++) {
    board[row + 1] = c;

    if (check(board, row + 1)) {
      result += dfs(board, row + 1, N);
    }
  }

  return result;
}

const solution = (input) => {
  const N = Number(input[0]);
  const board = Array(N).fill(0);
  let ans = 0;

  for (let i = 0; i < N; i++) {
    board[0] = i;
    ans += dfs(board, 0, N);
  }

  console.log(ans);
};

solution(_input);
