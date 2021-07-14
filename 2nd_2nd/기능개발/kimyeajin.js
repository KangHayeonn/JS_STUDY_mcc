function solution(progresses, speeds) {
    var i,count=1;
    var result;
    var day=[];
    var answer = [];
    
    for(i=0;i<progresses.length;i++){
        result=parseInt((100-progresses[i])/speeds[i]);  //각 작업이 며칠의 시간이 걸리는지 알아내서 배열로 저장
        if((100-progresses[i])%speeds[i]===0) day.push(result);     //나머지 0이면 딱 떨어지므로 그대로 대입
        else day.push(result+1);            //나머지 있으면 올림하여 정수 되게 해줌.
    }
    

    for(i=0;i<progresses.length;i++){
        
        if(i===progresses.length-1) 
        {
            answer.push(count);
            break;
        }
        
        if(day[0]<day[count]){
            day.splice(0,count);    //초반에 day.shift 하여 한개만 삭제해서 오류 났었다.
            //day.shift();
            answer.push(count);
            count=1;
        }
        else{
            count++;
        }

    }
    return answer;
}
