function solution(s) {
    var answer = 0;
    const obj = {'zero' : 0, 'one' : 1, 'two' : 2, 'three' : 3, 'four' :4, 'five' : 5, 'six' : 6, 'seven' : 7, 'eight' : 8, 'nine' : 9};
    
    for(let key in obj) s=s.replaceAll(key, obj[key]);
    
    answer = parseInt(s);
    
    return answer;
}