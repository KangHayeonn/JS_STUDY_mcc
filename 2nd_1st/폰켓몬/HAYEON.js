// 2주차 1차시 
// 폰켓몬

// (1) 배열 요소에 따라 숫자가 중복되어 나온 횟수만큼 객체에 추가
// (2) 그리고 뽑아야하는 nums.length/2 만큼 뽑기 -> 이를 배열에 넣음
// (3) set을 써서 위에 중복되는 것들을 지워줌 (폰켓몬 종류 번호의 개수를 구하기 위해)
// (4) 위의 set함수의 길이를 구해 원소의 갯수가 몇개인지 알아보기.

function solution(nums) {
    var answer = 0;
    var num_count = {};
    var length = nums.length;
    var half_l = length/2; 
    var list = [];
    //var count = 0;

    for(let i of nums){
        if(num_count[i] == undefined){   //없으면
            num_count[i] = 1;
        }
        else{                            //있으면
            num_count[i] +=1;
        }
    }

    
    for(let s=0; s<half_l; s++){
        num_count[s % half_l] -= 1;
        //list[s] = (s % half_l);
        if(num_count[s % half_l] == 0){
            s = s+1;
        }
        else{
            list[s] = (s % half_l);
        }
    }

    var set = new Set(list);
    var list_set = [...set];

    answer = list_set.length;

    return answer;
}

// 객체는 인덱스로 불러올 수 가 없는 한계점을 간과함
// key값으로 불러오도록 수정

function solution(nums) {
    var answer = 0;
    var num_count = {};
    var length = nums.length;
    var half_l = length/2; 
    var list = [];
    //var count = 0;

    for(let i of nums){
        if(num_count[i] == undefined){   //없으면
            num_count[i] = 1;
        }
        else{                            //있으면
            num_count[i] +=1;
        }
    }

    
    for(let s in num_count){
        num_count[s] -= 1;
        if(num_count[s] == 0){
            delete num_count[s];
        }
        else{
            list.push(s);
        }
    }

    var set = new Set(list);
    var list_set = [...set];

    answer = list_set.length;

    return answer;
}

// N/2 마리만 뽑아야하는데 객체 nums 의 모든 key를 도는 문제점이 발생
// -> 추가적인 if문을 넣어 N/2 만큼 count를 줌 : 해결

function solution(nums) {
    var answer = 0;
    var num_count = {};
    var list = [];
    var count = 0;

    for(let i of nums){
        if(num_count[i] == undefined){   //없으면
            num_count[i] = 1;
        }
        else{                            //있으면
            num_count[i] +=1;
        }
    }

 
    for(let s in num_count){
        if(count==(nums.length/2)){
            break;
        }
        num_count[s] -= 1;
        if(num_count[s] == 0){
            list.push(s);
            delete num_count[s];
        }
        else{
            list.push(s);
        }
        count+=1;
    }
    

    var set = new Set(list);
    var list_set = [...set];

    answer = list_set.length;

    return answer;
}
