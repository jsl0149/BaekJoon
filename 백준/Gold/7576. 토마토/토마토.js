const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const map = new Array(1000).fill(0).map(()=>new Array(1000).fill(0));
const visited = new Array(1000).fill(0).map(()=>new Array(1000).fill(false));
const queue = [];
const dr = [0,0,1,-1];
const dc = [1,-1,0,0];
const firstline = input[0].split(' ').map((val)=>parseInt(val));
const data = input.slice(1);
const col = firstline[0];
const row = firstline[1];
let count = col * row;


for(let i = 0; i<row;i++) {
    const temp = data[i].split(' ').map((val)=>parseInt(val));
    for(let j = 0; j<col;j++){
        if(temp[j] === 1){
            queue.push([i,j,0]);
            visited[i][j] = 1;
            count--;
        }
        else if(temp[j] === -1){
            visited[i][j] = 1;
            count--;
        }
    }
}

let idx =  0;
while(queue.length!=idx){
    const [r,c,pos] = queue[idx];
    for(let i = 0; i<4;i++){

        const nr = r + dr[i];
        const nc = c + dc[i];

        if(nr < 0 || nr >= row || nc < 0 || nc >= col ) continue;

        if(!visited[nr][nc]){
            visited[nr][nc] = true;
            queue.push([nr,nc,pos+1])
            count--;
          
        }
    }
    idx++;
    answer = pos;
}


console.log(count ? -1 : answer);


