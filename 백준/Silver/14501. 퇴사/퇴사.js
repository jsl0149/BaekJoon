const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, ...data] = _input;

  const calendar = data.map((val) => {
    const [a, b] = val.split(' ').map(Number);
    return [a, b];
  });

  let answer = 0;

  const dfs = (idx, total) => {
    if (idx > parseInt(N)) {
      return;
    }

    if (idx <= parseInt(N)) {
      answer = Math.max(answer, total);
    }

    if (idx < parseInt(N)) {
      const sum = total + calendar[idx][1];
      const costDay = calendar[idx][0];
      dfs(idx + costDay, sum);
      dfs(idx + 1, total);
    }
  };

  dfs(0, 0);

  return answer;
};

console.log(solution(input));
