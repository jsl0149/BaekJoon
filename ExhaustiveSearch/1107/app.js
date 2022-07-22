const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const check = new Array(10).fill(false);
const unableNumber = input[2]?.split(' ').map(Number);

unableNumber?.forEach((val) => {
  check[val] = true;
});

let downCounter = 0;
let upCounter = 0;

let up = N;
let down = N;

const onlyMove = N > 100 ? N - 100 : 100 - N;

if (parseInt(input[1]) === 10) {
  console.log(onlyMove);
} else {
  if (!(unableNumber?.length === 9 && check[0] === false)) {
    while (true) {
      const temp = up
        .toString()
        .split('')
        .map(Number)
        .filter((val, idx, arr) => arr.indexOf(val) === idx);
      let flag = true;
      temp.forEach((val) => {
        if (check[val]) flag = false;
      });
      if (!flag) {
        up++;
        upCounter++;
      } else break;
    }
  } else {
    upCounter = Number.MAX_SAFE_INTEGER;
  }

  while (true) {
    const temp = down
      .toString()
      .split('')
      .map(Number)
      .filter((val, idx, arr) => arr.indexOf(val) === idx);
    let flag = true;
    temp.forEach((val) => {
      if (check[val]) flag = false;
    });

    if (!flag) {
      down--;
      downCounter++;
    } else break;
  }

  let answer = Math.min(
    downCounter + down.toString().length,
    upCounter + up.toString().length
  );
  answer = Math.min(answer, onlyMove);
  console.log(answer);
}
