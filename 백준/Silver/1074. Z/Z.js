const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N,r,c] = input[0].split(' ').map(Number);

const M = Math.pow(2,N);


let row = 0;
const map = new Array(M).fill(0);
const rows = new Array(M).fill(0);

rows[0] = 0
rows[1] = 2;

for(let i = 2; i<M;i++){
    if(Number.isInteger(Math.log2(i)) || i === 2) {
        let flag = i;
        let temp = i;
        for(let j = 0; j<flag;j++){
            rows[temp] = rows[j] + 2 * i*i;
            temp = temp+1;
        }
        i = temp-1;
    }
}

map[0] = rows[r];
map[1] = rows[r] + 1;
for(let i = 2; i<M;i++){
    if(Number.isInteger(Math.log2(i)) || i === 2) {
        let flag = i;
        let temp = i;
        for(let j = 0; j<flag;j++){
            map[temp] = map[j] + i*i;
            temp = temp+1;
        }
        i = temp-1;
    }
}

console.log(map[c]);