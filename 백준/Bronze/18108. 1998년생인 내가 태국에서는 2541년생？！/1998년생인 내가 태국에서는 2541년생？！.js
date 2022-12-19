const fs = require('fs');
const filePath = '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = parseInt(input[0]);

console.log(num - 543);