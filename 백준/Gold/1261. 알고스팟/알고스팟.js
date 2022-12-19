const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
const visited = new Array(N).fill(0).map(()=>new Array(M).fill(false));
const map = [];
const dr = [0,0,-1,1];
const dc = [1,-1,0,0];

input.slice(1).forEach((val)=>{
    const row = val.split('').filter(val=>val!=='\r').map(Number);
    map.push(row); 
})

const bfs = () => {

    const dequeue = [];
    dequeue.push([0,0,0]);
    visited[0][0] = true;
    while(dequeue.length){

        const [row, col, count] = dequeue.shift();
        if(row === N-1 && col === M-1) return count;

        for(let i = 0; i<4; i++){
            const nr = row + dr[i];
            const nc = col + dc[i];

            if(nr < 0 || nr >= N || nc < 0 || nc >=M) continue;

            if(visited[nr][nc]) continue;
            visited[nr][nc] = true;
            if(map[nr][nc]){
                dequeue.push([nr, nc, count+1]);
                map[nr][nc] = 0;
            }

            else{
                dequeue.unshift([nr, nc, count]);
            }
           
        }
    }
}

console.log(bfs());