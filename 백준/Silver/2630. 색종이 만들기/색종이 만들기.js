const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const data = input.slice(1);
const map = new Array(N).fill(0).map(()=>new Array(N).fill(0));

data.forEach((val,idx)=>{
    const row = val.split(' ').map(Number);
    for(let i =0;i<N;i++){
        map[idx][i] = row[i];
    }
})

let answer1 = 0;
let answer2 = 0;
const divide = (n, r, c) => {

    let total = 0;

    for(let i = 0; i<n;i++){
        for(let j =0; j<n;j++){
            total += map[r+i][c+j];
        }
    }

    if(total === n*n) answer1++;
    else if(total === 0) answer2++;
    else{
      n /= 2;
      divide(n, r, c);
      divide(n, r, c + n);
      divide(n, r+n, c);
      divide(n, r+n, c+n);
    }


}

divide(N, 0, 0);

console.log(answer2);
console.log(answer1);