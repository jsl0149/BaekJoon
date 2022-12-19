const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const S = _input[0]
    .split('')
    .filter((val) => val !== '\r')
    .join('');
  const T = _input[1]
    .split('')
    .filter((val) => val !== '\r')
    .join('');

  let answer = 0;

  const visited = new Map();

  const dfs = (str) => {
    if (str.length === S.length) {
      str === S ? (answer = 1) : str;
      return;
    }

    if (str[str.length - 1] === 'A') {
      const temp = str.split('');
      temp.pop();
      dfs(temp.join(''));
    }

    if (str[0] === 'B') {
      const temp = str.split('').reverse();
      temp.pop();
      dfs(temp.join(''));
    }
  };

  dfs(T);
  return answer;
};

console.log(solution(input));
