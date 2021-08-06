/*
 로또의 최고 순위와 최저 순위 : 민우의 로또 번호(배열)와 정답(배열)을 입력 받아 최고 순위와 최저 순위를 리턴하는 문제
 
 작성일 : 2021.8.6
 작성자 : 강병민
 
 방안 : 1. 0을 제외하고 교집합을 구한다. 교집합의 수가 최저이고, 교집합 + 0의 수가 최고이다.


*/

// var1 => 방안대로 구현한 코드 / 제대로 작동하나 효율성 및 가독성을 위해 이후 수정 필요



function solution(lottos, win_nums) {
    var answer = [];

    var list = (lottos.filter(x => x === 0)).length;     //0의 개수를 가지고 있음

    var Sol = (lottos.filter(x => win_nums.includes(x))).length;
    
    var Top_Rank = (7 - Sol) - list;
    var Lowest_Rank = (7 - Sol);
    if(Lowest_Rank == 7){
        Lowest_Rank = 6;
    }
    if(Top_Rank == 7){
        Top_Rank = 6;
    }
    

    answer.push(Top_Rank);
    answer.push(Lowest_Rank);
    
    
    return answer;
}


// var2 


// 작성 중 
