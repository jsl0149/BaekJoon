const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input.slice(1).map((val) => parseInt(val));

// data.sort((next, prev) => next - prev);

const count = Array(10001);

count.fill(0);

for (let i = 1; i <= 10001; i++) {
  count[data[i]]++;
}

const real = count.slice(1);

real.forEach((val, idx) => {
  if (val !== 0) {
    for (let i = 0; i < val; i++) {
      console.log(`${idx + 1}`);
    }
  }
});
