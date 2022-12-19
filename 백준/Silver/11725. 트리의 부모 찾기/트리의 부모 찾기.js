const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const graph = new Array(N+1).fill(0).map(()=>[]);
const visited = new Array(N+1).fill(false);
const data = input.slice(1);
const tree = new Array(N+1).fill(0).map(()=>[]);
const parent = new Array(N+1);

const dfs = (node) => {
    if(visited[node]) return;
    visited[node] = true;
    graph[node].forEach((val)=>{
        if(!visited[val]){
            tree[node].push(val);
            dfs(val);
        }
    })
}

data.forEach((val)=>{
    const [first, second] = val.split(' ').map(Number);
    graph[first].push(second);
    graph[second].push(first);
})

dfs(1);

tree.forEach((val,idx)=>{
    val.forEach((val)=>{
        parent[val] = idx;
    })
})

const answer = parent.reduce((acc,cur)=>{
    if(cur !== undefined) return acc+=`${cur}\n`

    else return acc;

},'')

console.log(answer);