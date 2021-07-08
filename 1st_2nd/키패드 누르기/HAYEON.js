// 1주차 2차시 
// 키패드 누르기

function solution(numbers, hand) {
    var answer = '';
    var left_hand, right_hand ;
    
    for(var i = 0; i<numbers.length ; i++){
        if(numbers[i]==1 || numbers[i]==4 || numbers[i]==7){
            answer.concat('L'); 
            left_hand = numbers[i];
        } 
        else if(numbers[i]==3 || numbers[i]==6 || numbers[i]==9){
            answer.concat('R');
            right_hand = numbers[i];
        }
        else if(numbers[i]==2 || numbers[i]==5 || numbers[i]==8 || numbers[i]==0){
            var distance = left_hand - right_hand;
            if(distance > 0){
                answer.concat('L');
                left_hand = numbers[i];
            }
            else if(distance < 0){
                answer.concat('R');
                right_hand = numbers[i];
            }
            else if(distance == 0){
                if(hand=="left"){
                    answer.concat('L');
                    left_hand = numbers[i]; 
                }
                if(hand=="right")
                {
                    answer.concat('R');
                    right_hand = numbers[i]; 
                }
            }
        }
    }
    return answer;
}

// 문제1 : answer 값이 null 값으로 나옴
// 원인 : concat은 문자열 원본이 바뀌지않음

function solution(numbers, hand) {
    var answer = '';
    var left_hand, right_hand ;
    
    for(var i = 0; i<numbers.length ; i++){
        if(numbers[i]==1 || numbers[i]==4 || numbers[i]==7){
            answer += 'L'; 
            left_hand = numbers[i];
        } 
        else if(numbers[i]==3 || numbers[i]==6 || numbers[i]==9){
            answer += 'R';
            right_hand = numbers[i];
        }
        else if(numbers[i]==2 || numbers[i]==5 || numbers[i]==8 || numbers[i]==0){
            var distance = left_hand - right_hand;
            if(distance > 0){
                answer += 'L';
                left_hand = numbers[i];
            }
            else if(distance < 0){
                answer += 'R';
                right_hand = numbers[i];
            }
            else if(distance == 0){
                if(hand=="left"){
                    answer += 'L';
                    left_hand = numbers[i]; 
                }
                if(hand=="right")
                {
                    answer += 'R';
                    right_hand = numbers[i]; 
                }
            }
        }
    }
    return answer;
}


// 문제2 : 왼손과 오른손 위치비교가 잘 되지않음 (거리상에 따라 다른 경우의수 필요)
// 원인 : 현재 왼손 오른손 의 위치를 비교 -> 주어진 숫자와 왼손과의 거리 vs 주어진 숫자와 오른손의 거리를 비교해야함

function solution(numbers, hand) {
    var answer = '';
    var left_hand, right_hand ;
    var distance_left, distance_right, distance;
    
    for(var i = 0; i<numbers.length ; i++){
        if(numbers[i]==1 || numbers[i]==4 || numbers[i]==7){
            answer += "L";
            left_hand = numbers[i];
        } 
        else if(numbers[i]==3 || numbers[i]==6 || numbers[i]==9){
            answer += "R";
            right_hand = numbers[i];
        }
        else if(numbers[i]==2 || numbers[i]==5 || numbers[i]==8 || numbers[i]==0){
            distance_left = Math.abs(numbers[i] - left_hand); // 절댓값 구하는 함수
            distance_right = Math.abs(numbers[i] - right_hand);
            distance = distance_left - distance_right;
            if(distance < 0){
                answer += "L";
                left_hand = numbers[i];
            }
            else if(distance > 0){
                answer += "R";
                right_hand = numbers[i];
            }
            else if(distance == 0){
                if(hand=="left"){
                    answer += "L";
                    left_hand = numbers[i]; 
                }
                if(hand=="right")
                {
                    answer += "R";
                    right_hand = numbers[i]; 
                }
            }
        }
    }
    return answer;
}

// 문제3 : 2-5, 4-5랑 거리가 같음

function solution(numbers, hand) {
    var answer = '';
    var left_hand, right_hand ;
    var distance_left, distance_right, distance;
    var arr = [[1,2,5],[5,2,3],[4,2,6],[4,2,8],[8,2,6],[7,2,9],[7,2,0][0,2,9],
                [4,5,2],[2,5,6],[4,5,8],[8,5,6],[1,5,0],[0,5,3],[1,5,3],[7,5,9],[7,5,0],[0,5,9],
                [5,8,0],[0,8,5],[7,8,5],[5,8,9],[2,8,6],[4,8,2],[4,8,6],[1,8,3],
                [7,0,9],[7,0,5],[5,0,9],[4,0,2],[4,0,6],[2,0,6],[1,0,3]]
    
    for(var i = 0; i<numbers.length ; i++){
        if(numbers[i]==1 || numbers[i]==4 || numbers[i]==7){
            answer += "L";
            left_hand = numbers[i];
        } 
        else if(numbers[i]==3 || numbers[i]==6 || numbers[i]==9){
            answer += "R";
            right_hand = numbers[i];
        }
        else if(numbers[i]==2 || numbers[i]==5 || numbers[i]==8 || numbers[i]==0){
            distance_left = Math.abs(numbers[i] - left_hand); // 절댓값 구하는 함수
            distance_right = Math.abs(numbers[i] - right_hand);
            distance = distance_left - distance_right;
            var new_arr = [left_hand, numbers[i], right_hand];
            if(distance < 0){
                answer += "L";
                left_hand = numbers[i];
            }
            else if(distance > 0){
                answer += "R";
                right_hand = numbers[i];
            }
            else if(distance == 0 || arr.includes(new_arr)){
                if(hand=="left"){
                    answer += "L";
                    left_hand = numbers[i]; 
                }
                if(hand=="right")
                {
                    answer += "R";
                    right_hand = numbers[i]; 
                }
            }
        }
    }
    return answer;
}
