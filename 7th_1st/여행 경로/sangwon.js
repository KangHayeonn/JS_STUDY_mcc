function solution(tickets) {
    var answer = [];
    
    var cur = "ICN"
    answer.push(cur);
    
    while(tickets.length > 0) {
        var compare = tickets.filter(v => v[0] === cur);
        if(compare.length > 1) {
            var compareCity = compare.map(v => v[1]).sort()[0];
            tickets.forEach((v,i) => {
                if(v[0] === cur && v[1] === compareCity) {
                    cur = compareCity;
                    answer.push(cur);
                    tickets.splice(i, 1);
                }
            });
        } else {
            tickets.forEach((v,i) => {
                if(v[0] === cur) {
                    cur = v[1];
                    answer.push(cur);
                    tickets.splice(i, 1);
                }
            });
        }
    }
    
    return answer;
}
//3,4번통과 1,2번 실행시간 초과

function solution(tickets) {
    var answer = [];
    
    var cur = "ICN"
    answer.push(cur);
    
    while(tickets.length > 0) {
        var compare = tickets.filter(v => v[0] === cur);
        if(compare.length > 1) {
            var cityFilter = compare.filter(value => tickets.filter(v => v[0] === value[1]).length > 0); //다음 항공권이 있는 경우 추가
            var compareCity = cityFilter.map(v => v[1]).sort()[0];
            
            tickets.forEach((v,i) => {
                if(v[0] === cur && v[1] === compareCity) {
                    cur = compareCity;
                    answer.push(cur);
                    tickets.splice(i, 1);
                }
            });
        } else {
            tickets.forEach((v,i) => {
                if(v[0] === cur) {
                    cur = v[1];
                    answer.push(cur);
                    tickets.splice(i, 1);
                }
            });
        }
    }
    
    return answer;
}

//2,3,4번 통과, 1번 실행시간 초과
