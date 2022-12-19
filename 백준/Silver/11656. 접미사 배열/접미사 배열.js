const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input[0];

const answer = [];

for(let i = 0; i < data.length; i++){
    answer.push(data.slice(i));
}

answer.sort();

answer.forEach((val)=>{
    console.log(val);
})