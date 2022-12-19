const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);
  const data = _input.slice(1);

  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (idx, sour, bitter) => {
    if (idx >= data.length) return;

    const [s, b] = data[idx].split(' ').map(Number);

    const food = Math.abs(sour * s - (bitter + b));

    if (food < answer) answer = food;

    dfs(idx + 1, sour, bitter);
    dfs(idx + 1, sour * s, bitter + b);
  };

  dfs(0, 1, 0);

  return answer;
};

console.log(solution(input));
