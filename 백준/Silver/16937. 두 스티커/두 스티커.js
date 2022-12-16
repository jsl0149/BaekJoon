const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const stick = _input.slice(2).map((row) => row.split(' ').map(Number));

  const check = (r1, c1, r2, c2) => {
    const rotate = [
      [N, M],
      [M, N],
    ];

    let sumOfSize = r1 * c1 + r2 * c2;

    let maxSize = 0;

    for (let i = 0; i < 2; i++) {
      const [R, C] = rotate[i];
      if (
        (Math.max(r1, r2) <= R && c1 + c2 <= C) ||
        (r1 + r2 <= R && Math.max(c1, c2) <= C) ||
        (Math.max(c1, r2) <= R && r1 + c2 <= C) ||
        (c1 + r2 <= R && Math.max(r1, c2) <= C)
      )
        maxSize = Math.max(maxSize, sumOfSize);
    }
    return maxSize;
  };

  let answer = 0;

  for (let i = 0; i < stick.length; i++) {
    for (let j = i + 1; j < stick.length; j++) {
      answer = Math.max(
        answer,
        check(stick[i][0], stick[i][1], stick[j][0], stick[j][1])
      );
    }
  }

  return answer;
};

console.log(solution(input));
