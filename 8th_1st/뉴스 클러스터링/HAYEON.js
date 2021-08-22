// 8주차 1차시
// 뉴스 클러스터링

// 1. 문자를 모두 대문자로 통일
// 2. 두 글자씩 끊어서 다중 집합 만들기
// 3. 두 다중 집합 사이의 교집합과 합집합 구하기
// 4. 교집합과 합집합을 이용한 자카드 유사도 구하기 (교집합/합집합)
// 5. 유사도 * 65536 을 한뒤 소수점 아래를 버리고 정수부만 answer에 출력

// ver1 
// 교집합과 합집합이 모두 없는 경우와, 교집합은 없지만 합집합이 있는 경우를 분리

function solution(str1, str2) {
    var answer = 0;
    let intersection = 0;
    var a = str1.toUpperCase(); // 문자를 모두 대문자로 통일
    var b = str2.toUpperCase();
    
    const [s1, cnt1] = tokenize(a),
          [s2, cnt2] = tokenize(b);

    if(s1.size==0 && s2.size==0) return 65536;
    if((s1.size==0 && s2.size!=0) || (s1.size!=0 && s2.size==0)) return 0;
    
    for(let [key, value] of s1){
        if(s2.has(key)) intersection += Math.min(value, s2.get(key));
    }

    answer = Math.floor(65536*(intersection/(cnt1+cnt2-intersection)));
    return answer;
}

// 화살표 함수 사용법 : 자료형 함수이름 = 인수(매개변수 넣는값) => {함수 내용 작성 + return;}
const tokenize = str => {
    const tokens = new Map();
    let cnt = 0;
    for(let i=0; i<str.length-1;i++){
        if(/[A-Z]/.test(str[i]) && /[A-Z]/.test(str[i+1])){ 
            // 정규표현식 /[a-zA-Z0-9]{19}/
            // "a".test(문자열) : 문자열에 a 가 있는지 확인
            cnt++;
            const token = [str[i], str[i+1]].join('');
            tokens.set(token, tokens.has(token)? tokens.get(token)+1 : 1);
            // .set(key,value); 
            // .has(key) : 해당 key가 있는지 확인
            // .get(key) : 해당 key의 value를 의미
        }
    }

    return [tokens,cnt];
}

console.log(solution("E=M*C^2", "e=m*c^2"));
