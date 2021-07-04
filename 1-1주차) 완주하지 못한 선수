function solution(participant, completion) {
    
    var i=0;
    var result,answer; 
    
    
    while(i!==participant.length){
        
       if(completion.indexOf(participant[i])===-1)
           {
               answer=participant[i];
               break;
           }
       else if(participant.filter(n=>n===participant[i]).length!==completion.filter(n=>n===participant[i]).length)
        {
            answer=participant[i];
            break;
        }
        i++;
    }
         
         
    return answer;
}
