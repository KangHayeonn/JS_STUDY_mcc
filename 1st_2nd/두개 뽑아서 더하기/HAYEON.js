// 1주차 2차시 
// 두 개 뽑아서 더하기


//1차 시도

function solution(numbers){
    var answer = new Set();
    var answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            //answer.push(i+j);
            answer.add(i+j);
        }
    }
    //answer.set();
    answer.sort();
    return answer;
}

//2차 시도
function solution(numbers){
    //var set = new Set();
    var answer_before = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            answer_before.push(numbers[i]+numbers[j]);
            //set.add(numbers[i]+numbers[j]);
        }
    }
    //answer.set();
    var set = new Set(answer_before);
    var answer = [...set];
    answer.sort();
    return answer;
}

//0+0 2+2 7+7 되는 문제점 발생 -> 해결

function solution(numbers){
    var set = new Set();
    //var answer_before = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            // 속도 느림
            /*
            if(i!=j){
                answer_before.push(numbers[i]+numbers[j]);
            }*/

            // 속도 더 빠름
            if(i!=j){
                set.add(numbers[i] + numbers[j]);
            }
        }
    }
    //answer.set();
    //var set = new Set(answer_before);
    var answer = [...set];
    answer.sort();
    return answer;
}

//오름차순 문제 (12, 2, 5, 7, 9) 순으로 나옴

function solution(numbers){
    var set = new Set();
    //var answer_before = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            // 속도 느림
            /*
            if(i!=j){
                answer_before.push(numbers[i]+numbers[j]);
            }*/

            // 속도 더 빠름
            if(i!=j){
                set.add(numbers[i] + numbers[j]);
            }
        }
    }
    //answer.set();
    //var set = new Set(answer_before);
    var answer = [...set];
    answer.sort(function(a,b){
        return a-b;
    });
    return answer;
}

// function 다른 방식으로 작성

function solution(numbers){
    var set = new Set();
    //var answer_before = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            // 속도 느림
            /*
            if(i!=j){
                answer_before.push(numbers[i]+numbers[j]);
            }*/

            // 속도 더 빠름
            if(i!=j){
                set.add(numbers[i] + numbers[j]);
            }
        }
    }
    //answer.set();
    //var set = new Set(answer_before);
    var answer = [...set];
    answer.sort((a,b)=> a-b);
    return answer;
}
