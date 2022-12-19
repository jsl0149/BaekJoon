const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const S = parseInt(input[0]);
const [M, N] = input[1].split(' ').map(Number);
const aArr = input.slice(2,2+M).map(Number);
const bArr = input.slice(2+M).map(Number);
const A = new Map();
let answer = 0;
for(let i = 0; i<aArr.length;i++){
    let sum = 0;
    let str = '';
    for(let j = i; j<aArr.length;j++){
        sum+=aArr[j];
        if(sum === S) answer++;
        A.set(sum, (A.get(sum) ?? 0 )+1);
    }
    for(let k = 0; k<i-1;k++){
        sum+=aArr[k];
        if(sum === S) answer++;
        A.set(sum, (A.get(sum) ?? 0 )+1);
    }
}

for(let i = 0; i<bArr.length;i++){
    let sum = 0;
    for(let j = i; j<bArr.length;j++){
        sum+=bArr[j];
        if(sum === S) answer++;
        else answer+= A.get(S-sum) ?? 0;
    }

    for(let k = 0; k<i-1;k++){
        sum+=bArr[k];
        if(sum === S) answer++;
        else answer+= A.get(S-sum) ?? 0;
    }

}

console.log(answer);