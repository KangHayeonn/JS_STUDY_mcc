function solution(nums) {
    var select = nums.length/2; //골라야 하는 폰켓몬의 수 -> nums/2마리
    
    var uniq_arr = [];
    nums.forEach(e => !uniq_arr.includes(e) ? uniq_arr.push(e) : 0); //nums배열 중복 제거
    
    return select > uniq_arr.length ? uniq_arr.length : select;
    //중복을 제거한 배열의 개수와 골라야 하는 포켓몬의 수 비교

    //가장 많은 종류의 포켓몬을 선택하는 방법 -> 폰켓몬의 종류가 nums/2보다 크다면 nums/2리턴,
    //폰켓몬의 종류가 nums/2보다 작다면 중복을 제거한 배열 요소개수 리턴.
}
