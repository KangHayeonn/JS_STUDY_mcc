// 입력된 배열의 요소의 개수 파악하기
// 요소/2 를 통해 선택 수 파악
// 조합 공식 이용해서

// ver 1 ---------------------------------------------------------------------------------------
function solution(nums) {
    var answer = 0;
    var n = nums.length;
    var N = 1;
    var R = 1;
    var List = [];

    // 선택의 수를 구하는 코드
    //var Num = (nums.length);
    // 최대 종류의 리턴 값을 찾을 때까지 반복
    
    //for(var i = 0; )
    for(n ; n > 1; n--){
        N *= n
    }
    for(var r = n/2; r > 1; r--){
        R *= r
    }

    return answer;
}


// ver 2 ---------------------------------------------------------------------------------------
function solution(nums) {
    var answer = 0;
    // 몇개를 선택하는가 구하는 코드
    var C_Num = nums.length/2;
    var kind = [...new Set(nums)].length;
    if(C_Num > kind){
        answer = kind
    }else{
        answer = C_Num
    }
    return answer;
}




// n 마리 중 n/2 허락
// 같은 종류는 같은 번호를 가짐
// nums 는 종류가 담긴 배열
// 가장 많은 종류의 포켓몬을 선택하는 방법을 찾아라
// 종류 번호의 개수를 리턴
// 가장 많은 종류의 포켓몬을 선택하는 방법이 여러개 라도 최댓값 하나만 리턴

