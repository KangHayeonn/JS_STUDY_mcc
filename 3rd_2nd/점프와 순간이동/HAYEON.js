// 3주차 2차시
// 점프와 순간이동

function solution(n)
{
    var ans = 0;
    
    do{
        if (n%2==0) n = n/2;
        else {
            n = n-1;
            ans++;
        }
    } while(n > 0);

    return ans;
}
