function solution(m, n, board) {
    var answer = 0;

    const dr = [0,1,1];
    const dc = [1,0,1];

    let transBoard = board.map((val)=>val.split(''));
    
    let boardCopy = [];
    
    transBoard.forEach((val)=>{
        const temp = [...val];
        boardCopy.push(temp);
    })
    
    const findPair = () => {
        
      let isPair = false;
        
      for(let i = 0; i<m;i++){
          for(let j = 0; j<n;j++){
              
              const cur = transBoard[i][j];
              
              if(cur === 0) continue;
              
              let flag = true;
              
              const temp = [[i,j]];
              
              for(let k = 0; k<3;k++){
                  const nr = i + dr[k];
                  const nc = j + dc[k];
                  
                  if(nr < 0 || nr>=m || nc < 0 || nc >=n){
                    flag = false;
                    break;
                  }
                 
                  temp.push([nr,nc]);
                  
                  if(transBoard[nr][nc] !== cur){
                      flag = false;
                      break;
                  }  
              }
              
              if(flag){
                  temp.forEach((val)=>{
                      const [r,c] = val;
                      boardCopy[r][c] = 0;
                  })
                  isPair = true;
              }
        }
      }
        
      return isPair;
    }
    
    const boardDown = () => {
        let count = m;
        while(count--){
          for(let i = 0; i<m;i++){
            for(let j = 0; j<n;j++){
                
                const up = i-1;

                if(up >= 0 && boardCopy[i][j] === 0 && boardCopy[up][j] !== 0){
                    const temp = boardCopy[i][j];
                    boardCopy[i][j] = boardCopy[up][j];
                    boardCopy[up][j] = temp;                    
                }
            }
          } 
        }
          
        
    }
    
    const boardUpdate = () => {
        transBoard = [];
        boardCopy.forEach((val)=>{
          const temp = [...val];
          transBoard.push(temp);
        })
    
    }
    
    const countErased = () => {
        let count = 0;
        for(let i = 0; i<m; i++){
            for(let j = 0; j<n;j++){
                if(boardCopy[i][j] === 0) count++;
            }
        }
        
        return count;
    }
    
   
    while(true){
        if(!findPair()) break;
        boardDown();
        boardUpdate();
    }
    
    return countErased();
    
}

// 1. 모든 칸에 대해서 검사
// 2. 배열 복사 해놓기
/* 3. TTTANT
      00FA00
      000F00
      T00RAA
      TTMMMF
      TMMTTJ */
// 4. 행마다 0 검사 후 위에 0이 아니라면 스왑