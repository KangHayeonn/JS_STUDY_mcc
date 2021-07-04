function solution(numbers) {
    var answer = numbers
    .map((numbers) => numbers.toString()) //각 정수들을 문자열로 바꾸기
    .sort((a, b) => (b+a) - (a+b)) // 0보다 크다면 b+a반환, 0보다 작다면 a+b 반환 -> 붙였을 때 가장 큰 수가 되도록
    .join(''); //합쳐주기
    
    //numbers에 0밖에 없으면 0반환
    if (answer[0] == "0") {
        return "0";
    }

    return answer;
}