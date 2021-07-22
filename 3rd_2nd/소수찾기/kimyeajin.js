//왜 안풀려어어어어어어어어어어어어어어어어어엉부셔어어어


function solution(numbers) {
    var answer = [];
   
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}
    var back=permutation(numbers);
   // console.isArray(back);
   /* const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });
       
    console.log(results)
    return results; // 결과 담긴 results return
    
}*/
    
  //  for(var i=0,num=[2,3 5 7];i<4;i++){
   //     if(result[]%num[i]===0){ answer++; break;}//소수아닌 경우 세기
   // }
   // const resultArr=getPermutations(numbers,numbers.length);
  //  return resultArr;
   // return numbers.length-answer;
    //return answer;
}
