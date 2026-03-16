const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const num = input[1].trim().split(' ').map(Number);
  num.sort((a, b) => a - b);

  let ans = '';
  let arr = [];
  let used = Array(M).fill(false);

  const dfs = (depth) => {
    if (depth === M) {
      ans += `${arr.join(' ')}\n`;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!used[i]) {
        used[i] = true;
        arr.push(num[i]);
        dfs(depth + 1);
        arr.pop();
        used[i] = false;
      }
    }
  };

  dfs(0);

  console.log(ans.trim());
};

solution(_input);
