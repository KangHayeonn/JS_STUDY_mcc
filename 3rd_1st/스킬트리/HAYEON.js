// 3주차 1차시
// 스킬트리

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
