// 5주차 1차시
// 멀쩡한 사각형

// ver1 : 실패
// 접근 잘못함 -> 답은 맞는데
// 테스트 7,9,12,14 빼고 다 실패
/*
function solution(w, h){
    var answer = 1;
    console.log(w);
    console.log(h);
    if(w==h){
        answer = w*h - w;
    }
    else{
        answer = w*h - w*2;
    }
    return answer;
}

console.log(solution(6,6));
*/

// ver2 : 성공
// 1) 공약수가 있는 w,h 일경우 -> (w의 서로소 + h의 서로소 -1) * 최대공약수
// 2) 공약수가 없는 w,h 일경우 
// 3) 가로가 w, 세로가 h인 사각형의 대각선이 거쳐야 할 길은 w+h-1(공통되는 점)
function solution(w,h){

    var answer = 1;
    var gcd = 1; // 최대공약수

    let result = find_gcd(w,h);

    if(result!=1){ 
        gcd = result;
        var w_remainder = w / gcd; // 최대공약수로 나눈 나머지
        var h_remainder = h / gcd;
        answer = w*h - (w_remainder+h_remainder-1)*gcd;
    }
    else answer = w*h - (w+h-1); // 공약수가 없는 경우

    return answer;

}

function find_gcd(a,b){
    var max_value = Math.max(a,b); //12
    var min_value = Math.min(a,b); //8

    if(max_value % min_value == 0){
        return min_value;
    }
    else if(max_value % min_value == 1){
        return 1;
    }
    else return find_gcd(max_value % min_value, min_value);
}

console.log(solution(6,9));
