// 2주차 1차시 
// 위장

// (1) clothes 배열에서 의상의 종류별로 key값을 설정해 , 객체를 만듦
// (2) key를 확인하여, 이미 존재하는 key값이면 : value에 1 추가 / 존재하지 않는 key 값이면 : key를 추가
// (3) 옷종류별 경우의수를 곱하고 전체에서 -1 (아무것도 안입은 경우)

// for 문안에 if문 주의 -> 오류뜸
function solution(clothes) {
    var answer = 1;
    var arr = {};
    for(let i of clothes){
        if(arr[i[1]] in arr){ // 이 부분 오류
            arr[i[1]] ++;
        }
        else{
            arr[i[1]] = 1;
        }
    }

    Object.keys(arr).forEach((v)=> answer *= (parseInt(arr[v]))+1);

    answer --;
    return answer;
}

// 수정 1 -> 성공
function solution(clothes) {
    var answer = 1;
    var arr = {};
    for(let i of clothes){
        if(arr[i[1]]){   //성공
            arr[i[1]] ++;
        }
        else{
            arr[i[1]] = 1;
        }
    }

    Object.keys(arr).forEach((v)=> answer *= (parseInt(arr[v]))+1);

    answer --;
    return answer;
}

// 수정 2 -> 성공
function solution(clothes) {
    var answer = 1;
    var arr = {};
    for(let i of clothes){
        if( arr[i[1]] != undefined){ // 성공
            arr[i[1]] ++;
        }
        else{
            arr[i[1]] = 1;
        }
    }

    Object.keys(arr).forEach((v)=> answer *= (parseInt(arr[v]))+1);

    answer --;
    return answer;
}

// 수정 3 -> 성공
function solution(clothes) {
    var answer = 1;
    var arr = {};
    for(let i of clothes){
        if( i[1] in arr){ // 성공
            arr[i[1]] ++;
        }
        else{
            arr[i[1]] = 1;
        }
    }

    Object.keys(arr).forEach((v)=> answer *= (parseInt(arr[v]))+1);

    answer --;
    return answer;
}
