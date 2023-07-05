function solution(clothes) {
    var answer = 1;
    
    const map = new Map();
    
    clothes.forEach((val)=>{
        const [key, kind] = val;
        if(map.hasOwnProperty(kind)){
            map[kind]++;
        }
        else{
            map[kind] = 1;
        }
    })
    
    for(const key in map){
        answer *= map[key] + 1;
    }
    
    answer -= 1;
    
    return answer;
}