function solution(n, edge) {
    const node = new Map();
    edge.forEach(([n1,n2])=>{
        node.has(n1)?node.get(n1).push(n2):node.set(n1,[n2]);
        node.has(n2)?node.get(n2).push(n1):node.set(n2,[n1]);
    });

    let answer =0;
    const que = [1];
    while (1) {
        [...que].forEach(q=> {
            que.shift();
            if (node.has(q)) {
                node.get(q).forEach(a=>{
                    if (node.has(a)) que.push(a);
                });
                node.delete(q);
            }
        });
        if (!node.size) return answer;
        answer = node.size;
    }
}