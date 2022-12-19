const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const S = parseInt(input[0]);
const A = input[2].split(' ').map(Number);
const B = input[4].split(' ').map(Number);

const a = new Map();

for(let i = 0; i<A.length;i++){
    let sum = 0;
    for(let j = i; j<A.length;j++){
        sum += A[j];
        a.set(sum, (a.get(sum) ?? 0)+1);
    }
}

let answer = 0;

for(let i = 0; i<B.length;i++){
    let sum = 0;
    for(let j = i; j<B.length; j++){
        sum += B[j]
        answer+= a.get(S-sum) ?? 0;
    }
}

console.log(answer);
