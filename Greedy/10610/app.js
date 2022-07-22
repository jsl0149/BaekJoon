const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input[0];
const check = new Array(10).fill(0);
const data = N.split('').map(Number);

if (data.includes(0)) {
  const total = data.reduce((acc, pre) => acc + pre, 0);

  if (total % 3 === 0) {
    data.sort((a, b) => b - a);
    console.log(data.join(''));
  } else {
    console.log(-1);
  }
} else {
  console.log(-1);
}
