// 6주차 1차시
// 캐시

// 알고리즘 : LRU 제일 참조된지 오래된 것을 뺀다.
// 도시이름을 반복문으로 돌려 캐시크기의 배열에 차례차례넣는다
// (1) 만약 해당 도시가 있으면 그 캐시를 빼고 그 캐시를 새로 push해준다. (cachehit : +1)
// (2) 만약 해당 도시가 없으면 제일 앞에있는 캐시를 shift하고 새로운 캐시를 push해준다. (cache miss : +5)
// 실행시간을 모두 더한 값을 answer로 출력

// ver1 : 11,16,19,20 테스트 실패

function solution(cacheSize, cities) {
    var answer = 0;
    var arr = [];
    
    cities.forEach(element => {
        var lower_element = element.toLowerCase();

        if(arr.length==cacheSize){
            if(arr.includes(lower_element)){  //해당 도시가 있는 경우 (cachehit)
                arr.splice(arr.indexOf(lower_element), 1);
                answer += 1;
            }
            else { // 해당 도시가 없는 경우 (cachemiss)
                arr.shift();
                answer += 5;
            }
        }
        
        else answer += 5;
        
        arr.push(lower_element);
    });

    return answer;
}

console.log(solution(5,[ "SEOUL", "SEOUL", "SEOUL"]));

// ver2 : 7, 17 실패
// 5,[ "SEOUL", "SEOUL", "SEOUL"] 해당 테스트 케이스를 추가

function solution(cacheSize, cities) {
    var answer = 0;
    var arr = [];
    
    cities.forEach(element => {
        var lower_element = element.toLowerCase();

        if(arr.length==cacheSize){
            if(arr.includes(lower_element)){  //해당 도시가 있는 경우 (cachehit)
                arr.splice(arr.indexOf(lower_element), 1);
                answer += 1;
            }
            else { // 해당 도시가 없는 경우 (cachemiss)
                arr.shift();
                answer += 5;
            }
        }

        else{ // cacheSize 가 비어있을때
            if(arr.includes(lower_element)){  //해당 도시가 있는 경우 (cachehit)
                arr.splice(arr.indexOf(lower_element), 1);
                answer += 1;
            }
            else { // 해당 도시가 없는 경우 (cachemiss)
                answer += 5;
            }
        }
        
        arr.push(lower_element);
    });

    return answer;
}

console.log(solution(5,[ "SEOUL", "SEOUL", "SEOUL"]));

// ver3 : 성공
// cacheSize가 0이고 ["LA", "LA"] 경우 6이 아닌 10이 나와야함

function solution(cacheSize, cities) {
    var answer = 0;
    var arr = [];
    
    cities.forEach(element => {
        var lower_element = element.toLowerCase();

        if(arr.length==cacheSize){
            if(arr.includes(lower_element)){  //해당 도시가 있는 경우 (cachehit)
                arr.splice(arr.indexOf(lower_element), 1);
                answer += 1;
            }
            else { // 해당 도시가 없는 경우 (cachemiss)
                arr.shift();
                answer += 5;
            }
        }

        else if(cacheSize==0) answer +=5;

        else{ // cacheSize 가 비어있을때
            if(arr.includes(lower_element)){  //해당 도시가 있는 경우 (cachehit)
                arr.splice(arr.indexOf(lower_element), 1);
                answer += 1;
            }
            else { // 해당 도시가 없는 경우 (cachemiss)
                answer += 5;
            }
        }
        
        arr.push(lower_element);
    });

    return answer;
}

console.log(solution(0, ["LA", "LA"]));
