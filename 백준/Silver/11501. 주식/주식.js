const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);

  const stock = input.slice(1);

  for (let i = 0; i < stock.length; i += 2) {
    let ans = 0;
    const row = stock[i + 1].split(' ').map(Number);
    let curMax = row[row.length - 1];

    for (let j = row.length - 2; j >= 0; j--) {
      if (row[j] > curMax) {
        curMax = row[j];
        continue;
      }

      if (row[j] <= curMax) ans += curMax - row[j];
    }

    console.log(ans);
  }
};

solution(_input);
