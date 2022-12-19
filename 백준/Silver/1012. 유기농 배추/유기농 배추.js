const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const data = input.slice(1);
const map = new Array(50).fill(0).map(()=>new Array(50).fill(0));
const visited = new Array(50).fill(0).map(()=>new Array(50).fill(false));
let count = 0;
const dr = [0,0,-1,1];
const dc = [1,-1,0,0];

const print = (map) => {
    map.forEach((val)=>{
        console.log(val.join(' '));
    })
}

const dfs = (row,col,M,N) => {
    for(let i = 0; i<4;i++){
        const nr = row + dr[i];
        const nc = col + dc[i];

        if(nr < 0 || nr >= M || nc < 0 || nc >=N) continue;

        if(!visited[nr][nc] && map[nr][nc] === 1){
            visited[nr][nc] = true;
            dfs(nr,nc,M,N);
        }

    }
}

const init = (M, N) => {
    for(let i = 0; i<M; i++){
        for(let j = 0; j<N;j++){
            visited[i][j] = false;
            map[i][j] = 0;
        }
    }
    count = 0;
}

let answer = ``;

for(let i = 0; i<data.length;i++){

    const [M,N,K] = data[i].split(' ').map(Number);

    for(let j = i+1; j<K+i+1;j++){
        const [r,c] = data[j].split(' ').map(Number);
        map[r][c] = 1;
    }

    for(let k = 0; k<M; k++){
        for(let p = 0; p<N; p++){
            if(!visited[k][p] && map[k][p] === 1){
                visited[k][p] = true;
                dfs(k,p,M,N);
                count = count+1;
            }
        }
    }
    i = i + K;
    answer += `${count}\n`;
    init(M, N);
}

console.log(answer);