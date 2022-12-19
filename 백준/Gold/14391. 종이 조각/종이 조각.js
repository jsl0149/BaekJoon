const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);
  const map = _input.slice(1).map((val) => val.split('').map(Number));

  const vistited = new Array(N).fill(0).map(() => new Array(M).fill(false));

  let answer = 0;

  const check = () => {
    let total = 0;

    for (let r = 0; r < N; r++) {
      let num = '0';
      for (let c = 0; c < M; c++) {
        if (vistited[r][c] === true) {
          num += `${map[r][c]}`;
        } else {
          total += parseInt(num);
          num = '0';
        }
      }
      total += parseInt(num);
    }

    for (let c = 0; c < M; c++) {
      let num = '0';
      for (let r = 0; r < N; r++) {
        if (vistited[r][c] === false) {
          num += `${map[r][c]}`;
        } else {
          total += parseInt(num);
          num = '0';
        }
      }

      total += parseInt(num);
    }

    return total;
  };

  const dfs = (r, c) => {
    if (r >= N) {
      answer = Math.max(check(), answer);
      return;
    }

    if (c >= M) {
      dfs(r + 1, 0);
      return;
    }

    vistited[r][c] = true;
    dfs(r, c + 1);
    vistited[r][c] = false;
    dfs(r, c + 1);
  };

  dfs(0, 0);

  return answer;
};

console.log(solution(input));
