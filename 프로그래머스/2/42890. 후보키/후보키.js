function solution(relation) {
    var answer = 0;
    
    // [0], [0,1] [0,1,2] 각각 구해서 앞서 계산한 01,02,03 이런 것들이 포함되어 있으면 제외시키기
    
    // 각 컬럼의 문자열을 합친다음 중복 검사
    // 앞서 검사한 컬럼중에 이미 후보키가 있다면 배제 (최소성 위반)
    
    const ans = [];
    
    const result = [];
    
    const num = [];
    
    relation[0].forEach((val,idx)=>{
        num.push(idx);
    })
    
    const combination = (arr,cur,k, len) => {       
        if(cur.length === len){
            result.push(cur);
            return;
        }
        
        for(let i = k; i<arr.length;i++){
            const temp = cur.slice(0);
            temp.push(arr[i]);
            combination(arr, temp, i+1, len);
        }
    } 
    
    num.forEach((val)=>{
        combination(num, [], 0, val+1);
    })
    
    
    // 최소성 검사
    const checkMin = (pair) => {
        
        for(let i = 0; i<ans.length; i++){
            let valid = 0;
            for(let j = 0; j<ans[i].length; j++){
                if(pair.includes(ans[i][j])) valid++;
            }
            if(valid === ans[i].length) return false;
        }
        return true;
    }
    
    // 유일성 검사
    const checkUnique = (keyArray) =>{
        const filteredArray = keyArray.filter((val,idx,arr)=>arr.indexOf(val) === idx);
        return keyArray.length === filteredArray.length;
    }
    
    const check = (pair, keyArray) => {
        return checkMin(pair) && checkUnique(keyArray);
    }
    
    result.forEach((combi)=>{
        const mergedArray = [];
        relation.forEach((item)=>{
            let str = '';
            combi.forEach((value)=>{
                str+=item[value];
            })
            mergedArray.push(str);
        })
        
        check(combi, mergedArray) ? ans.push(combi) : null;
    })
    
    return ans.length;
}