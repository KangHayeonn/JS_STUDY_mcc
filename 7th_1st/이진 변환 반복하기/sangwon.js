function solution(s) {
    var countZero = 0;
    var count = 0;
    var k = s;
    
    while(k != 1) {
        var pos = k.indexOf('0');
        while(pos !== -1) {
            countZero++;
            pos = k.indexOf('0', pos + 1); 
        }
        var rmvZero = k.replace(/0/g,''); 
        
        k = rmvZero.length.toString(2);
        count++;
    }
    return [count, countZero];
}
