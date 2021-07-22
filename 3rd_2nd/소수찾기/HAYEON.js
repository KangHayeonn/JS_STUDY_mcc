// 3주차 2차시
// 소수찾기

function solution(numbers){
	var answer = [];

	var set = new Set();
	prime_number(numbers, '');

	function prime_number(numbers, str){
		if(numbers.length !=0 ){
			for(let i=0; i<numbers.length; i++){
				let copy = [...numbers];
				copy.splice(i,1);
				prime_number(copy, str+numbers[i]);
			}
		}
		if(str > 0) set.add(Number(str));
	}

	//var list = [...set];
	var list = Array.from(set); // set을 array로 만들어 주기 위해 얕은 복사함

	for(let j of list){
        
		var check =0;

		if(j==1) continue;
		
		for(let k=2; k<j; k++){ // 소수인지 확인
			if(j%k == 0) check=1;
		}

		if(check==0){ //소수이면
			answer.push(j);
		}
	}
	return answer.length;
}
