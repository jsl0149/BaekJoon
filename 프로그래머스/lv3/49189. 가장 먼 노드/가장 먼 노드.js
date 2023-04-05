function solution(n, edge) {
    var answer = 0;
    
    const dist = [];
    
    const graph = new Array(n+1).fill(0).map(()=>[]);
    
    edge.forEach((val)=>{
        const [from, to] = val;
        graph[from].push(to);
        graph[to].push(from);
    })
    
    const bfs = (start) => {
        
        const visited = new Array(n+1).fill(0);
        const nodeList = [];
        const queue = [];
        visited[start] = 1;
        queue.push([start, 0]);
        
        while(queue.length){
            const [curNode, count] = queue.shift();
            for(let i = 0; i<graph[curNode].length;i++){
                const nxtNode = graph[curNode][i];
                if(!visited[nxtNode]){
                    visited[nxtNode] = 1;
                    queue.push([nxtNode, count+1]);
                    nodeList.push([nxtNode, count+1]);
                }
            } 
        }
        return nodeList;
    }
    
    const nodeList = bfs(1);
    
    const max = nodeList[nodeList.length-1][1];
    
    return nodeList.filter((val)=> val[1] === max).length;
}