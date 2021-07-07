function solution(numbers) {
    var answer = [];
    //배열 속 서로 다른 인덱스의 두 수를 더하는 코드
    for(var i = 0; i < numbers.length; i++){
        for(var j = i+1; j < numbers.length; j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    //중복 제거
    answer = [...new Set(answer)]
    //정렬
    answer.sort((a,b) => a - b);

    return answer;
}
