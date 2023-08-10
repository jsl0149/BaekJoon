function solution(n, roads, sources, destination) {
    var answer = [];
    
    const graph = new Array(n+1).fill(0).map(()=>[]);
    const dp = new Array(n+1).fill(Infinity);
    
    roads.forEach((val)=>{
        const [from,to] = val;
        graph[from].push(to);
        graph[to].push(from);
    })
    
    const bfs = (start)=>{
        dp[start] = 0;
        const queue = [];
        queue.push([start,0]);
        
        while(queue.length){
            const [cur, count] = queue.shift();
            for(let i = 0; i<graph[cur].length;i++){
                const next = graph[cur][i];
                const cost = count + 1;
            
                if(cost < dp[next]){
                    dp[next] = cost;
                    queue.push([next,cost]);
                }
            }
        }
        
    }
   
    bfs(destination);
    
    sources.forEach((src)=>{
        dp[src] === Infinity ? answer.push(-1) : answer.push(dp[src]);
    })
    
    
    return answer;
}