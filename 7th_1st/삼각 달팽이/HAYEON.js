// 7주차 1차시
// 삼각 달팽이

// (1) ↙ idx를 +1, +2, +3 부분에 숫자를 1씩 증가해서 넣어줌 (number = 4가 될 때 까지)
// (2) → number가 4가 되면 다음 idx부터 마지막 idx까지 +1씩 number값을 수정해서 넣어줌
// (3) ↖ idx가 2가 될 때까지 n부터 -1씩 idx를 빼주면서 숫자값을 1씩 증가해서 넣어줌
// (4) 시작점 first를 다르게 해서 (1)-(3) 과정을 반복, 만약 해당 배열이 null값이 아니면 방향키를 바꿈

// ver1 : n=6 까지는 무사히 돌아가는데 그 이상부터 empty 값이 생김. 알고리즘에 문제가 있는 것 같음
function solution(n) {
    var answer = [];
    let number = 1;
    let max = n*(n+1)/2;
    let first = 0; // 좌측 대각선의 idx 더하기의 시작 값
    let next = 0;
    let last = n;
    let next1= 0;
    let direction = -1; // -1:↙ , 0:→ , 1:↖
    let idx = 0; 

    while(number <= max){

        switch(direction){
            case -1:
                idx= idx+first+next;
                console.log("idx:",idx," direction1");
                if(answer[idx]!=null){ 
                    direction = direction+1;
                    idx= idx-first-next;
                    idx++;
                    first=1;
                    next++;
                    number--;
                    console.log(idx, "↙ 이미 저장된 값이 있음");
                    break;
                }
                answer[idx] = number;
                console.log("first: ", first, "next:", next, "number: ",number);
                first++;
                console.log("@@@@first: ", first, "next:", next, "number: ",number);
                if(number==n){
                    idx= idx+1; 
                    direction++; 
                    first=1; 
                    next++;
                }
                //number==n ? (idx= idx-number+1, direction++, first=1, next++): direction;
                break;
            case 0:
                console.log("***last: ",last, "next1: " ,next1);
                if(answer[idx]!=null){ // 14 - 5 -1 = 8
                    direction = direction+1;
                    console.log("last: ",last, "idx:",idx);
                    idx = idx -1;
                    number--;
                    console.log(idx, "이미 저장된 값이 있음");
                    break;
                }
                console.log("direction2");
                console.log(idx);
                answer[idx] = number;
                idx++;
                if(idx==max){
                    direction++;
                    idx = max-1;
                    break;
                }
                break;
            case 1:
                
                idx = idx - last + next1;
                console.log("'''''last: ",last, "next1: " ,next1, "idx: ", idx);
                if(answer[idx]!=null){
                    direction = -1;
                    idx= idx+first+next;
                    last = n; 
                    next1++;
                    console.log(idx, "↖ 이미 저장된 값이 있음");
                    console.log("last: ",last, "next1: " ,next);
                    break;
                }
                console.log(idx);
                answer[idx] = number;
                last--;
                console.log("first: ", first, "next:", next);
                idx == 2? (direction=-1, last = n, next1++): direction;
                console.log("잉?", idx);
                console.log("direction3");
                console.log("last: ",last, "next1: " ,next1);
                break;
        }
        number++;
        if(number>max) break;
    }
    return answer;
}

console.log(solution(5));
