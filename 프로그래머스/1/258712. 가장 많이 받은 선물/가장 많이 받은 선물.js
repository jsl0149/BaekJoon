function solution(friends, gifts) {
    var answer = 0;
    
    const map = new Map();
    const ans = {};
    const giftPoint = new Map();
    
    friends.forEach((from)=>{
        ans[from] = 0;
        giftPoint.set(from, 0);
        const temp = new Map();
        const list = friends.filter((friend)=>friend !== from);
        list.forEach((to)=>{
            temp.set(to,0);
        })
        map.set(from, temp);
    })
    
    gifts.forEach((val)=>{
        const [from, to] = val.split(' ');
        const cur = map.get(from);
        const target = cur.get(to);
        if(!target) cur.set(to, 1);
        else cur.set(to, target+1);
    });
    
    friends.forEach((from)=>{
        const list = friends.filter((friend)=>friend !== from);
        const storageFrom = map.get(from);
        let give = 0;
        let given = 0;
        for(const [key, value] of storageFrom) give += value;
        list.forEach((to)=>{
            const storageTo = map.get(to);
            given += storageTo.get(from);
        }) 
        giftPoint.set(from, give - given);
    })
    
    friends.forEach((from)=>{
        const list = friends.filter((friend)=>friend !== from);
        const storageFrom = map.get(from);
        
        list.forEach((to)=>{
            const storageTo = map.get(to);
            const fromTo = storageFrom.get(to); 
            const toFrom = storageTo.get(from);
            
            if(fromTo > toFrom) ans[from]++;
            if(fromTo < toFrom) ans[to]++;
            if(fromTo === toFrom){
                const fromGiftPoint = giftPoint.get(from);
                const toGiftPoint = giftPoint.get(to);
                
                if(fromGiftPoint > toGiftPoint) ans[from]++;
                if(fromGiftPoint < toGiftPoint) ans[to]++;
                else;
            }
        })
    })
    
    friends.forEach((target)=>{
        answer = Math.max(Math.floor(ans[target]/2), answer);
    })
 
    
    return answer;
}