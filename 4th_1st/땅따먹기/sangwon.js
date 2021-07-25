function solution(land) {
    for(var i = 1; i < land.length; i++) { //2행부터 3행까지
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);//첫번째 열 //10 -> 16
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);//두번째 열 //11 -> 15
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);//세번째 열 //12 -> 13
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);//네번째 열 //11 -> 13
    }
    return Math.max(...land[land.length-1]); //16 15 13 13 중 최댓값
}
