function solution(n, stations, w) {
    var answer = 0;

    const dist = [];

    let prevStart = stations[0] - w;

    let prevEnd = stations[0] + w;

    stations.push(n+1+w);

    dist.push(prevStart - 1);

    for(let i = 1; i<stations.length;i++){
        const curStart = stations[i] - w;
        const space = curStart - prevEnd - 1;
        prevEnd = stations[i] + w;
        space > 0 ? dist.push(space) : null
    }

    dist.forEach((val)=>{
        if(val % (2*w+1) === 0) answer += (val / (2*w+1));
        else answer += Math.floor(val/(2*w+1))+1;
    })

    return answer;
}