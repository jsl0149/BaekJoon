const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = parseInt(input[0]);

let maxFiveCent = Math.floor(num / 5);

let answer = -1;

while (maxFiveCent >= 0) {
  let leave = num - 5 * maxFiveCent;

  if (leave % 2 == 0) {
    answer = 0;
    answer += maxFiveCent;
    answer += leave / 2;
    break;
  } else {
    maxFiveCent--;
  }
}

console.log(answer);
