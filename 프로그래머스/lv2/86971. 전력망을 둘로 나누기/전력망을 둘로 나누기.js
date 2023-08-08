function solution(n, wires) {
    var answer = Infinity;    
    let graph = new Array(n+1).fill(0).map(()=>[]); // 그래프를 담을 배열
    let visited = new Array(n+1).fill(0); // 방문 확인 배열
    let count = 0; // 한 번에 방문 가능한 노드 개수를 담을 변수
    
     const dfs = (start) => {
        for(let i = 0; i<graph[start].length; i++){
            const curNode = graph[start][i];
            if(!visited[curNode]){
                count++;
                visited[curNode] = 1;
                dfs(curNode);
            }
        }
    } // dfs 함수
    
    for(let i = 0; i<wires.length; i++){
        const curGraph = [...wires.slice(0,i), ...wires.slice(i+1)]; // 하나 씩 끊어주기
        graph = new Array(n+1).fill(0).map(()=>[]); 
        visited = new Array(n+1).fill(0);
        curGraph.forEach((val)=>{
            const [from,to] = val;
            graph[from].push(to);
            graph[to].push(from);
        }) // 그래프에 값 넣기
        
        const differ = []; // 깊이를 담아 둘 배열 
        
        for(let j = 1; j<=n;j++){
            count = 0;
            if(!visited[j]){
                visited[j] = 1;
                dfs(j);
                differ.push(count); 
            }
        } // 그래프 순회
        
        const dif = Math.abs(differ[0]-differ[1]); // 네트워크 개수 차이 구하기

        answer = dif < answer ? dif : answer; // 정답 갱신
    }
    
    return answer;
}