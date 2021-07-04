// 1주차 1차시 
// 가장 큰 수

//ex. numbers = [1,2,3];

function solution(numbers) {
    var answer = '';

    // 순열 이용? 

    var list1 = []; // list1 max 값 추출전
    var max_value = 0;
    var chr;
    var arr_number;

    for(var i= 0 ; i < numbers.length ; i++)
    {
        chr = numbers.splice(i,1)[0]; // 1 -> numbers.splice(0,1); == [1]

        for(var j=0; j < numbers.length; j++){
            numbers.splice(j,0,chr);
            arr_number = numbers.join('');
            list1.push(arr_number);
        }

    }

    var set = new Set(list1);
    var list_set = [...set];  // set 을 배열로 변환

    max_value = Math.max(...list_set);

    answer = String(max_value);

    return answer;
}




