// 1주차 1차시 
// 가장 큰 수

//ex. numbers = [1,2,3];
/*
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


*/

///////////////////////////////////////////////////////////////////////////////////////////////
// 2021-07-29 변경 

// ver1 : 순열없이 문자열 자체로 푸는 법
// 실패 : 원소를 모두 다 분리해서 내림차순으로 배열하니 34에서 걸림

function solution(numbers){
    var answer = '';
    var list = [];
    
    for(var i of numbers){
        list.push(String(i)); // 배열의 원소를 숫자 - > 문자열
    }

    answer = list.join(''); // 배열-> 문자열
    
    return answer.split('').sort().reverse().join(''); // 문자열을 내림차순

}

console.log(solution([3, 30, 34, 5, 9]));

// ver2 : 순열없이 문자열 자체로 푸는 법
// 문자열 모두를 분리하는 것이 아닌 각각의 문자열을 하나의 배열로 보고 크기를 비교
// 테스트 실패 : 1,2,3,4,5,6 시간초과 ,11


function solution(numbers){
    var list = [];
    
    for(var i of numbers){
        list.push(String(i)); // 배열의 원소를 숫자 - > 문자열
    }

    list.sort().reverse(); // [ '9', '5', '34', '30', '3' ]
    
    //console.log(list);

    for(let i=0; i< list.length-1 ; i++){   // when i=3 일때
        if(list[i]+list[i+1]<list[i+1]+list[i]){ // 303 < 330
            let item = list.splice(i+1,1); // 3을 삭제 list[4]
            list.splice(i, 0, item[0]); // i=3 위치에 3을 넣음
        } 
    }

    //console.log(list);
    
    return list.join(''); // 배열 -> 문자열


}


// ver3 : 반복문을 하나 더 추가한뒤 , j=i+1로 바꿔주고 테스트 케이스를 추가해봄
// [10, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 987654321101000
// 테스트실패 : 1,2,3,5,6 시간초과 , 11 ( 4는 통과 )

function solution(numbers){
    var list = [];
    
    for(var i of numbers){
        list.push(String(i)); // 배열의 원소를 숫자 - > 문자열
    }

    list.sort().reverse(); // [ '9', '5', '34', '30', '3' ]
    
    console.log(list);

    for(let i=0; i< list.length-1 ; i++){   // when i=3 일때
        for(let j=i+1 ; j<list.length ; j++){
            if(list[i]+list[j]<list[j]+list[i]){ // 303 < 330
                let item = list.splice(j,1); // 3을 삭제 list[4]
                list.splice(i, 0, item[0]); // i=3 위치에 3을 넣음
            } 
        }
    }
    console.log(list);
    
    return list.join(''); // 배열 -> 문자열


}

console.log(solution([10, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ver4 : [0, 0, 0, 0] -> "0" 테스트 케이스 추가
// 실패 : 테스트 1,2,3,5,6 시간초과 (11은 통과)

function solution(numbers){
    var answer = '';
    var list = [];
    
    if(numbers.join('')==0) return "0";
    
    list = numbers.map(number=>String(number));
    
    //console.log(list);

    for(let i=0; i< list.length-1 ; i++){   // when i=3 일때
        for(let j=i+1 ; j<list.length ; j++){
            if(list[i]+list[j]<list[j]+list[i]){ // 303 < 330
                let item = list.splice(j,1); // 3을 삭제 list[4]
                list.splice(i, 0, item[0]); // i=3 위치에 3을 넣음
            } 
        }
    }
    //console.log(list);
    
    return list.join(''); // 배열 -> 문자열


}

console.log(solution([10, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// ver5
// 성공 : but, 재귀함수로도 도전해보고싶음

function solution(numbers){
    var list = [];
    if(numbers.join('')==0) return 0;
    list = numbers.map(number=>String(number)).sort((a,b)=>(b+a)-(a+b)).join('');

    return list;
}

console.log(solution([10, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//[10, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//"987654321101000"

//[412, 41]  41241 < 41412
//[303,30]   30330 > 30303

//[0, 0, 0, 0]

// [998,9,999] -> 9999998

