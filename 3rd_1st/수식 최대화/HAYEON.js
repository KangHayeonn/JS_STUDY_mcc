// 3주차 1차시
// 수식 최대화


// ver1
/*
function solution(expression) {
    let answer = [];
    const cases = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ];
    
    for(let i = 0; i < cases.length; i++) {
        let arr = expression.split(/(\D)/); // 숫자를 기준으로 문자열을 배열로 나눔 (지정한 구분자를 이용)
        console.log(arr);
        for(let j = 0; j < 3; j++) {
            while(arr.includes(cases[i][j])) {
                let index = arr.indexOf(cases[i][j]);
                arr.splice(index-1, 3, (new Function(`return ${arr.slice(index-1, index+2).join('')}`))());
              // splice : index-1 인덱스에서 3개 삭제 후 new Function 반환값 추가 (기존 요소 삭제 또는 교체하고 해당 부분 바뀔내용.)
              // slice : (a,b) a에서 b-1 인덱스까지 짜르기
              // join : 띄어쓰기 없이 붙임
              // 템플릿 문자열 (ECMAScript6) : `${}`  -> 내부 표현식이 되면 문자열 계산
                console.log("splice: " , arr);
            }
        }
        answer.push(arr);
        
    }
    
    return Math.max(...answer.map(num => Math.abs(num)));

    //map : 새로운 배열을 변환
}

console.log(solution("100-200*300-500+20"));
*/

// new Function(arg1,arg2,... AbortSignal, functionbody) : Function 객체 생성
// arg1~N : 식별자 , functionbody : 함수 몸통
// ** new 연산자 없이 Function 사용하면 , 함수로 Function 생성자 호출하는 것과 동일  





// ver2

function solution(expression) {
    const signFn = {
      //각 부호에 따른 함수
      '*': (num1, num2) => num1 * num2,
      '+': (num1, num2) => num1 + num2,
      '-': (num1, num2) => num1 - num2
    };
    let [arr, signArr] = tokenize(expression); //tokenize한 배열, 부호만 있는배열
    signArr = [...new Set(signArr)]; //부호 중복제거
    signArr = permutation(signArr, signArr.length); //부호의 모든 경우의수를 순열로 구함.
    let totNum = []; //각 경우의 계산결과의 합
  
    for (let sign of signArr) { //[ '-', '*', '+' ]
      const tmpArr = [...arr]; // 숫자, 부호 나눠져있는 배열
      for (let nowSign of sign) { //'-'
        for (let i = 0; i < tmpArr.length; i++) {
          if (tmpArr[i] === nowSign) { //"100-200*300-500+20"
            const calculated = signFn[tmpArr[i]](tmpArr[i - 1], tmpArr[i + 1]); // 100-200
            tmpArr[i - 1] = calculated; // tmpArr = [(-100)-200*300-500+20];
            tmpArr.splice(i, 2); //i번째인덱스에서 두개 요소 제거 // tmpArr = [-100*300-500+20];
            i = i - 1;
          }
        }
      }
      totNum.push(tmpArr[0]);
    }
    totNum = totNum.map((v) => Math.abs(v));
    return Math.max.apply(null, totNum);
  }

  function tokenize(str) {
    let arr = [];
    let signArr = [];
    let start = 0;
    for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i]))) { // 숫자가 아닌 값은 모두 NaN 
        arr.push(str.slice(start, i) * 1); // 연산 기호 앞 숫자 배열에 추가
        arr.push(str[i]); // 연산 기호 배열에 추가
        signArr.push(str[i]); // 연산 기호만 signArr에 추가
        start = i + 1; // 이전에 넣은 연산기호 바로 다음자리부터 숫자 세기 위해
      }
    }
    arr.push(str.slice(start) * 1); // 제일 마지막 숫자 추가
    return [arr, signArr];
  }

  function permutation(arr, selectNum) {
    let result = [];
    // [ '-', '*', '+' ]
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_ , index) => index !== idx); //언더스코어가 무슨뜻인지! (maybe value?)
      const permuteArr = permutation(restArr, selectNum - 1);
      const combine = permuteArr.map((v) => [fixer, ...v]);
      result.push(...combine);
    });
    console.log("결과: ",result);
    return result;
  }

  console.log(solution("100-200*300-500+20"));
