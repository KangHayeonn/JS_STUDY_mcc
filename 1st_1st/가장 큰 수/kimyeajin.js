//해결 못함


function solution(numbers) {
    var i=0,j=0;
    var answer= new Array();
    var result= new Array();
    
    numbers.sort();
 
      while(i!==numbers.length){
         result.push(numbers[numbers.length-i-1]);
         i++;
        }

    i=0;
       while(i!==numbers.length){
          answer+=String(result[i]);
          i++;
        }
    return answer;
}
