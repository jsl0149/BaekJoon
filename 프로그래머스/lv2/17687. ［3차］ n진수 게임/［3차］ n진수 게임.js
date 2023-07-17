function solution(n, t, m, p) {
    var answer = '';

   
    let str = '';

    for(let i = 0; i<t*m;i++) str += i.toString(n);
    
    str = str.toUpperCase();
    
    
    for(let i = p-1; i<str.length;i+=m){
        answer += str[i];
        if(answer.length >= t) break;
    }

   
    return answer;
}