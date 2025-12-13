const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [str] = input;

  const arr = new Array(10).fill(0);

  let sixNine = 0;

  Array.from(str).forEach((char) => {
    const idx = parseInt(char);

    if (idx !== 6 && idx !== 9) arr[idx]++;
    else sixNine++;
  });

  const avg = Math.ceil(sixNine / 2);

  const max = Math.max.apply(null, arr);

  console.log(Math.max(avg, max));
};

solution(input);
