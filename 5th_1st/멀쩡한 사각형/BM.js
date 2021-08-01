/*
멀쩡한 사각형 : 가로 길이(W)와 세로 길이(H)를 입력 받아 사용할 수 있는 정사각형의 개수를 리턴하는 문제

작성자 : 강병민
작성일 : 2021.07.31

방안 : 1. 가로 세로의 제한이 있으니 세로 길이를 기본으로 규칙성에 따라 매번 +1을 해가는 방식
       2. (1) 방법에서 수정된 방법으로 기울기에 위치한 x,y값을 찾아 세트의 개수를 구해 곱한다 ... 
        -> 기울기 * W = 정수 가 되는 경우를 찾는다 ! 
       3. 유클리드 호제법 이용해 최대 공약수를 찾고 그 크기를 1과 비교해 계산처리 (선택)

*/

// 1차시도 
function solution(w, h) {
    var answer = 1;
    var gcd = 0;

    while(h >0){
        var i = w;
        w = h;
        h = i%h;
    }
    gcd = w;
    
    if(gcd == 1){
        answer = w * h - (w + h - 1);
    }else{
        answer = w * h - (w + h - gcd);
    }
    return answer;
}
// 문제점 : w,h의 값을 수정해 버려서 이후 answer 계산을 할 때 0을 가지고 계산함.

// ver 2
function solution(w, h) {
    var answer = 1;
    var _gcd = 0;

    _gcd = gcd(w,h);
    
    if(_gcd == 1){
        answer = w * h - (w + h - 1);
    }else{
        answer = w * h - (w + h - _gcd);
    }
    return answer;
}

function gcd(a,b){
    while(b > 0){
        var Num = a;  
        a = b;
        b = Num%b;  
    }
    return a;
}
