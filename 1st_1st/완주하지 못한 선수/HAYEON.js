// 1주차 1차시
// 완주하지 못한 선수

// 실패
/*
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
*/

//////////////////////////////////////////////////////////////////////////////////////

// 2021-07-29 변경

// ver1 : 실패
// 효율성 테스트 떨어짐
// 완주자 순회하면서 참가자에서 한 명씩 찾는 방법은
// O(n) * O(n) = O(n^2) 만큼 걸림


function solution(participant, completion){
    var answer = '';

    for(let i of participant){
        //console.log(i);
        
        if(completion.includes(i)){
            completion.splice(completion.indexOf(i),1);
        }
        else answer += i;
    }
    return answer;
}

console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));

// ver2 : 성공
// 정렬 후 탐색 (시간복잡도 줄이기 위해)
// 완주자, 참가자 리스트를 각각 정렬한 뒤 비교하는 방법으로 접근하면
// O(n log n) + O(n log n) + O(n) = O(n)

function solution(participant, completion){
    var answer = '';

    participant.sort();
    completion.sort();

    for(let i=0 ; i<participant.length; i++){
        if(participant[i]===completion[i]) continue;
        else {
            answer += participant[i];
            break;
        }
    }
    return answer;
}

console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));
