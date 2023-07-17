const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (data) => {
  const str = data[0].split('');
  let answer = ``;

  const stack = [];

  str.forEach((val) => {
    if ('A' <= val && val <= 'Z') answer += val;
    else if (val === '(') stack.push(val);
    else if (val === ')') {
      while (stack.length && stack[stack.length - 1] !== '(')
        answer += `${stack.pop()}`;
      stack.pop();
    } else if (val === '+' || val === '-') {
      while (stack.length && stack[stack.length - 1] !== '(')
        answer += `${stack.pop()}`;
      stack.push(val);
    } else if (val === '*' || val === '/') {
      while (
        stack.length &&
        (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')
      )
        answer += `${stack.pop()}`;
      stack.push(val);
    }
  });

  while (stack.length) {
    answer += `${stack.pop()}`;
  }

  return answer;
};

console.log(solution(input));
