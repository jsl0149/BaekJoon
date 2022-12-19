const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input[1].split('');

let B = 0;
let R = 0;

data.forEach((val) => {
  if (val === 'B') B++;
  else R++;
});

let answer1 = 1;
let answer2 = 1;
for (let i = 0; i < data.length; i++) {
  if (data[i] === 'R') {
    answer1++;
    let temp = i + 1;
    while (temp < data.length && data[temp] === 'R') {
      temp++;
    }
    i = temp - 1;
  }
}

for (let i = 0; i < data.length; i++) {
  if (data[i] === 'B') {
    answer2++;
    let temp = i + 1;
    while (temp < data.length && data[temp] === 'B') {
      temp++;
    }
    i = temp - 1;
  }
}

console.log(Math.min(answer1, answer2));
