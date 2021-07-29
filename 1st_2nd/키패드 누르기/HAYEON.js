// 1주차 2차시 
// 키패드 누르기

/*
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
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2021-07-29 변경

// ver1 : 실패
// test 13~20 실패
// 피타고라스 정리를 이용해서 루트로 길이를 구함 (두점 사이의 거리 공식)

function solution(numbers, hand){
    var answer = '';
    const keypad = [[1,0],[0,3],[1,3],[2,3],[0,2],[1,2],[2,2],[0,1],[1,1],[2,1]]
    var right_hand = [2,0];
    var left_hand = [0,0];

    for(let i of numbers){
        if(i===1 || i===4 || i===7){
            left_hand=keypad[i];
            answer += "L";
        }
        else if(i===3 || i===6 || i===9){
            right_hand=keypad[i];
            answer += "R";
        }
        
        else if(i===2 || i===5 || i===8 || i===0){ // x2 : keypad[i][0] , y2 : keypad[i][1]
            //let distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
            
            // 피타고라스 정리
            let distance_r = Math.sqrt(Math.pow(keypad[i][0]-right_hand[0],2)+Math.pow(keypad[i][1]-right_hand[1],2)); 
            // x1 : right_hand[0] , y1: right_hand[1]

            let distance_l = Math.sqrt(Math.pow(keypad[i][0]-left_hand[0],2)+Math.pow(keypad[i][1]-left_hand[1],2));
            // x1 : left_hand[0] , y1: left_hand[1]

            if(distance_r>distance_l){
                left_hand = keypad[i]; 
                answer += "L";   
            }
            else if(distance_r<distance_l){
                right_hand = keypad[i];
                answer += "R";
            }
            else if(distance_r === distance_r){
                if(hand=="right"){
                    right_hand = keypad[i];
                    answer += "R";
                }
                else if(hand=="left"){
                    left_hand = keypad[i];
                    answer += "L";
                }
            }
            
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"right"));

// ver2 : 성공
// x 끼리의 직선거리 + y 끼리의 직선거리 로 구해줌

function solution(numbers, hand){
    var answer = '';
    const keypad = [[1,0],[0,3],[1,3],[2,3],[0,2],[1,2],[2,2],[0,1],[1,1],[2,1]]
    var right_hand = [2,0];
    var left_hand = [0,0];

    for(let i of numbers){
        if(i===1 || i===4 || i===7){
            left_hand=keypad[i];
            answer += "L";
        }
        else if(i===3 || i===6 || i===9){
            right_hand=keypad[i];
            answer += "R";
        }
        
        else if(i===2 || i===5 || i===8 || i===0){ // x2 : keypad[i][0] , y2 : keypad[i][1]
            //let distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
            
            // 각각 좌표의 직선상의 거리를 이용해서 distance 구하기
            let distance_r = Math.abs(keypad[i][0]-right_hand[0]) + Math.abs(keypad[i][1]-right_hand[1]); 

            let distance_l = Math.abs(keypad[i][0]-left_hand[0]) + Math.abs(keypad[i][1]-left_hand[1]);

            if(distance_r>distance_l){
                left_hand = keypad[i]; 
                answer += "L";   
            }
            else if(distance_r<distance_l){
                right_hand = keypad[i];
                answer += "R";
            }
            else if(distance_r === distance_r){
                if(hand=="right"){
                    right_hand = keypad[i];
                    answer += "R";
                }
                else if(hand=="left"){
                    left_hand = keypad[i];
                    answer += "L";
                }
            }
            
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"right"));
