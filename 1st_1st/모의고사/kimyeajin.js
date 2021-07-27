function solution(answers) {
    var i=0, a=0;
    var num=[0,0,0];
    var ary1=[1,2,3,4,5];
    var ary2=[2,1,2,3,2,4,2,5];
    var ary3=[3,3,1,1,2,2,4,4,5,5];
    var answer = new Array();
    var result;
    
    //var i = answers.length;
    while(i!==answers.length){
        if(answers[i]===ary1[a%5])
            num[0]++;
        if(answers[i]===ary2[a%8])
            num[1]++;
        if(answers[i]===ary3[a%10])
            num[2]++;
        i++;
        a++;
           }
  result=Math.max.apply(null,num);

    if(result===num[0]) answer.push(1);
    if(result===num[1]) answer.push(2);
    if(result===num[2]) answer.push(3);
        
  
    return answer;
}
