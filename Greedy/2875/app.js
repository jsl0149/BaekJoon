const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

let count = 0;

if (K === 0) {
  let tempCount = 0;
  let girl = N;
  let boy = M;
  while (girl > 1 && boy > 0) {
    girl -= 2;
    boy -= 1;
    tempCount++;
  }
  count = Math.max(count, tempCount);
} else {
  for (let i = 0; i <= K; i++) {
    let girl = N - i;
    let boy = M - (K - i);

    if (girl <= 1 || boy <= 0) {
      continue;
    }

    let tempCount = 0;

    while (girl > 1 && boy > 0) {
      girl -= 2;
      boy -= 1;
      tempCount++;
    }
    count = Math.max(count, tempCount);
  }
}

console.log(count);
