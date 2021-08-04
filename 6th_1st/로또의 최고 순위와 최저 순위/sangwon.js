function solution(lottos, win_nums) {
    var answer = [];
    
    var min = lottos.filter(v => win_nums.includes(v)).length; //includes로 겹치는 개수 구함.
    var max = min + lottos.filter(v => v === 0).length; //겹치는 개수 + lottos에서 0의 개수
    
    answer.push(max !== 0 ? 7 - max : 6); //0인 경우 6순위
    answer.push(min !== 0 ? 7 - min : 6); //7에서 개수를 빼주면 순위가 나오게 됨.
    
    return answer;
}
