const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const data = input.slice(1);
const number = parseInt(input[0]);
const arr = new Array(25).fill(0).map(()=> new Array(25));
const visited = new Array(25).fill(0).map(()=> new Array(25).fill(false));
const dr = [-1, 0, 1, 0];
const dc = [0,1,0,-1];
let cnt = 1;
let res = 0;
const dfs = (r,c,N) => {
    for(let i = 0; i<4;i++){
        let nr = r + dr[i];
        let nc = c + dc[i];
        if(nr >= N || nr < 0 || nc >= N || nc < 0){
            continue;
        }

        if(!visited[nr][nc] && arr[nr][nc] === 1){
            visited[nr][nc] = true;
            cnt++;
            dfs(nr,nc, N);
        }
    }
}


for(let i = 0; i<data.length;i++){
    const temp = data[i].split('').map((val)=>parseInt(val));
    for(let j =0; j<number;j++){
        arr[i][j] = temp[j];
    }
}

const answer = [];

for(let i = 0; i<number;i++){
    for(let j =0; j<number;j++){
        if(!visited[i][j] && arr[i][j] === 1){
            visited[i][j] = true;
            cnt = 1;
            dfs(i,j,number);
            res++;
            answer.push(cnt);
        }
        
    }
}

let str = `${res}\n`;

answer.sort((a,b)=>a-b);

answer.forEach((val)=>{
    str+=`${val}\n`;
})

console.log(str);