const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin'  : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const map = new Array(100).fill(0).map(()=>new Array(100).fill(0));
const visited = new Array(100).fill(0).map(()=>new Array(100).fill(false));
const N = parseInt(input[0]);
const data = input.slice(1);
const dr = [0,0,1,-1];
const dc = [1,-1,0,0];
let dist = 1231123;
let cnt = 2;

const dfs = (r,c,cnt)=>{

    for(let i = 0; i<4;i++){
        const nr = r + dr[i];
        const nc = c + dc[i];

        if(nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

        if(!visited[nr][nc] && map[nr][nc] === 1){
            visited[nr][nc] = true;
            map[nr][nc] = cnt;
            dfs(nr,nc,cnt);
        }
    }

}

const bfs = (row,col)=> {

    for(let i = 0; i<N;i++){
        for(let j = 0; j<N;j++){
            visited[i][j] = false;
        }
    }


    const queue = [];
    queue.push([row,col,0]);
    let idx = 0;

    while(queue.length !== idx){
        const [r,c,pos] = queue[idx];
        if(pos > dist) break;
        for(let i = 0; i<4;i++){
            const nr = r + dr[i];
            const nc = c + dc[i];

            if(nr < 0 || nr >= N || nc < 0 || nc >= N) continue;

            if(map[nr][nc] === 0 && !visited[nr][nc]){
                visited[nr][nc] = true;
                queue.push([nr,nc,pos+1]);
            }

            else if(map[nr][nc] !== map[row][col] && map[nr][nc] !== 0){
                dist = Math.min(dist, pos);
            }
        }
        idx++;
    }
}
for(let i = 0; i<N;i++){
    const temp = data[i].split(' ').map(Number);
    for(let j = 0; j<N;j++){
        map[i][j] = temp[j];
    }
}
for(let i = 0; i<N;i++){
    for(let j = 0; j<N;j++){
        if(!visited[i][j] && map[i][j]===1){
            visited[i][j] = true;
            map[i][j] = cnt;
            dfs(i,j,cnt);
            cnt++;
        }
    }
}

for(let i = 0; i<N;i++){
    for(let j = 0; j<N;j++){
        if(map[i][j]!==0){
           bfs(i,j);
        }
    }
}
console.log(dist);