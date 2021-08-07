// 6주차 1차시
// 행렬의 곱셈

// 알고리즘 : 행렬의 곱셈은 앞의 행과 뒤의 열을 각각 곱하고 더해줌

// ver1 : 테스트케이스 다 실패 
// *** 해당부분 세번 수정 : arr1[0].length -> arr1.length -> arr2[0].length

// ver2 : 성공 (*** 부분을 제외한 나머지 코드는 ver1과 모두 동일)

function solution(arr1, arr2){
    var answer = [];
    var sum = 0;
    var count = 0;
    var arr =[];

    if(arr1[0].length==arr2.length){ // arr1 열의 개수 == arr2 열의 개수
 
        for(let i=0; i<arr1.length; i++){ // i 는 arr1의 행
          
            count++;

            for(let k=0; k<arr2[0].length; k++){ // k 는 arr2의 열
               
                for(let j=0; j<arr2.length; j++){ // j 는 arr1의 열이자 arr2의 행
                   
                    sum += arr1[i][j]*arr2[j][k];
                    
                    if(j==arr2.length-1){
                        arr.push(sum);
                        sum =0;
                    }
                }
            }

            if(arr.length==arr2[0].length){ // ***
                answer.push(arr);
                arr=[];
                count =0;
            }

        }
    }
    return answer;  
}

console.log(solution([[1, 2, 3], [4, 5, 6]],[[1, 4], [2, 5], [3, 6]]));
