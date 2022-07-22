const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, LAN] = input[0].split(' ').map(Number);
const data = input.slice(1).map(Number);

const max = Math.max.apply(null, data);

const min = 1;
let answer = 0;

const binarySearch = (min, max) => {

    if(min > max) return;

    const mid = Math.floor((min + max) / 2);

    let cnt = 0;

    data.forEach((val)=>{
        cnt += Math.floor(val / mid)
    })

    if(cnt >= LAN){
        if(mid > answer) answer = mid;
        binarySearch(mid + 1, max);
    }

    else binarySearch(min, mid - 1);

}

binarySearch(min, max);

console.log(answer);