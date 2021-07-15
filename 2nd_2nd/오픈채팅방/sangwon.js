function solution(record) {
    var answer = [];

    var newArr = record.map(el => el.split(" ")); //띄어쓰기 기준으로 다 잘라서 2차원 배열의 형태로 변환

    let nameCheck = {}; //닉네임 변경 처리
    for(var i = 0; i < newArr.length; i++) {
        if(newArr[i].length === 3) { //Change, Enter인 경우 length가 3임
            nameCheck[newArr[i][1]] = newArr[i][2];
        }
    }

    //출력
    for(var i = 0; i < newArr.length; i++) {
        if(newArr[i][0] === "Enter") {
            answer.push(nameCheck[newArr[i][1]] + "님이 들어왔습니다.");
        } else if(newArr[i][0] === "Leave") {
            answer.push(nameCheck[newArr[i][1]] + "님이 나갔습니다.");
        }
    }

    return answer;
}
