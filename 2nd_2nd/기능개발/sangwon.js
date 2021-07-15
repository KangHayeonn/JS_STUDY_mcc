function solution(progresses, speeds) {
    var answer = []; 
    var days = [];
    
    for (var i = 0; i < progresses.length; i ++) {
        days.push(parseInt((100 - progresses[i]) / speeds[i]));
    } // 남은 날짜 배열로
    
    var max = 0;
    var cnt = 0;
    days.forEach((v, i) => {
        if(v > max) {
            max = v;
            if(i > 0) {
                answer.push(cnt);
                cnt = 0;
            }
        }
        cnt++;
    })
    answer.push(cnt);
    
    return answer;
}
//테케 11번 X
