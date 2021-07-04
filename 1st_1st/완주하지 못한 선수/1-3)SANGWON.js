function solution(participant, completion) {
    var answer = '';
    //참가자와 완주자들의 배열을 아스키코드순으로 재배열
    var par = participant.sort();
    var com = completion.sort();
    
    //아스키코드순으로 재배열된 배열들을 비교
    for(var i = 0; i < par.length; i++) {
        if(par[i] !== com[i]) {
            answer = par[i];
            //재배열시 맞지 않는 다는 것은 중복되거나, 완주자에 들어가지 못했다는 의미
            //따라서 for문을 멈춰준다.
            break;
        }
    }
    return answer;
}