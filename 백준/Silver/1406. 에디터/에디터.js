const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const str = input[0].trim().split('');

  const command = input.slice(2);

  let right = [];

  command.forEach((com) => {
    const [first, second] = com.split(' ').map((val) => val.trim());

    if (first === 'P') {
      str.push(second);
    }

    if (first === 'L') {
      if (str.length > 0) {
        right.push(str.pop());
      }
    }

    if (first === 'D') {
      if (right.length > 0) {
        str.push(right.pop());
      }
    }

    if (first === 'B') {
      if (str.length > 0) {
        str.pop();
      }
    }
  });

  while (right.length) {
    str.push(right.pop());
  }

  console.log(str.join(''));
};

solution(input);
