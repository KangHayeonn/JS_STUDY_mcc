var orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
var course = [2,3,4];
solution(orders, course);

function solution(orders, course) {
    var answer = [];
    var newArr = [];
    var newStr = [...new Set(orders.map(v => v.split('')).flat())];
    for(var i of course) {
        newArr.push(getCombinations(newStr, i));
    }
    console.log(newArr);
    return newArr;
}

function getCombinations(arr, selectNumber) { //조합
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

//미완성 작성중..

function solution(orders, course) {
  var newArr = [];
  var answer = [];
  for(var i = 0; i < orders.length; i++) {
      var newStr = orders[i].split('');
      for(var j of course) {
          newArr.push(getCombinations(newStr, j));
      }    
  }
  var newnewArr = newArr.flat().map(v => v.join(''));
  
  for(var k of course) {
      var twoCount = {};
      var two = newnewArr.filter(v => v.length === k).forEach((v) => {
          twoCount[v] = (twoCount[v] || 0) + 1;
      });
      var max = Object.values(twoCount).sort((a,b) => {return b - a})[0];
      answer.push(Object.keys(twoCount).filter(v=>twoCount[v]==max?true:false)[0])
  }
  
  
  return answer;
}

function getCombinations(arr, selectNumber) { //조합
const results = [];
if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

arr.forEach((fixed, index, origin) => {
  const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
  const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
  const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
  results.push(...attached); // 배열 spread syntax 로 모두다 push
});

return results; // 결과 담긴 results return
}

//문제 잘못 이해함...

function solution(orders, course) {
  var newArr = [];
  var answer = [];
  for(var i = 0; i < orders.length; i++) {
      var newStr = orders[i].split('');
      for(var j of course) {
          newArr.push(getCombinations(newStr, j));
      }    
  }
  var newnewArr = newArr.flat().map(v => v.join(''));
  
  for(var k of course) {
      var twoCount = {};
      var two = newnewArr.filter(v => v.length === k).forEach((v) => {
          twoCount[v] = (twoCount[v] || 0) + 1;
      });
      var max = Object.values(twoCount).sort((a,b) => {return b - a})[0];
      if(max > 1) answer.push(Object.keys(twoCount).filter(v=>twoCount[v]==max?true:false));
  }
  
  
  return answer.flat().sort();
}

function getCombinations(arr, selectNumber) { //조합
const results = [];
if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

arr.forEach((fixed, index, origin) => {
  const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
  const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
  const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
  results.push(...attached); // 배열 spread syntax 로 모두다 push
});

return results; // 결과 담긴 results return
}

//주어진 배열(orders)의 요소 하나하나를 조합돌려서 새로운 배열로 만들고,
//그 배열에서 겹치는 값들의 개수를 다 세어주어 객체로 리턴한다.
//그 중 최댓값을 계산해서 최댓값을 가지는 요소의 key값을 answer에 push해준다.

function solution(orders, course) {
  var newArr = [];
  var answer = [];
  for(var i = 0; i < orders.length; i++) {
      var newStr = orders[i].split('').sort();
      for(var j of course) {
          newArr.push(getCombinations(newStr, j));
      }    
  }
  var newnewArr = newArr.flat().map(v => v.join(''));
  
  for(var k of course) {
      var twoCount = {};
      var two = newnewArr.filter(v => v.length === k).forEach((v) => {
          twoCount[v] = (twoCount[v] || 0) + 1;
      });
      var max = Object.values(twoCount).sort((a,b) => {return b - a})[0];
      if(max > 1) answer.push(Object.keys(twoCount).filter(v=>twoCount[v]==max?true:false));
  }
  
  
  return answer.flat().sort();
}

function getCombinations(arr, selectNumber) { //조합
const results = [];
if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

arr.forEach((fixed, index, origin) => {
  const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
  const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
  const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
  results.push(...attached); // 배열 spread syntax 로 모두다 push
});

return results; // 결과 담긴 results return
}

//성공! .sort()가 관건이였다.
