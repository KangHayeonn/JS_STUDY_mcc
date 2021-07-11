//ver 1
function solution(d, budget) {
    var answer = 0;
    var Sol = 0;
    // 정렬하는 코드
    d.sort((a,b) => a - b);
    // 0번 인덱스부터 순차적으로 더해 Sol에 넣는 코드
    for(var i = 0; Sol <= budget ; i++){
        Sol = Sol + d[i];
        answer++;
    }
    return answer;
}
// 결과 : 두 테스트 중 2번 테스트만 통과


//ver 2 ---------------------------------------------------------------------------------------
function solution(d, budget) {
    var answer = 0;
    var Sol = 0;
    // 정렬하는 코드
    d.sort((a,b) => a - b);
    // 0번 인덱스부터 순차적으로 더해 Sol에 넣는 코드
    for(var i = 0; Sol < budget ; i++){
        Sol = Sol + d[i];
    }
    answer = i ;
    return answer;
}
// 결과 : ver1과 같음
// for문에 조건문 반응이 한박자(?) 늦음을 파악  

//ver 3 ---------------------------------------------------------------------------------------
function solution(d, budget) {
    var answer = 0;
    var Sol = 0;
    // 정렬하는 코드
    d.sort((a,b) => a - b);
    // 0번 인덱스부터 순차적으로 더해 Sol에 넣는 코드
    for(var i = 0; Sol <= budget ; i++){
        Sol += d[i];
        answer++;
    }
    return answer - 1;
}

// 결과에서 한번 뺴주면 해결 !

// d는 신청한 금액이 들어있는 배열 1 이상 100 이하
// 예산은  1 이상 10,000,000 이하
