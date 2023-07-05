function solution(N, road, K) {
    var answer = 0;
    
    const graph = new Array(N+1).fill(0).map(()=> new Array(N+1).fill(Infinity));
    
    road.forEach((val)=>{
        const [from, to, cost] = val;
        if(graph[from][to] > cost){
            graph[from][to] = cost;
             graph[to][from]= cost;
        }
    })
    
    for(let i = 1; i<=N; i++) graph[i][i] = 0;
    
    for(let k = 1; k<=N;k++){
        for(let from = 1; from<=N; from++){
            for(let to = 1; to<=N; to++){
                graph[from][to] = Math.min(graph[from][to], graph[from][k] + graph[k][to]);
            }
        }
    }

   
    answer = graph[1].filter((val)=> val<= K).length;

   

    return answer;
}