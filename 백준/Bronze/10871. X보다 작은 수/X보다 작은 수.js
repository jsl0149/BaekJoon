const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let answer = '';

arr.forEach((val)=>{
    if(val < X) answer += `${val} `;
})

console.log(answer);