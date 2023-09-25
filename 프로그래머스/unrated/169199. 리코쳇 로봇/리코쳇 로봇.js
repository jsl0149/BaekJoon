function solution(board) {
    var answer = 0;
    
    const dr = [0,0,-1,1];
    const dc = [1,-1,0,0];
    
    const rLen = board.length;
    const cLen = board[0].length;
    
    board = board.map((row)=>{
        return row.split('');
    })
    
    const findStart = () => {
        for(let i = 0; i<rLen; i++){
            for(let j = 0; j<cLen; j++){
                if(board[i][j]==='R') return [i,j];
            }
        }
    } 
    
    const start = findStart();
    
    const bfs = (start)=>{
        const visited = new Array(rLen).fill(0).map(()=>new Array(cLen).fill(false));
        const queue = [];
        queue.push([start[0], start[1], 0]);
        visited[start[0]][start[1]] = true;
        
        while(queue.length){
            const [r,c,dist] = queue.shift();
            if(board[r][c] === 'G') return dist;
            
            for(let i = 0; i<4;i++){
                let nr = r+dr[i];
                let nc = c+dc[i];
                
                while(true){
                   if(nr < 0 || nr >= rLen || nc < 0 || nc >=cLen) break;
                   if(board[nr][nc] === 'D') break;
                    nr += dr[i];
                    nc += dc[i];
                }
              
                nr -= dr[i];
                nc -= dc[i];
                
                if(!visited[nr][nc]){
                    visited[nr][nc] = true;
                    queue.push([nr,nc,dist+1]);
                }
            }
        }
        return -1; 
    }
    
    return bfs(start);
}