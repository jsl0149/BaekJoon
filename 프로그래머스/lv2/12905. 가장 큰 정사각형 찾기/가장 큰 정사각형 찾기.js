function solution(board)
{
    var answer = 0;
    
    const r = board.length;
    const c = board[0].length;
    
    const map = new Array(r+1).fill(0).map(()=>new Array(c+1).fill(0));
    
    for(let i = 0; i<r; i++){
        for(let j = 0; j<c; j++){
            map[i+1][j+1] = board[i][j];
        }
    }
    
    for(let i = 1; i<=r;i++){
        for(let j = 1; j<=c;j++){
            if(map[i][j]){
                const up = map[i-1][j];
                const left = map[i][j-1];
                const dia = map[i-1][j-1];
                map[i][j] += Math.min(up,left,dia);
                answer = Math.max(answer, map[i][j]);
            }
        }
    }
    
    return answer * answer;
}