function solution(maps) {
    var answer = 0;
    
    const dr = [0,0,-1,1];
    const dc = [-1,1,0,0]; 
    
    const rLen = maps.length;
    const cLen = maps[0].length;
    
    maps = maps.map((val)=>{
        return val.split('');
    }) // 입력 변환

    const findStart = () => {
        for(let i = 0; i<maps.length;i++){
            for(let j = 0; j<maps[0].length;j++){
                if(maps[i][j] === 'S') return [i,j];
            }
        }
    } // 시작점을 찾는 함수
    
    const start = findStart(); // 시작점 찾아서 저장
    
    const bfs = (start, point) =>{
        
        const visited = new Array(rLen).fill(0).map(()=>new Array(cLen).fill(false));
        const queue = [];
        queue.push([start[0], start[1], 0]);
        visited[start[0]][start[1]] = true;
        
        while(queue.length){
            const [r,c,dist] = queue.shift();
        
            if(maps[r][c] === point) return [r,c,dist];
            
            for(let i = 0; i<4;i++){
                const nr = dr[i] + r;
                const nc = dc[i] + c;
                
                if(nr < 0 || nr >= rLen || nc < 0 || nc >= cLen) continue;
                
                if(maps[nr][nc] !== 'X' && !visited[nr][nc]){
                    visited[nr][nc] = true;
                    queue.push([nr,nc,dist+1]);
                }
            }
        }
        
        return [-1,-1,-1];
    } // 시작에서 레버, 레버에서 출구로 가는 최단 거리를 구하는 함수
    
    const [rLever, cLever, startToLever] = bfs(start, 'L'); // 시작에서 레버까지의 최단 거리
    
    if(startToLever === -1) return -1; // 레버까지 가는게 불가능하다면 -1 리턴
    
    const [rEnd, cEnd, leverToEnd] = bfs([rLever, cLever], 'E'); // 레버에서 출구까지의 최단 거리
    
    if(leverToEnd === -1) return -1; // 출구까지 가는게 불가능하다면 -1 리턴

    return startToLever + leverToEnd; // 시작->레버 최단 거리 + 레버->출구 최단거리 
}