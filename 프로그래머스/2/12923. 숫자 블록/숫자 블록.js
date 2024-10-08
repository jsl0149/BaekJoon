function check(num) {
    
    if(num === 1) return 0;
    
    const max = [];
    
    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num%i === 0){
            if((num / i) <= 1e7) {
                return num / i;
            }
            max.push(i);
        }
    }
    
    if(max.length) return Math.max(...max);
    
    return 1;
}

function solution(begin, end) {
  let answer = [];

  for (let i = begin; i <= end; i++) {
    answer.push(check(i));
  }

  return answer;
}