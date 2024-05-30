function solution(targets) {
    var answer = 1;
    
    targets.sort(compare);
    
    let endpoint = targets[0][1]; 
    
    for(let i = 0; i<targets.length; i++){
        if(targets[i][0] < endpoint) continue;
        else{
            answer++;
            endpoint = targets[i][1];
        }
    }
    return answer;
}

function compare(a,b) {
    return a[1] - b[1];
}
