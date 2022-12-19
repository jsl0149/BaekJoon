const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const map = [];
const [N, cNum] = input[0].split(' ').map(Number);
let visited = new Array(N).fill(0).map(()=>new Array(N).fill(false));
const data = input.slice(1,N+1);
const command = input.slice(N+1);
let cloud = [[N-2,0],[N-2,1],[N-1,0], [N-1,1]];
data.forEach((val)=>{
    const row = val.split(' ').map(Number);
    map.push(row);
})

const dr = [-5,0,-1,-1,-1,0,1,1,1];
const dc = [-5,-1,-1,0,1,1,1,0,-1];

const move = (com, num ) => {
    cloud = cloud.map((val)=>{
        const [r,c] = val;
        
        let nr = (r + dr[com] * num) % N;
        let nc = (c + dc[com] * num) % N;

        if(nr < 0) nr += N;
        if(nc < 0) nc += N;

        return [nr,nc];
    })

    cloud.forEach((val)=>{
        const [r,c] = val;
        visited[r][c] = true;
        map[r][c] += 1;
    })

}

const diagonal = () => {
    
    cloud.forEach(val=>{
        const [r,c] = val;
        for(let i = 2; i<=8; i+=2){
            const nr = r + dr[i];
            const nc = c + dc[i];
            if(nr < 0 || nr >= N || nc < 0 || nc >=N) continue;

            if(map[nr][nc] > 0) map[r][c]++;
        }
    })

};

const decreaseWater = () => {
    cloud = [];
    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++){
            if(!visited[i][j] && map[i][j]>=2){
                map[i][j] -= 2;
                cloud.push([i,j]);
            }
        }
    }
}

const init = () => {
    visited = new Array(N).fill(0).map(()=>new Array(N).fill(false));
}

command.forEach((val)=>{
    const [dir, moveNum] = val.split(' ').map(Number);
    move(dir, moveNum);
    diagonal();
    decreaseWater();
    init();
})

const answer = map.reduce((acc,cur,idx)=>{
    const temp = cur.reduce((acc,cur)=>{
        return acc + cur;
    },0)

    return acc + temp;
},0)

console.log(answer);