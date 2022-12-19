const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x,y,w,h] = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map(Number);

const answer = [x,y,w-x, h-y];
console.log(Math.min.apply(null, answer));