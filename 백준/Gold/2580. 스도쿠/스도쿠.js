const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let map = input.map(val=>val.split(' ').map(Number));

const findZero = () => {
    const zeros = [];

    for(let i = 0; i<9;i++){
        for(let j =0; j<9;j++){
            if(map[i][j] === 0) zeros.push([i,j]);
        }
    }
    return zeros;
}

const isPossible = (row, col, value) => {

    //가로 검사
    for(let i = 0; i<9;i++){
        if(map[row][i] === value) return false;
    }

    //세로 검사
 
    for(let i = 0; i<9;i++){
        if(map[i][col] === value) return false;
    }

    //3*3 검사

    const startRow = 3 * Math.floor(row / 3);
    const startCol = 3 * Math.floor(col / 3);

    for(let i = startRow; i<startRow+3;i++){
        for(let j = startCol; j<startCol+3;j++){
            if(map[i][j] === value) return false;
        }
    }

    return true;
}

const dfs = (count) => {
    if(count === zero.length) {
        const answer = map.reduce((acc, cur)=>{
            const temp = cur.join(' ');
            return `${acc}${temp}\n`;
        },'')
        console.log(answer);
        process.exit(0);
    }

    else{
        const zeroR = zero[count][0];
        const zeroC = zero[count][1];
        for(let i = 1; i<=9;i++){
            if(isPossible(zeroR, zeroC, i)){
                map[zeroR][zeroC] = i;
                dfs(count+1);
                map[zeroR][zeroC] = 0;
            }
        }
    }

}

const zero = findZero();
dfs(0);