function solution(s){
    let str = s;
    let answer = [0,0];
    
    while(str !=='1'){
        const oneLen = [...str].filter((val)=>val === '1').length;
        answer[1] += str.length - oneLen;
        answer[0]++;
        str = oneLen.toString(2);
    }
  
    return answer;
}