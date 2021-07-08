function solution(array, commands) {
    var answer = [];
    var result=[];
    var vacu=[];
    var i,start,end,index;
    
    for(i=0;i<commands.length;i++)
        {
            result=array;
    
            start=commands[i][0];
            end=commands[i][1];
            index=commands[i][2];
    
             vacu=(result.slice(start-1,end)).sort(function(a,b){
                  return a-b;
                   });
    
            answer.push(vacu[index-1]);
            
        }
    
    
    
    return answer;
}
