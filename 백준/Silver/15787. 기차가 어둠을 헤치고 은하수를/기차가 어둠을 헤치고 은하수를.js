const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const solution = (_input) => {
  const [N, M] = _input[0].split(' ').map(Number);
  const command = _input.slice(1).map((row) => row.split(' ').map(Number));
  const train = new Array(N).fill(0).map(() => new Array(20).fill(0));

  command.forEach((com) => {
    const [num, trainNum, seatNum] = com;
    if (num == 1) train[trainNum - 1][seatNum - 1] = 1;
    else if (num == 2) train[trainNum - 1][seatNum - 1] = 0;
    else if (num == 3) {
      for (let i = 19; i >= 1; i--) {
        train[trainNum - 1][i] = train[trainNum - 1][i - 1];
      }
      train[trainNum - 1][0] = 0;
    } else {
      for (let i = 0; i <= 18; i++) {
        train[trainNum - 1][i] = train[trainNum - 1][i + 1];
      }
      train[trainNum - 1][19] = 0;
    }
  });

  const check = new Map();

  let answer = 0;

  train.forEach((tr) => {
    const state = tr.join('');
    if (!check.get(state)) {
      check.set(state, true);
      answer++;
    }
  });
  return answer;
};

console.log(solution(input));
