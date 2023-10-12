function solution(data, col, row_begin, row_end) {
    var answer = 0;
    
    const compare = (a,b)=>{
        if(a[col-1] === b[col-1]) return b[0] - a[0];
        return a[col-1] - b[col-1];
    }
    
    data.sort(compare);
    
    const S  = [];
    
    for(let i = row_begin - 1; i < row_end; i++){
        let sum = 0;
        for(let j = 0; j<data[0].length;j++) sum += data[i][j] % (i+1);
        S.push(sum);
    }
    
    
    for(let i = 0; i<S.length; i++) answer = answer ^ S[i];

    return answer;
}