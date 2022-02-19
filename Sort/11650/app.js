const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input.slice(1);

const compare = (aa, bb) => {
  const a = aa.split(' ');
  const b = bb.split(' ');

  const a1 = parseInt(a[0]);
  const b1 = parseInt(b[0]);
  const a2 = parseInt(a[1]);
  const b2 = parseInt(b[1]);

  if (a1 < b1) return -1;
  else if (a1 > b1) return 1;
  else if (a1 == b1) {
    if (a2 > b2) return 1;
    else return -1;
  }

  return -1;
};

let result = '';

arr.sort(compare).forEach((val) => {
  const data = val.split(' ');

  result += `${data[0]} ${data[1]}\n`;
});

console.log(result);
