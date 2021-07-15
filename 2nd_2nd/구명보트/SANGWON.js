function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a-b); 
    
    var j = 0;
    for(var i = people.length - 1; j <= i; i--) {
        if(people[i] + people[j] <= limit) { 
            j++;
        } 
        answer++;
    }
    
    return answer;
}
