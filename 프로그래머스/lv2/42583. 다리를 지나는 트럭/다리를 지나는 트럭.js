function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    const queue = new Array(bridge_length).fill(0);
    let bridgeSum = 0;
    
    answer++;
    queue.shift();
    bridgeSum += truck_weights[0];
    queue.push(truck_weights.shift());
    
    while(bridgeSum > 0){
        answer++;
    
        bridgeSum -= queue.shift();
        
        if(truck_weights.length > 0 && bridgeSum + truck_weights[0] <= weight){
            bridgeSum += truck_weights[0];
            queue.push(truck_weights.shift());
        }
        else queue.push(0);
      
    }
    
    
    
    return answer;
}