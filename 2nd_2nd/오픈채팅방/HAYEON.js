// 2주차 2차시
// 오픈채팅방

function solution(record) { 
    var answer = []; 
    var users = {}; 
    record.forEach(str => { 
        var [state, userId, nickname] = str.split(' '); // 문자열을 배열로 변환 
        
        if (str[0] === 'E') { 
            users[userId] = nickname; 
            answer.push([userId, '님이 들어왔습니다.']); 
        } else if (str[0] === 'L') { 
            answer.push([userId, '님이 나갔습니다.']); 
        } else { users[userId] = nickname; 
        } 
    }); 
    
    var result = answer.map(([userId, stateStr]) => users[userId] + stateStr); // 화살표 좌측값을 화살표 우측값으로 변환해 배열로 만들어줌
    return  result;
}

// 문자열 포함 방법을 바꿔봄

function solution(record) { 
    var answer = []; 
    var users = {}; 
    record.forEach(str => { 
        var [state, userId, nickname] = str.split(' '); // 문자열을 배열로 변환 
        
        if (str.includes("Enter")) { 
            users[userId] = nickname; 
            answer.push([userId, '님이 들어왔습니다.']); 
        } else if (str.includes("Leave")) { 
            answer.push([userId, '님이 나갔습니다.']); 
        } else { users[userId] = nickname; 
        } 
    }); 
    
    var result = answer.map(([userId, stateStr]) => users[userId] + stateStr); // 화살표 좌측값을 화살표 우측값으로 변환해 배열로 만들어줌
    return  result;
}
