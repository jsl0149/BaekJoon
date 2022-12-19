const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input[0].split('-');

const temp = [];

for (i of data) {
  let cnt = 0;
  let s = i.split('+');

  for (j of s) {
    cnt += parseInt(j);
  }

  temp.push(cnt);
}

let answer = temp[0];

for (let i = 1; i < temp.length; i++) {
  answer -= temp[i];
}

console.log(answer);