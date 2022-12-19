const { strictEqual } = require('assert');
const fs = require('fs');
const { Stream } = require('stream');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const enemy = input.slice(1);
const [N,M,D] = input[0].split(' ').map(Number);
const map = new Array(N+1).fill(0).map(()=>new Array(M).fill(0));
const lastRow = [];
const arrow = [];

const dr = [0,-1,0];
const dc = [-1,0,1];

for(let i = 0; i<M;i++){
    lastRow.push(i);
}

enemy.forEach((val,idx)=>{
    const temp = val.split(' ').map(Number);
    for(let i = 0; i<M;i++){
        map[idx][i] = temp[i];
    }
})

const bfs = (r,c,size, copy) => {
    const queue = [];
    const ene = [];
    queue.push([r-1,c,1]);
  
    while(queue.length){
        const [r,c,count] = queue.shift();

        if(copy[r][c]===1){
            ene.push([r,c,count])
            return ene;
        }

        if(count+1 <=D){
            for(let i = 0; i<3;i++){
                const nr  = r + dr[i];
                const nc = c + dc[i];
    
                if(nr < 0 || nr >= size || nc < 0 || nc >= M) continue;
    
                    if(copy[nr][nc] === 1) {
                        ene.push([nr,nc,count+1]);
                        return ene;
                    }
                    
                    else queue.push([nr,nc,count+1]);
                }
              
            }
        }

     
    
    return ene;
}

const combination = (str, k) => {
    if(str.length === 3){
       arrow.push(str);
    }

    else{
        for(let i = k; i<lastRow.length;i++){ 
            const temp = str.slice(0);
            temp.push(lastRow[i]);
            combination(temp, i+1);
        }
    }
}

combination([],0);

let answer = 0;

arrow.forEach((archer)=>{
    let count = 0;
    let copyMap = map.map(v=>[...v]);
    for(let i = N+1; i>=2;i--){

        const targets = [];

        for(let j = 0; j<M;j++){
            copyMap[i-1][j] = 0;
        }

        archer.forEach((val)=>{
            copyMap[i-1][val] = 2;
            const target = bfs(i-1,val,i,copyMap)[0];
            if(target) targets.push(target); 
        })

        if(targets.length){
            targets.forEach((val)=>{
                const [r,c,d] = val;
                if(copyMap[r][c] === 1){
                    count++;
                    copyMap[r][c] = 0;
                }
            })
        }
    }
    
    count > answer ? answer = count : count;

})

console.log(answer);