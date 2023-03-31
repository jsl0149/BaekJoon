function adventure(k, dungeons) {
    let count = 0
    for (let i = 0; i < dungeons.length; i++) {
        let [need, con] = dungeons[i]
        if (k >= need) {
            k -= con
            count++
        }
    }
    return count
}
function solution(k, dungeons) {
    var answer = 0;
    const getPermutations= function (arr, len) {
        const results = [];
        if (len === 1) return arr.map((el) => [el]);

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
            const permutations = getPermutations(rest, len - 1);
            const attached = permutations.map((el) => [fixed, ...el]);
            results.push(...attached);
        });
        return results;
    }
    let candi = getPermutations(dungeons, dungeons.length)
    for (let i = 0; i < candi.length; i++) {
        let count = adventure(k, candi[i])
        if (count === dungeons.length) return count
        if (count > answer) {
            answer = count
        }
    }
    return answer;
}
