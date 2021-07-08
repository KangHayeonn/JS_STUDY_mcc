function solution(numbers) {
    var i,j;
    var result=[];
    var answer=[];
    var set=[];
   
    
    for(i=0;i<numbers.length-1;i++)
    {
        for(j=1+i;j<numbers.length;j++)
            {
                
                result.push(numbers[i]+numbers[j]);
            }
    }
    
        result.sort(function(a, b){
        return a-b;
    });
     answer =[...new Set(result)];
    
    return answer;
}
