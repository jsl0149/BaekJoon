function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b)=>a-b);

    for(let i = 0; i<=10000;i++){
        for(let j = 0; j<citations.length;j++){
            if(i <= citations[j]){
                const low = j;
                const high = citations.length - j;
                if(low <= i && high >= i)  answer = i;
                break;
            }
        }
    }
    
    return answer;
}
