function solution(n, words) {
    var answer = [];
    
    const map = new Map();
   
    const visited = new Array(n+1).fill(0);
    
    visited[1] = 1;
    
    let loser = 0;
    
    let prevLast = words[0][words[0].length-1];
    map.set(words[0], true);
    
    for(let i = 1; i<words.length; i++){
        visited[(i % n)+1]++;
        
        let curFirst = words[i][0];
    
        if(map.get(words[i]) || prevLast !== curFirst) {
            loser = (i % n) + 1;
            break;
        }

        else map.set(words[i], true);
        
        prevLast = words[i][words[i].length-1];
    }
    
    answer.push(loser);
    answer.push(visited[loser]);

    return answer;
}