function solution(numbers, hand) {
    var answer=[];
    var result=[];
    var i,l=-1,r=-1;
    var num=0;
    
    for(i=0;i<numbers.length;i++)
        {
            switch(numbers[i]){
                case 1:
                case 4:
                case 7:
                    {
                    result.push('L');
                    l=i;
                    break;
                    }
                case 3:
                case 6:
                case 9:
                    {
                    result.push('R');
                    r=i;
                    break;
                    }
                case 2:
                case 5:
                case 8:
                case 0:
                    {
                        if(r===-1) 
                           {
                               result.push('L'); 
                               l=i;
                               break;
                           }
                        if(l===-1)
                            {
                                result.push('R'); 
                                r=i;
                                break;
                            }
                        
                        num=(Math.abs(numbers[l]-numbers[i]))-(Math.abs(numbers[r]-numbers[i]));
                        
                        if(num>0) 
                            {
                            result.push('R'); r=i;
                            }
                        
                        else if(num<0) 
                            {
                            result.push('L'); l=i;
                            }
                        
                        else if(num==0)
                        {
                            if(hand=="left")
                                {
                                    result.push('L'); l=i;
                                }
                            
                            else
                                {
                                    result.push('R'); r=i;
                                }
                        }
                    }
                    
                    
            }
            
        }
    
     answer=result.join('');

    return answer;
}
