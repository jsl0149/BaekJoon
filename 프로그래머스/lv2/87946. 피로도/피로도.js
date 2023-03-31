function solution(k, dungeons) {

    const answer = [];

    const factorial = (arr, depth, tired) => {

        if(depth === dungeons.length){
            answer.push(depth);
            return;
        }

        else{

            for(let i = 0; i<arr.length; i++){
                const temp = [...arr.slice(0,i), ...arr.slice(i+1)];
                if(tired >= arr[i][0]) factorial(temp, depth+1,tired - arr[i][1]);
                else {
                    answer.push(depth);
                }
            }

        }


    }

    factorial(dungeons, 0, k);

    return Math.max.apply(null, answer);
}