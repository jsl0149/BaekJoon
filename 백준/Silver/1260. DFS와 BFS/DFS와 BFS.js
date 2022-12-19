const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const dfs = (startVertex) => {
   if(check[startVertex]) return;
   check[startVertex] = true;
   dfsAnswer.push(startVertex);
   graph[startVertex].forEach((val)=>{
    dfs(val);
   })
}

const bfs = (startVertex) => {
    let queue = [];
    
    check[startVertex] = false;
    queue.push(startVertex);

    while(queue.length !== 0){
        const node = queue.shift();
        if(check[node] === false){
            check[node] = true;
            answer.push(node);
            queue = [...queue, ...graph[node]];
        }
    }
  
    return answer;
}

const firstLine = input[0].split(' ');
const data = input.slice(1);


const vertexNumber = parseInt(firstLine[0]);
const check = new Array(vertexNumber+1);
const firstVertex = parseInt(firstLine[2]);
check.fill(false);
const dfsAnswer = [];
const answer = [];
const graph = new Array(vertexNumber+1).fill(0).map(() => []);


data.forEach((val)=>{
    const first = parseInt(val.split(' ')[0]);
    const second = parseInt(val.split(' ')[1]);
    graph[first].push(second);
    graph[second].push(first);
})

graph.forEach((val)=>{
    val.sort((a,b)=>{
        return a-b;
    });
})


dfs(firstVertex);

check.fill(false);

bfs(firstVertex);


let str1 = "";
let str2 = "";

dfsAnswer.forEach((val)=>{
    str1 += `${val} `;
})

answer.forEach((val)=>{
    str2 += `${val} `;
})

console.log(str1);
console.log(str2);
