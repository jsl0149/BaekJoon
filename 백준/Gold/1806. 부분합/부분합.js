const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);
let answer = Number.MAX_SAFE_INTEGER;
let s = 0; let e = 0;

let sum = 0;

while(true){
    if(sum >= S) {
        (e - s) < answer ? answer = (e-s) : answer;
        sum -= data[s++];
    }
    else if(e === N) break;
    else sum += data[e++];


}

console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);