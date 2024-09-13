const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const n = parseInt(input[0]);
  const arr = input[1].split(' ').map(Number);

  const dpIncrease = new Array(n).fill(0); // 정방향 dp 배열
  const dpDecrease = new Array(n).fill(0); // 역방향 dp 배열

  // 정방향 가장 긴 증가하는 수열 찾기
  for (let i = 0; i < n; i++) {
    let dp_max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (dpIncrease[j] > dp_max) {
          dp_max = dpIncrease[j];
          dpIncrease[i] = dp_max;
        }
      }
    }
    dpIncrease[i] += 1;
  }

  arr.reverse(); // 배열 뒤집기

  // 역방향 가장 긴 증가하는 수열 찾기
  for (let i = 0; i < n; i++) {
    let dp_max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (dpDecrease[j] > dp_max) {
          dp_max = dpDecrease[j];
          dpDecrease[i] = dp_max;
        }
      }
    }
    dpDecrease[i] += 1;
  }

  dpDecrease.reverse();

  const answer = [];

  // 정방향 증가 수열 + 역방향 증가 수열
  for (let i = 0; i < n; i++) {
    answer.push(dpDecrease[i] + dpIncrease[i]);
  }

  // 기준값이 겹치므로 -1 해주기
  return Math.max(...answer) - 1;
};

console.log(solution(input));
