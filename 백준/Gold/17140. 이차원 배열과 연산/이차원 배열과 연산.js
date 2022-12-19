const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [r,c,k] = input[0].split(' ').map(Number);
const data = input.slice(1);

let maps = [];

data.forEach((val)=>{
    const row = val.split(' ').map(Number);
    maps.push(row);
})

const compare = (a,b) => {

    if(a[1] < b[1]) return a[1] - b[1];

    else if(a[1] === b[1]) return a[0] - b[0];

    else return a[1] - b[1];

}

const rProcess = (map) => {
    let temp = [];

    map.forEach((row)=>{
        const pair = [];
        const count = new Array(101).fill(0);
        row.forEach((val)=>{
            if(val !== 0) count[val]++;
        })
        const redun = row.filter((val,idx,arr)=>arr.indexOf(val) === idx );
        redun.forEach((val)=>{
            if(val !== 0) {
                pair.push([val,count[val]]);
            }
        })
        pair.sort(compare);
        const pairtemp = [];
        pair.forEach((val)=>{
            const [a,b] = val;
            if(a !== 0) pairtemp.push(a,b);
        })
        temp.push(pairtemp);
    })

    let maxRow = 0;

    temp.forEach((val)=>{
        val.length > maxRow ? maxRow = val.length : maxRow;
    })

    temp = temp.map((val)=>{
        while(val.length !== maxRow) val.push(0);
        return val;
    })
    return temp;
}

const cProcess = () => {
    const colum = [];
    for(let j = 0; j<maps[0].length;j++){
        let temp = [];
        for(let i = 0; i<maps.length;i++){
            temp.push(maps[i][j]);
        }
        colum.push(temp);
    }
   
    const temp = rProcess(colum);

    const row = temp[0].length;
    const col = temp.length;

    const abc = new Array(row).fill(0).map(()=>new Array(temp.length).fill(col));

    for(let i = 0; i<row; i++){
        for(let j = 0; j<col; j++){
            abc[i][j] = temp[j][i];
        }
    }
    return abc;
}

const cut = () => {
    if(maps[0].length > 100){
        maps = maps.map((val)=>{
            return val.slice(0,100);
        })
    }

    else if(maps.length > 100){
        maps = maps.slice(0,100);
    }

    else return;
}

let answer = 0;
while(true){

    if(r-1 <= maps.length-1 && c-1 <= maps[0].length){
        if(maps[r-1][c-1] === k) break;
    }

    if(answer > 100) {
        answer = -1;
        break;
    }

    
    if(maps[0].length <= maps.length) maps = rProcess(maps);
    else maps = cProcess();

    cut();
    answer++;
}

console.log(answer);