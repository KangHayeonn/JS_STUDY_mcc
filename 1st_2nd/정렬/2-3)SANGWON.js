function solution(array, commands) {
    var answer = [];
    for(var i = 0; i < commands.length; i++) {
        //i부터 j까지 자르고 재정렬 후 k번째 숫자 순서대로 삽입
        answer[i] = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b)[commands[i][2]-1];
    }
    return answer;
}
