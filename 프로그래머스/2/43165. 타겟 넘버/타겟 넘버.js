function solution(numbers, target) {
    var answer = 0;

    const dfs = (depth, cur)=>{
        if(depth >= numbers.length){
            cur === target ? answer++ : null;
            return;
        }
        const num = numbers[depth];
        depth++;
        dfs(depth, cur+num);
        dfs(depth, cur-num);
    }
    dfs(0, 0);
    return answer;
}