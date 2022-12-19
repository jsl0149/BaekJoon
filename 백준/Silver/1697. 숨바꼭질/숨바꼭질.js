const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const visited = new Array(100010).fill(false);
let answer = Number.MAX_SAFE_INTEGER;

const bfs = () => {

    const queue = [];
    queue.push([N, 0]);
   
    while(queue.length){
        const [N, count] = queue.shift();
        if(N === M) return count;
        for(let val of [N-1, N+1, N*2]){
       
            if(!visited[val] && val >=0 && val <=100000){
                visited[val] = true;
                queue.push([val, count+1]);
            }
        }

    }
}


console.log(bfs());