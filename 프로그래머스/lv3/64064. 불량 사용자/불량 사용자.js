function solution(user_id, banned_id) {
    var answer = 0;
    const visited =[];
    const set = new Set();
    
    const check = (i,j) => {
        for(let idx = 0; idx<i.length;idx++){
            if(i[idx] !== '*' && i[idx] !== j[idx]) return false;
        }
        return true;
    }
    
    const dfs = (curIdx, count, str) => {
        if(count === banned_id.length){
            let arr = str.split(' ');
            arr.shift();
            arr.sort();
            const newStr = arr.join('');
            set.add(newStr);
        }
        
        if(curIdx >= user_id.length) return;
        

        for(let i = curIdx; i<banned_id.length;i++){
            for(let j = 0; j<user_id.length;j++){
                if(visited[j]) continue;

                if(user_id[j].length !== banned_id[i].length) continue;
                if(!check(banned_id[i], user_id[j])) continue;

                visited[j] = true;
                dfs(i+1, count + 1, str + " " + user_id[j])
                visited[j] = false;
            }
        }
        
    }
    
    dfs(0,0,"");

    return set.size;
}
