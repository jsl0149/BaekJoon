#include <string>
#include <queue>
#include <vector>

using namespace std;

long long solution(int n, vector<int> works) {
    long long answer = 0;
    
    priority_queue<int> pq;
    
    for(int i = 0; i<works.size();i++){
        pq.push(works[i]);
    }
    
    while(n--){
        int cur = pq.top();
        pq.pop();
        if(cur == 0) pq.push(0);
        else pq.push(cur-1);
    }
    
    while(!pq.empty()){
        int cur = pq.top();
        pq.pop();
        answer += cur*cur ;
    }
    
    
    return answer;
}