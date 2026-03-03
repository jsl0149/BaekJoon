const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const save = Array(M);
  let ans = '';

  const dfs = (k, count) => {
    if (count === M) {
      ans += `${save.join(' ')}\n`;
      return;
    }

    for (let i = k; i < N; i++) {
      save[count] = i + 1;
      dfs(i + 1, count + 1);
    }
  };

  dfs(0, 0);

  console.log(ans.trim());
};

solution(_input);
