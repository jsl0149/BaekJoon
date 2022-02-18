const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = input.slice(1);



num.forEach((val, idx)=>{

    const value = val.split(' ');
    
    console.log(`Case #${idx+1}: ${value[0]} + ${parseInt(value[1])} = ${parseInt(value[0]) + parseInt(value[1])}`);

})
