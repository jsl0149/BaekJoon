const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input.slice(1).map(Number);
let count = 0;
const minus = [];
const plus = [];
let zero = false;

data.sort((a, b) => a - b);

data.forEach((val) => {
  if (val < 0) minus.push(val);
  else if (val === 1) count += 1;
  else if (val > 0) plus.push(val);
  else zero = true;
});

if (plus.length % 2 === 0) {
  for (let i = 0; i < plus.length; i += 2) {
    count += plus[i] * plus[i + 1];
  }
} else {
  count += plus[0];
  for (let i = 1; i < plus.length; i += 2) {
    count += plus[i] * plus[i + 1];
  }
}

if (minus.length % 2 === 0) {
  for (let i = 0; i < minus.length; i += 2) {
    count += minus[i] * minus[i + 1];
  }
} else {
  if (zero === true) {
    for (let i = 0; i < minus.length - 1; i += 2) {
      count += minus[i] * minus[i + 1];
    }
  } else {
    count += minus[minus.length - 1];
    for (let i = 0; i < minus.length - 1; i += 2) {
      count += minus[i] * minus[i + 1];
    }
  }
}

console.log(count);
