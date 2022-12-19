const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input.slice(1);
const graph = new Array(1001).fill(0).map(()=>[]);
const visited = new Array(1001).fill(false);


const dfs = (start) => {
    
    if(visited[start]) return;
    visited[start] = true;

    graph[start].forEach((val)=>{
        dfs(val);
    })

}


let answer = "";

for(let i = 0; i<data.length;i=i+2){
    const number = parseInt(data[i]);
    const input = data[i+1].split(' ').map((val)=>parseInt(val));
    
    for(let j = 1; j<=number;j++){
        const from = j;
        const to = input[j-1];
        graph[from].push(to);
    }

    let temp = 0;

    for(let p = 1; p<=number;p++){
        if(!visited[p]){
            dfs(p);
            temp++;
        }
    }

    for(let k = 0; k<graph.length;k++){
        graph[k] = [];
    }

    visited.fill(false);

    answer += `${temp}\n`;

}

console.log(answer);