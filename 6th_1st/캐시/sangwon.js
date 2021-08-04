//1try
function solution(cacheSize, cities) {
    var answer = 0;
    var queue = [];
    
    for(let i = 0; i < cities.length; i++) {
        if(!queue.includes(cities[i].toLowerCase())) {
            answer += 5;
            queue.push(cities[i].toLowerCase());
            if(queue.length > cacheSize) {
                queue.shift();
            }
        } else {
            answer++;
        }
    }
    return answer;
}

//테스트 11, 15, 18, 19, 20 실패

//2try
function solution(cacheSize, cities) {
    var answer = 0;
    var cache = [];
    var lowCity = cities.map(v=> v.toLowerCase()); //도시 이름 전부 소문자로 변환
    
    for(let i in lowCity) {
        if(!cache.includes(lowCity[i])) { //캐시에 도시 정보가 없다면
            answer += 5;
            if(cacheSize != 0) cache.push(lowCity[i]); //캐시 사이즈 0일때 푸시 방지
            if(cache.length > cacheSize) { //캐시의 길이가 정해진 캐시사이즈 보다 커진다면, 가장 오래된 캐시 삭제
                cache.shift();
            }
        } else {//캐시에 도시 정보가 있다면
            answer++;
            cache.forEach((value, index) => { //이미 캐시에 있는 경우 그 값을 최근 캐시로 옮겨줌.
                if(value === lowCity[i]) {
                    cache.push(value);
                    cache.splice(index, 1);
                }
            })
        }
    }
    return answer;
}

//성공 ! 테스트케이스 계속 안 풀려서 노가다 했네,,
