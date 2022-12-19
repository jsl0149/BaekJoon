const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);
let answer = 0;
for(let i = 0; i<N;i++){
    let sum = 0;
    for(let j = i; j<N;j++){
        sum += data[j];
        if(sum == S) answer++;
    }
}

console.log(answer);