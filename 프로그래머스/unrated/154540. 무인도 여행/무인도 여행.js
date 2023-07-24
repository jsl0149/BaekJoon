function solution(maps) {
    var answer = [];
    const N = maps.length; // MAP 행 길이
    const M = maps[0].length; // MAP 열 길이
    const dr = [0,0,-1,1]; // 방향 값
    const dc = [1,-1,0,0]; // 방향 값
    const visited = new Array(N).fill(0).map(()=> new Array(M).fill(false)); // 방문 배열
    const map = [];
    maps.forEach((row)=>{
        map.push(row.split('').map((val)=>{
            if('0' <= val && val <= '9') return parseInt(val);
            return val;
        }));
    }) // maps 데이터 파싱
    
    let day = 0; // dfs로 한 번에 탐색 가능한 휴가 날짜를 담는 변수
    
    const dfs = (r,c)=>{
        for(let i = 0; i<4;i++){
            const nr = r + dr[i]; // 상,하,좌,우 행 좌표
            const nc = c + dc[i]; // 상,하,좌,우 열 좌표
            
            if(nr < 0 || nr >= N || nc < 0 || nc >= M) continue; // map 밖으로 벗어나면 continue
            
            if(!visited[nr][nc] && map[nr][nc] !== 'X'){
                visited[nr][nc] = true;
                day += map[nr][nc]
                dfs(nr,nc);
            } // nr,nc를 방문하지 않았고 map이 'X'가 아니면 dfs 진행
        }
    }
    
    for(let i = 0; i<N;i++){
        for(let j = 0; j<M;j++){
            if(!visited[i][j] && map[i][j] !== 'X'){
                day = 0;
                visited[i][j] = true;
                day += map[i][j]
                dfs(i,j);
                answer.push(day);
            } // 한 번의 탐색이 끝나면 day 초기화
        }
    }
    
    answer.sort((a,b)=>a-b); 
    
    
    return answer.length ? answer : [-1];
}