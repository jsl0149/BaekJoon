function solution(key, lock) {
    var answer = false;
    
    let holes = 0;
    
    lock.forEach((row)=>{
        row.forEach((val)=>{
            val ? null : holes++; 
        })
    })
    
    const rotate = () => {
        const N = key.length-1;
        const temp = new Array(N+1).fill(0).map(()=>new Array(N+1).fill(0));
        for(let i = 0; i<=N;i++){
            for(let j = 0; j<=N;j++){
                temp[j][N-i] = key[i][j];
            }
        }
        key = temp;
    }
    
   
    const find = (curR, curC) => {
        const N = key.length;
        const M = lock.length;
        
        let count = 0;
        
        for(let i = 0; i<N;i++){
            for(let j = 0; j<N;j++){
                const lockRow = curR - (N-1) + i;
                const lockCol = curC - (N-1) + j;
                
                if(lockRow < 0 || lockRow >=M || lockCol < 0 || lockCol >= M) continue;
                
                if(key[i][j] === lock[lockRow][lockCol] && key[i][j]) return false;
                
                if(key[i][j] !== lock[lockRow][lockCol] && key[i][j]) count++;
                
            }
        }
        
        return count === holes;
    }
    
   const N = key.length;
   const M = lock.length;
    
    for(let k = 0; k<4;k++){
        for(let i = 0; i<N+M-1;i++){
            for(let j = 0; j<N+M-1;j++){
                if(find(i,j)) return true;
            }
        }
        rotate();
    }
    
   
    return false;
}

// 0 0 -> 0 2
// 0 1 -> 1 2
// 0 2 -> 2 2
// 1 0 -> 0 1
// 1 1 -> 1 1
// 1 2 -> 2 1