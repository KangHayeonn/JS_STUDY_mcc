function solution(answers) {
    var answer = [];
    
    //수포자 1,2,3의 패턴을 넣어준다.
    var st1 = [1,2,3,4,5];
    var st2 = [2,1,2,3,2,4,2,5];
    var st3 = [3,3,1,1,2,2,4,4,5,5];
    
    //filter함수는 조건에 맞는 요소를 새로 반환하는 함수이다.
    //n은 요소의 값, m은 요소의 index값을 의미한다.
    var st_c1 = answers.filter((n, m) => n == st1[m % st1.length]).length;
    var st_c2 = answers.filter((n, m) => n == st2[m % st2.length]).length;
    var st_c3 = answers.filter((n, m) => n == st3[m % st3.length]).length;
    
    //max함수를 통해서 세개 중 가장 많이 맞춘 사람을 선별한다.
    var st_max = Math.max(st_c1, st_c2, st_c3);
    
    //최댓값에 따라 answer에 사람을 push해준다.
    if (st_max == st_c1) answer.push(1);
    if (st_max == st_c2) answer.push(2);
    if (st_max == st_c3) answer.push(3);

    return answer;
}