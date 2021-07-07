function solution(numbers, hand) {
    var answer = [];

    //키패드의 위치 2차원 배열의 형태로 나타냄
    var key = [[1,4,7,'*'], 
               [2,5,8,0], 
               [3,6,9,'#']];

    //초기 손가락 위치
    var nowL = '*';
    var nowR = '#';
    
    for(var i=0; i < numbers.length; i++) {
        //1, 4, 7 인 경우 -> L 출력
        if(key[0].includes(numbers[i])) {
            answer[i] = "L";
            nowL = numbers[i];
        //3, 6, 9 인 경우 -> R 출력
        } else if(key[2].includes(numbers[i])) {
            answer[i] = "R";
            nowR = numbers[i];
        } 
        
        //2, 5, 8, 0 인 경우
        if(key[1].includes(numbers[i])) {
                var distL = 0;
                var distR = 0;
                //왼쪽 손가락 위치에 따른 거리 계산
                if(nowL == '*') {
                    if(numbers[i] == 2) {
                        distL = 4;
                    } else if(numbers[i] == 5) {
                        distL = 3;
                    } else if(numbers[i] == 8) {
                        distL = 2;
                    } else if(numbers[i] == 0) {
                        distL = 1;
                    }
                } else if(nowL == 7) {
                    if(numbers[i] == 2) {
                        distL = 3;
                    } else if(numbers[i] == 5) {
                        distL = 2;
                    } else if(numbers[i] == 8) {
                        distL = 1;
                    } else if(numbers[i] == 0) {
                        distL = 2;
                    }
                } else if(nowL == 4) {
                    if(numbers[i] == 2) {
                        distL = 2;
                    } else if(numbers[i] == 5) {
                        distL = 1;
                    } else if(numbers[i] == 8) {
                        distL = 2;
                    } else if(numbers[i] == 0) {
                        distL = 3;
                    }
                } else if(nowL == 1) {
                    if(numbers[i] == 2) {
                        distL = 1;
                    } else if(numbers[i] == 5) {
                        distL = 2;
                    } else if(numbers[i] == 8) {
                        distL = 3;
                    } else if(numbers[i] == 0) {
                        distL = 4;
                    }
                } else if(nowL == 2) {
                    if(numbers[i] == 5) {
                        distL = 1;
                    } else if(numbers[i] == 8) {
                        distL = 2;
                    } else if(numbers[i] == 0) {
                        distL = 3;
                    }
                } else if(nowL == 5) {
                    if(numbers[i] == 2) {
                        distL = 1;
                    } else if(numbers[i] == 8) {
                        distL = 1;
                    } else if(numbers[i] == 0) {
                        distL = 2;
                    }
                } else if(nowL == 8) {
                    if(numbers[i] == 2) {
                        distL = 2;
                    } else if(numbers[i] == 5) {
                        distL = 1;
                    } else if(numbers[i] == 0) {
                        distL = 1;
                    }
                } else if(nowL == 0) {
                    if(numbers[i] == 2) {
                        distL = 3;
                    } else if(numbers[i] == 5) {
                        distL = 2;
                    } else if(numbers[i] == 8) {
                        distL = 1;
                    }
                }
                
                //오른쪽 손가락 위치에 따른 거리 계산
                if(nowR == '#') {
                    if(numbers[i] == 2) {
                        distR = 4;
                    } else if(numbers[i] == 5) {
                        distR = 3;
                    } else if(numbers[i] == 8) {
                        distR = 2;
                    } else if(numbers[i] == 0) {
                        distR = 1;
                    }
                } else if(nowR == 9) {
                    if(numbers[i] == 2) {
                        distR = 3;
                    } else if(numbers[i] == 5) {
                        distR = 2;
                    } else if(numbers[i] == 8) {
                        distR = 1;
                    } else if(numbers[i] == 0) {
                        distR = 2;
                    }
                } else if(nowR == 6) {
                    if(numbers[i] == 2) {
                        distR = 2;
                    } else if(numbers[i] == 5) {
                        distR = 1;
                    } else if(numbers[i] == 8) {
                        distR = 2;
                    } else if(numbers[i] == 0) {
                        distR = 3;
                    }
                } else if(nowR == 3) {
                    if(numbers[i] == 2) {
                        distR = 1;
                    } else if(numbers[i] == 5) {
                        distR = 2;
                    } else if(numbers[i] == 8) {
                        distR = 3;
                    } else if(numbers[i] == 0) {
                        distR = 4;
                    }
                } else if(nowR == 2) {
                    if(numbers[i] == 5) {
                        distR = 1;
                    } else if(numbers[i] == 8) {
                        distR = 2;
                    } else if(numbers[i] == 0) {
                        distR = 3;
                    }
                } else if(nowR == 5) {
                    if(numbers[i] == 2) {
                        distR = 1;
                    } else if(numbers[i] == 8) {
                        distR = 1;
                    } else if(numbers[i] == 0) {
                        distR = 2;
                    }
                } else if(nowR == 8) {
                    if(numbers[i] == 2) {
                        distR = 2;
                    } else if(numbers[i] == 5) {
                        distR = 1;
                    } else if(numbers[i] == 0) {
                        distR = 1;
                    }
                } else if(nowR == 0) {
                    if(numbers[i] == 2) {
                        distR = 3;
                    } else if(numbers[i] == 5) {
                        distR = 2;
                    } else if(numbers[i] == 8) {
                        distR = 1;
                    }
                }
            
            //오른쪽 손가락과 왼쪽 손가락에서 부터의 대상까지의 거리가 같을 경우
            if(distL == distR) {
                //왼손잡이면 L출력
                if(hand == "left") {
                    answer[i] = "L";
                    nowL = numbers[i];
                //오른손잡이면 R출력
                } else if(hand == "right") {
                    answer[i] = "R";
                    nowR = numbers[i];
                }
            //거리가 다를 경우
            } else {
                //오른쪽 손가락 부터의 거리가 더 짧으면 R 출력
                if(distL > distR) {
                    answer[i] = "R";
                    nowR = numbers[i];
                //왼쪽 손가락 부터의 거리가 더 짧으면 L 출력
                } else if(distR > distL) {
                    answer[i] = "L";
                    nowL = numbers[i];
                }
            }
        }
    }
    
    //배열 정리
    return answer.join('');
}
