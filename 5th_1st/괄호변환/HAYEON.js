// 5주차 1차시 (329 line : 성공코드)
// 괄호 변환

// ver1 : 실패
// 1) 올바른 괄호 문자열인지 확인 -> 재귀함수로 올바르지 않는 문자열 v를 따로 뽑아줘야함
// 2) 올바르지 않은 문자열 -> 올바른 괄호 문자열로 바꿔줘야함 (change_blacket)

// "(()())()" , ")("  : 통과
// "()))((()"         : 실패
// 문제 이유 : 올바르지 않은 문자열 뒤에 올바른 괄호 문자열이 나올 경우를 대비해 재귀함수로 탐색해줘야함.
/*
function solution(p){
    var answer = "";
    var count = 0;
    var count2 = 0;
    var arr = ""; // 올바른 괄호 문자열은 그대로 저장
    console.log(p);
    for(let i=0; i<p.length; i++){ // 올바른 괄호 문자열 확인
        if(p[i]=="(") count++;
        else if(p[i]==")") count2++;
        
        if(count2>count) { // 올바른 괄호 문자열이 아닐 경우
            let error = p.substring(i, p.length); // 올바르지 않은 문자열 저장 substring: 해당 인덱스까지.
            //console.log(error);
            answer = change_blacket(error);
            break;
        }
        else if(count2<=count){
            arr += p[i];
        }
    }
    
    console.log(count);
    console.log(arr);
    return arr+answer;
}

function change_blacket(error){
    var answer = "";
    var u = ")))(((";
    var v = "()";
    
    //var first_u = u.charAt(0); // 맨앞글자
    //var last_u = u.charAt(u.length-1); // 맨뒷글자
    var new_error = u.slice(1,-1);
  
    for(let i=0; i<new_error.length; i++){
        if(new_error[i]=="(") {
            new_error = replaceAt(new_error, i, ")");
        }
        else if(new_error[i]==")") {
            new_error = replaceAt(new_error, i, "(");
        }
    }
    answer = "(" + new_error + ")" + v;
    return answer;
}

var replaceAt = function(input, index, character){
    return input.substring(0, index) + character + input.substring(index+character.length);
}

console.log(solution(")))(((()"));
*/

// ver2 : 실패
// 함수 두개 사용
/*
function solution(p){
    var answer = "";
    var arr = ""; // 올바른 괄호 문자열은 그대로 저장

    var new_p = explore(arr,p);
    answer = change_blacket(new_p[1]); 
    
    console.log(count);
    console.log(arr);
    return arr+answer;
}

function explore(arr, p){ // () 순을 찾음 
    var count = 0;
    var count2 = 0;
    let i = 0;
    let error="";
    for( i ; i< p.length; i++){
        if(p[i]=="(") count++;
        else if(p[i]==")") count2++;
        if(count2>count){
            error = p.substring(i, p.length);
            break;
        }
        else if(count2<=count){
            //u = error;
            arr += p[i];
        }
    }
    if(i===p.length) return [v, u];
    return explore2(arr, error);
}

function explore2(arr, error){ // )( 순을 찾음 (u 골라내기 위해)
    var count = 0;
    var count2 = 0;
    let i = 0;
    let u = "";
    let v = "";
    for( i ; i< error.length; i++){
        if(error[i]=="(") count++;
        else if(error[i]==")") count2++;
        if(count2>=count){
            v += error[i];
        }
        else if(count2<count){
            u = error.substring(i, error.length);
            break;
        }
    }
    return explore(v, u);
}

function change_blacket(error){
    var answer = "";
    var u = ")))(((";
    var v = "()";
    
    //var first_u = u.charAt(0); // 맨앞글자
    //var last_u = u.charAt(u.length-1); // 맨뒷글자
    var new_error = u.slice(1,-1);
  
    for(let i=0; i<new_error.length; i++){
        if(new_error[i]=="(") {
            new_error = replaceAt(new_error, i, ")");
        }
        else if(new_error[i]==")") {
            new_error = replaceAt(new_error, i, "(");
        }
    }
    answer = "(" + new_error + ")" + v;
    return answer;
}

var replaceAt = function(input, index, character){
    return input.substring(0, index) + character + input.substring(index+character.length);
}

console.log(solution(")))(((()"));
*/
// ver3 : 실패
// 1,3,5,6,8 만 통과
// 각각의 () 이 순서대로 들어오면 u에 넣어주고
// ) 이게 더 먼저들어오게되면 v에 값을 입력해준다 v가 시작되는 인덱스를 check에 넣는다
// u, check, v를 구한후 v부분을 수정해서 check에 기록된 인덱스에 넣어줘
// 알고리즘을 완성한다
// 테스트케이스 : )()()()( 이거 안돌아감.
/*
function solution(p){ // p: ()))((()
    var after_list = [];

    var new_p = explore(p); // new_p[0]: ()  -> u  , new_p[1]: ))((() -> v
    //answer += new_p[0];
    //answer1 = change_blacket(new_p[1]); 
    console.log("u:",new_p[0]); //u
    console.log("check:",new_p[1]); //check
    console.log("v:",new_p[2]); //v
    //console.log("v:",new_p[2][0]); 

    for(let i of new_p[2]){
        after_list.push(change_blacket(i));
    }
    console.log("a_l:", after_list);
    //change_blacket(new_p[2])

    if(new_p[1].length==0) new_p[0] = after_list.join('') + new_p[0];
    
    for(let j=0 ; j<new_p[1].length; j++){
        new_p[0] = [new_p[0].slice(0,new_p[1][j]), after_list[j], new_p[0].slice(new_p[1][j])].join('');
    }
    console.log(new_p[0]);
    return new_p[0];
}

function explore(p){ // u, v를 찾음 
    var count = 0;
    var count2 = 0;
    var u = "";
    var v = "";
    var before = 0;
    var check = [];
    var list_v = [];
    
    for(let i=0 ; i< p.length; i++){
        if(p[i]=="(") count++;
        else if(p[i]==")") count2++;
        if(count2>count){
            if(before==1) check.push(i);
            //v = p.substring(i, p.length);
            console.log("들어옴");
            v += p[i];
            before =2;
        }
        else if(count2<count){
            if(before==2) list_v.push(v);
            u += p[i];
            before = 1;
        }
        else if(count2==count){
            if(before==1) u += p[i];
            if(before==2) v += p[i];
        }
    }
    if(count2==count){
        if(before==2) list_v.push(v);
    }
    //if(i===p.length) return [v, u];
    return [u, check, list_v]; // u:()() , check: 2 , v:))(( 
}
function change_blacket(error){
    var answer = "";
    var u = error;
    var v = "";
    
    //var first_u = u.charAt(0); // 맨앞글자
    //var last_u = u.charAt(u.length-1); // 맨뒷글자
    var new_error = u.slice(1,-1);
  
    for(let i=0; i<new_error.length; i++){
        if(new_error[i]=="(") {
            new_error = replaceAt(new_error, i, ")");
        }
        else if(new_error[i]==")") {
            new_error = replaceAt(new_error, i, "(");
        }
    }
    answer = "(" + new_error + ")" + v;
    return answer;
}

var replaceAt = function(input, index, character){
    return input.substring(0, index) + character + input.substring(index+character.length);
}

//console.log(solution(")))(((()"));
//console.log(solution("()))((()))()((()"));
//console.log(solution(")("));
//console.log(solution("()))((()"));
//console.log("(()())()");
console.log(solution(")()()()("));
*/

// ver4
// 알고리즘의 새로운 접근
// u : 더이상분리할수없는 최소의 균형잡힌 괄호 문자열
// v : u를 뺀 나머지
// v가 "" 가 될때까지 해당 과정을 반복
// "(" + function(v) + ")" + u의 앞뒤를 빼고 괄호방향을 모두 뒤집은 것
// 1,2,3,5,6,7,8,9,10 통과
/*
function solution(p){
    var answer = "";
    var count = 0;
    var count2 = 0;
    var arr = "";

    for(let i=0; i<p.length; i++){ // 올바른 괄호 문자열 확인
        if(p[i]=="(") count++;
        else if(p[i]==")") count2++;
        
        if(count2>count) { // 올바른 괄호 문자열이 아닐 경우
            let error = p.substring(i, p.length); // 올바르지 않은 문자열 저장 substring: 해당 인덱스까지.
            //console.log(error);
            answer = sort_uv(error);
            break;
        }
        else if(count2<=count){
            arr += p[i];
        }
    }
    return arr + answer;
}

function sort_uv(blacket){
    let count = 0;
    let count2 = 0;
    let u = "";
    let v = "";
    for(let i=0 ; i<blacket.length; i++){
        if(blacket[i]=="(") count++;
        else if(blacket[i]==")") count2++;
        if(count===count2){
            u = blacket.slice(0,i+1);
            v = blacket.slice(i+1);
            console.log(u,v);
            if(v==""){
                return "(" + "" + ")" + change_u(u);
            }
            return "(" + sort_uv(v) + ")" + change_u(u);
        }
    }
   
}

function change_u(u){
    
    var new_u = u.slice(1,-1); // u의 첫번째와 마지막 삭제
  
    for(let i=0; i<new_u.length; i++){
        if(new_u[i]=="(") {
            new_u = replaceAt(new_u, i, ")");
        }
        else if(new_u[i]==")") {
            new_u = replaceAt(new_u, i, "(");
        }
    }
    
    return new_u;
}

var replaceAt = function(input, index, character){
    return input.substring(0, index) + character + input.substring(index+character.length);
}

//console.log(solution("()))((()"));
console.log(solution(")()()()("));
*/

//////////////////////////////////////////////////////////

// ver 5 : 성공 
// 반복문으로 처음 u를 체크하던걸 재귀함수로 통일

function solution(p){
 
    return sort_uv(p);
}

function sort_uv(blacket){
    let count = 0;
    let count2 = 0;
    let u = "";
    let v = "";
    let test = true;
    for(let i=0 ; i<blacket.length; i++){
        
        if(blacket[i]=="(") count++;
        else if(blacket[i]==")") count2++;
        
        if(count2>count) test = false;
        
        if(count2==count){
            if(test==false){
                u = blacket.slice(0,i+1);
                v = blacket.slice(i+1);
                return "(" + sort_uv(v) + ")" + change_u(u);
            }
            else{
                u = blacket.substring(0, i+1);
                v = blacket.substring(i+1, blacket.length);
                return u + sort_uv(v);
                //return "(" + sort_uv(v) + ")" + u;
                //return u + "(" + sort_uv(v) + ")";
            }
        }
    }
    
    if(v==""){
        return "";
    }
}

function change_u(u){
    
    var new_u = u.slice(1,-1); // u의 첫번째와 마지막 삭제
    var change_u = "";
    for(let i=0; i<new_u.length; i++){
        if(new_u[i]=="(") new_u = replaceAt(new_u, i, ")");
        else if(new_u[i]==")") new_u = replaceAt(new_u, i, "(");
    }
    
    return new_u;
}

var replaceAt = function(input, index, character){
    return input.substring(0, index) + character + input.substring(index+character.length);
}

// change_u 함수 이것도 가능
/*
function change_u(u){
    
    var new_u = u.slice(1,-1); // u의 첫번째와 마지막 삭제
    var change_u = "";
    for(let i=0; i<new_u.length; i++){
        if(new_u[i]=="(") change_u += ")";
        else if(new_u[i]==")") change_u += "(";
    }
    
    return change_u;
}
*/
