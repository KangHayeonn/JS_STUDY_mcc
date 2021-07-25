function solution(land) {
    let answer = 0;
   
    for(let i=0; i<land.length-1; i++){
        land[i+1][0] = Math.max(land[i][1], land[i][2], land[i][3]) + land[i+1][0];
        land[i+1][1] = Math.max(land[i][0], land[i][2], land[i][3]) + land[i+1][1];
        land[i+1][2] = Math.max(land[i][0], land[i][1], land[i][3]) + land[i+1][2];
        land[i+1][3] = Math.max(land[i][0], land[i][1], land[i][2]) + land[i+1][3];
        //console.log(land[i+1][0]);
        //console.log(land);
    }
    //answer = Math.max(...land[2]); // 이렇게 입력하지 않고 land[2] 로 입력하면 NaN 값 나옴
    answer = Math.max(...land[land.length-1]); // 반례에서 막혀서 인덱스 값 변경해줌

    
    return answer;
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));
console.log(solution([[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]])); // 다른 테스트케이스 추가
