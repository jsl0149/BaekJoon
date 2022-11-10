const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input[0].split(' ').map(Number);

const result = data.reduce((acc, cur) => {
  return acc + cur * cur;
}, 0);

console.log(result % 10);
