function solution(arr1, arr2) {
    var answer = [];

    for(var i in arr1) {
        var answer2 = [];
        for(var j in arr2[0]) {
            var sum = 0;
            for(var n in arr2) {
                sum += arr1[i][n] * arr2[n][j]; //행렬 공식 => C[i][j] = A[i][1~n]*B[1~n][j], 1~n까지의 합을 sum이라는 변수에 담아주고 sum을 answer2에 푸시함.
            }
            answer2.push(sum);
        }
        answer.push(answer2); //더한 값들로 이루어진 answer2를 answer에 다시 푸시 (2차원 배열의 형태 구현)
    }

    return answer;
}
