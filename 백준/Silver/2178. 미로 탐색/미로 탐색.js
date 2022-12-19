const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const map = new Array(100).fill(0).map(()=>new Array(100).fill(0));
const visited = new Array(100).fill(0).map(()=>new Array(100).fill(false));
const dr = [0,0,1,-1];
const dc = [1,-1,0,0];
const [rDes,cDes] = input[0].split(' ').map(Number);
const data = input.slice(1);
let row = data.length;
let col = 0;
let answer = 0;
const queue = [];

const bfs = () => {
    let idx = 0;
    let flag = true;

    while(flag){
        
        const [r,c,pos] = queue[idx];
        if(r === rDes-1 && c === cDes-1) flag = false;
        for(let i =0; i<4;i++){
            const nr = r + dr[i];
            const nc = c + dc[i];

            if(nr < 0 || nr >= row || nc < 0 || nc >= col) continue;

            if(map[nr][nc] === 1 && !visited[nr][nc]){
                visited[nr][nc] = true;
                queue.push([nr,nc, pos+1]);
            }
        }
        idx++;
        answer = pos;
    }
    

}


for(let i = 0; i<data.length;i++){
    const temp = data[i].split('').filter((val)=>val !== '\r').map(Number);
    col = temp.length;
    for(let j = 0; j<temp.length; j++){
        map[i][j] = temp[j];
    }
}

visited[0][0] = true;
queue.push([0,0,0]);
bfs();


console.log(answer+1);
