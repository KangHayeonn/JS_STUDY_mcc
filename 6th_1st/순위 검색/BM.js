/*
    순위 검색 : 두 배열을 입력 받아 조건에 해당하는 개수를 배열로 리턴
    
    작성자 : 강병민
    작성일 : 2021.08.07
    
    방안 : 점수 커트라인으로 사람을 분류하고, 조건에 맞는 사람 수 카운트
*/


function solution(info, query) {
    var answer = [];
    var list = [];
    
    for(var i = 0; i < query.length; i++) {
        list.splice(0);
        var query_N = query[i].replace(/[^0-9]/g,'');
        for(var j = 0; j < info.length; j++) {
            var info_N = info[j].replace(/[^0-9]/g,'');
            if(parseInt(info_N) >= parseInt(query_N)) {
                list.push(info[j].split(" ",4));
            }
        }
        //차집합
        var S_query = query[i].split(" ",7).filter(x => x != "and");
        answer.push(Sol(S_query,list));
        
    //z는 점수에 통과한 사람들을 방문
    // k는 합격자 조건들을 방문

    }    
    return answer;
}


function Sol(S_query, list) {
    var x = 0;
    for(var j = 0 ; j < list.length; j++) {
        for(var k = 0; k < S_query.length; k++) {
            if(S_query[k] != list[j][k] && S_query[k] != '-'){
                list.splice(j,1);
                j--;
                break;
            }
        }
    }
    x = list.length;
    return x;
}
