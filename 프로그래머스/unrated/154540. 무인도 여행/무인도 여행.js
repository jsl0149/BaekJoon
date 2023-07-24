function solution(maps) {
    var answer = [];
    const N = maps.length;
    const M = maps[0].length;
    const dr = [0,0,-1,1];
    const dc = [1,-1,0,0];
    const visited = new Array(N).fill(0).map(()=> new Array(M).fill(false));
    const map = [];
    maps.forEach((row)=>{
        map.push(row.split('').map((val)=>{
            if('0' <= val && val <= '9') return parseInt(val);
            return val;
        }));
    })
    
    let day = 0;
    
    const dfs = (r,c)=>{
        for(let i = 0; i<4;i++){
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if(nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
            
            if(!visited[nr][nc] && map[nr][nc] !== 'X'){
                visited[nr][nc] = true;
                day += map[nr][nc]
                dfs(nr,nc);
            }
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
            }
        }
    }
    
    answer.sort((a,b)=>a-b);
    
    
    return answer.length ? answer : [-1];
}