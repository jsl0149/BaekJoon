const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const str = input[0].split('-');

  const exp = [];

  str.forEach((row) => {
    const temp = row.split('+').map(Number);
    exp.push(temp.reduce((prev, cur) => prev + cur, 0));
  });

  const ans = exp.reduce((prev, cur) => prev - cur, exp[0] * 2);

  console.log(ans);
};

solution(_input);
