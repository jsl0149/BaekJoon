
const gcd = (a,b) => {
    
    let n = 0;
    
    while(b!=0){
        n=a%b;
        a=b;
        b=n;
    }
    
    return a;
}

function solution(arrayA, arrayB) {
    var answer = 0;
    
    arrayA.sort();
    arrayB.sort();
    
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    for(let i = 1; i<arrayA.length; i++) gcdA = gcd(Math.max(gcdA,arrayA[i]), Math.min(gcdA,arrayA[i]));
    for(let i = 1; i<arrayB.length; i++) gcdB = gcd(Math.max(gcdB,arrayB[i]), Math.min(gcdB,arrayB[i]));
    
    for(let i = 0; i<arrayB.length; i++){
        if(arrayB[i] % gcdA === 0){
            gcdA = 0;
            break;
        }
    }
    
      for(let i = 0; i<arrayA.length; i++){
        if(arrayA[i] % gcdB === 0){
            gcdB = 0;
            break;
        }
    }
    
    return Math.max(gcdA, gcdB);
}