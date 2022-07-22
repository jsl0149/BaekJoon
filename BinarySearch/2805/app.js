const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, WOOD] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);
const max = Math.max.apply(null, data);
const min = 1;
let answer = 0;
const binarySearch = (min ,max)=>{
    if(min > max) return;
    const mid = Math.floor((min + max) / 2);
    let cnt = 0;
    data.forEach((tree)=>{
        if(tree - mid > 0){
            cnt += tree - mid;
        }
    })
    if(cnt >= WOOD){
        if(mid > answer) answer = mid;
        binarySearch(mid + 1, max);
    }

    else {
        binarySearch(min, mid-1);
    }
}

binarySearch(min ,max);

console.log(answer);