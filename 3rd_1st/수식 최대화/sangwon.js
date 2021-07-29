function solution(expression) {
    var answer = [];
    var potential = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ];
    
    for(var i = 0; i < potential.length; i++) {
        var newArr = expression.split(/(\D)/); //숫자 + 특수문자 + 공백
        for(var j = 0; j < 3; j++) {
            while(newArr.includes(potential[i][j])) {
                var index = newArr.indexOf(potential[i][j]);
                newArr.splice(index-1, 3, eval(newArr.slice(index-1, index+2).join('')));
            }
        }
        answer.push(newArr);
    }
    
    return Math.max(...answer.map(v => Math.abs(v)));
}

