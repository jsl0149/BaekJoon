const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const data = input.slice(1);
let graph = new Array(20001).fill(0).map((val)=>[]);
const check = new Array(20001).fill(0);

const dfs = (startVertex) => {
   if(check[startVertex] === 0){
    check[startVertex] = "RED";
   }

   graph[startVertex].forEach((val)=>{
    if(check[val] === 0){
        if(check[startVertex] === "RED"){
            check[val] = "BLUE";
        }
        else if(check[startVertex] === "BLUE") check[val] = "RED";
        dfs(val);
    }
   })
}

const isBi = () => {

    for(let i =1; i<graph.length;i++){
        for(let j = 0; j<graph[i].length;j++){
            if(check[i] === check[graph[i][j]]) return "NO";
        }
    }
    return "YES";
}



for(let i = 0; i<data.length;i++){
    const firstLine = data[i].split(' ');
    const vertex = parseInt(firstLine[0]);
    const edge = parseInt(firstLine[1]);
    

    for(let j = 1; j<=edge;j++){
        const from = parseInt(data[i+j].split(' ')[0]);
        const to = parseInt(data[i+j].split(' ')[1]);
        graph[from].push(to);
        graph[to].push(from);
    }
    
    graph.forEach((val,idx)=>{
        if(idx !==0 && check[idx] === 0){
            dfs(idx, check, graph);
        }
    })

    console.log(isBi());

    for(let k = 0; k<graph.length;k++){
        graph[k] = [];
    }
    
    check.fill(0);

    i += edge;

}