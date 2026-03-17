const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const num = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const arr = [];
  let ans = '';
  let visited = Array(N).fill(false);
  let set = new Set();
  const dfs = (depth) => {
    if (depth === M) {
      set.add(arr.join(' '));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arr.push(num[i]);
        dfs(depth + 1);
        arr.pop();
        visited[i] = false;
      }
    }
  };

  dfs(0);

  for (const value of set) {
    ans += `${value}\n`;
  }

  console.log(ans.trim());
};

solution(_input);
