const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const graph = new Array(100001).fill(0);
const visited = new Array(100001).fill(false);
const done = new Array(100001).fill(false);
let answer = [];
const data = input.slice(1);
let cnt = 0;

const dfs = (here) => {
    
    visited[here] = true;
    const next = graph[here];
    if(!visited[next]) dfs(next);

    else if(!done[next]) {
        for(let i = next; i !=here; i=graph[i]){
            cnt--;
        }
        cnt--;
    }

    done[here] = true;

}



for(let i = 0; i<data.length;i+=2){
    
    const number = parseInt(data[i]);
    const vertices = data[i+1].split(' ').map((val)=>parseInt(val));
    cnt = number;

    vertices.forEach((val, idx)=>{
        graph[idx+1] = val;
    })


    for(let k = 1; k<=number;k++){
        if(!visited[k]) {
            dfs(k);
        }
    }

    for(let j = 0; j<=number;j++){
        graph[j] = 0;
        visited[j] = false;
        done[j] = false;
    }

    console.log(cnt);

}