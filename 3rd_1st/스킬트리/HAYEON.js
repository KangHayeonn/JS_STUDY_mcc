// 3주차 1차시
// 스킬트리

/*
// 시도 : 테스트 12 빼고 다 실패

// 배열 내 원소에서 CBD를 제외한 모든 문자를 지운 새로운 원소를 만듦
// 해당 원소가 CBD 에 포함되는지 확인 
// 포함되면 answer ++

function solution(skill, skill_trees) {
    var answer = 0;
    var new_st = [];
    
    for(let str of skill_trees){
        new_st = str.replace(/[^\CBD]+/g,"");
        console.log(new_st);
        if(skill.includes(new_st)) {

            if(!new_st.includes('C')) continue; // 이거 없으면 BD 에서 count 됨   
            
            answer++;
        } 
    }
    return answer;
}

console.log(solution("CBD",["BACDE", "CBADF", "AECB", "BDA", "CDA"]));

// replace는 문자열 치환 : str.replace(/banana/g,'tomato'); 
// 바나나를 토마토로 치환 (정규식일때 : '/' 로 감싸줌)
// 대소문자 구분없이 치환 : i , 전체 치환 : g
*/

////////////////////////////////////////////////////////////////////////////////////////////////

// 2021-07-29 변경

// ver1
// test 1,2,4,12 통과

function solution(skill, skill_trees){
    var answer = 0;
    //var new_st = '';
    var list = [];

    /*
    for(let str of skill_trees){
        new_st = str.replace(/[^\CBD]+/g,"");
        list.push(new_st);
    }
    */
    for(let str of skill_trees){
        var new_st = '';
        for(let i=0; i<str.length; i++){
            if(skill.includes(str[i])){
                new_st += str[i];
            }
        }
        list.push(new_st);
    }

    
    for(let i=0 ; i<list.length; i++){
        if(list[i][0]==skill[0]){
            if(list[i][1]==skill[1]){
                answer++;
            }
        }
        else continue;
    }
    
    console.log(list);
    return answer;
}

// ver2 : 성공
// 재귀함수 이용 : 비교탐색

function solution(skill, skill_trees){
    var answer = 0;
    //var new_st = '';
    var list = [];

    /*
    for(let str of skill_trees){
        new_st = str.replace(/[^\CBD]+/g,"");
        list.push(new_st);
    }
    */
    for(let str of skill_trees){
        var new_st = '';
        for(let i=0; i<str.length; i++){
            if(skill.includes(str[i])){
                new_st += str[i];
            }
        }
        list.push(new_st);
    }

    
    for(let i=0 ; i<list.length; i++){
        /*if(list[i][0]==skill[0]){
            if(list[i][1]==skill[1]){
                answer++;
            }
        }
        else continue;*/
        answer += f_if(list[i], skill, 0);
    }
    //console.log("skill길이:", skill.length-1);
    
    //console.log(list);
    return answer;
}

function f_if(list, skill, count){
    //console.log(list);
    //console.log(skill.length);
    
    if(count<list.length){
        if(list[count]==skill[count]){
            //console.log("일단 들어옴");
            //count++;
            //console.log(count);
            //return 3;
            return f_if(list, skill, count+1); //count++ 증감연산을 하고 대입을 안함. //return을 써줘야함.(stack처럼)
                //answer++;
        }
        else {
            //console.log("안들어옴")
            return 0;
        }
    }
    //if(count>=skill.length-1) return answer;
    else return 1;
}

console.log(solution("CBD",["BACDE", "CBADF", "AECB", "BDA", "CBA", "CAH"]));
