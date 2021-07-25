function solution(citations) {
    var answer = [];
    citations.sort((a,b) => a-b); 
    if(citations[citations.length - 1] === 0) {
        return 0;
    } else {
        for(var i = 0; i <= citations[citations.length - 1]; i++) {
            var cnt = citations.filter((v) => v >= i).length;
            var not_cnt_Arr = citations.filter((v) => v < i);
        
            if(cnt >= i && Math.max(...not_cnt_Arr) <= i) answer.push(i);
        }
        return Math.max(...answer);
    }
}
