function solution(maps) {
    var answer = 0;
    
    const dr = [0,0,-1,1];
    const dc = [-1,1,0,0];
    
    const rLen = maps.length;
    const cLen = maps[0].length;
    
    maps = maps.map((val)=>{
        return val.split('');
    })

    const findStart = () => {
        for(let i = 0; i<maps.length;i++){
            for(let j = 0; j<maps[0].length;j++){
                if(maps[i][j] === 'S') return [i,j];
            }
        }
    }
    
    const start = findStart();
    
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
    }
    
    const [rLever, cLever, startToLever] = bfs(start, 'L');
    
    if(startToLever === -1) return -1;
    
    const [rEnd, cEnd, leverToEnd] = bfs([rLever, cLever], 'E');
    
    if(leverToEnd === -1) return -1;

    return startToLever + leverToEnd;
}