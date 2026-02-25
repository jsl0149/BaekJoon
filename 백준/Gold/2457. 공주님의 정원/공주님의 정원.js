const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [N, ...arr] = input;
  const flower = arr
    .map((row) => row.split(' ').map(Number))
    .map((f) => {
      const [startMonth, startDay, endMonth, endDay] = f;

      return [startMonth * 100 + startDay, endMonth * 100 + endDay];
    });

  flower.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });

  let cur = 301;
  let idx = 0;
  let ans = 0;

  while (cur <= 1130) {
    let max = 0;
    let found = false;

    while (idx < flower.length && flower[idx][0] <= cur) {
      max = Math.max(max, flower[idx][1]);
      idx++;
      found = true;
    }

    if (!found) {
      console.log(0);
      return;
    }

    cur = max;
    ans++;
  }

  console.log(ans);
};

solution(_input);
