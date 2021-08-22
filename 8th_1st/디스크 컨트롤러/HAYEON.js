// 8주차 1차시
// 디스크 컨트롤러

// 1. 작업이 요청되는 시점을 비교해서 제일 빠른거 부터 진행
// 2. 1번에서 작업이 끝날 때 그 안에 작업 요청이 있는것은 두가지 다 총 시점 비교
// 3. 1번에서 작업이 끝날 때 그 안에 작업 요청이 없으면 그 이후 제일 빠른거 부터 진행
// 4. 총 요청에서 종료까지 걸린시간에서 작업갯수를 나눈 값의 최솟값을 answer로 출력

// ver1

function solution(jobs) {
    var answer = 0;

    let list = minTime(jobs);

    for(let i of list) answer +=i;
    answer = answer/list.length;

    return answer;
}

function minTime(jobs){
    let worktime = [];
    let min = jobs[0][0];
    let start = 0;
    let end =0;
    let idx =0;
    
    if(jobs.length==0) return worktime;

    for(let i=0; i<jobs.length; i++){
        if(min>=jobs[i][0]){
            min = jobs[i][0];
            idx =i;
        }
        else min = min;
    }

    start = jobs[idx][0];
    end= start + jobs[idx][1];
    worktime.push((end-jobs[idx][0]));
    jobs.splice(idx, 1);
    
    let result = compareValue(jobs, end);
    if(result ==0) return compareTime(jobs, end); //각각 계싼해주는 함수로 ㄱㄱ;
    else if(result==1) minTime(jobs);
}

function compareTime(jobs, start){
    //let start = 0;
    let worktime = [];
    let end =0;
    for(let i=0; i<jobs.length; i++){
        end = start + jobs[i][1];
        worktime.push(end - jobs[i][0]);
    }

    return worktime;
}

function compareValue(jobs, end){

    for(let i=0; i<jobs.length; i++){
        if(end >= jobs[i][0]) return 0;// 해당 i별로 계산 후 비교
        else return 1;
    }
}
console.log(solution([[0, 3], [1, 9], [2, 6]]));
