const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [N, ...arr] = input;

  const schedule = arr.map((row) => row.trim().split(' ').map(Number));

  const compare = (a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  };

  schedule.sort(compare);

  let ans = 1;

  let pointer = schedule[0][1];

  for (let i = 1; i < schedule.length; i++) {
    const [a, b] = schedule[i];

    if (b === pointer && a !== b) continue;

    if (a >= pointer) {
      pointer = b;
      ans++;
    }
  }

  console.log(ans);
};

solution(_input);
