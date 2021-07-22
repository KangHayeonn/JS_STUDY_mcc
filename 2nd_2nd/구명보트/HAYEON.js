// 2주차 2차시
// 구명보트


// 몸무게를 내림차순으로 세운 뒤 제일 큰 수와 작은수부터 차례로 더한 경우의 수를 구함
// limit 값을 안넘으면 count +1 해줌

function solution(people, limit) {
    var answer = 0;
    var count = 0;

    people.sort((a,b) => b-a); // 내림차순 정렬


    for(var i = 0; i<=people.length-1 ; i++){
        for(var j=people.length-1; j>i ; j--){
            if(people[i]+people[j] <= limit) continue;
            count++;
        }
    }

    answer = count;

    return answer;
}


// 위의 문제 10초 이상 시간 초과로 실패

function solution(people, limit) {
    var answer = 0;
    var count = 0;

    people.sort((a,b) => b-a); // 내림차순 정렬


    for(var i = 0, j=people.length-1; i<=j ; i++){ 
        if(people[i]+people[j] <= limit) j--;
        count++;   
    }

    answer = count;
    
    return answer;
}
