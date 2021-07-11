function solution(d, budget) {
    var total = 0;
    var answer = d.sort((a, b) => a - b).map(e => total += e).filter(m => m <= budget).length; 
    //오름차순으로 정렬, map함수를 통해 각 요소들을 차례대로 합친 값으로 바꿈, filter함수를 통해 예산보다 작은 금액만 살림
    //map ex) #1 [1,3,6,10,15] #2 [2,4,7,10]
    return answer;
}
