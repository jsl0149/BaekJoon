const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const tree = Array.from({ length: N + 1 }, () => new Array());
let visited = Array.from({length: N + 1}, ()=>false);
const data = input.slice(1);


data.forEach((val,idx)=>{
    const [node,...nextInfo] = val.split(' ').map(Number);
    for(let i = 0; i<nextInfo.length-1;i+=2){
        tree[node].push([nextInfo[i], nextInfo[i+1]]);
    }
})

let max = {node : 0, dist : Number.MIN_SAFE_INTEGER};

const dfs = (node, dist) =>{
    visited[node] = true;

    if(max.dist < dist) max = {node, dist};

    tree[node].forEach((val)=>{
        const [nextNode, nextDist] = val;
        if(!visited[nextNode]) {
            dfs(nextNode, dist + nextDist);
        }
    })
}

dfs(1, 0);

visited = new Array(N+1).fill(false);
max.dist = Number.MIN_SAFE_INTEGER;

dfs(max.node, 0);


console.log(max.dist);
