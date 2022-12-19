const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const solution = (_input) => {
  const [A, B] = _input[0].split(' ').map(Number);
  const oneSeven = [];

  const dfs = (str) => {
    if (str.length === 10) return;
    let temp = str;
    temp += '4';
    oneSeven.push(parseInt(temp));
    dfs(temp);
    temp = str;
    temp += '7';
    oneSeven.push(parseInt(temp));
    dfs(temp);
  };
  dfs('');

  let answer = 0;

  oneSeven.forEach((val) => {
    if (A <= val && val <= B) answer++;
  });

  return answer;
};

console.log(solution(input));
