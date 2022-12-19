const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
let answer = '';

for(let i = 0; i<N;i++){
    for(let j = N-1; j>i; j--){
        answer += ` `;
    }
    for(let k = 0; k<i+1; k++){
        answer += `*`;
    }
    answer += `\n`;
}

console.log(answer);