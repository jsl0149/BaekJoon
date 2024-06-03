function solution(edges) {
    var answer = [];
    const graph = [];
    let start = 0;
    let bar = 0;
    let donut = 0;
    let eight = 0;
    
    edges.forEach(([from, to])=>{
        if(!graph[from]){
            graph[from] = {
                from : [],
                to : [to],
                val : from
            }
        }else graph[from].to.push(to);
        
        if(!graph[to]){
            graph[to] = {
                from : [from],
                to : [],
                val : to
            }
        }
        else graph[to].from.push(from);
    })
    
    graph.shift();
    
    graph.forEach((val)=>{
        const fromLen = val.from.length;
        const toLen = val.to.length;
        
        if(toLen === 0) bar++;
        
        else if(toLen === 2){
            if(fromLen > 0) eight++;
            else start = val;
        }
        
        else if(toLen >= 2) start = val;
    })
    
    donut = start.to.length - eight - bar;
    
    return [start.val, donut, bar, eight];
}