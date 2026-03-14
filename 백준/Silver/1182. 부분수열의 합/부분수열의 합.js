const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [N, S] = input[0].split(' ').map(Number);
  const num = input[1].split(' ').map(Number);

  let ans = 0;

  const dfs = (depth, sum) => {
    if (depth === N) {
      if (sum === S) ans++;
      return;
    }

    dfs(depth + 1, sum + num[depth]);
    dfs(depth + 1, sum);
  };

  dfs(0, 0);

  if (S === 0) ans -= 1;

  console.log(ans);
};

solution(_input);
