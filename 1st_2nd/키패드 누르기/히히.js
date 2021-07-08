function solution(numbers, hand) {
    var answer = [];
    // 입력 받을 숫자를 idx로 하는 좌표 배열을 만든다.
    // 키패드의 *를 0,0으로 가정해 x : 2   y : 3  의 좌표평면을 생각한다.
    var KeyPosition = [[1,0],[0,3],[1,3],[2,3],[0,2],[1,2],[2,2],[0,1],[1,1],[2,1]];
    var LeftHand = [0,0];
    var RightHand = [2,0];

    for(let i of numbers){
        var x2 = KeyPosition[numbers[i]][0];
        var y2 = KeyPosition[numbers[i]][1];
        var L_Distance = Math.sqrt(Math.pow((LeftHand[0]-x2),2) + Math.pow((LeftHand[1]-y2),2));
        var R_Distance = Math.sqrt(Math.pow((RightHand[0]-x2),2) + Math.pow((RightHand[1]-y2),2));
        
        if(hand == "right"){
            if(L_Distance < R_Distance){
                LeftHand.splice(0,2,x2,y2);
                answer.push("L");
            }else{
                RightHand.splice(0,2,x2,y2);
                answer.push("R");
            }
        }else{
            if(L_Distance > R_Distance){
                RightHand.splice(0,2,x2,y2);
                answer.push("R");
            }else{
                LeftHand.splice(0,2,x2,y2);
                answer.push("L");
            }
        }
    }
    answer.join('');
    return answer;
}




/////////////


    for(var Num = 0; Num < numbers.length; Num++){
        var x2 = KeyPosition[Num][0];
        var y2 = KeyPosition[Num][1];
        var L_Distance = Math.sqrt(Math.pow((LeftHand[0]-x2),2) + Math.pow((LeftHand[1]-y2),2));
        var R_Distance = Math.sqrt(Math.pow((RightHand[0]-x2),2) + Math.pow((RightHand[1]-y2),2));
        
        if(hand == "right"){
            if(L_Distance < R_Distance){
                LeftHand.splice(0,2,x2,y2);
                answer.push("L")
            }else{
                RightHand.splice(0,2,x2,y2);
                answer.push("R")
            }
        }else{
            if(L_Distance > R_Distance){
                RightHand.splice(0,2,x2,y2);
                answer.push("R")
            }else{
                LeftHand.splice(0,2,x2,y2);
                answer.push("L")
            }
        }
    }
    answer.join('');
    return answer;
}
 //Math.pow(밑,지수) = 밑**지수
    //Math.sqrt() = 근호 계산


    // 오른손에서 입력된 위치까지 거리 구하기 
    // 왼손에서 입력된 위치까지 거리 구하기
    // 서로 비교해 짧은 거리에 위치한 값을 옮기기
    // 이동후 손의 위치값 변경하기

    


//0 이상 9 이하
// 매개 변수 손은 "left" or "right"
// 리턴할 때는 L or R

// 각 손가락의 시작은 * # 에서 시작
// 상하좌우로 한칸씩 이동 가능 
// 거리가 같을 경우 평소 손잡이로 해결 
