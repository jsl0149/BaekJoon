const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, K] = input[0].split(' ').map(Number);
  const num = input[1].split('').map(Number);

  const stack = [];

  stack.push(num[0]);

  let erase = 0;

  const choose = N - K;

  for (let i = 1; i < num.length; i++) {
    const rest = choose - stack.length;
    if (stack[stack.length - 1] < num[i] && rest < N - i) {
      while (stack[stack.length - 1] < num[i] && stack.length) {
        if (choose - stack.length === N - i) break;
        stack.pop();
      }
      stack.push(num[i]);
    } else {
      stack.push(num[i]);
    }
  }

  return stack.slice(0, N - K).join('');
};

console.log(solution(input));
