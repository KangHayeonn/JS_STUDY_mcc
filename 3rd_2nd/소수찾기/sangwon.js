//try1
/*
function solution(numbers) {
    var answer = 0;
    var numbersSplit = numbers.split("");
    var newArr = [];
    for(var i = 0; i < numbersSplit.length; i++) {
        for(var j = 0; j < numbersSplit.length; i++) {
            if(i == j) newArr.push(numbersSplit[i]);
            else newArr.push(parseInt(numbersSplit[i] + numbersSplit[j]));
        }
    }
    return newArr;
}
const isPrime = (number) => {
    for(var i = 2; i < number; i++) {
        if(num % i === 0) return 0;
    }
    return 1;
}
*/
// => 실행시간 10초 초과

// 만들 수 있는 숫자의 경우 ==> 순열을 사용하자!


//try2
function solution(numbers) {
    var numbersSplit = numbers.split("");
    var newArr = [];
    for(var i = 0; i < numbersSplit.length; i++) {
        newArr[i] = permutation(numbersSplit, i+1);
    }
    
    var newArr2 = [...new Set(newArr.flat().map(v => v.join('')).filter(v => v != 0).map(v => parseInt(v)))];
    var answer = newArr2.map(v => isPrime(v)).filter(v => v == 1).length;
    return answer;
}

//소수 확인 함수
const isPrime = (number) => {
    if(number != 1) {
        for(var i = 2; i < number; i++) {
            if(number % i === 0) return 0;
        }  
        return 1;
    }else {
        return 0;
    }  
    
}

//순열 함수
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
