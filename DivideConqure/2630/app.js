const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (data) => {
  const len = parseInt(data[0]);
  const arr = data.slice(1).map((val) => val.split(' ').map(Number));

  let one = 0;
  let zero = 0;

  arr.forEach((val) => {
    val.forEach((value) => {
      if (value) one++;
      else zero++;
    });
  });

  const divide = (s1, s2, e1, e2, check) => {
    if (check <= 1) return;

    let tempOne = 0;
    let tempZero = 0;

    for (let r = s1; r < s2; r++) {
      for (let c = e1; c < e2; c++) {
        arr[r][c] ? tempOne++ : tempZero++;
      }
    }

    if (tempOne === check) {
      one = one - check + 1;
      return;
    }

    if (tempZero === check) {
      zero = zero - check + 1;
      return;
    }

    divide(s1, (s1 + s2) / 2, e1, (e1 + e2) / 2, check / 4);
    divide(s1, (s1 + s2) / 2, (e1 + e2) / 2, e2, check / 4);
    divide((s1 + s2) / 2, s2, e1, (e1 + e2) / 2, check / 4);
    divide((s1 + s2) / 2, s2, (e1 + e2) / 2, e2, check / 4);
  };

  divide(0, len, 0, len, len * len);

  let answer = '';
  answer += `${zero}\n`;
  answer += `${one}`;

  return answer;
};

console.log(solution(input));
