// 2주차 1차시 
// 예산

function solution(d, budget) {
    var answer = 0;
    var sum = 0;

    d.sort((a,b)=> a-b); // 오름차순 정렬
    
    for(var i of d){
        if(sum <= budget){
            sum += i;
            answer = answer +1;
        }
    }
    return answer;
}

// 조건문 순서 문제 : sum 을 나중에 추가할 경우 하나 더 더해짐
// 해결: sum 문장을 if 문 앞으로 빼서 오류를 해결

function solution(d, budget) {
    var answer = 0;
    var sum = 0;
    
    d.sort((a,b)=> a-b); // 오름차순 정렬
    
    for(var i of d){
        sum += i;
        if(sum <= budget){
            answer = answer +1;
        }
    }
    return answer;
}
