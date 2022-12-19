const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const[R,C] = input[0].split(' ').map(Number);
const map = input.slice(1).map((val)=>{
    const temp = val.split('').filter((val)=>val !== '\r').map((char)=>char.charCodeAt()-65);
    return temp;
});
const visited = new Array(26).fill(0);
const dr = [0,0,1,-1];
const dc = [1,-1,0,0];
let answer = 1;

visited[map[0][0]] = 1;

const dfs = (row, col, count) => {
    count > answer ? answer = count : answer;
    for(let i = 0; i<4;i++){
        const nr = row + dr[i];
        const nc = col + dc[i];
        if(nr < 0 || nr >= R || nc < 0 || nc >= C)  continue;
        const next = map[nr][nc];
        if(!visited[next]) {
            visited[next] = 1;
            dfs(nr, nc, count+1);
            visited[next] = 0;
        }
    }
}

dfs(0,0,1);
console.log(answer);