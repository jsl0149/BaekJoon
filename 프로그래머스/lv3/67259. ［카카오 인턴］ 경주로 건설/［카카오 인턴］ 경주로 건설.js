function solution(board) {
    
    
    const N = board.length;
    
    const dr = [0,1,-1,0];
    const dc = [1,0,0,-1];
    
    const bfs = () => {
        
        const answer = [];
        const queue = [];
        queue.push([0,0,0,1]);
        queue.push([0,0,0,0]);
        const dp = new Array(N).fill(0).map(()=>new Array(N).fill(0).map(()=>new Array(N).fill(Infinity)));
      
        while(queue.length){
            const [r,c, cost, dir] = queue.shift(); 
            
            if(r===N-1 && c===N-1) answer.push(cost)
            
            for(let i = 0; i<4;i++){
                const nr = r + dr[i];
                const nc = c + dc[i];
                
                if(nr < 0 || nr >= N || nc < 0 || nc >= N  || board[nr][nc]) continue;
                
                const charge = i === dir ? cost + 100 : cost + 600;
                
                if(dp[nr][nc][i] > charge){
                    dp[nr][nc][i] = charge;
                    queue.push([nr,nc,charge,i]);
                }
                
            }
            
        }
        
        return answer;
    }
    
  
    return Math.min.apply(null, bfs());
}