// 3주차 1차시
// 타겟 넘버

// 순서 고려 x (배열 그 자체로 생각)

// (1) sum 을 이용해서 숫자를 더해가며 target 값 보다 크면 - (뺄셈)
// -> 해당 값을 큐에 저장 (push)
// -> 큐에서 하나씩 빼서 (shift) , 각각의 원소당 갯수를 셈 (객체로 만듦)
// (2) sum 이 target 값 보다 작으면 +(덧셈)
// (3) (1)에서 나온 key 값에 따른 각각의 value의 값을 곱함
// (4) (3)의 값을 return

// 1차 시도
/*
function solution(numbers, target) {
  var answer = 1;
  let visited = {}; // 탐색을 마친 노드들
  let needVisit = []; //탐색해야할 노드들
  let sum =0;
  let sum_2 = 0;
  let max_i = numbers.length;

  for(let i=0 ; i<numbers.length; i++){
    sum += numbers[i]; //sum = sum+i;
    if(sum <= target){
      sum = sum;
    }
    else{
      sum -= 2*numbers[i]; //sum = sum-i-i;  //위에서 더해준걸 한번 더 빼줌
      needVisit.push(numbers[i]);
    }
  }
 
  while(needVisit.length !== 0){
    const node = needVisit.shift(); // 큐이기 때문에 선입선출 -> shift()사용
    for(var j=0; j<max_i; j++){
      if(numbers.includes(node)){
        numbers.splice(numbers.indexOf(node),1); // 오류 : splice(node,1) -> splice(numbers.indexOf(node),1) 로 수정
        if(node in visited){
          //해당 node의 value값 하나 증가
          visited[node] += 1;
        }
        else{
          visited[node] = 1;
        }
      }
    }
  }
  for(var key in visited){
    answer *= visited[key];
  }
  return answer;
}

console.log(solution([2,3,3,2,2], 2));
*/
// 1차 시도 : 테스트 실패



// 2차 시도
/*
function solution(numbers, target) {
  var answer = 0;
  let visited = {}; // 탐색을 마친 노드들
  let needVisit = []; //탐색해야할 노드들
  let sum =0;
  let sum_2 = 0;
  let max_i = numbers.length;

  for(let i=0 ; i<numbers.length; i++){
    sum += numbers[i]; //sum = sum+i;
    if(sum <= target){
      sum = sum;
    }
    else{
      sum -= 2*numbers[i]; //sum = sum-i-i;  //위에서 더해준걸 한번 더 빼줌
      needVisit.push(numbers[i]);
    }
  }

  if(needVisit.length != 0){
    let node = needVisit.shift(); //선입선출
    for(let j=0; j<numbers.length; j++){
      if(numbers[j]==node){
        answer++;
      }
    }
  }
  
  return answer;
}

console.log(solution([1,1,1,1,1], 3));
*/
// 2차 시도 : 테스트 실패 (테스트 4,6 만 통과)


// 3차 시도 : DFS 이용 (재귀함수 사용 : 재귀호출 두번)
// DFS를 이용한 이유 : 이전 노드가 아니라 자기 자신과 연결되엇던 노드들 먼저 탐색
// 경우에 따라 모든 합차를 다 구할 수 있음 


//ver1) : 성공

function solution(numbers, target){
  var answer = 0;
  dfs(0,0);
  return answer;

  function dfs(count,sum){
    if(count==numbers.length){
      if(sum==target) answer++;
      return
    }
    dfs(count+1, sum+numbers[count]);
    dfs(count+1, sum-numbers[count]); 
  };
}
console.log(solution([3,4,2,5,6],10));

//ver2) 화살표 함수 : 실패 -> 생성자 함수로 사용할 수 없음
/*
function solution(numbers, target){
  var answer = 0;
  dfs(0,0);
  return answer;

  var dfs = (count,sum)=>{
    if(count==numbers.length){
      if(sum==target) answer++;
      return
    }
    dfs(count+1, sum+numbers[count]);
    dfs(count+1, sum-numbers[count]); 
  };
}
console.log(solution([3,4,2,5,6],10));
*/
// 프로토타입 선언으로 dfs를 뽑아냄 -> 실패
/*
var solution = function(numbers, target){
  var answer = 0;
  this.dfs(0,0);
  return answer;
}

solution.prototype.dfs = function(count,sum){
  if(count==numbers.length){
    if(sum==target){
      answer++;
    }
    return
  }
  this.dfs(count+1, sum+numbers[count]);
  this.dfs(count+1, sum-numbers[count]);
}

console.log(solution([3,4,2,5,6],10));
*/
