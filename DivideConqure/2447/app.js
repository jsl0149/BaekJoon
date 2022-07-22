const fs = require('fs');
const { stripVTControlCharacters } = require('util');
const filePath = process.platform === 'linux' ?  "/dev/stdin" : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const arr = new Array(N).fill(0).map(()=> new Array(N));

const solution = (n) => {

    if(n==1) return ['*'];

        const stars = solution(n/3); // ['*']
        const L =[];
    
        for(let i =0; i<stars.length;i++){
            let starTemp = '';
            for(let j = 0; j<3;j++){
                starTemp += `${stars[i]}`; // ['***']
            }
            L.push(starTemp); 
        }
        
        for(let i =0; i<stars.length;i++){
            let starTemp = `${stars[i]}`;
            for(let j = 0; j<n/3;j++){
                starTemp += ` `;
            }
            starTemp += `${stars[i]}`;
            L.push(starTemp);
        }
    
        for(let i =0; i<stars.length;i++){
            let starTemp = '';
            for(let j = 0; j<3;j++){
                starTemp += `${stars[i]}`;
            }
            L.push(starTemp);
        }
    

       return L;
}

console.log(solution(N).join('\n'));