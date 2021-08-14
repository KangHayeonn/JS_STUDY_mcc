// 6주차 1차시
// 순위 검색


// ver1 : 정확성 테스트 8, 9, 10, 14, 15 빼고 다 실패

function solution(info, query) {
    var answer = [];
    var count =0;
    /*
    for(let i=0; i<query.length ; i++){
        const arr = query[i].split(" and ");
        console.log(arr);
        console.log(arr[0]);
    }*/
    let info_arr = [];
    let query_arr = [];
    info.forEach(element => info_arr.push(element.split(" ")));
    query.forEach(element => query_arr.push(element.split(" and ")));
    
    for(let i of query_arr){

        var idx = query_arr.indexOf(i);
        //query_arr[idx].splice(query_arr[idx].indexOf([i.length-1]), 1, query_arr[idx][i.length-1].split(" ").join());
        query_arr[idx].splice(query_arr[idx].indexOf([i.length-1]), 1, query_arr[idx][i.length-1].split(" "));
    }
    
    for(let k=0; k<query_arr.length; k++){
        for(let i=0; i<info_arr.length ; i++){
            for(let j=0; j<info_arr[0].length; j++){
                if(j==info_arr[0].length-2){
                    if(info_arr[i][j]==query_arr[k][j][0] || query_arr[k][j][0] == "-") count++;
                    //continue;
                }
                else if(j==info_arr[0].length-1){
                    if(Number(info_arr[i][j])>=Number(query_arr[k][j-1][1])) count++;
                    //continue;
                }
    
                else if(info_arr[i][j]==query_arr[k][j] || query_arr[k][j]=="-") {
                    count++;
                }
            }
            
            if(count==5) {
              
                if(answer[k]==null) answer[k] =1;
                else answer[k] += 1;

            }
            count = 0;
        }
    }
    
    
    return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));
