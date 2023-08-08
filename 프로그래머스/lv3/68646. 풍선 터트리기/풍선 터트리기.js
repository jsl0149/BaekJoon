function solution(a) {
    var answer = 0;
    
    const len = a.length;
    
    const left = new Array(len).fill(0);
    const right = new Array(len).fill(0);
    
    left[0] = a[0];
    right[len-1] = a[len-1];
    
    for(let i = 1; i<len;i++) left[i] = Math.min(left[i-1], a[i]);
    
    for(let i = len-2; i>=0; i--) right[i] = Math.min(right[i+1],a[i]);
    
    return new Set([...left,...right]).size;
}