function solution(people, limit) {
    var answer = 0;
    var newArr = people.sort((a,b) => b-a);
    
    for(var i = 0, j = newArr.length - 1; i < j; i++) {
        if(newArr[i] + newArr[j] <= limit) {
            j--;
        } 
        answer++;
        
    }
    
    return answer;
}
//미완
