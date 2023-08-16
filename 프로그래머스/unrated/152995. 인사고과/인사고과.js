function solution(scores) {
    var answer = 1;
    
    const compare = (a,b)=>{
        if(a[0] === b[0]) return a[1] - b[1];
        return b[0] - a[0];
    }
    
    const target = scores[0];
    const targetScore = target[0] + target[1];
    
    let maxScore = 0;
    
    scores.sort(compare);
    
    for(const score of scores){
        if(score[1] < maxScore){
            if(score === target) return -1;
        }
        else{
            maxScore = score[1];
            if(targetScore < score[0] + score[1]) answer++;
        }
    }
    
    return answer;
}