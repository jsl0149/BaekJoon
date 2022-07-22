const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [E, S, M] = input[0].split(' ').map(Number);

let count = 1;
while (true) {
  if (
    (count - E) % 15 === 0 &&
    (count - S) % 28 === 0 &&
    (count - M) % 19 === 0
  ) {
    console.log(count);
    process.exit();
  }
  count++;
}
