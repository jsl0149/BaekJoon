const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [n, k] = input[0].split(' ').map(Number);

  const students = input.slice(1).map((info) => info.split(' ').map(Number));

  const arr = new Array(2).fill(null).map(() => new Array(6).fill(0));

  students.forEach((info) => {
    const [gender, grade] = info;
    arr[gender][grade - 1]++;
  });

  let ans = 0;

  arr.forEach((item) => {
    item.forEach((count) => {
      ans += Math.ceil(count / k);
    });
  });

  console.log(ans);
};

solution(input);
