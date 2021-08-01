function solution(w, h) { //최대공약수 활용
    for(var i = 1; i <= Math.min(w, h); i++) { //최대공약수 구하기
        if (Math.min(w, h) % i == 0 && Math.max(w, h) % i == 0) var gcf = i;
    } //가로를 나눴을 때 나머지 0, 세로를 나눴을 때 나머지 0이 나오는 j의 값 ==> 최대공약수
    
    var cantUse = w + h - gcf; //사용할 수 없는 사각형 개수 = 가로길이 + 세로길이 - 최대공약수
    var answer= w * h - cantUse; //답 = 가로*세로 - 사용할 수 없는 사각형 개수
    
    return answer;
}
