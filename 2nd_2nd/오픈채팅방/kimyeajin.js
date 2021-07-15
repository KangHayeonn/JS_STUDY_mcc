//1
function solution(record) {
    var answer = [];
    var idname={replacename : function(name){
        this[sepa[1]]=sepa[2];
    }};
    var situation=[]; //아이디 별 상황 기록함수
    
     for(let i of record){
        var sepa=i.split(" ");// sepa[0]: 상황, sepa[1]: 아이디, sepa[2]: 닉네임으로 나누어 보는 것
         
         if(idname[sepa[1]]&&(sepa[0]!=="Leave"))//들어오거나 바꾸는 순간 위에 아이디가 존재한 적이 있다면
             idname.replacename(sepa);  //기존 이름을 바꿔줌
         else{
             idname[sepa[1]]=sepa[2];//프로퍼티 추가  아이디 : 닉네임 으로 넣어줌
             }
         if(sepa[0]==="Enter")
         situation.push(sepa[1]+" 님이 들어왔습니다.");
         if(sepa[0]==="Leave")
         situation.push(sepa[1]+" 님이 나갔습니다.");
    }
    
    for(var i=0;i<situation.length;i++){
        sepa=situation[i].split(" ");
        //situation[i]=situation[i].replace(sepa[0],idname[sepa[0]]); //아이디를 이름으로 바꾸어줌
        answer.push(idname[sepa[0]]+sepa[1]+" "+sepa[2]);
        
    }

    
    return answer;
}


//2 if else if else if를 더 세세하게 나눠주어 성공!
function solution(record) {
    var answer = [];
    var idname={
        replacename : function(name){
        this[sepa[1]]=sepa[2];
    }};
    var situation=[];                   //아이디 별 상황 기록함수
    
     for(let i of record){
        var sepa=i.split(" ");          // sepa[0]: 상황, sepa[1]: 아이디, sepa[2]: 닉네임으로 나누어 보는 것
         
         if(idname[sepa[1]]&&(sepa[0]!=="Leave")){//들어오거나 바꾸는 순간 위에 아이디가 존재한 적이 있다면
             idname.replacename(sepa);  //기존 이름을 바꿔줌
             if(sepa[0]==="Enter")
             situation.push(sepa[1]+" 님이 들어왔습니다.");
         }
         else if(!idname[sepa[1]]){    //아예 처음 들어온 사람일 때
             idname[sepa[1]]=sepa[2]; //프로퍼티 추가  아이디 : 닉네임 으로 넣어줌
             if(sepa[0]==="Enter")
             situation.push(sepa[1]+" 님이 들어왔습니다.");
         }
             
         else if(sepa[0]==="Leave")
         situation.push(sepa[1]+" 님이 나갔습니다.");
}
    
    for(var i=0;i<situation.length;i++){
        sepa=situation[i].split(" ");
        //situation[i]=situation[i].replace(sepa[0],idname[sepa[0]]); //아이디를 이름으로 바꾸어줌
        answer.push(idname[sepa[0]]+sepa[1]+" "+sepa[2]); //아이디에 해당하는 닉네임으로 바꿔줌
        
    }

    
    return answer;
}
