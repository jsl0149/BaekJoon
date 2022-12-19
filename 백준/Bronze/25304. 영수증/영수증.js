const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);

const data = input.slice(2);

let total = 0;

data.forEach((val) => {
  const [cost, num] = val.split(' ').map(Number);
  total += cost * num;
});

console.log(total === N ? 'Yes' : 'No');