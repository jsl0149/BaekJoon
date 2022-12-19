const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input.slice(2);

const graph = new Array(N+1).fill(0).map(()=>[]);
const visited = new Array(N+1).fill(false);

let count = 0;

const dfs = (start,c) => {

    for(let i = 0; i<graph[start].length; i++){
        if(!visited[graph[start][i]]){
            visited[graph[start][i]] = true;
            count = count + 1;
            dfs(graph[start][i]);
        }
    }

}


data.forEach((val)=>{
    const [from,to] = val.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from); 
})


visited[1] = true;

dfs(1,1);

console.log(count);
