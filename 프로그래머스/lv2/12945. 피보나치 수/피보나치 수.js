function solution(n) {
    var answer = 0;
    const fibonacci = new Array(n+1);
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    for(let i = 2; i<=n;i++) fibonacci[i] = (fibonacci[i-1] + fibonacci[i-2]) % 1234567;

    return fibonacci[n];
}