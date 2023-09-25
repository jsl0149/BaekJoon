function solution(maps) {
    var answer = 0;
    
    maps = maps.map((val)=>{
        return val.split('');
    })

    const findStart = () => {
        for(let i = 0; i<maps.length;i++){
            for(let j = 0; j<maps[0].length;j++){
                if(maps[i][j] === 'S') return [i,j];
            }
        }
    }
    
    const start = findStart();
    
    console.log(start);
    
    const bfs = (start) =>{
        
        const visited = new Array(maps[0].length).fill(0).map(()=>new Array(maps.length).fill(false));
        const queue = [];
        queue.push([])
        
        
    }
    
    bfs(1);
    
    return answer;
}