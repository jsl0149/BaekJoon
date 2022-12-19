const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const compare = (a, b) => {
  const _a = a.split(' ');
  const _b = b.split(' ');

  const a1 = _a[0];
  const b1 = _b[0];

  const a2 = _a[2];
  const b2 = _b[2];

  if (a1 === b1) {
    return a2 - b2;
  }

  return a1 - b1;
};

let res = '';

const data = input.slice(1);

const realData = data.map((val, idx) => `${val} ${idx}`);

realData.sort(compare);

realData.forEach((val) => {
  const temp = val.split(' ');
  res += `${temp[0]} ${temp[1]}\n`;
});

console.log(res);



