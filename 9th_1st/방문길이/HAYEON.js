// 9주차 1차시
// 방문길이
function solution(dirs) {
    let answer = 0;

    const move = {
        "U": [0, 1],
        "D": [0, -1],
        "R": [1, 0],
        "L": [-1, 0]
    }

    let pos = [0,0];    // 현재위치
    const visited = [];    // 방문한 좌표 목록

    for(let i = 0, len = dirs.length; i < len; i++) {
     
        const move_value = [pos[0] + move[dirs[i]][0], pos[1] + move[dirs[i]][1]];   

        if(move_value[0] > 5 || move_value[0] < -5 || move_value[1] > 5 || move_value[1] < -5) {
            continue; // 좌표를 넘을 경우 카운트 하지 않도록
        }

        const startIndex = (5 + pos[0]) + (5 - pos[1])*11;    // 이동전
        const endIndex = (5 + move_value[0]) + (5 - move_value[1])*11;    // 이동후

        pos = move_value;

          // 방문여부 확인
        const isVisited = visited.find((item) => {
            if( (item[0] === startIndex && item[1] === endIndex)
               || (item[0] === endIndex && item[1] === startIndex) ) {
                return true;
            }
        })

        if( !isVisited ) {
            visited.push([startIndex, endIndex]);
            answer++;
        }
    }

    return answer;
}
