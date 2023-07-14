function solution(key, lock) {
    var answer = false;
    
    let holes = 0;
    
    lock.forEach((val)=>{
        val.forEach((val2)=>{
            !val2 ? holes++ : null;
        })
    })

    const rotate = () => {
        const N = key.length-1;
        const copy = new Array(N+1).fill(0).map(()=>new Array(N+1).fill(0));
        
        for(let i = 0; i<=N;i++){
            for(let j = 0; j<=N;j++){
                copy[i][j] = key[j][N-i];
            } 
        }
        key = copy;
    }
    
    const check = (curRow, curCol) => {
        const N = key.length;
        const M = lock.length;
        let count = 0;
        
        for(let i = 0; i<N; i++){
            for(let j = 0; j<N;j++){
                const lockRow = curRow - (N - i - 1); 
                const lockCol = curCol - (N - j - 1);
                
                if(lockRow < 0 || lockRow >= M || lockCol < 0 || lockCol >= M) continue;
                
                if(key[i][j] === lock[lockRow][lockCol] && key[i][j]) return;
                
                if(key[i][j] !== lock[lockRow][lockCol] && key[i][j]) count++; 
                
            }
        }
        
        return holes === count;
    }
 
    const N = key.length; 
    const M = lock.length;
    

    
    for(let k = 0; k<4;k++){
        console.log(key);
        for(let i = 0; i<N+M-1;i++)
            for(let j = 0; j<N+M-1;j++){
                 if(check(i,j)) return true;
            }    
        rotate();
    }

    return false;
}