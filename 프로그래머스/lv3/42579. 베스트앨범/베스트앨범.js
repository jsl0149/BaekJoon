function solution(genres, plays) {
    var answer = [];
    
    const map = new Map();
    
    for(let i = 0; i<genres.length; i++){
        if(map.get(genres[i])){
            const cur = map.get(genres[i]);
            cur[0] += plays[i];
            cur[1].push([i, plays[i]]);
        }
        
        else{
            map.set(genres[i], [plays[i], [[i, plays[i]]]]);
        }
        
    }

    const arr = [];
     
    for(const [key, val] of map) arr.push(val);

    arr.sort((a,b)=> b[0] - a[0]);
    
    const compare = (a,b)=>{
        if(b[1] === a[1]) return a[0] - b[0];
        
        return b[1] - a[1];
    }
    
    for(let i = 0; i<arr.length; i++){

        arr[i][1].sort(compare);

        if(arr[i][1].length === 1) answer.push(arr[i][1][0][0]);
        else{
            answer.push(arr[i][1][0][0]);
            answer.push(arr[i][1][1][0]);
        }
    }
    
    return answer;
}