// 7주차 1차시
// 프린터

// 문제 설명에 따라 순서대로 코드 작성
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.

// ver1 : 테스트케이스 1만 성공
function solution(priorities, location) {
    var answer = 0;
    let convert = [];
    let output = [];
    const input = {};
    let result = '';
    let size = priorities.length;
    let count = 0;
   
    for(let idx = 0 ; idx<size ; idx++){
        input[idx] = priorities[idx];
        convert[idx] = String(idx);
    }
    
    console.log("input: ", input);
    console.log("convert: ", convert);
    for(let i=0 ; i < size; i++){
        let item = convert.shift();
        //for(let j=1; j<priorities.length; j++){
        for(let key in input){
            console.log("count:" , count);
            //if(item < priorities[j]) {
                console.log("item222:", input[item]);
                console.log("key2222:", input[key]);
            if(input[item] < input[key]) {
                console.log("item:", item);
                console.log("key:", key);
                convert.push(item); // 1 3 2 2  -> 2 2 1
                //item = priorities[j];
                result = key; // key'2' -> key'3'
                convert.splice(convert.indexOf(key),1); // 1 2 2
                delete input[key]; 
                console.log(input);
                
                /*for(let k=0; k<size;k++){
                    if(input[String(k)]==item){
                        console.log("키값찾음", String(j));
                    }
                }*/
            
                //key += String(Number(key)+1);
                item = convert.shift(); // item =1
                output.push(result); // output ['2']
                if(convert.length==1) {
                    console.log("들어오나?");
                    let a = convert.pop();
                    
                    if(input[a]>input[item]){
                        output.push(a);
                        output.push(item);
                    }
                    else{
                        output.push(item);
                        output.push(a);
                    }
                    break;
                }
                console.log("convert:::" ,convert);
                continue;  // 2 2 1
            }
            /*
            else if (input[item] >= input[key] && count==size-1) {
                result = item;
                delete input[item]; 
                output.push(result);
                count = 0;
                break;
            }
            count++;*/
        };
    }
    //output.push(item);
    console.log("output: ",output);
    answer = output.indexOf(String(location)) +1;
    return answer;
}
console.log(solution([2, 1, 3, 2],2));
