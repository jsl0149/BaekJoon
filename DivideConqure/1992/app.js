
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const data = input.slice(1);
const arr = new Array(N).fill(0).map(()=> new Array(N));
let answer = "";
for(let i = 0; i<N;i++){
    const temp = data[i].split('').map(Number);
    for(let j =0; j<N;j++){
        arr[i][j] = temp[j];
    }

}

const solution = (size, x, y) => {

    let count = 0;
    let num = size * size;
    
    for(let i = 0; i<size; i++){
        for(let j =0; j<size;j++){
            if(arr[x][y] === arr[x+i][y+j]){
                count++;
            }
            else break;
        }
    }

    if(num === count) {
        answer += `${arr[x][y]}`
    }

    else{
        answer += `(`;
        let n = size / 2;
        for(let i = 0; i<2;i++){
            for(let j = 0; j<2; j++){
                solution(n, x+i*n, y+j*n)
            }
        }
        answer += `)`;
    }

}

solution(N,0,0);

console.log(answer);