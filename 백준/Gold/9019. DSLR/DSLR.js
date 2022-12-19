const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const visited = [];
for(let i =0; i<10000;i++) visited[i] = false;
const data = input.slice(1);

const L = (num) => {
   return Math.floor(((num % 1000) * 10) + (num / 1000));
}

const R = (num) => {
    return Math.floor(((num % 10) * 1000) + (num / 10));
}

const D = (num) => {
    if(num * 2 < 10000) return num * 2;
    else return (num * 2) % 10000; 
}

const S = (num) => {
    if(num===0) return 9999;
    else return num-1;
}

const bfs = (N, M) => {
    const queue = [];
    queue.push([N,[]]);
    let idx = 0;
    while(queue.length){
        const [num, ans] = queue[idx];
        if(num === M) return ans;
        const numbers = {D : D(num), S : S(num), L : L(num), R : R(num)};

        for(let moving in numbers){
            if(!visited[numbers[moving]]){
                visited[numbers[moving]] = true;
                const addMoving = `${ans}${moving}`;
                queue.push([numbers[moving],addMoving])
            }
        }
        idx++;
    }

}

let answer = '';


data.forEach((val)=>{
    const [N, M] = val.split(' ').map(Number);
    answer += `${bfs(N,M)}\n`;
    for(let i =0; i<10000;i++) visited[i] = false;
})


console.log(answer);