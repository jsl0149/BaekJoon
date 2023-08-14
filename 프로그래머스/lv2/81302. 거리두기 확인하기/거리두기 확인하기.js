function solution(places) {
    var answer = [];
    
    const dr = [0,0,1,-1,-1,-1,1,1];
    const dc = [1,-1,0,0,-1,1,-1,1];
    
    let curPlace = [];
    
    
    const isValidP = (r,c) =>{
        
        for(let i = 0; i<4;i++){
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if(nr < 0 || nr >= 5 || nc < 0 || nr >= 5) continue;
            
            if(curPlace[nr][nc] === 'P') return false;
        }
        
        return true;
    }
    
    const isValidPartition = (r,c) => {
          let count = 0;
        
          for(let i = 0; i<4;i++){
            const nr = r + dr[i];
            const nc = c + dc[i];
            
            if(nr < 0 || nr >= 5 || nc < 0 || nr >= 5) continue;
            
            if(curPlace[nr][nc] === 'P') count++;
        }
        
        if(count >= 2) return false;
        return true;
    }
    
    places.forEach((val)=>{
        curPlace = val;
        let flag = true;
        for(let i = 0; i<5;i++){
            for(let j = 0; j<5;j++){
                if(curPlace[i][j] === 'P'){
                    flag = isValidP(i,j);
                }
                else if(curPlace[i][j] === 'O'){
                    flag = isValidPartition(i,j);
                }
                if(!flag) break;
            }
            if(!flag) break;
        }
        if(flag) answer.push(1);
        else answer.push(0);
    })
    
    return answer;
}

// 1. 8방향 체크
// 2. P가 있으면 거리두기 X
// 3. 대각선을 제외한 방향에 파티션이 있으면 통과 