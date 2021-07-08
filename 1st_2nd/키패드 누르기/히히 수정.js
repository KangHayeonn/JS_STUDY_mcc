function solution(numbers, hand) {
    var answer = [];
    var Num;
    // 입력 받을 숫자를 idx로 하는 좌표 배열을 만든다.
    // 키패드의 *를 0,0으로 가정해 x : 2   y : 3  의 좌표평면을 생각한다.
    var KeyPosition = [[0,0],[-1,3],[0,3],[1,3],[-1,2],[0,2],[1,2],[-1,1],[0,1],[1,1]];
    var LeftHand = [-1,0];
    var RightHand = [1,0];

    for(let Num of numbers)
    {
         var x2 = KeyPosition[Num][0];
         var y2 = KeyPosition[Num][1];

        switch(Num){
                case 1:
                case 4:
                case 7:
                    {
                    answer.push('L');
                    LeftHand.splice(0,2,x2,y2);
                    break;
                    }
                case 3:
                case 6:
                case 9:
                    {
                    answer.push('R');
                        RightHand.splice(0,2,x2,y2);
                    break;
                    }
                case 2:
                case 5:
                case 8:
                case 0:
                {
       
        var L_Distance = Math.sqrt((Math.pow(Math.abs(LeftHand[0]-x2),2)) + (Math.pow(Math.abs(LeftHand[1]-y2),2)));
        var R_Distance = Math.sqrt((Math.pow(Math.abs(RightHand[0]-x2),2)) + (Math.pow(Math.abs(RightHand[1]-y2),2)));

        if(hand === "right")
        {
            if(L_Distance < R_Distance){
                LeftHand.splice(0,2,x2,y2);
                answer.push('L');
            }
            else{
                RightHand.splice(0,2,x2,y2);
                answer.push('R'); 
            }
        }
    
        else
        {
            if(L_Distance > R_Distance){
                 RightHand.splice(0,2,x2,y2);
                 answer.push('R');
            }
            else{
                  LeftHand.splice(0,2,x2,y2);
                  answer.push('L');
            }
        }
    }}
    }
    return answer.join('');
}
