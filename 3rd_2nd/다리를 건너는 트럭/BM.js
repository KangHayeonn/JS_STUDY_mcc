// ver 1  -> 2칸으로 이동하는 경우의 해결 방법
function solution(bridge_length, weight, truck_weights) {
    var answer = 1;
    truck_weights.sort((a,b) => a - b);
    for(var i = 0; i < truck_weights.length; i++){
        if(truck_weights[i] + truck_weights[i+1] < weight && (i+1) < truck_weights.length){
            answer++
        }else{
            answer = answer + 2;
        }
    } 
    return answer;
}
/*
7456 -> 4567

4_ (1)      준비 (+1을 하고 시작하는 이유)
54 (+1)   
5_ (+2)
6_ (+2)
7_ (+2)

*/
//문제점 : 두 칸보다 더 많아지면 계산할 수 없음
// 비교를 3개의 인덱스의 합으로 하는 방안 ?
/*  13556
__1        시작하기 전에 bridge_le~ 을 더 해두는 방법
531        
_53
5_5
_5_
__5
6__
_6_
__6
*/
