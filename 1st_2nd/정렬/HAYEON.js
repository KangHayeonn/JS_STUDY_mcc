// 1주차 2차시 
// K번째수

function solution(array, commands) {
    var answer = [];
    var array_after =[];

    for (var number=0; number < commands.length ; number++ ){
        var i = commands[number][0];
        var j = commands[number][1];
        var k = commands[number][2];

        for(var count = i-1; count < j ; count++){
            array_after.push(array[count]);
        }

        array_after.sort((a,b)=>a-b);
        answer.push(array_after[k-1]);
        
    }
    return answer;
}

// 중간에 array_after을 초기화 안시켜주면 중간에 계속 쌓여서 결과물이 중복되서 출력됨
function solution(array, commands) {
    var answer = [];
    var array_after =[];

    for (var number=0; number < commands.length ; number++ ){
        // 이부분 안넣어주면 array 가 초기화가 안됨
        array_after =[]; 
        var i = commands[number][0];
        var j = commands[number][1];
        var k = commands[number][2];

        for(var count = i-1; count < j ; count++){
            array_after.push(array[count]);
        }

        array_after.sort((a,b)=>a-b);
        answer.push(array_after[k-1]);
    }
    return answer;
}
