const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);
  const K = parseInt(_input[_input.length - 1]);

  const data = _input.slice(1, _input.length - 1);

  let answer = 0;

  for (let i = 0; i < data.length; i++) {
    let total = 0;
    let zero = 0;
    const row = data[i]
      .split('')
      .filter((val) => val !== '\r')
      .map(Number);

    row.forEach((val) => {
      if (val === 0) zero++;
    });

    if (K >= zero && zero % 2 === K % 2) {
      for (let j = 0; j < data.length; j++) {
        if (data[j] === data[i]) total++;
      }
    }

    answer = Math.max(total, answer);
  }

  return answer;
};

console.log(solution(input));
