// 6주차 1차시
// 로또의 최고 순위와 최저 순위

// ver1 : 성공
// (1) win_nums와 lottos의 원소의 일치하는 갯수를 찾는다.
// (2) lottos에서 0의 갯수를 찾는다.
// (3) (2)에서 나온 갯수를 (1)에서 나온 갯수에 더해준다.
// (4) (1)의 결과와 (3)의 결과에 맞는 순위를 배열에 넣어 출력해준다.

function solution(lottos, win_nums) {
    var answer = [];
    let count = 0;
    let count_0 = 0;

    for(let i of lottos){
        if(win_nums.includes(i)) count++;
        if(i==0) count_0 ++;
    }

    let max = count+count_0;
    let min = count;

    if(max==min){
        switch(max){
            case 6: answer = [1,1]; break;
            case 5: answer = [2,2]; break;
            case 4: answer = [3,3]; break;
            case 3: answer = [4,4]; break;
            case 2: answer = [5,5]; break;
            default: answer = [6,6];
        }
    }

    else{
        switch(max){
            case 6: answer.push(1); break;
            case 5: answer.push(2); break;
            case 4: answer.push(3); break;
            case 3: answer.push(4); break;
            case 2: answer.push(5); break;
            default: answer.push(6);
        }

        switch(min){
            case 6: answer.push(1); break;
            case 5: answer.push(2); break;
            case 4: answer.push(3); break;
            case 3: answer.push(4); break;
            case 2: answer.push(5); break;
            default: answer.push(6);
        }
    }
    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]));
