const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const PICK = 6;

const solution = (input) => {
  const arr = [];
  let ans = '';

  const dfs = (depth, k, len, num) => {
    if (depth === PICK) {
      ans += `${arr.join(' ')}\n`;
      return;
    }

    for (let i = k; i < len; i++) {
      arr.push(num[i]);
      dfs(depth + 1, i + 1, len, num);
      arr.pop();
    }
  };

  for (let i = 0; i < input.length - 1; i++) {
    const [len, ...num] = input[i].split(' ').map(Number);
    dfs(0, 0, len, num);
    ans += `\n`;
  }

  console.log(ans.trim());
};

solution(_input);
