function solution(land) {
    var answer = 0;
    
    const R = land.length;
    const C = land[0].length;
    
    let visited = new Array(R).fill(0).map(()=> new Array(C).fill(0));
    
    const oil = new Array(R).fill(0).map(()=>new Array(C).fill(0));
    
    const oilData= new Map();
    
    let oilId = 1;
    
    const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

    let value = 0;
    
    function isValid(x, y) {
    return x >= 0 && x < R && y >= 0 && y < C;
  }

  function bfs(i, j) {
    const queue = [[i, j]];
    visited[i][j] = true;
    let size = 0;
    const columnSet = new Set();

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      oil[x][y] = oilId;
      size++;
      columnSet.add(y);

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (!isValid(nx, ny)) continue;
        if (land[nx][ny] === 1 && !visited[nx][ny]) {
          queue.push([nx, ny]);
         
          visited[nx][ny] = true;
        }
      }
    }
    
    oilData.set(oilId, size);
    
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        oilId++;
      }
    }
  }
  
   for (let i = 0; i < C; i++) {
        const oilIdArray = new Set();

        for (let j = 0; j < R; j++) {
            if (oil[j][i] !== 0) {
                oilIdArray.add(oil[j][i]);
            }
        }

        const totalOil = Array.from(oilIdArray).reduce((acc, cur) => {
            return acc + (oilData.get(cur) || 0);
        }, 0);

        answer = Math.max(totalOil, answer);
    }
  
    
  return answer;
}