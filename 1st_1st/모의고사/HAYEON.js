function solution(answers) {
    var answer = [];
    
    var student1 = [1, 2, 3, 4, 5];
    var student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var count = [0, 0, 0];
    
    
    for(var i =0; i< answers.length ; i++){
        if(answers[i]==student1[i%5]){
            count[0]++;
        } 
        if(answers[i]==student2[i%8]){
            count[1]++;
        } 
        if(answers[i]==student3[i%10]){
            count[2]++;
        }
    
    }

    var max_count = Math.max(...count);

    for (var j = 0; j<3 ; j++){
        if(count[j] == max_count){
            answer.push(j+1);
        }
    }    
    
    return answer;
}