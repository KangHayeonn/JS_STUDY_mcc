// 4주차 1차시
// H-INDEX


// ver1 : 실패 ( why? 문제 잘못 이해 )
// 오름차순으로 배열 정리
// 해당배열의 갯수를 세고 (홀수일 경우)가운데꺼 출력
// 짝수일 경우도 분류해주고 싶은데 더 작은걸 해줄지 큰걸 해줄지 조건이 없음

function solution(citations) {
    citations.sort((a,b)=> a-b);
    var select = Math.floor(citations.length/2);
    //ceil:올림, floor:내림, round:반올림
    return citations[select];
}

// ver2 : 성공
//인덱스 h라고 가정했을때 h번 인용된 것이 h개 이상이어야함.
// 내림차순으로 배열정리한 뒤
// 인덱스와 요소을 비교

function solution(citations){
    var answer = 0;
    citations.sort((a,b)=>b-a);
    for(let i of citations){
        if(i<=citations.indexOf(i)) {
            answer= citations.indexOf(i);
            break;
        }
            else if(i>citations.indexOf(i)) answer = citations.indexOf(i)+1;
            // 이 부분 없으면 테스트 9번 미통과
            // 이유 : 숫자의 갯수보다도 큰 경우, [22,42] 인경우 2가 나와야함
    }
    return answer;
}
