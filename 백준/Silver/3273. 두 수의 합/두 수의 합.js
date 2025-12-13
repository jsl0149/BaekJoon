const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const n = parseInt(input[0]);
  const a = input[1].trim().split(' ').map(Number);
  const x = parseInt(input[2]);

  const check = new Array(2000001).fill(false);

  let ans = 0;

  a.forEach((val) => {
    if (x - val > 0 && check[x - val]) ans++;
    check[val] = true;
  });

  console.log(ans);
};

solution(input);
