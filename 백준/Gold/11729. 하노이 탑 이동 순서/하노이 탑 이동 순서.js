const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  let ans = 0;
  let move = ``;

  const hanoi = (n, from, mid, to) => {
    if (n === 1) {
      move += `${from} ${to}\n`;
      ans++;
      return;
    }

    hanoi(n - 1, from, to, mid);

    move += `${from} ${to}\n`;
    ans++;

    hanoi(n - 1, mid, from, to);
  };

  hanoi(N, 1, 2, 3);

  console.log(ans);
  console.log(move.trim());
};

solution(_input);
