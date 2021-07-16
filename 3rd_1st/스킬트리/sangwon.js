function solution(skill, skill_trees) {
    var sk = skill.split(""); //"C","B","D"
    var answer = 0;
    
    for(var i = 0; i < skill_trees.length; i++) {
        //skill_trees를 스킬 하나하나 나눠주고, 그 중 CBD만 추출
        var newStr = skill_trees[i].split("").filter(el => sk.includes(el)).join("");
        //스킬 순서가 동일하다면 카운트 + 1
        if(newStr === skill.substring(0, newStr.length)) {
            answer++;
        }
    }
    return answer;
}
