const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const data = input.slice(1).map(Number);
const heap = new Array(100001);
let heapSize = 0;

const swap = (idx1,idx2) => {
    const temp = heap[idx1];
    heap[idx1] = heap[idx2];
    heap[idx2] = temp; 
}

const upHeap = (data) =>{

    if(heapSize === 0){
        heapSize++;
        heap[1] = data;
        return;  
    }

    heapSize++;
    heap[heapSize] = data;
    let parent = Math.floor(heapSize / 2);
    let curIdx = heapSize;

    while(data > heap[parent]){
        swap(curIdx, parent);
        curIdx = parent;
        parent = Math.floor(parent / 2);
    }

}

const downHeap = () => {

    if(heapSize === 0){
        return 0;
    }

    if(heapSize === 1){
        const value = heap[1];
        heap[1] = -1;
        heapSize--;
        return value;
    }

    const value= heap[1];
    heap[1] = heap[heapSize];
    let curLeft = 2;
    let curRight = 3;
    let curIdx = 1;
    heapSize--;

    while((heap[curLeft] > heap[curIdx] || heap[curRight] > heap[curIdx]) && (curRight <= heapSize || curLeft <= heapSize)){
        let target = 0;

        if(curLeft === heapSize){
            swap(curLeft, curIdx);
            break;
        } 
        
        if(curRight <= heapSize) {
            if(heap[curLeft] > heap[curRight]) target = curLeft;
            else target = curRight;
            swap(curIdx, target);
            curIdx = target;
            curLeft = curIdx * 2;
            curRight = curIdx * 2 + 1;
        }

    }

    return value;

}


let answer = ``;

data.forEach((val)=>{
    if(val === 0) answer += `${downHeap()}\n`;
    else {
        upHeap(val);
    }
})

console.log(answer);