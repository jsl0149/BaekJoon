const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const data = input[1].split(' ').map(Number);

let count = 0;

data.sort((a, b) => a - b);

data.forEach((val, idx) => {
  let temp = 0;
  for (let i = 0; i < idx + 1; i++) {
    temp += data[i];
  }
  count += temp;
});

console.log(count);
