// 로직 : 'T 횟수가 많을수록 효율이 높아짐' -> N에서 역으로 T를 해오면 최소한의 J 횟수를 확인 가능 

function solution(n)
{
    var ans = 0;
    //var j_count = 0;

    while(n > 0){
        if(n % 2 == 0){n = n / 2;}
        else{
            n = (n - 1) /2;
            ans ++
        }
    }
    return ans;
}


