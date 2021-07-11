function solution(nums) {
    var unique = [];
    var count;
    var answer;
    count=nums.length;
    count/=2;
    unique=Array.from(new Set(nums));
    
    if(unique.length<=count) answer=unique.length; 
    else answer=count;
    return answer;
}
