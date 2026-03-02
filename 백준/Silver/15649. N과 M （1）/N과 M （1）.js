const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [N, M] = input[0].trim().split(' ').map(Number);

  const used = Array(N + 1).fill(false);
  const selected = Array(M).fill(0);
  let ans = '';

  const dfs = (depth) => {
    if (depth === M) {
      ans += `${selected.join(' ')}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!used[i]) {
        used[i] = true;
        selected[depth] = i;
        dfs(depth + 1);
        used[i] = false;
      }
    }
  };

  dfs(0);

  console.log(ans.trim());
};

solution(_input);
