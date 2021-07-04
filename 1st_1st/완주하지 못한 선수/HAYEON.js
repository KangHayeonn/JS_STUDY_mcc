function solution(participant, completion) {
    var answer = '';
    var i=0
    var j=0
    for(i=0; i<participant.length ; i++){
        for(j=0; j<completion.length; j++){
            if(participant[i]==completion[j]){
                break;
            }
        }
        if(participant[i]!=completion[j]){
            answer = participant[i];
        }
    }
    return answer;
}