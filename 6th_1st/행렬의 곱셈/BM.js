/*
  행렬의 곱셈 : 이차원 배열 두개를 입력 받아 두 배열의 곱값을 리턴
  
  작성일 : 2021.08.06
  작성자 : 강병민
  
*/


function solution(arr1, arr2){
  var answer = []
  var sum = 0
  var Sol = []
  for(var i=0; i<arr1.length; i++){
    for(var k=0; k<arr2[0].length; k++){
      for(var j=0; j<arr2.length; j++){
        sum = sum + arr1[i][j] * arr2[j][k]
      }
      Sol.push(sum)
      sum = 0
    }
    answer.push(Sol)
    Sol = []
  }
  return answer
}
