function solution(priorities, location) {
    var answer = 0;
    
    while(priorities.length > 0) {
        var shift = priorities.shift();
        if(priorities.filter(v => v > shift).length > 0) {
            priorities.push(shift);
            location === 0 ? location = priorities.length - 1 : location--;
        } else {
            answer++;
            if(location === 0) {
                break;
            } else {
                location--;
            }
        }  
    }
    
    return answer;
}
