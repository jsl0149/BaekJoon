const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class SawTooth {
  constructor(arr) {
    this.arr = arr;
  }

  clock() {
    const last = this.arr.pop();
    this.arr.unshift(last);
  }

  unclock() {
    const first = this.arr.shift();
    this.arr.push(first);
  }

  getLeft() {
    return this.arr[6];
  }

  getRight() {
    return this.arr[2];
  }

  getTop() {
    return this.arr[0];
  }
}

const solution = (input) => {
  const sawTooth = [null];

  for (let i = 0; i < 4; i++) {
    sawTooth.push(new SawTooth(input[i].trim().split('').map(Number)));
  }

  const K = Number(input[4]);

  for (let k = 0; k < K; k++) {
    const [num, dir] = input[5 + k].split(' ').map(Number);

    const rotate = [0, 0, 0, 0, 0];
    rotate[num] = dir;

    //왼쪽 전파

    for (let i = num; i > 1; i--) {
      if (sawTooth[i].getLeft() !== sawTooth[i - 1].getRight()) {
        rotate[i - 1] = -rotate[i];
      } else break;
    }

    //오른쪽 전파
    for (let i = num; i < 4; i++) {
      if (sawTooth[i].getRight() !== sawTooth[i + 1].getLeft()) {
        rotate[i + 1] = -rotate[i];
      } else break;
    }

    // 회전

    for (let i = 1; i <= 4; i++) {
      if (rotate[i] === 1) sawTooth[i].clock();
      if (rotate[i] === -1) sawTooth[i].unclock();
    }
  }

  let answer = 0;

  for (let i = 1; i <= 4; i++) {
    if (sawTooth[i].getTop() === 1) {
      answer += Math.pow(2, i - 1);
    }
  }

  console.log(answer);
};

solution(input);
