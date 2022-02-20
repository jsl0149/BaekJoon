const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const minValue = -Math.pow(2, 62);
const maxValue = Math.pow(2, 62);
const data = input.slice(1).map((val) => parseInt(val));

const redun = data.filter((val, idx) => idx === data.indexOf(val));

const compare = (a, b) => {
  if (a.v < b.v) {
    return 1;
  } else if (a.v === b.v) {
    if (a.k < b.k) {
      return -1;
    } else return 1;
  } else return -1;
};

const answer = new Map();

redun.forEach((val) => {
  answer.set(val, 0);
});

data.forEach((val) => {
  let cur = answer.get(val) + 1;
  answer.set(val, cur);
});

const realanswer = redun.map((val) => {
  return { k: val, v: answer.get(val) };
});

realanswer.sort(compare);

console.log(realanswer[0].k);
