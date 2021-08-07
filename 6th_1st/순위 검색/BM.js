function solution(info, query) {
    var answer = [];
    var list = []
    
//    var arr1 = query[3].split(" ").filter(x => x != "and");
//    var arr2 = arr1.join().replace(/[^0-9]/g,'');
//arr.splice(0);
    
/*
    var query_N = query[1].replace(/[^0-9]/g,'');
    console.log(query_N);
    for(var j = 0;j < info.length; j++) {
        var info_N = info[j].replace(/[^0-9]/g,'');
        if(parseInt(info_N) >= parseInt(query_N)) {
            list.push(info[j]);
            }
    }

    console.log(list);
  */  
    
    //for(var i = 0; i < query.length; i++) {
        var query_N = query[1].replace(/[^0-9]/g,'');
        for(var j = 0; j < info.length; j++) {
            var info_N = info[j].replace(/[^0-9]/g,'');
            if(parseInt(info_N) >= parseInt(query_N)) {
                list.push(info[j]);
            }
        }
    
    //리스트는 정확하게 들어감 
    
    
        //차집합
        for(var g = 0; g < 4; g++) {
            if(S_query[g] != list[g])
        }
    
        var S_query = query[1].split(" ").filter(x => x != "and" );
        var Sol = S_query.filter(x => !list.includes(x));
        

        
    
    
    console.log(S_query);
    console.log(list);
    console.log(Sol);
    
    return answer;
    
    
}
