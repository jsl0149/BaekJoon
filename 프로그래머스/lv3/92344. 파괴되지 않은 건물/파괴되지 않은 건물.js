function solution(board, skill) {
    var answer = 0;
    const n = board.length;
    const m = board[0].length;
    
    const imos = new Array(n+1).fill(0).map(()=>new Array(m+1).fill(0));
    
    skill.forEach((val)=>{
        const [type, r1,c1,r2,c2,degree] = val;
        imos[r1][c1] += type === 1 ? -degree : degree;
        imos[r1][c2+1] += type === 1 ? degree : -degree;
        imos[r2+1][c1] += type === 1 ? degree : -degree;
        imos[r2+1][c2+1] += type === 1 ? -degree : degree;
    })
   
    for(let i = 0; i<=n;i++){
        for(let j = 1; j<=m;j++){
            imos[i][j] += imos[i][j-1];
        }
    }
    
    for(let j = 0; j<=m;j++){
        for(let i = 1; i<=n;i++){
            imos[i][j] += imos[i-1][j];
        }
    }
    
    for(let i = 0; i<n;i++){
        for(let j = 0; j<m;j++){
            board[i][j] += imos[i][j];
            if(board[i][j] > 0) answer++;
        }
    }
    
    
    return answer;
}