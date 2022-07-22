const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input[0];

const answer = new Array(26);

answer.fill(0);

for (let i = 0; i < data.length; i++) {
  answer[data[i].charCodeAt([0]) - 97]++;
}

let ans = '';

answer.forEach((val) => {
  ans += `${val} `;
});

console.log(ans);
