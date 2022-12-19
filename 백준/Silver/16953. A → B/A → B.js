const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input[0].split(' ');

const solution = (data) => {
  const [a, b] = data;

  let A = parseInt(a);
  let B = parseInt(b);

  let strA = a;
  let strB = b;

  let count = 1;

  while (parseInt(strA) < parseInt(strB)) {
    if (strB[strB.length - 1] === '1') {
      strB = strB.slice(0, strB.length - 1);
    } else if (parseInt(strB) % 2 == 0) {
      strB = (parseInt(strB) / 2).toString();
    } else break;
    count++;
  }

  if (strA == strB) console.log(count);
  else console.log(-1);
};

solution(data);
