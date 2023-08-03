function solution(n, roads, sources, destination) {
    var answer = [];
    
    const dp = new Array(n+1).fill(Infinity);
    
    const graph = new Array(n+1).fill(0).map(()=>[]);
    
    roads.forEach((val)=>{
        const [from, to] = val;
        graph[from].push(to);
        graph[to].push(from);
    })
    
    const bfs = (start) => {
        
        const queue = [];
        queue.push([start,0]);
        dp[start] = 0;
        let idx = 0;
        while(idx !== queue.length){
            const [curNode, dist] = queue[idx++];
            
            for(let i = 0; i<graph[curNode].length;i++){
                const next = graph[curNode][i];
                if(dist+1<dp[next]){
                    dp[next] = dist+1;
                    queue.push([next,dist+1]);
                }
            }
            
        }
        
        return -1;
    }
    
    bfs(destination);
    
    sources.forEach((val)=>{
        if(dp[val] === Infinity) answer.push(-1);
        else answer.push(dp[val]);
    })
    
    return answer;
}