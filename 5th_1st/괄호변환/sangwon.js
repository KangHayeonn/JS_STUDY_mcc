//try1
/*function solution(p) {
    var answer = '';
    var newArr = p.split('');
    var k = u(newArr);
    var kk = checkCor(k);
    return kk.join('');
}

function checkCor(arr) {
    if(!check(arr[0])) {
        arr[0].pop();
        arr[0].shift();
        arr[0] = arr[0].map(v => v==")"?"(":")");
        arr[0].unshift("(");
        arr[0].push(")");
        if(!check(arr[1]) && arr[1] != "") {
            var kkk = u(arr[1]);
        
            arr[1] = checkCor(kkk).flat();
        }
    } else if(check(arr[0]) && arr[1] != ""){
        var kkk = u(arr[1]);
        
        arr[1] = checkCor(kkk).flat();
    } else if(arr[1] === "") {
        arr[1] = arr[1].join('');
    }
    return arr.flat();
}

function u(arr) {
    var count=0;
    var u = [];
    while(arr.length != 0) {
        if(arr[0] === "(") {
            count++;
            u.push(arr[0]);
            arr.shift()
        } else if(arr[0] === ")") {
            count--;
            u.push(arr[0]);
            arr.shift()
        }
        if(count === 0 && u.length > 0) {
            break;
        }
    }
    var res = [u, arr]
    return res;
}

var left = 0;
var right = 0;

function check(s) {
    var arr1 = s; 
    var zero = 0; 
    for(var i in arr1) { 
        if(arr1[i] === '(') {
            zero += 1;
            left++;
        }
        else if(arr1[i] === ')') {
            zero -= 1;
            right++;
        }
        
        if(zero < 0) return false; 
    } 
    return zero === 0; 
}

//try2
function solution(p) {
    var arr = p.split(''); 
    var u = []
    //균형잡힌 문자열
    var zero = 0; 
    while(arr.length != 0) {
        if(arr[0] === "(") {
            zero++;
            u.push(arr[0]);
            arr.shift();
        } else if(arr[0] === ")") {
            zero--;
            u.push(arr[0]);
            arr.shift();
        }
        if(zero === 0 && u.length > 0) {
            break;
        }
    }
    var nullString = [];
    if(check(u)) {
        solution(arr.join(''));
        nullString.push(u);
        nullString.push(arr);
    } else if(!check(u)) {
        nullString.push("(");
        if(!check(arr)) {
            solution(arr.join(''));
        }
        nullString.push(arr);
        nullString.push(")");
        u.shift();
        u.pop();
        u = u.map(v => v === "(" ? ")" : "(");
        nullString.push(u);
    }
    return nullString;
}

function check(array) {
    var newArr = array; 
    var zero = 0; 
    for(var i in newArr) { 
        if(newArr[i] === '(') zero += 1; 
        else if(newArr[i] === ')') zero -= 1; 
        if(zero < 0) return false; 
    } 
    return zero === 0;
} */

//maximum call stack size exceeded.. ㅠㅠ

//try3
function solution(p) {
    if(typeof(p) === "string") var arr = p.split(''); 
    else if(typeof(p) === "object") var arr = p; //재귀함수 판별
    var u = []
    //균형잡힌 문자열
    var count = 0; 
    //2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
    while(arr.length != 0) {
        if(arr[0] === "(") {
            count++;
            u.push(arr[0]);
            arr.shift();
        } else if(arr[0] === ")") {
            count--;
            u.push(arr[0]);
            arr.shift();
        }
        if(count === 0 && u.length > 0) {
            break;
        }
    } // (, ) 짝수가 되도록 => u => u, v => arr

    var nullString = []; 
    //3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
    if(check(u)) {
        if(!check(arr) && arr != "") {
            arr = solution(arr);
        }
        // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
        nullString.push(u);
        nullString.push(arr);
    
    //4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
    } else if(!check(u)) {
        //4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
        nullString.push("(");
        //4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
        if(!check(arr) && arr != "") {
            arr = solution(arr);
        }
        nullString.push(arr);
        //4-3. ')'를 다시 붙입니다. 
        nullString.push(")");
        //4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
        u.shift();
        u.pop();
        u = u.map(v => v === "(" ? ")" : "(");
        //4-5. 생성된 문자열을 반환합니다.
        nullString.push(u);
    } 
    return nullString.flat().join('');
}

function check(array) { //올바른 괄호 문자열인지 판별하는 함수
    var newArr = array; 
    var zero = 0; 
    for(var i in newArr) { 
        if(newArr[i] === '(') zero += 1; 
        else if(newArr[i] === ')') zero -= 1; 
        if(zero < 0) return false; 
    } 
    return zero === 0;
}

//성공했다! 근데 너무 조잡함..
