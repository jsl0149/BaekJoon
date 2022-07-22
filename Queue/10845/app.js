const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input.slice(1);

const aaa = [1, 2, 3, 4, 5];

const queue = [];

let answer = '';

data.forEach((val) => {
  if (val.includes('push')) {
    const num = parseInt(val.split(' ')[1]);
    queue.push(num);
  } else if (val.includes('pop')) {
    if (queue.length === 0) {
      answer += '-1\n';
    } else {
      answer += `${queue[0]}\n`;
      queue.shift();
    }
  } else if (val.includes('size')) {
    answer += `${queue.length}\n`;
  } else if (val.includes('empty')) {
    const check = queue.length === 0 ? 1 : 0;
    answer += `${check}\n`;
  } else if (val.includes('front')) {
    const check = queue.length === 0 ? -1 : queue[0];
    answer += `${check}\n`;
  } else if (val.includes('back')) {
    const check = queue.length === 0 ? -1 : queue[queue.length - 1];
    answer += `${check}\n`;
  }
});

console.log(answer);
