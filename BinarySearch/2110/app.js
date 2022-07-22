const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, WIFI] = input[0].split(' ').map(Number);
const data = input.slice(1).map(Number);
let answer = 0;
data.sort((a,b)=> a-b);

const start = 1
const end = data[data.length-1] - data[0];

const binarySearch = (min, max) => {

    if(min > max) return;

    cnt = 1;
    let prev = data[0];
    const mid = Math.floor((min + max)/2);

    for(let i = 1; i<data.length;i++){
        if(data[i] - prev >= mid){
            cnt++;
            prev = data[i];
        }
    }

    if(cnt < WIFI){
        binarySearch(min, mid-1);
    }
    
    else{
        answer = mid;
        binarySearch(mid + 1, max);
    }

}

binarySearch(start, end);

console.log(answer);