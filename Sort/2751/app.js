const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.slice(1);

let result = '';

arr.sort((a,b) => a-b).forEach((val)=>{result+=`${val}\n`});

console.log(result);