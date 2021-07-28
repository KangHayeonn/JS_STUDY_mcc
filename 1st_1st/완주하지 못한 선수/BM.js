/*
완주하지 못한 선수 : 참가자와 합격자를 입력 받아 중 완주를 하지 못한 한 선수의 이름을 리턴하는 문제

작성자 : 강병민
작성일 : 2021.07.26

방안 : 1. 참가자 명단과 합격자 명단의 차집합을 이용하는 방법 
       2. 입력 데이터를 정렬하고 참가자 명단에서 합격자 명단만큼 삭제하는 방법

*/

// 테스트는 통과하지만 시험은 통과를 하지 못함 ... 이유는 찾는 중
function solution(participant, completion) {
    var answer = '';

    if(participant.length == [...new Set(participant)].length){
        answer = participant.filter(x => !completion.includes(x));
    }else{
        participant.sort();
        for(var i = 0; i < participant.length; i++){
            if(participant[i] == participant[i+1]){
                answer = [participant[i]];
            }
        }
    }
    return answer[0];
}

