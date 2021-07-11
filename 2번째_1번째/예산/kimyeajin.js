function solution(d, budget) {
    var sum=0;
    var i;
    
    d.sort((a,b) => a - b);
    
    for(i=0;i<d.length;i++){
        sum+=d[i];
        if(sum>budget)break;
    }
    
    var answer = i;
    return answer;
}
