const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);

  const prefer = _input.slice(1).map((row) => row.split(' ').map(Number));

  let answer = Number.MIN_SAFE_INTEGER;

  const num = [];

  for (let i = 0; i < M; i++) num.push(i);

  const combi = [];

  const combination = (arr, k) => {
    if (arr.length === 3) {
      combi.push(arr);
      return;
    }
    for (let i = k; i < num.length; i++) {
      const temp = arr.slice(0);
      temp.push(num[i]);
      combination(temp, i + 1);
    }
  };

  combination([], 0);

  combi.forEach((val) => {
    let total = 0;
    for (let i = 0; i < prefer.length; i++) {
      let max = 0;
      val.forEach((idx) => {
        max = Math.max(max, prefer[i][idx]);
      });
      total += max;
    }

    answer = Math.max(answer, total);
  });

  return answer;
};

console.log(solution(input));
