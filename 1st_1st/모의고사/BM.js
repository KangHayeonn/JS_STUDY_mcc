/*
모의고사 : 3 명의 학생 중 가장 정답률이 높은 학생을 리턴하는 문제

작성자 : 강병민
날짜 : 2021.07.26

방안 : 1. 입력 데이터와 교집합 비교 후 구성 요수의 수로 가장 큰 값을 가진 학생을 리턴하는 방법
       2. 입력 데이터를 하나씩 따와서 비교하는 방법 (선택)

사용 함수 : Math.max(...배열)
*/

function solution(answers) {
    var answer = [];
    var student_1 = [1,2,3,4,5];
    var student_2=[2,1,2,3,2,4,2,5];
    var student_3=[3,3,1,1,2,2,4,4,5,5];
    var correct = [0,0,0];

    // 입력 데이터의 값을 하나씩 읽어와 학생들의 규칙과 비교해 같으면 correct에 카운트하는 for문
    for(var i = 0; i < answers.length; i++){
        if(student_1[i % student_1.length] == answers[i]){
            correct[0]++;
        }
        if(student_2[i % student_2.length] == answers[i]) {
            correct[1]++;
        }
        if(student_3[i % student_3.length] == answers[i]) {
            correct[2]++;
        }
    }

    // correct에서 가장 큰 값을 찾아 그 값과 같은 인덱스 번호(j+1)를 찾아 answer에 추가하는 for문 
    for(var j = 0; j < correct.length; j++){
        if(correct[j] == Math.max(...correct)){
            answer.push(j+1);
        }
    }
    return answer;
}
