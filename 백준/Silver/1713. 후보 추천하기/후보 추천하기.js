const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const photo = parseInt(input[0]);
const exist = new Array(1000).fill(0);
const recommend = input[2].split(' ').map(Number);
let arr = [];

const findErase = () => {
    let minNomi = 55555;
    let target = -1;
    arr.forEach((val)=>{
        if(exist[val] < minNomi) {
            minNomi = exist[val];
            target = val;
        }
    })
    exist[target] = 0;
    arr = arr.filter(val=>val!==target);

}

recommend.forEach((nomi)=>{
    if(exist[nomi]) exist[nomi]++;   

    else if(!exist[nomi] && arr.length < photo){
        exist[nomi]++;
        arr.push(nomi);
    }

    else{
        findErase();
        exist[nomi]++;
        arr.push(nomi);
    }
})
arr.sort((a,b)=>a-b);

const answer = arr.reduce((acc,cur)=>{
    return `${acc}${cur} `
},'')

console.log(answer);