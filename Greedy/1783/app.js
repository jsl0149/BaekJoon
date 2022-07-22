const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let count = 0;

if (N === 1) {
  count = 1;
} else if (N === 2) {
  count = Math.min(4, (M + 1) / 2);
} else if (M < 7) {
  count = Math.min(4, M);
} else {
  count = M - 2;
}

console.log(count);
