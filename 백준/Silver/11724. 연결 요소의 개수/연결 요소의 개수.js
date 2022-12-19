const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const dfs = (startVertex) => {
   if(check[startVertex]) return;
   check[startVertex] = true;
   graph[startVertex].forEach((val)=>{
    dfs(val);
   })
}

const firstLine = input[0].split(' ');
const data = input.slice(1);


const vertexNumber = parseInt(firstLine[0]);
const check = new Array(vertexNumber+1);
check.fill(false);
const graph = new Array(vertexNumber+1).fill(0).map(() => []);


data.forEach((val)=>{
    const first = parseInt(val.split(' ')[0]);
    const second = parseInt(val.split(' ')[1]);
    graph[first].push(second);
    graph[second].push(first);
})

let answer = 0;

graph.forEach((val,idx)=>{
    if(idx !==0 && check[idx] === false){
        dfs(idx);
        answer++;
    }
})

console.log(answer);
