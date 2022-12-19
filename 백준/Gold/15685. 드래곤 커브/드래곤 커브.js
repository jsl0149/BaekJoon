const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const map = new Array(101).fill(0).map(()=>new Array(101).fill(0));
const curve = [];
const dr = [0,-1,0,1];
const dc = [1,0,-1,0];
const data = input.slice(1);

data.forEach((val)=>{
    const [r,c,d,g] = val.split(' ').map(Number);
    let cur = [c,r];
    let N = g;
    curve.push(cur);
    curve.push([cur[0]+dr[d], cur[1]+dc[d]]);
    cur = [cur[0]+dr[d], cur[1]+dc[d]];
    let stack = [d];

    while(N--){
        const temp = [];
        for(let i = stack.length-1; i>=0;i--){
            const curDirection = (stack[i] + 1) % 4;
            temp.push(curDirection);
            const nr = cur[0] + dr[curDirection];
            const nc = cur[1] + dc[curDirection];
            cur = [nr,nc];
            curve.push(cur);
        }
        stack = [...stack, ...temp];
    }
})

curve.forEach((val)=>{
    map[val[0]][val[1]] = 1;
})

let answer = 0;

for(let i = 0; i<100;i++){
    for(let j = 0; j<100;j++){           
        if(map[i][j] === 1 && map[i][j+1] === 1 && map[i+1][j] === 1 && map[i+1][j+1]) answer++;
    }
}

console.log(answer);