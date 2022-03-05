const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const target = parseInt(input[0].split(' ')[1]);

const data = input
  .slice(1)[0]
  .split(' ')
  .map((val) => parseInt(val));

data.sort((a, b) => a - b);

console.log(data[target - 1]);
