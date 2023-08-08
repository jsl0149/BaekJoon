function solution(n, wires) {
    var answer = Infinity;    
    let graph = new Array(n+1).fill(0).map(()=>[]);
    let visited = new Array(n+1).fill(0);
    let count = 0;
    
     const dfs = (start) => {
        for(let i = 0; i<graph[start].length; i++){
            const curNode = graph[start][i];
            if(!visited[curNode]){
                count++;
                visited[curNode] = 1;
                dfs(curNode);
            }
        }
    }
    
    for(let i = 0; i<wires.length; i++){
        const curGraph = [...wires.slice(0,i), ...wires.slice(i+1)];
        graph = new Array(n+1).fill(0).map(()=>[]);
        visited = new Array(n+1).fill(0);
        curGraph.forEach((val)=>{
            const [from,to] = val;
            graph[from].push(to);
            graph[to].push(from);
        })
        
        const differ = [];
        
        for(let j = 1; j<=n;j++){
            count = 0;
            if(!visited[j]){
                visited[j] = 1;
                dfs(j);
                differ.push(count);
                
            }
        }
        const dif = Math.abs(differ[0]-differ[1]);

        answer = dif < answer ? dif : answer;
    }
    
    return answer;
}