const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);
  const weight = _input[1].split(' ').map(Number);

  const sum = weight.reduce((acc, pre) => {
    return acc + pre;
  }, 0);

  const check = new Array(sum + 1).fill(0);

  const dfs = (curIdx, total) => {
    check[Math.abs(total)]++;

    if (curIdx >= weight.length) return;

    dfs(curIdx + 1, total + weight[curIdx]);
    dfs(curIdx + 1, total - weight[curIdx]);
    dfs(curIdx + 1, total);
  };

  dfs(0, 0);

  const answer = check.filter((val) => val === 0).length;

  return answer;
};

console.log(solution(input));
