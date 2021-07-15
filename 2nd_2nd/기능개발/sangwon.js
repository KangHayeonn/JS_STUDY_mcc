function solution(progresses, speeds) {
    var answer = []; 
    var days = [];
    
    for (var i = 0; i < progresses.length; i ++) {
        var r = (100 - progresses[i]) % speeds[i];
        
        days.push(r == 0 ? parseInt((100 - progresses[i]) / speeds[i]) : parseInt((100 - progresses[i]) / speeds[i] + 1));
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
    }) //forEach말고 splice도 생각해보자
    answer.push(cnt);
    
    return answer;
}
