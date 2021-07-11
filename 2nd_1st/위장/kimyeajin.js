function solution(clothes) {
    var answer = 0;
    var i,j=0,k;
    var filtered=[];
    var find,dele;
    var result=[];
    var sum=0,multi=1;
    var num;

    for(i=0;i<clothes.length;i++){
        find=clothes[i][1];
        dele=filtered.indexOf(find);
        
        if(dele!==-1){   //이미 가지고 있는 종류라면
            result[dele]=result[dele]+1;
        }
        else{            //새로운 종류라면
            result.push(1);
            j++;        //옷의 종류 몇개인지
            filtered.push(find);
        }
        
    }
    
    
   /* for(i=1;i<result.length+1;i++){  //곱할개수
        for(j=0;j<result.length-i+1;j++){ //시작위치
            for(k=j;k<result.length;k++){
                multi=1;
                multi*=result[k];
            }
           
            sum+=multi;
        }
        sum+=multi;
    }*/

    return sum;
}
