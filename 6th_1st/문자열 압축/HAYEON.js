// 6주차 1차시
// 문자열 압축

// 문자열 길이 1부터 전체길이의 반만큼 까지 반복문을 써서 묶은 뒤
// 해당 값이 반복되는것이 뒤로 몇개가 있는지 count한다
// 위의 count한 값을 묶은 문자열앞에 써준 뒤 동일한 묶임 문자열 나머지는 모두 지운다.
// 그래서 반복문에서 제일 길이가 짧은 최솟값을 출력해준다.


// ver1 : 테스트 5 실패

function solution(s) {
    var answer = 0;
    var list = [];
    var count = 0;
    var check = false;
    var str_length =[];
    var remainder = "";

    for(let i=1; i<=s.length/2; i++ ){

        for(let j=0; j<s.length; j=j+i){
            var str = s.substring(j,j+i);
            if(str.length ==i) list.push(str); // 자르는 원소 개수와 맞아떨어질때
            else remainder += str;  // 자르는 원소 개수와 다를때
        }
        
        for(let k=0; k<list.length; k++){
            
            if(list[k]==list[k+1]){
                count++;
                check = true;
            }
            else{
                if(check==true){
                    list.splice(k-(count),count,String(count+1));
                    //list.splice(k-(count-1), 0, list[k]);
                    check=false;
                    k = k-(count-1);
                    count =0;
                }
            }
        }
       
        str_length.push(list.join('').length + remainder.length);
        list = [];
        remainder = [];
    }
    
    return Math.min.apply(null, str_length);
}

console.log(solution("xababcdcdababcdcd"));


// ver2 : 성공
// s가 "a" 와 같이 길이가 1일때, answer에 1을 출력시켜줘야함.

function solution(s) {
    var answer = 0;
    var list = [];
    var count = 0;
    var check = false;
    var str_length =[];
    var remainder = "";

    if (s.length==1) return 1;

    for(let i=1; i<=s.length/2; i++ ){

        for(let j=0; j<s.length; j=j+i){
            var str = s.substring(j,j+i);
            if(str.length ==i) list.push(str); // 자르는 원소 개수와 맞아떨어질때
            else remainder += str;  // 자르는 원소 개수와 다를때
        }
        
        for(let k=0; k<list.length; k++){
            
            if(list[k]==list[k+1]){
                count++;
                check = true;
            }
            else{
                if(check==true){
                    list.splice(k-(count),count,String(count+1));
                    //list.splice(k-(count-1), 0, list[k]);
                    check=false;
                    k = k-(count-1);
                    count =0;
                }
            }
        }
       
        str_length.push(list.join('').length + remainder.length);
        list = [];
        remainder = [];
    }
    
    return Math.min.apply(null, str_length);
}

console.log(solution("a"));
