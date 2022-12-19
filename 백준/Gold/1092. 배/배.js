const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const crane = _input[1].split(' ').map(Number);

  const box = _input[3].split(' ').map(Number);

  const craneMax = Math.max.apply(null, crane);
  const boxMax = Math.max.apply(null, box);

  if (craneMax < boxMax) return -1;

  crane.sort((a, b) => b - a);
  box.sort((a, b) => b - a);

  let answer = 0;

  while (box.length) {
    for (let i = 0; i < crane.length; i++) {
      for (let j = 0; j < box.length; j++) {
        if (crane[i] >= box[j]) {
          box.splice(j, 1);
          break;
        }
      }
    }
    answer++;
  }

  return answer;
};
console.log(solution(input));
