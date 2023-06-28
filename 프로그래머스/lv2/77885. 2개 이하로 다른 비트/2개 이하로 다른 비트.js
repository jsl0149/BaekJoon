function solution(numbers) {
    var answer = [];
    
    numbers.forEach((val)=>{
        if(val % 2 ===0) answer.push(val+1);
        else{
            let str = val.toString(2);
            const idx = str.lastIndexOf('01');
            str = str.substring(0,idx) + '10' + str.substring(idx+2, str.length);
            answer.push(parseInt(str,2));
        }
    })
    
    return answer;
}