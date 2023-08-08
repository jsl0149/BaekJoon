function solution(arr) {
    var answer = [];
    
    arr.forEach((val)=>{
        for(let i = 0; i<val;i++) answer.push(val);
    })
    
    return answer;
}