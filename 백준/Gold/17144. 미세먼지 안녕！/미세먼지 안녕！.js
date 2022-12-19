const { FORMERR } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [R,C,T] = input[0].split(' ').map(Number);
const map = [];
const cleaner = [];
let check = new Array(R).fill(0).map(()=>new Array(C).fill(0));
let check2 = new Array(R).fill(0).map(()=>new Array(C).fill(0));
const data = input.slice(1);

const dr = [0,0,-1,1];
const dc = [-1,1,0,0];

data.forEach((val)=>{
    const row = val.split(' ').map(Number);
    map.push(row);
})

const diffusion = () => {
    for(let i = 0; i<R;i++){
        for(let j = 0; j<C; j++){
            if(map[i][j] === 0) continue;
            if(map[i][j] === -1) {
                cleaner.push([i,j]);
                continue;
            }
            for(let k = 0; k<4;k++){
                const nr = i + dr[k];
                const nc = j + dc[k];
                if(nr < 0 || nr >= R || nc < 0 || nc >=C) continue;
    
                if(map[nr][nc] === -1) continue;
    
                check[nr][nc] += Math.floor(map[i][j] / 5); 
                check2[i][j] -= Math.floor(map[i][j] / 5);
            }
        }
    }
     
    for(let i = 0; i<R;i++){
        for(let j =0;j<C;j++){
            map[i][j] += check[i][j] + check2[i][j];
            check[i][j] = 0;
            check2[i][j] = 0;
        }
    }
}

const circular = () => {

    const [upRow, upCol] = cleaner[0];
    const [dwRow, dwCol] = cleaner[1];

    // 공기 청정기열 위 아래 

    for(let i = upRow-2; i>=0;i--){
        map[i+1][0] = map[i][0];
    }

    // 공기 청정기 위 왼->오

    for(let i = 0; i<C-1; i++){
        map[0][i] = map[0][i+1];
    }

    // 공기 청정기 아래 위

    for(let i = 0; i<upRow; i++){
        map[i][C-1] = map[i+1][C-1];
    }
    
    //공기 청정기 아래 오->왼

    for(let i = C-1; i>=1;i--){
        if(map[upRow][i-1] === -1 ) map[upRow][i] = 0; 
        else map[upRow][i] = map[upRow][i-1]; 
    }

     // 공기 청정기열 아래 아래->위 

     for(let i = dwRow+1; i<R-1;i++){
        map[i][0] = map[i+1][0];
    }

    // 공기 청정기열 아래 오->왼

    for(let i = 0; i<C-1; i++){
        map[R-1][i] = map[R-1][i+1];
    }

    // 공기 청정기 아래 위->아래

    for(let i = R-1; i>dwRow; i--){
        map[i][C-1] = map[i-1][C-1];
    }
    
    //공기 청정기 아래 위 오->왼

    for(let i = C-1; i>=1;i--){
        if(map[dwRow][i-1] === -1 ) map[dwRow][i] = 0; 
        else map[dwRow][i] = map[dwRow][i-1]; 
    }
}

for(let i = 0; i<T;i++){
    diffusion();
    circular();
}

const answer = map.reduce((acc,cur)=>{
    const temp = cur.reduce((acc,cur)=>{
        return acc + cur;
    },0)

    return acc + temp;
},0)

console.log(answer + 2);