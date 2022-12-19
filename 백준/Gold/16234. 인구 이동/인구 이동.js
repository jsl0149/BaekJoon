const { FORMERR } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, L, R] = input[0].split(' ').map(Number);
const map = [];
let visited = new Array(N).fill(0).map(()=>new Array(N).fill(false));
const dr = [0,0,-1,1];
const dc = [-1,1,0,0];
const data = input.slice(1);
let test = [];
data.forEach((val)=>{
    const row = val.split(' ').map(Number);
    map.push(row);
});

const differ = (val1, val2) => {
    if(val1 > val2) return val1 - val2;
    else return val2 - val1;
}

const dfs = (row, col) => {
    for(let i = 0; i<4; i++){
        const nr = row + dr[i];
        const nc = col + dc[i];
        if(nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
        const dif = differ(map[row][col], map[nr][nc]);
       
        if(!visited[nr][nc] && L <= dif && dif <=R ){
            visited[nr][nc] = true;
            test.push([nr,nc]);
            dfs(nr,nc);
        }
    }
}

const change = (target) => {
    const sum = target.reduce((acc,cur)=>{
        const [r,c] = cur;
        return acc + map[r][c];
    },0)

    const average = Math.floor(sum / target.length);

    target.forEach((val)=>{
        const [r,c] = val;
        map[r][c] = average;
    })
}

let flag = true;
let answer = 0;
while(flag){

    flag = false;

    for(let i = 0; i<N;i++){
        for(let j = 0; j<N; j++){
            if(!visited[i][j]){
                test.push([i,j]);
                visited[i][j] = true;
                dfs(i,j);
                if(test.length >= 2) flag = true;
                change(test);
                test = [];
            }
        }
    }

    if(flag) answer++;

    visited = new Array(N).fill(0).map(()=>new Array(N).fill(false));

}


console.log(answer);
