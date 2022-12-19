const fs = require('fs');
const { off } = require('process');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = [];
const oper = [];

const solution = (_input) => {
  const N = parseInt(_input[0]);
  const data = _input[1].split('');

  data.forEach((val, idx) => {
    if (idx % 2 === 0) num.push(parseInt(val));
    else oper.push(val);
  });

  let answer = Number.MIN_SAFE_INTEGER;

  const calculate = (num1, num2, oper) => {
    if (oper === '*') return num1 * num2;
    else if (oper === '-') return num1 - num2;
    else if (oper === '+') return num1 + num2;

    return;
  };

  const dfs = (idx, result) => {
    if (idx >= Math.floor(N / 2)) {
      answer = Math.max(answer, result);
      return;
    }

    const curResult = calculate(result, num[idx + 1], oper[idx]);
    dfs(idx + 1, curResult);

    if (idx + 1 < Math.floor(N / 2)) {
      const preResult = calculate(num[idx + 1], num[idx + 2], oper[idx + 1]);
      const curResult2 = calculate(result, preResult, oper[idx]);
      dfs(idx + 2, curResult2);
    }
  };

  if (N === 1) {
    return num[0];
  } else if (N === 3) {
    return calculate(num[0], num[1], oper[0]);
  }

  dfs(0, num[0]);

  return answer;
};

console.log(solution(input));
