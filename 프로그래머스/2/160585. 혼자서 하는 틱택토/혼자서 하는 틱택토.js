function solution(board) {
    var answer = 1;
    
    const [O, X] = checkOX(board);
    
    if(X > O) return 0;
    
    if(O - X >= 2) return 0;
    
    const [OWin, XWin] = checkWin(board);
    
    if(OWin && O===X) return 0;
    
    if(XWin && O > X) return 0;
    
    return 1;
}

function checkWin(board){
    let OWin = false;
    let XWin = false;
    for(let i = 0; i<3; i++){
        let curO_garo = 0;
        let curO_sero = 0;
        let curX_garo = 0;
        let curX_sero = 0;
        for(let j = 0; j<3; j++){
            if(board[i][j] === 'O') curO_garo++;
            if(board[j][i] === 'O') curO_sero++;
            if(board[i][j] === 'X') curX_garo++;
            if(board[j][i] === 'X') curX_sero++;
        
        }
        if(curO_garo === 3 || curO_sero === 3) OWin = true;
        if(curX_garo === 3 || curX_sero === 3) XWin = true;
    }
   
    if(board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') OWin = true;
    if(board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') OWin = true;
    if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') XWin = true;
    if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') XWin = true;
    
    return [OWin,XWin];
}

function checkOX(board){
    let O = 0;
    let X = 0;
    
    for(let i = 0; i<3;i++){
        for(let j = 0; j<3;j++){
            if(board[i][j] === 'O') O++;
            if(board[i][j] === 'X') X++;
        }
    }
    return [O,X];
}


// X개수가 O보다 많음
// O개수가 X보다 2개 이상 많음
// 게임이 끝남
// - X 승리
//   - O가 X보다 많은 경우
// - O 승리
//   - X가 O와 크거나 같은 경우
// 우선 개수로 거를 수 있음