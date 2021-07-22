function solution(bridge_length, weight, truck_weights) {
    var answer = 0;var sum=0;
    var time=[];
    for(var i=0;i!==truck_weights.length; i=i){
        if(truck_weights[i]+sum<=weight&&i<bridge_length){
            sum+=truck_weights[i];  
            i++;
            time.push(i);
        }
        if(time[0]===bridge_length.length+1){
            time.splice(0,1);
            sum-=truck_weights[i];
        }
        for(var j=0;j<time.length;j++){ time[j]++;}
    
        answer++;
    }
    return answer;
}//다 몸ㅅ풀었어어엉
