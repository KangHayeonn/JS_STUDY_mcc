function solution(clothes) {
    var obj = 0;
    
    var k = clothes.map(e => e.pop());
    
    if(k.length != 1) {
        var counted = k.reduce(function (allNames, name) {
          if (name in allNames) {
            allNames[name]++;
          }
          else {
            allNames[name] = 1;
          }
          return allNames;
        }, {});

        obj = Object.values(counted).reduce((m,n) => m*n);
    }
    
    return k.length + obj;
} //이거 되는 경우, 안되는 경우가 있음 왜안되지;; 다시풀자


function solution(clothes) {
    var k = clothes.map(e => e.pop());
    
    var counted = k.reduce(function (allNames, name) {
          if (name in allNames) {
            allNames[name]++;
          }
          else {
            allNames[name] = 1;
          }
          return allNames;
    }, {});
    
    var obj = Object.values(counted).map(e => e+1).reduce((m,n) => m*n);
    
    return obj - 1;
}
