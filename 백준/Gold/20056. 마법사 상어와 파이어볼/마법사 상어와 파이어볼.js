const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N,M,K] = input[0].split(' ').map(Number);

const data = input.slice(1);

let fireball = [];

const dr = [-1,-1,0,1,1,1,0,-1];
const dc = [0,1,1,1,0,-1,-1,-1];

data.forEach((fb)=>{
    const [r,c,m,s,d] = fb.split(' ').map(Number);
    fireball.push([r-1,c-1,m,s,d]);
})

const move = () => {
    const store = new Map();
 
    let idx = 0;

    while(fireball.length !== idx){
        const [r,c,m,s,d] = fireball[idx];

        let nr = (r + dr[d] * s) % N;
        let nc = (c + dc[d] * s) % N;

        if(nr < 0) nr += N;
        if(nc < 0) nc += N; 

        fireball[idx][0] = nr;
        fireball[idx][1] = nc;
        
        if(!store.get(`${nr},${nc}`)) store.set(`${nr},${nc}`, [[m,s,d]]);
            
        else {
            const temp = store.get(`${nr},${nc}`);
            temp.push([m,s,d]);
            store.set(`${nr},${nc}`,temp);
        }
        idx++;
    }

    return store;
}

const divide = (store) => {
    
    const temp = [];

    store.forEach((val,key,obj)=>{
        const [r,c] = key.split(',').map(Number);

        if(val.length >= 2){
            let even = 0;
            let nm = 0;
            let ns = 0;
            val.forEach((val)=>{
                const [m,s,d] = val;
                if(d % 2 === 0) even++;
                nm += m;
                ns += s;
            })

            nm = Math.floor(nm / 5);
            if(nm !== 0){
                ns = Math.floor(ns / val.length);
                if(even === 0 || even === val.length) for(let i = 0; i<=6;i+=2) temp.push([r,c,nm,ns,i]);
                else for(let i = 1; i<=7;i+=2) temp.push([r,c,nm,ns,i]);
            } 
        }
        else temp.push([...[r,c],...val[0]]);
    })

    return temp;

}

for(let i = 0; i<K;i++){
    const str = move();
    const div = divide(str);
    fireball = div;
}

const answer = fireball.reduce((acc,cur)=>{
    return acc + cur[2];
},0)

console.log(answer);