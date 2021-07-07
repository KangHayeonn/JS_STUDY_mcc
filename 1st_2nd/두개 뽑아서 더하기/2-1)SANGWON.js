function solution(numbers) {
    //2차원 배열 생성
    var arr = new Array(numbers.length);
    for (var l = 0; l < arr.length; l++) {
        arr[l] = new Array(numbers.length);
    }
    
    //더한 값 2차원 배열에 삽입
    for(var i = 0; i < numbers.length; i++) {
        for(var j = 0;  j < numbers.length; j++) {
            if(i != j) {
                arr[i][j] = numbers[i] + numbers[j];
            }
        }
    }
    
    var uniq_arr = [];
    //2차원 배열을 1차원 배열로 합치고, 중복된 값 제거
    arr.flat().forEach((element) => {
      if (!uniq_arr.includes(element)) {
        uniq_arr.push(element);
      }
    });
    
    //오름차순으로 재배열
    return uniq_arr.sort((a,b) => a - b);
}
