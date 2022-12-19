const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const map = new Array(50).fill(0).map(()=>new Array(50).fill(0));
const visited = new Array(50).fill(0).map(()=>new Array(50).fill(false));
const dr = [0,0,1,-1,1,1,-1,-1];
const dc = [1,-1,0,0,1,-1,1,-1]; 
const answer = [];

const dfs = (r, c, row, col) => {

    for(let i = 0; i<8; i++){

        let nr = r + dr[i];
        let nc = c + dc[i];

        if(nr < 0 || nr >= row || nc < 0 || nc >= col){
            continue;
        }

        if(map[nr][nc]=== 1 && !visited[nr][nc]){
         visited[nr][nc] = true;
         dfs(nr,nc, row,col);   
        }

    }

}

for(let i = 0; i<input.length-1;i++){    
    const firstLine = input[i].split(' ').map((val)=>parseInt(val));
    const col = firstLine[0];
    const row = firstLine[1];
    let res = 0;


    for(let j = 0; j<row;j++){
        const temp = input[i+j+1].split(' ').map((val)=>parseInt(val));
        for(let k = 0; k<col;k++){
            map[j][k] = temp[k];
        }
    }

    for(let j = 0; j<row;j++){
        for(let k = 0; k<col;k++){
            if(map[j][k] === 1 && !visited[j][k]){
                visited[j][k] = true;
                dfs(j,k,row,col);
                res++;
            }
        }
    }

    answer.push(res);

    for(let j = 0; j<row;j++){
        for(let k = 0; k<col;k++){
            map[j][k] = 0;
            visited[j][k] = false;
        }
    }

    i = i + row;
}

const str = answer.reduce((acc,cur)=>{
    return `${acc}${cur}\n`
},'')

console.log(str);