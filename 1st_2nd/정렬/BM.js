function solution(array, commands) {
    var answer = [];
    for(var n = 0; n < commands.length; n++){
        var i = (commands[n][0]) - 1;
        var j = commands[n][1];
        var k = (commands[n][2]) - 1;
        
        var Sol = array.slice(i,j);
        Sol.sort((a,b) => a - b);
       
        answer.push(Sol[k]);
    }
    return answer;
}
