const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `./input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (_input) => {
  const [A, B] = _input[0].split(' ');

  const numberA = A.split('').map(Number);

  const permu = [];

  const permutation = (arr, per) => {
    if (per.length === numberA.length) {
      permu.push(per);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const t = per.slice(0);
        t.push(arr[i]);
        permutation(temp, t);
      }
    }
  };

  permutation(numberA, []);

  let answer = -1;

  permu.forEach((numArray) => {
    const curNum = parseInt(numArray.join(''));
    if (numArray[0] != 0 && curNum < B) {
      answer = Math.max(answer, curNum);
    }
  });

  return answer;
};

console.log(solution(input));
