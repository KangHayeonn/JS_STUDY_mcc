function solution(s) { //aabbaccc
    var resultArr = [];
    
    for(let i = 1; i <= s.length; i++) { //1부터 문자열의 길이만큼 돌리기
        var newArr = [];
        var newString = s.split(""); //문자열을 글자 하나하나 잘라서 배열로 바꿔줌 => ["a","a","b","b","a","c","c","c"]
        
        while(newString.length != 0) { //배열의 길이가 0이 될 때 까지
            var k = newString.splice(0,i); //배열의 요소를 1개부터 문자열의 길이까지 잘라줌.
            newArr.push(k.join('')); //newArr이라는 배열에 푸쉬해줘서 새로운 배열로 만듬. 1번째 => ["a","a","b","b","a","c","c","c"] 2번째 => ["aa", "bb", "ac", "cc"] ... 마지막 8번째 => ["aabbaccc"]
        }
        
        for(let j = 0; j < newArr.length; j++) { //새로 만들어진 newArr의 길이만큼 돌려줌.
            var tmp = newArr[j]; //tmp라는 변수에 현재의 위치를 담아줌. 처음에는 "a"가 들어감.
            var cnt = 1;
            
            while(tmp === newArr[j + 1]) { //처음 위치의 문자열이 다음 위치의 문자열과 같은지 확인해줌 ex) a === a
                cnt++; //같은 것이 하나 이상 있으므로 카운트를 하나씩 올려줌
                tmp = newArr[j+1]; //현재 위치를 다음 위치로 이동(tmp에 저장)
                newArr.splice(j, 1); //이동해온 전 위치는 배열에서 삭제
                newArr[j] = cnt + newArr[j]; //현재 위치의 문자열 앞에 카운트도 출력되게 함.
            }
        }
        resultArr.push(newArr.join('').length); //resultArr이라는 배열에 새롭게 재배열된 newArr배열을 문자열로 바꿔주고, 그 문자열의 길이를 계산해서 푸쉬해줌.
    }
    return resultArr.sort((a, b) => a - b)[0]; //resultArr 배열 오름차순으로 정렬 후 첫번째 요소 리턴
}

//성공!
