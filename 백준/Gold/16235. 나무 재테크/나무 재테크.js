const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N,M,K] = input[0].split(' ').map(Number);
const S2D2 = [];
const food = input.slice(1,N+1);
const tree = input.slice(N+1);
const field =  new Array(N).fill(0).map(()=>new Array(N).fill(5));
let map = new Array(N).fill(0).map(()=>new Array(N).fill(0).map(()=>[]));
const death = new Array(N).fill(0).map(()=>new Array(N).fill(0).map(()=>[]));
food.forEach((val)=>{
    const row = val.split(' ').map(Number);
    S2D2.push(row);
})

tree.forEach((val)=>{
    const [r,c,age] = val.split(' ').map(Number);
    map[r-1][c-1].push(age);
})

const dr = [0,0,-1,1,1,-1,1,-1];
const dc = [1,-1,0,0,-1,1,1,-1];

const spring = () => {
    for(let i = 0; i<N;i++){
        for(let j = 0; j<N; j++){
            if(map[i][j].length >= 2) map[i][j].sort((a,b)=>a-b);
              
            for(let k = 0; k<map[i][j].length;k++){
                if(field[i][j] >= map[i][j][k]){
                    field[i][j] -= map[i][j][k];
                    map[i][j][k]++;
                }
                else{
                    while(map[i][j].length !== k){
                        death[i][j].push(map[i][j].pop());
                    }
                }
            }
            
        }
    }
}
const summer = () => {
    for(let i = 0; i<N;i++){
        for(let j = 0; j<N;j++){
            if(death[i][j].length){
                while(death[i][j].length){
                    field[i][j] += Math.floor(death[i][j].pop()/2);
                }
            }
        }
    }
}

const autumn = () => {
    
    const temp = new Array(N).fill(0).map(()=>new Array(N).fill(0).map(()=>[]));

    for(let i = 0; i<N;i++){
        for(let j = 0; j<N;j++){
            if(map[i][j].length){
                map[i][j].forEach((val)=>{
                    if(val % 5 === 0){
                        for(let k = 0; k<8;k++){
                            const nr = i + dr[k];
                            const nc = j + dc[k];
                            if(nr < 0 || nr >= N || nc < 0 || nc >=N) continue;
                            temp[nr][nc].push(1);
                        }
                    }
                })
            }
        }
    }

    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++){
            map[i][j] = [...temp[i][j],...map[i][j]];
        }
    }

}

const winter = () => {
    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++){
            field[i][j] += S2D2[i][j];
        }
    }
}

let Time = K;

while(Time--){
    spring();
    summer();
    autumn();
    winter();
}


const answer = map.reduce((acc, cur)=>{
    const temp = cur.reduce((acc, cur)=>{
        return acc + cur.length;
    },0)
    return acc + temp;
},0)

console.log(answer);