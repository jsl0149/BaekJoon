const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);

const answer = [];
let count = 0;
const hanoi = (num, from, other, to) => {

    if(num === 0 ) return;

    else{
        hanoi(num-1, from , to , other);
        answer.push([from, to]);
        count++;
        hanoi(num-1, other, from, to);
    }
}
hanoi(N,1,2,3 );

const temp = answer.map((val)=>val.join(' ')).join('\n');
console.log(count);
console.log(temp);
