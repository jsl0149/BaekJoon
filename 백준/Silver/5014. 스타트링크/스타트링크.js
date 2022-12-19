const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const visited = new Array(1000001).fill(false);
const [F, S, G, U, D] = input[0].split(' ').map(Number);

const bfs = () => {

    const queue = [];
    queue.push([S, 0]);
   
    while(queue.length){
        const [curStair, count] = queue.shift();

        if(curStair === G) return count;

        if(visited[curStair]) continue;

        visited[curStair] = true;

        const curUp = curStair + U;
        const curDn = curStair - D;
        if(curUp <= F) queue.push([curUp, count+1]);
        if(curDn > 0) queue.push([curDn, count+1]);
    }

    return `use the stairs`
 
}

console.log(bfs());