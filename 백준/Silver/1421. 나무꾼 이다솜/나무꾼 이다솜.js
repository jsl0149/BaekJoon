const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const solution = (_input) => {
  const [N, C, W] = _input[0].split(' ').map(Number);

  const wood = _input.slice(1).map(Number);

  let answer = 0;

  for (let i = 1; i <= 10000; i++) {
    let curSum = 0;
    wood.forEach((namu) => {
      let temp = 0;
      const mok = Math.floor(namu / i);
      temp += mok * W * i;
      if (namu % i == 0) temp -= (mok - 1) * C;
      else temp -= mok * C;
      if (temp >= 0) curSum += temp;
    });

    answer = Math.max(curSum, answer);
  }
  return answer;
};

console.log(solution(input));
