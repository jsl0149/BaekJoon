const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const card = input[1].split(' ').map(Number);
const guess = input[3].split(' ').map(Number);

card.sort((a,b)=> a-b );

const binarySearch = (min, max, target) => {

    if(min > max) return false;

    const mid = Math.floor((min + max) / 2);

    if(card[mid] === target) return true;

    else if(target < card[mid]) {
        return binarySearch(min, mid-1, target);
    }

    else{
        return binarySearch(mid+1, max, target);
    }
}

const answer = guess.reduce((acc, cur)=>{
    if(binarySearch(0,card.length-1, cur)) return acc += `1 `;
    else return acc += '0 '; 
}, '')

console.log(answer);