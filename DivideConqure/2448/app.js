const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);

const solution = (n) => {
  if (n === 3 || n === 1) return ['  *   ', ' * *  ', '***** '];

  const star = solution(n / 2);

  const L = [];
  const answer = [];
  star.forEach((val) => {
    L.push(val);
    let temp = '';
    for (let i = 0; i < n / 2; i++) {
      temp += ' ';
    }

    temp += `${val}`;

    for (let i = 0; i < n / 2; i++) {
      temp += ' ';
    }

    answer.push(temp);
  });

  for (let i = 0; i < L.length; i++) {
    let temp = ``;
    for (let j = 0; j < 2; j++) {
      temp += `${L[i]}`;
    }
    answer.push(temp);
  }

  return answer;
};

console.log(solution(96).join('\n'));
