const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


const num = input[0].split(' ');

const a = parseInt(num[0] + num[1]);
const b = parseInt(num[2] + num[3]);

console.log(a+b);
