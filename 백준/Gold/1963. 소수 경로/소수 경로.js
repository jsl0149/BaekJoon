const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputs = input.slice(1);
const [N, M] = input[0].split(' ').map(Number);
let visited = new Array(10010).fill(false);
const isPrime = new Array(10000).fill(true);
const prime = () => {

    for(let i = 2; i*i<10000;i++){
        if(!isPrime[i]) continue;

        for(let j = i * 2; j<10000; j+=i){
            isPrime[j] = false;
        }
    }
}

const bfs = (N, M) => {
    const queue = [];
    queue.push([N, 0]);
    visited[N] = true;
    let idx = 0;
    while(queue.length !== idx){
        const [data, count] = queue[idx];
        if(data === M) return count;
        const temp = data.toString().split('').map(Number);
        for(let i = 0; i<4; i++){
            for(let j = 0; j<=9;j++){
                let temp2 =  data.toString().split('').map(Number);
                temp2[i] = j;
                const tempNum = parseInt(temp2.join(''));
                if(!visited[tempNum] && isPrime[tempNum]
                     && tempNum >=1000 && tempNum <10000){
                    visited[tempNum] = true;
                    queue.push([tempNum, count+1]);
                }
            }
        }
        idx++;
    }
}


let answer = '';

prime();

inputs.forEach((val)=>{
    const [N, M] = val.split(' ').map(Number);
    answer += `${bfs(N,M)}\n`;
    visited = new Array(10010).fill(false);
})

console.log(answer);