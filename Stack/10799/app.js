const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input[0].split('');

const stack = [];

let answer = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] === '(') {
    stack.push(data[i]);
  } else if (data[i] === ')') {
    if (data[i - 1] === '(') {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }
}

console.log(answer);
