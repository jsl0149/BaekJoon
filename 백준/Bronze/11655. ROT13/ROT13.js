const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer ="";

input.forEach((val)=>{
    for(let i = 0; i<val.length;i++){
        if(65<=val.charCodeAt([i]) && val.charCodeAt([i])<=90){
            
            if(val.charCodeAt([i]) + 13 > 90){
                const shift = (val.charCodeAt([i]) + 13) % 91;
                answer += `${String.fromCodePoint(65 + shift)}`
            }

            else{
                answer += `${String.fromCodePoint(val.charCodeAt([i]) + 13)}`
            }

        }
        
        else if(97<=val.charCodeAt([i]) && val.charCodeAt([i])<=122){
            if(val.charCodeAt([i]) + 13 > 122){
                const shift = (val.charCodeAt([i]) + 13) % 123;
                answer += `${String.fromCodePoint(97 + shift)}`
            }

            else{
                answer += `${String.fromCodePoint(val.charCodeAt([i]) + 13)}`
            }
        }

        else{
            answer += `${val[i]}`;
        }
    }
})

console.log(answer);