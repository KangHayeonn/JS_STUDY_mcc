function solution(people, limit) {
    var answer = 0;
    for(var i=0;i<people.length;i++){
        if(people[i]>limit-40){
            answer++;
            people.splice(i,1);  //같이 탈 수 없는 무게 범위 사람들을 제외시키면서 보트 개수 셈-> 같이 탈 수 있는 사람만 남음
        }
    }
    
    for(var i=0;i<people.length-1;i++){
        for(var j=0;j<people.length-i-1;j++){
            if(limit>=(people[i]+people[(people.length)-1-j])){
                answer++;                                //2명이 하나의 보트 타므로 보트 1만큼 증가
                people.splice(i,1);people.splice(-1,1);  //배열에서 같이타는 사람들 제거=>splice를 하게 되면 배열이 삭제된다. 그러나 i,j는 삭제되지 않은 배열을 기준으로 증가하기 때문에 비교가 제대로 이루어지지않아 오류가 발생하게 된다. 다른 함수를 사용하던지, for문을 다른 것으로 고쳐 사용해야 된다.
                break;
            }
        }
    }
    
   // answer+=people.length;  // 배열에 남은 같이 탈 수 없는 사람들 수만큼 보트 추가
    
    return answer;
}
